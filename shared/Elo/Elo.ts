export const getElo = function(elo: number) {
    switch(true) {
        case (elo > 2000):
            return {name: "GAME_ELO_CHALLENGER", value: 0}

        case (elo > 1900):
            return {name: "GAME_ELO_CHAMPION", value: 5}

        case (elo > 1800):
            return {name: "GAME_ELO_CHAMPION", value: 4}

        case (elo > 1700):
            return {name: "GAME_ELO_CHAMPION", value: 3}

        case (elo > 1600):
            return {name: "GAME_ELO_CHAMPION", value: 2}

        case (elo > 1500):
            return {name: "GAME_ELO_CHAMPION", value: 1}

        case (elo > 1400):
            return {name: "GAME_ELO_DIAMOND", value: 5}

        case (elo > 1300):
            return {name: "GAME_ELO_DIAMOND", value: 4}

        case (elo > 1200):
            return {name: "GAME_ELO_DIAMOND", value: 3}

        case (elo > 1100):
            return {name: "GAME_ELO_DIAMOND", value: 2}

        case (elo > 1000):
            return {name: "GAME_ELO_DIAMOND", value: 1}

        case (elo > 900):
            return {name: "GAME_ELO_PLATINIUM", value: 5}

        case (elo > 850):
            return {name: "GAME_ELO_PLATINIUM", value: 4}

        case (elo > 800):
            return {name: "GAME_ELO_PLATINIUM", value: 3}

        case (elo > 750):
            return {name: "GAME_ELO_PLATINIUM", value: 2}

        case (elo > 700):
            return {name: "GAME_ELO_PLATINIUM", value: 1}

        case (elo > 650):
            return {name: "GAME_ELO_GOLD", value: 5}

        case (elo > 600):
            return {name: "GAME_ELO_GOLD", value: 4}

        case (elo > 550):
            return {name: "GAME_ELO_GOLD", value: 3}

        case (elo > 500):
            return {name: "GAME_ELO_GOLD", value: 2}

        case (elo > 450):
            return {name: "GAME_ELO_GOLD", value: 1}

        case (elo > 400):
            return {name: "GAME_ELO_BRONZE", value: 5}

        case (elo > 350):
            return {name: "GAME_ELO_BRONZE", value: 4}

        case (elo > 300):
            return {name: "GAME_ELO_BRONZE", value: 3}

        case (elo > 250):
            return {name: "GAME_ELO_BRONZE", value: 2}

        case (elo > 200):
            return {name: "GAME_ELO_BRONZE", value: 1}

        case (elo > 150):
            return {name: "GAME_ELO_IRON", value: 5}

        case (elo > 100):
            return {name: "GAME_ELO_IRON", value: 4}

        case (elo > 50):
            return {name: "GAME_ELO_IRON", value: 3}

        case (elo > 25):
            return {name: "GAME_ELO_IRON", value: 2}

        default:
            return {name: "GAME_ELO_IRON", value: 1}
    }
}