
(function () {
    const container = document.querySelector('.welcome__container'),
        authBtn = document.getElementById('authBtn'),
        frontSide = document.querySelector('.side--front'),
        backSide = document.querySelector('.side--back'),
        toMainPageBtn = document.getElementById('toMainPageBtn')

    container.onclick = function (e) {
        let target = e.target;

        if (target === authBtn || target === toMainPageBtn) {
            rotate();

            if (target === authBtn) {
                authBtn.style.display = 'none';
            } else if (target === toMainPageBtn) {
                authBtn.style.display = 'block';
            }
        }
    };

    const rotate = function () {
        frontSide.classList.toggle('rotate');
        backSide.classList.toggle('rotate');
    };

})();