import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo2 from './logo2.png';

const pages = ['Home', 'Features', 'Pricing', 'Templates','Resources', 'About Us'];

function Header() {
    
    return (
      <div className="Header">
        <div id="banner">
            <div id="overlay">
                <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <Toolbar sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{ display: 'flex', gap: 0, alignItems: 'center', paddingLeft:"50px"}}>
                      <img src={logo2} alt="Logo" style={{ width: '40px', marginRight: '10px'}} />
                        <Typography >
                            StartUp
                        </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2}}>
                        {pages.map((page) => (
                            <MenuItem key={page}>
                            <Typography textAlign="center" color="#D9D9D9"
                                sx= {{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:after': {
                                      content: '""',
                                      position: 'absolute',
                                      left: 0,
                                      bottom: -2,
                                      height: '2px',
                                      width: '0%',
                                      backgroundColor: '#D9D9D9',
                                      transition: 'width 0.3s ease-in-out',
                                    },
                                    '&:hover:after': {
                                        width: '100%',
                                    }}}>
                                        {page}
                                        {['Features', 'Templates', 'Resources'].includes(page) && (
                                    <ArrowDropDownIcon sx={{ color: '#D9D9D9', marginLeft: 0.5 }} />
                                    )}                             
                            </Typography>
                            </MenuItem>
                        ))}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'right', paddingRight:"50px"}}>
                        <Typography
                        textAlign="center" color="#D9D9D9"
                        sx= {{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              bottom: -2,
                              height: '2px',
                              width: '100%',
                              backgroundColor: '#D9D9D9',
                              transition: 'width 0.3s ease-in-out',
                            }}}>
                        Sign In
                        <ArrowDropDownIcon sx={{ color: '#D9D9D9', marginLeft: 0.5 }} />
                        </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <p></p>
            <h1 style={{paddingLeft:"200px", paddingTop:"200px", paddingRight:"20%"}}>Startup you can build a website online using the Bootstrap builder.</h1>
            <div className="button-container" style={{marginLeft:"200px"}}>
            <button id="button">Visit Our Website</button>
            </div>
            </div>
       </div>
      </div>
    );
  }
  
  export default Header;
  