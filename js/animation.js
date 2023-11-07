// Define DOM elements
const heroImage = document.querySelector("#hero_animation_img");

const tl = document.querySelector("#grid_tl");
const tr = document.querySelector("#grid_tr");
const bl = document.querySelector("#grid_bl");
const br = document.querySelector("#grid_br");

const tlBtn = document.querySelector("#grid_tl_btn");
const trBtn = document.querySelector("#grid_tr_btn");
const blBtn = document.querySelector("#grid_bl_btn");
const brBtn = document.querySelector("#grid_br_btn");

const tlContent = document.querySelector("#grid_tl_Content");
const trContent = document.querySelector("#grid_tr_Content");
const blContent = document.querySelector("#grid_bl_Content");
const brContent = document.querySelector("#grid_br_Content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

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
