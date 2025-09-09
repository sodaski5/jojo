
import styles from "./style";
import { PhySchutz, Business, CardDeal, CTA, CyberSchutz, Footer, Navbar, Schulung, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <CyberSchutz />
        <PhySchutz />
        <Schulung />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
