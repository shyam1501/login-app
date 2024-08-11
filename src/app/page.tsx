'use client'
import styles from "./page.module.css";
import Post from "../Components/Post";
import ellipseIcon from "../../public/Ellipse.svg";
import ellipse2Icon from "../../public/comment.svg";
import chatIcon from "../../public/chat.svg";
import LoginForm from "../Components/LoginForm";
import { useState } from "react";
import Modal from "../Components/Modal";
import RegisterForm from "../Components/RegisterForm";



const posts = [
  {
    title: "Create post",
    time: "",
    userIcon: "",
    commentIcon: "",
    postIcon: "💬",
    postText: "How are you feeling today?",
    numberOfComments: "",
    showLoginBtn: true
  },
  {
    title: "Theresa Webb",
    time: "5mins ago",
    userIcon: ellipseIcon,
    commentIcon: chatIcon,
    postIcon: "👋",
    postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    numberOfComments: "24 comments",
    showLoginBtn: false
  },
  {
    title: "Marvin McKinney",
    time: "5mins ago",
    userIcon: ellipse2Icon,
    commentIcon: chatIcon,
    postIcon: "😞",
    postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    numberOfComments: "2 comments",
    showLoginBtn: false
  }
]


export default function Home() {
  const [showModal, setShowModal] = useState({
    type: "register",
    flag: false,
  });
  return (
    <>
      <div className={styles.homeWrap}>
        <div className="mTop16">
          <div className="textPrimaryColor textLarge">Hello Jane</div>
          <div className="textSecondaryColor textSmall mTop8">How are you doing today? Would you like to share something with the community 🤗</div>
        </div>
        <div className="mTop24">
          {posts.map(post => {
            return (
              <Post {...post} setShowModal={setShowModal} />
            )
          })

          }
        </div>
      </div>
      {showModal.flag && <Modal setShowModal={setShowModal}>
        {showModal.type === "register" ? <RegisterForm setShowModal={setShowModal}/> :<LoginForm  setShowModal={setShowModal} />}
      </Modal>}
    </>
  );
}
