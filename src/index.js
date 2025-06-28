import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(...);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
