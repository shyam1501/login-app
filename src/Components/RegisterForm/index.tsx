'use client'

import Input from "../InputField";
import styles from "./register.module.css";
import PrimaryButton from "../PrimaryButton";
import { Dispatch, SetStateAction, useState } from "react";

type InputProps = {
    setShowModal: Dispatch<SetStateAction<{ type: string; flag: boolean; }>>;
}

export default function RegisterForm({ setShowModal }: InputProps) {
    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
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

    const register = () => {
        console.log(formValues)
    }
    return (
        <form>
            <div className={styles.headerWrap}>
                <div className="textXSmall fadedColor">
                    SIGN UP
                </div>
                <div className="textMediumBold whiteColor mTop8">
                    Create an account to continue
                </div>
            </div>
            <Input
                type={"text"}
                name={"email"}
                label={"Email or Username"}
                placeholder={"Enter your email or username"}
                required
                onChange={(name: string, value: string) => { getData(name, value) }}
            />
            <Input
                type={"text"}
                name={"username"}
                label={"Username"}
                placeholder={"Choose a preferred username"}
                required
                onChange={(name: string, value: string) => { getData(name, value) }}
            />
            <Input
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                required
                onChange={(name: string, value: string) => { getData(name, value) }}
            />
            <div className="mTop16">
                <PrimaryButton isFull text="Continue" onClick={() => {
                    setShowModal({ flag: false, type: "login" })
                    register()
                }
                } />
            </div>
            <div onClick={() => setShowModal({ flag: true, type: "login" })} className="textXSmall textSecondaryColor mTop16"> Already have an account?&nbsp;<span className="whiteColor cursorPointer">Login →</span></div>
        </form>
    );
}

