"use client"
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';
import Image from 'next/image';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx';

const clothesSlides = [
    { src: '/clothes/obeyHoodie.png', type: 'popup', text: 'i love obey hoodies! (u guys know!) please buy them used on sites like depop, mercari, and poshmark, its so much cheaper. i wear M, L, and XL!' },
    { src: '/clothes/obeyBeanie.png', type: 'link', url: 'https://obeyclothing.com/products/obey-future-beanie-legion-blue?variant=45081401557170' },
    { src: '/clothes/dickiesJacket.png', type: 'popop', text: 'i would love this jacket, extra if you can get sadie to embroider something on it! link: https://www.dickies.com/en-us/products/insulated-eisenhower-jacket-dk00tj150db?variant=45194168107196' },
    { src: 'clothes/', type: 'popup', text: 'a lot of my socks have holes... fun ones or a pack is great!'},
    { src: 'clothes/', type: 'popup', text: 'i love a fun graphic t! i mainly wear size medium, and i love white, black, heather gray (or anything fun)'},
    { src: 'clothes/', type: 'popup', text: 'even if its not obey, i love nice, heavy-weight hoodies w/ fun graphics'},
    { src: 'clothes/', type: 'popup', text: 'im REALLY into waffle-knit shirts (and long sleeves in general)'}
];

const EmblaCarousel = (props) => {
    const { slides = clothesSlides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const handleSlideClick = (slide) => {
        if (slide.type === 'popup') {
            setPopupText(slide.text);
            setShowPopup(true);
        } else if (slide.type === 'link') {
            window.open(slide.url, '_blank');
        }
    };

    return (
        <section className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
            {slides.map((slide, index) => (
                <div className={styles.embla__slide} key={index} onClick={() => handleSlideClick(slide)} style={{cursor: 'pointer'}}>
                    <Image src={slide.src} alt={`Slide ${index + 1}`} width={300} height={300} className={styles.embla__slide__img} />
                </div>
            ))}
            </div>
        </div>

        <div className={styles.embla__controls}>
            <div className={styles.embla__buttons}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
        {showPopup && (
            <div style={{position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)'}} onClick={() => setShowPopup(false)}>
                <div style={{background: '#fff', padding: '32px', borderRadius: '12px', minWidth: '300px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.18)'}}>
                <p style={{ fontFamily: 'Helvetica'}}>{popupText}</p>
                <button style={{marginTop: '16px', padding: '8px 24px', borderRadius: '8px', border: 'none', background: '#e3aadf', color: '#333', cursor: 'pointer'}} onClick={(e) => {e.stopPropagation(); setShowPopup(false);}}>Close</button>
                </div>
            </div>
        )}
        </section>
    );
}

export default EmblaCarousel;