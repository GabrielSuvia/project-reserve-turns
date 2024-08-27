import {createSlice} from '@reduxjs/toolkit';


const initialState = {reservation: []};

const reservationSlide = createSlice({
    name:'reserve',
    initialState,
    reducers:{
        reservationAdd: (state, action)=>{//actions
            const existingTurnIndex = state.reservation.findIndex(item => item.id === action.payload.id);
    
    if (existingTurnIndex !== -1) {
  
        state.reservation[existingTurnIndex] = action.payload;
    } else {
 
        state.reservation.push(action.payload);
    }
    console.log(state.reservation);

             // localStorage.setItem('reservation',JSON.stringify(state.reservation))
        },
        removeReserve:(state,action)=>{//action.payload = objeto recibido
          const turn = state.reservation.find((index)=> index.id === action.payload.id)
          if(turn){
            state.reservation[action.payload.id].status="false"
          }
           
            //localStorage.setItem('reservation',JSON.stringify(turn))
        },
        resetReserve:(state)=>{
            state.reservation=[];
            
           
            //localStorage.removeItem('reservation')
        }
    }
});

export const {reservationAdd,removeReserve,resetReserve} = reservationSlide.actions;//metodos del reducers

export default reservationSlide.reducer;