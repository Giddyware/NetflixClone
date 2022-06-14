import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import * as ROUTES from "../constants/routes";

// export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
//   let navigate = useNavigate();
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         element={() => {
//           if (!user) {
//             return children;
//           }
//           if (user) {
//             return navigate(`${loggedInPath}`);
//           }

//           // if (user) {
//           //   return <Navigate to={loggedInPath} replace />;
//           // }

//           return null;
//         }}
//       />
//     </Routes>
//   );
// };

// const useAuth = () => {
//   return true;
// };

// export const ProtectedRoutes = (props) => {
//   const auth = useAuth();

//   return auth ? <Outlet /> : <Navigate to="/login" />;
// };

export const RequireAuth = ({ user, children }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to={ROUTES.SIGN_IN} state={{ path: location.pathname }} />;
  }
  return children;
};
