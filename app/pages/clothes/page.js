import styles from "../../page.module.css";
import Image from 'next/image';
import EmblaCarousel from '../../components/carousel.js';

export default function Clothes() {
    return (
        <div id={styles.clothesBackground}>
            <div id={styles.floor}></div>
            <div id={styles.wardrobe}></div>
            <div id={styles.drawer1}></div>
            <div id={styles.drawer2}></div>
            <div id={styles.wardrobeBackground}>
                <EmblaCarousel />
            </div>
            <div id={styles.cabinetDoorLeft}></div>
            <div id={styles.cabinetDoorRight}></div>
        </div>
    );
}