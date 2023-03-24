import { useState } from "react";
import styles from "@/styles/DesktopImageSelector.module.css";
import Image from "next/image";

const DesktopImageSelector = () => {
    const productImages = [
        {
            id: 1,
            bigImage: "/image-product-1.jpg",
            thumbnail: "/image-product-1-thumbnail.jpg",
        },
        {
            id: 2,
            bigImage: "/image-product-2.jpg",
            thumbnail: "/image-product-2-thumbnail.jpg",
        },
        {
            id: 3,
            bigImage: "/image-product-3.jpg",
            thumbnail: "/image-product-3-thumbnail.jpg",
        },
        {
            id: 4,
            bigImage: "/image-product-4.jpg",
            thumbnail: "/image-product-4-thumbnail.jpg",
        },
    ];

    const [currentImage, setCurrentImage] = useState(productImages[0]);

    const handleChange = (imageId) => { 
        const image = productImages.find((image) => image.id === imageId);
        setCurrentImage(image);
    }

    return (
        <div className={`${styles.container} flex flex-col gap-5`}>
            <div className={`${styles.mainImage}`}>
                <Image
                    src={currentImage.bigImage}
                    width={560}
                    height={590}
                    alt="current product image"
                />
            </div>
            <div className={`flex mx-auto gap-4`}>
                {productImages.map((image, index) => (
                    <div
                        onClick={() => handleChange(image.id)}
                        key={index}
                        className={`rounded-md cursor-pointer ${
                            currentImage.id == image.id
                                ? styles.selectedThumbnail
                                : ""
                        }`}
                    >
                        <Image
                            className="rounded-md"
                            src={image.thumbnail}
                            width={80}
                            height={80}
                            alt="product thumbnail"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesktopImageSelector;
