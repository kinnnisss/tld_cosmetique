import React,{ Fragment } from 'react'
import '../style.css'
import './propos.css'

import handleAcheter from './home'
import handleProduits from './home'
import { Link } from 'react-router-dom'
import Footer4 from '../components/footer4'


import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'

const APropos = () => {
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
    <section className="thq-section-padding kl-about-section">
      <div className="thq-section-max-width kl-about-container">
        {/* Section Hero */}
        <div className="thq-flex-column kl-about-hero">
          <h1 className="thq-heading-1 kl-about-title">Notre Histoire</h1>
          <p className="thq-body-large kl-about-subtitle">
            Découvrez l'essence de notre marque et notre passion pour la beauté authentique
          </p>
          <div className="kl-about-hero-image thq-img-ratio-16-9"></div>
        </div>

        {/* Section Notre Mission */}
        <div className="thq-flex-column kl-about-mission">
          <h2 className="thq-heading-2 kl-about-section-title">Notre Mission</h2>
          <div className="kl-about-mission-container">
            <div className="kl-about-mission-content">
              <p className="thq-body-large kl-about-text">
                Fondée en 2015, notre entreprise s'est donnée pour mission de révolutionner 
                l'industrie cosmétique avec des produits à la fois innovants et respectueux 
                de la peau et de l'environnement.
              </p>
              <p className="thq-body-large kl-about-text">
                Nous croyons en une beauté qui célèbre l'authenticité plutôt que 
                la perfection artificielle. Chaque produit est conçu pour sublimer 
                votre beauté naturelle tout en prenant soin de votre peau.
              </p>
              <ul className="kl-about-mission-list">
                <li className="thq-body-large">
                  <span className="kl-about-mission-icon">✓</span> Formulations naturelles à 95%
                </li>
                <li className="thq-body-large">
                  <span className="kl-about-mission-icon">✓</span> Tests dermatologiques rigoureux
                </li>
                <li className="thq-body-large">
                  <span className="kl-about-mission-icon">✓</span> Emballages écologiques et rechargeables
                </li>
              </ul>
            </div>
            <div className="kl-about-mission-image-container">
              <img 
                src="/images/team1.jpg" 
                alt="Notre équipe en laboratoire"
                className="kl-about-mission-image thq-img-ratio-4-3"
                loading="lazy"
              />
              <div className="kl-about-mission-image-caption thq-body-small">
                Notre équipe de chercheurs en laboratoire
              </div>
            </div>
          </div>
        </div>

        {/* Section Nos Valeurs */}
        <div className="thq-flex-column kl-about-values">
          <h2 className="thq-heading-2 kl-about-section-title">Nos Valeurs Fondamentales</h2>
          <div className="thq-grid-3 kl-about-values-grid">
            <div className="thq-card kl-about-value-card">
              <div className="kl-about-value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <h3 className="thq-heading-3 kl-about-value-title">Qualité Inégalée</h3>
              <p className="thq-body-small kl-about-value-text">
                Des ingrédients rigoureusement sélectionnés et des formulations testées dermatologiquement 
                pour une efficacité maximale et une tolérance optimale.
              </p>
            </div>
            <div className="thq-card kl-about-value-card">
              <div className="kl-about-value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="thq-heading-3 kl-about-value-title">Engagement Durable</h3>
              <p className="thq-body-small kl-about-value-text">
                Emballages recyclables et formules biodégradables pour minimiser notre impact environnemental. 
                Nous visons la neutralité carbone d'ici 2025.
              </p>
            </div>
            <div className="thq-card kl-about-value-card">
              <div className="kl-about-value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="thq-heading-3 kl-about-value-title">Inclusivité</h3>
              <p className="thq-body-small kl-about-value-text">
                Des produits adaptés à tous les types de peau et à toutes les carnations. 
                Nous célébrons la diversité dans toute sa beauté.
              </p>
            </div>
          </div>
        </div>

        {/* Section Notre Équipe */}
        <div className="thq-flex-column kl-about-team">
          <h2 className="thq-heading-2 kl-about-section-title">Rencontrez Notre Équipe</h2>
          <p className="thq-body-large kl-about-team-text">
            Une équipe passionnée de chimistes, dermatologues et experts en beauté travaillent 
            sans relâche pour créer des produits exceptionnels qui respectent votre peau et la planète.
          </p>
          <div className="thq-grid-4 kl-about-team-grid">
            {[
              { 
                name: "Sophie Martin", 
                role: "Fondatrice & CEO", 
                image: "/images/team2.jpg",
                bio: "15 ans d'expérience dans l'industrie cosmétique, passionnée par les formulations naturelles."
              },
              { 
                name: "Jean Dupont", 
                role: "Directeur Scientifique", 
                image: "/images/team3.jpg",
                bio: "Docteur en chimie cosmétique, expert en actifs botaniques."
              },
              { 
                name: "Camille Leroy", 
                role: "Responsable R&D", 
                image: "/images/team4.jpg",
                bio: "Spécialiste en dermatologie cosmétique, elle veille à la tolérance de chaque formule."
              },
              { 
                name: "Thomas Moreau", 
                role: "Responsable Marketing", 
                image: "/images/team1.jpg",
                bio: "Expert en communication responsable, il assure notre engagement éthique."
              }
            ].map((member, index) => (
              <div key={index} className="thq-flex-column kl-about-team-member">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="thq-team-image-round kl-about-team-image"
                  loading="lazy"
                />
                <h4 className="thq-heading-3 kl-about-team-name">{member.name}</h4>
                <p className="thq-body-small kl-about-team-role">{member.role}</p>
                <p className="thq-body-small kl-about-team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="thq-flex-column kl-about-cta">
          <h2 className="thq-heading-2 kl-about-cta-title">Prêt à découvrir une nouvelle approche de la beauté ?</h2>
          <p className="thq-body-large kl-about-cta-subtitle">
            Explorez notre collection de produits conçus avec passion et éthique.
          </p>
          <button className="thq-button-filled kl-about-cta-button">
            Découvrir la Collection
          </button>
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
  )
}

export default APropos