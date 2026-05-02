````
# 🚀 CI/CD Node.js App (Docker + GitHub Actions)

This project demonstrates a **Continuous Integration (CI) pipeline** for a Node.js application using Docker and GitHub Actions.

It automatically builds and pushes a Docker image to Docker Hub on every push to the `main` branch.

---

# 📌 Features

- Node.js + Express REST API
- Simple JSON-based data source
- Docker containerization
- Automated CI pipeline using GitHub Actions
- Docker image build + push to Docker Hub

---

# ⚠️ Important Note

This project currently includes **CI (Continuous Integration) only**.

It does NOT include automatic deployment (CD) yet.

Deployment can be added later using:
- Render
- AWS EC2
- Kubernetes
- DigitalOcean

---

# 🏗️ Project Structure

```text
ci-cd-node-app/
│
├── src/
│   ├── data/
│   │   └── users.json
│   ├── routes/
│   │   └── user.routes.js
│   ├── app.js
│   └── server.js
│
├── .github/
│   └── workflows/
│       └── docker-ci.yml
│
├── Dockerfile
├── package.json
├── .gitignore
├── .env
└── README.md
````

---

# ⚙️ Tech Stack

* Node.js
* Express.js
* Docker
* GitHub Actions
* Docker Hub

---

# 🚀 API Endpoints

## Root Endpoint

```http
GET /
```

Response:

```text
CI/CD Node API is running 🚀
```

---

## Get Users

```http
GET /api/users
```

Response:

```json
[
  {
    "id": 1,
    "name": "Ali",
    "role": "developer"
  },
  {
    "id": 2,
    "name": "Sara",
    "role": "designer"
  }
]
```

---

# 🐳 Docker Setup

## Build Image

```bash
docker build -t ci-cd-node-app .
```

## Run Container

```bash
docker run -p 3000:3000 ci-cd-node-app
```

App runs at:

```text
http://localhost:3000
```

---

# 🔁 CI Pipeline (GitHub Actions)

Every push to the `main` branch triggers:

```text
Code Push → GitHub Actions → Build Docker Image → Push to Docker Hub
```

---

## Workflow File

```text
.github/workflows/docker-ci.yml
```

---

## Pipeline Steps

1. Checkout repository
2. Login to Docker Hub
3. Build Docker image
4. Push Docker image to Docker Hub

---

# 🔐 GitHub Secrets Required

```text
DOCKER_USERNAME = your-dockerhub-username
DOCKER_PASSWORD = your-dockerhub-token
```

---

# 📦 Docker Image Usage

After successful CI run:

```bash
docker pull your-username/ci-cd-node-app:latest
```

---

# 📊 CI Flow Diagram

```text
Developer
   ↓ git push
GitHub Repository
   ↓ triggers
GitHub Actions Runner
   ↓ builds image
Docker Image
   ↓ pushes
Docker Hub
```

---

# 🧠 What This Project Demonstrates

* CI pipeline automation
* Docker-based application packaging
* GitHub Actions workflow
* Cloud-based build system

---

# 🚀 Future Improvements (CD Phase)

Planned upgrades:

* Deploy to Render / AWS / VPS
* Add automatic deployment (CD)
* Add test automation (Jest)
* Add staging & production environments
* Add versioned Docker tags
* Add rollback system

---

# 👨‍💻 Author

**Saad**
Learning CI/CD & DevOps Fundamentals 🚀

---

# 🧠 Key Concept

You now understand:

### ✔ CI = Build + Test + Package

### ❌ CD = Deploy to server

Current status:

```text
✔ CI completed
❌ CD not implemented yet
```



