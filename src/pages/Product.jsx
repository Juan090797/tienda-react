const Product = () => {
    return ( 
        <>          
            <h3 className="mt-4 mb-4 titulo__prueba">PRODUCTOS MAS VENDIDOS</h3>
            <section>
                <div className="text-center container py-3">
                    

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <img src="https://coolboxpe.vtexassets.com/arquivos/ids/179500-500-auto?v=637484858929630000&width=500&height=auto&aspect=true" className="w-100" alt="..."/>
                                    <a href="#!">
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
                                        <h5 className="card-title mb-3">Cámara web Jetion</h5>
                                    </a>
                                    <a href="/" className="text-reset">
                                        <p>Category</p>
                                    </a>
                                    <h6 className="mb-3">S/.61.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                    <img src="https://coolboxpe.vtexassets.com/arquivos/ids/178831-500-auto?v=637478186687400000&width=500&height=auto&aspect=true" className="w-100" alt="..." />
                                    <a href="#!">
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
                                        <h5 className="card-title mb-3">Cooler para laptop</h5>
                                    </a>
                                    <a href="/" className="text-reset">
                                        <p>Category</p>
                                    </a>
                                    <h6 className="mb-3">S/.61.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light">
                                    <img src="https://coolboxpe.vtexassets.com/arquivos/ids/205241-500-auto?v=637801939147870000&width=500&height=auto&aspect=true" className="w-100" alt="..."/>
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5><span className="badge bg-success ms-2">Eco</span></h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <a href="/" className="text-reset titulo__producto">
                                        <h5 className="card-title mb-3">Redmin 11</h5>
                                    </a>
                                    <a href="/" className="text-reset">
                                        <p>Category</p>
                                    </a>
                                    <h6 className="mb-3">S/.61.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                    <img src="https://coolboxpe.vtexassets.com/arquivos/ids/167312-500-auto?v=637305357437030000&width=500&height=auto&aspect=true" className="w-100" alt="..."/>
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5><span className="badge bg-danger ms-2">-10%</span></h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div className="mask" ></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <a href="/" className="text-reset titulo__producto">
                                        <h5 className="card-title mb-3">Chromecast</h5>
                                    </a>
                                    <a href="/" className="text-reset">
                                        <p>Category</p>
                                    </a>
                                    <h6 className="mb-3">
                                        <s>S/.61.99</s><strong className="ms-2 text-danger">S/.50.99</strong>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
     );
}
 
export default Product;