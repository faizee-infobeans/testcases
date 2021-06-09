
import List from './list'

function List1() {
  const todos = [
    {id:1,title:'wash dishes',completed:false},
    {id:2,title:'wash car',completed:true},
    {id:3,title:'wash cloths',completed:true}
  ]
  return (
    <div>
      {todos.map((todo)=>{
        return <List todo={todo}></List>
      })}     
    </div>
  );
}

export default List1;
