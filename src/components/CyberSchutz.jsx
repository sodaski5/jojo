import { electro } from '../assets';
import styles, {layout} from '../style';
import Button from './Button'; 


const CyberSchutz = () => {
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
        <h2 className={styles.heading2}>Cybersecurity & IT-Schutz</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            JoJo Security ist Ihr Partner für ganzheitliche IT-Sicherheit. Wir schützen Unternehmen vor Cyberangriffen, Datenverlust und Systemausfällen, indem wir Netzwerke, Endgeräte und Cloud-Dienste mit modernsten Technologien absichern.
            <br />
            Unser Leistungsspektrum reicht von Firewall, VPN und Backup-Lösungen bis hin zu 24/7-Monitoring, Incident Response und präventiven Maßnahmen wie Phishing-Simulationen oder Zugriffsmanagement. Dabei entwickeln wir maßgeschneiderte Sicherheitskonzepte, die perfekt auf Ihre Anforderungen abgestimmt sind.
            <br />
            Mit Erfahrung, Präzision und einem praxisnahen Ansatz sorgen wir dafür, dass Ihre digitale Infrastruktur zuverlässig, widerstandsfähig und sicher bleibt. Vertrauen Sie JoJo Security für nachhaltigen Schutz im Cyberraum.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default CyberSchutz
