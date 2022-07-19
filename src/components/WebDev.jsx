import React, { Component } from "react";
import MediaQuery from "react-responsive";
import * as ScrollMagic from "scrollmagic";
import { TimelineMax, TweenMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ToTopButton from "./ToTopButton";
import LaVista from "../assets/la-vista.jpg";
import RiverPeople from "../assets/river-people.jpg";
import Luna from "../assets/luna.jpg";
import Wolfcaps from '../assets/wolfcaps.jpg';
import APM from '../assets/apm.jpg';
import CompCom from '../assets/compcom.jpg';
import Fishing from '../assets/fishing.jpg';
import Discover from '../assets/discover.jpg';

class WebDev extends Component {
  state = { initializeScene: true };

  componentDidMount() {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    var controller = new ScrollMagic.Controller();

    const projects = document.querySelectorAll(".each-project");

    setTimeout(() => {
      document.querySelectorAll(".ep-in").forEach((each) => {
        each.style.pointerEvents = "all";
        each.style.width = "100%";
      });

      //Load projects 1 by 1 with animation
      const tl = new TimelineMax();
      projects.forEach((image, index) => {
        if (index % 2 === 0) {
          tl.from(image, 0.2, { opacity: 0, x: 100 });
        } else {
          tl.from(image, 0.2, { opacity: 0, x: -100 });
        }
      });

      //Apply scroll event animation
      projects.forEach((image) => {
        const scroll = new TimelineMax();
        scroll.from(image.firstChild, 1000, {
          width: "75%",
          opacity: 0.5,
        });
        scroll.to(image.firstChild, 1000, {
          width: "100%",
          opacity: 1,
        });
        scroll.to(image.firstChild, 1000, {
          width: "100%",
          opacity: 1,
        });
        scroll.to(image.firstChild, 1000, {
          width: "75%",
          opacity: 0.5,
        });

        new ScrollMagic.Scene({
          triggerElement: image,
          triggerHook: 0.8,
          duration: "130%",
          offset: -100,
        })
          .setTween(scroll)
          .addTo(controller);
      });
    }, 1590);
  }

  render() {
    return (
      <div className="container web-dev">
        <MediaQuery minWidth={800}>
          <svg
            id="web-dev-background"
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1494 -236C1199.08 -236 960 3.08319 960 298C960 592.917 1199.08 832 1494 832C1788.92 832 2028 592.917 2028 298C2027.67 3.22226 1788.78 -235.67 1494 -236ZM1955.84 485.074L1803.97 511.278C1821.35 447.527 1830.74 381.863 1831.91 315.8H1991.96C1989.95 373.911 1977.72 431.213 1955.84 485.074V485.074ZM996.043 315.8H1156.09C1157.26 381.863 1166.65 447.527 1184.03 511.278L1032.16 485.074C1010.28 431.213 998.051 373.911 996.043 315.8ZM1032.16 110.926L1184.03 84.7216C1166.65 148.473 1157.26 214.137 1156.09 280.2H996.043C998.051 222.089 1010.28 164.787 1032.16 110.926ZM1511.8 49.7995C1575.76 50.6165 1639.56 56.4397 1702.62 67.2258L1765.45 78.064C1784.75 143.754 1795.14 211.738 1796.33 280.2H1511.8V49.7995ZM1708.69 32.1386C1643.63 21.0223 1577.79 15.0165 1511.8 14.1995V-199.4C1613.85 -189.597 1702.49 -96.164 1752.73 39.8131L1708.69 32.1386ZM1476.2 14.1995C1410.21 15.0165 1344.39 21.0223 1279.33 32.1386L1235.27 39.7609C1285.51 -96.2509 1374.15 -189.718 1476.2 -199.479V14.1995ZM1285.4 67.2258C1348.45 56.4397 1412.24 50.6165 1476.2 49.7995V280.2H1191.67C1192.86 211.738 1203.25 143.754 1222.55 78.064L1285.4 67.2258ZM1191.67 315.8H1476.2V546.2C1412.24 545.383 1348.44 539.56 1285.38 528.774L1222.55 517.936C1203.25 452.246 1192.86 384.262 1191.67 315.8V315.8ZM1279.31 563.861C1344.37 574.995 1410.2 581.027 1476.2 581.896V795.496C1374.15 785.683 1285.51 692.251 1235.27 556.274L1279.31 563.861ZM1511.8 581.896C1577.79 581.027 1643.61 574.995 1708.67 563.861L1752.73 556.239C1702.49 692.251 1613.85 785.718 1511.8 795.479V581.896ZM1702.6 528.774C1639.55 539.56 1575.76 545.383 1511.8 546.2V315.8H1796.33C1795.14 384.262 1784.75 452.246 1765.45 517.936L1702.6 528.774ZM1831.91 280.2C1830.74 214.137 1821.35 148.473 1803.97 84.7216L1955.84 110.926C1977.72 164.787 1989.95 222.089 1991.96 280.2H1831.91ZM1937.83 71.6932L1792.25 46.575C1766.08 -38.8007 1717.13 -115.424 1650.64 -175.038C1774.97 -133.546 1878.07 -44.9716 1937.83 71.6932ZM1337.36 -175.038C1270.87 -115.424 1221.92 -38.8007 1195.75 46.575L1050.17 71.6932C1109.93 -44.9716 1213.03 -133.546 1337.36 -175.038ZM1050.17 524.307L1195.75 549.425C1221.92 634.801 1270.87 711.424 1337.36 771.038C1213.03 729.546 1109.93 640.972 1050.17 524.307ZM1650.64 771.038C1717.13 711.424 1766.08 634.801 1792.25 549.425L1937.83 524.307C1878.07 640.972 1774.97 729.546 1650.64 771.038Z"
              fill="#F3F3F3"
            />
            <path
              d="M84.9499 1208.64L-323 996.235V903.302L84.9499 690.023V810.261L-200.345 951.191L84.9499 1088.32V1208.64ZM394.367 576L221.259 1337H120.245L293.353 576H394.367ZM713.381 951.191L428.05 810.279V690.041L836 903.302V996.235L428.05 1208.64V1088.32L713.381 951.191Z"
              fill="#F3F3F3"
            />
          </svg>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <svg
            id="web-dev-background"
            width="511"
            height="900"
            viewBox="0 0 511 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M472 -76C326.751 -76 209 41.7507 209 187C209 332.249 326.751 450 472 450C617.249 450 735 332.249 735 187C734.837 41.8192 617.181 -75.8373 472 -76ZM699.458 279.136L624.663 292.042C633.224 260.643 637.848 228.303 638.425 195.767H717.248C716.26 224.387 710.237 252.609 699.458 279.136V279.136ZM226.752 195.767H305.575C306.152 228.303 310.776 260.643 319.337 292.042L244.542 279.136C233.763 252.609 227.74 224.387 226.752 195.767ZM244.542 94.8644L319.337 81.9584C310.776 113.357 306.152 145.696 305.575 178.233H226.752C227.74 149.613 233.763 121.391 244.542 94.8644ZM480.767 64.7589C512.268 65.1613 543.691 68.0293 574.747 73.3415L605.692 78.6794C615.199 111.032 620.314 144.515 620.901 178.233H480.767V64.7589ZM577.735 56.0608C545.695 50.5859 513.269 47.628 480.767 47.2256V-57.9744C531.025 -53.1459 574.683 -7.12945 599.425 59.8405L577.735 56.0608ZM463.233 47.2256C430.731 47.628 398.314 50.5859 366.273 56.0608L344.575 59.8148C369.317 -7.17225 412.975 -53.2058 463.233 -58.0129V47.2256ZM369.261 73.3415C400.313 68.0293 431.732 65.1613 463.233 64.7589V178.233H323.099C323.686 144.515 328.801 111.032 338.308 78.6794L369.261 73.3415ZM323.099 195.767H463.233V309.241C431.732 308.839 400.309 305.971 369.253 300.658L338.308 295.321C328.801 262.968 323.686 229.485 323.099 195.767V195.767ZM366.265 317.939C398.305 323.423 430.726 326.393 463.233 326.821V432.021C412.975 427.189 369.317 381.172 344.575 314.202L366.265 317.939ZM480.767 326.821C513.269 326.393 545.686 323.423 577.727 317.939L599.425 314.185C574.683 381.172 531.025 427.206 480.767 432.013V326.821ZM574.739 300.658C543.687 305.971 512.268 308.839 480.767 309.241V195.767H620.901C620.314 229.485 615.199 262.968 605.692 295.321L574.739 300.658ZM638.425 178.233C637.848 145.696 633.224 113.357 624.663 81.9584L699.458 94.8644C710.237 121.391 716.26 149.613 717.248 178.233H638.425ZM690.589 75.5418L618.893 63.1708C606.004 21.1225 581.892 -16.6153 549.145 -45.9759C610.379 -25.5403 661.16 18.0833 690.589 75.5418ZM394.855 -45.9759C362.108 -16.6153 337.996 21.1225 325.107 63.1708L253.411 75.5418C282.84 18.0833 333.621 -25.5403 394.855 -45.9759ZM253.411 298.458L325.107 310.829C337.996 352.877 362.108 390.615 394.855 419.976C333.621 399.54 282.84 355.917 253.411 298.458ZM549.145 419.976C581.892 390.615 606.004 352.877 618.893 310.829L690.589 298.458C661.16 355.917 610.379 399.54 549.145 419.976Z"
              fill="#F3F3F3"
            />
            <path
              d="M50.2609 821.233L-200 690.884V633.854L50.2609 502.972V576.758L-124.756 663.242L50.2609 747.391V821.233ZM240.076 433L133.881 900H71.9131L178.108 433H240.076ZM435.778 663.242L260.739 576.769V502.983L511 633.854V690.884L260.739 821.233V747.391L435.778 663.242Z"
              fill="#F3F3F3"
            />
          </svg>
        </MediaQuery>

        <svg
          id="web-dev-header"
          width="664"
          height="73"
          viewBox="0 0 664 73"
          fill="none"
        >
          <path
            d="M69.6941 5.81597L55.1501 56H47.8061L36.1421 15.608L24.0461 56L16.7741 56.072L2.73413 5.81597H9.71813L20.6621 48.368L32.7581 5.81597H40.1021L51.6221 48.224L62.6381 5.81597H69.6941Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M112.864 34.76C112.864 36.008 112.792 37.328 112.648 38.72H81.1123C81.3523 42.608 82.6723 45.656 85.0723 47.864C87.5203 50.024 90.4723 51.104 93.9283 51.104C96.7603 51.104 99.1123 50.456 100.984 49.16C102.904 47.816 104.248 46.04 105.016 43.832H112.072C111.016 47.624 108.904 50.72 105.736 53.12C102.568 55.472 98.6323 56.648 93.9283 56.648C90.1843 56.648 86.8243 55.808 83.8483 54.128C80.9203 52.448 78.6163 50.072 76.9363 47C75.2563 43.88 74.4163 40.28 74.4163 36.2C74.4163 32.12 75.2323 28.544 76.8643 25.472C78.4963 22.4 80.7763 20.048 83.7043 18.416C86.6803 16.736 90.0883 15.896 93.9283 15.896C97.6723 15.896 100.984 16.712 103.864 18.344C106.744 19.976 108.952 22.232 110.488 25.112C112.072 27.944 112.864 31.16 112.864 34.76ZM106.096 33.392C106.096 30.896 105.544 28.76 104.44 26.984C103.336 25.16 101.824 23.792 99.9043 22.88C98.0323 21.92 95.9443 21.44 93.6403 21.44C90.3283 21.44 87.4963 22.496 85.1443 24.608C82.8403 26.72 81.5203 29.648 81.1843 33.392H106.096Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M128.065 23.888C129.409 21.536 131.377 19.616 133.969 18.128C136.561 16.64 139.513 15.896 142.825 15.896C146.377 15.896 149.569 16.736 152.401 18.416C155.233 20.096 157.465 22.472 159.097 25.544C160.729 28.568 161.545 32.096 161.545 36.128C161.545 40.112 160.729 43.664 159.097 46.784C157.465 49.904 155.209 52.328 152.329 54.056C149.497 55.784 146.329 56.648 142.825 56.648C139.417 56.648 136.417 55.904 133.825 54.416C131.281 52.928 129.361 51.032 128.065 48.728V56H121.513V2.71997H128.065V23.888ZM154.849 36.128C154.849 33.152 154.249 30.56 153.049 28.352C151.849 26.144 150.217 24.464 148.153 23.312C146.137 22.16 143.905 21.584 141.457 21.584C139.057 21.584 136.825 22.184 134.761 23.384C132.745 24.536 131.113 26.24 129.865 28.496C128.665 30.704 128.065 33.272 128.065 36.2C128.065 39.176 128.665 41.792 129.865 44.048C131.113 46.256 132.745 47.96 134.761 49.16C136.825 50.312 139.057 50.888 141.457 50.888C143.905 50.888 146.137 50.312 148.153 49.16C150.217 47.96 151.849 46.256 153.049 44.048C154.249 41.792 154.849 39.152 154.849 36.128Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M204.988 5.81597C210.46 5.81597 215.188 6.84797 219.172 8.91197C223.204 10.928 226.276 13.832 228.388 17.624C230.548 21.416 231.628 25.88 231.628 31.016C231.628 36.152 230.548 40.616 228.388 44.408C226.276 48.152 223.204 51.032 219.172 53.048C215.188 55.016 210.46 56 204.988 56H189.364V5.81597H204.988ZM204.988 50.6C211.468 50.6 216.412 48.896 219.82 45.488C223.228 42.032 224.932 37.208 224.932 31.016C224.932 24.776 223.204 19.904 219.748 16.4C216.34 12.896 211.42 11.144 204.988 11.144H195.916V50.6H204.988Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M276.271 34.76C276.271 36.008 276.199 37.328 276.055 38.72H244.519C244.759 42.608 246.079 45.656 248.479 47.864C250.927 50.024 253.879 51.104 257.335 51.104C260.167 51.104 262.519 50.456 264.391 49.16C266.311 47.816 267.655 46.04 268.423 43.832H275.479C274.423 47.624 272.311 50.72 269.143 53.12C265.975 55.472 262.039 56.648 257.335 56.648C253.591 56.648 250.231 55.808 247.255 54.128C244.327 52.448 242.023 50.072 240.343 47C238.663 43.88 237.823 40.28 237.823 36.2C237.823 32.12 238.639 28.544 240.271 25.472C241.903 22.4 244.183 20.048 247.111 18.416C250.087 16.736 253.495 15.896 257.335 15.896C261.079 15.896 264.391 16.712 267.271 18.344C270.151 19.976 272.359 22.232 273.895 25.112C275.479 27.944 276.271 31.16 276.271 34.76ZM269.503 33.392C269.503 30.896 268.951 28.76 267.847 26.984C266.743 25.16 265.231 23.792 263.311 22.88C261.439 21.92 259.351 21.44 257.047 21.44C253.735 21.44 250.903 22.496 248.551 24.608C246.247 26.72 244.927 29.648 244.591 33.392H269.503Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M299.607 49.952L311.847 16.544H318.831L303.351 56H295.719L280.239 16.544H287.295L299.607 49.952Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M361.278 34.76C361.278 36.008 361.206 37.328 361.062 38.72H329.526C329.766 42.608 331.086 45.656 333.486 47.864C335.934 50.024 338.886 51.104 342.342 51.104C345.174 51.104 347.526 50.456 349.398 49.16C351.318 47.816 352.662 46.04 353.43 43.832H360.486C359.43 47.624 357.318 50.72 354.15 53.12C350.982 55.472 347.046 56.648 342.342 56.648C338.598 56.648 335.238 55.808 332.262 54.128C329.334 52.448 327.03 50.072 325.35 47C323.67 43.88 322.83 40.28 322.83 36.2C322.83 32.12 323.646 28.544 325.278 25.472C326.91 22.4 329.19 20.048 332.118 18.416C335.094 16.736 338.502 15.896 342.342 15.896C346.086 15.896 349.398 16.712 352.278 18.344C355.158 19.976 357.366 22.232 358.902 25.112C360.486 27.944 361.278 31.16 361.278 34.76ZM354.51 33.392C354.51 30.896 353.958 28.76 352.854 26.984C351.75 25.16 350.238 23.792 348.318 22.88C346.446 21.92 344.358 21.44 342.054 21.44C338.742 21.44 335.91 22.496 333.558 24.608C331.254 26.72 329.934 29.648 329.598 33.392H354.51Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M376.479 2.71997V56H369.927V2.71997H376.479Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M404.854 56.648C401.158 56.648 397.798 55.808 394.774 54.128C391.798 52.448 389.446 50.072 387.718 47C386.038 43.88 385.198 40.28 385.198 36.2C385.198 32.168 386.062 28.616 387.79 25.544C389.566 22.424 391.966 20.048 394.99 18.416C398.014 16.736 401.398 15.896 405.142 15.896C408.886 15.896 412.27 16.736 415.294 18.416C418.318 20.048 420.694 22.4 422.422 25.472C424.198 28.544 425.086 32.12 425.086 36.2C425.086 40.28 424.174 43.88 422.35 47C420.574 50.072 418.15 52.448 415.078 54.128C412.006 55.808 408.598 56.648 404.854 56.648ZM404.854 50.888C407.206 50.888 409.414 50.336 411.478 49.232C413.542 48.128 415.198 46.472 416.446 44.264C417.742 42.056 418.39 39.368 418.39 36.2C418.39 33.032 417.766 30.344 416.518 28.136C415.27 25.928 413.638 24.296 411.622 23.24C409.606 22.136 407.422 21.584 405.07 21.584C402.67 21.584 400.462 22.136 398.446 23.24C396.478 24.296 394.894 25.928 393.694 28.136C392.494 30.344 391.894 33.032 391.894 36.2C391.894 39.416 392.47 42.128 393.622 44.336C394.822 46.544 396.406 48.2 398.374 49.304C400.342 50.36 402.502 50.888 404.854 50.888Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M440.252 23.816C441.548 21.56 443.468 19.688 446.012 18.2C448.604 16.664 451.604 15.896 455.012 15.896C458.516 15.896 461.684 16.736 464.516 18.416C467.396 20.096 469.652 22.472 471.284 25.544C472.916 28.568 473.732 32.096 473.732 36.128C473.732 40.112 472.916 43.664 471.284 46.784C469.652 49.904 467.396 52.328 464.516 54.056C461.684 55.784 458.516 56.648 455.012 56.648C451.652 56.648 448.676 55.904 446.084 54.416C443.54 52.88 441.596 50.984 440.252 48.728V74.72H433.7V16.544H440.252V23.816ZM467.036 36.128C467.036 33.152 466.436 30.56 465.236 28.352C464.036 26.144 462.404 24.464 460.34 23.312C458.324 22.16 456.092 21.584 453.644 21.584C451.244 21.584 449.012 22.184 446.948 23.384C444.932 24.536 443.3 26.24 442.052 28.496C440.852 30.704 440.252 33.272 440.252 36.2C440.252 39.176 440.852 41.792 442.052 44.048C443.3 46.256 444.932 47.96 446.948 49.16C449.012 50.312 451.244 50.888 453.644 50.888C456.092 50.888 458.324 50.312 460.34 49.16C462.404 47.96 464.036 46.256 465.236 44.048C466.436 41.792 467.036 39.152 467.036 36.128Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M529.805 15.824C532.877 15.824 535.613 16.472 538.013 17.768C540.413 19.016 542.309 20.912 543.701 23.456C545.093 26 545.789 29.096 545.789 32.744V56H539.308V33.68C539.308 29.744 538.325 26.744 536.357 24.68C534.437 22.568 531.82 21.512 528.508 21.512C525.1 21.512 522.388 22.616 520.372 24.824C518.356 26.984 517.349 30.128 517.349 34.256V56H510.869V33.68C510.869 29.744 509.885 26.744 507.917 24.68C505.997 22.568 503.38 21.512 500.068 21.512C496.66 21.512 493.948 22.616 491.932 24.824C489.916 26.984 488.909 30.128 488.909 34.256V56H482.357V16.544H488.909V22.232C490.205 20.168 491.933 18.584 494.093 17.48C496.301 16.376 498.725 15.824 501.365 15.824C504.677 15.824 507.604 16.568 510.148 18.056C512.692 19.544 514.588 21.728 515.836 24.608C516.94 21.824 518.764 19.664 521.308 18.128C523.852 16.592 526.685 15.824 529.805 15.824Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M592.536 34.76C592.536 36.008 592.464 37.328 592.32 38.72H560.784C561.024 42.608 562.344 45.656 564.744 47.864C567.192 50.024 570.144 51.104 573.6 51.104C576.432 51.104 578.784 50.456 580.656 49.16C582.576 47.816 583.92 46.04 584.688 43.832H591.744C590.688 47.624 588.576 50.72 585.408 53.12C582.24 55.472 578.304 56.648 573.6 56.648C569.856 56.648 566.496 55.808 563.52 54.128C560.592 52.448 558.288 50.072 556.608 47C554.928 43.88 554.088 40.28 554.088 36.2C554.088 32.12 554.904 28.544 556.536 25.472C558.168 22.4 560.448 20.048 563.376 18.416C566.352 16.736 569.76 15.896 573.6 15.896C577.344 15.896 580.656 16.712 583.536 18.344C586.416 19.976 588.624 22.232 590.16 25.112C591.744 27.944 592.536 31.16 592.536 34.76ZM585.768 33.392C585.768 30.896 585.216 28.76 584.112 26.984C583.008 25.16 581.496 23.792 579.576 22.88C577.704 21.92 575.616 21.44 573.312 21.44C570 21.44 567.168 22.496 564.816 24.608C562.512 26.72 561.192 29.648 560.856 33.392H585.768Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M620.409 15.824C625.209 15.824 629.097 17.288 632.073 20.216C635.049 23.096 636.537 27.272 636.537 32.744V56H630.057V33.68C630.057 29.744 629.073 26.744 627.105 24.68C625.137 22.568 622.449 21.512 619.041 21.512C615.585 21.512 612.825 22.592 610.761 24.752C608.745 26.912 607.737 30.056 607.737 34.184V56H601.185V16.544H607.737V22.16C609.033 20.144 610.785 18.584 612.993 17.48C615.249 16.376 617.721 15.824 620.409 15.824Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M655.231 21.944V45.2C655.231 47.12 655.639 48.488 656.455 49.304C657.271 50.072 658.687 50.456 660.703 50.456H665.527V56H659.623C655.975 56 653.239 55.16 651.415 53.48C649.591 51.8 648.679 49.04 648.679 45.2V21.944H643.567V16.544H648.679V6.60797H655.231V16.544H665.527V21.944H655.231Z"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
        </svg>
        {/* LUNA ====================================================== */}
        <div className="each-project p-luna">
          <div className="ep-in">
            <img
              className="each-image"
              src={Luna}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">Luna Technology Society</div>
              <div className="project-description">
                I made this website for a society to which I have been invited.
                Luna is a community where we exchange ideas and feed into our
                passions. We are a team of Polish students that are currently
                working on the development of leading technologies including
                rocket science and biofeedback.
                <br /> <br /> I used primarily React for this website.
              </div>
              <a
                href="https://luna-technology-society.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        {/* River people =============================================== */}
        <div className="each-project p-luna">
          <div className="ep-in">
            <img
              className="each-image"
              src={RiverPeople}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">River People Ecuador</div>
              <div className="project-description">
                Wordpress website with online booking system "Fareharbour". I also managed all their social media, and created posters and promotions. 
              </div>
              <a
                href="https://riverpeopleecuador.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        {/* La Vista ================================================== */}
        <div className="each-project p-luna">
          <div className="ep-in">
            <img
              className="each-image"
              src={LaVista}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">La Vista Hotel</div>
              <div className="project-description">
                The website uses Gatsby static site renderer. Every text and image is fully editable through json files. It is optimized for SEO. Custom sitemap and OpenGraph.
              </div>
              <a
                href="https://lavista-demo.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Wolfcaps ============================================================= */}
        <div className="each-project p-wolfcaps">
          <div className="ep-in">
            <img
              className="each-image"
              src={Wolfcaps}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">wolfcaps</div>
              <div className="project-description">
                Wolfcaps is a website A full online store with a working database that follows GDPR laws.
                <br /> <br /> I made the website using React Gatsby. I made the database using Mongodb. I securely set up an api for the business on an ubuntu server.
              </div>
              <a
                href="https://wolfcaps.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>

        {/* APM AUTOMOTIVE */}
        <div className="each-project p-apm">
          <div className="ep-in">
            <img
              className="each-image"
              src={APM}
              alt="APM Autoserwis"
            />
            <div className="hover-details">
              <div className="project-title">APM AUTOMOTIVE</div>
              <div className="project-description">
                APM AUTOMOTIVE is a single page website, made for a Polish
                mechanics business. It is a landing page that uses Green Stock
                Animation Platrofm (gsap) and Scroll Magic to create modern and
                pleasing animation effects.
              </div>
              <a
                href="https://apm-automotive.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>

        
        <div className="each-project p-rap">
          <div className="ep-in">
            <img
              className="each-image"
              src="https://i.ibb.co/xg2fBgt/luna-7.jpg"
              alt="random-anime-picker-img"
            />
            <div className="hover-details">
              <div className="project-title">Random Anime Picker</div>
              <div className="project-description">
                A website targeted towards a niche audience. Most of the website
                users are{" "}
                <a
                  href="https://myanimelist.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyAnimeList
                </a>{" "}
                users. <br />
                <br /> The webiste uses{" "}
                <a
                  href="https://jikan.moe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jikan API
                </a>{" "}
                to find a user and inputs the data into a fancy carousel which
                can be spun by pressing a button.
              </div>
              <a
                href="https://randomanimepicker.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project p-comp">
          <div className="ep-in">
            <img
              className="each-image"
              src={CompCom}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">comp.com</div>
              <div className="project-description">
                My first React & Redux project. An e-commerace store with a
                landing page, search page, unique product pages, profile page
                and more.
                <br /> <br /> I used Firebase & Firestore for the back-end. Few
                months after I originally created the website I redesigned it to
                look as it does today.
              </div>
              <a
                href="https://comp-com.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project p-fishing">
          <div className="ep-in">
            <img
              className="each-image"
              src={Fishing}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">Fishing.IE</div>
              <div className="project-description">
                Fishing.IE blog-like website where the user can view and
                contribute their own, favourite fishing locations.
                <br />
                <br />
                The website is well secured on the front and the backend. It was
                built with React.js using functional components and hooks. The
                website was also optimized to reduce the number of renders in
                each component to minimum.
              </div>
              <a
                href="https://fishing-ie.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project p-discover">
          <div className="ep-in">
            <img
              className="each-image"
              src={Discover}
              alt="Comp-com"
            />
            <div className="hover-details">
              <div className="project-title">Discover</div>
              <div className="project-description">
                Discover is a short front end project. It is a landing page that
                uses Green Stock Animation Platrofm (gsap) and Scroll Magic to
                create modern and pleasing animation effects. Even though the
                project is lacking any functionality it is fully responsive.
              </div>
              <a
                href="https://discover-responsive.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-button">View Live</div>
              </a>
            </div>
          </div>
        </div>
        <div id="last-project" className="each-project">
          <div className="ep-in" />
        </div>
        <ToTopButton />
      </div>
    );
  }
}

export default WebDev;
