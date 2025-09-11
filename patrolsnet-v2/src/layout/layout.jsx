import React from "react";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <ResponsiveNavbar />
      <main className={styles.main}>{children}</main>
  
    </>
  );
}