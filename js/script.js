

console.log('Gaga'); 

// Toggle Menu
function menuToggle(){
    const headerToggle = document.querySelector('.header_toggle');
    const headerMenu = document.querySelector('.header_menu');
    const header =document.querySelector('.header');
    headerToggle.classList.toggle('active');
    headerMenu.classList.toggle('active');
    header.classList.toggle('active');
} 




// Features item active
var nav_ul_li = document.querySelectorAll('.navUlLi');

for(var i = 0; i < nav_ul_li.length; i++){
    nav_ul_li[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("featureActive");
        current[0].className = current[0].className.replace(" featureActive", "");
        this.className += " featureActive";
    });
} 

// Feature content change
var featureOne = document.querySelector("#bookmarking");
var featureTwo = document.querySelector("#searching");
var featureThree = document.querySelector("#sharing");

var contentItem1 = document.querySelector("#item1");
var contentItem2 = document.querySelector("#item2");
var contentItem3 = document.querySelector("#item3"); 

featureOne.addEventListener("click", function(){
  contentItem1.classList.add("featureShow");
  contentItem1.classList.remove("featureHide");
  contentItem2.classList.add("featureHide");
  contentItem2.classList.remove("featureShow");
  contentItem3.classList.add("featureHide");
  contentItem3.classList.remove("featureShow");
});

featureTwo.addEventListener("click", function(){
  contentItem1.classList.add("featureHide");
  contentItem1.classList.remove("featureShow");
  contentItem2.classList.add("featureShow");
  contentItem2.classList.remove("featureHide");
  contentItem3.classList.add("featureHide");
  contentItem3.classList.remove("featureShow");
});

featureThree.addEventListener("click", function(){
  contentItem1.classList.add("featureHide");
  contentItem1.classList.remove("featureShow");
  contentItem2.classList.add("featureHide");
  contentItem2.classList.remove("featureShow");
  contentItem3.classList.add("featureShow");
  contentItem3.classList.remove("featureHide");
});


/* show and hide a paragraph */
// Q & A N°1
function descriptionShowA () {
    var btn1 = document.querySelector(".clickShow1");
    var text1 = document.getElementById("answerShow1");
    text1.classList.toggle('description');
    text1.classList.toggle('answer');
    btn1.classList.toggle('rotation');
}

// Q & A N°2
function descriptionShowB () {
    var btn2 = document.querySelector(".clickShow2");
    var text2 = document.getElementById("answerShow2");
    text2.classList.toggle('description');
    text2.classList.toggle('answer');
    btn2.classList.toggle('rotation');
}

// Q & A N°3
function descriptionShowC () {
    var btn3 = document.querySelector(".clickShow3");
    var text3 = document.getElementById("answerShow3");
    text3.classList.toggle('description');
    text3.classList.toggle('answer');
    btn3.classList.toggle('rotation'); 
}

// Q & A N°4
function descriptionShowD () {
    var btn4 = document.querySelector(".clickShow4");
    var text4 = document.getElementById("answerShow4");
    text4.classList.toggle('description');
    text4.classList.toggle('answer');
    btn4.classList.toggle('rotation');
}






