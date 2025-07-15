import React from 'react'
import '../style.css'
import './Achat.css'

const Achat = () => {
  return (
    <section className="thq-section-padding kl-achat-section">
      <div className="thq-section-max-width kl-achat-container">
        <h1 className="thq-heading-1 kl-achat-title">Finalisez Votre Achat</h1>
        <p className="thq-body-large kl-achat-subtitle">
          Merci d'avoir choisi notre marque. Remplissez les informations ci-dessous pour compléter votre commande.
        </p>

        <form className="thq-flex-column kl-achat-form">
          <div className="thq-grid-2 kl-achat-grid">
            <input
              type="text"
              placeholder="Nom complet"
              className="thq-input kl-achat-input"
              required
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="thq-input kl-achat-input"
              required
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="thq-input kl-achat-input"
              required
            />
            <input
              type="text"
              placeholder="Produit"
              className="thq-input kl-achat-input"
              required
            />
          </div>

          <textarea
            placeholder="Adresse de livraison complète"
            className="thq-input kl-achat-textarea"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="thq-button-filled kl-achat-button"
          >
            Confirmer la Commande
          </button>
        </form>
      </div>
    </section>
  )
}

export default Achat