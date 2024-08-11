"use client";

import React, { Dispatch, SetStateAction } from "react";
import styles from "./post.module.css"
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

type InputProps = {
    userIcon: string;
    title: string;
    time: string;
    postText: string;
    commentIcon: string,
    numberOfComments: string,
    showLoginBtn: boolean,
    postIcon: string,
    setShowModal: Dispatch<SetStateAction<{ type: string; flag: boolean; }>>;
};

function Post({ userIcon, title, time, postText, commentIcon, numberOfComments, showLoginBtn, postIcon, setShowModal }: InputProps) {
    return (
        <div className={`${styles.postWrap} cursorPointer`} onClick={() => { setShowModal({ flag: true, type: "login" }) }}>
            <div className={styles.titleWrap}>
                {userIcon && (
                    <Image src={userIcon} alt="user-img" width={44} height={44} />
                )}
                <div className={styles.titleTextWrap}>
                    <div className="textPrimaryColor textMedium">{title}</div>
                    {time && (<div className="textSecondaryColor textSmall">{time}</div>)}
                </div>
            </div>
            <div className={styles.postTextWrap}>
                <div className={styles.postIcon}>
                    <span>{postIcon}</span>
                </div>
                <div className="textSecondaryColor textSmall">{postText}</div>
            </div>
            <div className={`${styles.commentWrap} mTop16`}>
                {numberOfComments ? (<div className={styles.comments}>
                    <Image src={commentIcon} height={20} width={20} alt="cmt-icon" />
                    &nbsp;&nbsp;<div className="textSecondaryColor textSmall">{numberOfComments}</div>
                </div>) : <div>&nbsp;</div>}
                {showLoginBtn && (<PrimaryButton text="Post" onClick={() => { setShowModal({ flag: true, type: "login" }) }} isFull={false} />)}
            </div>
        </div>
    )
}

export default Post;