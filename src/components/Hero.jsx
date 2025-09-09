import styles from '../style';
import { discount, file0 } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Rabatt für Neubestellungen {" "}
            <span className="text-white">1 Mal</span> Pro Monat           
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Der ultimative <br className="sm:block hidden" /> {" "} 
            <span className="text-gradient">Dienstleister</span> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> 
        </div> 
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Berlin und Ganz Deutschland. 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Wir bieten Pyschiche Sicherheitsdienste, Cybersecurity & IT-Schutz und Schulungen nach §34a GewO. Unser Team besteht aus Experten, die rund um die Uhr für den gesamten Berliner Ballungsraum zur Verfügung stehen. Und eine IT-Abteilung, die deutschland- und europaweit für die Auftragsannahme zur Verfügung steht.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={file0} alt="billing" className="w-[100%] h=[100%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div> 
    
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>    
    </ section>
  );
};

export default Hero;