import { electro } from '../assets';
import styles, {layout} from '../style';
import Button from './Button'; 


const Electro = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={electro} alt="electro" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Elektroinstallation </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Hegeba, Ihre Elektroinstallations-Experten in Berlin, bieten präzise Installationen, Reparaturen und Wartungen elektrischer Systeme für Wohn- und Gewerbeimmobilien. Wir garantieren höchste Sicherheit und Zuverlässigkeit, indem wir moderne Technologien und Fachwissen nutzen, um maßgeschneiderte Lösungen zu liefern. Unsere engagierten Elektrofachkräfte arbeiten effizient und präzise, um alle Anforderungen zu erfüllen und höchste Qualität zu gewährleisten. Vertrauen Sie Hegeba für erstklassigen Service und eine sichere elektrische Infrastruktur.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default Electro
