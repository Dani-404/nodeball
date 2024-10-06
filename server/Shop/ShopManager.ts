import Server from "../main";
import ShopCategory from "./ShopCategory/ShopCategory";
import Mysql from 'mysql'
import ShopItem from "./ShopItem/ShopItem";

type ShopCategorysType = {
    [key: string]: ShopCategory
}

export default class ShopManager {
    shopCategorys: ShopCategorysType;

    constructor() {
        this.shopCategorys = {}
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM shop_category', function (err, results, fields) {
                if(err) {
                    reject("Mysql Error: " + err.stack);
                    return;
                }

                if(results.length == 0) {
                    resolve(`Loaded 0 shop category.`)
                    return;
                }

                let count = 0;
                results.forEach((shopCategory: ShopCategory) => {
                    const category = new ShopCategory(shopCategory);
                    instance.shopCategorys[category.name] = category;

                    category.loadAllItems().then(() => {
                        count++;

                        if(count == results.length) {
                            resolve(`Loaded ${count} shop categorys.`)
                            return;
                        }
                    }).catch((e) => reject(e));
                })
            });
        });
    }

    getItemById(itemId: number): ShopItem | null {
        let itemReturn = null;

        for(let i in this.shopCategorys) {
            const category = this.shopCategorys[i];

            category.items.forEach((item) => {
                if(item.id == itemId)
                    itemReturn = item;
            })
        }

        return itemReturn;
    }

    getCategoryByName(categoryName: string): ShopCategory | null {
        for(let i in this.shopCategorys) {
            const category = this.shopCategorys[i];

            if(category.name == categoryName)
                return category;
        }

        return null;
    }

    getAllCategorys(): ShopCategory[] {
        const category:ShopCategory[] = [];

        for(let i in this.shopCategorys) {
            category.push(this.shopCategorys[i]);
        }

        return category;
    }
}