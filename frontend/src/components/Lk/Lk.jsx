import React from "react";
import { Card } from "react-bootstrap";
import './Lk.css'

function Lk() {
  const user = {
    username: 'Vasya',
    u_photos: '121',
    u_fnd: '1',
    u_kruzhka: '3',
  }
  return (
    <div className="lkpage">
    <Card className="cardlk">
      <Card.Body>
        <Card.Title>Привет, {user.username}! Это твой личный кабинет</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Здесь можно оформить новый заказ и увидеть предыдущие свои заказы.</Card.Subtitle>
        <Card.Text>
          У вас распечатано уже {user.u_photos} фоток! 
          А также сделано {user.u_fnd} фото на документы и {user.u_kruzhka} кружки! :)
        </Card.Text>
        <Card.Link href="new_order">Оформить новый заказ</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Lk;
