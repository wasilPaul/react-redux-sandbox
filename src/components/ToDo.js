import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'
import { del, add, newTaskTextChanged } from '../state/todos'


const ToDo = (props) => (
  <div>
    <ul>
      {
        props.tasks
          .map((task, index) =>
            <li>
              {task.text}
              <RaisedButton
                primary={true}
                label={'-'}
                onClick={() => props.deleteTaskHandlerHandler(index)} />
            </li>
          )
      }
    </ul>
    <TextField
      value={props.newTaskText}
      onChange={props.onNewTaskChange} />
    <RaisedButton
      label={'Add task'}
      onClick={() => props.addTaskHandler(props.newTaskText)} />
  </div>
)

const mapStateToProps = state => ({ 
  tasks: state.todos.tasks,
  newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
  deleteTaskHandler: (i) => dispatch(del(i)),
  addTaskHandler: (task) => dispatch(add(task)),
  onNewTaskChange: (e, val) => dispatch(newTaskTextChanged(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo)