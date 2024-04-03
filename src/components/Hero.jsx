import styles from "../style";
import { online, discount } from "../assets";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "./Button";

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".text-animation", {
        opacity: 0,
        y: "-=100",
        stagger: 0.2,
      });
      t1.from(".image-animation", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex md:flex-row flex-col items-center ${styles.paddingY} `}
      ref={comp}
    >
      <div
        className={`flex-1 ${styles.flexStart} ${styles.paddingX} flex-col xl:px-0`}
      >
        <div className="text-animation flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[40px] h-[40px] ml-2"
          />
          <p className={`${styles.paragraph}`}>
            تخفيضات وعروض مميزة ستجدها لدينا فلا تضيعها !
          </p>
        </div>
        <h1 className="text-animation font-cairo font-semibold ss:text-[72px] text-[52px] text-white">
          SC ZONE <span className="text-gradient">Shop</span>
        </h1>
        <p className={`text-animation ${styles.paragraph} max-w-[550px] mt-5`}>
          هو متجر إلكتروني افتراضي متواجد عبر منصات التواصل الاجتماعي، يقدم
          خدمات إلكترونية مختلفة كالترويج والتسويق وإدارة حسابات التواصل
          الاجتماعي، طلب بطاقات الدفع، خدمات الشراء عبر الإنترنت، وخدمات أخرى
          بخبرة تفوق العشر سنوات.
        </p>
        <Button
          style={`mt-10`}
          content={"إبـدأ الآن"}
          aria-label={"ابدأ الآن"}
          link={"https://www.facebook.com/SCZoneShop"}
        />
      </div>
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={online}
          alt="online shopping"
          className="image-animation relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
