import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://bfc23fa23f314b66817d5576fe6f304a@o4505010504400896.ingest.sentry.io/4505010505908224",
  integrations: [new Sentry.BrowserTracing()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <ToastContainer />
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
