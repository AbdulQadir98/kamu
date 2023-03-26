import { Link , useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { selectItems } from '../redux/cartSlice'

import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logout from "@mui/icons-material/Logout";

import logo from "../assets/store.png"
import profile from "../assets/profile.jpg"

import AuthService from "../services/auth.service";

const Header = () => {

  const navigate = useNavigate();

  // profile dropdown
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const openP = Boolean(anchorElProfile);
  const handleClickP = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseP = () => {
    setAnchorElProfile(null);
  };

  // noification dropdown
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const openN = Boolean(anchorElNotification);
  const handleClickN = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseN = () => {
    setAnchorElNotification(null);
  };

  const items = useSelector(selectItems)

  return (
    <header className="text-white body-font bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src={logo}
            alt=""
            className="w-10 h-10 object-cover object-center rounded-full mr-4 border-2 border-white"
          />
          <span className="ml-2 text-white text-2xl">Kamu</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-40 flex flex-wrap items-center text-base justify-center">
          <Link to={`/category1`} className="mr-7">Category1</Link>
          <Link to={`/category2`} className="mr-7">Category2</Link>
          <Link to={`/category3`} className="mr-7">Category3</Link>
        </nav>

        {/* notification */}
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleClickN}
              size="small"
              sx={{ ml: 1 }}
              aria-controls={openN ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openN ? "true" : undefined}
            >
              <Badge badgeContent={4} overlap="circular" color="error">
                <CircleNotificationsRoundedIcon
                  sx={{ width: 38, height: 38, bgcolor: "white", borderRadius: 99 }}
                />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorElNotification}
          id="account-menu"
          open={openN}
          onClose={handleCloseN}
          onClick={handleCloseN}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar>N</Avatar> Notification message
          </MenuItem>
          <MenuItem>
            <Avatar>N</Avatar> Notification message
          </MenuItem>
          <MenuItem>
            <Avatar>N</Avatar> Notification message
          </MenuItem>
        </Menu>

        {/* cart */}
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }} >
            <Tooltip title="Cart">
              <IconButton
                onClick={() => {
                  navigate("/cart/1");
                }}
                size="small"
                sx={{ ml: 1 }}
              > 
                <Badge badgeContent={items.length} overlap="circular" color="error">
                  <ShoppingCartIcon sx={{ width: 38, height: 38, color: "white"}}/>
                </Badge>
              </IconButton>
            </Tooltip>
        </Box>

        {/* profile */}
        <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClickP}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={openP ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openP ? "true" : undefined}
              >
                <Avatar src={profile} sx={{ width: 40, height: 40 }}></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorElProfile}
            id="account-menu"
            open={openP}
            onClose={handleCloseP}
            onClick={handleCloseP}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar src={profile}/> Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                AuthService.logout();
                navigate("/");
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
      </div>
    </header>
  );
};

export default Header;