//Apps&websites Icons
import Location from './assets/location.png'
import LocationAdmin from './assets/location-admin.png'
import Communiteam from './assets/communiteam.png'
import Weather from './assets/weather.png'
import Hyngry from './assets/hyngry.png'
import TicTacToe from './assets/tictactoe.png'
import TimeTable from './assets/timetable.png'


import User1 from './assets/user1.jfif'
import User2 from './assets/user2.jfif'
import User3 from './assets/user3.jfif'

//icons
import Experience from '@mui/icons-material/WorkspacePremiumOutlined';
import Group from '@mui/icons-material/GroupOutlined';
import Project from '@mui/icons-material/WorkOutlined';

import UserFace from "./assets/me.jpg"



export const data = 
    {
      userName: "Mohamed Koussay",
      lastName: "Toumi",
      email: "toumikoussay@hotmail.fr",
      profil:"Web & Mobile Developer",
      userFace:UserFace,
      profilDescription:
      "I am Toumi Mohamed Koussay, a Web and Mobile Developer. I am currently a student pursuing a Professional Master's degree in Mobile Application Development at ISET Rades. I am also passionate about new technologies. Being curious and enthusiastic about new technologies, I am constantly seeking new challenges to enhance my knowledge."
      ,
      
      cards:[
        {
            icon:Experience,
            title: "Experience",
            content:"Since 2012"
 
         },
        {
            icon:Group,
            title: "Teams",
            content:"Iset Rades Teams"
 
         },
         {
            icon:Project,
            title: "Projects",
            content:"+10 projects"
 
         },
      ],
      experiences :[
        {
            title:"Frontend Developer",
            elements:[
                {
                    title:"JavaScript",
                    level:"Experienced"
                },
                {
                    title:"React JS",
                    level:"Experienced"
                },
                {
                    title:"HTML 5 ",
                    level:"Experienced"
                },
                {
                    title:"CSS 3",
                    level:"Experienced"
                },  
            ]

        },
        {
            title:"Backend Developer",
            elements:[
                {
                    title:"Node JS",
                    level:"Experienced"
                },
                {
                    title:"PHP",
                    level:"Experienced"
                },
                {
                    title:"JAVA",
                    level:"Experienced"
                },
                {
                    title:"MySQL",
                    level:"Experienced"
                },
               
                
            ]

        },
        {
            title:"Mobile Developer",
            elements:[
               {
                    title:"Java",
                    level:"Experienced"
                },
                {
                    title:"Kotlin",
                    level:"Meduim"
                },
                {
                    title:"Dart",
                    level:"Experienced"
                },
                {
                    title:"Swift",
                    level:"Meduim"
                },
               
                
            ]

        },
        {
            title:"Frameworks",
            elements:[
               {
                    title:"Node JS",
                    level:"Experienced"
                },
                {
                    title:"React JS",
                    level:"Experienced "
                },
                {
                    title:"Flutter",
                    level:"Meduim"
                },
                {
                    title:"Bootstrap",
                    level:"Experienced"
                },
                {
                    title:"Material UI",
                    level:"Experienced"
                },
               
                
            ]

        },
        
      ],
      services: [
           
        {
            title: "Mobile App Development",
            elements: [
            "Creation of native mobile applications for iOS and Android",
            "Development of cross-platform applications using frameworks such as Flutter",
            "Integration of advanced features such as geolocation, push notifications,chat, online payments, etc.",
            "Optimization of application performance for a smooth and responsive user experience",
            "Close collaboration with clients to understand their needs and provide customized solutions",
            "Testing and debugging to ensure the quality and reliability of the applications",
            "Regular updates and maintenance of applications to ensure compatibility with new versions of mobile operating systems"
            ]
        },
        {
            title: "Web Design and Development",
            elements: [
            "Creation of responsive and user-friendly websites",
            "Development of custom web applications using modern technologies",
            "Integration of interactive features and functionalities into websites",
            "Design and implementation of intuitive user interfaces",
            "Optimization of website performance for faster loading times",
            "Collaboration with clients to understand their specific requirements and goals",
            "Testing and debugging to ensure the functionality and compatibility of the websites",
            "Regular updates and maintenance of websites to keep them secure and up-to-date"
            ]
            }
        ],
      projects:[
        {
                image:Location,
                title:'Location',
                description:"Native Android app for house rentals (publish, search,notifications and chat)",
                code:'https://github.com/samar3-web/location',
                demo:'http://github.com/Alien_pixels'
            },
            {
                image:LocationAdmin,
                title:'Location Admin',
                description:"Website: admin dashboard using React JS for the ` Location ` application.",
                code:'https://github.com/Jkhaled-glitch/location-admin',
                demo:'http://github.com/Alien_pixels'
            },
            {   
                image:Communiteam,
                title:'CommuniTeam',
                description:"Flutter App: Collaborative learning platform designed to connect students",
                code:'https://github.com/MariemAbdi/CommuniTeam',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:Weather,
                title:'Weather',
                description:"App for Android(with widget) that displays current weather and a 5-day forecast for any city using the OpenWeatherMap API",
                code:'https://github.com/strongkoya/WeatherWidgetApp',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:Hyngry,
                title:'Myguide',
                description:"Myguide is an Android app that allows users to search for nearby restaurants, hoteels and attractions using Bing Maps",
                code:'https://github.com/strongkoya/My_Guide',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:TicTacToe,
                title:'TicTacToe',
                description:"Android app featuring a Tic Tac Toe game with Canvas, animations and Custom Views.",
                code:'https://github.com/strongkoya/Tic-Tac-Toe',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:TimeTable,
                title:'TimeTable',
                description:"A MERN stack web application designed for creating and managing schedules or timetables. With a drag-and-drop interface",
                code:'https://github.com/Jkhaled-glitch/TimeTable',
                demo:'http://github.com/Alien_pixels2'
            },
      ],
      testimonials:[
        {
            avtr:User1,
            name:'John',
            review:'Excellent',   
        },
        {
            avtr:User2,
            name:'Mariem',
            review:'Passable',   
        },
        {
            avtr:User3,
            name:'Mohamed',
            review:'Great',   
        },
            
            
      ],
      messenger:
      {
            label:"Toumi Mohamed Koussay",
            link: "http://m.me/toumikoussay"
      },
      whatsApp:
      {
            tel:"+216 95 505 789",
            link: "https://api.whatsapp.com/send?phone+21623704540"
      },

      
    };
  