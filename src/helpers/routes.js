import { Route, Navigate } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => (
  <Route
    {...rest}
    element={() => {
      if (!user) {
        return children;
      }

      if (user) {
        return <Navigate to={loggedInPath} replace />;
      }

      return null;
    }}
  />
);
