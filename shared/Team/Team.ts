const Team = {
    SPECTATORS: {
        id: 0,
        name: "spectators",
        color: '#FFF',
        cGroup: 0,
    },
    RED: {
        id: 1,
        name: "red",
        color: '#bd3838',
        cGroup: 2,
    },
    BLUE: {
        id: 2,
        name: "blue",
        color: '#136eac',
        cGroup: 4,
    }
}

export type TeamKeys = keyof typeof Team;
export default Team;