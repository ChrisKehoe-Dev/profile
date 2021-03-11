let slists = document.querySelectorAll('.liSports li');
    for (liIndex = 0; liIndex < slists.length; liIndex++){
        if(liIndex % 2 == 1 ) {slists[liIndex].style.color = 'forestgreen'}
        else {slists[liIndex].style.color = 'blue'}
    }

let blists = document.querySelectorAll('.liBooks li');
    for (liIndex = 0; liIndex < blists.length; liIndex++){
        if(liIndex % 2 == 1 ) {blists[liIndex].style.color = 'forestgreen'}
        else {blists[liIndex].style.color = 'blue'}
    }

let twbutton = document.querySelector('.tw');
    twbutton.addEventListener('click', function(event) {
        //alert('hello')
        window.open('https://twitter.com/ck_80', '_blank');
    }) ;

let fbbutton = document.querySelector('.fb');
    fbbutton.addEventListener('click', function(event) {
        //alert('hello')
        window.open('https://www.facebook.com/chris.kehoe.129', '_blank');
    }) ;

let lnbutton = document.querySelector('.ln');
    lnbutton.addEventListener('click', function(event) {
        //alert('hello')
        window.open('https://www.linkedin.com/in/christopher-kehoe/', '_blank');
    }) ;

let igbutton = document.querySelector('.ig');
    igbutton.addEventListener('click', function(event) {
        //alert('hello')
        window.open('https://www.instagram.com/kehoechris/', '_blank');
    }) ;
