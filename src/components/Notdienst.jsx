import { notdienst } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const Notdienst = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={notdienst} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Reperaturen, Sanierungsarbeiten <br className="sm:block hidden" /> und Notdienst</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Hegeba - Ihr Partner für Reparaturen, Sanierungsarbeiten und Notdienst in Berlin. Unser erfahrenes Team steht Ihnen zur Seite, um Probleme schnell und effizient zu lösen, sei es bei Schäden, Renovierungen oder dringenden Reparaturanfragen. Vertrauen Sie auf unsere Expertise für schnelle und zuverlässige Lösungen.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default Notdienst