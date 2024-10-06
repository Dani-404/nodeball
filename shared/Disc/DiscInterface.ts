export default interface DiscInterface {
    player?: number;
    radius: number;
    bCoef: number;
    invMass: number;
    damping: number;
    acceleration?: number;
    kick?: boolean;
    kickingAcceleration?: number;
    kickingDamping?: number;
    kickStrength?: number;
    color: string;
    avatar?: number;
    x: number;
    y: number;
    xspeed: number;
    yspeed: number;
    cGroup: number;
    cMask: number;
}