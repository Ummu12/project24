import { Grid,TextField,Button,Card,CardContent, Alert } from "@mui/material";
import React, { useState,useEffect } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { SettingsSystemDaydream } from "@mui/icons-material";


export const Todo=()=>{
    const [txt,setTxt]=useState('');
    const[data,setData]=useState([]);
    const[clr,setClr]=useState('');
    const[con,setCon]=useState(false);
    
    const handleAdd=()=>{
       txt !== "" && setData([txt,...data])
         setTxt("")
    };

    const handleDelete=(index)=>{
        if(window.confirm("Are you agree to Delete!!")){
        const result=data.filter((item,ind)=> ind!==index);
        setData(result) ;

        }
        setCon(true)
    };

        useEffect(()=>{
             if(data.length==0){
                setClr("red");
                         } else if(data.length>=1 && data.length<=5 ){
                            setClr("green")
                         }else{
                            setClr("blue")
                         }

        },[data]);

    return(
        <Grid container spacing={2}>
         <Grid item xs={3}>   
            <Card sx={{bgcolor:"orange" ,height:55}}>
                <CardContent>
                   
                </CardContent>
            </Card>
         </Grid>

          <Grid item xs={7}>
            <TextField  onChange={(e)=>setTxt(e.target.value)}
            variant="outlined"
            label="Enter.."  fullWidth value={txt}/>
              </Grid>
           <Grid item xs={2}>
         <Button onClick={()=>handleAdd()}
         variant="contained" fullWidth sx={{height:50}}>
         ADD
         </Button>
           </Grid>

         
                    {
                        data.map((item,index)=>
                        <Grid item xs={4}>
                            <Card sx={{}}>
                                <CardContent>
                                    <h1>{item.toUpperCase()}</h1>
                                    <Button onClick={()=>handleDelete(index)} variant="contained"color="error"
                                    > Delete <DeleteOutlineIcon />  </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        )
                    }

        </Grid>
    )
    
}