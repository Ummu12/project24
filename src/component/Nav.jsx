import React, { useState } from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { NavItem } from "./Navitem";
import { Navdata } from "./Data/Navdata";
export const Nav=()=>{
    const [data,setData]=useState(Navdata)
  
    return(
        <Card>
            <CardContent>
               <Grid container spacing={2}>
               {data.map((item)=>
               <NavItem item={item}/>

               )

               }
               </Grid>
            </CardContent>
        </Card>
    ) 
}