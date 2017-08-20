import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
class App extends React.Component{
    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <Header/>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-12">
            <Home />
            </div>
        </div>
            </div>
        );
    };
}

render(<App/>,document.getElementById("root"));