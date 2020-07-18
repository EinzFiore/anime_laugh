// load audio
window.addEventListener('load', () => {
    const audio = document.querySelectorAll('.audio');
    const categories = document.querySelectorAll('.categories div');
    const character = document.querySelector('.character h1');
    let type = "";
    categories.forEach((char, index) => {
        char.addEventListener('click', function () {
            // audio[index].currentTime = 0;
            if (char.classList.contains('cool')) {
                type = "Kuudere";
            } else if (char.classList.contains('yandere')) {
                type = "Yandere";
            } else if (char.classList.contains('chuunibyou')) {
                type = "Chuunibyou";
            } else if (char.classList.contains('evil')) {
                type = "Evil";
            } else if (char.classList.contains('baka')) {
                type = "Baka";
            } else if (char.classList.contains('himedere')) {
                type = "Himedere";
            }
            character.style.animation = "jump 1s ease";
            character.innerHTML = type;

            audio[index].play();
        });
    });
});