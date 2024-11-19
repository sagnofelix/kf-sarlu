
import { FunctionComponent } from "react";
import "../styles/contact-style.css";

const ContactPage: FunctionComponent = () => {

    return (
    <div className="contact-container" >
              {/* Bloc 1 : Informations de l'entreprise */}
      <div className="company-info">
        <h1>KANTE & FRERES - SARLU</h1>
        <p className="subtitle">Société à Responsabilité Limitée Unipersonnelle</p>
        <p className="details">
          <strong>Au capital de :</strong> 10 000 000 GNF <br />
          <strong>Siège social :</strong> Madina Marche, Commune de Matam <br />
          <strong>Email :</strong>{" "}
          <a href="mailto:etskanteetfreres@gmail.com">
            etskanteetfreres@gmail.com
          </a>{" "}
          <br />
          <strong>Contact :</strong>{" "}
          <a href="tel:+224612157746">+224 612 15 77 46</a>
        </p>
        <p className="footer">République de Guinée</p>
      </div>

      {/* Bloc 2 : Formulaire de contact */}
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      </div>

    </div>)
}

export default ContactPage;
