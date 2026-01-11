# Dynamic Filter Component System

## Overview
This project demonstrates a reusable, type-safe dynamic filtering system built using React and TypeScript.  
The focus is on clean component architecture, configuration-driven design, and real-time client-side filtering.

---

## Scope Note
The original assessment specification is extensive.  
Given the suggested **30–60 minute completion timeframe**, this implementation focuses on:

- Core filter architecture
- Type-safe filter state management
- Dynamic rendering of fields, operators, and inputs
- Real-time client-side filtering
- Clean separation of concerns

The solution is intentionally designed to be **extensible**, allowing additional field types and operators to be added easily.

---

## Features Implemented

### Dynamic Filter Builder
- Add and remove multiple filter conditions
- Field selection with dynamic operator mapping
- Context-aware input rendering
- Real-time updates to filtered data

### Supported Field Types
- Text (Contains)
- Number (Greater Than)
- Boolean (Equals)
- Nested fields (e.g. `address.city`)

### Filtering Logic
- AND logic across multiple filters
- Case-insensitive text matching
- Numeric and boolean comparisons
- Nested object filtering using dot notation

### Data Table
- Displays filtered results in real time
- Shows “No results found” state
- Displays filtered vs total record count

---

## Architecture Highlights
- Configuration-driven filter definitions
- Strong TypeScript typing
- Reusable and modular components
- Separation of UI, logic, and configuration
- Memoized filtering for performance

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

------
Extensibility

# This system can be extended to support:
 - Date and range filters
 - Multi-select fields
 - Additional operators (IN, BETWEEN, NOT IN)
 - Filter persistence
 - Data export (CSV / JSON)

 - New functionality can be added by updating the filter configuration without changing core logic.

Summary
- This project showcases clean React architecture, strong TypeScript usage, and practical problem-solving within time constraints, while remaining scalable and maintainable.