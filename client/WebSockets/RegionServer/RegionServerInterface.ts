export default interface RegionServerInterface {
    ws?: null | WebSocket;
    id: string,
    ip: string,
    port: number,
    clientId?: number | null;
    ping?: number;
}