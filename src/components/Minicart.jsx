import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from '@/redux/productSlice'
import styles from "@/styles/Minicart.module.css";
import Image from "next/image";

const Minicart = ({ isMinicartOpen, setIsMinicartOpen }) => {
    const quantity = useSelector((state) => state.product.quantity);
    const dispatch = useDispatch()

    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", closeOutside, true);
    }, []);

    const closeOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsMinicartOpen(false);
        }
    }

    const productsOnCart = [
        {
            productName: "Fall Limited Edition Sneakers",
            unitaryPrice: 125.0,
            productImage: "/image-product-1-thumbnail.jpg",
        },
    ];

    const handleRemoveAll = () => { 
        dispatch(removeAll())
    }

    return (
        <div
            ref={refOne}
            className={`${
                isMinicartOpen ? "" : "hidden"
            } absolute flex flex-col justify-around rounded-lg z-20 py-5 ${
                styles.minicartOuter
            }`}
        >
            <div className={`pl-4 pb-6 border-b-2 ${styles.header}`}>
                <p className="font-bold">Cart</p>
            </div>
            {quantity === 0 ? (
                <p className={styles.emptyText}>Your cart is empty</p>
            ) : (
                <div className={`py-5 mx-auto ${styles.productDetails}`}>
                    {productsOnCart.map((product, index) => {
                        const { productName, unitaryPrice, productImage } =
                            product;
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
                                            ${unitaryPrice} x {quantity}
                                            <span
                                                className={`font-bold ml-2 ${styles.priceUnit}`}
                                            >
                                                ${unitaryPrice * quantity}
                                            </span>
                                        </p>
                                    </div>
                                    <Image
                                        onClick={handleRemoveAll}
                                        className={`${styles.trashCan} cursor-pointer`}
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
            )}

            {quantity > 0 && (
                <button
                    className={`py-3 mx-auto rounded-md ${styles.checkoutBtn}`}
                >
                    Checkout
                </button>
            )}
        </div>
    );
};

export default Minicart;
