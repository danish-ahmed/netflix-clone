import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Browse from "./pages/browse";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";

function App() {
  const user = {};
  return (
    <Router>
      <Route>
        <IsUserRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin />
        </IsUserRedirect>
      </Route>

      <Route>
        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup />
        </IsUserRedirect>
      </Route>

      <Route>
        <ProtectedRoute path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
