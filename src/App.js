import logo from "./logo.svg";
import "./App.css";
import List1 from "./component/list1";

function App() {
 // const todos = [
    //{ id: 1, title: "wash dishes", completed: false },
   // { id: 2, title: "wash car", completed: true },
    //{id:3,title:'wash cloths',completed:true}
 // ];
  return (
    <div className="App">
      {/* {todos.map((todo) => {
        return <List todo={todo}></List>;
      })} */}
      <List1></List1>
    </div>
  );
}

export default App;
