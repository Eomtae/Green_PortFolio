const elSec = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible'); // view port에 들어온 경우
      } else {
        entry.target.classList.remove('visible');// view port 밖으로 나가는 경우
      }
    });                            
  });
  document.querySelectorAll('.sections').forEach((sections) => elSec.observe(sections));
// intersectionObserver 사용


// function goToScroll(name) {
//   var location = document.querySelector("." + name).offsetTop;
//   window.scrollTo({top: location, behavior: 'smooth'});
// }

// document.querySelector('#ab').addEventListener('click',e =>{
//   document.querySelector('.intro-wrapper').scrollIntoView({behavior:'smooth'})
// })