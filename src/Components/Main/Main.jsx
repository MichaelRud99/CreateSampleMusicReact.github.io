/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../Hooks/useActotion";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";

import { CSSTransition } from "react-transition-group";
import "../transitionComponents.css";
import { selectorListComposition } from "../../utils/redux/selectors";

const Main = () => {
   const compositions = useSelector(selectorListComposition);
   const slice = useActions(listCompositionSlice.actions);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");


   useEffect(() => {
      slice.readData();
      /* slice.readGif(); */
      setStorage(compositions.data);
   }, [compositions.data.length, compositions.updateData]);

   useEffect(() => {
      if (compositions.fail === true) {
         setTimeout(() => {
            slice.requestFail();
         }, 4000);
      }
   }, [compositions.fail]);

   /* вызываеться по onLoad */
   function draw() {
      if (compositions.gif.length !== 0) {
         let w = 0;
         compositions.gif.forEach((element) => {
            w = w + element.delay;
         });
         setInterval(() => {
            document.getElementById("my-img").src = URL.createObjectURL(
               new Blob([compositions.gif[0].colorTable[0].buffer])
            );
         }, w);
      } else {
         console.log("not found");
      }
   }

   function input() {
      setTimeout(() => {
         document
            .querySelector("#inputImage")
            .addEventListener("change", function () {
               debugger
               var reader = new FileReader();
               reader.onload = function () {
                  debugger
                  var arrayBuffer = new Uint8Array(reader.result);
                  document.getElementById("newImg").src = URL.createObjectURL(
                     new Blob([arrayBuffer])
                  );
               };
               reader.readAsArrayBuffer(this.files[0]);
            });
      }, 1);
   }

   return (
      <>
                  <div onLoad={draw()}>
            <img
               width="150px"
               height="150px"
               id="my-img"
               src="https://i.imgur.com/A7Ly42B.gif"
               alt="tmp"
            />
         </div>
         <div onLoad={input()}>
            <input type="file" id="inputImage" />
            <img
               width="150px"
               height="150px"
               id="newImg"
               src="https://i.imgur.com/A7Ly42B.gif"
               alt="tmp"
            />
         </div>

         {storage.length === 0 ? (
            <section className={main.flex}>
               <h1 className={main.title}>
                  Создайте свою подборку музыкальных произведений
               </h1>
               <BtnCreate storage={storage} setOpen={setOpen} open={isOpen} />
            </section>
         ) : (
            <section className={main.section}>
               <div className={main.subtitle}>
                  Ваша подборка музыкальных композиций
               </div>
               <PatternTable
                  storage={storage}
                  setStorage={setStorage}
                  setOpen={setOpen}
                  open={isOpen}
               />
            </section>
         )}
         <CSSTransition
            in={compositions.fail}
            timeout={900}
            classNames="network-error"
            mountOnEnter
            unmountOnExit
         >
            <div className={main.networkError}>
               Ошибка: неудалось отправить запрос
            </div>
         </CSSTransition>
      </>
   );
};
export default Main;
