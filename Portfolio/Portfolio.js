// Containers
const projectTileDescriptionContainer = document.getElementById("projects");

// Buttons
const htmlCssBtn = document.getElementById("html-css-button");
const javaScriptBtn = document.getElementById("javascript-button");
const reactBtn = document.getElementById("reactjs-button");

const htmlCssArr = [
    {
        href: "//kairukpop.netlify.app/",
        src: "https://mapetitecoree.com/cdn/shop/articles/army-sejati-yuk-kenalan-sama-karakter-bt21-karya-member-bts-m3UeiIGJLd.jpg?v=1672451852",
        alt: "Kairu Kpop Shop logo",
        title: "Kairu Kpop Shop",
        description: "E-commerce website for a Kpop Shop selling photocards, clothes, accessories, and other merch! It is made using bootstrap.",    
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/KwPYVBP",
        src: "https://form-publisher.com/blog/content/images/size/w1200/2022/08/How-to-Make-a-Survey-in-Google-Forms.png",
        alt: "Survey Form",
        title: "Survey Form",
        description: "A simple survey form wepage that is made using flexbox.",
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/GgKLozY",
        src: "https://preview.redd.it/what-is-the-best-character-in-dst-meta-based-v0-kt8tg2rk4xob1.jpg?width=640&crop=smart&auto=webp&s=fe8deaac0a41bd05cd537610623e7e86894932d8",
        alt: "Don't Starve Survivors Tribute",
        title: "Tribute Webpage",
        description: "A tribute page for the characters of the game \"Don't Starve Together\".",
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/emOoJoz",
        src: "https://wallpapercave.com/wp/wp8534853.jpg",
        alt: "Computer Parts",
        title: "Technical Documentation Website",
        description: "A webpage on the different Computer parts. It utilized flexbox and its elements such as flex-grow. In this activity I also explore the position element through the sidebar.",
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/OPLGMGd",
        src: "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-top-13-pool-table-wallpapers-to-get-your-ball-rolling-image_2927544.jpg",
        alt: "Pool table",
        title: "Product Landing Webpage",
        description: "A product landing webpage on pool tables. It is made using both flex and grid layouts.",
    },
];

const javaScriptArr = [
    {
        href: "https://palindrome-checker-eli.netlify.app/",
        src: "https://uselessetymology.com/wp-content/uploads/2019/10/palindrome-useless-etymology-12.png?w=1200",
        alt: "Palindrome Checker",
        title: "Palindrome Checker Website",
        description: "A Palindrome Checker app made using HTML, CSS, and JavaScript",    
    },
    {
        href: "https://roman-numeral-converter-eli.netlify.app/",
        src: "https://c.tadst.com/gfx/1200x630/roman-numerals-table.png?1",
        alt: "Roman Numeral",
        title: "Roman Numeral Converter Website",
        description: "A Roman Numeral Converter Website made using HTML, CSS, and JavaScript",
    },
    {
        href: "https://phone-number-validator-eli.netlify.app/",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolfB7M3g9WbO71H7bwqhMz6JkTVwGTAwF97sE33YJ-OoI5Jmzm2Jdpk9KqoLBOYpaQPI&usqp=CAU",
        alt: "Phone Number",
        title: "US Phone number Validator Website",
        description: "A phone number validator website that checks if a given phone number is a US phone number. This is made using HTML, CSS, and JavaScript",
    },
    {
        href: "https://cash-register-eli.netlify.app/",
        src: "https://i.pinimg.com/474x/86/22/69/862269c9e6f43b4f1b3067a78188f4a4.jpg",
        alt: "Cash register",
        title: "Cash register website",
        description: "A cash register website made using HTML, CSS, and JavaScript",
    },
    {
        href: "https://pokemon-searcher-app-eli.netlify.app/",
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/81/af/1181af23-3768-f567-9ec8-c703ab212034/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
        alt: "Pokemon Wallpaper",
        title: "Pokemon searcher Website",
        description: "A pokemon searcher website that fetches information from freeCodeCamp's pokemon activity API. It is made using HTML, CSS, and JavaScript",
    },
    {
        href: "https://ticketing-website-eli.netlify.app/",
        src: "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/threepeopleworking.png",
        alt: "Ticketing Website",
        title: "Ticketing Website",
        description: "A ticketing website that displayed tickets based on their status (backlog, in progress, completed). It is made using HTML, CSS, and JavaScript",
    },
];

const reactArr = [
    {
        href: "https://random-quote-generator-eli.netlify.app/",
        src: "https://www.proven.us/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9wa6q93ebjja%2F1mfHRH70dRUEHqzKYXnXYf%2Fc7b446dc1cd2cc1b1eb54ecdbe9eaa71%2FQuotation_Marks_Featured.jpg&w=3840&q=100",
        alt: "Random Quote Generator",
        title: "Random Quote Generator",
        description: "A Random Quote Generator website made using ReactJS. It utilizes an API for the quotes shown in the website",    
    },
    {
        href: "https://markdown-previewer-eli.netlify.app/",
        src: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/12/reasons-to-use-markdown-documentation-and-notetaking.jpg",
        alt: "Mark Down Previewer",
        title: "Mark Down Previewer",
        description: "A Mark Down Previewer website made using ReactJS",    
    },
    {
        href: "https://drum-machine-eli.netlify.app/",
        src: "https://img.freepik.com/free-vector/hand-drawn-drum-illustration_23-2150946304.jpg?semt=ais_hybrid&w=740",
        alt: "Drum Website",
        title: "Drum Website",
        description: "A digital Drum Website made using ReactJS",    
    },
    {
        href: "https://calculator-eli.netlify.app/",
        src: "https://media.istockphoto.com/id/1392292723/vector/vector-doodle-illustration-school-calculator-isolated-on-white.jpg?s=612x612&w=0&k=20&c=2dqceaXd0QxfWLY22JSETfdq3GfIntJPSMW14FVmLdg=",
        alt: "Calculator Website",
        title: "Calculator Website",
        description: "A Calculator Website made using ReactJS",    
    },
    {
        href: "https://study-timer-eli.netlify.app/",
        src: "https://play-lh.googleusercontent.com/CFm-zUkpWYoBi6foXFmHSn4WsfhIYzzMVxzybDLwyCfBK_jBK8SOeL-jCtNIKwZ_Kw=w526-h296-rw",
        alt: "Study Session Website",
        title: "Study Session Website",
        description: "A study session website where the user can set the amount of rest and study time that they want. The study and rest sessions cycle until the user decides to reset or pause the timer.",    
    },
];

const displayProjects = (array) => {
    projectTileDescriptionContainer.innerHTML = array.map(({href, src, alt, title, description}) => `
        <div class="project-row" id="project-tile-description-container">
            <div class="project-tile">
                <a href="${href}" target="_blank">
                    <img src="${src}" alt="${alt}">
                </a>
            </div>
        
            <div class="project-description">
                <h3 class="project-title">${title}</h3>
                <p class="project-paragraph">${description}</p>
            </div>
        </div>
        `
    ).join("");
};

displayProjects(htmlCssArr);
htmlCssBtn.addEventListener("click", () => displayProjects(htmlCssArr));
javaScriptBtn.addEventListener("click", () => displayProjects(javaScriptArr));
reactBtn.addEventListener("click", () => displayProjects(reactArr));