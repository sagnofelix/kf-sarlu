import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    <div className="container" style={{ marginTop: "0px" }}>
      {/* Bloc principal noir */}
      <div
        className="card"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div className="row no-gutters">
          {/* Bloc Informations */}
          <div
            className="col-md-6 d-flex align-items-center"
            style={{
              borderRight: "1px solid #444",
              padding: "20px",
            }}
          >
            <div className="card-body text-center">
              <h1 className="card-title">MISE EN CONTACT</h1>
              <p className="card-text">
                <strong>Au capital de :</strong> 10 000 000 GNF <br />
                <strong>Siège social :</strong> Madina Marche, Commune de Matam <br />
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:etskanteetfreres@gmail.com"
                  className="text-warning"
                >
                  etskanteetfreres@gmail.com
                </a>{" "}
                <br />
                <strong>Contact :</strong>{" "}
                <a href="tel:+224612157746" className="text-warning">
                  +224 612 15 77 46
                </a>
              </p>
              <p className="has-text-weight-bold">République de Guinée</p>
            </div>
          </div>

          {/* Bloc Formulaire */}
          <div
            className="col-md-6 d-flex align-items-center"
            style={{
              padding: "20px",
            }}
          >
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Contactez-nous
              </h2>
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
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
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
