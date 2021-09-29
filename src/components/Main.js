import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Shop from '../views/Shop';
import Contact from '../views/Contact';
import Profile from '../views/Profile';
import Login from '../views/Login';
import Register from '../views/Register';
import ProductSingle from '../views/ProductSingle';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <Link className="navbar-brand" to=".">Fakebook React</Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target=".collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="/shop" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Shop</Link>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                                        <Link class="dropdown-item" href="/Shop">Products</Link>
                                        <Link class="dropdown-item" href=".">Cart</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="container">
                    <Switch>
                        <Route exact path='/' render={() => <Home posts={ this.props.posts } /> } />
                        <Route exact path='/shop' render={ () => <Shop /> } />
                        <Route exact path='/contact' render={ () => <Contact /> } />
                        <Route exact path='/profile' render={() => <Profile /> } />
                        <Route exact path='/login' render={() => <Login />} />
                        <Route exact path='/register' render={() => <Register /> } />
                        <Route exact path='/product/:id' render={({ match }) => <ProductSingle products={this.props.products} match={match} /> } />
                    </Switch>
                </main>;

                <footer class="bg-dark text-light">
                    <div class="container">
                        {/* <div class="row content-spacing"> */}
                            <div class="col-md-3">
                                <h6>Page Links</h6>
                                <ul class="list-unstyled">
                                    <li class="list-item"><a class="text-light" href="/">Home</a></li>
                                    <li class="list-item"><a class="text-light" href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        {/* </div> */}
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
