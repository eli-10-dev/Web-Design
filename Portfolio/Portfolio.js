// Containers
const projectTileDescriptionContainer = document.getElementById("projects");

// Buttons
const htmlCssBtn = document.getElementById("html-css-button");
const javaScriptBtn = document.getElementById("javascript-button");

const htmlCssArr = [
    {
        href: "//kairukpop.netlify.app/",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1FFT6z0mUK65bmexX-OH2NlIJ1RKG809nQ&s",
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
        href: "https://codepen.io/eli-10-dev/pen/gbOeEjQ",
        src: "https://uselessetymology.com/wp-content/uploads/2019/10/palindrome-useless-etymology-12.png?w=1200",
        alt: "Palindrome Checker",
        title: "Palindrome Checker Website",
        description: "A Palindrome Checker app made using HTML, CSS, and JavaScript",    
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/ogNqVmq",
        src: "https://c.tadst.com/gfx/1200x630/roman-numerals-table.png?1",
        alt: "Roman Numeral",
        title: "Roman Numeral Converter Website",
        description: "A Roman Numeral Converter Website made using HTML, CSS, and JavaScript",
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/YPzagMj",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolfB7M3g9WbO71H7bwqhMz6JkTVwGTAwF97sE33YJ-OoI5Jmzm2Jdpk9KqoLBOYpaQPI&usqp=CAU",
        alt: "Phone Number",
        title: "US Phone number Validator Website",
        description: "A phone number validator website that checks if a given phone number is a US phone number. This is made using HTML, CSS, and Javascript",
    },
    {
        href: "https://codepen.io/eli-10-dev/pen/jEOzJjb",
        src: "https://i.pinimg.com/474x/86/22/69/862269c9e6f43b4f1b3067a78188f4a4.jpg",
        alt: "Cash register",
        title: "Cash register website",
        description: "A cash register website made using HTML, CSS, and Javascript",
    },
    {
        href: "#",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSoeqTG9t5Z9rUOXiGgc_UlY0O1MYMl7RKg&s",
        alt: "Pokemon Wallpaper",
        title: "Pokemon searcher Website",
        description: "A pokemon searcher website that fetches information from freeCodeCamp's pokemon activity API. It is made using HTML, CSS, and Javascript",
    },
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