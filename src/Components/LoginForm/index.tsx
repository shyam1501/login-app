'use client'

import Input from "../InputField";
import styles from "./loginform.module.css";
import PrimaryButton from "../PrimaryButton";
import { useState, Dispatch, SetStateAction } from "react";

type InputProps = {
    setShowModal: Dispatch<SetStateAction<{ type: string; flag: boolean; }>>;
}

export default function LoginForm({ setShowModal }: InputProps) {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const getData = (name: string, value: string) => {
        setFormValues(() => {
            return {
                ...formValues,
                [name]: value,
            };
        });
    };

    const login = () => {
        console.log(formValues)
    }

    return (
        <form>
            <div className={styles.headerWrap}>
                <div className="textXSmall fadedColor">
                    WELCOME BACK
                </div>
                <div className="textMediumBold whiteColor mTop8">
                    Log into your account
                </div>
            </div>
            <Input
                type={"text"}
                name={"email"}
                label={"Email or Username"}
                placeholder={"Enter your email or username"}
                onChange={(name: string, value: string) => { getData(name, value) }}
                required
            />
            <Input
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                onChange={(name: string, value: string) => { getData(name, value) }}
                required
            />
            <div className="mTop16">
                <PrimaryButton isFull text="Login now" onClick={() => {
                    setShowModal({ flag: false, type: "register" })
                    login()
                }} />
            </div>
            <div onClick={() => setShowModal({ flag: true, type: "register" })} className="textXSmall textSecondaryColor mTop16"> Not registered yet?&nbsp;<span className="whiteColor cursorPointer">Register →</span></div>
        </form>
    );
}

