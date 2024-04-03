import styles, { layout } from "../style";
import OfferCard from "./OfferCard";
import { ourOffers } from "../constants";

const Offers = () => {
  return (
    <section
      id="offers"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <h2 className={`${layout.sectionTitle}`}>عروض الترويج</h2>
      <p className={`${styles.paragraph} md:mt-6 mt-4`}>
        نقدم لكم خدمة الترويج والإشهار لحسابات مواقع التواصل الاجتماعي حيث نقدم
        ستة باقات مختلفةّ، أولها باقة البداية التي تبدأ من 2,000 دينار جزائري
        إلى الباقة المتقدمة التي يصل سعرها إلى 12,000 دينار جزائري بمزايا عديدة
        أهمها ضمان أزيد من مائتي ألف مشاهدة وإليكم باقاتنا الستة المقدمة.
      </p>
      <div
        className={`${layout.section} ${styles.flexCenter} flex-wrap gap-10`}
      >
        {ourOffers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
      <p
        className={`${styles.paragraph} ${styles.flexCenter} md:mt-6 mt-4 bg-purpple-gradient-2 p-5 rounded-xl w-full opacity font-semibold text-[20px]`}
      >
        ملاحظة: أرقام المشاهدة تتغير حسب نوع النشاط وطريقة الإستهداف (المنطقة،
        العمر ...).
      </p>
    </section>
  );
};

export default Offers;
