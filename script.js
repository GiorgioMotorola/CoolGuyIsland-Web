const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');


toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
});

const reviewButton = document.getElementById('see-review');

reviewButton.addEventListener('click', () => {

    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
    } else {
        review.classList.add('d-none');
    }
});

