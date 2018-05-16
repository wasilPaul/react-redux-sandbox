import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';

const AsyncReduxCounter = () =>
  <div>
    <h1>{props.acyncCounterValue}</h1>
    <RaisedButton
      onClick={props.onIncClick}
    />
  </div>

const mapStateToProps = state => ({
  asyncReduxCounter: state.asyncReduxCounter.acyncCounterValue
})

const mapDispatchToProps = dispatch => ({
  onIncClick: () => dispatch(inc())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncReduxCounter)