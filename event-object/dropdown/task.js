let dropdownList = Array.from(document.querySelectorAll('.dropdown__value'));
let dropdownElements = Array.from(document.querySelectorAll('.dropdown__item'))

for (let i = 0; i < dropdownList.length; i++) {
    dropdownList[i].addEventListener('click', dropdownListOpener)
}

for (let i = 0; i < dropdownElements.length; i++) {
    dropdownElements[i].addEventListener('click', dropdownValueRename)
    dropdownElements[i].firstElementChild.onclick = () => {return false};
}

function dropdownListOpener () {
    let ulClassName = this.parentElement.lastElementChild.className
    if (ulClassName.includes('dropdown__list_active')) {
        this.parentElement.lastElementChild.className = 'dropdown__list'
    } else {
        this.parentElement.lastElementChild.className = 'dropdown__list dropdown__list_active'
    }
}

function dropdownValueRename () {
    this.parentElement.parentElement.firstElementChild.textContent = this.firstElementChild.textContent;
    this.parentElement.parentElement.lastElementChild.className = 'dropdown__list'
}