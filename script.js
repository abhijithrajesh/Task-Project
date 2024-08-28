// Accessing and storing elements
var allFilters = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery div.card');

// Add a click event to all the buttons
for(var i = 0; i < allFilters.length; i++){
    allFilters[i].addEventListener('click', myFunction);
}
//Define the function
function myFunction(){
    // Access the button which has active class
    //and remove the active class
    var currentTab = document.querySelector('section.btns .active');
    currentTab.classList.remove('active');
    // add active class to the button which is clicked
    this.classList.add('active');

    //get the value of the data-filter attribute of the clicked button
    var filter = this.getAttribute('data-filter');
    //if any of the button is clicked accept the 'all' button then,
    //show the contents of the clicked button and
    //hide the contents of all other buttons
    if(filter != 'all'){
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');
            var currentItem = allCards[i].getAttribute('data-item');
            if(currentItem == filter){
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }
    //otherwise if the 'all' button is clicked,
    //then show the contents of all the buttons
    else{
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}

 // Access the modal
 var modal = document.getElementById("imageModal");

 // Access the image in the modal
 var modalImg = document.getElementById("modalImage");
 var captionText = document.getElementById("caption");
 
 // Loop through all images and add click event
 allCards.forEach(function(card) {
     card.addEventListener("click", function() {
         var img = card.querySelector("img");
         modal.style.display = "block";
         modalImg.src = img.src;
         captionText.innerHTML = card.querySelector("h2").innerText;
     });
 });
 
 // Close the modal when the close button is clicked
 var span = document.getElementsByClassName("close")[0];
 span.onclick = function() { 
     modal.style.display = "none";
 }
 
 // Close the modal when clicking outside the image
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }