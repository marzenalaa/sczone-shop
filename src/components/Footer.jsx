import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      id="contact"
      className={`${styles.paddingY} flex justify-between items-center md:flex-row flex-col  border-t-[1px] border-t-[#8979e2] my-2 w-full md:gap-0 gap-6`}
    >
      <div
        className={`${styles.flexCenter} md:flex-row flex-col md:gap-0 gap-6 md:mt-0 mt-6 `}
      >
        <p className={`${styles.paragraph}text-white sm:ml-6 ml-0`}>
          لمتابعتنا على مواقع التواصل:
        </p>
        <div className={`${styles.flexCenter}`}>
          {socialMedia.map((social, index) => (
            <a href={social.link} key={social.id} target="_blanck">
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[32px] h-[32px] object-contain cursor-pointer 
                ${index !== socialMedia.length - 1 ? "ml-6" : "ml-0"}`}
              />
            </a>
          ))}
        </div>
      </div>
      <p className={`${styles.paragraph} text-white`}>
        جميع الحقوق محفوظة © 2024{" "}
        <span className="text-gradient font-semibold">SC ZONE Shop</span>.
      </p>
      <p className={`${styles.paragraph} text-white`}>
        تم تطوير الموقع بواسطة{" "}
        <a
          href="mailto:marzenalaa@gmail.com"
          target="_blanck"
          className="text-gradient font-semibold"
        >
          MARZEN AlaaEddine
        </a>
        .
      </p>
    </section>
  );
};

export default Footer;
