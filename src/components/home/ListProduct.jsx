import { Link } from 'react-router-dom';

const ListProduct = ({products}) => {
    
    return ( 
        <>          
            <section>
                <h3 className="mt-4 mb-4 titulo__prueba">PRODUCTOS MAS VENDIDOS</h3>
                <div className="text-center container py-3">
                    <div className="row">
                        {products.map( (element) => {
                            const { title, precio_new, link_foto,descuento,precio_old,slug } = element;
                            return (
                                <div key={element.id} className="col-lg-3 col-md-6 col-6 mb-4">
                                    <div className="card card__product">
                                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                            <img src={link_foto} className="w-100 img__product" alt="..." />
                                            <div className="mask">
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <h5><span className="badge bg-danger ms-2">-{descuento}%</span></h5>
                                                </div>
                                            </div>
                                            <div className="hover-overlay">
                                                <div className="mask"></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <span className="text-reset titulo__producto">
                                                <Link to={`/productos/${slug}`} className="h5 card-title mb-3 link__product">{title}</Link>
                                            </span>
                                            <h6 className="text-danger">Precio Exclusivo Web</h6>
                                            <h6 className="mb-3"><del className='text-secondary'>{precio_old.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</del> {precio_new.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</h6>
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