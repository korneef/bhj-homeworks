let tabNavigationElements = Array.from(document.querySelectorAll('.tab'));

for (let i = 0; i < tabNavigationElements.length; i++) {
    tabNavigationElements[i].addEventListener('click', eventToClick);
}

function eventToClick () {
    if (!this.className.includes('tab_active')) {
        let oldActiveTabItem = tabNavigationElements.findIndex((item) => item.className.includes('tab_active'));
        tabNavigationElements[oldActiveTabItem].className = 'tab';
        this.className = 'tab tab_active';

        document.querySelectorAll('.tab__content')[oldActiveTabItem].className = 'tab__content';
        document.querySelectorAll('.tab__content')[tabNavigationElements.indexOf(this)].className = 'tab__content tab__content_active';
    };
}