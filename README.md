# 🧹 Ask Maya — Online Cleaning Services Platform

**Ask Maya** is a modern web application designed to streamline booking, pricing, and customer inquiries for residential and commercial cleaning services in Kampala, Uganda. Built with a responsive user interface, customized service workflows, and AI-assisted customer support, it helps clients explore packages and estimate service costs in just a few clicks.

🔗 **Live Demo:** [askmaya-cleaning-services.vercel.app](https://askmaya-cleaning-services.vercel.app)

---

## ✨ Key Features

- **Specialized Service Categories:** Dynamic submenus for Home Cleaning, Deep Cleaning, Office/Commercial Plans, and Move-In/Move-Out packages.
- **Interactive Booking & Billing Workflow:** Real-time service cost calculation based on property size, add-ons, and service frequency.
- **AI-Powered Assistant (Gemini API):** Built-in smart assistant to answer customer inquiries, recommend cleaning packages, and guide users through service options.
- **Mobile-First Responsive Design:** Optimized for seamless navigation and booking across smartphones, tablets, and desktops.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+) / React *(deployed on Vercel)*
- **Backend:** Node.js, Express.js *(Serverless API routes on Vercel)*
- **AI Integration:** Google Gemini API (`@google/generative-ai`)

---

## 📂 Project Structure

```text
askmaya-cleaning-services/
├── public/                 # Static assets, icons, and images
├── src/                    # Frontend components, stylesheets, and UI logic
├── api/                    # Node.js serverless endpoints (Gemini AI handler)
├── .env.example            # Template for required environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
