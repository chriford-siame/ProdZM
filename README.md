# ProdZM  Ecommerce Platform

## 📌 Overview
ProdZM is a React application built with TypeScript that fetches and displays product data from the Django API. It includes features such as product listing, search functionality, and real-time updates.

## 🏗️ Tech Stack
- **Frontend:** React.js, TypeScript, TailwindCSS & ShadCN
- **Backend API:** Django REST Framework
- **HTTP Client:** Axios

## 🚀 Features
- 📄 **Product Listing** – Displays a list of products from the backend.
- 🔎 **Search Functionality** – Allows users to search for products.
- ⚡ **Optimized Performance** – Uses indexed API data, lazy loading for efficient data fetching.
- 📡 **Real-time Updates** (if WebSockets or polling is used).

## 🔧 Setup & Installation
### 1️⃣ Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- product-zm Backend (Django API) running on  http://localhost:8000

### 2️⃣ Clone the Repository
```
git clone https://github.com/chriford-siame/ProdZM.git
cd ProdZM
```

### 3️⃣ Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### 4️⃣ Run the Development Server
```sh
npm start  # or yarn start
```
The app will be available at `http://localhost:3000/`.

## 🔗 API Integration
The frontend communicates with the backend via API calls in the django stack. Ensure the [Django backend](https://github.com/chriford-siame/product-zm.git) is running and accessible on http://localhost:8000

### 🔧 Setup & Installation (Backend)
[https://github.com/chriford-siame/product-zm.git](https://github.com/chriford-siame/product-zm.git)

## 🚀 Deployment
To build the app for production:
```sh
npm run build
```
Then deploy the `/build` folder to services like **Vercel, Netlify, or AWS S3**.

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Feel free to submit pull requests and open issues to improve the project!

## 📬 Contact
For support, reach out to **developersiame@gmail.com** or create an issue on GitHub.
