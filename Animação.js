const card = document.querySelector("#container"); //chamei meu seletor ou seja minha div container

card.addEventListener("mousemove", cardEffect); //mousemove e responsavel por localizar as coordenadas do mouse
card.addEventListener("mouseleave", cardBack);
card.addEventListener("mouseenter", cardEnter);

function cardEffect(event) {
  //criei a função do efeito do cartao (cardEffect)
  const cardWidth = card.offsetWidth; //largura do cartao
  const cardHeight = card.offsetHeight; //altura do cartao
  const centerX = card.offsetLeft + cardWidth / 2; //pegar a distancia entre o elemento e o elemto pai, ou seja a distancia entre o cartao e borda e somar a largura do cartao
  const centerY = card.offsetTop + cardHeight / 2;
  const positionX = event.clientX - centerX; //event.clientX vem juntocom o mousemove e conseguimos localizar o centro do cartao no eixo x
  const positionY = event.clientY - centerY;

  const rotateX = ((+1 * 25 * positionY) / (cardHeight / 2)).toFixed(2); //animação de rotação no eixo x
  const rotateY = ((-1 * 25 * positionX) / (cardWidth / 2)).toFixed(2);

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function cardBack(event) {
  card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  cardTransition();
}

function cardTransition() {
  clearInterval(card.transitionId);
  card.style.transition = "transform 400ms";
  card.transitionId = setTimeout(() => {
    card.style.transition = "";
  }, 400);
}

function cardEnter(event) {
  cardTransition();
}
