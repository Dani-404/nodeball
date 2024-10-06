import ShopItemInterface from "./ShopItemInterface";

export default class ShopItem implements ShopItemInterface {
    id: number;
    category_id: number;
    price: number;
    type: string;

    constructor(data: ShopItemInterface) {
        this.id = data.id;
        this.category_id = data.category_id;
        this.price = data.price;
        this.type = data.type;
    }
}