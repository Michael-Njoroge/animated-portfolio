// Define DOM elements
const heroImage = document.querySelector("#hero_animation_img");

const tl = document.querySelector("#grid_tl");
// const tr = document.querySelector("#grid_tr");
// const bl = document.querySelector("#grid_bl");
// const br = document.querySelector("#grid_br");

const tlBtn = document.querySelector("#grid_tl_btn");
// const trBtn = document.querySelector("#grid_tr_btn");
// const blBtn = document.querySelector("#grid_bl_btn");
// const brBtn = document.querySelector("#grid_br_btn");

const tlContent = document.querySelector("#grid_tl_content");
// const trContent = document.querySelector("#grid_tr_content");
// const blContent = document.querySelector("#grid_bl_content");
// const brContent = document.querySelector("#grid_br_content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(-100vw) translateY(100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

//Define which corner is open
let activeCorner = "";

//Add an event listener to the window object to listen for the resize
window.addEventListener("resize",handleWindowResize);

//Function handling the styling when resizing the window
function handleWindowResize(){
    switch (activeCorner){
        case "top-left":
            if(window.innerWidth <= 1100){
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.transform = "translateX(0) translateY(0)";
                tlContent.style.width = "100vw";
                tlContent.style.height = "100vh";
                tlContent.style.top = "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems = "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zIndex = "300";
                // trBtn.style.zIndex = "100";
                // blBtn.style.zIndex = "100";
                // brBtn.style.zIndex = "100";
            }else{
                tlActive = "translateX(5vw) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
            break;
        case "top-right":
            break;
        case "bottom-left":
            break;
        case "bottom-right":
            break;
                
    }
}

//Store the last reverse animation,ready to be played
let lastReversedAnimation = "";

//Play animation 

function playAnimation(animation, reverseAnimation){
    //Remove all animation from heroImage
    heroImage.className = "";

    if(lastReversedAnimation !== ""){
        //Clicked something therefore reverse animation
        heroImage.classList.add(lastReversedAnimation);
        setTimeout(function(){
            heroImage.classList.remove(lastReversedAnimation);
            heroImage.classList.add(animation);
            lastReversedAnimation = reverseAnimation;
        },200);
    }else{
       heroImage.classList.add(animation);
       lastReversedAnimation = reverseAnimation; 
    }
}

// function playCloseAnimation(animation, reverseAnimation){
    
// }

//onclick corner button function
tlBtn.onclick = function(){
    if(activeCorner === "top-left"){
        // playCloseAnimation("reverse-animate-top-left");
    }else{
        // trBtn.innerHTML === "Experience";
        // blBtn.innerHTML === "Projects";
        // tlBtn.innerHTML === "Contact";
        //Setting the active corner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";

        // handleWindowResize();
        playAnimation("animate-top-left","reverse-animate-top-left");

        //Change background colors
        // trBtn.style.background = bgColor;
        // brBtn.style.background = bgColor;
        // blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change text clors
        // trBtn.style.color = textColor;
        // brBtn.style.color = textColor;
        // blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        //Change positions of corner content
        // trContent.style.transform = trHidden;
        // brContent.style.transform = brHidden;
        // blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

// trBtn.onclick = function(){
//     if(activeCorner === "top-right"){
//         playCloseAnimation("reverse-animate-top-right");
//     }else{
//         tlBtn.innerHTML === "About";
//         blBtn.innerHTML === "Projects";
//         tlBtn.innerHTML === "Contact";
//         //Setting the active corner
//         activeCorner = "top-right";
//         trBtn.innerHTML = "&uarr;<br/>Experience";

//         handleWindowResize();
//         playAnimation("animate-top-right","reverse-animate-top-right");

//         //Change background colors
//         trBtn.style.background = bgColorAlt;
//         brBtn.style.background = bgColor;
//         blBtn.style.background = bgColor;
//         tlBtn.style.background = bgColor;

//         // Change text clors
//         trBtn.style.color = textColorAlt;
//         brBtn.style.color = textColor;
//         blBtn.style.color = textColor;
//         tlBtn.style.color = textColor;

//         //Change positions of corner content
//         trBtn.style.Transform = tlActive;
//         brBtn.style.Transform = brHidden;
//         blBtn.style.Transform = blHidden;
//         tlBtn.style.Transform = tlHidden;
//     }
// };

// blBtn.onclick = function(){
//     if(activeCorner === "bottom-left"){
//         playCloseAnimation("reverse-animate-bottom-left");
//     }else{
//         tlBtn.innerHTML === "About";
//         trBtn.innerHTML === "Experince";
//         tlBtn.innerHTML === "Contact";

//         //Setting the active corner
//         activeCorner = "bottom-left";
//         trBtn.innerHTML = "Projects<br/>&uarr";

//         handleWindowResize();
//         playAnimation("animate-bottom-left","reverse-animate-bottom-left");

//         //Change background colors
//         // trBtn.style.background = bgColor;
//         // brBtn.style.background = bgColor;
//         // blBtn.style.background = bgColorAlt;
//         tlBtn.style.background = bgColor;

//         // Change text clors
//         // trBtn.style.color = textColor;
//         // brBtn.style.color = textColor;
//         // blBtn.style.color = textColorAlt;
//         tlBtn.style.color = textColor;

//         //Change positions of corner content
//         // trBtn.style.Transform = tlHidden;
//         // brBtn.style.Transform = brHidden;
//         // blBtn.style.Transform = blActive;
//         tlBtn.style.Transform = tlHidden;
//     }
// };

// brBtn.onclick = function(){
//     if(activeCorner === "bottom-right"){
//         // playCloseAnimation("reverse-animate-bottom-right");
//     }else{
//         // tlBtn.innerHTML === "About";
//         // trBtn.innerHTML === "Experince";
//         // blBtn.innerHTML === "Projects";

//         //Setting the active corner
//         activeCorner = "bottom-right";
//         trBtn.innerHTML = "Contact<br/>&uarr";

//         handleWindowResize();
//         playAnimation("animate-bottom-right","reverse-animate-bottom-right");

//         //Change background colors
//         // trBtn.style.background = bgColor;
//         // brBtn.style.background = bgColorAlt;
//         // blBtn.style.background = bgColor;
//         tlBtn.style.background = bgColor;

//         // Change text clors
//         // trBtn.style.color = textColor;
//         // brBtn.style.color = textColorAlt;
//         // blBtn.style.color = textColor;
//         tlBtn.style.color = textColor;

//         //Change positions of corner content
//         // trBtn.style.Transform = tlHidden;
//         // brBtn.style.Transform = brActive;
//         // blBtn.style.Transform = blHidden;
//         tlBtn.style.Transform = tlHidden;
//     }
// };


