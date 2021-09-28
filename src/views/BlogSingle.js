import moment from 'moment';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BlogSingle extends Component {
    constructor() {
        super();

        this.state ={
            post: {},
            loadingState: 'LOADING'
        }
    }

    componentDidMount() {
        fetch( 'http:localhost:5000/api/posts' )
        .then( res => res.json() )
        .then( data => {

            let post;
            for (const p of data) {
                if( p.id === parseInt( this.props.match.params.id ) ) {
                    post = {
                        ...p,
                        firstName: p.user.first_name,
                        lastName: p.user.last_name
                    };
                    break;
                }
            }
            this.setState({
                post: post,
                loadingState: 'LOADED'
            })
        })
    }

    render() {
        // console.log( this.props.match.params )
        const p = this.state.post;
        console.log(p)

        if( this.state.loadingState === 'LOADED' )
        {
            return (
                <React.Fragment>
                    <Link to="/">&laquo;Back</Link>
                    <hr />
                    <li className="list-group-item">
                        <p>{p.body}</p>
                        <div>
                            <span>
                                <cite>&mdash; {p.user.first_name} {p.user.last_name}</cite>
                                <small className="float-right">{moment(p.date_created).fromNow()} seconds ago</small>
                            </span>
                        </div>
                    </li>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    LOADING...
                </React.Fragment>
            )
        }
    }
}
