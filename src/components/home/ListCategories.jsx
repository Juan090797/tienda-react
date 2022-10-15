const ListCategories = ({categories}) => {
    return ( 
        <>
            <div className="text-center container py-3">
                <h3 className="mt-4 mb-4 titulo__prueba">CATEGORIAS</h3>
                <div className="row">
                    {categories.map( (element) => {
                                const { link_foto } = element;
                                return (
                                    <div key={element.id} className="col-lg-2 col-md-4 col-sm-6 col-6 mt-1 mb-1">
                                        <div className="card">
                                            <img src={link_foto} className="card-img-top img__categorie" alt=".." />
                                        </div>
                                    </div>
                            );
                    })}     
                </div>
            </div>
        </>
     );
}
 
export default ListCategories;