let carts = document.querySelector('.carts');

//

let titleNameInput = document.querySelector('.titleNameInput');
let subTitleNameInput = document.querySelector('.subTitleNameInput');
let PriceInput = document.querySelector('.PriceInput');
let imageInput = document.querySelector('.imageInput');

//

let addTovar = document.querySelector('.addTovar');

let tovars = [];

let imgHelp = `img/`;

function addProduct(titleNameInput, PriceInput, subTitleNameInput, imageInput) {
  titleName = titleNameInput.value;
  PriceInput = PriceInput.value;
  subTitle = subTitleNameInput.value;
  image = imgHelp + imageInput.value;
  let product = {
    image,
    titleName,
    PriceInput,
    subTitle,
    id: Math.random(),
  };

  tovars.push(product);
}

addTovar.addEventListener('click', () => {
  if (titleNameInput.value == '') {
    alert('Не внесено название товара');
    return;
  } else if (subTitleNameInput.value == '') {
    alert('Не внесено описание товара');
    return;
  } else if (PriceInput.value == '') {
    alert('Не внесена цена товара');
    return;
  } else if (imageInput.value == '') {
    alert('Нет пути для картинки');
    return;
  } else closePopupNewTovar();
  addProduct(titleNameInput, PriceInput, subTitleNameInput, imageInput);
  titleNameInput.value = '';
  PriceInput.value = '';
  subTitleNameInput.value = '';

  render();
});

function render() {
  carts.innerHTML = '';
  tovars.forEach((product) => {
    let html = `<div data-id="${product.id}" class="cart">
  <img src="${product.image}" alt="" />
  <h1>${product.titleName}</h1>
  <h2>${product.PriceInput}₽</h2>
  <p>${product.subTitle}</p>
</div>`;
    carts.innerHTML += html;
  });
}

let closeAddnewTovar = document.querySelector('.closeAddnewTovar');
let addNewTovar = document.querySelector('.addNewTovar');
let popapNewTovar = document.querySelector('.popapNewTovar');

addNewTovar.addEventListener('click', function () {
  popapNewTovar.classList.add('open');
});

closeAddnewTovar.addEventListener('click', function () {
  closePopupNewTovar();
});

function closePopupNewTovar() {
  popapNewTovar.classList.remove('open');
}
