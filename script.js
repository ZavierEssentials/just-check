// get page items
const readMore = document.querySelector('.readmore');
const dots = document.querySelector('.dots');
const moreText = document.querySelector('.more');
const projects = document.querySelector('.projects');
const toTop = document.querySelector('.back-to-top');


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

projects.addEventListener('click', (e) => {
    if (e.target.className === 'project') {
        // get link 
        const link = e.target.lastElementChild;

        link.click();
    } else if (e.target.parentElement.className === 'project') {
        const link = e.target.parentElement.lastElementChild;

        link.click();
    } else {

    }
})

toTop.addEventListener ( 'click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})