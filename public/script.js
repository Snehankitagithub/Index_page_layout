let atAbout=true;
var currentPosition=0;
function movePage(currentPos,newPos){

  if(currentPos===0){
    currentPos=newPos;
    let temp=(-1*newPos)+"vw";
    document.querySelector(".main-wrapper").style.transform=`translateX(${temp})`;
  }
}

document.querySelector("#nav-about").addEventListener("click",()=>{
  movePage(currentPosition,0);
  currentPosition=0;
  atAbout=true;
});
document.querySelector("#nav-work").addEventListener("click",()=>{
  movePage(currentPosition,50);
  atAbout=false;
});
document.querySelector("#nav-stories").addEventListener("click",()=>{
  movePage(currentPosition,100);
});

function sideDivView(clickBtn,detailsDiv){
  document.querySelector(`#${clickBtn}`).addEventListener("mouseover",()=>{
    if(atAbout){
      document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
      document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
    }
    else{
      document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock")
      document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone")
    }
  });
  document.querySelector(`#${clickBtn}`).addEventListener("mouseout",()=>{
    if(atAbout){
      if(document.querySelector(`#${detailsDiv}-left`).classList.contains("Clicked")){
       document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
       document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
      }
      else{
       document.querySelector(`#${detailsDiv}-left`).classList.add("displayNone");
       document.querySelector(`#${detailsDiv}-left`).classList.remove("displayBlock");
      }
    }
    else{
      if(document.querySelector(`#${detailsDiv}-right`).classList.contains("Clicked")){
       document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock");
       document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone");
      }
      else{
       document.querySelector(`#${detailsDiv}-right`).classList.add("displayNone");
       document.querySelector(`#${detailsDiv}-right`).classList.remove("displayBlock");
      }
    }
  });
  document.querySelector(`#${clickBtn}`).addEventListener("click",(e)=>{
    e.stopPropagation();
    if(atAbout){
      document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
      document.querySelector(`#${detailsDiv}-left`).classList.add("Clicked");
      document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
    }
    else{
      document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock");
      document.querySelector(`#${detailsDiv}-right`).classList.add("Clicked");
      document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone");
    }
  });
  document.querySelector(`.about`).addEventListener("click", ()=>{
    hideLeftRightContainers();
  });
  document.querySelector(`menu`).addEventListener("click", ()=>{
    hideLeftRightContainers();
  });
  function hideLeftRightContainers(){
    document.querySelector(`#${detailsDiv}-left`).classList.add("displayNone");
    document.querySelector(`#${detailsDiv}-left`).classList.remove("displayBlock");
    document.querySelector(`#${detailsDiv}-left`).classList.remove("Clicked");

    document.querySelector(`#${detailsDiv}-right`).classList.add("displayNone");
    document.querySelector(`#${detailsDiv}-right`).classList.remove("displayBlock");
    document.querySelector(`#${detailsDiv}-right`).classList.remove("Clicked");
  }
}

sideDivView(`our-belief`,`our-belief-div`);
sideDivView(`us`,`us-div`);
sideDivView(`our-values`,`our-values-div`);
sideDivView(`do-we-do`,`do-we-do-div`);
sideDivView(`products`,`products-div`);
sideDivView(`solutions`,`solutions-div`);
sideDivView(`services`,`services-div`);
sideDivView(`projects`,`projects-div`);


document.querySelector("#toggleTheme").addEventListener("click",()=>{
  console.log(document.querySelector("#toggleTheme").checked);
  document.body.classList.toggle("light");
  if(document.body.classList.contains("light")){
    document.querySelector(".logo").src="../assets/logo/shunya/shunya logo numbers & tag line ver O-5 clean 763 X 233 dark.svg";
  }
  else{
    document.querySelector(".logo").src="../assets/logo/shunya/shunya-logo-ver-O-5-clean-light.svg";
  }
});


function accordion(){

document.querySelectorAll(".accordion-heading").forEach((item)=>
item.addEventListener("click",()=>{
  if(item.parentElement.lastElementChild.style.height)
  {
    item.parentElement.lastElementChild.style.height=null;
    if(item.parentElement.parentElement.parentElement.classList.contains("accordion-body"))
    {
      // console.log(item.parentElement.parentElement.parentElement);
      // console.log(item.nextElementSibling.scrollHeight);
      item.parentElement.parentElement.parentElement.style.height=(item.parentElement.parentElement.parentElement.scrollHeight-item.nextElementSibling.scrollHeight)+"px";
      // item.parentElement.parentElement.parentElement.style.height=;
      // console.log(item.parentElement.parentElement.parentElement);
      
    }
  }
  else{
    if(item.parentElement.parentElement.parentElement.classList.contains("accordion-body"))
    {
      item.parentElement.parentElement.parentElement.style.height=(fun(item.parentElement.parentElement.childNodes)+item.parentElement.lastElementChild.scrollHeight+25)+"px";
      function fun(itemNodes){
        let sum=0;
        for(i=0;i<itemNodes.length;i++){
          if(itemNodes[i].scrollHeight>0){
            sum+=itemNodes[i].scrollHeight;
          }
        }
        return sum;
      };
      item.parentElement.lastElementChild.style.height=item.parentElement.lastElementChild.scrollHeight+"px";
    }
    else{
      item.parentElement.lastElementChild.style.height=item.parentElement.lastElementChild.scrollHeight+"px";
    }
  }
})
);
}
accordion();

document.querySelectorAll(".stories-inner-tab>*").forEach((item)=>{
  item.addEventListener("click",()=>{
    document.querySelectorAll(".stories-inner-tab-div-content>*").forEach(item=>{
      if(item.classList.contains("stories-inner-tab-div-content-visibility")){
        item.classList.remove("stories-inner-tab-div-content-visibility");
      }
    });
    document.querySelector(`.${item.textContent.toLowerCase()}`).classList.toggle("stories-inner-tab-div-content-visibility");
  });
});



const hamburger = document.querySelector('.menu-nav  .hamburger');
const mobile_menu = document.querySelector('.menu-nav  ul');
const menu_item = document.querySelectorAll('.menu-nav  ul li a');
const header = document.querySelector('.menu-nav.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});