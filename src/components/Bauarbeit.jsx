import { bauarbeit } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Bauarbeit = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Bauarbeiten
        </h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>Unser erfahrenes Team von Architekten, Bauingenieuren und Handwerkern übernimmt Bauprojekte jeder Größe und Komplexität. Von der sorgfältigen Planung bis zur präzisen Umsetzung legen wir größten Wert auf Qualität, Effizienz und die Zufriedenheit unserer Kunden. <br /> Mit einem individuellen Ansatz für jedes Projekt stellen wir sicher, dass die spezifischen Anforderungen und Visionen unserer Kunden erfüllt werden. Wir arbeiten eng mit Ihnen zusammen, um Ihre Wünsche zu verstehen und maßgeschneiderte Lösungen zu entwickeln, die Ihren Bedürfnissen entsprechen.</p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={bauarbeit} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default Bauarbeit
