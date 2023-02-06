import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Todolist from './components/Header/index';
import Bulb from './components/Header/bulb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    {/* <Todolist/> */}
    {/* <Bulb/> */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// import "./index.css";
// import React from "react";
// class Todolist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: " ",
//       todoList: [],
//       complete: [],
//       onChecked:(e,index)=>{
//         let mynewList=this.state.todoList
       
// mynewList=[...mynewList]
// mynewList[index].check=e.target.checked
// //console.log("mylist -> ",mynewList)
//         this.setState({ todoList:mynewList })
//       },
//       addList: () => {
//         this.setState({
//           todoList: [
//             ...this.state.todoList,
//             { name: this.state.value, check: false },
//           ],
//           value: " ",
//         });
//       },
//     };
//   }
//   render() {
//     // console.log(this.state.todoList);
//     return (
//       <div className="app">
//         <h1> To Do List</h1>
//         <input
//           type="text"
//           onChange={(e) => this.setState({ value: e.target.value })}
//           value={this.state.value}
//         />
//         <button onClick={this.state.addList}>submit</button>
//         {/* {console.log(this.state.complete)} */}
//         {!!this.state.todoList.length && (
//           <div>
//             My ToDo List
//             {this.state.todoList.map((list, index) => (
//               <h4 key={index}>
//                 <input
//                   type="checkbox"
//                   onChange={(e) =>this.state.onChecked(e,index)}
//                 />
//                 {index + 1} - {list.name} -{" "}
//                 <input
//                   type="submit"
//                   onClick={(e) =>
//                     this.setState({
//                       complete: [
//                         ...this.state.complete,
//                         ...this.state.todoList.splice(index, this.state.check),
//                       ],
//                     })
//                   }
//                 />
//               </h4>
//             ))}
//           </div>
//         )}
//         {!!this.state.complete.length && (
//           <div>
//             Completed List
//             {this.state.complete.map((lists, index) => (
//               <h4 key={index}>
//                 {index + 1} - {lists.name}
//               </h4>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Todolist;


