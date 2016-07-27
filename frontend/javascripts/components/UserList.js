import React from 'react';
import { getJSON } from 'jquery';
import UserItem from './UserItem';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getJSON('/users.json').then(
      users => this.setState({ users }),
      error => console.error('ERROR', error)
    );
  }

  render() {
    const { users } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    )
  }
}
