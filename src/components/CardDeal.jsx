import { apple, card, google } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Fordern Sie ganz einfach <br className="sm:block hidden" /> einen Service an</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Finden Sie uns auf Google, Instagram, Ticktok, FaceBook, X und anderen sozialen Netzwerken. Rufen Sie jetzt an, um eine Bestellung aufzugeben.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="apple_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
};

export default CardDeal