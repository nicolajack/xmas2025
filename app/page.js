"use client"
import styles from "./page.module.css";
import Link from 'next/link';
import React from 'react';
import Snowfall from 'react-snowfall';

export default function Home() {
  return (
    <div>
      <div style={{ height: '400px', width: '275px', position: 'fixed', top: "128px", left: "150px", zIndex: 9999, pointerEvents: 'none' }}>
        <Snowfall />
      </div>
      <div style={{ height: '400px', width: '275px', position: 'fixed', top: "128px", right: "150px", zIndex: 9999, pointerEvents: 'none' }}>
        <Snowfall />
      </div>
      <div id={styles.background}>
        <Link href="pages/toys" id={styles.toys}>toys</Link>
        <Link href="pages/clothes" id={styles.clothes}>clothes</Link>
        <Link href="pages/misc" id={styles.misc}>misc</Link>
        <div id={styles.christmasTree}>
          <div id={styles.star}></div>
          <div>
            <div style={{backgroundColor: "#D37D22", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "600px", bottom: "295px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#D37D22", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "850px", bottom: "310px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#D37D22", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "690px", bottom: "430px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#D37D22", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "770px", bottom: "490px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#D37D22", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "650px", bottom: "560px", zIndex: "101"}}></div>

            <div style={{backgroundColor: "#b4378f", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "710px", bottom: "360px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#b4378f", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "620px", bottom: "400px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#b4378f", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "840px", bottom: "430px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#b4378f", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "720px", bottom: "570px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#b4378f", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "780px", bottom: "630px", zIndex: "101"}}></div>

            <div style={{backgroundColor: "#5789C7", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "680px", bottom: "280px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#5789C7", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "780px", bottom: "380px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#5789C7", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "700px", bottom: "500px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#5789C7", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "830px", bottom: "550px", zIndex: "101"}}></div>
            <div style={{backgroundColor: "#5789C7", height: "25px", width: "25px", borderRadius: "50%", position: "fixed", left: "730px", bottom: "650px", zIndex: "101"}}></div>
          </div>
          <div id={styles.tree3}></div>
          <div id={styles.tree2}></div>
          <div id={styles.tree1}></div>
          <div id={styles.trunk}></div>
        </div>
        <div id={styles.lightString}>
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 805 610 Q 960 720 1115 610" stroke="#F8CA00" strokeWidth="12" fill="none" />
            </svg>
        </div>
        <div id={styles.lightString}>
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 830 450 Q 960 550 1090 450" stroke="#F8CA00" strokeWidth="12" fill="none" />
            </svg>
        </div>
        <div id={styles.lightString}>
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 865 280 Q 960 350 1055 280" stroke="#F8CA00" strokeWidth="12" fill="none" />
            </svg>
        </div>
        <div id={styles.window}></div>
        <div id={styles.window2}></div>
        <div id={styles.rug}></div>
        <div id={styles.floor}></div>
      </div>
    </div>
  );
}
