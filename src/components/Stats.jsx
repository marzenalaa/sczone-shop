import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} ss:flex-row flex-col flex-wrap`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 ${styles.flexCenter} flex-row flex-wrap m-3`}
        >
          <h3 className="font-cairo font-semibold xs:text[40px] text-[32px] xs:leading-[53px] leading-[43px] text-gradient">
            {stat.value}
          </h3>
          <p className="font-cairo font-normal xs:text[26px] text-[24px] text-white mr-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
