const Contacto = () => {
    return ( 
        <>
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                    <h3>Contactanos</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-4">
                                <input type="text" name="txtName" className="form-control" placeholder="Tu nombre *" />
                            </div>
                            <div className="form-group mb-4">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Tu correo *" />
                            </div>
                            <div className="form-group mb-4">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Tu celular *"  />
                            </div>
                            <div className="form-group mb-4">
                                <a name="btnSubmit" className="btnContact btnContactSubmit" href="/">Enviar</a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Mensaje *"></textarea>
                            </div>
                        </div>
                    </div>
            </div>
        </>
     );
}
 
export default Contacto;