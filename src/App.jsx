import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  About,
  Services,
  Offers,
  Testimonials,
  Contact,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Services />
          <Offers />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
