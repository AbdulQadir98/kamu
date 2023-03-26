import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { changeCartName } from '../redux/cartSlice'
import { selectTotal, selectCount, selectName } from '../redux/cartSlice'
import { getOrders, deleteOrder } from "../services/order.service";
import { getCurrentUser } from "../services/auth.service";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { red, green} from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Cards = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const totalPrice = useSelector(selectTotal)
  const count = useSelector(selectCount)
  const name = useSelector(selectName)
  const user = getCurrentUser();

  const [orders, setOrders] = useState([])
  const [cartname, setCartname] = useState("")

  const init = () => {
    getOrders(user.id)
      .then((response) => {
        // console.log("Prining Orders " + response.data)
        setOrders(response.data)
      })
      .catch((err) => {
        console.log("Something went wrong" + err.message)
      })
  }

  // TODO : COUNT INSIDE [] ?
  useEffect(() => {
    init()
  }, []);

  // Edit name toggle modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClear = () => {
    setCartname('CurrentCart')
    setOpen(false);
}

  // edit name form
  const editNameform = async (e) => {
    e.preventDefault();
    dispatch(changeCartName(cartname))
  };

  // Delete Order ~ Cart
  const handleDelete = async (orderId) => {
    deleteOrder(orderId)   
  };

  return ( 
    <section className="text-gray-600 body-font">
      <div className="container px-16 py-8 mx-auto">

        {/* title */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-2xl font-medium title-font mb-1 text-gray-900 tracking-widest">YOUR CARTS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Manage your Carts</p>
        </div>

        {/* cart cards */}
        <div className="flex flex-wrap justify-center -m-4">
         {/* active cart */}
         <div className="p-4 lg:w-1/4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Card sx={{ minWidth: 275 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                      <ShoppingCartIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton onClick={handleClickOpen}>
                      <EditIcon/>
                    </IconButton>
                  }
                  titleTypographyProps={{variant:'h6' }}
                  title = { name }
                />
                {/* modal */}
                <Dialog open={open} onClose={handleClose}>
                 <form onSubmit={editNameform}>  
                  <DialogTitle>Edit Cart Name</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please Enter a name to Edit Your Cart Name
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setCartname(e.target.value) }
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClear}>Cancel</Button>
                    <Button type='submit' onClick={handleClose}>Submit</Button>
                  </DialogActions>
                 </form>
                </Dialog>
                <CardContent>
                  <div className='flex justify-between'>
                    <div className=''>
                      <div className='text-2xl'>${totalPrice}.00</div>
                      <div className='text-sm'>Total Price</div>
                    </div>
                    <div className=''>
                      <div className='text-2xl'>{count}</div>
                      <div className='text-sm'>Items</div>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button onClick={() => {
                      navigate(`/cart/${name}`)
                  }}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
         {/* persistanct carts */}
         {orders.map((order) => (
          <div className="p-4 lg:w-1/4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Card sx={{ minWidth: 275 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <ShoppingCartIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <CloseIcon onClick={() => handleDelete(order.id)}/>
                    </IconButton>
                  }
                  titleTypographyProps={{variant:'h6' }}
                  title={order.name}
                />
                <CardContent>
                  <div className='flex justify-between'>
                    <div className=''>
                      <div className='text-2xl'>${order.price}.00</div>
                      <div className='text-sm'>Total Price</div>
                    </div>
                    <div className=''>
                      <div className='text-2xl'>{order.count}</div>
                      <div className='text-sm'>Items</div>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button onClick={() => {
                      navigate(`/order/${order.id}`);
                  }}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
         ))}
        </div>

        {/* create cart button and modal */}
        {/* <div className='flex justify-center w-full py-12'>
          <Button variant="contained" 
            startIcon={<ShoppingCartIcon />}
            onClick={handleClickOpen}
          >
            New Cart
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </div> */}

      </div>
    </section>
  );
}
 
export default Cards;