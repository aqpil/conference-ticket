import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./dnd.css";

export default function DragNDrop() {
  const [photo, setPhoto] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setPhoto(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  const removeImage = () => {
    setPhoto(null);
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone-container ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {photo ? (
          <div className="preview-container">
            <button onClick={open} type="button" className="photo-button">
              <img
                src={photo.preview}
                alt="Uploaded"
                className="photo-preview"
              />
            </button>
            <div className="photo-actions">
              <button type="button" onClick={open} className="action-button">
                Change Image
              </button>
              <button
                type="button"
                onClick={removeImage}
                className="action-button"
              >
                Remove Image
              </button>
            </div>
          </div>
        ) : (
          <div className="upload-prompt">
            <button onClick={open} type="button" className="upload-icon-button">
              <img src="/src/assets/images/icon-upload.svg" alt="Upload" />
            </button>
            <strong className="upload-text">
              Drag and drop or click to upload
            </strong>
          </div>
        )}
      </div>
      <p id="dnd-info" className="dnd-info">
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </>
  );
}
