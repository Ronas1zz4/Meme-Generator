const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn");

const memeImage=document.querySelector(".meme-generator img");
const memeTitle=document.querySelector(".meme-generator .meme-title");
const memeAuthor=document.querySelector(".meme-generator .meme-author");

/*yha chai doc.queryselector ley chai hamro
 memegenertor ma vako class generate meme button lai 
 generateMemeBtn variable ma assign gardinxa ani aru haru like img title author lai pani specific given variable ma assign gardinxa
*/

const updateDetails =(url, title, author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
};

/*mathi ko lines haru ma chai setattribute use garera 
memeImage ma vako src ko value set garinxa ani src ko value chai url ma set garya hunxa ani tyo url chaii image ma change hunxa

innerHTML use garera chai html lai modify garna milxa ani title chai memetitle ma assign hunxa ani author ko pani same nai ho
*/

const generateMeme=() => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};
/* in the above lines fetch use garera chai tyo api bata data fetch gareko ani tespaxi 
.then((response) => response.json()) yo line le chai fetch vako data lai then method use garera handle garxa ani data json body ko way ma parse vako ho
 .then((data) => {
        updateDetails(data.url, data.title, data.author);
yo line ley chaii then method use garera data vanera rakhiyeko json ko data parse garxa
ani update details vanney lai call garxa ani tyo function ley chai data vanney bata url title author properties haru lera auxa*/


generateMemeBtn.addEventListener("click", generateMeme);
/*generateMemeBtn ko class ma event listener rakhiyeko ho ani tya bata tellai click garda chai generatMeme vanney call hunxa jolley chai mathi ko process followw garxa
 */
generateMeme();



