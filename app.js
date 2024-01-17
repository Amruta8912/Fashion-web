let ham =document.querySelector('.ham');
let ul =document.querySelector('ul');

ham.addEventListener("click",()=>{
    ul.classList.toggle('ham_active');

    let ham_child =ham.firstElementChild;
    if(ul.classList.contains('ham_active')){
        ham_child.classList.replace('fa-bars','fa-xmark');
    }
    else{
        ham_child.classList.replace('fa-xmark','fa-bars');
    }
});

let mainimg = document.getElementById('main-img');
let smallimg = document.getElementsByClassName('small-ing');

smallimg[0].onclick= function(){
    mainimg.src = smallimg[0].src
}
smallimg[1].onclick= function(){
    mainimg.src = smallimg[1].src
}
smallimg[2].onclick= function(){
    mainimg.src = smallimg[2].src
}
smallimg[3].onclick= function(){
    mainimg.src = smallimg[3].src
}
