import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadFooter } from "../../redux/slices/footer.Slice";
import useFooter from "../../hook/useFooter";
import { FaStarOfLife } from 'react-icons/fa';

const Footer = () => {
    const dispatch = useDispatch();
    const { data } = useFooter();
    useEffect(() => {
      dispatch(fetchReadFooter());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <footer className="mt-auto py-3 bg-dark text-center text-lg-start text-light">
            <div className="text-center p-3">
                © 2022 Copyright - 
                <a className="text-light" href="https://grupomarquina.pe/"> GrupoMarquina</a>-<FaStarOfLife />
                <ul>
                    <li>Direccion: {data.data?.attributes.componetes[0].direccion}</li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;