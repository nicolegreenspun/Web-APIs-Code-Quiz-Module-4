// Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

 console.log(divTags);
 console.error(pTags);
 console.warn(imgEl);

// Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 55px; font-weight: bold; text-decoration:underline;");

 // Sets image source of the first image
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:100%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:red; font-size: 30px");
 }

 
