function openCC() {
    var CC = document.getElementById('controlCenter').style;
    var CoCe = document.getElementById('CC').style;
    var trig = document.getElementById('control-center-trig').style;
    var icon1 = document.getElementById('icon1').style;
    var icon2 = document.getElementById('icon2').style;
    var body = document.getElementById('table').style;
    var dock = document.getElementById('dock').style;
    CC.top = '0';
    CoCe.opacity = '1';
    CoCe.zIndex = '0';
    CoCe.backdropFilter = 'blur(10px)';
    body.transform = 'scale(0.9)';
    dock.transform = 'scale(0.8)';
    trig.margin = '15px 30px';
    trig.fontWeight = '900';
    trig.fontSize = '15px';
    icon1.height = '30px';
    icon2.height = '30px';
}
function closeCC() {
    var CC = document.getElementById('controlCenter').style;
    var CoCe = document.getElementById('CC').style;
    var trig = document.getElementById('control-center-trig').style;
    var icon1 = document.getElementById('icon1').style;
    var icon2 = document.getElementById('icon2').style;
    var body = document.getElementById('table').style;
    var dock = document.getElementById('dock').style;
    CC.top = '-100%';
    CoCe.opacity = '0';
    CoCe.zIndex = '-1';
    body.transform = 'scale(1)';
    dock.transform = 'scale(1)';
    trig.margin = '0';
    trig.fontWeight = '500';
    trig.fontSize = '11px';
    icon1.height = '18px';
    icon2.height = '22px';
}