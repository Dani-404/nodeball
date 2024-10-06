export default class ShareableData {
    timestamp: number;
    shareableData: any;
    
    constructor(ts: number, p: any) {
        this.timestamp = ts;
        this.shareableData = p
    }
}