export function normalise(v: any): any {
    const k = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    const x = v[0] / (k || 1);
    const y = v[1] / (k || 1);
    return [x, y];
}

export function shuffle(array: any[]): any[] {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function pointDistance(p1: any, p2: any): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function lineToLine(line1: any, line2: any, isRay: boolean)
{
    var x1 = line1.x1;
    var y1 = line1.y1;
    var x2 = line1.x2;
    var y2 = line1.y2;

    var x3 = line2.x1;
    var y3 = line2.y1;
    var x4 = line2.x2;
    var y4 = line2.y2;

    var dx1 = x2 - x1;
    var dy1 = y2 - y1;

    var dx2 = x4 - x3;
    var dy2 = y4 - y3;

    var denom = (dx1 * dy2 - dy1 * dx2);

    if (denom === 0)
    {
        return null;
    }

    var t;
    var u;
    var s;

    if (isRay)
    {
        t = (dx1 * (y3 - y1) + dy1 * (x1 - x3)) / (dx2 * dy1 - dy2 * dx1);
        u = (x3 + dx2 * t - x1) / dx1;

        if (u < 0 || t < 0 || t > 1)
        {
            return null;
        }

        s = u;
    }
    else
    {
        t = ((x3 - x1) * dy2 - (y3 - y1) * dx2) / denom;
        u = ((y1 - y3) * dx1 - (x1 - x3) * dy1) / denom;

        if (t < 0 || t > 1 || u < 0 || u > 1)
        {
            return null;
        }

        s = t;
    }

    return {x: x1 + dx1 * s, y: y1 + dy1 * s, s: s}
};