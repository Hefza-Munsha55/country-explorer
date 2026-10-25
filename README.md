# 🌍 Country Explorer

> A blazing-fast, modern country discovery app with real-time search, filtering, and resilient error handling. Built with performance and UX in mind.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/) [![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com) [![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

**🔗 Live Demo:** https://country-app.vercel.app
**📹 Video Demo:** LinkedIn Post Link

### ✨ Overview
Country Explorer solves the common CORS issues with country APIs by using a stable, reliable API. It provides instant search, region-based filtering, and handles all UI states (Loading, Error, Empty, Success) gracefully. This project was built as part of Zenvio Internship - Week 2 Task focusing on API integration and state management.

### 🚀 Features
| Feature | Implementation |
| :--- | :--- |
| **Data Fetching** | Async fetch with proper error boundaries |
| **Search** | Debounce-free real-time search by Name & Capital (case-insensitive) |
| **Filtering** | Region-based filter (All, Asia, Europe, Africa, Americas, Oceania) |
| **UX States** | Skeleton loaders, Error with Retry, No Results state |
| **Performance** | useMemo for filtered data, lazy image loading |
| **Design** | Dark mode, Inter font, CSS Grid, hover animations |

### 🛠️ Tech Stack
- **Core:** React 19, Vite 7, JavaScript (ES6+)
- **Styling:** Modern CSS3 - Flexbox, Grid, Animations, Custom Properties
- **API:** api.sampleapis.com - Stable, CORS-enabled
- **Tooling:** ESLint, Oxlint
- **Deployment:** Vercel CI/CD with GitHub

### 📸 UI States (Required for Task)
1.  **Loading:** 8 skeleton cards with pulse animation
2.  **Success:** Responsive card grid with flags, capital, region, population
3.  **Error:** Centered error box with Try Again button
4.  **Empty:** No results found for invalid search

### ⚡ Quick Start
```bash
# 1. Clone
git clone https://github.com/<your-username>/country-app.git
cd country-app

# 2. Install
npm install

# 3. Run Dev Server
npm run dev

# 4. Build
npm run build
🧠** Architecture Decisions**
Why sampleapis over restcountries?
 restcountries frequently throws CORS/network errors in production. sampleapis is more stable for deployment.
**Why useMemo?**
 Filtering runs on every keystroke. useMemo prevents re-filtering on unrelated re-renders.
**Why Custom CSS?**
No UI library overhead. Full control over skeleton animation and theming. Faster load.
**📁 Structure**
├── App.jsx   # All business logic: fetch, filter, UI states
├── App.css   # Theme, grid, cards, skeleton, responsive
└── main.jsx  # Entry
**🔮 Future Improvements**
Country detail page with border countries & languages
Dark/Light theme toggle
Pagination / Virtualization for 250+ countries
Add to favorites with localStorage
**👨‍💻 Author**
Hefza - Frontend Developer | Zenvio Intern
##GitHub: https://github.com/Hefza-Munsha55/country-explorer
##LinkedIn: www.linkedin.com/in/hefza-munsha-4a1b35381
Built with ❤️ using React + Vite. Deployed on Vercel.
