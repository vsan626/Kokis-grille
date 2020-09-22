import React, { Component } from 'react';
import Banner from '../components/HomePageComponents/Banner';
import About from '../components/HomePageComponents/About';
import Reservation from '../components/HomePageComponents/Reservation';
import Birthday from '../components/HomePageComponents/Birthday';
import Reviews from '../components/HomePageComponents/Reviews';

export default class HomePage extends Component {
  //#region <-- scroll to menu if menu on Homepage -->
  // handleScrollToMenu = () => {
  //   window.scrollTo({
  //     top: this.menuRef.current.offsetTop,
  //     behavior: 'smooth'
  //   });
  // };
  //#endregion
  render() {
    return (
      <>
      <div id="header-top">

        <Banner handleScrollToMenu={this.handleScrollToMenu} />
        <About />
        <Reservation />
        {/* <Menu menuRef={this.menuRef} /> */}
        <Birthday />
        <Reviews />
      </div>
      </>
    );
  }
}
