import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import imageStore from '../../stores/ImageStore';
import { Link } from 'react-router-dom';

const AddImage = observer(() => {
  const fileInputRef = useRef();

  const handleImageUpload = () => {
    const files = fileInputRef.current.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = event.target.result;
        imageStore.addImage(image);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
        <h1>Ajouter des image</h1>
      <input type="file" accept="image/*" multiple ref={fileInputRef} onChange={handleImageUpload} />
      <div>
     
        {imageStore.images?.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
});

export default AddImage ;


