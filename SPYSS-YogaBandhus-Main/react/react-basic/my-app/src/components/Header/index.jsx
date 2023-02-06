import "./index.css";
import React from "react";
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      todoList: [],
      complete: [],
      onChecked: (e, index) => {
        let mynewList = this.state.todoList;
        mynewList[index].check = e.target.checked;
        //console.log("mylist -> ",mynewList)
        this.setState({ todoList: mynewList });
      },
      addList: () => {
        this.setState({
          todoList: [
            ...this.state.todoList,
            { name: this.state.value, check: false },
          ],
          value: " ",
        });
      },
      checked: () => {
        let findCheckedUsers = [];
        let findNotCheckedUsers = [];
        // eslint-disable-next-line
        this.state.todoList.map((user, index) => {
          if (user.check) {
            findCheckedUsers = [...findCheckedUsers, user];
          } else {
            findNotCheckedUsers = [...findNotCheckedUsers, user];
          }
        });

        this.setState({
          complete: [...this.state.complete, ...findCheckedUsers],
          todoList: findNotCheckedUsers,
        });

        console.log(
          findNotCheckedUsers,
          "findCheckedUsers => ",
          this.state.complete
        );
      },
    };
  }
  render() {
    return (
      <div className="app">
        <h1> To Do List</h1>
        <input
          type="text"
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
        />
        <button onClick={this.state.addList}>submit</button>
        {/* {console.log(this.state.complete)} */}
        {!!this.state.todoList.length && (
          <div>
            My ToDo List
            {this.state.todoList.map((list, index) => (
              <h4 key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => this.state.onChecked(e, index)}
                  checked={list.check}
                />
                {index + 1} - {list.name} -{" "}
                <input
                  type="submit"
                  onClick={(e) =>
                    this.setState({
                      complete: [
                        ...this.state.complete,
                        ...this.state.todoList.splice(index, 1),
                      ],
                    })
                  }
                />
              </h4>
            ))}
            <input
              type="submit"
              onClick={this.state.checked}
              value={"Submit-All"}
            />
          </div>
        )}
        {console.log("update -> ", this.state.complete)}
        {!!this.state.complete.length && (
          <div>
            Completed List
            {this.state.complete.map((lists, index) => (
              <h4 key={index}>
                {index + 1} - {lists.name}
              </h4>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Todolist;
