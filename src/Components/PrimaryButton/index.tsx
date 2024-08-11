"use client";

import React from "react";
import styles from "./primarybutton.module.css";

type InputProps = {
    text: string;
    onClick: () => void;
    isFull: boolean;
};


function PrimaryButton({ text, isFull = false,  onClick }: InputProps) {
    return (
        <button className={`${styles.buttonCss} ${isFull ? styles.fullWidth: "" }`} onClick={onClick}>
            {text}
        </button>
    )

}

export default PrimaryButton