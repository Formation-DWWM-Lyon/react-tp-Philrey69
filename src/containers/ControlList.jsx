import React, { Component } from 'react';

import Axios from 'axios';
import { ListGroup, ListGroupItem, Button, Card, CardGroup, CardDeck, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import User from '../components/User';

export default class ControlList extends Component {

  state = {
    data: null,
  };

  componentDidMount = () => {
    console.log('ok');
    this.fetch(1);
  }

  fetch = (page) => {
    console.log("page " + page)
    if (!page || page === 0) {
      page = 1
    }

    Axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc&nat=fr`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));

  }


  checkItem = (event) => {
    console.log(event);
    return (
      <User />
    );

  }

  render = () => {

    const { data } = this.state;
    console.log(data)


    if (!data) {
      return (
        <div className="text-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs 
          />
        </div>)
    }


    if (data) {
      console.log("data ....ok")
      return (
        <div>

          <ListGroup>
            <Row className="justify-content-md-center">
              {data.results.map((item, index) =>
                <ListGroupItem key={index} className="card-list">
                  {/* <CardDeck> */}
                  {/* <Card style={{ width: '15rem' }}> */}
                  <Col sm lg="20" >
                    <Card >
                      <Card.Body>
                        <Card.Title> {item.name.title} {item.name.first} {item.name.last}</Card.Title>
                        <Card.Text>
                          {item.location.city}
                        </Card.Text>
                        <img src={item.picture.thumbnail} alt="new"></img>
                        <Button variant="primary" type="submit" name={`key${index}`} onClick={(e) => this.checkItem(index)}>Details</Button>
                      </Card.Body>
                    </Card>
              </Col>
                    {/* </CardDeck> */}
                  </ListGroupItem>
                  )}
            </Row>
          </ListGroup>

          <Button variant="primary" onClick={(e) => this.fetch(data.info.page - 1)}>
            Prev
            </Button>
          <Button variant="primary" onClick={(e) => this.fetch(data.info.page + 1)}>
            Next
            </Button>
          <Button variant="primary" onClick={(e) => this.fetch(1)}>
            HOME
          </Button>

          <p> Page : {data.info.page}</p>
        </div>
      )
    }
  }
} 