import LogLevel from "./LogLevel";

export default class Logger {
    sendLog(logKey: keyof typeof LogLevel, message: string): void {
        if(typeof window === 'undefined')
            console.log(LogLevel[logKey].bgColor, LogLevel[logKey].name, "\x1b[0m", message);
        else
            console.log(`%c ${LogLevel[logKey].name} %c ${message}`, `background-color: ${LogLevel[logKey].bgWebColor}; color: #FFF; font-weight: bold`, `background-color: inherit; color: inherit`)
    }

    sendCriticalError(message: string): void {
        this.sendLog("CRITICAL_ERROR", message);

        if(typeof window === 'undefined')
            process.exit;
    }
}