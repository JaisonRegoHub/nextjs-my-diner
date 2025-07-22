"use client";

import { useRef, useState } from "react";
import imagePickerStyles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handleImageSelection() {
    imageInputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return setPickedImage(null);

    const reader = new FileReader();
    reader.onload = () => setPickedImage(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className={imagePickerStyles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={imagePickerStyles.controls}>
        <div className={imagePickerStyles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by the user." fill />
          )}
        </div>
        <input
          className={imagePickerStyles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={imagePickerStyles.button}
          type="button"
          onClick={handleImageSelection}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
