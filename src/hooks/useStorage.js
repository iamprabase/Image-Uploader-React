import { useState, useEffect } from 'react';
import { firebaseStorage, firebaseFiresStore } from '../firebase/config';

export default function useStorage(file) {

  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * references
     */
    const fileName = file.name.split('.')[0];
    const fileExt = file.type.split("/")[1];
    const storageName = fileName + "_" + new Date().valueOf() + "." + fileExt;
    const storageRef = firebaseStorage.ref(storageName);
    const collectionRef = firebaseFiresStore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentageUpload = snap.bytesTransferred / (snap.totalBytes) * 100;
      setProgress(percentageUpload);
    }, (err) => {
      setError(err);
    }, async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({url, 'createdAt': new Date().toUTCString(), 'file_name': storageName});
      setUrl(url);
    })
  }, [file]);

  return { progress, url, error };
}
