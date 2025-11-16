"use client"
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'

const EmblaCarousel = (props) => {
    const { slides = [0,1,2], options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
            {slides.map((index) => (
                <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>{index + 1}</div>
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
        </section>
    )
}

export default EmblaCarousel