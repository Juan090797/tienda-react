const Header = ({ company,categories}) => {
    
    const {nombre} = company;
    
    return ( 
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{nombre}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                {categories.map( (element) => {
                                    const { title } = element;
                                    return (
                                        <li key={element.id}><a className="dropdown-item" href="/">{title}</a></li>
                                    );
                                })}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactanos">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
     );
}
 
export default Header;