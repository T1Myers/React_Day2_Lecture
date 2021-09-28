import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h3>Login</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form action="" method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="remember_me" value="checked" />
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <button className="btn btn-success btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
