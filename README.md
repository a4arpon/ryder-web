# Ryder-Web

## Project Overview

Front-End For the Taxi Management System. It provides real-time updates on driver and trip statuses, detailed trip information, and includes a robust dashboard with insights.

## Key Features
- **Real-Time Google Map Updates**: Real-time location updates of the taxi on Google Maps based on WebSocket data.
- **Driver Details**: View driver’s current status, location, and trip history.
- **Trip Details**: Comprehensive trip information, including current passenger, trip path, and live location updates.

## Key Technologies & Packages

| Package                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `axios`                    | Promise-based HTTP client for API requests and handling responses.          |
| `recharts`                 | Library for building charts for the dashboard analytics and insights.       |
| `swr`                      | Data fetching library for caching and updating data, enhancing UX.          |
| `@biomejs/biome`           | Code linter and formatter for consistent code style and error checking.     |
| `@tanstack/react-router`   | Advanced routing for dynamic pages like driver and trip details.            |
| `@vis.gl/react-google-maps`| Provides efficient interaction with Google Maps and mapping functionalities.|
| `@react-google-maps/api`   | Enables integration of Google Maps into the app, supporting map components. |

## Folder Structure

```plaintext
src
├── assets           # Static assets (e.g., CSS)
├── components       # Reusable UI components and pages
│   ├── extra        # Extra components (e.g., Login, SVGLibrary)
│   ├── pages        # Page components organized by domain
│   │   ├── dashboard  # Dashboard pages with trip and driver insights
│   │   ├── drivers    # Components for driver info and status display
│   │   ├── trips      # Trip-related components (e.g., CurrentLocation, TripInfo)
│   ├── shared       # Shared UI components (e.g., Sidebar, ThemeChanger)
│   └── ui           # UI-specific components and libraries
├── hooks            # Custom hooks (e.g., `useDrivers`, `useTrips`)
├── lib              # Utility functions and axios interceptor
├── providers        # Context providers (e.g., `IntentProvider`, `ThemeProviders`)
├── routes           # Route definitions and lazy-loaded routes
├── services         # API service modules
└── vite-env.d.ts    # Type definitions
```

### Key Components

- **Dashboard Components** (`components/pages/dashboard`): Includes `DriversStatus`, `EarningsInsights`, and `RecentTrips`.
- **Driver Components** (`components/pages/drivers`): Includes driver status and map components like `CurrentStatus` and `MapLocationComponent`.
- **Trip Components** (`components/pages/trips`): Provides `CurrentLocation`, `CurrentPassenger`, and `TripInfo` for trip details.
- **Shared Components** (`components/shared`): Common components like `Sidebar`, `ThemeChanger`, and loading skeletons.

## Installation and Setup

### Prerequisites

- Node.js (version 20.x or above)
- Yarn or npm

### Steps

1. **Clone the Repository**
   ```bash
   git clonehttps://github.com/a4arpon/ryder-web.git
   cd ryder-web
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   # or with npm
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following:

   ```plaintext
   VITE_GOOGLE_API_KEY=your_google_maps_api_key
   VITE_API_URL=http://127.0.0.1:8000/api
   ```

4. **Start Development Server**
   ```bash
   yarn dev
   # or with npm
   npm run dev
   ```

## Usage

### Google Maps Integration

- **Real-Time Map Updates**: The `CurrentLocation` component uses Google Maps API to display real-time updates on the taxi's location.
- **WebSocket Connection**: The app utilizes WebSocket at `ws://127.0.0.1:8000/ws/trip_updates/` for live updates on the taxi’s current location.

### Important Components and Hooks

- **Components**:
  - `CurrentLocation`: Displays the current location of the taxi on Google Maps.
  - `DriversStatus` and `PendingDashboard`: Dashboard components that show driver and trip statuses.
  - `TripInfo` and `CurrentPassenger`: Show detailed trip and passenger info.

- **Hooks**:
  - `useDrivers`: Fetches driver data and manages driver state.
  - `useTrips`: Fetches trip data and manages trip information.


## Deployment

- Netlify [Link](https://ryder-ctrl.netlify.app/)