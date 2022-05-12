import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ROUTER -> pega o caminho (path) da rota atual , funciona como window.location.pathname
// ROUTES -> define as rotas e suas configurações
// ROUTE  -> funciona como um switch, mas para na primeira rota que encontrar

export default function AppRouter() {
  return (
    <>
      <main className='container'>
        <Router>
          <Menu />

          <Routes>
            <Route
              path='/'
              element={<PaginaPadrao />}
            >

              <Route
                index
                element={<Inicio />}
              />

              <Route
                path='cardapio'
                element={<Cardapio />}
              />

              <Route
                path='sobre'
                element={<Sobre />}
              />

              <Route
                path='prato/:id'
                element={<Prato />}
              />
            </Route>

            <Route
              path='*'
              element={<NotFound />}
            />

          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}
