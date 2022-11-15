import React, { useState } from "react";
import styled from "styled-components";
import BookATable from "./BookATable";
import OurMenu from "./OurMenu";

const NavMenu = () => {
  const [ourMenu, setOurMenu] = useState(false);
  const ourHandler = () => {
    setOurMenu(!ourMenu);
  };
  const [book, setBook] = useState(false);
  const bookHandler = () => {
    setBook(!book);
  };
  return (
    <Div>
      <Ul>
        <Li onClick={ourHandler}>Our menus</Li>
        <Li onClick={bookHandler}>Book a table</Li>
        {ourMenu && <OurMenu setOurMenu={setOurMenu} ourMenu={ourMenu} />}
        {book && <BookATable setBook={setBook} book={book} />}
      </Ul>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background: #8e7427;
  box-shadow: 2px 2px 18px black;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  width: 18rem;
  text-align: center;
  font-size: 1.9rem;
  font-weight: 500;
  margin: 0 3.2rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.6rem 2rem;
`;

export default NavMenu;