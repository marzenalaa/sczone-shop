import styles, { layout } from "../style";
import { about } from "../assets";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className={styles.paddingY}>
      <h2 className={`${layout.sectionTitle}`}>ما هو متجر SC ZONE Shop ؟</h2>
      <div className={layout.sectionReverse}>
        <div className={layout.sectionImg}>
          <img src={about} alt="about-us" />
        </div>
        <div className={layout.sectionInfo}>
          <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
            هو عبارة عن متجر إلكتروني يقدم خدمات إلكترونية عديدة عبر منصات
            التواصل الإجتماعي، من بين أهم هذه الخدمات:
          </p>
          <ul className={`${styles.paragraph} mt-5`}>
            <li>- طلب بطاقات الدفع الإلكترونية.</li>
            <li>- خدمة الشراء عبر الانترنت.</li>
            <li>- خدمات التصميم.</li>
            <li>- خدمات التعليق الصوتي.</li>
            <li>- ترويج وإدارة حسابات التواصل الاجتماعي.</li>
          </ul>
          <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
            والمزيد من الخدمات التي يمكنكم الإطلاع عليها بالتواصل معنا عبر
            الواتساب.
          </p>
          <Button
            style={`mt-10`}
            content={"تواصل معنا"}
            link={"https://wa.me/213562007861"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
