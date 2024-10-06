import Server from "../../main";
import ShopItem from "../ShopItem/ShopItem";
import ShopCategoryInterface from "./ShopCategoryInterface";
import Mysql from 'mysql';

export default class ShopCategory implements ShopCategoryInterface {
    id: number;
    name: string;
    items: ShopItem[];

    constructor(data: ShopCategoryInterface) {
        this.id = data.id;
        this.name = data.name;
        this.items = [];
    }

    loadAllItems(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM shop_items WHERE category_id = ?', [this.id], function (err, results, fields) {
                if(err)
                    reject("Mysql Error: " + err.stack);

                if(results.length == 0)
                    resolve(`Loaded 0 shop items for category ${instance.name}.`)

                let count = 0;
                results.forEach((shopItem: ShopItem) => {
                    count++;
                    const item = new ShopItem(shopItem);
                    instance.items.push(item);

                    if(count == results.length)
                        resolve(`Loaded ${count} shop items for category ${instance.name}.`)
                })
            });
        });
    }

    getItems(): Array<ShopItem> {
        return this.items;
    }
}