let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', tooltipActive);
}

function tooltipActive() {
    if (document.querySelector('.tooltip') != null) {
        document.querySelector('.tooltip').remove();
    }

    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = this.title;
    this.insertAdjacentElement('afterEnd', tooltip);
    tooltip.style.left = this.getBoundingClientRect().left + 'px';
    event.preventDefault();
    event.stopPropagation();

    window.onclick = () => {
        if (document.querySelector('.tooltip') != null) {
            document.querySelector('.tooltip').remove();
        }
        window.onclick = null;
    }
}