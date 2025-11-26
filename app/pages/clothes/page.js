import styles from "../../page.module.css";
import Image from 'next/image';
import EmblaCarousel from '../../components/carousel.js';
import Link from 'next/link';

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
            <Image src={'/clothes/simsPoster.jpg'} alt={'poster'} height={110} width={80} id={styles.poster} style={{ position: 'fixed', left: '50px', top: '100px' }}/>
            <Image src={'/clothes/smiskiPoster.jpg'} alt={'poster'} height={110} width={80} id={styles.poster} style={{ position: 'fixed', left: '250px', top: '330px' }}/>
            <Image src={'/clothes/btsPoster.jpg'} alt={'poster'} height={80} width={110} id={styles.poster} style={{ position: 'fixed', left: '170px', top: '200px' }}/>
            <Image src={'/clothes/bearPoster.jpg'} alt={'poster'} height={110} width={80} id={styles.poster} style={{ position: 'fixed', right: '100px', top: '150px' }}/>
            <Image src={'/clothes/clairoPoster.jpg'} alt={'poster'} height={110} width={80} id={styles.poster} style={{ position: 'fixed', right: '200px', top: '250px' }}/>
            <Link href="/">
                <Image src={'/clothes/arrowPoster.png'} alt={'poster'} height={80} width={110} id={styles.poster2} style={{ position: 'fixed', right: '60px', top: '300px' }}/>
            </Link>
        </div>
    );
}