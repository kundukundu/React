import React, { Component } from 'react';


class ListaFotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: 'hellow'
    }
  }

  componentDidMount() {
    var myInit = {
      method: "GET"
    };

    fetch('./black-wall.jpg', myInit).then((response) => {
      return response
    }).then((data) => {
      console.log(data);

      this.setState({
        imageUrl: data.url
      });
    });
  }

  render() {
    return (
      <div className="container photo-list">
        <img src={this.state.imageUrl} className="photo" />
      </div>
    )
  }
}

export default ListaFotos;