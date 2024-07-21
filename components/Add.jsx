import { Button, Grid, TextField } from '@mui/material';
import React from 'react'

const Add = () => {
  return ( <div style={{ margin: "140px" }}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}>
        <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="s_name"
        ></TextField>
        <br></br>
        <br></br>
        <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            name="s_image"
        ></TextField>
        <br></br>
        <br></br>
        <TextField
            fullWidth
            label="Price"
            variant="outlined"
            name="s_price"
        ></TextField>
        <br></br>
        <br></br>
        <TextField
            fullWidth
            label="Category"
            variant="outlined"
            name="s_category"
        ></TextField>
        <br></br>
        <br></br>
        <div fullWidth style={{textAlign: 'center'}}>
            <Button variant='contained'>Submit</Button>
        </div>
        </Grid>
    </Grid>
    </div>
    );
};


export default Add
