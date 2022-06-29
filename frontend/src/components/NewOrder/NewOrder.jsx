import React from "react";
import './NewOrder.css'
import { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';

function NewOrder() {
  const user = {
    username: 'Vasya',
    email: 'vasya647@yandex.ru',
    u_phone: '+79008631213',
    u_photos: '121',
    u_fnd: '1',
    u_kruzhka: '3',
  }

  function setFile(event) {
    // Get the details of the files
    // event.target.files
    console.log(event.target.files)
  }
  
  let fil;

  const [count, setCount] = useState(0);
  const counter = (event) => {
    fil = event.target.files.length;
    console.log(event.target.files.length, 'event.target.files.length')
    console.log(event.target.files, 'event.target.files')
    console.log('setFile', setFile.File);
    setCount(Number(fil) + count)
  };

  console.log('count', {count});

  // const handleSubmit = async (data) => {

  //   const response = await fetch('http://localhost:4000/api/email', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       ...data, username, email, phone, fil, counter, uniKey, mainEmail
  //     }),
  //   });
  //   // const user = await response.json();
  //   // console.log(user.message)
  //   // dispatch(actionsUser.setUser(user));
  //   // dispatch(actionsUser.initUser());
  //   // reset()
  //   setMail((mail) => 'frends__img-block')
  //   setTimeout(() => setMail((mail) => "frends__img-none"), 3500)
  // }

  return (
    <div className="neworderpage">
      <Card className="cardorder">
        <Card.Title className="ordertitle" id="ordertitle">Оформление нового заказа</Card.Title>
        <Form action="/new_order" /* onSubmit={handleSubmit} */ className="formOrder">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Введите имя" value={user.username} name="username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Введите имя" value={user.email} name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="phone" placeholder="Введите пароль" value={user.u_phone} name="phone"/>
          </Form.Group>
          <Form.Select aria-label="Default select example" name="selectform">
            <option>Выберите услугу</option>
            <option value="1">Печать фото 10х15</option>
            <option value="2">Печать фото 13Х18</option>
            <option value="3">Печать фото 15х21</option>
            <option value="4">Печать фото 21х30</option>
            <option value="5">Печать фото 21х30 фотобумага "сатин"</option>
            <option value="6">Печать фото 21х30 самоклеющаяся фотобумага</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ваши пожелания к заказу</Form.Label>
            <Form.Control as="textarea" rows={3} name="textformorder"/>
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Добавить файлы</Form.Label>
            <Form.Control type="file" multiple className="fileds" name="fileds" id="fileElementId" onChange={counter}/>
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Загружено {count} файлов</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Оформить
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default NewOrder;
