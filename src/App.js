 import React, { Component } from 'react'
 import Main from './components/Main';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://fakebook-june-derek.herokuapp.com/api/shop/products", { mode: 'no-cors' })
    .then(response => {
      if (!response.ok) {
          throw Error("Error fetching the image");
        }
        return response.json()
    .then(allData => {
        this.setState({ images: allData });
      })
      .catch(err => {
        throw Error(err.message);
      });
    }
    );
  }

   render() {
     return (
       <section className="app">
         <p>Check these shoes out!</p>
         {/* <PhotoContainer photos={this.state.photos} /> */}
       </section>
     );
   }
} 

export default App;