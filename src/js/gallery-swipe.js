const modal = document.getElementById("gallery-modal");
const backdrop = document.getElementById("gallery-backdrop");
const modalImg = document.getElementById('gallery-modal_image');
const images = document.querySelectorAll('.gallery__img');
const body = document.querySelector("body");

let currenImgIndex = null;

const hideModal = () => {
    body.classList.remove("no-scroll");
    backdrop.classList.add("visually-hidden");
}

const showModal = () => {
    body.classList.add("no-scroll");
    backdrop.classList.remove("visually-hidden");
}

images.forEach((img, index) => {
    img.onclick = ()=>openImageModal(index, img.src);
   
});


const setNextIndex = () => {
    currenImgIndex = currenImgIndex < images.length-1 ? currenImgIndex+1 : 0;
}
const setPreviousIndex = () => {
    currenImgIndex = currenImgIndex === 0 ? images.length - 1 : currenImgIndex - 1;
}

function openImageModal(index, src) {
    currenImgIndex = index;
  modalImg.src = src;
  showModal();
}

backdrop.addEventListener("click", hideModal)
modalImg.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    setNextIndex();
    showImageByIndex()

})

const showImageByIndex = () => {
    modalImg.src = images[currenImgIndex].src;
}

const onKeyPress = e => {
    switch (e.keyCode) {
        case 39:
            setNextIndex();
             showImageByIndex();
            break;
        case 37:
            setPreviousIndex();
             showImageByIndex();
            break;
        default:
            return;
    }

   
}



document.addEventListener("keydown", onKeyPress);
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            setPreviousIndex();
             showImageByIndex();
        } else {
            /* right swipe */
             setNextIndex();
             showImageByIndex();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            hideModal()
        } else { 
            /* down swipe */
            hideModal()
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};