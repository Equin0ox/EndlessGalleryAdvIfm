document.addEventListener('DOMContentLoaded', () => {
    addPic();
});

window.addEventListener('resize', () => {
    const container = document.getElementById('picContainer');

    container.innerHTML = ''
    addPic();

});

async function addPic() {
    const container = document.getElementById('picContainer');

    while (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
        const div = document.createElement('div');
        div.className = "picc"
        container.appendChild(div);
        div.innerHTML += (`<img src = "https://picsum.photos/` + window.innerWidth + `?random=` + (container.querySelectorAll(".picc").length + 1) + `">`);
    }
}

window.onscroll = function () {

};

