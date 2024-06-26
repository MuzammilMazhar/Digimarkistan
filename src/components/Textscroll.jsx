'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRef , useEffect} from 'react';
import gsap from 'gsap';




export default function Textscroll() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);


  let xPercent = 0;

useEffect( () => {
  gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate);
}, [])
const animate = () => {
  if(xPercent > 0){
    xPercent = -100;
  }
  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  requestAnimationFrame(animate);
  xPercent += 0.1;
}
  return (
    
    <main className={styles.main}>
      <Image 
        src="/images/ROI.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
       
        </div>
      </div>
    </main>
  )
}