
function restart(){
  const div = document.querySelectorAll('.choice-grid div');
  const img = document.querySelectorAll('.checkbox');
  for(let a of img){
    a.src = 'images/unchecked.png';
  }
  for (let b of div){
    b.classList.remove('overlay');
    b.classList.remove('colore');
  }
  const reset = document.querySelector('#inizio');
  reset.classList.add('fine');
  
  ris.one=null;
  ris.two=null;
  ris.three=null;
  
  for(let i=0;i<27; i++){
    div[i].addEventListener('click', check);
  }
   window.scrollTo(0,0);

}


function check(event)
{
  const seleziona = event.currentTarget;
  const img =seleziona.querySelector('.checkbox');
  const div = document.querySelectorAll('.choice-grid div'); 
  img.src = 'images/checked.png';
  seleziona.classList.remove('overlay');
  seleziona.classList.add('colore');

  background(seleziona);

  const choiceid = seleziona.dataset.choiceId;
  const questionid = seleziona.dataset.questionId;

  ris[questionid]=choiceid;
  if(ris.one !== null && ris.two !== null && ris.three !== null){
    for(let i=0;i<27; i++){
      div[i].removeEventListener('click', check);
    }
    const risultato = personalita(ris);

    const titolo = document.querySelector('h2');
    const contenuto = document.querySelector('p');
    titolo.textContent = RESULTS_MAP[risultato].title;
    contenuto.textContent = RESULTS_MAP[risultato].contents;
    
    const fine_prob = document.querySelector('.fine');
    fine_prob.classList.remove('fine');

    const reset = document.querySelector('#bottone');
    reset.addEventListener('click', restart);

  }

}


function background(risp){
  const v= document.querySelectorAll('.choice-grid div');
  for(const p of v){
    if (p.dataset.choiceId !== risp.dataset.choiceId && p.dataset.questionId === risp.dataset.questionId){
      p.classList.remove('colore');
      const imagenot = p.querySelector('.checkbox').src = 'images/unchecked.png';
      p.classList.add('overlay');
    }
  }
}

function personalita(risp){
  
  if(risp.one === risp.two || risp.one === risp.three)
  return risp.one;
  else if(risp.two === risp.three)
  return risp.two;
  else if (risp.one !== risp.two && risp.one !== risp.three)
  return risp.one;
   
}



const immagine = document.querySelectorAll('.choice-grid div');

for(let i=0;i<27; i++){
  immagine[i].addEventListener('click', check);
}

const ris = {
  'one':null,
  'two':null,
  'three':null,
}