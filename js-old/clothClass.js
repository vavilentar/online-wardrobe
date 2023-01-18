let idCloth = 0;
let favIdCloth = 0;

class Cloth {
	constructor(id, brand, type, color, season, useDate = 'Never', liked = false) {
		this.id = id;
		this.brand = brand;
		this.type = type;
		this.color = color;
		this.season = season;
		this.useDate = useDate;
		this.liked = liked;
	};

	use() {
		const date = new Date();
		return this.useDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
	};

	lastUsed() {
		console.log(`Last use date - ${this.useDate}`);
	};
};

