import React, { useEffect } from "react";

import verifyToken from "../../utils/VerifyToken";

const Admin = props => {
  useEffect(() => {
    const validateToken = async () => {
      // let token = localStorage.getItem("token");
      // console.log(token);
      let validToken = await verifyToken();
      if (!validToken) props.history.push("/login");

      console.log(validToken);
    };

    validateToken();
  }, [props.history]);

  return <p>Olá você é um administrador!</p>;
};

export default Admin;
