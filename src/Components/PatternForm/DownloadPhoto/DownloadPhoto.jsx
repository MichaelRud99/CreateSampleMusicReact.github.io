import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { enterAlbumPhoto } from "../../../utils/redux/inputFields/albumPhotoSlice";
import patternForm from "../patternForm.module.css";

const DownloadPhoto = () => {
   const dispatch = useDispatch();

   const [big, setBig] = useState(false);

   const download = () => {
      const div = document.querySelectorAll("div");
      const imgInp = div[16].querySelector("#imgInp");
      const paragraf = div[16].querySelector("p");

      imgInp.onchange = (evt) => {
         const [file] = imgInp.files;
         if (file) {
            paragraf.innerText = file.name;
            if (file.size / 1024 > 70) {
               setBig(true);
            } else {
               setBig(false);
            }
            let reader = new FileReader();
            reader.onloadend = function () {
               dispatch(enterAlbumPhoto(reader.result));
            };
            reader.readAsDataURL(file);
         }
      };
   };

   return (
      <>
         <div className={patternForm.flex}>
            <div className={patternForm.flex}>
               <span className={patternForm.addPhoto}></span>
               <p className={patternForm.paragraf}>добавить обложку</p>
            </div>

            {big === true ? (
               <p className={patternForm.descriptionParagraf}>
                  Размер файла слишком большой
               </p>
            ) : (
               <p className={patternForm.descriptionParagraf}>
                  (Файл не более 70 КБ)
               </p>
            )}

            <input
               accept="image/*"
               type="file"
               id="imgInp"
               className={patternForm.inputImg}
               onClick={download}
            />
         </div>
      </>
   );
};

export default DownloadPhoto;
