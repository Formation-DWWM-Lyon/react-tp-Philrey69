import React, { Component } from 'react';

import Axios from 'axios';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

export default class ControlList extends Component {

  state = {
    data: null,
  }

  componentDidMount = () => {
    console.log('ok');

    Axios.get('https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr')
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
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
            {data.results.map((item, index) =>
              <ListGroupItem key={index}>{item.name.title} {item.name.first} {item.name.last} </ListGroupItem>
            )}
          </ListGroup>
          <Button variant="primary">Refresh</Button>
        </div>
      )
    }
  }
} 