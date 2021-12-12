function addNumber() {
    let productDom = document.querySelector(".product-count");
    let productCount = parseInt(productDom.value);
    productCount = productCount + 1;
    productDom.value = productCount;
}

function subNumber() {
    let productDom = document.querySelector(".product-count");
    let productCount = parseInt(productDom.value);
    if (productCount > 0) {
        productCount = productCount - 1;
    }
    else {
        productCount = productCount;
    }
    productDom.value = productCount;
}

function productSlider() {
    productSlider = new Glide("#product-slider", {
        type: "carousel",
        perView: 4,
        breakpoints: {
            1200: {
                perView: 3
            },
            992: {
                perView: 3
            },
            768: {
                perView: 2
            },
            576: {
                perView: 2
            }
        }
    });
    productSlider.mount();
}
productSlider();