import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <h3>Register</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form action="{{ url_for('auth.register') }}" method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" />
                            </div>
                            <button className="btn btn-info btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
