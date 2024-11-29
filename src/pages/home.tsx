import React, { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import "../styles/home-style.css";
import { FiArrowRight, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaBalanceScale, FaEuroSign, FaShieldAlt } from "react-icons/fa";
import bijou from "../assets/img/bijouOr.webp";
import pieces from "../assets/img/pieces.webp";
import lingot from "../assets/img/lingot.webp";
import profil from "../assets/img/profil.jpeg";

const HomePage: FunctionComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [goldRate, setGoldRate] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement
    const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs
  
    useEffect(() => {
      if (showModal) {
        setIsLoading(true); // Démarre le chargement
        setError(null); // Réinitialise les erreurs
  
        fetch("https://www.goldapi.io/api/XAU/USD", {
          headers: {
            "x-access-token": "goldapi-498iibysm3r40hqi-io"
          }
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Données de l'API GoldAPI :", data); // Log des données retournées par l'API
            setGoldRate(data.price); // Extraction du taux de l'or
            setIsLoading(false); // Arrête le chargement
          })
          .catch((error) => {
            console.error("Error fetching gold rate:", error);
            setError("Impossible de récupérer les données du taux de l'or.");
            setGoldRate(null);
            setIsLoading(false); // Arrête le chargement
          });
      }
    }, [showModal]);
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="header" className="hero-section">
        <div className="container">
          <div className="content">
            <h1>Votre spécialiste de l'achat d'or</h1>
            <p>
              Notre entreprise se spécialise dans l'exportation, l'exploration
              et la vente d'or en Guinée. <br />
              Obtenez le meilleur prix pour votre or. Évaluation gratuite et
              paiement immédiat.
            </p>
            <button className="cta-button" onClick={() => setShowModal(true)}>
              Estimation gratuite
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Gold Rate */}
      {showModal && (
        <div className="gold-rate-section">
          <div className="gold-rate-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Prévision du taux de l'or</h2>
            {isLoading ? (
              <p>Chargement...</p>
            ) : error ? (
              <p>Impossible de récupérer le taux de l'or.</p>
            ) : goldRate ? (
              <p>Le taux actuel de l'or est de {goldRate.toFixed(2)} $/oz.</p>
            ) : (
              <p>Aucune donnée disponible.</p>
            )}
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Nos Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaBalanceScale className="icon" />
              <h3>Estimation Précise</h3>
              <p>
                Évaluation professionnelle de votre or avec des instruments de
                précision certifiés.
              </p>
            </div>
            <div className="service-item">
              <FaEuroSign className="icon" />
              <h3>Meilleurs Prix</h3>
              <p>
                Nous vous garantissons les meilleurs prix du marché pour votre
                or.
              </p>
            </div>
            <div className="service-item">
              <FaShieldAlt className="icon" />
              <h3>Sécurité Garantie</h3>
              <p>
                Transaction sécurisée et confidentielle dans nos locaux
                surveillés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Comment ça marche ?</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="step-circle">1</div>
              <h3>Contactez-nous</h3>
              <p>Prenez rendez-vous par téléphone ou en ligne</p>
            </div>
            <div className="process-item">
              <div className="step-circle">2</div>
              <h3>Évaluation</h3>
              <p>Estimation gratuite de votre or</p>
            </div>
            <div className="process-item">
              <div className="step-circle">3</div>
              <h3>Proposition</h3>
              <p>Offre transparente basée sur le cours de l'or</p>
            </div>
            <div className="process-item">
              <div className="step-circle">4</div>
              <h3>Paiement</h3>
              <p>Paiement immédiat si vous acceptez l'offre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'or acceptés */}
      <section className="types-section">
        <div className="container">
          <h2>Ce que nous achetons</h2>
          <div className="types-grid">
            <div className="type-item">
              <img src={bijou} alt="Bijoux en or" />
              <h3>Bijoux en Or</h3>
              <p>Bagues, colliers, bracelets, tous carats acceptés</p>
            </div>
            <div className="type-item">
              <img src={pieces} alt="Pièces d'or" />
              <h3>Pièces d'Or</h3>
              <p>Napoléon, Souverain, Krugerrand et autres pièces</p>
            </div>
            <div className="type-item">
              <img src={lingot} alt="Lingots" />
              <h3>Lingots et Lingotins</h3>
              <p>Tous poids acceptés avec certificat</p>
            </div>
          </div>
        </div>
      </section>

      {/* profil section */}
      <span><h2>À propos de Moi </h2></span>
      {/* <div className="container" id="profil" >
      <div className="row">
      <div className="col-md-6 col-sm-12">
          <div className="biography">
            <h1>Mr Mohamed Fanta Kanté</h1>
            <p>Bonjour et bienvenue sur mon site de portfolio ! <br />
            Je suis un entrepreneur passionné avec une expertise pointue dans l'achat et la vente de l'or. <br /> 
            Fort de plusieurs années d'expérience dans ce domaine, j'ai développé une compréhension approfondie des marchés financiers et des métaux précieux.
            </p>
            <h3><b>Mes Compétences</b></h3>
              <ul>
                <li><b>Achat d'Or</b> : Expertise dans l'identification, l'évaluation et l'acquisition de l'or sous diverses formes (bijoux, lingots, pièces).</li>
                <li><b>Vente d'Or</b> : Stratégies de vente efficaces pour maximiser les profits tout en garantissant la satisfaction du client.</li>
                <li><b>Analyse de Marché</b> : Capacité à analyser les tendances du marché et à prévoir les fluctuations des prix des métaux précieux.</li>
                <li><b>Négociation</b> : Talents en négociation pour assurer des transactions avantageuses et sécurisées pour toutes les parties impliquées.</li>
              </ul>
              <h3><b>Mes Objectifs</b></h3>
              <p>
              Mon objectif est de fournir des services de qualité supérieure à mes clients et de devenir une référence dans le secteur de l'or. Que vous cherchiez à acheter ou vendre de l'or, je suis ici pour vous offrir des conseils d'expert et des solutions adaptées à vos besoins.
              </p>
          </div>
          </div>
          <div className="col-md-6 col-sm-12">
          <img src={profil} id="profil" alt="profil"/>

          </div>
        </div>
      </div> */}

      <section className="process-section" id="biography">
 
        <div className="container" id="biog">
          <div className="biography">
            <h1>Mr Mohamed Fanta Kanté</h1>
            <p>Bonjour et bienvenue sur mon site de portfolio ! <br />
            Je suis un entrepreneur passionné avec une expertise pointue dans l'achat et la vente de l'or. <br /> 
            Fort de plusieurs années d'expérience dans ce domaine, j'ai développé une compréhension approfondie des marchés financiers et des métaux précieux.
            </p>
            <h3><b>Mes Compétences</b></h3>
              <ul>
                <li><b>Achat d'Or</b> : Expertise dans l'identification, l'évaluation et l'acquisition de l'or sous diverses formes (bijoux, lingots, pièces).</li>
                <li><b>Vente d'Or</b> : Stratégies de vente efficaces pour maximiser les profits tout en garantissant la satisfaction du client.</li>
                <li><b>Analyse de Marché</b> : Capacité à analyser les tendances du marché et à prévoir les fluctuations des prix des métaux précieux.</li>
                <li><b>Négociation</b> : Talents en négociation pour assurer des transactions avantageuses et sécurisées pour toutes les parties impliquées.</li>
              </ul>
              <h3><b>Mes Objectifs</b></h3>
              <p>
              Mon objectif est de fournir des services de qualité supérieure à mes clients et de devenir une référence dans le secteur de l'or. Que vous cherchiez à acheter ou vendre de l'or, je suis ici pour vous offrir des conseils d'expert et des solutions adaptées à vos besoins.
              </p>
          </div>
          <div>
            <img src={profil} id="profil" alt="profil"/>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Contactez-nous</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <FiPhone className="icon" />
                  <p>(+224) 662-15-77-46</p>
                </div>
                <div className="contact-item">
                  <FiMapPin className="icon" />
                  <p>Madina Marché</p>
                </div>
                <div className="contact-item">
                  <FiClock className="icon" />
                  <p>Lundi - Samedi: 9h30 - 18h30</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre email" />
              <textarea placeholder="Votre message"></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <p>© 2024 KANTE & FRERES-SARLU. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

// background-color: rgb(209, 177, 116);
