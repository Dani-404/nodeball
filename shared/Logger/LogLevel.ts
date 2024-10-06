const LogLevel = {
    INFO: {
        level: 0,
        name: "INFO",
        bgColor: "\x1b[44m",
        bgWebColor: "#19689B"
    },
    WARNING: {
        level: 0,
        name: "WARNING",
        bgColor: "\x1b[43m",
        bgWebColor: "#CF7E0F"
    },
    ERROR: {
        level: 0,
        name: "ERROR",
        bgColor: "\x1b[41m",
        bgWebColor: "#AF1B1B"
    },
    CRITICAL_ERROR: {
        level: 0,
        name: "CRITICAL ERROR",
        bgColor: "\x1b[41m",
        bgWebColor: "#AF1B1B"
    },
    SUCCESS: {
        level: 0,
        name: "SUCCESS",
        bgColor: "\x1b[42m",
        bgWebColor: "#167C43"
    },
    DEBUG: {
        level: 1,
        name: "DEBUG",
        bgColor: "\x1b[46m",
        bgWebColor: "#951D8A"
    },
    VERBOSE: {
        level: 2,
        name: "VERBOSE",
        bgColor: "\x1b[45m",
        bgWebColor: "#918D12"
    }
} as const;

export default LogLevel;