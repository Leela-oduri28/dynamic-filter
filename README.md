# Dynamic Filter Component System

## Overview
This project demonstrates a reusable, type-safe dynamic filtering system built using React 18 and TypeScript.  
The focus is on clean architecture, configuration-driven design, and real-time client-side filtering.

---

## Scope Note
The assessment specification is extensive. Given the suggested **30–60 minute completion timeframe**, this implementation focuses on:

- Core filter architecture
- Type-safe state management
- Dynamic field, operator, and input rendering
- Real-time client-side filtering
- Support for nested object fields

The solution is intentionally designed to be **extensible**, allowing additional field types and operators to be added with minimal changes.

---

## Features Implemented

### Dynamic Filter Builder
- Add and remove multiple filter conditions
- Field-based dynamic operator selection
- Context-aware input rendering
- AND-based multi-filter logic
- Nested field filtering (e.g. `address.city`)

### Supported Field Types
- Text → Contains
- Number → Greater Than
- Boolean → Equals

---

## Data Handling
- Local JSON dataset with **50 records**
- Varied values for meaningful filtering
- Nested object support
- Real-time table updates

---

## Architecture Highlights
- Config-driven filter definitions
- Strong TypeScript typing
- Modular and reusable components
- Separation of UI, logic, and configuration
- Memoized filtering for performance optimization

---

## Folder Structure

src/
├─ components/
│ ├─ FilterBuilder/
│ ├─ DataTable/
├─ config/
├─ data/
├─ types/
├─ utils/
├─ App.tsx
└─ main.tsx


---

## Tech Stack
- React 18
- TypeScript
- Vite
- Material UI (v5)

---

## Setup Instructions

```bash
npm install
npm run dev
