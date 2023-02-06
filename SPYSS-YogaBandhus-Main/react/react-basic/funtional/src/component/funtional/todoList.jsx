import { Button } from '@mui/material'
import React, { useState } from 'react'

const TodoList=()=>{
        const[value,setvalue] = useState("");
        const[TodoList,setTodoList] = useState([]);
        const[completeList,setcompleteList] = useState([]);
        const[checkShow,setcheckShow]= useState([]);
      
        // to check the checkbox is checked or not
     
        const onChecked=(e, index) => {
            TodoList[index].check = e.target.checked;
            setTodoList([...TodoList] );
          }
         const checked=() => {
            let findCheckedUsers = [];
            let findNotCheckedUsers = [];
            // eslint-disable-next-line
           TodoList.map((user, index) => {
              if (user.check) {
                findCheckedUsers = [...findCheckedUsers, user];
              } else {
                findNotCheckedUsers = [...findNotCheckedUsers, user];
              }
            });    
            setcompleteList([...completeList,...findCheckedUsers]);
            setTodoList({findNotCheckedUsers})
         }
        const show=(show)=>{
          setcheckShow({show})
        }
        console.log(checkShow)
  return (
    <>
    <div> 
        <input type="text" name="input" id="value" value={value} onChange={(e)=>{setvalue(e.target.value)}} />
        <Button variant='contained' onClick={()=>setTodoList([...TodoList, {name:value, check:false,show:true}],setvalue(""))} >submit</Button>
        
    </div>
    <Button variant='contained'>Todolist</Button>
    <Button variant='contained'>completelist</Button>
    <Button variant='contained'>AllList</Button>
    
    {!!TodoList.length&& (
    <div>My ToDo List
        {TodoList.map((lists, index) => ( 
         <h4 key={index}>
          
          {show(lists.show)}
         {index +1} - {lists.name} - <input type="checkbox" name="check" id="check"  onChange={(e) => onChecked(e,index)}
                  checked={lists.check}/>
        
       </h4>
    ))}
     
    <input
              type="submit"
              onClick={checked}
              value={"Submit-All"}
            />
    </div>)}

    {!!completeList.length && (
          <div>
            Completed List
            {completeList.map((lists, index) => (
              <h4 key={index}>
                {index + 1} - {lists.name}
              </h4>
            ))}
          </div>
        )}
    </>
  )
        }
export default TodoList;