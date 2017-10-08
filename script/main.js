(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
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

        theSubhead.classList.remove(appliedClass);
        theHeader.classList.remove(appliedClass);

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
        //this makes it so you cant move the background after (cant scroll the page once its open)
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
      }

	
	
	//Personal Notes:
	// To close the lightbox turn it back to display none since it is apperaing due to 'block', use event listener to listen when the X is clicked and use a function from there
	// To allow scrolling set it back to "visible" when the X is clicked
	// 
	
	
      function closeLightbox() {
        debugger;

        // reset all the lightbox content, close the lightbox (not nessarily in order)
      }
	
	
	



      // initialize the app
      // theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      // theHeader.classList.add('spring');
      //
      //document.querySelector('#spring').click();

      changeElements.call(document.querySelector('#spring'));
})();
