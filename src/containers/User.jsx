import React, { Component } from 'react';

import Axios from 'axios';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

export default class User extends Component {

  state = {
    data: null,
  };

  componentDidMount = () => {
    console.log("User.jsx");
    console.log(this.props);
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
         
          <Button variant="primary" onClick={(e) => this.fetch(1)}>
            BACK
          </Button>

          <p> Page : {data.info.page}</p>
        </div>
      )
    }
  }
} 