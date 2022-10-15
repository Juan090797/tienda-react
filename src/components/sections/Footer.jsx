import { FaStarOfLife } from 'react-icons/fa';

const Footer = () => {

    return ( 
        <footer className="mt-auto py-3 bg-dark text-center text-lg-start text-light">
            <div className="text-center p-3">
                © 2022 Copyright - 
                <a className="text-light texto__footer" href="https://grupomarquina.pe/"> GrupoMarquina</a> <FaStarOfLife />
                <p>Direccion: Av.Dominicos 583 Callao</p>

            </div>
        </footer>
     );
}
 
export default Footer;