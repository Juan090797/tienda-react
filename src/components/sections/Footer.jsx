const Footer = ({ credits }) => {

    const {year, pagina} = credits;

    return ( 
        <footer className="mt-auto py-3 bg-dark text-center text-lg-start text-light">
            <div className="text-center p-3">
                © {year} Copyright - 
                <a className="text-light" href="https://grupomarquina.pe/"> {pagina} </a>
            </div>
        </footer>
     );
}
 
export default Footer;