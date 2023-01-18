"use strict";
let idCloth = 0;
let favIdCloth = 0;
class Cloth {
    id;
    brand;
    type;
    color;
    season;
    useDate;
    liked;
    constructor(id, brand, type, color, season, useDate = 'Никогда', liked = false) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.season = season;
        this.useDate = useDate;
        this.liked = liked;
    }
    use() {
        const date = new Date();
        return this.useDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    }
}
//# sourceMappingURL=clothClass.js.map