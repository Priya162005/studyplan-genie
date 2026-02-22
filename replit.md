# Study Plan Genie

## Overview
A web application that generates personalized study plans based on user inputs like subject, topics, difficulty level, duration, and study schedule preferences.

## Project Architecture
- **Framework**: React with Vite
- **Language**: JavaScript (JSX)
- **Port**: 5000 (dev server)

### Directory Structure
```
src/
  components/
    StudyPlanForm.jsx   - Form for collecting study preferences
    StudyPlan.jsx       - Displays the generated study plan
  utils/
    planGenerator.js    - Logic for generating study plans
  App.jsx              - Main app component
  App.css              - App styles
  index.css            - Global styles
  main.jsx             - Entry point
```

## Recent Changes
- **2026-02-22**: Initial project setup with Vite + React. Built study plan form, plan display, and plan generation logic.

## Deployment
- Static deployment using `npm run build` with output in `dist/`
