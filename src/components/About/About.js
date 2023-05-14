import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import {
  faGreaterThan,
  faLessThan,
  faQuestion,
  faSmile,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "./data";

// const paraStyle = {
//   textAlign: "center",
//   fontSize: "1.4rem",
//   lineHeight: "2",
//   margin: " 0 5.5%",
// };
// const divStyle1 = {
//   backgroundColor: "#035397",
//   padding: " 5% 0",
//   color: "white",
// };

// const divStyle2 = {
//   backgroundColor: "#ffff",
//   padding: " 5% 0",
//   color: "#035397",
// };

const MainContainer = styled.div`
  background-color: #ffff;
  height: 800px;

  .title {
    color: #ffaa4c;
    text-align: center;
    margin: 15px 0;
  }
  .carousel {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg,#ff3d02,#e73c7e,#23a6d5,#23d5ab);
    border-radius: 15px;
    margin: 10px 30px;
    text-align: center;
    padding: 0 150px;
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0%{
        background-position: 0% 50%;
    }   
    50%{
        background-position: 100% 50%;
    }           
    100%{
        background-position: 0% 50%;
    }
}

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .icon {
    font-size: 5rem;
    color: #F6F54D;
  }
  .desp{
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    text-shadow: 2px 2px 2px black;
  }
  .right-arrow {
    position: absolute;
    top: 50vh;
    right: 32px;
    font-size: 2.5rem;
    color: #F6F54D;
    z-index: 10;
    user-select: none;
    cursor: pointer;
  }
  .left-arrow {
    position: absolute;
    top: 50vh;
    left: 32px;
    font-size: 2.5rem;
    color: #F6F54D;
    z-index: 10;
    user-select: none;
    cursor: pointer;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

function About() {
  const [current, setCurrent] = useState(0);
  const len = items.length;
  const slides = items;

  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <MainContainer>
        <h1 className="title">About Us</h1>
        <div className="carousel">
          <FontAwesomeIcon
            className="left-arrow"
            icon={faLessThan}
            onClick={prevSlide}
          />

          {items.map((item, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"}>
                {index === current && (
                  <>
                    <h3>
                      <FontAwesomeIcon className="icon" icon={item.icon} />
                    </h3>
                    <span className="desp">{item.desp}</span>
                  </>
                )}
              </div>
            );
          })}
          <FontAwesomeIcon
            className="right-arrow"
            icon={faGreaterThan}
            onClick={nextSlide}
          />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}

export default About;
