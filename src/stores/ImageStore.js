import { makeObservable, observable, action } from 'mobx';

class ImageStore {
  images = [];

  constructor() {
    makeObservable(this, {
      images: observable,
      addImage: action,
      setImages: action,
    });

    // Récupérer les images depuis le localStorage lors de la création de l'instance
    const storedImages = localStorage.getItem('storedImages');
    if (storedImages) {
      this.setImages(JSON.parse(storedImages));
    }
  }

  addImage(image) {
    this.images.push(image);
    
    // Mettre à jour le localStorage avec les images actuelles
    localStorage.setItem('storedImages', JSON.stringify(this.images));
  }

  setImages(images) {
    this.images = images;
  }
}

const imageStore = new ImageStore();
export default imageStore;
