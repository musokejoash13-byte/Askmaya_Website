import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from './server.mjs';

let server;
let origin;
let capturedRequest;
let generateContentImpl;

before(async () => {
  server = createServer({
    apiKey: 'test-key',
    geminiClient: {
      models: {
        generateContent: async (params) => {
          capturedRequest = params;
          return generateContentImpl(params);
        }
      }
    }
  });
  generateContentImpl = async () => ({ text: 'Hello from Maya.' });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
});

test('serves the website from the same origin as the API', async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const page = await response.text();
  assert.match(page, /Chat with Maya/);
  assert.match(page, /src="\/askmaya_logo\.jpeg"/);
  assert.match(page, /Custom Quote/);
  assert.doesNotMatch(page, /UGX\s*[\d,]+/i);
  assert.doesNotMatch(page, /680,000/);
  const header = page.match(/<header[\s\S]*?<\/header>/)?.[0];
  assert.ok(header);
  const contactLinks = [...header.matchAll(/<a\b([^>]*)>Contact<\/a>/g)].map(([, attributes]) => attributes);
  assert.equal(contactLinks.length, 2);
  assert.ok(contactLinks.every((attributes) => /href="https:\/\/wa\.me\/256762465788\?text=/.test(attributes)));
  assert.ok(contactLinks.every((attributes) => !/target="_blank"/.test(attributes)));
  assert.doesNotMatch(header, /Book Online|tel:0762465788/);
  assert.match(page, /url\('\/assets\/hero-cleaning\.jpeg'\)/);
  assert.match(page, /tel:0762465788/);
  assert.match(page, /wa\.me\/256762465788/);
  assert.doesNotMatch(page, /href="https:\/\/wa\.me\/[^"]*"[^>]*target="_blank"/);

  const heroImageResponse = await fetch(`${origin}/assets/hero-cleaning.jpeg`);
  assert.equal(heroImageResponse.status, 200);
  assert.match(heroImageResponse.headers.get('content-type'), /image\/jpeg/);
  assert.ok((await heroImageResponse.arrayBuffer()).byteLength > 0);

  const logoResponse = await fetch(`${origin}/askmaya_logo.jpeg`);
  assert.equal(logoResponse.status, 200);
  assert.match(logoResponse.headers.get('content-type'), /image\/jpeg/);
  assert.ok((await logoResponse.arrayBuffer()).byteLength > 0);
});

test('uses the Gemini SDK without exposing the API key to the browser', async () => {
  const response = await fetch(`${origin}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'What services do you offer?',
      history: [{ role: 'user', parts: [{ text: 'Hello' }] }]
    })
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { reply: 'Hello from Maya.' });
  assert.equal(capturedRequest.model, 'gemini-3.5-flash-lite');
  assert.equal(capturedRequest.contents.at(-1).parts[0].text, 'What services do you offer?');
  assert.match(capturedRequest.config.systemInstruction, /AskMaya Cleaning Services/);
  assert.match(capturedRequest.config.systemInstruction, /general questions unrelated to cleaning/);
  assert.match(capturedRequest.config.systemInstruction, /Do not provide numeric prices/);
  assert.match(capturedRequest.config.systemInstruction, /Mrs Nalikka Sumaya Abubaker is the CEO and founder/);
  assert.match(capturedRequest.config.systemInstruction, /Mukasa Edrine is the Operations Manager/);
  assert.match(capturedRequest.config.systemInstruction, /Wambeewo Marvin is the Store Manager/);
  assert.match(capturedRequest.config.systemInstruction, /Musoke Joash is a Full Stack Developer and IT Expert/);
  assert.match(capturedRequest.config.systemInstruction, /Anderson Madwo-ntwa is described as the beloved son/);
  assert.match(capturedRequest.config.systemInstruction, /Magaja Brian as the coolest person/);
  assert.equal(capturedRequest.config.temperature, 0.4);
  assert.equal(capturedRequest.config.maxOutputTokens, 400);
  assert.doesNotMatch(await (await fetch(origin)).text(), /test-key/);
});

test('rejects invalid chat input before contacting Gemini', async () => {
  const response = await fetch(`${origin}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '   ' })
  });

  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /1 to 500 characters/);
});

test('returns a retry message when Gemini rate limits the request', async () => {
  generateContentImpl = async () => {
    throw Object.assign(new Error('Quota exceeded'), { status: 429 });
  };

  const response = await fetch(`${origin}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Can you recommend a cleaning package?' })
  });

  assert.equal(response.status, 429);
  assert.match((await response.json()).error, /try again in a minute/i);
});

test('returns a helpful fallback when the Gemini network request fails', async () => {
  generateContentImpl = async () => {
    throw new TypeError('fetch failed');
  };

  const response = await fetch(`${origin}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'I would like to ask about booking.' })
  });

  assert.equal(response.status, 502);
  assert.match((await response.json()).error, /could not reach the assistant service/i);
});
