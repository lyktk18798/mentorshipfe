let drum = document.querySelectorAll('.drum');
for(let i = 0; i<drum.length; i++){
    drum[i].addEventListener("click", function(){
        let btn = drum.innerHtml;
        makeSound(btn);
        btnAnimation(btn);
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event, key);
    btnAnimation(event, key);
})