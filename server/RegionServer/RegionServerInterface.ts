import Client from "../Client/Client";

export default interface RegionServerInterface {
    id: string,
    ip: string,
    port: number,
    client: Client
}