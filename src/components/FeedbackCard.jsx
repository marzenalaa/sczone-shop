import styles from "../style";
import { feedback } from "../assets";

const FeedbackCard = ({ content, name, link }) => {
  return (
    <div className="max-w-md mx-auto bg-[#ded4ff] font-cairo rounded-lg">
      <img
        src={feedback}
        alt="feedback"
        className="w-[42px] h-[27px] object-contain m-3"
      />
      <p className={`${styles.paragraph} text-slate-900 m-4`}>{content}</p>
      <div className="flex items-center justify-between m-4">
        <p>
          <span className="font-bold">{name}</span> <br />
        </p>
        <a
          href={link}
          target="_blanck"
          rel="noreferrer noopener"
          className="text-[14px] font-semibold text-[#7221e0]"
        >
          رابط التعليق
        </a>
      </div>
      <div className={`p-1 bg-[#7221e0]`}></div>
    </div>
  );
};

export default FeedbackCard;
