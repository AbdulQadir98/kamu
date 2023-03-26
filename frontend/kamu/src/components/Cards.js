import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

// TODO : active cart should be green
const carts = [
  'CartOne','CartTwo', 'CartDemo',
];

const Cards = () => {
    return ( 
      <section className="text-gray-600 body-font">
        <div className="container px-16 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-2xl font-medium title-font mb-1 text-gray-900 tracking-widest">YOUR CARTS</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Manage your Carts</p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
           {carts.map((cart) => (
            <div className="p-4 lg:w-1/4">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Card sx={{ minWidth: 275 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <CloseIcon />
                        </IconButton>
                      }
                      titleTypographyProps={{variant:'h6' }}
                      title={cart}
                    />
                    <CardContent>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Total Items added : 7
                      </Typography>
                      <Typography variant="body2">
                        Total Price : Rs.1450.00
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {
                          window.location.href = "/cart/1";
                      }}>
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </div>
            </div>
           ))}
          </div>
        </div>

        <div>
        </div>
      </section>
    );
}
 
export default Cards;