import createSlide from '@reduxjs/toolkit';

const initialState = {
    todo:[]
};

export const todoSlice = createSlide({
 name:"todos",
 initialState,
 reducer:{
   addTodo:(state, action)=>{
    console.log(state);
    console.log(action);
   },
   removeTodo:(state,action) =>{}
 }
});


export const  {addTodo,removeTodo} = todoSlice.action