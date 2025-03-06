
const heading = document.getElementById('heading');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', function() {
    heading.classList.add('changed');
});
