import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ children, loggedInPath, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
