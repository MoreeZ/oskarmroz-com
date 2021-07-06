import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TimelineMax, TweenMax } from "gsap/all";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  state = {
    reminderAppeared: false,
  };

  showNav = () => {
    const list = document.getElementById("nav-list").childNodes;
    const navBg = document.querySelector(".nav-bg");
    const screenFade = document.querySelector(".screen-fade");
    document.querySelector(".home-button svg").style.transform = "scale(0.7)";
    navBg.style.pointerEvents = "all";
    const navUl = document.getElementById("nav-list");
    navUl.style.pointerEvents = "all";
    screenFade.style.opacity = 1;
    screenFade.style.pointerEvents = "all";
    const t1 = new TimelineMax();
    t1.to(list[4], 0.05, {
      transform: "translateX(130px) translateY(0px) scale(1)",
      opacity: 1,
    });
    t1.to(list[3], 0.05, {
      transform: "translateX(100px) translateY(73px) scale(1)",
      opacity: 1,
    });
    t1.to(list[2], 0.05, {
      transform: "translateX(0px) translateY(100px) scale(1)",
      opacity: 1,
    });
    t1.to(list[1], 0.05, {
      transform: "translateX(-100px) translateY(73px) scale(1)",
      opacity: 1,
    });
    t1.to(list[0], 0.05, {
      transform: "translateX(-130px) translateY(0px) scale(1)",
      opacity: 1,
    });

    // Hide reminder
    this.setState({ ...this.state, reminderAppeared: true });
    const reminder = document.querySelector(".reminder-cont");
    reminder.style.opacity = 0;
  };
  hideNav = () => {
    const list = document.getElementById("nav-list").childNodes;
    const navBg = document.querySelector(".nav-bg");
    const screenFade = document.querySelector(".screen-fade");

    setTimeout(() => {
      try {
        document.querySelector(".home-button svg").style.transform = "scale(1)";
      } catch (err) {
        console.log(err);
      }
    }, 200);
    navBg.style.pointerEvents = "none";
    screenFade.style.opacity = 0;
    screenFade.style.pointerEvents = "none";

    // const t1 = new TimelineMax();
    TweenMax.to(list[4], 0.15, {
      transform: "translateX(0px) translateY(0px) scale(0)",
      opacity: 0,
    }).delay(0.2);
    TweenMax.to(list[3], 0.15, {
      transform: "translateX(0px) translateY(0px) scale(0)",
      opacity: 0,
    }).delay(0.2);
    TweenMax.to(list[2], 0.15, {
      transform: "translateX(0px) translateY(0px) scale(0)",
      opacity: 0,
    }).delay(0.2);
    TweenMax.to(list[1], 0.15, {
      transform: "translateX(-0px) translateY(0px) scale(0)",
      opacity: 0,
    }).delay(0.2);
    TweenMax.to(list[0], 0.15, {
      transform: "translateX(-0px) translateY(0px) scale(0)",
      opacity: 0,
    }).delay(0.2);
  };
  componentDidMount() {
    const oskarMroz = document.querySelector(".home-button");
    const screenFade = document.querySelector(".screen-fade");
    const list = document.getElementById("nav-list").childNodes;
    oskarMroz.addEventListener("mouseover", this.showNav);
    screenFade.addEventListener("mouseover", this.hideNav);
    list.forEach((x) => x.addEventListener("click", this.hideNav));
    this.forceUpdate();
    const reminder = document.querySelector(".reminder-cont");

    setTimeout(() => {
      if (!this.state.reminderAppeared) {
        reminder.style.opacity = 1;
      }
    }, 3000);
  }

  componentDidUpdate() {
    const list = document.getElementById("nav-list").childNodes;
    const renderCase = (num) => {
      list[num].firstChild.style.color = "#f46d3e";
      list[num].lastChild.style.backgroundColor = "#f46d3e";
    };
    const clearNav = () => {
      list.forEach((li) => {
        li.firstChild.style.color = "#4d4d4d";
        li.lastChild.style.backgroundColor = "#4d4d4d";
      });
    };
    //clears existing nav effects
    clearNav();

    switch (window.location.pathname) {
      case "/about":
        return renderCase(0);
      case "/web_dev":
        return renderCase(1);
      case "/":
        return renderCase(2);
      case "/design":
        return renderCase(3);
      case "/contact":
        return renderCase(4);
      default:
        clearNav();
        break;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="screen-fade" />
        <nav>
          <div className="nav-bg" />
          <div className="home-button">
            <svg
              width="51"
              height="61"
              viewBox="0 0 51 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4047 1.62875e-06C33.8672 2.01888e-06 37.3734 1.29101 39.9234 3.87302C42.4203 6.45503 43.6688 10.5701 43.6688 16.2183C43.6688 21.0057 42.8188 26.3849 41.1188 32.3558C39.4188 38.3267 36.9484 43.437 33.7078 47.6865C30.4141 51.9361 26.5359 54.0608 22.0734 54.0608C20.4797 54.0608 19.0984 53.8457 17.9297 53.4153C20.2672 52.0168 22.525 49.1389 24.7031 44.7817C26.8281 40.4246 28.5547 35.5564 29.8828 30.1773C31.2109 24.7981 31.875 20.0375 31.875 15.8955C31.875 12.9907 31.5031 10.7046 30.7594 9.03705C30.0156 7.3695 28.8469 6.53572 27.2531 6.53572C24.65 6.53572 22.0734 8.41843 19.5234 12.1839C16.9203 16.0031 14.7953 20.7906 13.1484 26.5463C11.4484 32.302 10.5984 37.8426 10.5984 43.168C10.5984 46.5031 10.8906 49.1658 11.475 51.1561C12.0063 53.2002 13.0156 54.7332 14.5031 55.7553C15.9906 56.7773 18.0891 57.2884 20.7984 57.2884C24.8891 57.2884 28.6875 56.4277 32.1937 54.7063C35.7 53.0388 38.5156 50.6182 40.6406 47.4444C42.7125 44.3245 43.7484 40.6936 43.7484 36.5516C43.7484 35.0992 43.6156 34.0234 43.35 33.3241C43.0844 32.6786 42.9516 32.302 42.9516 32.1944C45.6078 32.1944 47.6266 32.7324 49.0078 33.8082C50.3359 34.884 51 36.6054 51 38.9722C51 42.6839 49.5125 46.2341 46.5375 49.623C43.5094 53.0119 39.525 55.7553 34.5844 57.8532C29.5906 59.9511 24.3578 61 18.886 61C12.2453 61 7.43751 59.1711 4.46251 55.5132C1.48751 51.8554 -3.43151e-06 46.7989 -2.86719e-06 40.3439C-2.36401e-06 34.5882 1.06251 28.5904 3.18751 22.3505C5.31251 16.1107 8.60624 10.8122 13.0687 6.45503C17.4781 2.15168 22.9235 1.06214e-06 29.4047 1.62875e-06Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="14"
                  y1="7"
                  x2="82"
                  y2="91"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F46D3E" />
                  <stop offset="1" stopColor="#F43E3E" />
                </linearGradient>
              </defs>
            </svg>
            <div className="reminder-cont">
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.4182 22.2088C41.7092 22.7204 41.6221 23.3655 41.2051 23.7826L41.0521 23.9392C40.3626 24.6529 38.5441 26.5344 35.5875 28.1489C28.9977 31.7487 20.8406 30.7135 15.2629 25.627L11.5463 29.3436C11.1718 29.7181 10.6074 29.8321 10.118 29.6281C9.6277 29.4252 9.3089 28.9469 9.3089 28.4168L9.3089 11.7338C9.3089 11.3723 9.45531 11.0442 9.69261 10.8069C9.92986 10.5696 10.258 10.4232 10.6195 10.4232L27.3025 10.4232C27.8326 10.4232 28.3109 10.742 28.5139 11.2323C28.7178 11.7217 28.6038 12.2861 28.2293 12.6606L23.4599 17.4301C25.0846 19.4089 30.1201 24.0829 39.9566 21.5851C40.5275 21.4405 41.1263 21.6944 41.4182 22.2088Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="32.4063"
                    y1="32.5937"
                    x2="10.156"
                    y2="10.3435"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F46D3E" />
                    <stop offset="1" stop-color="#E96435" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="click-me-reminder">Click me!</div>
            </div>
          </div>
          <ul id="nav-list">
            <li id="about-nav">
              <Link to="/about">About</Link>
              <div className="nav-underline" />
            </li>
            <li id="web_dev-nav">
              <Link to="/web_dev">Web Dev</Link>
              <div className="nav-underline" />
            </li>
            <li id="home-nav">
              <Link to="/">Home</Link>
              <div className="nav-underline" />
            </li>
            <li id="design-nav">
              <Link to="/design">Design</Link>
              <div className="nav-underline" />
            </li>
            <li id="contact-nav">
              <Link to="/contact">Contact</Link>
              <div className="nav-underline" />
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
