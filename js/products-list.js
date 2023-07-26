const products = [
    {
        id: '1',
        name: 'Baby Yoda',
        price: 10,
        image: 'img/baby-yoda.svg',
        description: 'Adorable baby version of the famous Star Wars character, Yoda.'
    },
    {
        id: '2',
        name: 'Banana',
        price: 12,
        image: 'img/banana.svg',
        description: 'A banana, as a fruit, with a curved yellow skin.'
    },
    {
        id: '3',
        name: 'Girl',
        price: 8,
        image: 'img/girl.svg',
        description: 'Illustration of a girl, representing femininity and youth.'
    },
    {
        id: '4',
        name: 'Viking',
        price: 15,
        image: 'img/viking.svg',
        description: 'Illustration of a viking, a Scandinavian warrior.'
    }
]

renderProducts(products);

function renderProducts(products) {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-card__h3">${product.name}</h3>
            <p class="product-card__description">${product.description}
            </p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }
}
