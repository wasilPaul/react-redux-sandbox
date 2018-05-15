import React from 'react'

import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui';



export const Counter = (props) =>
    <div>
        <h2> 0 </h2>
        <RaisedButton label={'-'} primary={true} />
        <RaisedButton label={'+'} secondary={true} />
    </div>

