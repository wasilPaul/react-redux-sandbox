import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'
import { del, add, newTaskTextChanged } from '../state/todos'


const ToDo = (props) => (
  <div>
    <TextField
      value={props.newTaskText}
      onChange={props.onNewTaskChange} />
    <RaisedButton
      secondary={true}
      label={'Add task'}
      onClick={props.addTaskHandler} />
    <ul>
      {
        props.tasks
          .map((task, i) =>
            <li>   
              <RaisedButton
                primary={true}
                label={'-'}
                onClick={()=>props.deleteTaskHandler(i)} />
                {task.text}
            </li>
          )
      }
    </ul>
  </div>
)

const mapStateToProps = state => ({
  tasks: state.todos.tasks,
  newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
  deleteTaskHandler: (i) => dispatch(del(i)),
  addTaskHandler: () => dispatch(add()),
  onNewTaskChange: (e, val) => dispatch(newTaskTextChanged(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo)