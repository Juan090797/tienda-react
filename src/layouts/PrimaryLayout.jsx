import { Outlet } from "react-router-dom";
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';

const PrimaryLayout = () => {

    const company = {
        nombre: 'GrupoMarquina',
        premio: 'Categoria Prueba'
      };
  

  return (
    <>
      <Header company={company}/>
      <main className="container">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default PrimaryLayout;