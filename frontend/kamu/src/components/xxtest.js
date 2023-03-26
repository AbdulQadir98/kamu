import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter'

import Button from '@mui/material/Button';

export default function App() {

  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center p-8">
      <h1>count is {count}</h1>
      <div className="flex p-2">
        <Button variant="outlined" onClick={()=> dispatch(increment())}>Inc</Button>
        <Button variant="outlined" onClick={()=> dispatch(decrement())}>Dec</Button>
        <Button variant="outlined" onClick={()=> dispatch(incrementByAmount(10))}>10+</Button>
      </div>
    </div>
    
  )
}