import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

function Logout(props) {


    function logout() {
        cookies.remove('auth-user')
        props.history.push("/Login");
    };

    return (
    <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={logout}
    >
        Logout
    </button>
);
}

export default Logout;