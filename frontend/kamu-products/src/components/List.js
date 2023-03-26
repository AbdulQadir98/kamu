import React from 'react';
import { Link , useNavigate } from "react-router-dom";

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const options = [
    'Appetizer', 'Cereals', 'Dairy', 'Spices', 'Tubers', 'Vegetables'
];

export const List = () => {

  const navigate = useNavigate();

  return ( 
      <div className='bg-gay-300 pt-12'>
        <div className='p-4 mb-6 text-xl'>Categories</div>
        <Box sx={{ width: 240 }}>
          <MenuList>
          {options.map((option) => (
            <MenuItem 
              key={option} 
              onClick={() => {
                navigate(`/category/${option}`);
              }}
            >
              <ListItemIcon>
                <LunchDiningIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{option}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                <KeyboardDoubleArrowRightIcon />
              </Typography>
            </MenuItem>
          ))}
            <Divider />
            <MenuItem onClick={() => {
                  navigate("/dashboard");
                }}>
              <ListItemIcon>
                <EmojiFoodBeverageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>All Categories</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </div>
  );
}
 
export default List;