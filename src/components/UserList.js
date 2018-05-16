import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../state/randomUsers';
import { RaisedButton } from 'material-ui';

const UserList = (props) => (
  <div>
    <RaisedButton
      label={props.usersList.length === 0 ? 'Get Users' : 'Reload'}
      onClick={props.onReloadClick}
    />
    <ol>
      {
        props.isDataLoading === 0 ?
          'Loading' :
          props.usersList.map(
            user =>
              <li>
                {user.name.title} {user.name.first}
              </li>
          )
      }
    </ol>
  </div>
)



const mapStateToProps = state => ({
  usersList: state.randomUsers.usersList,
  isDataLoading: state.randomUsers.isDataLoading
})

const mapDispatchToProps = dispatch => ({
  onReloadClick: () => dispatch(fetchUsers())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)