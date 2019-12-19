let imgs = Array.from(document.querySelectorAll('.img-item img'));

let boxContainer = document.querySelector('.box-container');

let close = document.getElementById('close');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let currentImgIndex = 0;

for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click", openBox);

}

function openBox(e) {

    let imgSrc = e.target.src;
    boxContainer.style.transform = "scale(1,1)";
    boxContainer.firstElementChild.style.transform = "scale(1,1)";
    boxContainer.style.display = "flex";

    currentImgIndex = imgs.indexOf(e.target);

    boxContainer.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
}


close.addEventListener("click", hideBox);

function hideBox() {
    boxContainer.firstElementChild.style.transform = "scale(0,0)";
    boxContainer.style.transition = "transform .5s";

    boxContainer.style.transform = "scale(0,0)";


}

next.addEventListener("click", goNext);

function goNext() {
    currentImgIndex++;

    if (currentImgIndex == imgs.length) {
        currentImgIndex = 0;
    }

    boxContainer.firstElementChild.style.backgroundImage = "url(" + imgs[currentImgIndex].src + ")";

}


prev.addEventListener("click", goPrv);

function goPrv() {
    currentImgIndex--;

    if (currentImgIndex == 0) {
        currentImgIndex = imgs.length - 1;
    }

    boxContainer.firstElementChild.style.backgroundImage = "url(" + imgs[currentImgIndex].src + ")";

}



document.addEventListener("keydown", function(e) {

    if (e.keyCode == 39) {
        goNext();
    } else if (e.keyCode == 37) {
        goPrv()
    } else if (e.keyCode == 27 || e.keyCode == 13) {
        hideBox()
    }

})