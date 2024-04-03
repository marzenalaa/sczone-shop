import {
  hash,
  payment,
  shopping,
  design,
  shipping,
  facebook,
  instagram,
} from "../assets";

export const navigationLinks = [
  {
    id: "hero",
    title: "الرئيسية",
  },
  {
    id: "about",
    title: "من نحن ؟",
  },
  {
    id: "services",
    title: "خدماتنا",
  },
  {
    id: "offers",
    title: "عروض الترويج",
  },
  {
    id: "testimonials",
    title: "شهادات",
  },
  {
    id: "contact",
    title: "اتصل بنا",
  },
];
export const stats = [
  {
    id: "stats-1",
    title: "عملية شراء",
    value: "500+",
  },
  {
    id: "stats-2",
    title: "بطاقة بنكية",
    value: "200+",
  },
  {
    id: "stats-3",
    title: "ترويج للصفحات",
    value: "50+",
  },
];

export const ourServices = [
  {
    id: "service-1",
    icon: hash,
    title: "الترويج والتسويق لحسابات التواصل الاجتماعي",
    content:
      "نقدم في هذه الخدمة، الترويج والتسويق لصفحات التواصل الاجتماعي وإدارتها، يتضمن الترويج والتسويق تمويل المنشورات والصفحة لزيادة التفاعل والوصول وكذلك عدد المتابعين، أمّا الإدارة فتتمثل في إدارة صفحتك أو منصتك على منصات التواصل الاجتماعي والقيام بجميع المهام المطلوبة، كالرد على الرسائل أو تصميم منشورات أو فكرة منشورات جديدة.",
    number: "01",
  },
  {
    id: "service-2",
    icon: payment,
    title: "طلب بطاقات الدفع",
    content:
      "لعل واحدة من أصعب المشاكل التي تواجهنا هي التخبط بين عديد من بطاقات الدفع المتوفرة والتي طالما نبحث لنجد أفضلها أو على الأقل واحدة تناسبنا من ناحية التعامل وكذلك التكلفة، نقدم لك خدمة طلب بطاقة الدفع الخاصة بك لتتمكن من التسوق عبر الإنترنت بمفردك أو شراء خدمة ما، أو الترويج لصفحتك مثلاً.",
    number: "02",
  },
  {
    id: "service-3",
    icon: shopping,
    title: "خدمة الشراء عبر الإنترنت",
    content:
      "هل أعجبك منتج ما عبر الإنترنت؟ تُريد اقتناءه وتعذّر عليك ذلك بسبب عدم امتلاكك لبطاقة دفع، نقدم لك هذه الخدمة بأفضل الأسعار والاقتراحات الممكنة في هذا المجال.",
    number: "03",
  },
  {
    id: "service-4",
    icon: design,
    title: "خدمات التصميم والتعليق الصوتي",
    content:
      "نمتلك فريقًا مُحترفًا ونوفر لك خدمات التصميم والتعليق الصوتي لنشاطك التجاري بأفضل حُلة بصرية وسمعية تجذب بها عملاءك وتوسع نشاطك.",
    number: "04",
  },
  {
    id: "service-5",
    icon: shipping,
    title: "شحن التطبيقات",
    content:
      "العديد من التطبيقات أصبحت تُوفر اشتراكات مدفوعة للحصول على المزيد من المزايا والعروض الحصرية، نوفر لك شراء هذه العروض أو الاشتراكات، كما نوفر لك العديد من الحسابات الخاصة في المنصات المختلفة.",
    number: "05",
  },
];
export const ourOffers = [
  {
    id: "offer-1",
    title: "باقة البداية",
    subTitle: "STARTER",
    textColor: "text-cyan-500",
    bgColor: "bg-cyan-500",
    features: [
      { id: "1", feature: "20,000 مشاهدة." },
      { id: "2", feature: "5-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "2,000",
  },
  {
    id: "offer-2",
    title: "الباقة المصغرة",
    subTitle: "MINI",
    textColor: "text-green-500",
    bgColor: "bg-green-500",
    features: [
      { id: "1", feature: "30,000 مشاهدة." },
      { id: "2", feature: "7-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "3,000",
  },
  {
    id: "offer-3",
    title: "الباقة البرونزية",
    subTitle: "BRONZE",
    textColor: "text-rose-500",
    bgColor: "bg-rose-500",
    features: [
      { id: "1", feature: "70,000 مشاهدة." },
      { id: "2", feature: "10-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "4,400",
  },
  {
    id: "offer-4",
    title: "الباقة الفضية",
    subTitle: "SILVER",
    textColor: "text-slate-500",
    bgColor: "bg-slate-500",
    features: [
      { id: "1", feature: "120,000 مشاهدة." },
      { id: "2", feature: "15-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "6,500",
  },
  {
    id: "offer-5",
    title: "الباقة الذهبية",
    subTitle: "GOLD",
    textColor: "text-amber-500",
    bgColor: "bg-amber-500",
    features: [
      { id: "1", feature: "160,000 مشاهدة." },
      { id: "2", feature: "21-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "8,500",
  },
  {
    id: "offer-6",
    title: "الباقة المتقدمة",
    subTitle: "PLATINUM",
    textColor: "text-violet-500",
    bgColor: "bg-violet-500",
    features: [
      { id: "1", feature: "250,000 مشاهدة." },
      { id: "2", feature: "30-1 أيام." },
      { id: "3", feature: "ضمان عدد المشاهدات والوصول." },
      { id: "4", feature: "الهدف التفاعل مع المنشور أو استقبال الرسائل." },
    ],
    price: "12,000",
  },
];

export const feedBack = [
  {
    id: "feedback-1",
    content:
      "كان الله في عونكم ولي حاجتو فالتعامل راح يلقى كل الدعم والتوجيه إلى غاية حصوله على مراده بالتوفيق.",
    name: "عبد المالك روابح",
    link: "https://www.facebook.com/SCZoneShop/posts/109077214848667?comment_id=1269081263813679",
  },
  {
    id: "feedback-2",
    content:
      "صفحة ما شاء الله قمة في الثقة والمصداقية مزيد من النجاحات ان شاء الله.",
    name: "Hicham Rezig",
    link: "https://www.facebook.com/SCZoneShop/posts/346730401210504?comment_id=764723312083579",
  },
  {
    id: "feedback-3",
    content:
      "والله افضل معاملة وثقة. أنصح الجميع به. وشكرا هلى حسن المعاملة. راح ابقى وفية ليكم.",
    name: "Meriem Ben",
    link: "https://www.facebook.com/SCZoneShop/posts/109077214848667?comment_id=1373623703208948",
  },
  {
    id: "feedback-4",
    content:
      "أنا كل ما تغيبلي نجي لهذه الصفحة ما شاء الله،أخلاق واحترافية ومصداقية ما شاء الله ربي يوفقك.",
    name: "Carla Kev",
    link: "https://www.facebook.com/SCZoneShop/posts/346730401210504?comment_id=858409418837087",
  },
];
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/zoneshopdz",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/SCZoneShop",
  },
];
