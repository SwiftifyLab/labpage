window.onload = function(){
    setTimeout(function(){const el = document.querySelector('#page');
    el.classList.remove("loading2");}, 1000);
    setTimeout(function(){const el = document.querySelector('#page');
    el.classList.remove("loading");}, 2000);
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.querySelector('.phone').src="assets/drawable/phone_dark.png";
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme == 'light'){
        document.querySelector('.phone').src="assets/drawable/phone_light.png";
    }
    if(newColorScheme == 'dark'){
        document.querySelector('.phone').src="assets/drawable/phone_dark.png";
    }
});