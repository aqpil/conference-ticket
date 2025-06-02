import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./dnd.css";

export default function DragNDrop({ setAvatar }) {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        if (file.size > 500 * 1024) {
          setError("File too large. Please upload a photo under 500KB.");
          return;
        }

        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });

        setPhoto(fileWithPreview);
        setAvatar(fileWithPreview.preview); // Pass preview URL to parent
        setError("");
      }
    },
    [setAvatar]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  const removeImage = () => {
    setPhoto(null);
    setAvatar(null); // Clear avatar in parent
    setError("");
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

      <p id="dnd-info" className={`dnd-info ${error ? "error" : ""}`}>
        {error || "Upload your photo (JPG or PNG, max size: 500KB)."}
      </p>
    </>
  );
}
