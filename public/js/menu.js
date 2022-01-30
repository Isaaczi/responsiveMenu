//* código1 para desplegar el menú sin hover

const submenuBtnPC = document.querySelector(`.submenu-btn`);
const submenuPC = document.querySelector(`.submenu`);
const submenuContainer = document.querySelector(`.submenu-container`);

function desplegarSubmenu() {
    submenuPC.style.opacity = 1;
    submenuPC.style.visibility = `visible`;
    submenuContainer.addEventListener(`mouseleave`, ()=> {
        submenuPC.style.opacity = 0;
        submenuPC.style.visibility = `hidden`;
    })
}
if (submenuPC.style.visibility == false && window.innerWidth >= 760) {
    submenuBtnPC.addEventListener(`click`, desplegarSubmenu);
}

//* código2 para (en pantallas pequeñas) desplegar el menú principal

const menuBtn = document.getElementById(`menuBtn`);
const menu = document.getElementById(`menu`);

function showMain(){
    menu.classList.toggle(`show`);
}

menuBtn.addEventListener(`click`, showMain); //todo Por alguna razón (investigar) cuando el segundo parámetro es show() No funciona correctamente

//* código3 para (en pantallas pequeñas) deplegar el submenú

const submenuBtn = document.querySelectorAll(`.submenu-btn`);

function deploy() {
    const submenu = this.nextElementSibling;
    const height = submenu.scrollHeight;
    if (window.innerWidth < 760) {
        if (submenu.classList.contains(`deployed`)) {
            submenu.classList.remove(`deployed`)
            submenu.style.height = 0;
        } else {
        submenu.classList.add(`deployed`)
        submenu.style.height = `${height}px`;
        }
    } /* else if (window.innerWidth >= 760 && submenu.style.visibility == false) {
        submenu.style.opacity = 1;
        submenu.style.visibility = `visible`;
        submenuContainer.addEventListener(`mouseleave`, ()=> {
            submenu.style.opacity = 0;
            submenu.style.visibility = `hidden`;
        })
    } */
}

for (let i = 0; i < submenuBtn.length; i++) {
    submenuBtn[i].addEventListener(`click`, deploy);
}