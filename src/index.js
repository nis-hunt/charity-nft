import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { MoralisProvider } from "react-moralis";
// Figure out how to use url with .env
// const URL = process.env.REACT_APP_SERVER_URL;
// const ID = process.env.REACT_APP_APPLICATION_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MoralisProvider
      serverUrl="https://qxnr19wfrm6t.usemoralis.com:2053/server"
      appId="hQv9NWbPE7hg9kpC3yvbC25juFXnPBR5JEq42Eo8"
    >
      <App />
    </MoralisProvider> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
