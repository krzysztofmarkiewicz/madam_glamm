document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
    let galleryView = document.getElementById("galleryView")
    let tilesView = document.getElementById("tilesView")
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
            tilesContainer.removeChild(tilesContainer.firstChild)
        }
    } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length - 1; i++) {
            let tileItem = document.createElement("div");
            tileItem.classList.add("tileItem");
            tileItem.style.background = "url(" + imgObject[i] + ")";
            tileItem.style.backgroundSize = "contain";
            tilesContainer.appendChild(tileItem);
        }
    };
}

let imgObject = [
    "https://madamglamm.pl/img/works/001.jpg",
    "https://madamglamm.pl/img/works/002.jpg",
    "https://madamglamm.pl/img/works/004.jpg",
    "https://madamglamm.pl/img/works/005.jpg",
    "https://madamglamm.pl/img/works/006.jpg",
    "https://madamglamm.pl/img/works/007.jpg",
    "https://madamglamm.pl/img/works/008.jpg",
    "https://madamglamm.pl/img/works/009.jpg",
    "https://madamglamm.pl/img/works/010.jpg",
    "https://madamglamm.pl/img/works/011.jpg",
    "https://madamglamm.pl/img/works/012.jpg",
    "https://madamglamm.pl/img/works/013.jpg",
    "https://madamglamm.pl/img/works/014.jpg",
    "https://madamglamm.pl/img/works/015.jpg",
    "https://madamglamm.pl/img/works/016.jpg",
    "https://madamglamm.pl/img/works/017.jpg",
    "https://madamglamm.pl/img/works/018.jpg",
    "https://madamglamm.pl/img/works/019.jpg",
    "https://madamglamm.pl/img/works/020.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
    mainView.style.backgroundSize = "cover";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
    leftView.style.backgroundSize = "cover";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    rightView.style.backgroundSize = "cover";

    let linkTag = document.getElementById("linkTag")
    linkTag.href = imgObject[mainImg];

};

function scrollRight() {

    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length - 1)) {
        nextImg = 0;
    } else {
        nextImg++;
    };
    loadGallery();
};

function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;

    if (prevImg === 0) {
        prevImg = imgObject.length - 1;
    } else {
        prevImg--;
    };
    loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        scrollLeft();
    } else if (e.keyCode === 39) {
        scrollRight();
    }
});

loadGallery();