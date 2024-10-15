import React from "react";
import './App.css';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  return (
    <div className="App">
      <SnackbarProvider autoHideDuration={2000} maxSnack={1}>
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
