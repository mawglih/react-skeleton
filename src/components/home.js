import React, { Component } from 'react';
import { db } from '../firebase';
import Sidebar from '../components/Navigation/Sidebar';
import Hamburger from '../components/Navigation/Hamburger';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'menuH',
            buttonStyle: 'visible',
         }
         this.hide = this.hide.bind(this);
         this.handleMouseDown = this.handleMouseDown.bind(this);
       }
       handleMouseDown(e) {
         this.show();
         e.stopPropagation();
       }
       show() {
         this.setState({
           name: 'menuS',
           buttonStyle: 'hidden',
         });
       }
       hide() {
         this.setState({
            name: 'menuH',
            buttonStyle: 'visible',
         });
       }
    render() {
        return(
            <div>
                <Sidebar hide={this.hide} name={this.state.name}>
                    <Hamburger click={this.handleMouseDown} buttonStyle={this.state.buttonStyle}/>
                </Sidebar>
            </div>
        );
    }
}

export default HomePage;