// PayStore.js
import { makeAutoObservable } from 'mobx';

class PaymentStore {
  customerName = '';
  customerEmail = '';
  customerAddress = '';
  selectedProduct = '';
  numCard = '';
  nameBank = '';
  numPassword = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCustomerName(name) {
    this.customerName = name;
  }

  setCustomerEmail(email) {
    this.customerEmail = email;
  }

  setCustomerAddress(address) {
    this.customerAddress = address;
  }

  setSelectedProduct(product) {
    this.selectedProduct = product;
  }

  setNumCard(card) {
    this.numCard = card;
  }

  setNameBank(bank) {
    this.nameBank = bank;
  }

  setNumPassword(password) {
    this.numPassword = password;
  }
}

const paymentStore = new PaymentStore();
export default paymentStore;
