function init(){
    
    const elPension = document.querySelector('.pension_wrap')
    const elRecipe = document.querySelector('.recipe_wrap')
    const elMiwon = document.querySelector('.miwon_wrap')
    const elTobacco = document.querySelector('.tobacco_wrap')


    window.addEventListener('scroll',function(){
        if(
            elPension.offsetTop - window.innerHeight < window.pageYOffset){
                elPension.classList.add('active')
        }
        if(
            elRecipe.offsetTop - window.innerHeight < window.pageYOffset){
                elRecipe.classList.add('active')
        }
        if(
            elMiwon.offsetTop - window.innerHeight < window.pageYOffset){
                elMiwon.classList.add('active')
        }
        if(
            elTobacco.offsetTop - window.innerHeight < window.pageYOffset){
                elTobacco.classList.add('active')
        }
    })

}
window.onload = ()=>{
    init()
    window.scrollTo(0,0)
};
