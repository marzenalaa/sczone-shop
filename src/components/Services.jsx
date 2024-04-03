import styles, { layout } from "../style";
import { ourServices } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className={`${styles.paddingY} flex-col relative`}>
      <h2 className={`${layout.sectionTitle}`}>ما هي خدماتنا ؟</h2>
      <p className={`${styles.paragraph} mt-6`}>
        يقدم متجرنا العديد من الخدمات التي نعمل من خلالها على تسهيل الأمور
        المتعلقة بالتجارة الإلكترونية كخدمة الشراء عبر الانترنت، طلب بطاقة دفع،
        شحن مختلف أنواع التطبيقات وخدمات أخرى كما يلي:
      </p>
      <div
        className={`${layout.section} ${styles.flexCenter} flex-wrap gap-10`}
      >
        {ourServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
