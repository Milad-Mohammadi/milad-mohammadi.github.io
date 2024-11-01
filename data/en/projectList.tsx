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

export const ProjectList: ProjectType[] = [
  {
    title: "FTF Taxi",
    subtitle: "Online Taxi Driver and Passenger Apps",
    technologies: [
      <IconAndroid />,
      <IconKotlin />,
    ],
    description:
      "In the FTF online taxi project that was done for Fair Trade Fares LTD, two driver and passenger applications were fully implemented by me. The challenges that I faced in this project were ensuring the full functionality of the application in the background, optimal battery consumption and the smoothness of its user interface. These two applications were designed and implemented according to the latest global standards, and in terms of features and implementation quality, they are comparable and competitive with applications such as Uber and Lyft. Some features of the two applications:\n- Implementation of Stripe payment\n- Implementation of Google Pay payment\n- The possibility of uploading the driver's documents as a photo or PDF and separating the pages of the documents in the PDF file\n- The service of sending the driver's location in the background of the phone\n- Draw personalized routes on the map\n- Routing and display of range, entrances and exits for specific locations such as airports\n- Personalization of the map in development and the ability to use one of the Google Map and MapBox Map",
    githubUrl: "",
    websiteUrl: "https://ftftaxi.com/",
    banner: "/project/ftf.jpg",
    category: "Android",
    date: "2023",
    client: "Fair Trade Fares LTD",
  },
  {
    title: "This Website",
    subtitle: "My portfolio website",
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
      "I Implemented this project as my personal and portfolio website. Implemented by React, Next JS, and Next UI. including localization and Dark/Light Themes.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/vimilad.png",
    category: "Web",
    date: "2024 March",
    client: "",
  },
  {
    title: "UniHi",
    subtitle: "Comprehensive Educational Platform",
    technologies: [
      <IconAndroid />,
      <IconKotlin />,
      <IconJetpackCompose />,
      <IconExpress />,
      <IconMongoDb />,
      <IconFigma />,
    ],
    description:
      "This application is a personal project and has been designed and built with the aim of building the most comprehensive educational platform by providing a variety of study tools to students.\n\nFeatures such as entrance exam date, entrance exam notification, study section and the possibility of receiving detailed study reports, test percent calculator, app lock and many other tools are the first part of this application which is implemented in the initial version. The complete design and implementation of this application, both in the back-end and Android sections, was done by myself.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/ir.unihi?l=en",
    banner: "/project/unihi.jpg",
    category: "Android",
    date: "2024 February",
    client: "",
  },
  {
    title: "Realtyna",
    subtitle: "Realtyna Home Search",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "Realtina application is a project that I worked on in Realtina company and on my own. It was my duty to fully implement the many features of the application and personalize it for the company's customers. The most interesting and challenging part of this project was the franchise system part (application of personalization based on the link and real estate consultant on the app) as well as advanced and dynamic filtering.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.android",
    banner: "/project/realtyna.jpg",
    category: "Android",
    date: "2020 - 2023",
    client: "Realtyna",
  },
  {
    title: "Realtyna Platinum",
    subtitle: "Dynamic Home Search App",
    technologies: [<IconAndroid />, <IconKotlin />],
    description:
      "Platinum can be connected to multiple frameworks across the board. Platinum has enhanced speed and custom branding capabilities and it can be connected directly to any IDX/MLS site and integrated with MLS Router or WPL API. Plus, it's possible to connect to AWS for even greater flexibility and scalability.\n\nSome of the unique features of Platinum app are:\n- Increased Speed and Smoother UI\n- Updated Logic App\n- Dark Mode\n- Special Cashing System\n- Option to Display Last Viewed Properties\n- Easy Provider Changing\n- Safe Authentication with Amazon Web Services (AWS)",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.platinum",
    banner: "/project/realtyna_platinum.jpg",
    category: "Android",
    date: "2023 September",
    client: "Realtyna",
  },
  {
    title: "Realtyna TV",
    subtitle: "Real Estate TV App",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This software is the TV version of the Realtyna application, which shows real estate for rent and sale in the form of a slide show on the TV. The main and important feature of this application is the slide show of information and details of each property.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.tv.app",
    banner: "/project/realtyna_tv.jpg",
    category: "Android TV",
    date: "2021 September",
    client: "Realtyna",
  },
  {
    title: "Realtyna Tablet",
    subtitle: "Android Tablet Home Search",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This application is a complete real estate platform that can be installed on tablets. The features of this software include drawing a shape to limit the search, the ability to change the type of map display, advanced and dynamic filtering, displaying properties around the user's location, notification system, interests and dozens of other advanced features.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.tablet",
    banner: "/project/realtyna_tablet.jpg",
    category: "Android",
    date: "2022 March",
    client: "Realtyna",
  },
  {
    title: "Realtyna Watch",
    subtitle: "Android Watch Home Search",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This is the watch version of the Realtyna Android App, users can see the listings, media, and details and even contact the agent on the go.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.realtyna.watch",
    banner: "/project/realtyna_watch.jpg",
    category: "Wear OS",
    date: "2022 January",
    client: "Realtyna",
  },
  {
    title: "Ashmore Alexander",
    subtitle: "Cayman Islands Real Estate",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This app is licensed by Realtyna and fully implemented by me. Many features are implemented, including a searchable map, an advanced search filter, the ability to draw a shape on the map to limit the search, save searches, and communicate with a real estate agent.",
    githubUrl: "",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.ashmorealexander&hl",
    banner: "/project/ashmore_alexander.jpg",
    category: "Android",
    date: "2023",
    client: "Ashmore Alexander",
  },
  {
    title: "Urban ACRES",
    subtitle: "Iowa City-Cedar Rapids Corridor Listings",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This app is licensed by Realtyna and fully implemented by me. Many features are implemented, including a searchable map, an advanced search filter, the ability to draw a shape on the map to limit the search, save searches, and communicate with a real estate agent.",
    githubUrl: "",
    websiteUrl: "https://play.google.com/store/apps/details?id=com.urbanacres",
    banner: "/project/urban_acres.jpg",
    category: "Android",
    date: "2023 September",
    client: "Urban Acres Real Estate",
  },
  {
    title: "Land 2 Legacy",
    subtitle: "Western Kansas Home Search",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This app is licensed by Realtyna and fully implemented by me. Many features are implemented, including a searchable map, an advanced search filter, the ability to draw a shape on the map to limit the search, save searches, and communicate with a real estate agent.",
    githubUrl: "",
    websiteUrl: "https://play.google.com/store/apps/details?id=com.land2legacy",
    banner: "/project/land2legacy.jpg",
    category: "Android",
    date: "2022 April",
    client: "Conceptualized Design",
  },
  {
    title: "Reveali",
    subtitle: "Reveali Estate agent",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "This app is licensed by Realtyna and fully implemented by me. Many features are implemented, including a searchable map, an advanced search filter, the ability to draw a shape on the map to limit the search, save searches, and communicate with a real estate agent.",
    githubUrl: "",
    websiteUrl: "https://reveali.com",
    banner: "/project/reveali.jpg",
    category: "Android",
    date: "2022",
    client: "Reveali",
  },
  {
    title: "Shabnam Accounting",
    subtitle: "Shabnam Store Accounting",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJava />],
    description:
      "The most complete and beautiful store accounting software in Iran with a score of 4.2 out of 5 in Cafe Bazaar.\nThis software was displayed as the editor's choice on the main page of Cafe Bazaar. In designing the user interface and implementing this project, I tried to provide all the facilities needed for advanced store accounting software in the simplest possible format. The use of the FIFO method, smooth user interface, and beautiful charts are some of the advantages of this software compared to competitors.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.hesabdar.shabnam?l=en",
    banner: "/project/shabnam.jpg",
    category: "Android",
    date: "2022 August",
    client: "Yaser Khalfi Nejad",
  },
  {
    title: "Stocko",
    subtitle: "View the information of stock market",
    technologies: [<IconAndroid />, <IconKotlin />, <IconJetpackCompose />],
    description:
      "A Clean Architecture Stock Market App, implemented with Jetpack Compose, Caching, and SOLID. this application is a simple implementation of Jetpack Compose and is not a real production. you can check it in my GitHub profile.",
    githubUrl: "https://github.com/Milad-Mohammadi/Stocko",
    websiteUrl: "",
    banner: "/project/stocko.jpg",
    category: "Android",
    date: "2022 May",
    client: "",
  },
  {
    title: "Cafeno",
    subtitle: "Coffee shop order management",
    technologies: [<IconAndroid />, <IconKotlin />, <IconFigma />],
    description:
      "Cafino android application was designed and implemented by order of a coffee shop in the 2019 September This application is installed on the tablet and mobile phone of the waiters and is used to receive, record, and manage orders. In this software, the database Internal SQLite and Room library are used for data storage, and all data is stored locally on the user's device.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/cafeno.jpg",
    category: "Android",
    date: "2019 September",
    client: "Cafeno",
  },
  {
    title: "Language Ambassador",
    subtitle: "English In various situations.",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "The language ambassador software includes various categories of frequently used sentences and terms that will be needed in different situations. This software was designed and implemented in November 2016, by the order of Mr. Mahdi Moghadami, the founder of Rah Nou Language School.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.safire.zaban?l=en",
    banner: "/project/en_ambassador.jpg",
    category: "Android",
    date: "2017 October",
    client: "Mahdi Moghaddami",
  },
  {
    title: "World of Idioms",
    subtitle: "Practical English idioms",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "One of the most complete collections for familiarizing with frequently used terms that are very useful in everyday life with 1600 words, sentences and expressions. All the sentences can be pronounced offline and you can hear the pronunciation of the sentence without needing to connect to the Internet. Also, by using the search option, you can use this collection as a dictionary and search in both English and Farsi languages. With the ability to share and copy any term and find a term using its number.",
    githubUrl: "",
    websiteUrl: "https://cafebazaar.ir/app/com.irr.oxford?l=en",
    banner: "/project/word_of_idioms.jpg",
    category: "Android",
    date: "2017 November",
    client: "Mahdi Moghaddami",
  },
  {
    title: "Hooshdad",
    subtitle: "First Persian Voice Assistant",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "Hoshdad voice assistant was released as the first Android voice assistant with various features. This project was a personal experience and its complete design and implementation was done by myself.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/hooshdad.jpg",
    category: "Android",
    date: "2016 October",
    client: "",
  },
  {
    title: "Sheklak Negar",
    subtitle: "Text encryption with emojies",
    technologies: [<IconAndroid />, <IconJava />],
    description:
      "This project was implemented by me as a small hobby project. The mechanism is simple and interesting, this software replaces incoming letters with emoticons and converts the emoticoned text back to the original text. At the time of the application's release, many users used it to have fun in messengers.",
    githubUrl: "",
    websiteUrl: "",
    banner: "/project/sheklak_negar.jpg",
    category: "Android",
    date: "2016 December",
    client: "",
  },
];
