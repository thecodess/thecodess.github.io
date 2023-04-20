const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".feeds-page");

const goToLoginPage=()=>{
mainPage.style.display ='none';
newsFeedPage.style.display ="block";
};

middleContent.addEventListener('click', e =>{
if(e.target.classList[1] === 'main-btn'){
goToLoginPage();
}
});

btnTop.addEventListener('click', () =>{
mainPage.style.display ="none";
newsFeedPage.style.display ="block";

});