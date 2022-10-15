import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useHome from "../hook/useHome";
import HomeSlider from "../components/home/HomeSlider";
import ListProduct from "../components/home/ListProduct";
import { fetchReadHero, pruebaApi } from "../redux/slices/homeSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const { heroProducts, products} = useHome();
    useEffect(() => {
        dispatch(fetchReadHero());
        dispatch(pruebaApi());
      }, []);

    return (  
      <>
        <HomeSlider heroProducts={heroProducts} />
        <ListProduct products={products} />
      </>
    );
}

export default HomePage;