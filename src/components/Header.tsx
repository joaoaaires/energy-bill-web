// import * as React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography,  } from "@mui/material";
// import { Link } from "react-router-dom";

// const pages = [{title: 'Dashboard', link: '/'}, {title: 'Faturas', link: '/bills'}];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
  
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem 
//                   component={Link}
//                   key={page.title}
//                   to={page.link}
//                 >
//                   <Typography textAlign="center">{page.title}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 component={Link}
//                 key={page.title}
//                 to={page.link}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header