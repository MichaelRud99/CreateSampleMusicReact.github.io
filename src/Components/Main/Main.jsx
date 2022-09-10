/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../Hooks/useActotion";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";

const Main = () => {
   const compositions = useSelector((state) => state.listComposition);
   const slice = useActions(listCompositionSlice.actions);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   useEffect(() => {
      slice.readData();
      setStorage(compositions.data);
      if (compositions.fail === true) {
         setTimeout(() => {
            slice.requestFail();
         }, 4000);
      }
   }, [compositions.data.length, compositions.fail]);

   return (
      <>
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
         {compositions.fail === true && (
            <div className={main.tmp}>Ошибка: неудалось отправить запрос</div>
         )}
      </>
   );
};
export default Main;
