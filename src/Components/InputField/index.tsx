"use client";

import { useState } from "react";
import styles from "./inputfield.module.css";
import eyeIcon from "../../../public/eye.svg";
import Image from "next/image";
import { validateEmail } from "../../utils/validator";

type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  onChange: Function;
  required: boolean;
};

export default function InputField({ label, name, type, placeholder, onChange, required }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("")

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChange = (event: { target: { value: any; }; }) => {
    let isValid = false
    if (name === 'email') {
      isValid = validateEmail(event.target.value)
      setError(!isValid ? 'Invalid email' : "")
    } else if (name === 'password') {
      isValid = event.target.value.length > 7 ? true : false;
      setError(!isValid ? 'Password must be at least 8 characters long' : "")
    } else {
      isValid = true
    }
    if (isValid) onChange(name, event.target.value)
  }
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
          onChange={handleChange}
          required={required}
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
      {error && (<div className={styles.errorInfo}>{error}</div>)}
    </div>
  );
}