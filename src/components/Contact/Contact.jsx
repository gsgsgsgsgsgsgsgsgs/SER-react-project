import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import contactStore from '../../stores/ContactStore';

const Contact = observer(() => {
  const handlePurchase = (e) => {
    e.preventDefault();
    console.log('Message:', contactStore.customerMessage);
    console.log('E-mail du client:', contactStore.customerEmail);
    // Ajoute ici la logique pour enregistrer les données ou envoyer un e-mail côté client
  };

  return (
    <div>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>

      <h2>Envoyer un mail</h2>

      <form onSubmit={handlePurchase}>
        <label>
          E-mail du client:
          <input
            type="email"
            value={contactStore.customerEmail}
            onChange={(e) => contactStore.setCustomerEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <input
            type="text"
            value={contactStore.customerMessage}
            onChange={(e) => contactStore.setCustomerMessage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
});

export default Contact;
