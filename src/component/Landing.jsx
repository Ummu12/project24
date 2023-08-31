import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { Todo } from "./Todo";
export   const Landing=()=>{

    return(
     <BrowserRouter>
     <Nav />
     <br />
     <br />
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route   path="/counter" element={<Counter/>}/>
        <Route  path="/todo" element={<Todo/>} />
       </Routes>
     </BrowserRouter>
    )
}