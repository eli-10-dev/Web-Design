// Containers
const projectTileDescriptionContainer = document.getElementById("projects");

// Buttons
const htmlCssBtn = document.getElementById("html-css-button");
const javaScriptBtn = document.getElementById("javascript-button");

const htmlCssArr = [
    {
        href: "//kairukpop.netlify.app/",
        src: "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/291926969_429288872544744_8489221057371934983_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGyistP_0Ytf5VgCIBjteaa6kNxImSe5cfqQ3EiZJ7lxyLBgNRPRNi1UaXBVbifYj6gT4T9OhTe-nuG68ZdLsRj&_nc_ohc=ry6LXdmXpuMQ7kNvgFUzSEi&_nc_oc=Adkz5ju-AqXE2VyGuuDdBYFXvbh_Hkf0d1Kqoy3SkL75JjzD7BEYg-Z7wOEBh_Xk8wU&_nc_zt=23&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=Zr-8ch4Rh-q19so22HzemA&oh=00_AYH7Oh4cWnsTQ9qlb7O_lCPqiNm4cfWON-S9OVBElV7B5w&oe=67E558D5",
        alt: "Kairu Kpop Shop logo",
        title: "Kairu Kpop Shop",
        description: "E-commerce website for a Kpop Shop selling photocards, clothes, accessories, and other merch! It is made using bootstrap.",    
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/KwPYVBP",
        src: "https://www.platoforms.com/images/posts/2022/what%E2%80%99s-the-difference-between-survey-form-and-a-questionnaire.jpg",
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
]

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
        description: "A phone number validator website that checks if a given phone number is a US phone number. This is made using HTML, CSS, and Javascript",
    },
    {
        href: "https://cash-register-eli.netlify.app/",
        src: "https://i.pinimg.com/474x/86/22/69/862269c9e6f43b4f1b3067a78188f4a4.jpg",
        alt: "Cash register",
        title: "Cash register website",
        description: "A cash register website made using HTML, CSS, and Javascript",
    },
    {
        href: "https://pokemon-searcher-app-eli.netlify.app/",
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/81/af/1181af23-3768-f567-9ec8-c703ab212034/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
        alt: "Pokemon Wallpaper",
        title: "Pokemon searcher Website",
        description: "A pokemon searcher website that fetches information from freeCodeCamp's pokemon activity API. It is made using HTML, CSS, and Javascript",
    },
    {
        href: "ticketing-website-eli.netlify.app",
        src: "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/threepeopleworking.png",
        alt: "Ticketing Website",
        title: "Ticketing Website",
        description: "A ticketing website, essentially a to do list that...",
    }
]

const displayProjects = (array) => {
    projectTileDescriptionContainer.innerHTML = array.map((object) => `
        <div class="project-row" id="project-tile-description-container">
            <div class="project-tile">
                <a href="${object.href}" target="_blank">
                    <img src="${object.src}" alt="${object.alt}">
                </a>
            </div>
        
            <div class="project-description">
                <h3 class="project-title">${object.title}</h3>
                <p class="project-paragraph">${object.description}</p>
            </div>
        </div>
        `
    ).join("");
};

displayProjects(htmlCssArr);
htmlCssBtn.addEventListener("click", () => displayProjects(htmlCssArr));
javaScriptBtn.addEventListener("click", () => displayProjects(javaScriptArr));