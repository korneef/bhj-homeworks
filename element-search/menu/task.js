const menuLink = document.querySelectorAll('.menu__link');
const menuLinkCount = menuLink.length;

for (let i = 0; i < menuLinkCount; i++) {
    menuLink[i].onclick = function() {
        let menu = this.parentElement.querySelector('ul.menu_sub');    
        menu.className.includes('menu_active') ? menu.className = menu.className.replace(' menu_active', '') : menu.className += ' menu_active';
        
        let activeMenu = document.querySelectorAll('ul.menu_active');
        
        if (activeMenu.length > 1) {
            for (let i = 0; i < activeMenu.length; i++) {
                activeMenu[i].className = activeMenu[i].className.replace(' menu_active', '');
            };
            menu.className += ' menu_active';
        }
        
        return false
        };
    };