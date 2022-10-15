import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';
import Contacto from './pages/Contacto';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { store } from './redux/store';


function App() {
  

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={ <PrimaryLayout />}>
          <Route path="productos">
            <Route path=":slug" element={<ProductPage />} />
            <Route index element={<h1>PRODUCTOS</h1>} />
          </Route>
          <Route path="categorias" element={<h1>Categorias</h1>} />
          <Route path="contactanos" element={<Contacto />} />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
