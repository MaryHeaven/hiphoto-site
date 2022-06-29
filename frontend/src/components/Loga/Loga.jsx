import React from "react";
import 'react-bootstrap';
import './Loga.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Loga() {
  return (
    <div className="logpage">
      <Card className="cardloga">
        <Card.Title className="logatitle" id="logatitle">Давайте авторизуемся</Card.Title>
        <Form action="/login" method="post" className="formLoga">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить пароль" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Loga;
