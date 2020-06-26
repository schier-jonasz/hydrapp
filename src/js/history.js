import '../scss/history.scss';

for (let data in localStorage) {
    console.log(localStorage[data], typeof(localStorage[data]));
}

const listUl = document.querySelector('.list')

// console.log(localStorage['24.06.2020']);

const regEx = new RegExp(`[0-3][0-9].[0-1][0-9].[0-9]{4}`);
for (let data in localStorage) {
    const correctData = regEx.test(`${data}`);
    if (correctData) {
        let numberOfGlass = localStorage[data];
        const listLi = document.createElement('li');
        
        listLi.classList.add('list__item');
        listLi.textContent = `${data} that day you drank ${numberOfGlass} glasses of water`;
        listUl.appendChild(listLi);
    }
}
