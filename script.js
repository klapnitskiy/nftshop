"use strict";

const catalogContainer = document.querySelector(".catalog");
const formContainer = document.querySelector(".form__container");
const form = formContainer.querySelector(".form");
const formButtonClose = form.querySelector(".form__button-close");
const inputName = document.querySelector(".form__input-name");
const inputLast = document.querySelector(".form__input-lastname");
const inputEmail = document.querySelector(".form__input-email");
const inputPhone = document.querySelector(".form__input-phone");
const formInputs = document.querySelectorAll(".form__input");

const cards = [
  {
    id: "0",
    price: "61",
    picture: "item8.jpg",
    section: "silver",
  },
  {
    id: "1",
    price: "81",
    picture: "item5.jpg",
    section: "gold",
  },
  {
    id: "2",
    price: "54",
    picture: "item7.jpg",
    section: "silver",
  },
  {
    id: "3",
    price: "55",
    picture: "item4.jpg",
    section: "silver",
  },
  {
    id: "4",
    price: "73",
    picture: "item1.jpg",
    section: "platinum",
  },
  {
    id: "5",
    price: "31",
    picture: "item2.jpg",
    section: "gold",
  },
  {
    id: "6",
    price: "50",
    picture: "item3.jpg",
    section: "silver",
  },
  {
    id: "7",
    price: "42",
    picture: "item5.jpg",
    section: "silver",
  },
  {
    id: "8",
    price: "46",
    picture: "item7.jpg",
    section: "platinum",
  },
  {
    id: "9",
    price: "37",
    picture: "item1.jpg",
    section: "gold",
  },
  {
    id: "10",
    price: "33",
    picture: "item2.jpg",
    section: "silver",
  },
  {
    id: "11",
    price: "13",
    picture: "item9.jpg",
    section: "platinum",
  },
  {
    id: "12",
    price: "65",
    picture: "item5.jpg",
    section: "gold",
  },
  {
    id: "13",
    price: "49",
    picture: "item2.jpg",
    section: "silver",
  },
  {
    id: "14",
    price: "91",
    picture: "item1.jpg",
    section: "platinum",
  },
  {
    id: "15",
    price: "13",
    picture: "item3.jpg",
    section: "gold",
  },
  {
    id: "16",
    price: "85",
    picture: "item5.jpg",
    section: "gold",
  },
  {
    id: "17",
    price: "47",
    picture: "item7.jpg",
    section: "platinum",
  },
  {
    id: "18",
    price: "77",
    picture: "item8.jpg",
    section: "silver",
  },
  {
    id: "19",
    price: "32",
    picture: "item10.jpg",
    section: "gold",
  },
  {
    id: "20",
    price: "58",
    picture: "item9.jpg",
    section: "platinum",
  },
  {
    id: "21",
    price: "18",
    picture: "item3.jpg",
    section: "silver",
  },
  {
    id: "22",
    price: "81",
    picture: "item1.jpg",
    section: "gold",
  },
  {
    id: "23",
    price: "75",
    picture: "item2.jpg",
    section: "platinum",
  },
  {
    id: "24",
    price: "31",
    picture: "item7.jpg",
    section: "gold",
  },
  {
    id: "25",
    price: "57",
    picture: "item4.jpg",
    section: "platinum",
  },
  {
    id: "26",
    price: "51",
    picture: "item6.jpg",
    section: "gold",
  },
  {
    id: "27",
    price: "59",
    picture: "item8.jpg",
    section: "silver",
  },
  {
    id: "28",
    price: "89",
    picture: "item4.jpg",
    section: "platinum",
  },
  {
    id: "29",
    price: "92",
    picture: "item3.jpg",
    section: "silver",
  },
];

class NftTier {
  // #catalogButton = document.querySelector(".catalog__button");

  constructor(name) {
    this.name = name;
    this._renderTier(name);
    this._createCatalog();
  }

  _capitalizeName(name) {
    const newName = name[0].toUpperCase() + name.slice(1);
    return newName;
  }

  _renderTier(name) {
    const capName = this._capitalizeName(name);

    let html = `
      <div class="catalog__item catalog__item--${name}">
        <div class="catalog__item-top">
          <div class="catalog__item-content">
            <h2 class="catalog__item-title">${capName} NFT</h2>
            <p class="catalog__item-description p__1">
              Available for purchase: ${this._showAvailabeCards(
                this.name,
                cards
              )}
            </p>
            <div class="catalog__item-check">
              <input
                class="catalog__item-checkbox-input"
                type="checkbox"
                name="catalog__item-checkbox"
                id="privacy_check-1"
              />
              <label
                for="catalog__item-checkbox"
                class="catalog__item-checkbox-name"
                >Show sold posters</label
              >
            </div>
          </div>

          <button class="catalog__button">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 0V27M27 13.5L0 13.5"
                stroke="#F4C500"
                stroke-width="4"
              />
            </svg>
          </button>
        </div>
        <div class="catalog__content catalog__content--closed">
          <p class="p__2">
            You get: </br>-  NFT poster + sponsor logo on web page
          </p>
          <div class="catalog__cards"></div>
        </div>
      </div>
    `;

    catalogContainer.insertAdjacentHTML("beforeend", html);
  }

  _showAvailabeCards(name, cards) {
    const filteredCards = cards.filter((card) => card.section === name);
    return filteredCards.length;
  }

  _renderCards(cards) {
    // const cardsItems = cards
    //   .filter((card) => card.section === this.name)
    //   .map((card) => {
    //     let html = `
    //   <div class="catalog__card data-id="${card.id}" ">
    //     <img src="./img/cards/${card.picture}" alt="nft-img-${card.id}">
    //     <div class="catalog__card-description">
    //       <span class="catalog__card-price p__2">${card.price}₣</span>
    //       <button class="catalog__card-button p__3">Buy NFT</button>
    //     </div>
    //   </div>
    //   `;
    //   });
    const cardsItems = cards
      .filter((card) => card.section === this.name)
      .map((card) => {
        let html = `
      <div class="catalog__card catalog__card--${this.name}" data-id="${card.id}">
        <img src="./img/cards/${card.picture}" alt="nft-img-${card.id}">
        <div class="catalog__card-description">
          <span class="catalog__card-price p__2">${card.price}₣</span>
          <button class="catalog__card-button p__3">Buy NFT</button>
        </div>
      </div>
      `;
        const container = document.querySelector(
          `.catalog__item--${this.name}`
        );
        const contentContainer = container.querySelector(".catalog__cards");
        contentContainer.insertAdjacentHTML("beforeend", html);
      });
  }

  _createCatalog() {
    const catalogContent = document.querySelectorAll(".catalog__content");

    this._renderCards(cards);

    window.addEventListener("load", () => {
      catalogContent.forEach((catalog) => {
        const height = catalog.scrollHeight;
        catalog.style.setProperty("--max-height", height + "px");
      });
    });
  }
}

class App {
  constructor(tierSections) {
    this.tierSections = tierSections;
    this._initializeSections(this.tierSections);
    const catalogCards = document.querySelectorAll(".catalog__cards");
    catalogContainer.addEventListener("click", this._openCatalog.bind(this));
    catalogCards.forEach((card) => {
      card.addEventListener("click", this._buyNft.bind(this));
    });
    formButtonClose.addEventListener("click", this._hideForm);
    formInputs.forEach((input) =>
      input.addEventListener("change", this._validateInput.bind(this))
    );
  }

  _initializeSections(tierSections) {
    tierSections.forEach((item) => {
      new NftTier(item);
    });
  }

  _showForm(e) {
    console.log(e.target);
    if (!e.target.closest(".catalog__card")) return;

    formContainer.classList.remove("hidden");
    inputName.focus();
  }

  _hideForm(e) {
    e.preventDefault();
    if (!e.target.closest(".form__button-close")) return;
    formContainer.classList.add("hidden");
    this._clearForm();
  }

  // _clearForm() {
  //   inputEmail.value = "";
  // }

  _validateInput(e) {
    console.log(e.target.classList);
    if (e.target.classList[1].includes("phone")) {
      console.log("string");
      console.log(e.target.value);
    }
  }

  _buyNft(e) {
    this._showForm(e);
  }

  _openCatalog(e) {
    if (!e.target.closest(".catalog__button")) return;

    const button = e.target.closest(".catalog__item-top");
    const content = button.nextElementSibling;

    const item = button.closest(".catalog__item");

    item.classList.toggle("open");

    // const openElem = e.target.closest(".catalog__content");

    // console.log(openElem);

    content.classList.toggle("catalog__content--closed");
  }
}

const tier = ["silver", "gold", "platinum"];

const app = new App(tier);

// const silverNFT = new NftTier("silver");
// const goldNFT = new NftTier("gold");
// const platinumFFT = new NftTier("platinum");
