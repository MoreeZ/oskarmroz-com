import React, { Component } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

class ToTopButton extends Component {
  state = { atTop: true };
  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollFunction.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction);
  }

  handleScrollToTop = () => {
    const scrollTo = (element, to, duration) => {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = (difference / duration) * 10;
      setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    };
    scrollTo(document.documentElement, 0, 200);
  };

  scrollFunction = () => {
    const button = document.getElementById("back-to-top");
    if (window.pageYOffset === 0) {
      this.setState({ atTop: true });
      button.style.opacity = 0;
      button.style.pointerEvents = "none";
    }
    if (window.pageYOffset > 0 && this.state.atTop) {
      this.setState({ atTop: false });
      button.style.opacity = 1;
      button.style.pointerEvents = "all";
    }
  };

  render() {
    return (
      <div id="back-to-top">
        <IoIosArrowDropupCircle onClick={this.handleScrollToTop} />
      </div>
    );
  }
}

export default ToTopButton;
