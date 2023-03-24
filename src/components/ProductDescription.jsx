import React from "react";
import styles from '@/styles/ProductDescription.module.css'

const ProductDescription = () => {
    return (
        <div className={`mt-5 px-5 ${styles.container}`}>
            <span className="text-xs text-orange uppercase">Sneaker Company</span>
            <h1 className="text-3xl mt-4 font-bold">Fall Limited Edition Sneakers</h1>
            <p className={`mt-5 ${styles.text_desc}`}>
                {" "}
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className={`${styles.productPrice} mt-5 flex justify-between`}>
                <div className="flex gap-3">
                    <span className="text-xl font-bold">$125.00</span>
                    <span className={`font-bold text-orange text-sm rounded-md text ${styles.discount}`}>50%</span>
                </div>
                <span className={`line-through ${styles.normal_price}`}>$250.00</span>
            </div>
        </div>
    );
};

export default ProductDescription;
