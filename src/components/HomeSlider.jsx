import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

const HomeSlider = () => {
    const images = [
        "/image-product-1.jpg",
        "/image-product-2.jpg",
        "/image-product-3.jpg",
    ];

    return (
        <div className="">
            <Carousel
                height={300}
                className={``}
                NextIcon={
                    <Image
                        width={30}
                        height={30}
                        src="/icon-next.svg"
                        alt="next icon"
                    ></Image>
                }

                PrevIcon={
                    <Image
                        width={30}
                        height={30}
                        src="/icon-previous.svg"
                        alt="next icon"
                    />
                }
            >
                {images.map((image, index) => (
                    <Image
                        className=""
                        width={300}
                        height={400}
                        src={image}
                        key={index}
                        alt={`image-${index}`}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default HomeSlider;
