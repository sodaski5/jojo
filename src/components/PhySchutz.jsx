import { physchutz } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const PhySchutz = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Physische Sicherheitsdienste
        </h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>
            Unser erfahrenes Sicherheitsteam sorgt für professionellen Objektschutz, Baustellenbewachung und Event-Security. Von der präventiven Präsenz über Kontrollrundgänge bis hin zu Zutritts- und Besuchermanagement stellen wir höchste Sicherheit und Zuverlässigkeit sicher.
            <br />
            Mit einem individuellen Ansatz entwickeln wir maßgeschneiderte Sicherheitskonzepte, die auf Ihre Anforderungen zugeschnitten sind – ob für Firmengebäude, Großveranstaltungen oder kritische Infrastrukturen. Dabei arbeiten wir eng mit Ihnen zusammen, um Risiken zu minimieren und ein sicheres Umfeld zu schaffen.
            <br />
            Vertrauen Sie JoJo Security für physische Sicherheit auf höchstem Niveau.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={physchutz} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default PhySchutz
