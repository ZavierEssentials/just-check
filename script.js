// get page items
const readMore = document.querySelector('.readmore');
const dots = document.querySelector('.dots');
const moreText = document.querySelector('.more');



readMore.addEventListener('click', () => {

    if(dots.style.display === 'none') {
        dots.style.display = 'inline-block'
        readMore.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = 'none'
        readMore.innerHTML = "Show less";
        moreText.style.display = "inline";
    }

})