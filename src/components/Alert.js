import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="container my-2">
        <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
      </div>
    )
  );
};

export default Alert;
