import React, { useState } from "react";
import styles from "@/styles/ModalContent.module.css";
import Image from "next/image";

const ModalContent = ({ productImages }) => {
    const [currentImage, setCurrentImage] = useState(productImages[0]);

    const handleChange = (imageId) => {
        const image = productImages.find((image) => image.id === imageId);
        setCurrentImage(image);
    };

    const goNext = () => {
        const currentIndex = productImages.findIndex(
            (image) => image.id === currentImage.id
        );
        if (currentIndex < productImages.length - 1) {
            const nextImage = productImages[currentIndex + 1];
            setCurrentImage(nextImage);
        }
    };

    const goPrevious = () => {
        const currentIndex = productImages.findIndex(
            (image) => image.id === currentImage.id
        );
        if (currentIndex > 0) {
            const previousImage = productImages[currentIndex - 1];
            setCurrentImage(previousImage);
        }
    };

    return (
        <div className={`${styles.container} absolute`}>
            <div className="w-full flex justify-end cursor-pointer">
                {/* <Image width={15} height={15} alt='close modal' src='icon-close.svg'/> */}
                <svg
                    width="14"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.closeIcon}
                >
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="currentcolor"
                        fill-rule="evenodd"
                    />
                </svg>
            </div>
            <div className="relative mt-5">
                <div
                    onClick={goPrevious}
                    className={`absolute cursor-pointer ${styles.previousIcon}`}
                >
                    <Image
                        alt="previous image"
                        src="/icon-previous.svg"
                        width={10}
                        height={10}
                    />
                </div>
                <Image
                    width={560}
                    height={590}
                    alt="current product image"
                    src={currentImage.bigImage}
                    className={`rounded-md`}
                />
                <div
                    onClick={goNext}
                    className={`absolute cursor-pointer ${styles.nextIcon}`}
                >
                    <Image
                        alt="next image"
                        width={10}
                        height={10}
                        src="/icon-next.svg"
                    />
                </div>
            </div>
            <div className="flex mt-6 justify-between">
                {productImages.map((image, index) => (
                    <div
                        onClick={() => handleChange(image.id)}
                        key={index}
                        className={`rounded-md cursor-pointer ${
                            currentImage.id == image.id ? styles.selected : ""
                        }`}
                    >
                        <Image
                            className="rounded-md hover:opacity-60"
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

export default ModalContent;
