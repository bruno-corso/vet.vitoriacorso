import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Menu from './Componentes/Menu';
import Contato from 'Paginas/Contato';
import LayoutBase from 'Componentes/LayoutBase';
import Rodape from 'Componentes/Rodape';
import Post from 'Paginas/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
          <Route path='contato' element={<Contato />} />
          <Route path='/post/:id' element={<Post />} />
        </Route>
        <Route path='*' element={"Error 404 - Página não encontrada!"} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
