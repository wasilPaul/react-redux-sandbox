import React from 'react'
import { connect } from 'react-redux'

const UserList = (props) => (
  <div>
    {props.usersList.length === 0 ?
      'Loading' :
      props.usersList.map(
        user => <div>USER </div>
      )
    }
  </div>
)

const mapStateToProps = state => ({
  usersList: state.randomUsers.usersList
}) 

const mapDispatchToProps = dispatch => ({
  //onDecHandler: () => dispatch(dec())

})

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(UserList)