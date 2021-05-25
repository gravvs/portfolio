import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(242, 143, 221);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 50%;
      background-color: rgba(242, 143, 221);
    }

  p {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Menu = ({open, setOpen, refProject, refAbout, refContact}) => {

  return (
    <StyledMenu open={open}>
      <p onClick={() => {scrollToRef(refAbout); setOpen(!open)}}>
        About me
      </p>
      <p onClick={() => {scrollToRef(refProject); setOpen(!open)}}>
        My projects
        </p>
      <p onClick={() => {scrollToRef(refContact); setOpen(!open)}}>
        Contact
        </p>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 800px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0D0C1D;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Hamburgermenu = ({refProject, refAbout, refContact}) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} {...{refProject, refAbout, refContact}}/>
      </div>
    </div>
  )  
}
export default Hamburgermenu