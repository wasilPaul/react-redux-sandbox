import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';
import { inc } from '../state/asyncReduxCounter'
import { store } from '../store';

const AsyncReduxCounter = (props) =>
  <div>
    <h1>{props.asyncReduxCounter}</h1>
    <RaisedButton
      onClick={props.onIncClick}
    />
  </div>

const mapStateToProps = state => ({
  asyncReduxCounter: state.asyncReduxCounter.asyncCounterValue
})

const mapDispatchToProps = dispatch => ({
  onIncClick: () => dispatch(inc())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncReduxCounter)



