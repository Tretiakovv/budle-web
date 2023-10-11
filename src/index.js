import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/global.css";
import Router from "./components/Router";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Router />
      </QueryClientProvider>
  </React.StrictMode>
);
