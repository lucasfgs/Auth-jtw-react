import React, { useEffect } from "react";

import verifyToken from "../../utils/VerifyToken";

const Admin = props => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) props.history.push("/login");

      console.log(validToken);
    };

    validateToken();
  }, [props.history]);

  return <p>Olá você é um administrador!</p>;
};

export default Admin;
