import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product
          </Typography>
          
          <Link to={'/'}><Button color="inherit" style={{textTransform: 'none', color: 'white'}}>Home</Button></Link>
          <Link to={'/add'}><Button color="inherit" style={{textTransform: 'none', color: 'white'}}>Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
