import React from "react";
import patternForm from "../patternForm.module.css";
import { useActions } from "../../Hooks/useActotion";
import { inputFieldsSlice } from "../../../utils/redux/inputFieldsSlice";

const DownloadPhoto = () => {
   const inputFields = useActions(inputFieldsSlice.actions);

   const download = () => {
      const div = document.querySelectorAll("div");
      const imgInp = div[16].querySelector("#imgInp");
      const paragraf = div[16].querySelector("p");

      imgInp.onchange = (evt) => {
         const [file] = imgInp.files;
         if (file) {
            paragraf.innerText = file.name;
            let reader = new FileReader();
            reader.onloadend = function () {
               inputFields.enterAlbumPhoto(reader.result);
            };
            reader.readAsDataURL(file);
         }
      };
   };

   return (
      <div className={patternForm.flex}>
         <div className={patternForm.flex}>
            <span className={patternForm.addPhoto}></span>
            <p className={patternForm.paragraf}>добавить обложку</p>
         </div>
         <input
            accept="image/*"
            type="file"
            id="imgInp"
            className={patternForm.inputImg}
            onClick={download}
         />
      </div>
   );
};

export default DownloadPhoto;
