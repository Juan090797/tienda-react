const ListProduct = ({products}) => {
    return ( 
        <>          
            <section>
                <h3 className="mt-4 mb-4 titulo__prueba">PRODUCTOS MAS VENDIDOS</h3>
                <div className="text-center container py-3">
                    <div className="row">
                        {products.map( (element) => {
                            const { title, precio, link_foto } = element;
                            return (
                                <div key={element.id} className="col-lg-3 col-md-6 col-6 mb-4">
                                    <div className="card card__product">
                                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <img src={link_foto} className="w-100 img__product" alt="..." />
                                            <a href="/">
                                                <div className="mask">
                                                    <div className="d-flex justify-content-start align-items-end h-100">
                                                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                                                    </div>
                                                </div>
                                                <div className="hover-overlay">
                                                    <div className="mask"></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <a href="/" className="text-reset titulo__producto">
                                                <h5 className="card-title mb-3">{title}</h5>
                                            </a>
                                            <h6 className="text-danger">Precio Exclusivo Web</h6>
                                            <h6 className="mb-3">{precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
        
     );
}
 
export default ListProduct;