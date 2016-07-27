import React from 'react'

export default function UserItem({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <a href={user.user_url}>Show</a>
      </td>
      <td>
        <a href={user.edit_url}>Edit</a>
      </td>
      <td>
        <a
          href={user.user_url}
          rel="nofollow"
          data-method="delete"
          data-confirm="Are you sure?"
        >Destroy</a>
      </td>
    </tr>
  );
}

