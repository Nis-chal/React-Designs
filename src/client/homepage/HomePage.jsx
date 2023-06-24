import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  margin: 0rem;

  overflow: hidden;
  position: relative;

  #image-track {
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    user-select: none; /* -- Prevent image highlighting -- */
  }

  #image-track > .image {
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 100% center;
  }
`;
const HomePage = () => {
  const sliderRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    sliderRef.current.dataset.prevPercentage = "0";
  }, []);

  const handleOnDown = (e) => {
    sliderRef.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    sliderRef.current.dataset.mouseDownAt = "0";
    sliderRef.current.dataset.prevPercentage =
      sliderRef.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (sliderRef.current.dataset.mouseDownAt === "0") return;

    const mouseDelta =
        parseFloat(sliderRef.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(sliderRef.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    sliderRef.current.dataset.percentage = nextPercentage;

    sliderRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of sliderRef.current.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  return (
    <Wrapper
      ref={boxRef}
      onMouseDown={handleOnDown}
      onMouseMove={handleOnMove}
      onMouseUp={handleOnUp}
      onTouchStart={(e) => handleOnDown(e.touches[0])}
      onTouchEnd={(e) => handleOnUp(e.touches[0])}
      onTouchMove={(e) => handleOnUp(e.touches[0])}
    >
      <div ref={sliderRef} className="" id="image-track" data-mouse-down-at="0">
        <img
          className="image"
          draggable="false"
          src="https://plus.unsplash.com/premium_photo-1686879548877-a4736abc4245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images.unsplash.com/photo-1546567075-d7113bee3c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1097&q=80"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06653b48-43c3-403f-9d72-c1c5519db560/dg04lqa-4d19edaa-5349-4459-8cee-69c1ffb89fa0.jpg/v1/fill/w_1319,h_606,q_70,strp/sunset_photographer_by_pajunen_dg04lqa-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvMDY2NTNiNDgtNDNjMy00MDNmLTlkNzItYzFjNTUxOWRiNTYwXC9kZzA0bHFhLTRkMTllZGFhLTUzNDktNDQ1OS04Y2VlLTY5YzFmZmI4OWZhMC5qcGciLCJ3aWR0aCI6Ijw9MTQwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.G9rd57bzekZx8xTVDwyqaycUK4xRvE9u39xOYU2qLmE"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98d1d7f2-ac37-461b-a8ff-1f04eb18e6e6/deso6tf-64c38c80-2a83-40c4-9e3e-e65ddf6b6017.jpg/v1/fill/w_1186,h_674,q_70,strp/great_fire_by_radojavor_deso6tf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MSIsInBhdGgiOiJcL2ZcLzk4ZDFkN2YyLWFjMzctNDYxYi1hOGZmLTFmMDRlYjE4ZTZlNlwvZGVzbzZ0Zi02NGMzOGM4MC0yYTgzLTQwYzQtOWUzZS1lNjVkZGY2YjYwMTcuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gyaukoJGQjQCOLiIyrwysDz-VZN1G0BVwUfqBZCUaXU"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images.unsplash.com/photo-1589933767411-38a58367efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=558&q=80"
          alt=""
          srcSet=""
        />
        <img
          className="image"
          draggable="false"
          src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          srcSet=""
        />
      </div>
    </Wrapper>
  );
};

export default HomePage;
