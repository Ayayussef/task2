//First Task Second Section
let leftElement = document.querySelector('.two .left'),
    mainSection1 = document.querySelector('.two');
let scrolling =  function(){
    if(window.pageYOffset > mainSection1.offsetTop){
        leftElement.classList.add('active')
    }
    else{
        if(leftElement.classList.contains('active')){
            leftElement.classList.remove('active')
        }
    }
}

// First Task Third Section
let imgFixation = document.querySelector('.three .img'),
    mainSection2 = document.querySelector('.three');

    window.onscroll = function(){
        scrolling();
        if(window.pageYOffset > mainSection2.offsetTop){

            imgFixation.classList.add('fixed');
        }
        else{
            if(imgFixation.classList.contains('fixed'))
            imgFixation.classList.remove('fixed');
            imgFixation.classList.remove('stop')
        }
        if(window.pageYOffset > mainSection2.offsetTop*1.25){
                imgFixation.classList.add('stop')
            }
    }