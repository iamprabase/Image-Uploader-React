import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg"];

  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    /**
     * Check if file is selected
     * and validate if includes the extension with listed ones
     */
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      console.log(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid image type.");
    }
  };

  return (
    <>
      <form action="#">
        <label htmlFor="file-upload" className="custom-file-upload">
          +
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        <div className="centerAlign">
          {error && (
            <span className="error">
              <p>{ error }</p>
            </span>
          )}
          {file && (
            <span className="fileName">
              <p>{ file.name }</p>
            </span>
          )}
          {file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
      </form>
    </>
  );
}
