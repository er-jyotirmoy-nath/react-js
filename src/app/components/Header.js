import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <div className="container">
                <div className="navbar-header">
                    <div className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                    </div>
                </div>
                </div>
            </div>
        );

    };
}

export default Header;