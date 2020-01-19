import React, { Component } from 'react';
import styled from 'styled-components';

class NavBar extends Component{
    render(){
        return(
            <div className="navbar navbar-expand-md navbar-dark fixed-top">
                <a className="navbar-brand col-sm-5 col-md-2 mr-0 align-items-center">Pokedex</a>
            </div>
        );
    }
}

export default NavBar;