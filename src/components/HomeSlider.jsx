import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "@/styles/HomeSlider.module.css"
import { Paper, Button } from "@mui/material";

const HomeSlider = () => {
    const images = [
        "/image-product-1.jpg",
        "/image-product-2.jpg",
        "/image-product-3.jpg",
    ];

    return (

            <Carousel
                className={`w-screen md:hidden`}
                height={300}

                swipe={true}

                navButtonsAlwaysVisible={true}

                navButtonsProps={{
                    style: {
                        backgroundColor: 'white'
                    }
                }}

                NextIcon={
                    <Image
                        className="next-icon"
                        width={15}
                        height={15}
                        src="/icon-next.svg"
                        alt="next icon"
                    ></Image>
                }

                PrevIcon={
                    <Image
                        className="prev-icon"
                        width={15}
                        height={15}
                        src="/icon-previous.svg"
                        alt="next icon"
                    />
                }
            >
                {images.map((image, index) => (
                    <Image
                        className={`${styles.slider_image}`}
                        width={300}
                        height={400}
                        src={image}
                        key={index}
                        alt={`image-${index}`}
                    />
                ))}
            </Carousel>
    );
};

export default HomeSlider;
