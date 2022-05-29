import React from "react";
import ReactDOM from "react-dom";
import "./CssVariable.css";
import "./index.css";
import { TodoApp } from "./TodoApp";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";

ReactDOM.render(
   <React.StrictMode>
      <section className="flex">
         <Aside />
         <section>
            <Header />
            <TodoApp />
            <Footer />
         </section>
      </section>
   </React.StrictMode>,

   document.getElementById("root")
);
