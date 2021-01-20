import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import logo from "./assets/logo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
