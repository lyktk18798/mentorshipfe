import React, { useEffect } from "react";

export default function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={`text-center alert alert-${type} py-0`} role="alert">
      {msg}
    </div>
  );
}
