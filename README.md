# 🔗 URL Shortener

A full-stack URL shortening web application built with Node.js, Express, and MongoDB. Paste any long URL and get a clean, shareable short link in seconds.

> 🤖 **Frontend UI is AI-assisted** — The interface was designed and generated with the help of AI tools, enabling a polished user experience with minimal manual CSS overhead.

---

## ✨ Features

- Shorten any long URL to a compact, shareable link
- Redirect users seamlessly from the short URL to the original
- Clean and responsive frontend interface
- MVC architecture for organized, maintainable code
- Persistent storage with MongoDB

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Templating | EJS |
| Database | MongoDB + Mongoose |
| Styling | CSS |
| Architecture | MVC (Model-View-Controller) |

---

## 📁 Project Structure

```
url_shortner/
├── controllers/      # Request handling logic
├── models/           # Mongoose schema definitions
├── routes/           # Express route definitions
├── views/            # EJS templates (frontend)
├── public/           # Static assets (CSS, images)
├── connection.js     # MongoDB connection setup
└── index.js          # App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TheCodieCoder/url_shortner.git
   cd url_shortner
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=8000
   ```

4. **Start the server**

   ```bash
   node index.js
   ```

5. **Open in your browser**

   ```
   http://localhost:8000
   ```

---

## 📌 How It Works

1. User submits a long URL through the web interface.
2. The server generates a unique short code and stores the mapping in MongoDB.
3. When a short URL is visited, the server looks up the original URL and redirects the user instantly.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

<p align="center">Built with ❤️ by <a href="https://github.com/TheCodieCoder">Misbah Rahman</a></p>
