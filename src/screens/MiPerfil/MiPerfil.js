import React, { Component } from 'react';


class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    logout() {
        cookies.remove('user-auth-cookie')
        this.props.history.push("/Login");
    };

    render() {
        return (
            <button type="submit" className="btn btn-primary btn-block">Logout</button>
        );
    }
}


export default MiPerfil;