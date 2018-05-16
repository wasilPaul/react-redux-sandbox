import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';
import { inc, dec } from '../state/asyncReduxCounter'
import { store } from '../store';

const AsyncReduxCounter = (props) =>
  (props.asyncCounterValue === null ? 'Loading' :
    <div>
      <h1>{props.asyncCounterValue}</h1>
      <RaisedButton
        label={'Dec'}
        onClick={props.onDecClick}
      />
      <RaisedButton
        label={'Add'}
        onClick={props.onIncClick}
      />
    </div>)

const mapStateToProps = state => ({
  asyncCounterValue: state.asyncReduxCounter.asyncCounterValue
})

const mapDispatchToProps = dispatch => ({
  onIncClick: () => dispatch(inc()),
  onDecClick: () => dispatch(dec())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncReduxCounter)



