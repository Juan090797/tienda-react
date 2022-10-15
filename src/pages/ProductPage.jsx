import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import useProduct from "../hook/useProduct";
import { useParams } from 'react-router-dom';
import { fetchReadProduct } from '../redux/slices/productSlice';
import ProductsProduct from '../components/products/ProductsProduct';

const ProductPage = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { loading,product } = useProduct();

    useEffect(() => {
        dispatch(fetchReadProduct(slug));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    
      if (loading || Object.keys(product).length <= 0) {
        return (
          <section className="section section--first">
            <div className="container">
              <h2 className="section__title">Cargando</h2>
            </div>
          </section>
        );
      } else {
        return (
          <ProductsProduct product={product}/>
        );
      }
}
 
export default ProductPage;