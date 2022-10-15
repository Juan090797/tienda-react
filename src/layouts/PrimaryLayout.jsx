import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import useHome from "../hook/useHome";
import { fetchCategorie } from "../redux/slices/homeSlice";

const PrimaryLayout = () => {
  const dispatch = useDispatch();
    const company = {
        nombre: 'GrupoMarquina',
        premio: 'Categoria Prueba'
      };

      const { categories} = useHome();
      console.log(categories);
      useEffect(() => {
        dispatch(fetchCategorie());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  

  return (
    <>
      <Header company={company} categories={categories}/>
      <main className="container">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default PrimaryLayout;