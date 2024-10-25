import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setitems,setinput,setdelete } from './CreateSlice'
function FrontPage() {
    let dispatch=useDispatch()
    let items=useSelector((state)=>state.Todo.items)
    let inputvalue=useSelector((state)=>state.Todo.inputvalue)

let handlechange=(e)=>{
    dispatch(setinput(e.target.value))
}
let handleadd=()=>{
    dispatch(setitems(inputvalue.trim()))
}
let handledelete=(selectedindex)=>{
    dispatch(setdelete(selectedindex))
}
  return (
    <div>

<h1>Todo List</h1>

<input type='text' value={inputvalue} onChange={handlechange}/>
<button onClick={handleadd}>Add</button>


<ul>
    {items.map((item,index)=><li key={index}>{item}

<button onClick={()=>handledelete(index)}>Delete</button>
    </li>)}
</ul>

    </div>
  )
}

export default FrontPage