import Nav from "../components/Nav";
import Title from "../components/Title";
// import Request from "../components/Request"
import ReqHandler from "../components/reqhandler";

// import Frame from "../components/./yi/frame";

import ModalRouter from "../components/Modalrouter";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {["signin", "signup", "signout", "mypage", "nav"].map((item, idx) => (
        <ModalRouter key={idx} id={item}/>
      ))}
      <Link href={"/?id=nav"}>
        <a className="Ham_menu">Hamburger</a>
      </Link>
      <Title></Title>
      <ReqHandler />
      {/* <Frame /> */}
    </>
  );
}
