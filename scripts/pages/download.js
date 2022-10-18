$(document).ready(startup());
//Load Pages Styles
$('head').append('<link rel="stylesheet" href="ui/pages/download.css" />');
//Start Add Pages
let devicejson;
var dataurl = 'https://raw.githubusercontent.com/swiftaosp-devices/database/web/data/'
const devicetitle = '.device .banner-title';
const devicecodename = '.device .banner-subtitle';
function startup() {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var dataurl = 'https://raw.githubusercontent.com/swiftaosp-devices/database/web/data/'


    let value = params.device;
    if (value !== null) {
        var jsonurl = `${dataurl}/device/${value}/${value}.json`;
        setTimeout(function () {
            const el = document.querySelector('#page');
            el.classList.add("devicedl");
            $('.device .banner-subtitle').text(value)
            console.log('fetching')
            fetchDeviceData(jsonurl)
        }, 100);
    }
    setTimeout(function () {
        $('.grid').click(opengrid);
    }, 100);
}

function opengrid() {
    var codename = $(this).attr('class').split(' ')[1];
    window.location.href = 'download.html?device=' + codename;
}
async function fetchDeviceData(file) {
    let x = await fetch(file, {cache: "no-store"});
    let y = await x.text();
    if (y !== undefined) {
        const obj = JSON.parse(y);
        $('.device .banner-title').text(obj.name)
        $('.device .banner-subtitle').text(obj.codename)
        $('.device .banner-maintainer').text(obj.maintainer)
        var pictures = `${dataurl}/${obj.pictures}`
        document.querySelector('.phone').src = pictures;
    }
    console.log(y)
  }