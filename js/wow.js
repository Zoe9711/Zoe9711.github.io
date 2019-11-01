jQuery(document).ready(function(){

    appear();
    showHide();


    $('body').ripples({
      resolution: 256,
      dropRadius: 20, //px
      perturbance: 0.04,
    });

    setInterval(function() {
      var x = Math.random() * $('body').outerWidth();
      var y = Math.random() * $('body').outerHeight();
      var dropRadius = 20;
      var strength = 0.04 + Math.random() * 0.04;

      $('body').ripples('drop', x, y, dropRadius, strength);
    }, 400);

});

var opacity = 0;

function appear() {
    if (opacity < 1) {
        opacity += 0.01;
        setTimeout(appear, 80);
    }
    document.getElementById('container').style.opacity = opacity;
}


function showHide() {
    showHide1();
    showHide2();
    showHide3();
    showHide4();
    showHide5();
    showHide6();
    showHide7();
}

var index1 = 0;

function showHide1() {
    var i;
    var x = document.getElementsByClassName('a1');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index1 == x.length) {
        index1 = 0;
    }
    x[index1].style.display = 'block';
    index1++;
    setTimeout(showHide1, 5000);
}

var index2 = 0;

function showHide2() {
    var i;
    var x = document.getElementsByClassName('a2');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index2 == x.length) {
        index2 = 0;
    }
    x[index2].style.display = 'block';
    index2++;
    setTimeout(showHide2, 4500);
}

var index3 = 0;

function showHide3() {
    var i;
    var x = document.getElementsByClassName('a3');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index3 == x.length) {
        index3 = 0;
    }
    x[index3].style.display = 'block';
    index3++;
    setTimeout(showHide3, 4000);
}

var index4 = 0;

function showHide4() {
    var i;
    var x = document.getElementsByClassName('a4');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index4 == x.length) {
        index4 = 0;
    }
    x[index4].style.display = 'block';
    index4++;
    setTimeout(showHide4, 3500);
}

var index5 = 0;

function showHide5() {
    var i;
    var x = document.getElementsByClassName('a5');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index5 == x.length) {
        index5 = 0;
    }
    x[index5].style.display = 'block';
    index5++;
    setTimeout(showHide5, 5200);
}

var index6 = 0;

function showHide6() {
    var i;
    var x = document.getElementsByClassName('a6');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index6 == x.length) {
        index6 = 0;
    }
    x[index6].style.display = 'block';
    index6++;
    setTimeout(showHide6, 3800);
}

var index7 = 0;

function showHide7() {
    var i;
    var x = document.getElementsByClassName('a7');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    if (index7 == x.length) {
        index7 = 0;
    }
    x[index7].style.display = 'block';
    index7++;
    setTimeout(showHide7, 4300);
}

