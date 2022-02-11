const wrapper = document.querySelector('.wrapper');
const burgerMenuBtn = document.querySelector('.sidebar__burger-menu');
const burgerMenuBtn__wrapper = document.querySelector('.sidebar__burger-menu-wrapper');


let menuOpen = false;
burgerMenuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        //sidebar.classList.add('sidebar_open');
        wrapper.classList.add('sidebar__open');
        burgerMenuBtn.classList.add('sidebar__burger-menu__clicked')
        document.querySelectorAll('.sidebar__category-title').forEach(element => {
            element.style.setProperty('display', 'block');
        });

        document
            .querySelector('.sidebar__burger-menu-wrapper')
            .style.setProperty('left', '240px');
        document
            .querySelector('.logo__title')
            .style.setProperty('display', 'block');

        if (window.innerWidth < "568") {
            document
                .querySelectorAll('.sidebar__category')
                .forEach(element => {
                    element.style.setProperty('display', 'flex');
                });
            document
                .querySelector('.logo')
                .style.setProperty('display', 'flex');
            document
                .querySelector('.sidebar__categories')
                .style.setProperty('display', 'flex');
        }

        document
            .querySelector('.sidebar__burger-menu__stick__first')
            .classList
            .add('sidebar__burger-menu__stick__first__clicked');

        document
            .querySelector('.sidebar__burger-menu__stick__second')
            .classList
            .add('sidebar__burger-menu__stick__second__clicked');

        document
            .querySelector('.sidebar__burger-menu__stick__third')
            .classList
            .add('sidebar__burger-menu__stick__third__clicked');

        menuOpen = true;
    } else {
        //sidebar.classList.remove('sidebar_open');
        wrapper.classList.remove('sidebar__open');

        burgerMenuBtn.classList.remove('sidebar__burger-menu__clicked')
        document.querySelectorAll('.sidebar__category-title').forEach(element => {
            element.style.setProperty('display', 'none');
        });

        if (window.innerWidth < "568") {
            document
                .querySelector('.sidebar__burger-menu-wrapper')
                .style.setProperty('left', '12px');
            document
                .querySelector('.logo')
                .style.setProperty('display', 'none');
        } else {
            document
                .querySelector('.sidebar__burger-menu-wrapper')
                .style.setProperty('left', '104px ');
        }

        if (window.innerWidth < "1024") {
            document
                .querySelector('.logo__img')
                .style.setProperty('display', 'block');
            document
                .querySelector('.logo__title')
                .style.setProperty('display', 'none');
        } else {

            document
                .querySelector('.logo')
                .style.setProperty('display', 'none');
        }



        document
            .querySelector('.sidebar__burger-menu__stick__first')
            .classList
            .remove('sidebar__burger-menu__stick__first__clicked');

        document
            .querySelector('.sidebar__burger-menu__stick__second')
            .classList
            .remove('sidebar__burger-menu__stick__second__clicked');

        document
            .querySelector('.sidebar__burger-menu__stick__third')
            .classList
            .remove('sidebar__burger-menu__stick__third__clicked');

        menuOpen = false;
    }
});