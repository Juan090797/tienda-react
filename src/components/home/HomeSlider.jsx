import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeSlider = ({ heroProducts }) => {
    return ( 
        <Swiper
            tag='section'
            className='hero-slider'
            modules={[A11y, Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000 }}
            loop
            navigation
            pagination={{ clickable: true }}
        >
            {heroProducts.map((element) => {
                const { link_foto} = element;
                return (
                    <SwiperSlide
                        key={element.id}
                        tag='section'
                        className="section section--hero"
                        style={{backgroundImage: `url(${link_foto})`}}>
                    </SwiperSlide>
                );
            })}
        </Swiper >
    );
}
 
export default HomeSlider;