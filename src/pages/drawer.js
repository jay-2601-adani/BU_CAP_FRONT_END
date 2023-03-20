import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TableChartIcon from '@mui/icons-material/TableChart';
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from '@mui/icons-material/Business';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import HomeIcon from "@mui/icons-material/Home";

import NextWeekIcon from "@mui/icons-material/NextWeek";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  

    const navigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} onMouseLeave={handleDrawerClose}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{backgroundImage:"linear-gradient(90deg, rgba(11,116,176,1) 17%, rgba(117,71,156,1) 48%, rgba(189,56,97,1) 90%)"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            onMouseMove={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <a href="/">Group Enterprise Architecture</a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          <ListItem key="home" disablePadding onClick={()=>{
            console.log("clicked");
            navigate('/', { replace: true });
          }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Select Business Capabilities" onClick={()=>{
            console.log("clicked");
            navigate('/bucap', { replace: true });
          }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NextWeekIcon></NextWeekIcon>
              </ListItemIcon>
              <ListItemText primary="Select Business Capabilities" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Master Table" disablePadding onClick={()=>{
            console.log("clicked");
            navigate('/bumas', { replace: true });
          }}>
            <ListItemButton>
              <ListItemIcon>
                <FilterAltIcon></FilterAltIcon>
              </ListItemIcon>
              <ListItemText primary="Master Table" />
            </ListItemButton>
          </ListItem>

          <ListItem key="BU_CAP_table" disablePadding onClick={()=>{
            console.log("clicked");
            navigate('/bumat', { replace: true });
          }}>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon></CheckBoxIcon>
              </ListItemIcon>
              <ListItemText primary="BU_CAP_table" />
            </ListItemButton>
          </ListItem>

          <ListItem key="BU_BY_CAP_table" disablePadding onClick={()=>{
            console.log("clicked");
            navigate('/bubycap', { replace: true });
          }}>
            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon></BusinessIcon>
              </ListItemIcon>
              <ListItemText primary="BU_BY_CAP_table" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Master_table" disablePadding onClick={()=>{
            console.log("clicked");
            navigate('/master', { replace: true });
          }}>
            <ListItemButton>
              <ListItemIcon>
                <TableChartIcon></TableChartIcon>
              </ListItemIcon>
              <ListItemText primary="Master_table" />
            </ListItemButton>
          </ListItem>

        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
