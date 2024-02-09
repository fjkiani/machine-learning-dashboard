# Machine Learning Dashboard

## Overview

The Machine Learning Dashboard is a comprehensive web application designed to visualize and interact with machine learning model predictions and their performance metrics. This project is structured into two main components: the client-side dashboard built with React and a machine learning server that processes and serves the data.

## Technical References

### Client

- **React**: The client-side dashboard is built using React, providing a dynamic and responsive user interface.
- **Vite**: Utilized for bundling and development server, offering fast rebuilds and optimized production builds.
- **TypeScript**: Ensures type safety and enhances development experience with static type checking.
- **ESLint**: Used to maintain code quality and consistency.
- **Custom Themes**: Supports theming with `expanded-theme.ts` for customizable UI appearance.

### Server

- **Node.js**: The backend server is built with Node.js, handling API requests and serving machine learning model predictions.
- **Express**: A minimal and flexible Node.js web application framework used to build the server's API endpoints.
- **Mongoose**: For modeling and working with MongoDB database, managing data related to KPIs, products, and transactions.

## Capabilities

- **Dashboard Visualization**: Interactive dashboard to visualize key performance indicators (KPIs), product performance, and transaction data.
- **Data Management**: Interfaces for managing and viewing the underlying data models including KPIs, products, and transactions.
- **Predictive Insights**: Utilizes machine learning models to provide predictive insights on data, viewable through the dashboard.

## Installation

1. Clone the repository:

git clone https://github.com/fjkiani/machine-learning-dashboard.git

cd machine-learning-dashboard/client
npm install

cd ../ml-server-89
npm install

2. Install dependencies for both client and server:

3. Start the client and server:

// In client directory
npm run dev

// In ml-server-89 directory
npm start


## Contributing

Contributions are welcome! Please refer to the repository's contribution guidelines for more details on how you can contribute to the development and improvement of the Machine Learning Dashboard.

