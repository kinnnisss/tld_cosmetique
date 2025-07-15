import React, {Fragment} from 'react';
import '../style.css';
import './contact.css'
import handleAcheter from './home'
import handleProduits from './home'
import { Link } from 'react-router-dom'
import Footer4 from '../components/footer4'


import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'

const Contact = () => {
  return (
    <div>
          
      <Navbar8 showButtons={false}
        page4Description={
          <Fragment>
            <span className="home-text100">
             Contactez-nous pour toute question, collaboration ou retour. Nous serions ravis de vous entendre.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
<button onClick={handleAcheter} className="home-button">
          Acheter Maintenant
        </button>         
         </Fragment>
        }
        link2={
          <Fragment>
            <a href="/produits" onClick={handleProduits} className="thq-link thq-text-primary">Produits</a>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Produits</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Bienvenue sur le site de notre marque de cosmétiques. Découvrez notre gamme de produits de haute qualité.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
             Explorez notre collection de soins de la peau et de produits de beauté conçus pour sublimer votre beauté naturelle.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
          <Link to="/propos" className="home-text110">
            À propos de nous
          </Link>
        </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">A propos de nous </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Découvrez l’histoire de notre marque, ses valeurs et son engagement pour la beauté et le développement durable.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">En savoir Plus</span>
          </Fragment>
        }
      ></Navbar8>
    <section className="thq-section-padding kl-contact-section">
      <div className="thq-section-max-width kl-contact-container">
        {/* Section Hero */}
        <div className="thq-flex-column kl-contact-hero">
          <h1 className="thq-heading-1 kl-contact-title">Contactez-nous</h1>
          <p className="thq-body-large kl-contact-subtitle">
            Nous sommes à votre écoute pour répondre à toutes vos questions sur nos produits cosmétiques.
          </p>
          <div className="kl-contact-hero-image thq-img-ratio-16-9"></div>
        </div>

        {/* Section Contact Principale */}
        <div className="thq-grid-2 kl-contact-main">
          {/* Formulaire de Contact */}
          <div className="thq-flex-column kl-contact-form-container">
            <h2 className="thq-heading-2 kl-contact-form-title">Envoyez-nous un message</h2>
            <form className="thq-flex-column kl-contact-form">
              <div className="kl-contact-form-group">
                <label htmlFor="name" className="thq-body-small kl-contact-label">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="thq-input kl-contact-input" 
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="kl-contact-form-group">
                <label htmlFor="email" className="thq-body-small kl-contact-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="thq-input kl-contact-input" 
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className="kl-contact-form-group">
                <label htmlFor="subject" className="thq-body-small kl-contact-label">Sujet</label>
                <select id="subject" className="thq-select kl-contact-select">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="product">Question sur un produit</option>
                  <option value="order">Suivi de commande</option>
                  <option value="return">Retour produit</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>
              <div className="kl-contact-form-group">
                <label htmlFor="message" className="thq-body-small kl-contact-label">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="thq-input kl-contact-textarea" 
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="thq-button-filled kl-contact-submit">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de Contact */}
          <div className="thq-flex-column kl-contact-info">
            <h2 className="thq-heading-2 kl-contact-info-title">Nos coordonnées</h2>
            <div className="thq-card kl-contact-info-card">
              <div className="kl-contact-info-item">
                <div className="kl-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="kl-contact-info-content">
                  <h3 className="thq-heading-3 kl-contact-info-heading">Email</h3>
                  <a href="mailto:contact@votremarque.com" className="thq-link kl-contact-info-link">
                    contact@votremarque.com
                  </a>
                </div>
              </div>
              <div className="kl-contact-info-item">
                <div className="kl-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="kl-contact-info-content">
                  <h3 className="thq-heading-3 kl-contact-info-heading">Téléphone</h3>
                  <a href="tel:+33123456789" className="thq-link kl-contact-info-link">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="kl-contact-info-item">
                <div className="kl-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="kl-contact-info-content">
                  <h3 className="thq-heading-3 kl-contact-info-heading">Adresse</h3>
                  <p className="thq-body-small kl-contact-info-text">
                    123 Rue de la Beauté<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Horaires d'ouverture */}
            <div className="thq-card kl-contact-hours">
              <h3 className="thq-heading-3 kl-contact-hours-title">Horaires d'ouverture</h3>
              <ul className="kl-contact-hours-list">
                <li className="thq-body-small kl-contact-hours-item">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </li>
                <li className="thq-body-small kl-contact-hours-item">
                  <span>Samedi</span>
                  <span>10h - 16h</span>
                </li>
                <li className="thq-body-small kl-contact-hours-item">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className="thq-flex-row kl-contact-social">
              <a href="#" className="kl-contact-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="kl-contact-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="kl-contact-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="kl-contact-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1628683206785!5m2!1sfr!2sfr" 
            className="kl-contact-map"
            allowFullScreen="" 
            loading="lazy"
            title="Carte de localisation"
          ></iframe>
        </div>
      </div>
    </section>
        <Footer4
                    link5={
                      <Fragment>
                        <span className="home-text212">FAQs</span>
                      </Fragment>
                    }
                    link3={
                      <Fragment>
                        <span className="home-text213">A propos de nous</span>
                      </Fragment>
                    }
                    link1={
                      <Fragment>
                        <span className="home-text214">Home</span>
                      </Fragment>
                    }
                    termsLink={
                      <Fragment>
                        <span className="home-text215">Terms &amp; Conditions</span>
                      </Fragment>
                    }
                    link2={
                      <Fragment>
                        <span className="home-text216">Produits</span>
                      </Fragment>
                    }
                    link4={
                      <Fragment>
                        <span className="home-text217">Nous Contacter</span>
                      </Fragment>
                    }
                    cookiesLink={
                      <Fragment>
                        <span className="home-text218">Cookies Policy</span>
                      </Fragment>
                    }
                    privacyLink={
                      <Fragment>
                        <span className="home-text219">Politique privée</span>
                      </Fragment>
                    }
                  ></Footer4>
    </div>
  );
};

export default Contact;