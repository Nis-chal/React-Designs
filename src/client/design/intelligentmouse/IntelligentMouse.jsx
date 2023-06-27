import React from "react";
import { FaLink, FaYoutube } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { RiYoutubeFill } from "react-icons/ri";
import styled from "styled-components";

const Wrapper = styled.div`
  .box {
    background-color: rgb(20, 20, 20);
    height: 100vh;
    margin: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 4vw, 100px);
  }

  .box:hover > #trailer {
    opacity: 1;
  }

  #trailer {
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 20px;

    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10000;

    pointer-events: none;
    opacity: 0;
    transition: opacity 500ms ease;

    display: grid;
    place-items: center;
  }

  #trailer:not([data-type=""]) > #trailer-icon {
    opacity: 1;
  }

  #trailer-icon {
    font-size: 6px;
    line-height: 4px;

    opacity: 0;
    transition: opacity 400ms ease;
  }

  .interactable {
    aspect-ratio: 1 / 1.5;
    width: clamp(120px, 40vmin, 600px);
    background-position: center 50%;
    background-size: 100%;
    opacity: 0.4;

    transition: background-size 400ms ease, opacity 400ms ease;
  }

  .interactable:hover {
    background-size: 105%;
    opacity: 0.8;
  }

  /* -- YouTube Link Styles -- */

  body.menu-toggled > .meta-link > span {
    color: rgb(30, 30, 30);
  }

  #source-link {
    bottom: 60px;
  }

  #source-link > i {
    color: rgb(94, 106, 210);
  }

  #yt-link > i {
    color: rgb(239, 83, 80);
  }

  .meta-link {
    align-items: center;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    bottom: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: inline-flex;
    gap: 5px;
    left: 10px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
  }

  .meta-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .meta-link > i,
  .meta-link > span {
    height: 20px;
    line-height: 20px;
  }

  .meta-link > span {
    color: white;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
  }
`;

const IntelligentMouse = () => {
  const mouseRef = React.useRef();
  const boxRef = React.useRef();
  const [mouseicon, setIcon] = React.useState(
    <FiArrowUpRight id="trailer-icon" />
  );

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - mouseRef.current.offsetWidth / 2,
      y = e.clientY - mouseRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
    };

    mouseRef.current.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  const getTrailerClass = (type) => {
    switch (type) {
      case "video":
        return <AiFillPlayCircle id="trailer-icon" />;
      default:
        return <FiArrowUpRight id="trailer-icon" />;
    }
  };

  const onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;

    console.log(interactable);

    animateTrailer(e, interacting);

    mouseRef.current.dataset.type = interacting
      ? interactable.dataset.type
      : "";

    if (interacting) {
      let newicon = getTrailerClass(interactable.dataset.type);
      setIcon(newicon);
    }
  };
  return (
    <Wrapper>
      <div
        className="box"
        ref={boxRef}
        onMouseMove={onmousemove}
        onTouchMove={(e) => onmousemove(e.touches[0])}
      >
        <div ref={mouseRef} id="trailer">
          <div id="trailer-icon">{mouseicon}</div>
        </div>
        <div
          className="interactable"
          data-type="link"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <div
          className="interactable"
          data-type="video"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)",
          }}
        ></div>
        <a
          rel="noreferrer"
          id="source-link"
          className="meta-link"
          href="https://monopo.vn"
          target="_blank"
        >
          <FaLink className="fa-solid fa-link" />
          <span>Source</span>
        </a>
        <a
          rel="noreferrer"
          id="yt-link"
          className="meta-link"
          href="https://youtu.be/CZIJKkwc8l8"
          target="_blank"
        >
          <RiYoutubeFill className="fa-brands fa-youtube" />
          <span>3.5 min tutorial</span>
        </a>
      </div>
    </Wrapper>
  );
};

export default IntelligentMouse;
