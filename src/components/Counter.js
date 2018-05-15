import React from 'react'
import { inc, dec, multi, divi } from '../state/counter'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';

const Counter = (props) =>
    <div>
        <h2> {props.counterValue} </h2>
        <RaisedButton label={'-'} primary={true} onClick={props.onDecHandler} />
        <RaisedButton label={'+'} secondary={true} onClick={props.onIncHandler} />
        <br />
        <RaisedButton label={'x 2'} secondary={true} onClick={props.onMultiHandler} />
        <RaisedButton label={'/ 2'} primary={true} onClick={props.onDiviHandler} />
    </div>

const mapStateToProps = state => ({
    counterValue: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecHandler: () => dispatch(dec()), // do tego prpsa przypisz funkcje ktra wywola funkcje
    onIncHandler: () => dispatch(inc()),
    onMultiHandler: () => dispatch(multi(2)),
    onDiviHandler: () => dispatch(divi(2)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
