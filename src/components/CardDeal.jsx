import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Finden Sie in wenigen einfachen Schritten <br className="sm:block hidden" /> den Service, den Sie benötigen
        </h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>IT-Lösungen, Cloud-Entwicklungen, Elektrodienstleistungen und Notfalldienste.</p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
};

export default CardDeal