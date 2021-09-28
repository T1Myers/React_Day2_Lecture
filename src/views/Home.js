import React, { Component } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>
                    Home
                </h3>
                <hr />

                <form action="." method="POST">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-10">
                                <input className="form-control" type="text" name='body' placeholder="Your blog post here..." />
                            </div>
                            <div className="col-md-2">
                                <input className="btn btn-info btn-block" type="submit" value="Post" />
                            </div>
                        </div>
                    </div>
                </form>

                <hr />
 
                <ul className="list-group">
                    { this.props.posts.map( p =>(
                        <li key={ p.id } className="list-group-item">
                            <p><Link to={ `/blog/${ p.id }` }>{ p.body }</Link></p>
                            <div>
                                <span>
                                    <cite>&mdash; {p.user.firstName} {p.user.lastName}</cite>
                                    <small className="float-right">{ moment( p.dateCreated ).fromNow() } seconds ago</small>
                                </span>
                            </div>
                        </li>
                    ) ) }
                </ul>
            </div>
        )
    }
}
