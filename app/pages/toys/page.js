import styles from "../../page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Toys() {
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
        </div>
    );
}