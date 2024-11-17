import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center text-center">
      <div>
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
          alt="Page non trouvée"
          style={{ width: "300px ", height: "auto", marginBottom: "20px" }}
        />
        <h2>
          Oups !!
        </h2>
        <p>
          La page que vous cherchez n'est pas trouvé sur ce serveur.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
