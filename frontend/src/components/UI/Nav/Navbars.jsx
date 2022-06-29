import React from 'react';
import 'react-bootstrap';
import 'react-router-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';

function Navbars() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <LinkContainer to="/"><Navbar.Brand href="/">Главная</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/lk"><Nav.Link>Личный кабинет</Nav.Link></LinkContainer>
              <LinkContainer to="/logout"><Nav.Link>Выйти</Nav.Link></LinkContainer>
              <LinkContainer to="/photo-uslugi"><NavDropdown title="Фотоуслуги">
                <NavDropdown.Item href="/photopechat">Печать цветных фотографий</NavDropdown.Item>
                <NavDropdown.Item href="/fnd">Срочное фото на документы</NavDropdown.Item>
                <NavDropdown.Item href="/pechati">Изготовление печатей и штампов</NavDropdown.Item>
                <NavDropdown.Item href="/poligraphiya">Полиграфические услуги</NavDropdown.Item>
                <NavDropdown.Item href="/restavraciya">Реставрация фотографий</NavDropdown.Item>
                <NavDropdown.Item href="/vizitki">Печать визиток</NavDropdown.Item>
                <NavDropdown.Item href="/listovki">Печать листовок</NavDropdown.Item>
                <NavDropdown.Item href="/kalendary">Печать календарей</NavDropdown.Item>
                <NavDropdown.Item href="/shirik">Широкоформатная печать</NavDropdown.Item>
                <NavDropdown.Item href="/ocifrovka">Оцифровка</NavDropdown.Item>
                <NavDropdown.Item href="/drugieuslugi">Другие фотоуслуги</NavDropdown.Item>
              </NavDropdown></LinkContainer>
              <LinkContainer to="/photo-suvenieres"><NavDropdown title="Фотосувениры">
                <NavDropdown.Item href="/kruzhki">Кружки</NavDropdown.Item>
                <NavDropdown.Item href="/futbolki">Футболки</NavDropdown.Item>
                <NavDropdown.Item href="/photomagnitu">Фотомагниты</NavDropdown.Item>
                <NavDropdown.Item href="/photopazly">Фотопазлы</NavDropdown.Item>
                <NavDropdown.Item href="/chasu">Часы</NavDropdown.Item>
                <NavDropdown.Item href="/tarelki">Тарелки</NavDropdown.Item>
                <NavDropdown.Item href="/raznytekstil">Разный текстиль</NavDropdown.Item>
                <NavDropdown.Item href="/dlyainteriera">Украшение интерьера</NavDropdown.Item>
                <NavDropdown.Item href="/poleznyeveschi">Полезные вещи</NavDropdown.Item>
              </NavDropdown></LinkContainer>
              <LinkContainer to="/me"><Nav.Link>О компании</Nav.Link></LinkContainer>
              <LinkContainer to="/oplata"><Nav.Link>Оплата</Nav.Link></LinkContainer>
              <LinkContainer to="/opt"><Nav.Link>Опт</Nav.Link></LinkContainer>
              <LinkContainer to="/blog"><Nav.Link>Блог</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link>Контакты</Nav.Link></LinkContainer>
              <LinkContainer to="/registration"><Nav.Link>Регистрация</Nav.Link></LinkContainer>
              <LinkContainer to="/login"><Nav.Link>Авторизация</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
