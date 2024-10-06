import ShareableData from "../ShareableData/ShareableData";
import DiscInterface from "./DiscInterface";

export default class Disc implements DiscInterface {
    player: number;
    radius: number;
    bCoef: number;
    invMass: number;
    damping: number;
    acceleration: number;
    kick: boolean;
    kickingAcceleration: number;
    kickingDamping: number;
    kickStrength: number;
    color: string;
    avatar: number;
    x: number;
    y: number;
    xspeed: number;
    yspeed: number;
    cGroup: number;
    cMask: number;
    
    constructor(data: DiscInterface) {
        this.player = data.player || 0;
        this.radius = data.radius;
        this.bCoef = data.bCoef;
        this.invMass = data.invMass;
        this.damping = data.damping || 0.99;
        this.acceleration = data.acceleration || 0;
        this.kick = false;
        this.kickingAcceleration = data.kickingAcceleration || 0;
        this.kickingDamping = data.kickingDamping || 0;
        this.kickStrength = data.kickStrength || 0;
        this.color = data.color;
        this.avatar = data.avatar || 0;
        this.x = data.x || 0;
        this.y = data.y || 0;
        this.xspeed = data.xspeed || 0;
        this.yspeed = data.yspeed || 0;
        this.cGroup = data.cGroup;
        this.cMask = data.cMask;
    }
}