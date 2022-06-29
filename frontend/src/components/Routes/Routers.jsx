import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Rega from '../Rega/Rega';
import Loga from '../Loga/Loga';
import Lk from '../Lk/Lk';
import NewOrder from '../NewOrder/NewOrder';
import Home from '../Home/Home';

function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Rega />} />
        <Route path="/lk" element={<Lk />}/>
        {/* <Route path="/logout" element={}/>
        <Route path="/photo-uslugi" element={}/>
        <Route path="/photo-uslugi/photopechat" element={}/>
        <Route path="/photo-uslugi/photopechat" element={}/>
        <Route path="/photo-uslugi/fnd" element={}/>
        <Route path="/photo-uslugi/pechati" element={}/>
        <Route path="/photo-uslugi/poligraphiya" element={}/>
        <Route path="/photo-uslugi/restavraciya" element={}/>
        <Route path="/photo-uslugi/vizitki" element={}/>
        <Route path="/photo-uslugi/listovki" element={}/>
        <Route path="/photo-uslugi/kalendary" element={}/>
        <Route path="/photo-uslugi/shirik" element={}/>
        <Route path="/photo-uslugi/ocifrovka" element={}/>
        <Route path="/photo-uslugi/drugieuslugi" element={}/>
        <Route path="/photo-suvenieres/" element={}/>
        <Route path="/photo-suvenieres/kruzhki" element={}/>
        <Route path="/photo-suvenieres/futbolki" element={}/>
        <Route path="/photo-suvenieres/photomagnitu" element={}/>
        <Route path="/photo-suvenieres/photopazly" element={}/>
        <Route path="/photo-suvenieres/chasu" element={}/>
        <Route path="/photo-suvenieres/tarelki" element={}/>
        <Route path="/photo-suvenieres/raznytekstil" element={}/>
        <Route path="/photo-suvenieres/dlyainteriera" element={}/>
        <Route path="/photo-suvenieres/poleznyeveschi" element={}/>
        <Route path="/me" element={}/>
        <Route path="/oplata" element={}/>
        <Route path="/opt" element={}/>
        <Route path="/blog" element={}/>
        <Route path="/contact" element={}/> */}
        <Route path="/login" element={<Loga/>}/>
        <Route path="/new_order" element={<NewOrder/>}/>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/> */}
      </Routes>
  );
}

export default Routers;
