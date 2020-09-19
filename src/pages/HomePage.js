import React, { Component } from 'react';
import Banner from '../components/HomePageComponents/Banner';
import About from '../components/HomePageComponents/About';
import Menu from '../components/HomePageComponents/Menu';
import Reservation from '../components/HomePageComponents/Reservation';
import Birthday from '../components/HomePageComponents/Birthday';
import Reviews from '../components/HomePageComponents/Reviews';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.handleScrollToMenu = this.handleScrollToMenu.bind(this);
  }
  handleScrollToMenu = () => {
    window.scrollTo({
      top: this.menuRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <>
      <div id="header-top">

        <Banner handleScrollToMenu={this.handleScrollToMenu} />
        <About />
        <Reservation />
        <Menu menuRef={this.menuRef} />
        <Birthday />
        <Reviews />
      </div>
      </>
    );
  }
}
