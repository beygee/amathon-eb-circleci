import React from "react"
import "./App.css"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  getToDo = async () => {
    try {
      const res = await axios.get("/todos")
      console.log(`response data : ${res.data}`)
      this.setState({ todoList: res.data })
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    const todos = this.state.todoList
    return (
      <div className="App">
        <h1>Hello Stranger? </h1>
        <button onClick={this.getToDo}>TODO</button>
        <div>
          {todos.map(todo => (
            <h3 key={todo.id}>
              제목: {todo.title}
              <br />
              설명: {todo.description}
            </h3>
          ))}
        </div>
      </div>
    )
  }
}

export default App
