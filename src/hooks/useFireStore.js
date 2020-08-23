import { useState, useEffect } from 'react'
import { firebaseFiresStore } from '../firebase/config';

export default function useFireStore(collection) {
  
  const [imagesCollection, setImages] = useState([]);

  useEffect(() => {
    const docs = firebaseFiresStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let imageCollection = [];
        snap.forEach((imageObj) => {
          imageCollection.push({ ...imageObj.data(), id: imageObj.id });
        });

        setImages(imageCollection);
      });

    return () => {
      docs()
    }

  }, [collection])
  
  return { imagesCollection };

}

