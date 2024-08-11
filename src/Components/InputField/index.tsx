"use client";

import { useState } from "react";
import styles from "./inputfield.module.css";
import eyeIcon from "../../../public/eye.svg";
import Image from "next/image";

type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
};

export default function InputField({ label, name, type, placeholder }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelWrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        {type === "password" && (
          <a href="/forgot-password" className={styles.link}>
            Forgot password?
          </a>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type={passwordVisible ? "text" : type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={styles.input}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles.toggle}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? "🙈" : <Image src={eyeIcon} height={20} width={20} alt="eye" />}
          </button>
        )}
      </div>
    </div>
  );
}