import { useContext } from "react";
import { AuthContext } from "../context/Context";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { LogedUser, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (LogedUser) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
