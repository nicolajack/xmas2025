"use client"
import styles from "../../page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function Toys() {
    const [activePopup, setActivePopup] = useState(null); // null, 'candle', 'snorlax', etc.

    // Simple close on outside click
    useEffect(() => {
        function handleClick(e) {
            if (activePopup) setActivePopup(null);
        }
        if (activePopup) {
            document.addEventListener("mousedown", handleClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [activePopup]);

    return (
        <div id={styles.toysBackground}>
            <div id={styles.computerBack}></div>
            <div id={styles.computerScreen}></div>
            <Link href="/">
                <Image
                    src="/arrow (1).png"
                    id={styles.arrowHover}
                    width={180}
                    height={180}
                    alt="a back arrow"
                    style={{position: 'fixed', top:"500px", right:"660px", zIndex: 9999}}
                />
            </Link>
            <div id={styles.computerStand}></div>
            <div id={styles.computerStandCircle}></div>
            <div id="deskparts">
                <div id={styles.mainDesk}></div>
                <div id={styles.deskLeft}></div>
                <div id={styles.deskRight}></div>
            </div>
            <div id={styles.shelf1}></div>
            <div id={styles.shelf2}></div>
            <Link href="https://www.popmart.com/us/products/3944/Hirono-Monsters'-Carnival-Series-Figures" target="_blank">
                <Image
                    src="/toys/zombiehirono.png"
                    id={styles.toy}
                    width={90}
                    height={100}
                    alt="a zombie hirono figure"
                    style={{position: 'fixed', top: "108px", left: "130px", zIndex: 9999}}
                />
            </Link>
            <Link href="https://www.popmart.com/us/products/2165/Hirono-Echo-Series-Figures" target="_blank">
                <Image
                    src="/toys/echohirono.png"
                    id={styles.toy}
                    width={85}
                    height={100}
                    alt="a sleepy hirono figure"
                    style={{position: 'fixed', top: "107px", left: "195px", zIndex: 9999}}
                />
            </Link>
            {/* Candle popup */}
            <div style={{position: 'fixed', bottom: "190px", left: "220px", zIndex: 10000}}>
                <Image
                    src="/toys/candle.png"
                    width={95}
                    height={90}
                    alt="a candle"
                    style={{cursor: 'pointer'}}
                    onClick={() => setActivePopup('candle')}
                />
                {activePopup === 'candle' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '100px',
                        left: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '4px',
                        zIndex: 10001,
                    }}>
                        <p style={{ fontFamily: "Helvetica", textAlign: "center" }}>i rly like vanilla, amber, musk, gourmond scents</p>
                    </div>
                )}
            </div>
            {/* Snorlax popup */}
            <div style={{position: 'fixed', bottom: "180px", right: "300px", zIndex: 10000}}>
                <Image
                    src="/toys/snorlax.png"
                    width={120}
                    height={120}
                    alt="snorlax"
                    style={{cursor: 'pointer'}}
                    onClick={() => setActivePopup('snorlax')}
                />
                {activePopup === 'snorlax' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '120px',
                        left: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '4px',
                        zIndex: 10001,
                    }}>
                        <p style={{ fontFamily: "Helvetica", textAlign: "center" }}>snorlax is my fav pokemon, but i also love wooper & ditto</p>
                    </div>
                )}
            </div>
            {/* snoopy popup */}
            <div style={{position: 'fixed', bottom: "180px", right: "210px", zIndex: 10000}}>
                <Image
                    src="/toys/snoopyy.png"
                    width={120}
                    height={200}
                    alt="snoopy"
                    style={{cursor: 'pointer'}}
                    onClick={() => setActivePopup('snoopy')}
                />
                {activePopup === 'snoopy' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '120px',
                        left: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '4px',
                        zIndex: 10001,
                    }}>
                        <p style={{ fontFamily: "Helvetica", textAlign: "center" }}>snoopy is another one of my fav characters!!</p>
                    </div>
                )}
            </div>
            {/* frame popup */}
            <div style={{position: 'fixed', bottom: "170px", left: "350px", zIndex: 10000}}>
                <Image
                    src="/toys/artFrame.png"
                    width={145}
                    height={210}
                    alt="frame"
                    style={{cursor: 'pointer'}}
                    onClick={() => setActivePopup('frame')}
                />
                {activePopup === 'frame' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '210px',
                        left: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '4px',
                        zIndex: 10001,
                    }}>
                        <p style={{ fontFamily: "Helvetica", textAlign: "center" }}>like it says!!</p>
                    </div>
                )}
            </div>
            <Link href="https://www.target.com/p/lego-speed-champions-oracle-red-bull-racing-rb20-f1-race-car-model-set-77243/-/A-92538465#lnk=sametab" target="_blank">
                <Image
                    src="/toys/redbullCar.png"
                    id={styles.toy}
                    width={200}
                    height={100}
                    alt="redbull lego car"
                    style={{position: 'fixed', top: "700px", right: "150px", zIndex: 9999}}
                />
            </Link>
            {/* smiski popup */}
            <div style={{position: 'fixed', top: "297px", right: "300px", zIndex: 10000}}>
                <Image
                    src="/toys/smiskixmas.png"
                    width={100}
                    height={60}
                    alt="frame"
                    style={{cursor: 'pointer'}}
                    onClick={() => setActivePopup('smiski')}
                />
                {activePopup === 'smiski' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '210px',
                        left: '0',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '4px',
                        zIndex: 10001,
                    }}>
                        <p style={{ fontFamily: "Helvetica", textAlign: "center" }}>i love smiskis & tbh all blind boxes</p>
                    </div>
                )}
            </div>
        </div>
    );
}