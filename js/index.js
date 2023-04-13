// intersectionObserver 사용하여 스크롤 이벤트 효과 발생 FADE

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
