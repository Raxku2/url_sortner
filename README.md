<!-- Banner / Header -->
<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/GIFs/rocket-launch.gif" width="140px" alt="rocket launching">
</p> -->

<h1 align="center">✨🔗 URL Shortener API 🔗✨</h1>

<p align="center">
  <b>Fast • Secure • Modern — Shorten your URLs with ease using FastAPI & MongoDB 🚀</b>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10%2B-blue?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas%20Ready-brightgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative" />
  <img src="https://img.shields.io/badge/Status-Active-success?logo=github" />
</p>

---

## 🪄 Overview  

> A clean, developer-friendly API that converts long URLs into short, shareable links — lightning fast and database-ready.  

<!-- <p align="center">
  <img src="https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/GIFs/link-glow.gif" width="500px" alt="link glowing animation">
</p> -->

---

## ⚙️ Features  

✅ **Fast & Modern** — Powered by FastAPI’s async engine.  
✅ **Secure Token Generation** — Uses Python’s `secrets` for strong randomness.  
✅ **Persistent** — Stores data in MongoDB collections.  
✅ **Instant Redirects** — 1-click short link to original URL.  
✅ **Swagger UI Docs** — Auto-generated `/docs` route.  

---

## 🧠 Tech Stack  

| Component | Technology |
|------------|-------------|
| **Backend** | 🐍 FastAPI |
| **Database** | 🍃 MongoDB |
| **Language** | 💻 Python 3.10+ |
| **Environment** | ⚙️ Dotenv |
| **Package Manager** | 📦 Pip |

---

## 📁 Project Structure  

```bash
url-shortener/
│
├── main.py               # Main FastAPI app
├── .env                  # Environment variables (MONGO_URI)
├── requirements.txt      # Dependencies
└── README.md             # Project documentation
````

---

## 🧰 Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Raxku2/url_sortner.git
cd url-shortener
```

### 2️⃣ Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Create `.env` file

```env
MONGO_URI=your_mongodb_connection_uri
```

### 5️⃣ Run the app

```bash
uvicorn main:app --reload
```

Then open your browser at 👉 [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔥 API Endpoints

### 🔹 `POST /short`

**Shorten a long URL**

**Request**

```json
{
  "url": "https://example.com/long/link/to/shorten"
}
```

**Response**

```json
{
  "status": 200,
  "message": "recorded",
  "url": "http://localhost:8000/abc123XYZ"
}
```

---

### 🔹 `GET /{token}`

Redirects to the original long URL.
Example:

```
GET http://localhost:8000/abc123XYZ
```

→ Redirects to the full URL.

---

## 🧩 How It Works

<p align="center">
  <img src="https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/GIFs/data-transfer.gif" width="420px" alt="data transfer gif">
</p>

1️⃣ User sends a long URL.
2️⃣ A **10-character random token** is generated.
3️⃣ The token + URL pair is stored in MongoDB.
4️⃣ Visiting `/token` redirects the user to the original URL instantly.

---

## 🧾 Example `.env`

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
```

---

## 🌱 Requirements

```
fastapi
uvicorn
pymongo
python-dotenv
pydantic
```

---

## 🧠 Future Enhancements

* 🌐 Custom short link aliases
* 📊 Link analytics & click tracking
* 🔒 Authentication for private URLs
* 🕒 Link expiration & QR code support

---

## 💻 Author

<p align="center">
  <img src="https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/GIFs/coding-guy.gif" width="120px" alt="coding person">
</p>

<p align="center">
  <b>Developed by:</b> <a href="https://github.com/raxku2">Pinaka</a>  
  <br>
  🌐 <a href="https://linkedin.com/in/raxku2">LinkedIn</a> • 🧑‍💻 <a href="https://github.com/raxku2">GitHub</a>
</p>

---

## 📜 License

This project is licensed under the **MIT License**.

<p align="center">
  <img src="https://raw.githubusercontent.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/main/GIFs/stars.gif" width="150px" alt="stars gif">
</p>

<p align="center">⭐ Star this repository if you found it useful! ⭐</p>
```
