var req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/lambada10/lambada10.github.io/master/shortcuts.json', false);
req.send(null);
const shortcuts = JSON.parse(req.response)

const content = document.querySelector('#content');

shortcuts.forEach((elem) => {
        content.innerHTML += `<a href="${elem.link}">
                                  <img src="${elem.image}" width="100" alt="${elem.name}">
                              </a>`;
});