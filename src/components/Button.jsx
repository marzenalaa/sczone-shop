import styles from "../style";
const Button = ({ style, content, link }) => {
  return (
    <button
      className={`relative ${styles.flexCenter} ${style} h-[50px] w-40 overflow-hidden bg-purpple-gradient font-cairo font-medium text-[18px] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#b07dff] rounded-[10px] before:duration-500 before:ease-out hover:shadow-violet-400 hover:before:h-56 hover:before:w-56 ss:mr-0 m-auto`}
    >
      <a href={link} target="_blanck" rel="noreferrer noopener">
        <span className="relative z-10">{content}</span>
      </a>
    </button>
  );
};

export default Button;
