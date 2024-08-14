import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './counterSlice';
import React from 'react';

export const Counters = ()=>{
    const count = useSelector((states)=> states.counter.value);
    const estados = useDispatch();

    return(
        <div>
<div>
     <button onClick={estados.increment()}>increment</button>
</div>
  <p>{count}</p>
<div>
     <button onClick={estados.decrement()}>decrement</button>
</div>

        </div>

    )
}