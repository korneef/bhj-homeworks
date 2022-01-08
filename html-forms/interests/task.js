let checkboxElements = Array.from(document.querySelectorAll('input.interest__check'));

for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener('click', checkboxTarget);
}

function checkboxTarget() {
    let checkboxStatus = this.checked;
    let checkboxParentElement = this.closest('.interest');
    let checkboxElementsChild = checkboxParentElement.querySelectorAll('.interest__check');

    if (checkboxElementsChild.length > 1) {
        for (let i = 0; i < checkboxElementsChild.length; i++) {
            checkboxElementsChild[i].checked = checkboxStatus;
        };
    };
}