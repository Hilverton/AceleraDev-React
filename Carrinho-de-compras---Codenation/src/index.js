const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const getLooks = (ids, list) => list.filter(item => ids.includes(item.id));

const getProducts = (looks) => {
	const products = looks.map(item => {
		const piece = {
			name: item.name,
			category: item.category
		}
		return piece;
	})
	return products;
}

const getPromotions = (categorysLooks) => {
	const arrayCategories = categorysLooks.reduce((categories, categoryAtual) => {
		if(!categories.includes(categoryAtual.category)){
			categories.push(categoryAtual.category);
		}
		return categories;
	}, []);
	return promotions[arrayCategories.length - 1];
}

const getPrice = (promotion, productsList) => {
	let price = 0;
	let totalPrice = 0;

	for (const product of productsList) {
		price += Number(product.regularPrice);
		for (const promo of product.promotions) {
			if (promo.looks.includes(promotion)) {
				totalPrice += Number(promo.price);
			} else if (product.promotions.length === 1) {
				totalPrice += Number(product.regularPrice);
			}
		}
	}

	let discountValue = (price - totalPrice).toFixed(2);
	let discount = `${((discountValue*100)/price).toFixed(2)}%`;

	totalPrice = totalPrice.toFixed(2);
	
	return {
		totalPrice,
		discountValue,
		discount
	}
}

function getShoppingCart(ids, productsList) {
	const looks = getLooks(ids, productsList);

	const products = getProducts(looks);
	
	const promotion = getPromotions(products);

	const { totalPrice, discountValue, discount } = getPrice(promotion, looks);

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	};
}

module.exports = { getShoppingCart };
