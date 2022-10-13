
const Home = () => {
    return (
        <section className="py-3">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded-1">
                    <div className="carousel-item active">
                        <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/f86f347f-646d-4b9e-9953-78d88f53d262___81c7c554d4d4e9759e88a614a14fd0f4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/7a14d29a-41fb-49f2-856a-4bb8674c3720___15b22d6becb4acc378db259d131ec23f.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/3325a4ba-50d1-441d-ad5e-9247097549b4___3e919d62b4bcc84da59f77b5fdb99dc0.png" className="d-block w-100" alt="..." />
                    </div>
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
    );
}

export default Home;