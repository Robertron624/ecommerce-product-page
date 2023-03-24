import React from "react";
import styles from "@/styles/Minicart.module.css";
import Image from "next/image";

const Minicart = ({ isMinicartOpen }) => {

    const productsOnCart = [
        {
            productName: "Fall Limited Edition Sneakers",
            unitaryPrice: 125.0,
            productUnits: 3,
            productImage: "/image-product-1-thumbnail.jpg",
        },
    ];

    return (
        <div
            className={`${isMinicartOpen ? '' : 'hidden'} absolute flex flex-col justify-around rounded-lg z-20 py-5 ${styles.minicartOuter}`}
        >
            <div className={`pl-4 pb-6 border-b-2 ${styles.header}`}>
                <p className="font-bold">Cart</p>
            </div>
            <div className={`py-5 mx-auto ${styles.productDetails}`}>
                {productsOnCart.map((product, index) => {
                    const {
                        productName,
                        unitaryPrice,
                        productUnits,
                        productImage,
                    } = product;
                    return (
                        <div key={index} className="flex gap-4">
                            <Image
                                className={`${styles.productImage}`}
                                src={productImage}
                                width={20}
                                height={20}
                                alt="product image"
                            />
                            <div
                                className={`flex items-center w-full justify-between`}
                            >
                                <div
                                    className={`flex flex-col ${styles.productName}`}
                                >
                                    <p>{productName}</p>
                                    <p>
                                        ${unitaryPrice} x {productUnits}
                                        <span
                                            className={`font-bold ml-2 ${styles.priceUnit}`}
                                        >
                                            ${unitaryPrice * productUnits}
                                        </span>
                                    </p>
                                </div>
                                <Image
                                    className={`${styles.trashCan}`}
                                    width={10}
                                    height={10}
                                    src="/icon-delete.svg"
                                    alt="remove product icon"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={`py-3 mx-auto rounded-md ${styles.checkoutBtn}`}>
                Checkout
            </button>
        </div>
    );
};

export default Minicart;
