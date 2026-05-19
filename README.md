# Persistent Multi-Container Application

## Overview

This project demonstrates a production-style multi-container application deployment using:

- Node.js
- Docker
- Docker Compose
- Nginx Reverse Proxy
- Redis
- Docker Volumes
- Custom Docker Networks

The application stores page visit counts inside Redis with persistent Docker storage.

---

## Architecture

User → Nginx → Node.js App → Redis Volume

---

## Features

- Multi-container deployment
- Redis-based visit counter
- Persistent Redis storage
- Docker named volumes
- Custom Docker network
- Nginx reverse proxy
- Docker Compose orchestration

---

## Tech Stack

- Docker
- Docker Compose
- Node.js
- Redis
- Nginx
- Linux

---

## Project Structure

```bash
persistent-multi-container-app/
│
├── app/
│   ├── package.json
│   └── server.js
│
├── nginx/
│   └── default.conf
│
├── screenshots/
│
├── architecture/
│
├── Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## Deployment

Clone repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to project directory:

```bash
cd persistent-multi-container-app
```

Run containers:

```bash
docker-compose up --build -d
```

---

## Verify Running Containers

```bash
docker ps
```

---

## Docker Volume Verification

```bash
docker volume ls
```

Expected output:

```bash
redis-data
```

---

## Docker Network Verification

```bash
docker network ls
```

Expected output:

```bash
app-network
```

---

## Persistence Test

1. Open browser:

```bash
http://YOUR_VM_IP
```

2. Refresh page multiple times.

Example:

```bash
Page Visits: 25
```

3. Restart containers:

```bash
docker-compose down
docker-compose up -d
```

4. Open browser again.

The counter value remains unchanged because Redis data is stored using Docker volumes.

---

## Containers

This project runs:

- Node.js Application Container
- Redis Container
- Nginx Reverse Proxy Container

---

## Screenshots

### Running Containers
- docker-ps.png

### Browser Output
- browser-output.png

### Docker Volume
- docker-volume.png

### Docker Network
- docker-network.png

### Persistence Verification
- before-restart-counter.png
- after-restart-counter.png

---

## Future Improvements

- Kubernetes deployment
- CI/CD integration
- HTTPS support
- Monitoring with Prometheus & Grafana

---

## Author

Mohsin Qureshi  
DevOps Engineer
