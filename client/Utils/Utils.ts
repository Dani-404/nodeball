declare interface String {
    supplant(value : Array<any>) : string;
}

String.prototype.supplant = function (o: Array<any>) {
    return this.replace(/{([^{}]*)}/g,
        function (a: any, b: any) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};