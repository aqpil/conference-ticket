import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        height: 130,
        border: "dashed",
        borderColor: "rgba(245, 245, 245, 0.7)",
        borderWidth: 2,
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDragActive ? "#e0f7fa" : "rgba(255, 255, 255, 0.09)",
        cursor: "pointer",
        position: "relative",
        textAlign: "center",
        padding: 10,
      }}
    >
      <input {...getInputProps()} />
      {photo ? (
        <img
          src={photo.preview}
          alt="Avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <p>
          <button
            style={{
              width: 55,
              height: 55,
              border: "none",
              borderRadius: "30%",
              backgroundColor: "rgba(255, 255, 255, 0.09)",
              borderStyle: "solid",
              borderColor: "rgba(245, 245, 245, 0.2)",
              borderWidth: 1,
            }}
          >
            <img src="/src/assets/images/icon-upload.svg" alt="Upload" />
          </button>
          <br />
          <strong
            style={{
              fontSize: 17,
              fontWeight: 100,
              marginTop: 50,
            }}
          >
            Drag and drop or click to upload
          </strong>
        </p>
      )}
    </div>
  );
}

// <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
