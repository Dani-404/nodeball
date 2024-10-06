export {};

declare global {
    interface Array<T> {
        move(from: any, to: any) : any;
    }
}

Array.prototype.move = function (from: any, to: any) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};