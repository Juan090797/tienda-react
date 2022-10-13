import './App.css';
import Categorie from './pages/Categorie';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  const company = {
    nombre: 'GrupoMarquina',
    premio: 'Categoria Prueba'
  };

  const credits = {
    year: new Date().getFullYear(),
    pagina: 'GrupoMarquina.pe'
  };

  return (
    <>
      <Header company={company}/>
      <main className="container">
        <Home />
        <Categorie />
        <Product /> 
      </main>
      <Footer credits={credits}/>
    </>
       
  );
}

export default App;
