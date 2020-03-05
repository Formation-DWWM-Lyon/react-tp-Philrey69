import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const User = ({ title, first, last, location, picture }) =>


  <Card>
    <Card.Header as="h3">Developper</Card.Header>
    <Card.Body>
      <Card.Subtitle>Card</Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>{picture}</ListGroup.Item>
      <ListGroup.Item>Member: {title} {first} {last}</ListGroup.Item>
      <ListGroup.Item>City: {location.city}</ListGroup.Item>
      <ListGroupItem>
      </ListGroupItem>
    </ListGroup>
    <Card.Footer>
     </Card.Footer>
  </Card>
  ;

export default User;