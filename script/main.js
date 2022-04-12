for (i = 0; i < document.images.length; i++) {
    if (document.images[i].draggable === "") {
        // images that have "draggable" Attribute and its Value is Empty
        document.images[i].setAttribute("draggable", "false");
    } else {
        // Images Does not Have "draggable" Attribute
        document.images[i].setAttribute("draggable", "false");
    }
}

const showHide = (e) => {
    let myNav = document.querySelector(".sidenav");
    let myBlackEl = document.querySelector(".black_");
    myNav.classList.toggle("active");
    myBlackEl.classList.toggle("display");
    myBlackEl.classList.toggle("index");
};

document.querySelector(".humburger").addEventListener("click", showHide);
document.querySelector(".black_").addEventListener("click", showHide);
document.querySelector(".close").addEventListener("click", showHide);
