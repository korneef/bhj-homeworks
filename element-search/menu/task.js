const menuLink = document.querySelectorAll('.menu__link');
const menuLinkCount = menuLink.length;

for (let i = 0; i < menuLinkCount; i++) {
    menuLink[i].onclick = function() {
        if (this.parentElement.querySelector('ul.menu_sub') != null) {
            
            let activeMenu = document.querySelector('ul.menu_active');
            if (activeMenu != null) {
                activeMenu.className = 'menu menu_sub';
            //  activeMenu.classname = activeMenu.classname.replace(' menu_active', '');
            };

            this.parentElement.querySelector('ul.menu_sub').className += ' menu_active'
            return false
        };
    };
};