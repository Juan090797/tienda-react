const HomeSlider = ({ heroProducts }) => {
    return ( 
        <>
            <section className="py-3">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-1">
                    {heroProducts.map((element) => {
                        const { link_foto } = element;
                        return (
                            <div key={element.id} className="carousel-item active">
                                <img src={link_foto} className="d-block w-100" alt="..." />
                            </div>
                        );
                    })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
        
    );
}
 
export default HomeSlider;