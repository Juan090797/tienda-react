import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useHome from "../hook/useHome";
import HomeSlider from "../components/home/HomeSlider";
import ListProduct from "../components/home/ListProduct";
import { fetchCategorie, fetchReadHero, pruebaApi } from "../redux/slices/homeSlice";
import ListCategories from "../components/home/ListCategories";

const HomePage = () => {
    const dispatch = useDispatch();
    const { heroProducts, products, categories} = useHome();
    useEffect(() => {
        dispatch(fetchReadHero());// eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch(pruebaApi());// eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch(fetchCategorie());// eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (  
      <>
        <HomeSlider heroProducts={heroProducts} />
        <ListCategories categories={categories}/>
        <ListProduct products={products} />
      </>
    );
}

export default HomePage;