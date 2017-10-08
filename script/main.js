//Things I tired adding but had no luck, thought i would share my thought process
// First the image slider, using the buttons would either add +1 or -1 to the "currentIndex" to change the image in the array but everything I tired would not work
// Second I tired to change the background color of the Div of the light box to match the season, I managed to do this with the text and arrows but "classList.add(this.id)" would work well when trying to add a CSS element like background color. I understand that the "this.id" correlates to a class in css and has its own color i just couldnt figure out how to access that to use it and change the background color (bckgrndLightboxColor.classList.addstyle.backgroundColor(this.id);) I know that the syntax is wrong i was just trying things this is just to show thought process

//Also in the instructions it said "empty the content from the light box’s image and paragraph tags" im not sure if this meant just make sure its not visiable or remove the information that is currently stored. Code Idea: lightboxDesc = null; or lightboxDesc = undefined  same for the image
//Or set current Index or Current Object back to default (0 or null), I would have done this but it already works without and I dont want to add incase you didnt want it, but if you did thats my code on how i would have excuted it (just unclear on what you wanted sorry, i shouldnt have waited last minute and emailed you)




(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
	  
	  bckgrndLightboxColor = document.querySelector('.lightbox-content-container'),
	  
      appliedClass;

      function changeElements() {
        // i want to load dynamic content here
        //debugger;
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        // remove all of the thumbnail images
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }
        // create an image element and add it to the page
        objectIndex.images.forEach(function(element, index){
          let newSubImg = document.createElement('img');

          // add a css class
          newSubImg.classList.add('thumb');
          // add an image source
          newSubImg.src = "images/" + objectIndex.images[index];


          //add an index number to the thumbnail for array refrence
          newSubImg.dataset.index = index;



          // add some event handling
          newSubImg.addEventListener('click', function() { popLightbox(index, objectIndex); }, false);



          // append it to the container
          subImages.appendChild(newSubImg);
        });

		  bckgrndLightboxColor.classList.remove(appliedClass);
        theSubhead.classList.remove(appliedClass);
        theHeader.classList.remove(appliedClass);
		  
		  
		  
		  //bckgrndLightboxColor.classList.addstyle.backgroundColor(this.id);
		  
		 
		  bckgrndLightboxColor.classList.add(this.id); //Changing the text in the lightbox
        theSubhead.classList.add(this.id);
        theHeader.classList.add(this.id);
		  
		  
		  

        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;

        console.log(this.id);
      }

      theImages.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeElements, false);
      });







      function popLightbox(currentIndex, currentObject) {
        //debugger;


        //this allows us to scroll back to the top when its clicked (unscrolls it)
        window.scrollTo(0,0);
        //this makes it so you cant move the background after (cant scroll the page once is open)
        document.body.style.overflow = "hidden";


        // turn on the lightbox
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';





        //populate all the content on the page
        let lightboxImg = lightbox.querySelector('img');
        let lightboxClose = lightbox.querySelector('.close-lightbox');
        let lightboxDesc = lightbox.querySelector('p');
		  


        lightboxImg.src = "images/" + currentObject.images[currentIndex];
        lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

        lightboxClose.addEventListener('click', closeLightbox, false);
		  
		  console.log(currentObject)
		  //console.log(currentIndex); //To check the value of the array (image number)
      }

	
	
	//Personal Notes:
	// To close the lightbox turn it back to display none since it is apperaing due to 'block', use event listener to listen when the X is clicked and use a function from there
	// To allow scrolling set it back to "visible" when the X is clicked
	
	
	
      function closeLightbox() {
        //debugger;
		  
		  let lightbox = document.querySelector('.lightbox');
		  
	  //lightboxDesc = null; or lightboxDesc = undefined  not sure if this is what you meant by empty? same for the image^ left commented out just incase
		  
		  
		  
		  //This will reset and make the lightbox display none (back normal as in hidden till activated again)
	   lightbox.style.display = 'none';
		  
		  //This re activates the scroll
	   document.body.style.overflow = "visible";

      }
	
	
	
	
	
	
	



      // initialize the app
      // theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      // theHeader.classList.add('spring');
      //
      //document.querySelector('#spring').click();

      changeElements.call(document.querySelector('#spring'));
})();
