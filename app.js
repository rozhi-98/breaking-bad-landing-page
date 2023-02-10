const cardsContainer = document.querySelector('.cards-container');

const cardsData = [
  {
    img: './images/walter white.jpg',
    header: 'Walter White',
    description:
      'Walter Hartwell White Sr., also known by his alias Heisenberg, is the main protagonist of the American crime drama television series Breaking Bad, portrayed by Bryan Cranston. Walter was a skilled chemist and co-founder of a technology firm before he accepted a buy-out from his partners.',
  },
  {
    img: './images/saul goodman.jpg',
    header: 'Saul Goodman',
    description:
      'Saul Goodman, is a character created by Vince Gilligan and Peter Gould and portrayed by Bob Odenkirk in the television franchise Breaking Bad. He appears as a major character in Breaking Bad and as the protagonist of its spin-off Better Call Saul.',
  },
  {
    img: './images/skyler.jpg',
    header: 'Skyler White',
    description:
      "Skyler White is a fictional character in Breaking Bad, portrayed by Anna Gunn. For her performance, Gunn received critical acclaim, with some critics even lauding her character as the template for television anti-heroines. Skyler represents Walter's wife in the breaking bad series who is also a bookkeeper.",
  },
  {
    img: './images/jesse pinkman.jpg',
    header: 'Jesse Pinkman',
    description:
      'Jesse Bruce Pinkman is a fictional character in the American crime film television series Breaking Bad, played by Aaron Paul. He is a crystal meth cook and dealer who works with his former high school chemistry teacher, Walter White. Jesse is the only character besides Walter to appear in every episode of the show.',
  },
];

const generateCards = () => {
  let cardsContent = '';
  cardsData.forEach((data) => {
    cardsContent += `<div class="card">
            <img
              class="card-images"
              src="${data.img}"
              alt="${data.header}"
            />
            <h1>${data.header}</h1>
            <p class="description">
              ${data.description}
            </p>
            <ul class="social-icons">
              <li>
                <a href="#"><i class="fa fa-dribbble"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
            </ul>
            <p><button class="contact-button">Contact</button></p>
          </div>
`;
  });
  cardsContainer.innerHTML = cardsContent;
};

generateCards();
