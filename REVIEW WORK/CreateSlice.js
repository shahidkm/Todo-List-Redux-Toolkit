import { createSlice } from "@reduxjs/toolkit";


let Todoreducer=createSlice({
    name:"Todo",
    initialState:{
        items:[],
        inputvalue:""
    },
    reducers:{
        setitems:(state,action)=>{

            if(state.inputvalue!==""){
            state.items.push(action.payload);
            state.inputvalue="";
        }
        },
        setinput:(state,action)=>{
            state.inputvalue=action.payload
        },
        setdelete:(state,action)=>{
         state.items=state.items.filter((_,index)=>index!==action.payload)
        }
    }

})

export let {setitems,setinput,setdelete}=Todoreducer.actions;
export default Todoreducer.reducer;