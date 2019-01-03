
(function () {
    const authBtn = document.getElementById('authBtn'),
    frontSide = document.querySelector('.side--front'),
    backSide = document.querySelector('.side--back');

        authBtn.addEventListener('click', function() {
            frontSide.classList.toggle('rotate');
            backSide.classList.toggle('rotate');
        });
})();