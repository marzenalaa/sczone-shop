import styles, { layout } from "../style";
import FeedBackCard from "./FeedbackCard";
import Button from "./Button";
import { feedBack } from "../constants";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <h2 className={`${layout.sectionTitle} `}>شهادات زبائننا</h2>
      <p className={`${styles.paragraph} md:mt-6 mt-4`}>
        نتشرف دائما ونعتز بشهادات وآراء الأشخاص الذين تعاملنا معهم وقدمنا لهم
        مختلف الخدمات التي نوفرها ويمكنكم الإطلاع على بعض الشهادات وردود الأفعال
        التي تصلنا عبر صفحتنا الرسمية على الفيسبوك.
      </p>
      <div className={`${layout.section} flex flex-wrap gap-10`}>
        {feedBack.map((feedback) => (
          <FeedBackCard key={feedback.id} {...feedback} />
        ))}
      </div>
      <p className={`${styles.paragraph} md:mt-6 mt-4`}>
        يمكنكم أيضًا الإطلاع على باقي آراء زبائننا والأشخاص الذين تعاملوا معنا
        عبر المنشور المثبت على صفحتنا على فيسبوك من الرابط التالي:
      </p>
      <div className="flex justify-center">
        <Button
          style={`mt-10`}
          content={"شهادات زبائننا"}
          link={"https://www.facebook.com/SCZoneShop/posts/346730401210504"}
        />
      </div>
    </section>
  );
};

export default Testimonials;
