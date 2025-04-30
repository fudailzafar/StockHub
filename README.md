# 📈 StockHub

StockHub is a modern and responsive blogging platform designed to help users learn about stock markets in a structured way. Built with **Next.js, React, and Tailwind CSS**, this platform enables users to explore, create, and manage blog content related to financial markets.  

## 🚀 Features  

- **Dynamic Blog System** – Read and publish articles on stock market trends and financial insights.  
- **Admin Dashboard** – Manage blogs, subscriptions, and product listings with an easy-to-use admin panel.  
- **Seamless Navigation** – Powered by Next.js routing for an intuitive browsing experience.  
- **Optimized Performance** – Achieved a **98/92 (desktop/mobile) performance score** on Google PageSpeed Insights.  
- **Cloudinary Integration** – Effortlessly upload and manage images for blog posts.  

## 🛠️ Tech Stack  

- **Frontend:** Next.js (App Router), React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js (via API routes)  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS, Magic UI
- **Authentication & Security:** Clerk 

## 📂 Folder Structure  

```bash
fudailzafar-stockhub/
├── README.md                       # Project documentation
├── components.json                 # Component configuration
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Dependencies and scripts
├── app/                            # Next.js App Directory
│   ├── globals.css                 # Global styles
│   ├── layout.js                   # Main layout component
│   ├── page.js                     # Homepage entry
│   ├── admin/                      # Admin panel
│   │   ├── addProduct/page.jsx     # Add products
│   │   ├── blogList/page.jsx       # Manage blogs
│   │   ├── subscriptions/page.jsx  # Subscription management
│   ├── api/                        # API routes
│   │   ├── blog/route.js           # Blog API
│   │   ├── email/route.js          # Email API
│   └── blogs/[id]/page.jsx         # Dynamic blog pages
├── Components/                     # Reusable UI Components
│   ├── BlogList.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── AdminComponents/
│   │   ├── Sidebar.jsx
│   │   ├── BlogTableItem.jsx
│   ├── magicui/                    # Interactive UI components
│   │   ├── shimmer-button.jsx
│   │   ├── ripple-button.jsx
│   │   ├── animated-shiny-text.jsx
│   ├── BarLoader.jsx
├── lib/                            # Utility functions and config
│   ├── utils.js
│   ├── config/cloudinary.js
│   ├── config/db.js
│   ├── models/BlogModel.js
│   ├── models/EmailModel.js
└── public/                         # Static assets  
```

## 💻 Getting Started  

### Prerequisites  

Make sure you have:  
- **Node.js v14 or later**  
- **npm or yarn**  

### Installation  

Clone the repository:  
```bash
git clone https://github.com/fudailzafar/StockHub.git
cd StockHub
```

Install dependencies:  
```bash
npm install
```
or  
```bash
yarn install
```

Run the development server:  
```bash
npm start
```
or  
```bash
yarn start
```
Visit `http://localhost:3000` in your browser.

## 📦 Deployment  

To build the project for production:  
```bash
npm run build
```
This generates a `build/` folder with optimized static files, ready for deployment.  

## 🎯 Performance Scores  

✅ **Desktop:** **Performance (98), Accessibility (87), Best Practices (100), SEO (91)**  
✅ **Mobile:** **Performance (92), Accessibility (86), Best Practices (96), SEO (91)**  

## 📜 License  

This project is licensed under the **MIT License**.

---

**📢 Contributions are welcome!** Feel free to fork this repository, submit issues, or open pull requests. 🚀  
