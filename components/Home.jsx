import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
     <Grid container spacing={2} sx={{mt:0}}>
        {product.map((val,i)=>{
            return(
                <Grid item xs={12} sm={6} md={3}>
                     <Card >
      <img src={val.image} style={{width: '100%', height:'auto'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        

        <div style={{textAlign: 'right'}}>
        <Typography variant="body2" color="text.secondary">
          {val.category}
        </Typography>
        <br />
        <Typography variant="h5" color="text.secondary">
          ${val.price}
        </Typography>
        </div>
      </CardContent>
    </Card>

                </Grid>
            )
        })}
     </Grid>

    </div>
  )
}

export default Home