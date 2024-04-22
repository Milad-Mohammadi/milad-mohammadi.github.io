import { IconAndroid } from "@/app/components/icons/technologies/IconAndroid";
import { IconKotlin } from "@/app/components/icons/technologies/IconKotlin";
import { IconJava } from "@/app/components/icons/technologies/IconJava";
import { IconJetpackCompose } from "@/app/components/icons/technologies/IconJetpackCompose";
import { IconJavaScript } from "@/app/components/icons/technologies/IconJavaScript";
import { IconTypeScript } from "@/app/components/icons/technologies/IconTypeScript";
import { IconReact } from "@/app/components/icons/technologies/IconReact";
import { IconNextJs } from "@/app/components/icons/technologies/IconNextJs";
import { IconTailwind } from "@/app/components/icons/technologies/IconTailwind";
import { IconNextUi } from "@/app/components/icons/technologies/IconNextUi";
import { IconExpress } from "@/app/components/icons/technologies/IconExpress";
import { IconMongoDb } from "@/app/components/icons/technologies/IconMongoDb";
import { IconFigma } from "@/app/components/icons/technologies/IconFigma";
import { ProjectType } from "../types/project";

export const ProjectListFa: ProjectType[] = [
  {
    title: "تاکسی اینترنتی FTF",
    subtitle: "اپلیکیشن راننده و مسافر تاکسی اینترنتی",
    technologies: [
      <IconAndroid />,
      <IconKotlin />,
    ],
    description:
      "در پروژه تاکسی اینترنتی FTF که برای شرکت Fair Trade Fares LTD انجام شد، دو اپلیکیشن راننده و مسافر به صورت کامل توسط من پیاده‌سازی شد. چالش‌هایی که در این پروژه با آن‌ها مواجه شدم، اطمینان از کارکرد کامل اپلیکیشن در بک‌گراند، مصرف بهینه باتری و روان بودن رابط کاربری آن بود. این دو اپلیکیشن طبق آخرین استانداردهای جهانی طراحی و پیاده‌سازی شدند و از لحاظ امکانات و کیفیت پیاده‌سازی قابل مقایسه و رقابت با اپلیکیشن‌هایی همچون Uber و Lyft می‌باشند. برخی از امکانات دو اپلیکیشن:\n- پیاده‌سازی پرداخت Stripe\n- پیاده‌سازی پرداخت Google Pay\n- امکان بارگذاری مدارک راننده به صورت عکس و یا PDF و تفکیک صفحات مدارک در فایل PDF\n- سرویس ارسال موقعیت مکانی راننده در پس‌زمینه گوشی\n- رسم مسیرها به صورت شخصی‌سازی شده روی نقشه\n- مسیریابی و نمایش محدوده، ورودی‌ها و خروجی‌ها برای مکان‌های خاص مثل فرودگاه‌ها\n- شخصی‌سازی نقشه در توسعه و قابلیت استفاده از یکی از نقشه‌های Google Map و MapBox Map\n",
    githubUrl: "",
    websiteUrl: "https://ftftaxi.com/",
    banner: "/project/ftf.jpg",
    category: "سایت",
    date: "۱۴۰۲",
    client: "Fair Trade Fares LTD",
  },
  {
    title: "سایت شخصی من",
    subtitle: "وب سایت شخصی میلاد محمدی",
    technologies: [
      <IconFigma />,
      <IconAndroid />,
      <IconJavaScript />,
      <IconTypeScript />,
      <IconReact />,
      <IconNextJs />,
      <IconTailwind />,
      <IconNextUi />,
    ],
    description:
      "من این پروژه را به عنوان وب سایت شخصی و نمونه کار توسعه دادم. با React، Next JS و Next UI پیاده‌سازی شده و امکاناتی مثل چندزبانه بودن و تم های تاریک/روشن را دارد.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/vimilad.png",
    category: "اندروید",
    date: "اسفند ۱۴۰۲",
    client: "",
  },
  {
    title: "یونی‌های",
    subtitle: "یونی‌های - پلتفرم جامع تحصیلی | UniHi",
    technologies: [
      <IconAndroid />,
      <IconKotlin />,
      <IconJetpackCompose />,
      <IconExpress />,
      <IconMongoDb />,
      <IconFigma />,
    ],
    description:
      "این اپلیکیشن یک پروژه شخصی بوده و با هدف ساخت جامع‌ترین پلتفرم تحصیلی با ارائه انواع ابزارهای مطالعاتی به دانش‌آموزان و دانشجویان طراحی و ساخته شده است. امکاناتی چون روزشمار کنکور، اعلان روزشمار کنکور، بخش مطالعه و امکان دریافت گزارش دقیق مطالعاتی، درصدسنج، قفل نرم‌افزارها و بسیاری از ابزارهای دیگر بخش اولیه این اپلیکیشن هستند که در نسخه ابتدایی پیاده‌سازی شده است. طراحی و پیاده‌سازی کامل این اپلیکیشن، هم در قسمت بک‌اند و هم بخش اندروید توسط خود من انجام شده است.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/ir.unihi",
    banner: "/project/unihi.jpg",
    category: "اندروید",
    date: "اسفند ۱۴۰۲",
    client: "",
  },
  {
    title: "Realtyna",
    subtitle: "جستجوی خانه در تلفن همراه",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "اپلیکیشن Realtyna پروژه‌ای است که در شرکت Realtyna و به تنهایی روی آن کار کردم. پیاده‌سازی کامل امکانات بسیار زیاد اپلیکیشن و شخصی‌سازی آن برای مشتریان شرکت وظیفه من بود. جذابترین و چالش‌سازترین بخش این پروژه، بخش سیستم فرانچایز (اعمال شخصی‌سازی بر اساس لینک و مشاور املاک روی اپ) و همچنین فیلترینگ پیشرفته و پویا بود.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.android",
    banner: "/project/realtyna.jpg",
    category: "اندروید",
    date: "۱۳۹۹ - ۱۴۰۲",
    client: "Realtyna",
  },
  {
    title: "Realtyna Platinum",
    subtitle: "اپلیکیشن املاک فوق پیشرفته",
    technologies: [<IconAndroid />, <IconKotlin />],
    description:
      "اپلیکیشن Platinum یک پلتفرم جستجوی املاک با امکانات متنوع است که قابلیت اتصال به API های املاک متعددی را داراست. Platinum دارای سرعت و قابلیت‌های سفارشی برندینگ است و می‌تواند مستقیماً به هر سایت IDX/MLS متصل شود و با روتر MLS یا WPL API یکپارچه شود. به علاوه، امکان اتصال به AWS برای انعطاف‌پذیری و مقیاس‌پذیری بیشتر نیز وجود دارد.\n\nبرخی از ویژگی‌های منحصربه‌فرد برنامه Platinum عبارتند از:\n- افزایش سرعت و رابط کاربری نرم‌تر\n- حالت تاریک\n- Cashing ویژه سیستم\n- گزینه ای برای نمایش آخرین املاک مشاهده شده\n- تغییر آسان ارائه دهنده\n- احراز هویت ایمن با خدمات وب آمازون (AWS)",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.platinum",
    banner: "/project/realtyna_platinum.jpg",
    category: "اندروید",
    date: "شهریور ۱۴۰۲",
    client: "Realtyna",
  },
  {
    title: "Realtyna (تبلت)",
    subtitle: "جستجوی خانه در تبلت",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این اپلیکیشن، یک پلتفرم کامل املاک است که قابل نصب بر روی تبلت‌ها می‌باشد. امکانات این نرم‌افزار شامل رسم شکل برای محدود کردن جستجو، امکان تغییر نوع نمایش نقشه، فیلترینگ پیشرفته و پویا، نمایش املاک اطراف مکان کاربر، سیستم اعلان، علاقمندی‌ها و ده‌ها امکان پیشرفته دیگر است.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.tablet",
    banner: "/project/realtyna_tablet.jpg",
    category: "اندروید",
    date: "اسفند ۱۴۰۰",
    client: "Realtyna",
  },
  {
    title: "Realtyna TV",
    subtitle: "اپلیکیشن تلویزیون مشاور املاک",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این نرم‌افزار نسخه تلویزیون اپلیکیشن Realtyna است که املاک قابل اجاره و فروش را به صورت اسلایدی در تلویزیون نشان می‌دهد. قابلیت مهم و اصلی این اپلیکیشن، نمایش اسلایدی اطلاعات و جزئیات هر ملک می‌باشد.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.tv.app",
    banner: "/project/realtyna_tv.jpg",
    category: "تلویزیون",
    date: "شهریور ۱۴۰۰",
    client: "Realtyna",
  },
  {
    title: "Realtyna (ساعت هوشمند)",
    subtitle: "جستجوی خانه در ساعت هوشمند",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این نسخه ساعت برنامه اندروید Realtyna است، کاربران می‌توانند املاک، تصاویر، ویدیوها و جزئیات را ببینند و حتی در حال حرکت با مشاور املاک یا صاحب ملک تماس بگیرند.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.watch",
    banner: "/project/realtyna_watch.jpg",
    category: "ساعت هوشمند",
    date: "دی ۱۴۰۰",
    client: "Realtyna",
  },
  {
    title: "Ashmore Alexander",
    subtitle: "مشاورین املاک جزیره کیمن",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این برنامه تحت لیسانس شرکت Realtyna و به صورت کامل توسط من پیاده‌سازی شده است. امکانات بسیار زیادی از جمله نقشه قابل جستجو، فیلتر پیشرفته جستجو، امکان رسم شکل روی نقشه برای محدود کردن جستجو، ذخیره جستجوها و ارتباط با مشاور املاک در آن پیاده‌سازی شده است.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.ashmorealexander&hl",
    banner: "/project/ashmore_alexander.jpg",
    category: "اندروید",
    date: "2023",
    client: "Ashmore Alexander",
  },
  {
    title: "Urban ACRES",
    subtitle: "خرید و فروش ملک در ایالت آیووا آمریکا",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این برنامه تحت لیسانس شرکت Realtyna و به صورت کامل توسط من پیاده‌سازی شده است. امکانات بسیار زیادی از جمله نقشه قابل جستجو، فیلتر پیشرفته جستجو، امکان رسم شکل روی نقشه برای محدود کردن جستجو، ذخیره جستجوها و ارتباط با مشاور املاک در آن پیاده‌سازی شده است.",
    githubUrl: "",
    websiteUrl: "https://play.google.com/store/apps/details?id=com.urbanacres",
    banner: "/project/urban_acres.jpg",
    category: "اندروید",
    date: "شهریور ۱۴۰۲",
    client: "Urban Acres Real Estate",
  },
  {
    title: "Land 2 Legacy",
    subtitle: "مشاورین املاک Land 2 Legacy",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این برنامه تحت لیسانس شرکت Realtyna و به صورت کامل توسط من پیاده‌سازی شده است. امکانات بسیار زیادی از جمله نقشه قابل جستجو، فیلتر پیشرفته جستجو، امکان رسم شکل روی نقشه برای محدود کردن جستجو، ذخیره جستجوها و ارتباط با مشاور املاک در آن پیاده‌سازی شده است.",
    githubUrl: "",
    websiteUrl: "https://play.google.com/store/apps/details?id=com.land2legacy",
    banner: "/project/land2legacy.jpg",
    category: "اندروید",
    date: "فروردین ۱۴۰۱",
    client: "Conceptualized Design",
  },
  {
    title: "Reveali",
    subtitle: "مشاورین املاک Reveali",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "این برنامه تحت لیسانس شرکت Realtyna و به صورت کامل توسط من پیاده‌سازی شده است. امکانات بسیار زیادی از جمله نقشه قابل جستجو، فیلتر پیشرفته جستجو، امکان رسم شکل روی نقشه برای محدود کردن جستجو، ذخیره جستجوها و ارتباط با مشاور املاک در آن پیاده‌سازی شده است.",
    githubUrl: "",
    websiteUrl: "https://reveali.com",
    banner: "/project/reveali.jpg",
    category: "اندروید",
    date: "2022",
    client: "Reveali",
  },
  {
    title: "حسابداری شبنم",
    subtitle: "حسابداری فروشگاهی شبنم",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "کاملترین و زیباترین نرم‌افزار حسابداری فروشگاهی ایران با امتیاز ۴.۲ از ۵ در کافه‌بازار.\n این نرم‌افزار در تاریخ ۹ تیر ۱۴۰۱ در صفحه اصلی کافه‌بازار به عنوان برنامه منتخب نمایش داده شد. در طراحی رابط کاربری و پیاده‌سازی این پروژه سعی کردم تمامی امکانات مورد نیاز یک نرم‌افزار حسابداری فروشگاهی پیشرفته را در ساده‌ترین قالب ممکن ارائه دهم. استفاده از متد FIFO، رابط کاربری روان و نمودارهای زیبا بعضی از مزیت‌های این نرم‌افزار نسبت به رقبا هستند. ",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.hesabdar.shabnam",
    banner: "/project/shabnam.jpg",
    category: "اندروید",
    date: "شهریور ۱۴۰۱",
    client: "یاسر خلفی‌نژاد",
  },
  {
    title: "Stocko",
    subtitle: "مشاهده اطلاعات بازار سهام",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJetpackCompose />],
    description:
      "این برنامه یک برنامه برای نمایش اطلاعات بازار سهام است که با معماری Clean که با Jetpack Compose، Caching و SOLID اجرا شده است. این برنامه یک پیاده‌سازی ساده از Jetpack Compose است و یک پروژه تجاری نیست. می‌توانید آن را در پروفایل GitHub من مشاهده کنید.",
    githubUrl: "https://github.com/Milad-Mohammadi/Stocko",
    websiteUrl: "",
    banner: "/project/stocko.jpg",
    category: "اندروید",
    date: "",
    client: "خرداد ۱۴۰۱",
  },
  {
    title: "کافینو",
    subtitle: "اپلیکیشن مدیریت سفارشات داخلی کافی‌شاپ",
    technologies: [<IconAndroid />, <IconKotlin />, <IconFigma />],
    description:
      "اپلیکیشن کافینو به سفارش یک کافی‌شاپ در تابستان ۱۳۹۸ طراحی و پیاده‌سازی شد. این اپلیکیشن روی تبلت و موبایل ویتر یا گارسون نصب شده و برای دریافت، ثبت و مدیریت سفارشات استفاده می‌شود. در این نرم‌افزار از دیتابیس داخلی SQLite و کتابخانه Room برای ذخیره‌سازی اطلاعات استفاده شده است و همه‌ی اطلاعات به صورت محلی روی دستگاه کاربر ذخیره می‌شوند.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/cafeno.jpg",
    category: "اندروید",
    date: "شهریور ۱۳۹۸",
    client: "",
  },
  {
    title: "سفیر زبان",
    subtitle: "زبان انگلیسی در شرایط مختلف",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "نرم‌افزار سفیر زبان شامل دسته‌بندی های متنوعی از جملات و اصطلاحات پرکاربردی است که در شرایط مختلف مورد نیاز خواهد بود. این نرم‌افزار در آبان ۱۳۹۶، به سفارش آقای مهدی مقدمی، موسس آموزشگاه زبان راه نو طراحی و پیاده‌سازی شد. ",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.safire.zaban",
    banner: "/project/en_ambassador.jpg",
    category: "اندروید",
    date: "آبان ۱۳۹۶",
    client: "مهدی مقدمی",
  },
  {
    title: "دنیای اصطلاحات",
    subtitle: "لغات،اصطلاحات و جملات کاربردی انگلیسی",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "یکی از کاملترین مجموعه‌ها برای آشنایی با اصطلاحات پراستفاده ای که در زندگی روزمره کارایی بسیار زیادی دارند با ۱۶۰۰ لغت، جمله و اصطلاح. تمامی جملات قابلیت تلفظ آفلاین داشته و بدون نیاز به اتصال به اینترنت می توانید تلفظ جمله را بشنوید. همچنین با استفاده از گزینه جستجو می توانید از این مجموعه به عنوان یک دیکشنری استفاده کرده و به هردو زبان انگلیسی و فارسی در آن جستجو کنید. با قابلیت اشتراک و کپی هر اصطلاح و پیدا کردن یک اصطلاح با استفاده از شماره آن.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.irr.oxford",
    banner: "/project/word_of_idioms.jpg",
    category: "اندروید",
    date: "آذر ۱۳۹۶",
    client: "مهدی مقدمی",
  },
  {
    title: "هوشداد",
    subtitle: "اولین دستیار صوتی فارسی اندروید",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "دستیار صوتی هوشداد، به عنوان اولین دستیار صوتی اندروید و با امکانات متنوع و متعددی منتشر شد. این پروژه، یک تجربه شخصی بوده و طراحی و پیاده‌سازی کامل آن توسط خود من انجام شده است. در حال حاضر این پروژه متوقف شده است اما در  می‌توانید بررسی آن را در سایت اپ‌ریویو مطالعه کنید.",
    githubUrl: "",
    websiteUrl:
      "https://appreview.ir/%D8%AF%D8%B3%D8%AA%DB%8C%D8%A7%D8%B1-%D8%B5%D9%88%D8%AA%DB%8C-%D9%87%D9%88%D8%B4%D8%AF%D8%A7%D8%AF",
    banner: "/project/hooshdad.jpg",
    category: "اندروید",
    date: "مهر ۱۳۹۵",
    client: "",
  },
  {
    title: "شکلک‌نگار",
    subtitle: "رمزنگاری متون با شکلک",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "این پروژه به عنوان یک پروژه تفریحی کوچک توسط من پیاده‌سازی شد. ساز و کار ساده است و جالب، این نرم‌افزار حروف دریافتی را با شکلک جایگزین می‌کند و متن شکلک‌شده را به متن اصلی بازمی‌گرداند. در زمان انتشار اپلیکیشن، کاربران زیادی برای تفریح در پیام‌رسان‌ها از آن استفاده کردند.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/sheklak_negar.jpg",
    category: "اندروید",
    date: "آذر ۱۳۹۵",
    client: "",
  },
];
