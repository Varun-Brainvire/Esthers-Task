import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link
        href={"/howitworks"}
        style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
      >
        <h3>How It Works</h3>
      </Link>
    </>
  );
}
