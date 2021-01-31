import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import { Grid, Snackbar, Card } from "@material-ui/core";
import * as buttonMaterial from "@material-ui/core/button";
import shoppingImage from "./shopping-image.png";
import Button from "../../components/button/index";
import "./style.css";
import Swiper from "swiper"
import 'swiper/swiper.scss';

export default function LandingPage(props) {
  const [hovered, setHovered] = useState(false);

  const slideData = [
    {
      name: "Slide one",
      class: "sliderCard",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",      img: "img/fullscreen.png",
      buttonText: "Coming soon...",
      link: "http://ogafit.com/#",
      disabled:true
    },
    {
      name: "Slide two",
      class: "sliderCard",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",     img: "img/fullscreen.png",
      buttonText: "Visit Team Bicep",
      link: "http://teambicep.com/",
      disabled:false
    },
    {
      name: "Slide three",
      class: "sliderCard",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",      img: "img/fullscreen.png",
      buttonText: "Visit Team Bicep",
      link: "http://teambicep.com/",
      disabled:false
    },
    {
      name: "Slide four",
      class: "sliderCard",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      img: "img/fullscreen.png",
      buttonText: "Visit Team Bicep",
      link: "http://teambicep.com/",
      disabled:false
    },
    {
      name: "Slide five",
      class: "sliderCard",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      img: "img/fullscreen.png",
      buttonText: "Visit Team Bicep",
      link: "http://teambicep.com/",
      disabled:false
    },
  ];

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  const hoveringEnter = () => {
    setHovered(true);
  };

  const hoveringLeave = () => {
    setHovered(false);
  };

  useEffect(() =>{
    const config = {
      pagination: { el: ".swiper-pagination", clickable: true },
      autoHeight: true,
        allowTouchMove: true,
        autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
      slidesPerView: 2.5,
      breakpoints: {
        // "@1.01": {
        //   slidesPerView: 2,
        // }
        //landscape override ^
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    };
    // swiper var IS used for the product swiper
    // eslint-disable-next-line no-unused-vars
    var swiper = new Swiper('.swiper-container', config)
    })

  return (
    <div className="landing-page">
      <div className="top-section">
        <Header />
        <Grid container direction="row" className="landing-intro__container">
          <Grid
            item
            container
            direction="column"
            xs={7}
            alignItems="flex-start"
            justify="center"
          >
            <div className="landing-intro-text">
              ShopSee
            </div>
            <div className="landing-intro-subtext">
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
            </div>
            <div className="email-capture__container">
              <input
                type="text"
                className="email-capture__input"
                placeholder="Enter email address"
              />
              <div onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
              <Button name="Join!" >test</Button>
              </div>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
              />
              {/* <div className="email-capture__button">Join!</div> */}
            </div>
          </Grid>
          <Grid item container xs={5} justify="center">
            <div
              className="stream"
              onMouseOver={() => hoveringEnter()}
              onMouseOut={() => hoveringLeave()}
            >
              <img
                src={shoppingImage}
                width="300"
                height="477"
                className="stream__thumbnail"
              />
            </div>

          </Grid>
        </Grid>
      </div>

      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "#2fc6a8", padding: "10%" }}
      >
        <Grid item container xs={5} justify="center">
          <div
            className="stream differentColor"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "white", padding: "10%" }}
      >
        <Grid item container xs={5} justify="center">
          <div
            className="stream differentColor"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "#2fc6a8", padding: "10% 0" }}
      >
            <div className="landing-text-slider">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
      <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              slideData.map(el =>
                  <div className="swiper-slide" >
                    <Card className={ el.class }>
                      <h2 className="title">{ el.name }</h2>
                      <img src={ el.img } alt="logo" className="previewLogo" />
                      <p>{ el.description }</p>
                      <a target="_blank"  rel="noopener noreferrer" href={el.link} disabled={el.disabled}><button href={el.link} mat-raised-button disabled={el.disabled}>{el.buttonText}</button></a>
                    </Card>
                  </div>
                )
            }
          </div>
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "white", padding: "10%" }}
      >
        <Grid item container xs={5} justify="center">
          <div
            className="stream differentColor"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
