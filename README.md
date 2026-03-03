# 🌊 EcoStream AI: Intelligent Printing & Packaging Solution

EcoStream AI is a state-of-the-art **Vertical SaaS platform** designed specifically for the Printing and Packaging industry. It leverages a microservices architecture and multiple specialized AI models to optimize margins and detect defects in real-time.

![EcoStream Banner](https://img.shields.io/badge/EcoStream--AI-Printing_SaaS-00cfba?style=for-the-badge)

## 🏗️ Architecture: The Orchestrated Brain

Instead of a monolithic approach, EcoStream AI uses a **Microservices Architecture** to ensure agility and specialized performance:

1.  **Vision Service (YOLOv8)**: Real-time defect detection for printing margins and quality assurance.
2.  **Forecasting Service (LSTM)**: Predictive time-series analysis for raw material costs (Paper, Ink, Jute).
3.  **Orchestrator (LangGraph)**: The decision-making hub that correlates vision alerts with market trends to provide actionable business insights.

## 🚀 Key Features

- **Standardized Defect Detection**: Automated quality control with high-precision YOLO models.
- **Dynamic Pricing Prediction**: Move from reactive to proactive with AI-driven material cost forecasting.
- **Smart Orchestration**: automated logic that suggests machine maintenance when defect rates spike alongside rising material costs.
- **Premium Visualization**: Individual metric tracking and trend analysis for factory managers.

## 🛠️ Technology Stack

- **AI Frameworks**: Ultralytics YOLOv8, TensorFlow (LSTM), Scikit-Learn.
- **Orchestration**: LangGraph, LangChain.
- **Backend**: FastAPI, Uvicorn (Asynchronous Python).
- **Frontend**: Next.js (Dashboard - *In Progress*).
- **Communication**: REST APIs (httpx).

## 📂 Project Structure

```bash
├── vision_service/      # YOLOv8 Defect Detection Service
├── forecasting_service/ # LSTM Price Prediction Service
├── orchestrator/        # LangGraph Business Logic Hub
├── data_generation/     # Dataset creation and metric plotting
└── yolov8n.pt           # Base model weights
```

## 📈 Current Status: Training Metrics
The model is currently undergoing rigorous training on local printing datasets. See [walkthrough.md](walkthrough.md) for detailed performance analysis.

---
*Created for the 2026 Printing & Packaging SaaS market.*
