const ServiceCard = ({ icon, title, content, number }) => {
  return (
    <div className="flex flex-col items-start font-cairo cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#e4d3ff] gap-3 transition-all duration-500 group hover:bg-[#b07dff] rounded-[10px] md:h-[450px] sm:w-[370px] w-full">
      <img src={icon} alt={icon} />
      <div className="flex-grow">
        <h4 className="font-bold text-2xl group-hover:text-white text-[#0F0115] mb-4">
          {title}
        </h4>
        <p className="text-black/80 group-hover:text-white text-[15px] text-justify">
          {content}
        </p>
      </div>
      <p className="text-5xl font-bold self-end text-stroke">{number}</p>
    </div>
  );
};

export default ServiceCard;
