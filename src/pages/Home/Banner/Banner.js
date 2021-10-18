import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item">
                <img
                    className="d-block w-screen h-screen"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">YOUR OWN STOMATOLOGIST</h2>
                    <p className="text-white">Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item">
                <img
                    className="d-block w-screen h-screen"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">YOUR BEAUTIFUL SMILE</h2>
                    <p className=" text-white">DentalCare is most focused in helping you discover your most beauiful smile as quickly as possible. Get your best looking smile now!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item">
                <img
                    className="d-block w-screen h-screen"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">The Dental Professionals</h2>
                    <p className=" text-white">DentiCare Studio is a well-established dentist in the heart of Budapest providing excellent dentistry for the whole family. Our priority is making you feel comfortable and at ease in a safe and welcoming environment.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;