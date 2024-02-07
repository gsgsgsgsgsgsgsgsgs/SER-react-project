import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import paymentStore from '../../stores/PayStore';

const Pay = observer(() => {
  const handlePurchase = (e) => {
    e.preventDefault();

    // Accède aux valeurs du magasin MobX
    const {
      customerName,
      customerEmail,
      customerAddress,
      selectedProduct,
      numCard,
      nameBank,
      numPassword,
    } = paymentStore;

    // Effectue le traitement approprié avec les données récupérées
    console.log('Nom du client:', customerName);
    console.log('E-mail du client:', customerEmail);
    console.log('Adresse du client:', customerAddress);
    console.log('Nombre de SER:', selectedProduct);
    console.log('Numero de carte de credit:', numCard);
    console.log('Nom de la banque:', nameBank);
    console.log('Votre code:', numPassword);
  };

  return (
    <div>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
      <h2>Achat d'un objet</h2>
      <form onSubmit={handlePurchase}>
        <label>
          Nom du client:
          <input
            type="text"
            value={paymentStore.customerName}
            onChange={(e) => paymentStore.setCustomerName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          E-mail du client:
          <input
            type="email"
            value={paymentStore.customerEmail}
            onChange={(e) => paymentStore.setCustomerEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Adresse du client:
          <input
            type="text"
            value={paymentStore.customerAddress}
            onChange={(e) => paymentStore.setCustomerAddress(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Carte de credit:
          <input
            type="text"
            value={paymentStore.numCard}
            onChange={(e) => paymentStore.setNumCard(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Banque:
          <input
            type="text"
            value={paymentStore.nameBank}
            onChange={(e) => paymentStore.setNameBank(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Code:
          <input
            type="text"
            value={paymentStore.numPassword}
            onChange={(e) => paymentStore.setNumPassword(e.target.value)}
            required
          />
        </label>
        <br />
        {/* Ajoute les autres champs en utilisant le même modèle */}
        {/* ... */}
        <label>
          Nombre de produit à acheter:
          <select
            value={paymentStore.selectedProduct}
            onChange={(e) => paymentStore.setSelectedProduct(e.target.value)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <br />
        <button type="submit">Acheter</button>
      </form>
    </div>
  );
});

export default Pay;
