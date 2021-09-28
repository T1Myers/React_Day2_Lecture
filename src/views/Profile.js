import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h3>
                    Profile | Welcome [email address here]
                </h3>
                <hr />

                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src="" alt="profile" />
                    </div>
                    <div className="col-md">
                        <form action="" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" name="first_name" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" name="last_name" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="example@email.com" name="email"
                                            value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" name="bio" id="" cols="30" rows="10"
                                            placeholder="Type bio here"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-info btn-block" value="Update Profile" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <p>
                                    <a href=".">Post Body Here</a>
                                </p>
                                <div>
                                    <span>
                                        <cite>&mdash; Jane Doe</cite>
                                        <small className="float-right">2 seconds ago</small>
                                    </span>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
