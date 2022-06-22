import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
  render(){
    //code fix below at mapStateToProps
    //const user = this.props.users.find(user => user.id === this.props.userId);
    const {user} = this.props;

    if(!user) return null;
    return (
      <div className="header">{user.name}</div>
    );
  }
}

//pull out data from redux store
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);