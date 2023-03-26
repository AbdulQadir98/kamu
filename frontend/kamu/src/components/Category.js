import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import Cloud from '@mui/icons-material/Cloud';

const options = [
    'None','Atria','Callisto','Dione','Ganymede','Hangouts Call','Luna','Oberon','Phobos',
];

const Category = () => {
    return ( 
        <div className='bg-gay-300 pt-12'>
          <div className='p-4'>Categories</div>
          <Box sx={{ width: 270 }}>
            <MenuList>
            {options.map((option) => (
              <MenuItem key={option}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>{option}</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  --
                </Typography>
              </MenuItem>
            ))}
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </MenuList>
          </Box>

        </div>
    );
}
 
export default Category;