import { Card, CardContent, Grid,Button } from "@mui/material";
import React,{useState} from "react";


export const Counter=()=>{
     const[cnt,setCnt]=useState(0);
   
     return(
        <Grid container spacing={2}>
           <Grid item xs={4}> </Grid>
            < Grid item xs={4}>
       <Card>
          <CardContent>
            <Button onClick={()=>setCnt(cnt + 5)}
            variant="contained" fullWidth disabled={cnt===50}>
             Increment +</Button>
             <h1 style={{textAlign:"center",margin:"50px"}}> {cnt}</h1>
             <Button disabled={cnt===0} onClick={()=>setCnt(cnt - 5)}
             variant="contained" fullWidth>
                Decrement -
             </Button>
            
          </CardContent>
       </Card>
          </Grid>
           

        </Grid>
    )
}