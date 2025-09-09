import { securitytraining } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const Schulung = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={securitytraining} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Schulungen nach §34a GewO §</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            JoJo Security ist Ihr Partner für anerkannte Sicherheitsschulungen nach §34a GewO. Unser erfahrenes Dozententeam vermittelt praxisnahes Wissen und bereitet Teilnehmer optimal auf die IHK-Prüfung vor.
            <br />
            Ob online oder im Live-Unterricht – wir bieten flexible, effiziente und verständliche Lernkonzepte, die individuell auf die Anforderungen im Sicherheitsgewerbe zugeschnitten sind.
            <br />
            Vertrauen Sie auf unsere Expertise für eine fundierte Ausbildung und einen erfolgreichen Einstieg in die Sicherheitsbranche.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default Schulung