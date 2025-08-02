import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { MdDelete, MdBlock } from "react-icons/md";

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User1', phone: '1234567890', email: 'user1@gmail.com', blocked: false },
    { id: 2, name: 'User2', phone: '1234567891', email: 'user2@gmail.com', blocked: false },
    { id: 3, name: 'User3', phone: '1234567892', email: 'user3@gmail.com', blocked: false },
    { id: 4, name: 'User4', phone: '1234567893', email: 'user4@gmail.com', blocked: false },
    { id: 5, name: 'User5', phone: '1234567894', email: 'user5@gmail.com', blocked: false },
    { id: 6, name: 'User6', phone: '1234567895', email: 'user6@gmail.com', blocked: false },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleBlock = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, blocked: !user.blocked } : user
    ));
  };

  return (
    <div id='cont-2'>
      <Container id='inner-cont'>
        <h4 className='user-text'>Users</h4>
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr className='row-1'>
              <th>No.</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                style={{ textDecoration: user.blocked ? 'line-through' : 'none' }}
              >
                <td>{index + 1}.</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                    className="me-2"
                  >
                    <MdDelete />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleBlock(user.id)}
                  >
                    <MdBlock />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default User;
