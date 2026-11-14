# AskMaya website and Maya assistant

A website for Askmaya cleaning services.

Maya uses Google's official `@google/genai` SDK and Gemini Developer API through a small Node.js server. The API key stays on the server and is never sent to the browser. The server serves the website and the `/api/chat` endpoint from the same origin.

## Run locally

1. Install Node.js 20.12 or newer.
2. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/apikey).
3. Copy `.env.example` to `.env` and replace the example value with your key.
4. Run `npm start`, then open `http://127.0.0.1:3000`.

Do not open `code.html` directly with `file://`; the chat needs the local API server. Do not put the API key in `code.html` or commit `.env`.

The default model is `gemini-3.5-flash-lite`; override it with `GEMINI_MODEL` if needed. Chat requests use this model for service and package questions, booking inquiries, and other customer prompts. Rate limits and network errors return a retry/contact message rather than exposing provider details. The website and chat are served together, so deploy the Node server (or an equivalent server-side API route) rather than hosting only the HTML file. Use HTTPS for a public deployment and set `HOST=0.0.0.0` if the hosting platform requires it.

## Deploy to Render

The included `render.yaml` configures the whole website and chat API as one Render web service. Push the project folder to a GitHub or GitLab repository, then create a new Blueprint on Render and select that repository. When prompted, add `GEMINI_API_KEY` as a secret environment variable in Render; do not upload or commit `.env`. Render will install the locked dependencies, start the server, and check `/api/health`. The Blueprint uses Render's free plan, which may spin down after inactivity.

## Deploy to Vercel

The root `server.ts` entry point lets Vercel run the Node.js website and chat API together. From the project folder, run `npx vercel` and follow the prompts to link your Vercel account and create a project. Add `GEMINI_API_KEY` in the Vercel project's Settings → Environment Variables, then deploy with `npx vercel --prod`. The `.vercelignore` file prevents local environment files from being uploaded. The `render.yaml` file is only for Render and can remain in the project.

## Free-tier notes

Gemini API free-tier access, supported models, quotas, regional availability, and terms can change. Google currently lists free input/output tokens for some models, with limited access and content-use terms; review the [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) and [terms](https://ai.google.dev/gemini-api/terms) before sending customer conversations. The application also limits chat requests per client IP, but that is not a substitute for production monitoring or provider-side quota controls.

## Verify

Run `npm test` for the local server and Gemini service tests. Tests use a mocked SDK client and do not require a real API key.
