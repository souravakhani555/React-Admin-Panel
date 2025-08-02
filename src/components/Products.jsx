import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from 'react-icons/md';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    price: '',
    description: '',
    quantity: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, formData]);
    setFormData({ name: '', image: null, price: '', description: '', quantity: '', category: '' });
    setShowModal(false);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleClearAll = () => {
    setProducts([]);
  };

  return (
    <Container className="mt-4" id='main-products'>
      <div className="d-flex justify-content-between align-items-center mb-4" >
        <h2>Products</h2>
        <div>
          <Button variant="danger" className="me-2" onClick={handleClearAll}>Clear All</Button>
          <Button onClick={() => setShowModal(true)}>Add Product</Button>
        </div>
      </div>

      <Row>
        {products.map((product, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              {product.image && <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                <Card.Text><strong>Quantity:</strong> {product.quantity}</Card.Text>
                <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(index)}><MdDelete/></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" name="image" accept="image/*" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Enter quantity" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={formData.category} onChange={handleChange} placeholder="Enter category" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Save Product
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
