import styles from "../style";
import Button from "./Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.padding} sm:my-20 my-12 sm:flex-row flex-col bg-purpple-gradient-2 rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          لا تفوت فرصة الإستفادة من خدماتنا الآن!
        </h2>
        <p className={`${styles.paragraph}  mt-5`}>
          يمكنك التواصل معنا ابتداءًا من الآن للاستفادة من إحدى الخدمات التي
          نقدمها لزبائننا الكرام والتي تشمل مجالات عديدة.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:mr-10 mr-0 sm:mt:0 mt-4`}>
        <Button
          style={`sm:my-0 my-4`}
          content={"تواصل معنا"}
          link={"mailto:zoneshopdz@gmail.com"}
        />
      </div>
    </section>
  );
};

export default Contact;
