import Image from "next/image";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "@/styles/QuantitySelector.module.css";
import { addOne, removeOne } from "@/redux/productSlice";

const QuantitySelector = () => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.product.quantity);
  const addOneCall = () => {
    dispatch(addOne());
  };

  const removeOneCall = () => {
    dispatch(removeOne());
  };

  return (
    <div
      className={`rounded-md w-full flex justify-between items-center ${styles.quantity_container}`}
    >
      <button
        className='cursor-pointer py-[1.188rem] px-2'
        onClick={removeOneCall}
      >
        <Image
          className={`${styles.quantity_minus}`}
          width={10}
          height={1}
          alt='quantity minus'
          src='/icon-minus.svg'
        />
      </button>
      <span className='font-bold'>{quantity}</span>
      <button
        className='cursor-pointer py-[1.188rem] px-2'
        onClick={addOneCall}
      >
        <Image
          className={`${styles.quantity_plus}`}
          width={10}
          height={5}
          src='/icon-plus.svg'
          alt='quantity plus'
        />
      </button>
    </div>
  );
};

export default QuantitySelector;
