import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      productName: 'Laptop',
      user: {
        name: 'Sourav Akhani',
        email: 'sourav@example.com',
        phone: '03211234567'
      },
      quantity: 2,
      completed: false
    },
    {
      id: 102,
      productName: 'Headphones',
      user: {
        name: 'Ali Khan',
        email: 'ali@example.com',
        phone: '03123456789'
      },
      quantity: 1,
      completed: false
    },
    {
      id: 103,
      productName: 'Smartphone',
      user: {
        name: 'Fatima Raza',
        email: 'fatima@example.com',
        phone: '03451234567'
      },
      quantity: 3,
      completed: false
    }
  ]);

  const handleCompleteOrder = (id) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, completed: true } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <Container className="mt-4">
      <h2>Orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Product Name</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Phone</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{ opacity: order.completed ? 0.5 : 1 }}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.user.name}</td>
              <td>{order.user.email}</td>
              <td>{order.user.phone}</td>
              <td>{order.quantity}</td>
              <td>
                <Button
                  variant={order.completed ? "success" : "primary"}
                  size="sm"
                  onClick={() => handleCompleteOrder(order.id)}
                  disabled={order.completed}
                >
                  {order.completed ? "Completed" : "Complete Order"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
