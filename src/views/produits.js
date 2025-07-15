import React , { Fragment }from 'react'
import '../style.css'
import './produits.css'
import handleAcheter from './home'
import handleProduits from './home'
import { Link } from 'react-router-dom'
import Footer4 from '../components/footer4'


import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'

const Produits = () => {
  // Données des produits
  const produits = [
    {
      id: 1,
      nom: "Crème Hydratante Dove",
      description: "Crème nourrissante pour une peau douce et hydratée toute la journée.",
      prix: "24.99€",
      stock: "En stock (15 unités)",
      imageSrc: "/images/dove1.jpg"
    },
    {
      id: 2,
      nom: "Gel Douche Evolu",
      description: "Gel douche parfumé pour une sensation de fraîcheur prolongée.",
      prix: "12.50€",
      stock: "En stock (32 unités)",
      imageSrc: "/images/evolu1.jpg"
    },
    {
      id: 3,
      nom: "Lotion Nivea",
      description: "Lotion corporelle pour une peau ultra-hydratée et soyeuse.",
      prix: "18.75€",
      stock: "En stock (8 unités)",
      imageSrc: "/images/nivea1.jpg"
    },
    {
      id: 4,
      nom: "Parfum Zara",
      description: "Eau de parfum élégante avec des notes florales et boisées.",
      prix: "29.99€",
      stock: "Stock limité (3 unités)",
      imageSrc: "/images/zara1.jpg"
    },
    {
      id: 5,
      nom: "Crème Topicrem",
      description: "Crème spéciale pour peaux sensibles et réactives.",
      prix: "22.40€",
      stock: "En stock (12 unités)",
      imageSrc: "/images/topicrem.jpg"
    },
    {
      id: 6,
      nom: "Déodorant Rexona",
      description: "Protection 48h contre les odeurs et la transpiration.",
      prix: "8.90€",
      stock: "En stock (25 unités)",
      imageSrc: "/images/rexona.jpg"
    },
    {
      id: 7,
      nom: "Baume Vaseline",
      description: "Soin intensif pour les zones très sèches et gercées.",
      prix: "7.50€",
      stock: "En stock (18 unités)",
      imageSrc: "/images/vaseline.jpg"
    },
    {
      id: 8,
      nom: "Gel Douche Wardi",
      description: "Gel douche bio à l'huile d'argan pour une peau nourrie.",
      prix: "15.20€",
      stock: "Rupture de stock",
      imageSrc: "/images/wardi.jpg"
    }
  ]

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
    <section className="thq-section-padding kl-produits-section">
      <div className="thq-section-max-width">
        <h1 className="thq-heading-1 kl-produits-title">Nos Produits Cosmétiques</h1>
        <p className="thq-body-large kl-produits-subtitle">
          Découvrez notre gamme exclusive de produits de beauté de haute qualité
        </p>

        <div className="thq-grid-auto-300 kl-produits-grid">
          {produits.map((produit) => (
            <div key={produit.id} className="thq-card kl-produit-card">
              <img 
                src={produit.imageSrc} 
                alt={produit.nom}
                className="thq-img-ratio-4-3 kl-produit-image"
              />
              <div className="kl-produit-content">
                <h3 className="thq-heading-3 kl-produit-nom">{produit.nom}</h3>
                <p className="thq-body-small kl-produit-description">{produit.description}</p>
                <div className="kl-produit-infos">
                  <span className="thq-body-small kl-produit-prix">{produit.prix}</span>
                  <span className={`thq-body-small kl-produit-stock ${produit.stock.includes("Rupture") ? "kl-rupture" : ""}`}>
                    {produit.stock}
                  </span>
                </div>
                <button className="thq-button-filled kl-produit-button">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
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

export default Produits