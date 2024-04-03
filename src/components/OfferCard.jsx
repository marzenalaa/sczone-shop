import styles from "../style";

const OfferCard = ({
  title,
  subTitle,
  features,
  price,
  textColor,
  bgColor,
}) => {
  return (
    <div className="font-cairo bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-[1.02] cursor-pointer ">
      <div className={`p-1 ${bgColor}`}></div>
      <div className="p-8">
        <h2
          className={`${styles.headingSpecial} ${styles.flexCenter} font-bold ${textColor}`}
        >
          {title}
        </h2>
        <p
          className={` ${textColor} ${styles.flexCenter} text-[20px] font-semibold mb-4`}
        >
          {subTitle}
        </p>
        {features.map((feature) => (
          <ul key={feature.id} className="text-sm text-gray-700 ss:mb-4 mb-2">
            <li className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className={`w-4 h-4 mr-2 ${textColor}`}
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              <p className="pr-2 text-[15px]">{feature.feature}</p>
            </li>
          </ul>
        ))}
      </div>
      <div className="p-4">
        <button
          className={`w-full ${bgColor} text-white rounded-full px-4 py-2 `}
        >
          {price} دينار جزائري
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
