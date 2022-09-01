/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../Hooks/useActotion";
import { sagaSlice } from "../../utils/redux/slices/sagaSlice";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import PatternTable from "../Table/PatternTable/PatternTable";

const Main = () => {
   const store = useSelector((store) => store.sagaSlice);
   const slice = useActions(sagaSlice.actions);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState("");

   useEffect(() => {
      slice.sagaReadData();
      if (store.data.length > 0) {
         setStorage(store.data);
      }
   }, [store.data.length]);

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
      </>
   );
};
export default Main;
