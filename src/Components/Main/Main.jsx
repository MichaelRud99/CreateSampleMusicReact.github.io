import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import readStorage from "../../utils/readStorage";
import PatternTable from "../Table/PatternTable/PatternTable";

const Main = () => {
   const dispatch = useDispatch();
   const store = useSelector((store) => store.reducers);
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState(() => readStorage("storage"));

   useEffect(() => {
      dispatch({ type: "readData" });
      if (store.data.length > 0) {
         setStorage(store.data);
         localStorage.setItem("storage", JSON.stringify(store.data));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
