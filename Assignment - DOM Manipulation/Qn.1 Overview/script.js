document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const priceBars = document.getElementById('priceBars');
    const ratingBars = document.getElementById('ratingBars');
    const sortPriceBtn = document.getElementById('sortPrice');
    const sortRatingBtn = document.getElementById('sortRating');

    let products = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const rating = parseInt(document.getElementById('productRating').value);

        products.push({ name, price, rating });
        updateGraphs();
    });

    sortPriceBtn.addEventListener('click', () => {
        products.sort((a, b) => b.price - a.price);
        updateGraphs();
    });

    sortRatingBtn.addEventListener('click', () => {
        products.sort((a, b) => b.rating - a.rating);
        updateGraphs();
    });

    function updateGraphs() {
        priceBars.innerHTML = '';
        ratingBars.innerHTML = '';

        products.forEach(product => {
            const priceBar = document.createElement('div');
            priceBar.className = 'bar';
           
            priceBar.textContent = `${product.name}: $${product.price.toFixed(2)}`;
            priceBars.appendChild(priceBar);

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar';
            ratingBar.textContent = `${product.name}: ${product.rating}★`;
            ratingBars.appendChild(ratingBar);
        });
    }
});
