import React, { useState } from "react";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import readStorage from "../../utils/readStorage";
import PatternTable from "../Table/PatternTable/PatternTable";

const Main = () => {
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState(() => readStorage("storage"));

   return (
      <>
         {storage.length === 0 ? (
            <section className={main.flex}>
               <h1 className={main.title}>
                  Создайте свою подборку музыкальных произведений
               </h1>
               <BtnCreate
                  storage={storage}
                  setOpen={setOpen}
                  open={isOpen}
               />
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
