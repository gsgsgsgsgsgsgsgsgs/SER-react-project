// ContactStore.js
import { makeAutoObservable } from 'mobx';

class ContactStore {
  customerMessage = '';
  customerEmail = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCustomerMessage(message) {
    this.customerMessage = message;
  }

  setCustomerEmail(email) {
    this.customerEmail = email;
  }
}

const contactStore = new ContactStore();
export default contactStore;
