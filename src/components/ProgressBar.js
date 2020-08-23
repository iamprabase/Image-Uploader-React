import React, { useEffect } from 'react';
import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  
  const { url, progress } = useStorage(file);
  
  useEffect(() => {
    if (url && progress === 100) {
      setFile(null);
      alert("File uploaded successfully.");
    }
  }, [url, progress, setFile])

  return (
    <>
      <div className="progress-bar" style={{ width: progress + '%' }}>
      </div>
    </>
  )
}
