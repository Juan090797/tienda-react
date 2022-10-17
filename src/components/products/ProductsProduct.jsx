import { BsFillStarFill} from "react-icons/bs";

const ProductsProduct = ({ product }) => {
    const { title, precio_new, link_foto, marca, precio_old,descripcion,categoria } = product;
    function arranew(){
        const arr = descripcion.split('\n'); 
        return arr;
    }

    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="row">
                                <img src={link_foto} className="card-img-top" alt="producto" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="badge bg-info small rounded-0 mb-2 mr-4">{marca}</div>
                            <div className="badge bg-danger small rounded-0 mb-2">{categoria['title']}</div>
                            <h1>{title}</h1>
                            <div className="d-flex align-items-center">
                                <ul className="list-inline mb-2 me-3 small">
                                    <li className="list-inline-item m-0"><BsFillStarFill /></li>
                                    <li className="list-inline-item m-0"><BsFillStarFill /></li>
                                    <li className="list-inline-item m-0"><BsFillStarFill /></li>
                                    <li className="list-inline-item m-0"><BsFillStarFill /></li>
                                    <li className="list-inline-item m-0"><BsFillStarFill /></li>
                                </ul>
                                <p className="small text-muted mb-2">12 Opiniones de los usuarios</p>
                            </div>
                            <h4><del className='text-secondary'>{precio_old.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</del> <p className="text-danger">{precio_new.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</p></h4>
                            <ul>
                                {arranew().map((element) => {
                                    return (element) ? <li key={element} >{element}</li> : ''
                                })}
                            </ul>
                           
                            <div className="d-flex align-items-center mb-4">
                                <a href={`https://api.whatsapp.com/send?phone=51999955878&text=Deseo%20comprar el producto ${title}, marca: ${marca} al precio de ${precio_new.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}`} className="btn btn-primary btn-sm py-2 border-bottom-0 px-5 me-3">Hacer pedido</a>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <a href="/" className="btn btn-success btn-sm py-2 border-bottom-0 px-5 me-3">Atras</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  };
  
  export default ProductsProduct;