import React from 'react'

import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';

const Counter = (props) =>
    <div>
        <h2> {props.counterValue} </h2>
        <RaisedButton label={'-'} primary={true} />
        <RaisedButton label={'+'} secondary={true} />
    </div>

const mapStateToProps = state => ({
    counterValue: state.counter
}) 

export default connect(
    mapStateToProps,    
    //
)(Counter)
