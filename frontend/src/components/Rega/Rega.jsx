import React from "react";
import 'react-bootstrap';
import './Rega.css';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Rega() {
  const dispatch = useDispatch();
  const goRegistration = async (event) => {
    event.preventDefault();
    const {
      login: { value: login },
      password: { value: password },
      email: { value: email },
      action: url,
    } = event.target;
    const body = JSON.stringify({ login, password, email });
    const response = await fetch(url, {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const user = await response.json();
    console.log(user)
    const action = {
      type: 'LOGIN_USER',
      payload: user,
    };
    dispatch(action);
  };

  return (
    <div className="regpage">
      <Card className="cardrega">
        <Card.Title className="regatitle" id="regatitle">Давайте зарегистрируемся</Card.Title>
    <Form action="/registration" onSubmit={goRegistration} className="formRega">
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Введите ваш username" name="username"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Control type="text" placeholder="Введите ваше имя" name="firstName"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Control type="text" placeholder="Введите вашу фамилию" name="lastName"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="phone" placeholder="Введите ваш телефон" name="phone"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Введите email" name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Введите пароль" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
    </Card>
    </div>
  )
}

export default Rega;
