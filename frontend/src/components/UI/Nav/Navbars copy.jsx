import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rega from '../../Rega/Rega';
import Loga from '../../Loga/Loga';
import Home from '../../Home/Home';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" component={<Home/>}>
          Главная
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/registration"
          component={<Rega/>}>
          Регистрация
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/login"
          aria-current="page"
          component={<Loga/>}>
          Авторизация
        </Link>
      </Breadcrumbs>
    </div>
  );
}
