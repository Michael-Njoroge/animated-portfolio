//Defining DOM elements
const toggleButton = document.querySelector('#toggle-button');
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode"

//Load preferred color mode from local storage

function loadColorMode(){
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updateToggleButton();
}

loadColorMode();

//Toggle the color mode
toggleButton.addEventListener("click",() =>{
    saveColorMode()
});

//Save preffered color mode to local storage

function saveColorMode(){
    //check if root element has a class of "darkmode, if yes, then the curren mode is attached to light, and viceversa"
    const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    root.classList.remove("light-mode","dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

function updateToggleButton(){
    if(root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)";
    }else{
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}