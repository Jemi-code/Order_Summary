const wrapper = document.querySelector(".nav-wrapper");
const items = document.querySelector(".nav-items");
const item = documnet.querySelector(".nav-item");
const bItem = document.querySelector(".nav-item-1");
const mobile = document.querySelector(".lib");
const mobile1 = document.querySelector(".lib1");
const mobile2 = document.querySelector(".lib2");
const mobile3 = document.querySelector(".lib3");
const bars = document.querySelector(".bars");
const bar = document.getElementById("bar");
const X = document.querySelector("#x");

let open = () => {
    mobile.classList.remove("nav-wrapper");
    mobile.classList.remove('nav-items');
    mobile.classList.remove('nav-item');
    mobile.classList.remove('nav-item-1');

    mobile.classList.add("mobile-wrapper");
    mobile.classList.add('mobile-items');
    mobile.classList.add('mobile-item');
    mobile.classList.add('mobile-item-1');
}

let close = () => {
    mobile.classList.remove('mobile-wrapper');
    mobile.classList.remove('mobile-items');
    mobile.classList.remove('mobile-item');
    mobile.classList.remove('mobile-item-1');

    mobile.classList.add('nav-wrapper');
    mobile.classList.add('nav-items');
    mobile.classList.add('nav-item');
    mobile.classList.add('nav-item-1');
}


bars.addEventListener("onclick", open, false);
bar.addEventListener("click", open, false);
X.addEventListener("click", close, false);
