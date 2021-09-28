 import React, { Component } from 'react'
 import Main from './components/Main';
 
// YOU
// DON'T "ADD" OR "REMOVE" ANYTHING FROM THE DOM.
// YOU ONLY REPLACE THE ENTIRE DOM.
class App extends Component {
  constructor() {
    // console.log('Constructed');
    super();

    this.state = {
      posts: []
    }
  }
// ONLY IN THIS METHOD CAN YOU EXCUTE AN AJAX REQUEST
  componentDidMount(){
    console.log('Mounted');
    fetch( '/data.json' )
    .then( res => res.json() )
    .then( data => {
      // no can do
      // this.state.post = data

     // can do
     this.setState({
       posts: data
     }) 
    } )
  }

   render() {
     console.log('Rendered');

     return (
       <React.Fragment>
         <Main posts={ this.state.posts } />
       </React.Fragment>
     )
   }
 }
 
 export default App;