import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact-style.css";

const ContactPage: React.FC = () => {
  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Envoi de l'email avec EmailJS
    emailjs
      .send(
        "service_id", // Remplacez par votre Service ID
        "template_id", // Remplacez par votre Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "user_id" // Remplacez par votre User ID EmailJS
      )
      .then(
        () => {
          alert("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error: any) => {
          alert("Une erreur s'est produite lors de l'envoi du message.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container mb-5" style={{ marginTop: "70px" }}>
      {/* Bloc principal noir */}
      <div
        className="card contact-block"
      >
        <div className="row no-gutters">
          {/* Bloc Informations */}
          <div
            className="col-md-6 left-contact-block"
            style={{
              // borderRight: "1px solid #444",
              padding: "20px",
            }}
          >
            <div className="card-body">
              <h3 className="card-title text-center  mb-3">MISE EN CONTACT</h3>
              <hr className="mb-4" />
              <p className="card-text">
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:etskanteetfreres@gmail.com"
                  className="text-warning"
                >
                  etskanteetfreres@gmail.com
                </a>{" "}
              </p>
              <p className="card-text"></p>
              <p className="card-text"></p>
              <p className="card-text">
                <strong>Contact :</strong>{" "}
                <a href="tel:+224612157746" className="text-warning">
                  +224 612 15 77 46
                </a>
              </p>
              <hr className="mb-4 mt-4" />
              <p className="card-text">
                <strong>Au capital de :</strong> 10 000 000 GNF
              </p>
              <p className="card-text">
                <strong>Siège social :</strong> Madina Marche, Commune de Matam
              </p>
              <p className="has-text-weight-bold">République de Guinée</p>
            </div>
          </div>

          {/* Bloc Formulaire */}
          <div
            className="col-md-6"
            style={{
              padding: "20px",
            }}
          >
            <div className="card-body">
              <h3 className="card-title text-center mb-3">
                CONTACTEZ-NOUS
              </h3>
              <hr />
              <form onSubmit={handleSubmit}>
                {/* Champ Nom */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Champ Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Champ Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <div className="">
                  <button type="submit" className="btn btn-warning px-5 py-2">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
