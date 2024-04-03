const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-cairo font-semibold xs:text-[56px] text-[48px] text-[#8e56fc] xs:leading-[76.8px] leading-[66.8px] w-full",
  heading2:
    "font-cairo font-semibold xs:text-[44px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  headingSpecial: "font-cairo font-bold xs:text-[30px] text-[26px] w-full",
  paragraph:
    "font-cairo font-normal text-lightWhite text-[18px] leading-[30.8px] text-justify",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-8 py-4",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,

  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImg: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  sectionTitle: `${styles.heading1} ${styles.flexCenter} underline underline-offset-8`,

  textStyle: `-webkit-text-stroke: 1px gray -webkit-text-fill-color: transparent`,
};

export default styles;
