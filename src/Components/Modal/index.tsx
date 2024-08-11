'use client'

import styles from "./modal.module.css";
import crossIcon from "../../../public/cross.svg";
import Image from "next/image";


export default function Modal({ setShowModal, children }: any) {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <button className={styles.closeModal} onClick={() => setShowModal(false)}>
                    <Image src={crossIcon} height={16} width={16} alt="crossIcon" />
                </button>
                {children}
            </div>
        </div>
    );
}