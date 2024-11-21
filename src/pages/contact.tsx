import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

const ContactPage: FunctionComponent = () => {
  return (
    <>
      {/* Inclure le lien CDN de Bulma et Font Awesome */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Helmet>

      <div className="container mt-5">
        <div className="box has-text-centered">
          <h1 className="title">KANTE & FRERES - SARLU</h1>
          <p className="subtitle">
            Société à Responsabilité Limitée Unipersonnelle
          </p>
          <p className="content">
            <strong>Au capital de :</strong> 10 000 000 GNF <br />
            <strong>Siège social :</strong> Madina Marche, Commune de Matam <br />
            <strong>Email :</strong>{" "}
            <a
              href="mailto:etskanteetfreres@gmail.com"
              className="has-text-link"
            >
              etskanteetfreres@gmail.com
            </a>{" "}
            <br />
            <strong>Contact :</strong>{" "}
            <a href="tel:+224612157746" className="has-text-link">
              +224 612 15 77 46
            </a>
          </p>
          <p className="has-text-weight-bold">République de Guinée</p>
        </div>

        <div className="box mt-5">
          <h2 className="title is-4 has-text-centered">Contactez-nous</h2>
          <form>
            {/* Champ Nom */}
            <div className="field has-text-centered">
              <label className="label" htmlFor="name">
                Nom
              </label>
              <div className="control has-icons-left">
                <input
                  className="input is-fullwidth"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            {/* Champ Email */}
            <div className="field has-text-centered">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  className="input is-fullwidth"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            {/* Champ Message */}
            <div className="field has-text-centered">
              <label className="label" htmlFor="message">
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea is-fullwidth"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
            </div>

            {/* Bouton Envoyer */}
            <div className="field is-grouped is-justify-content-center">
              <div className="control">
                <button type="submit" className="button is-link">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

