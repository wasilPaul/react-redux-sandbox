import React from 'react'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'
import { newTextChanged } from '../state/text'


const ToDo = (props) =>
    <div>
        <h1>{props.newTaskText}</h1>
        <TextField
            value={props.newTaskText}
            onChange={props.onNewTextChange} />
    </div>


const mapStateToProps = state => ({
    newTaskText: state.newTaskText.newTaskText
})

const mapDispatchToProps = dispatch => ({
    onNewTextChange: (e, v) => dispatch(newTextChanged(v))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)