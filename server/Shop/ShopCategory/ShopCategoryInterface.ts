import ShopItem from "../ShopItem/ShopItem";

export default interface ShopCategoryInterface {
    id: number;
    name: string;
    items: ShopItem[]
}