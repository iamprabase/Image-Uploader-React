import React from 'react';
import useFireStore from '../hooks/useFireStore';

export default function ImageGrid() {

  const { imagesCollection } = useFireStore('images');

  return (
    <>
      <div className="image-container">
        { imagesCollection && imagesCollection.map((image)=>{
          return <div className="image-view" key={ image.id }>
            <img src={image.url} />
          </div>
        }) }
      </div>
    </>
  )
}
