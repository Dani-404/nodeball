/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/Config/Config.ts":
/*!*********************************!*\
  !*** ./client/Config/Config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    NAME: "NodeBall",
    //SERVER_HOST: "141.95.17.48",
    SERVER_HOST: "127.0.0.1",
    SERVER_PORT: 8090,
    SERVER_UPDATE_INTERVAL: 60
};


/***/ }),

/***/ "./client/Config/Resources.ts":
/*!************************************!*\
  !*** ./client/Config/Resources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Resources = void 0;
exports.Resources = {
    // AUDIO
    KICK: "kick.wav",
    JOIN: "join.wav",
    LEAVE: "leave.wav",
    HIGHLIGHT: "highlight.wav",
    CROWD: "crowd.wav",
    CHAT: "chat.wav",
    GOAL: "goal.wav",
    NOTIF: "notif.mp3",
    // IMAGES
    TILE_GRASS: "grass.png",
    TILE_HOCKEY: "hockey.png",
    AVATAR_1: "avatars/1.svg",
    AVATAR_2: "avatars/2.svg",
    AVATAR_3: "avatars/3.svg",
    AVATAR_4: "avatars/4.svg",
    AVATAR_5: "avatars/5.svg",
    AVATAR_6: "avatars/6.svg",
    AVATAR_7: "avatars/7.svg",
    AVATAR_8: "avatars/8.svg",
    AVATAR_9: "avatars/9.svg",
    AVATAR_10: "avatars/10.svg",
    AVATAR_11: "avatars/11.svg",
    AVATAR_12: "avatars/12.svg",
    AVATAR_13: "avatars/13.svg",
    AVATAR_14: "avatars/14.svg",
    AVATAR_15: "avatars/15.svg",
    AVATAR_16: "avatars/16.svg",
    AVATAR_17: "avatars/17.svg",
    AVATAR_18: "avatars/18.svg",
    AVATAR_19: "avatars/19.svg",
    AVATAR_20: "avatars/20.svg",
    AVATAR_21: "avatars/21.svg",
    AVATAR_22: "avatars/22.svg",
    AVATAR_23: "avatars/23.svg",
    AVATAR_24: "avatars/24.svg",
    AVATAR_25: "avatars/25.svg",
    AVATAR_26: "avatars/26.svg",
    AVATAR_27: "avatars/27.svg",
    AVATAR_28: "avatars/28.svg",
    AVATAR_29: "avatars/29.svg",
    AVATAR_30: "avatars/30.svg",
    AVATAR_31: "avatars/31.svg",
    AVATAR_32: "avatars/32.svg",
    AVATAR_33: "avatars/33.svg",
    AVATAR_34: "avatars/34.svg",
    AVATAR_35: "avatars/35.svg",
    AVATAR_36: "avatars/36.svg",
    AVATAR_37: "avatars/37.svg",
    AVATAR_38: "avatars/38.svg",
    AVATAR_39: "avatars/39.svg",
    AVATAR_40: "avatars/40.svg",
    AVATAR_41: "avatars/41.svg",
    AVATAR_42: "avatars/42.svg",
    AVATAR_43: "avatars/43.svg",
    AVATAR_44: "avatars/44.svg",
    AVATAR_45: "avatars/45.svg",
    AVATAR_46: "avatars/46.svg",
    AVATAR_47: "avatars/47.svg",
    AVATAR_48: "avatars/48.svg",
    AVATAR_49: "avatars/49.svg",
    AVATAR_50: "avatars/50.svg",
    AVATAR_51: "avatars/51.svg",
    AVATAR_52: "avatars/52.svg",
    AVATAR_53: "avatars/53.svg",
    AVATAR_54: "avatars/54.svg",
    AVATAR_55: "avatars/55.svg",
    AVATAR_56: "avatars/56.svg",
    AVATAR_57: "avatars/57.svg",
    AVATAR_58: "avatars/58.svg",
    AVATAR_59: "avatars/59.svg",
    AVATAR_60: "avatars/60.svg",
    AVATAR_61: "avatars/61.svg",
    AVATAR_62: "avatars/62.svg",
    AVATAR_63: "avatars/63.svg",
    AVATAR_64: "avatars/64.svg",
    AVATAR_65: "avatars/65.svg",
    AVATAR_66: "avatars/66.svg",
    AVATAR_67: "avatars/67.svg",
    AVATAR_68: "avatars/68.svg",
    AVATAR_69: "avatars/69.svg",
    AVATAR_70: "avatars/70.svg",
    AVATAR_71: "avatars/71.svg",
    AVATAR_72: "avatars/72.svg",
    AVATAR_73: "avatars/73.svg",
    AVATAR_74: "avatars/74.svg",
    AVATAR_75: "avatars/75.svg",
    AVATAR_76: "avatars/76.svg",
    AVATAR_77: "avatars/77.svg",
    AVATAR_78: "avatars/78.svg",
    AVATAR_79: "avatars/79.svg",
    AVATAR_80: "avatars/80.svg",
    AVATAR_81: "avatars/81.svg",
    AVATAR_82: "avatars/82.svg",
    AVATAR_83: "avatars/83.svg",
    AVATAR_84: "avatars/84.svg",
    AVATAR_85: "avatars/85.svg",
    AVATAR_86: "avatars/86.svg",
    AVATAR_87: "avatars/87.svg",
    AVATAR_88: "avatars/88.svg",
    AVATAR_89: "avatars/89.svg",
    AVATAR_90: "avatars/90.svg",
    AVATAR_91: "avatars/91.svg",
    AVATAR_92: "avatars/92.svg",
    AVATAR_93: "avatars/93.svg",
    AVATAR_94: "avatars/94.svg",
    AVATAR_95: "avatars/95.svg",
    AVATAR_96: "avatars/96.svg",
    AVATAR_97: "avatars/97.svg",
    AVATAR_98: "avatars/98.svg",
    AVATAR_99: "avatars/99.svg",
    AVATAR_100: "avatars/100.svg",
    AVATAR_101: "avatars/101.svg",
    AVATAR_102: "avatars/102.svg",
    AVATAR_103: "avatars/103.svg",
    AVATAR_104: "avatars/104.svg",
    AVATAR_105: "avatars/105.svg",
    AVATAR_106: "avatars/106.svg",
    AVATAR_107: "avatars/107.svg",
    AVATAR_108: "avatars/108.svg",
    AVATAR_109: "avatars/109.svg",
    AVATAR_110: "avatars/110.svg",
    AVATAR_111: "avatars/111.svg",
    AVATAR_112: "avatars/112.svg",
    AVATAR_113: "avatars/113.svg",
    AVATAR_114: "avatars/114.svg",
    AVATAR_115: "avatars/115.svg",
    AVATAR_116: "avatars/116.svg",
    AVATAR_117: "avatars/117.svg",
    AVATAR_118: "avatars/118.svg",
    AVATAR_119: "avatars/119.svg",
    AVATAR_120: "avatars/120.svg",
    AVATAR_121: "avatars/121.svg",
    AVATAR_122: "avatars/122.svg",
    AVATAR_123: "avatars/123.svg",
    AVATAR_124: "avatars/124.svg",
    AVATAR_125: "avatars/125.svg",
    AVATAR_126: "avatars/126.svg",
    AVATAR_127: "avatars/127.svg",
    AVATAR_128: "avatars/128.svg",
    AVATAR_129: "avatars/129.svg",
    AVATAR_130: "avatars/130.svg",
    AVATAR_131: "avatars/131.svg",
    AVATAR_132: "avatars/132.svg",
    AVATAR_133: "avatars/133.svg",
    AVATAR_134: "avatars/134.svg",
    AVATAR_135: "avatars/135.svg",
    AVATAR_136: "avatars/136.svg",
    AVATAR_137: "avatars/137.svg",
    AVATAR_138: "avatars/138.svg",
    AVATAR_139: "avatars/139.svg",
    AVATAR_140: "avatars/140.svg",
    AVATAR_141: "avatars/141.svg",
    AVATAR_142: "avatars/142.svg",
    AVATAR_143: "avatars/143.svg",
    AVATAR_144: "avatars/144.svg",
    AVATAR_145: "avatars/145.svg",
    AVATAR_146: "avatars/146.svg",
    AVATAR_147: "avatars/147.svg",
    AVATAR_148: "avatars/148.svg",
    AVATAR_149: "avatars/149.svg",
    AVATAR_150: "avatars/150.svg",
    AVATAR_151: "avatars/151.svg",
    AVATAR_152: "avatars/152.svg",
    AVATAR_153: "avatars/153.svg",
    AVATAR_154: "avatars/154.svg",
    AVATAR_155: "avatars/155.svg",
    AVATAR_156: "avatars/156.svg",
    AVATAR_157: "avatars/157.svg",
    AVATAR_158: "avatars/158.svg",
    AVATAR_159: "avatars/159.svg",
    AVATAR_160: "avatars/160.svg",
    AVATAR_161: "avatars/161.svg",
    AVATAR_162: "avatars/162.svg",
    AVATAR_163: "avatars/163.svg",
    AVATAR_164: "avatars/164.svg",
    AVATAR_165: "avatars/165.svg",
    AVATAR_166: "avatars/166.svg",
    AVATAR_167: "avatars/167.svg",
    AVATAR_168: "avatars/168.svg",
    AVATAR_169: "avatars/169.svg",
    AVATAR_170: "avatars/170.svg",
    AVATAR_171: "avatars/171.svg",
    AVATAR_172: "avatars/172.svg",
    AVATAR_173: "avatars/173.svg",
    AVATAR_174: "avatars/174.svg",
    AVATAR_175: "avatars/175.svg",
    AVATAR_176: "avatars/176.svg",
    AVATAR_177: "avatars/177.svg",
    AVATAR_178: "avatars/178.svg",
    AVATAR_179: "avatars/179.svg",
    AVATAR_180: "avatars/180.svg",
    AVATAR_181: "avatars/181.svg",
    AVATAR_182: "avatars/182.svg",
    AVATAR_183: "avatars/183.svg",
    AVATAR_184: "avatars/184.svg",
    AVATAR_185: "avatars/185.svg",
    AVATAR_186: "avatars/186.svg",
    AVATAR_187: "avatars/187.svg",
    AVATAR_188: "avatars/188.svg",
    AVATAR_189: "avatars/189.svg",
    AVATAR_190: "avatars/190.svg",
    AVATAR_191: "avatars/191.svg",
    AVATAR_192: "avatars/192.svg",
    AVATAR_193: "avatars/193.svg",
    AVATAR_194: "avatars/194.svg",
    AVATAR_195: "avatars/195.svg",
    AVATAR_196: "avatars/196.svg",
    AVATAR_197: "avatars/197.svg",
    AVATAR_198: "avatars/198.svg",
    AVATAR_199: "avatars/199.svg",
    AVATAR_200: "avatars/200.svg",
    AVATAR_201: "avatars/201.svg",
    AVATAR_202: "avatars/202.svg",
    AVATAR_203: "avatars/203.svg",
    AVATAR_204: "avatars/204.svg",
    AVATAR_205: "avatars/205.svg",
    AVATAR_206: "avatars/206.svg",
    AVATAR_207: "avatars/207.svg",
    AVATAR_208: "avatars/208.svg",
    AVATAR_209: "avatars/209.svg",
    AVATAR_210: "avatars/210.svg",
    AVATAR_211: "avatars/211.svg",
    AVATAR_212: "avatars/212.svg",
    AVATAR_213: "avatars/213.svg",
    AVATAR_214: "avatars/214.svg",
    AVATAR_215: "avatars/215.svg",
    AVATAR_216: "avatars/216.svg",
    AVATAR_217: "avatars/217.svg",
    AVATAR_218: "avatars/218.svg",
    AVATAR_219: "avatars/219.svg",
    AVATAR_220: "avatars/220.svg",
    AVATAR_221: "avatars/221.svg",
    AVATAR_222: "avatars/222.svg",
    AVATAR_223: "avatars/223.svg",
    AVATAR_224: "avatars/224.svg",
    AVATAR_225: "avatars/225.svg",
    AVATAR_226: "avatars/226.svg",
    AVATAR_227: "avatars/227.svg",
    AVATAR_228: "avatars/228.svg",
    AVATAR_229: "avatars/229.svg",
    AVATAR_230: "avatars/230.svg",
    AVATAR_231: "avatars/231.svg",
    AVATAR_232: "avatars/232.svg",
    AVATAR_233: "avatars/233.svg",
    AVATAR_234: "avatars/234.svg",
    AVATAR_235: "avatars/235.svg",
    AVATAR_236: "avatars/236.svg",
    AVATAR_237: "avatars/237.svg",
    AVATAR_238: "avatars/238.svg",
    AVATAR_239: "avatars/239.svg",
    AVATAR_240: "avatars/240.svg",
    AVATAR_241: "avatars/241.svg",
    AVATAR_242: "avatars/242.svg",
    AVATAR_243: "avatars/243.svg",
    AVATAR_244: "avatars/244.svg",
    AVATAR_245: "avatars/245.svg",
    AVATAR_246: "avatars/246.svg",
    AVATAR_247: "avatars/247.svg",
    AVATAR_248: "avatars/248.svg",
    AVATAR_249: "avatars/249.svg",
    AVATAR_250: "avatars/250.svg",
    AVATAR_251: "avatars/251.svg",
    AVATAR_252: "avatars/252.svg",
    AVATAR_253: "avatars/253.svg",
    AVATAR_254: "avatars/254.svg",
    AVATAR_255: "avatars/255.svg",
    AVATAR_256: "avatars/256.svg",
    AVATAR_257: "avatars/257.svg",
    AVATAR_258: "avatars/258.svg",
    AVATAR_259: "avatars/259.svg",
    AVATAR_260: "avatars/260.svg",
    AVATAR_261: "avatars/261.svg",
    AVATAR_262: "avatars/262.svg",
    AVATAR_263: "avatars/263.svg",
    AVATAR_264: "avatars/264.svg",
    AVATAR_265: "avatars/265.svg",
    AVATAR_266: "avatars/266.svg",
    AVATAR_267: "avatars/267.svg",
    AVATAR_268: "avatars/268.svg",
    AVATAR_269: "avatars/269.svg",
    AVATAR_270: "avatars/270.svg",
};


/***/ }),

/***/ "./client/Language/LanguageList.ts":
/*!*****************************************!*\
  !*** ./client/Language/LanguageList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const EN_1 = __webpack_require__(/*! ./List/EN */ "./client/Language/List/EN.ts");
const FR_1 = __webpack_require__(/*! ./List/FR */ "./client/Language/List/FR.ts");
exports["default"] = {
    EN: EN_1.EN,
    FR: FR_1.FR
};


/***/ }),

/***/ "./client/Language/LanguageManager.ts":
/*!********************************************!*\
  !*** ./client/Language/LanguageManager.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./client/main.ts"));
const LanguageList_1 = __importDefault(__webpack_require__(/*! ./LanguageList */ "./client/Language/LanguageList.ts"));
class LanguageManager {
    constructor() {
        this.defaultLanguage = LanguageList_1.default.EN;
        this.activeLanguage = null;
    }
    init() {
        main_1.default.logger.sendLog("INFO", "Initiliazing languages...");
        const languageStored = localStorage.getItem("language");
        if (languageStored != null)
            return this.setLanguage(languageStored);
        const userLanguage = window.navigator.language || window.navigator.userLanguage;
        if (userLanguage != null)
            this.setLanguage(userLanguage.substring(0, 2));
        else
            this.activeLanguage = this.defaultLanguage;
    }
    setLanguage(code) {
        const languageValue = this.getLanguageByCode(code);
        if (languageValue != null) {
            localStorage.setItem("language", code.toUpperCase());
            this.activeLanguage = languageValue;
        }
        else
            this.activeLanguage = this.defaultLanguage;
    }
    getLanguageByCode(code) {
        for (let i in LanguageList_1.default) {
            if (code.toUpperCase() == i)
                return LanguageList_1.default[i];
        }
        return null;
    }
    getAvailableLanguages() {
        const availableLanguage = [];
        for (let i in LanguageList_1.default) {
            availableLanguage.push(i);
        }
        return availableLanguage;
    }
    getValueForKey(key, params = []) {
        if (this.activeLanguage != null && this.activeLanguage[key] != null) {
            params.forEach((param, index) => {
                if (param != null && param.toString().startsWith("%TRAD_"))
                    params[index] = this.getValueForKey(param.replace("%TRAD_", ""));
            });
            return this.activeLanguage[key].supplant(params);
        }
        else {
            if (this.defaultLanguage[key] != null) {
                params.forEach((param, index) => {
                    if (param != null && param.toString().startsWith("%TRAD_"))
                        params[index] = this.getValueForKey(param.replace("%TRAD_", ""));
                });
                return this.defaultLanguage[key].supplant(params);
            }
        }
        return "Missing key: " + key;
    }
}
exports["default"] = LanguageManager;


/***/ }),

/***/ "./client/Language/List/EN.ts":
/*!************************************!*\
  !*** ./client/Language/List/EN.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EN = void 0;
exports.EN = {
    CODE: "EN",
    // LOADING
    LOADING_MESSAGE: "Initializing {0}...",
    LOADING_RESOURCES: "Loading resources...",
    LOADING_CONNECTION_TO_MAIN_SERVER: "Connecting to main server...",
    LOADING_FETCHING_REGION_SERVERS: "Fetching region servers...",
    // GENERIC_ERROR
    GENERIC_ERROR_CONNECTION_LOSTED: "Connection to server losted.",
    GENERIC_ERROR_SERVERS: "An error occurred with servers.",
    GENERIC_ERROR_NO_SERVER_AVAILABLE: "There are no servers available.",
    // ACCOUNT
    ACCOUNT_LANGUAGE: "Language",
    ACCOUNT_LOGIN: "Login",
    ACCOUNT_REGISTER: "Register",
    ACCOUNT_USERNAME: "Username",
    ACCOUNT_PASSWORD: "Password",
    ACCOUNT_CONFIRM_PASSWORD: "Confirm your password",
    ACCOUNT_SERVER: "Server [{0}] - Ping: {1}ms",
    // ACCOUNT_ERROR
    ACCOUNT_ERROR_BANNED: "You are banned until the {0}.",
    ACCOUNT_ERROR_OCCURED: "An error occured, please reload the page.",
    ACCOUNT_ERROR_FIELDS: "Please complete all fields.",
    ACCOUNT_ERROR_ALREADY_LOGGED: "You are already logged.",
    ACCOUNT_ERROR_INVALID: "Invalid username or password.",
    ACCOUNT_ERROR_USERNAME_LENGTH: "Your nickname must be between 3 and 15 characters long.",
    ACCOUNT_ERROR_USERNAME_ALPHANUMERIC: "Your nickname must be alphanumeric.",
    ACCOUNT_ERROR_USERNAME_ALREADY_USED: "Your nickname is already used.",
    ACCOUNT_ERROR_USERNAME_START_NUMBER: "Your nickname cannot start with a number.",
    ACCOUNT_ERROR_PASSWORD_LENGTH: "Your password must be at least 6 characters long.",
    ACCOUNT_ERROR_PASSWORDS_DIFFERENT: "Your two passwords are different.",
    ACCOUNT_INVALID_SERVER: "The selected server is not available.",
    // GAME
    // GAME_GENERAL
    GAME_GENERAL_LOADING: "Loading...",
    GAME_GENERAL_CLOSE: "Close",
    GAME_GENERAL_OVERTIME: "Overtime!",
    GAME_GENERAL_PAUSE: "Pause",
    GAME_GENERAL_OWN_GOAL: "Own goal by <span class='{0}'>{1}</span>!",
    GAME_GENERAL_GOAL: "Goal by <span class='{0}'>{1}</span>!",
    GAME_GENERAL_NOT_AVAILABLE: "Not available yet...",
    GAME_GENERAL_TEAM: "Team",
    GAME_GENERAL_PLAYER: "Player",
    GAME_GENERAL_BY_PLAYER: "By player",
    GAME_GENERAL_ACTION: "Action",
    GAME_GENERAL_DATE: "Date",
    GAME_GENERAL_TYPE: "Type",
    GAME_GENERAL_EXPIRE: "Expire",
    GAME_GENERAL_VALIDATE: "Validate",
    // TEAM
    GAME_TEAM_SPECTATORS: "Spectators",
    GAME_TEAM_RED: "Red",
    GAME_TEAM_BLUE: "Blue",
    // GAME_CHAT
    GAME_CHAT_MESSAGE: "Message...",
    GAME_CHAT_OPTION_ROOM: "Room",
    GAME_CHAT_OPTION_TEAM: "Team",
    GAME_CHAT_ROOM_JOINED: "You just joined the room {0}, type /room <roomName> to change room.",
    GAME_CHAT_PM_FROM: "Whisper from {0}",
    GAME_CHAT_PM_TO: "Whisper to {0}",
    GAME_CHAT_PM_OFFLINE: "{0} is offline.",
    GAME_CHAT_FRIEND_ADDED: "{0} is now your friend.",
    GAME_CHAT_FRIEND_OTHER_ADDED: "{0} added you to their friends list. Type /friend {0} to add him back.",
    GAME_CHAT_FRIEND_OTHER_ADDED_BACK: "{0} added you back to their friend list.",
    GAME_CHAT_JOIN_ROOM: "{0} joined the room.",
    GAME_CHAT_LEFT_ROOM: "{0} left the room.",
    GAME_CHAT_FRIEND_LOGIN: "{0} just logged in.",
    GAME_CHAT_FRIEND_LOGOUT: "{0} just logged out.",
    GAME_CHAT_FRIEND_ERROR_MAX: "You have reached the limit of {0} friends.",
    GAME_CHAT_INVALID_COMMAND: "Invalid command.",
    GAME_CHAT_MUTED_MINUTES: "You are muted for {0} minute(s).",
    GAME_CHAT_MUTED_HOURS: "You are muted for {0} hours(s).",
    GAME_CHAT_NEW_REPORT: "New report by {0}.",
    GAME_CHAT_REPORTED: "{0} has been reported.",
    GAME_CHAT_ALREADY_REPORTED: "You have already reported {0}.",
    GAME_CHAT_REBOOT_CANCEL: "Server restart was canceled.",
    GAME_CHAT_REBOOT_MINUTES: "The server will restart in {0} minutes.",
    GAME_CHAT_REBOOT_SECONDS: "The server will restart in {0} seconds.",
    GAME_CHAT_LEVEL_UP: "You are now level {0}.",
    GAME_CHAT_RANK_UP: "You are now {0} {1}.",
    // GAME_USER_MENU
    GAME_USER_MENU_PROFILE: "Profile",
    GAME_USER_MENU_WHISPER: "Whisper",
    GAME_USER_MENU_FRIEND: "Add as friend",
    GAME_USER_MENU_REPORT: "Report",
    GAME_USER_MENU_MUTE: "Mute",
    GAME_USER_MENU_BAN: "Ban",
    // GAME_SETTINGS
    GAME_SETTINGS: "Settings",
    GAME_MENU_GRAPHICS: "Graphics",
    GAME_MENU_GRAPHICS_ZOOM: "Zoom",
    GAME_MENU_GRAPHICS_FPS: "FPS Limit",
    GAME_MENU_GRAPHICS_FPS_NO_LIMIT: "None",
    GAME_MENU_AUDIO: "Audio",
    GAME_MENU_AUDIO_GENERAL: "General",
    GAME_MENU_AUDIO_CHAT: "Chat",
    GAME_MENU_AUDIO_GAME: "Game",
    GAME_MENU_AUDIO_NOTIFICATION: "Notification",
    GAME_MENU_INPUTS: "Inputs",
    GAME_MENU_INPUTS_PRESS: "Press a key",
    GAME_MENU_INPUTS_UP: "Up",
    GAME_MENU_INPUTS_DOWN: "Down",
    GAME_MENU_INPUTS_LEFT: "Left",
    GAME_MENU_INPUTS_RIGHT: "Right",
    GAME_MENU_INPUTS_KICK: "Kick",
    GAME_MENU_INPUTS_TOGGLE_CHAT: "Toggle chat",
    // GAME_STATS
    GAME_STATS_REGISTERED: "Registered",
    GAME_STATS_LEVEL_XP: "Level",
    GAME_STATS_ELO: "Rank",
    GAME_STATS_GAMES: "Games",
    GAME_STATS_GAMES_PLAYED: "Games played",
    GAME_STATS_GAMES_WON: "Games won",
    GAME_STATS_GAMES_LOST: "Games lost",
    GAME_STATS_WIN_RATE: "Win rate",
    GAME_STATS_BEST_STREAK: "Best streak",
    GAME_STATS_GENERAL: "General stats",
    GAME_STATS_SHOTS: "Shots",
    GAME_STATS_SHOTS_PER_MATCH: "Shots per match",
    GAME_STATS_GOALS: "Goals",
    GAME_STATS_GOALS_PER_MATCH: "Goals per match",
    GAME_STATS_HAT_TRICKS: "Hat tricks",
    GAME_STATS_ASSISTS: "Assists",
    GAME_STATS_ASSISTS_PER_MATCH: "Assists per match",
    GAME_STATS_SAVES: "Saves",
    GAME_STATS_SAVES_PER_MATCH: "Saves per match",
    GAME_STATS_PASS_ACCURACY: "Pass accuracy",
    GAME_STATS_PASS_PER_MATCH: "Pass per match",
    GAME_STATS_GOALKEEPER: "Goalkeeper",
    GAME_STATS_PLAYED_GK: "Games played as goalkeeper",
    GAME_STATS_CS: "Clean sheets",
    GAME_STATS_CS_PERCENTAGE: "Clean sheets percentage",
    GAME_STATS_BADGES: "Badges unlocked",
    // GAME_LEADERBOARD
    GAME_LEADERBOARD: "Leaderboard",
    GAME_LEADERBOARD_FILTER: "Filter by",
    // GAME_FRIENDS
    GAME_FRIENDS: "Friends",
    GAME_FRIENDS_NONE: "Your friends list is empty.",
    // GAME_SHOP
    GAME_SHOP: "Shop",
    GAME_SHOP_CATEGORY_FLAGS: "Flags",
    GAME_SHOP_EQUIP: "Equip",
    GAME_SHOP_EQUIPED: "Equiped",
    // GAME_SANCTION
    GAME_SANCTION_MUTE: "{0} has been muted for {1} hour(s).",
    GAME_SANCTION_BAN: "{0} has been banned for {1} hour(s).",
    // GAME_ADMIN
    GAME_ADMIN: "Admin panel",
    GAME_ADMIN_TEAM: "Team",
    GAME_ADMIN_REPORTS: "Reports",
    GAME_ADMIN_SANCTION_MUTE: "Mute",
    GAME_ADMIN_SANCTION_BAN: "Ban",
    GAME_ADMIN_SANCTION_TIME: "Duration in hours",
    GAME_ADMIN_SANCTION_REASON: "Reason",
    GAME_ADMIN_SANCTIONS: "Sanctions",
    GAME_ADMIN_NEW_SANCTION: "New sanction",
    GAME_ADMIN_RANK: "Ranks",
    GAME_ADMIN_CHATLOGS: "Chat logs",
    GAME_ADMIN_ERROR_USERNAME: "This player does not exist.",
    GAME_ADMIN_ERROR_RANK: "{0} has already {1} rank.",
    GAME_ADMIN_SUCCESS_RANK: "{0} is now {1}.",
    GAME_ADMIN_ERROR_RANK_PERMS: "You can't change {0} rank.",
    GAME_ADMIN_ERROR_SANCTION_PERMS: "You can't sanctionate {0}.",
    GAME_ADMIN_ERROR_SANCTION_ALREADY_MUTED: "{0} is already muted.",
    GAME_ADMIN_ERROR_SANCTION_ALREADY_BAN: "{0} is already banned.",
    GAME_ADMIN_ERROR_SANCTION_DURATION: "The duration is invalid.",
    // GAME_RANK
    GAME_RANK_OWNER: "Owner",
    GAME_RANK_MANAGER: "Manager",
    GAME_RANK_ADMIN: "Admin",
    GAME_RANK_MOD: "Moderator",
    GAME_RANK_VIP: "VIP",
    GAME_RANK_USER: "User",
    // GAME_ELO
    GAME_ELO_IRON: "Iron",
    GAME_ELO_SILVER: "Silver",
    GAME_ELO_GOLD: "Gold",
    GAME_ELO_PLATINIUM: "Platinium",
    GAME_ELO_DIAMOND: "Diamond",
    GAME_ELO_CHAMPION: "Champion",
    GAME_ELO_CHALLENGER: "Challenger",
    // HISTORY
    HISTORY_MATCH_STARTED: "Match started",
    HISTORY_SHOT: "Shot by <span class='{0}'>{1}</span>",
    HISTORY_SAVE: "Save by <span class='{0}'>{1}</span>",
    HISTORY_GOAL: "Goal by <span class='{0}'>{1}</span>",
    HISTORY_GOAL_ASSISTED: "Goal by <span class='{0}'>{1}</span> assisted by <span class='{0}'>{2}</span>",
    HISTORY_OWN_GOAL: "Own goal by <span class='{0}'>{1}</span>",
    HISTORY_END_RED: "Red team won the game 🔴 {0} - {1} 🔵, possession 🔴 {2}% - {3}% 🔵",
    HISTORY_END_BLUE: "Blue team won the game 🔴 {0} - {1} 🔵, possession 🔴 {2}% - {3}% 🔵",
    // COPYRIGHT
    COPYRIGHT: "© {0}, developed with ♥ by OvB."
};


/***/ }),

/***/ "./client/Language/List/FR.ts":
/*!************************************!*\
  !*** ./client/Language/List/FR.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FR = void 0;
exports.FR = {
    CODE: "FR",
    // LOADING
    LOADING_MESSAGE: "Initialisation de {0}...",
    LOADING_RESOURCES: "Chargement des ressources...",
    LOADING_CONNECTION_TO_MAIN_SERVER: "Connexion au serveur principal...",
    LOADING_FETCHING_REGION_SERVERS: "Récupération des serveurs de région...",
    // GENERIC_ERROR
    GENERIC_ERROR_CONNECTION_LOSTED: "Connexion au serveur perdue.",
    GENERIC_ERROR_SERVERS: "Une erreur s'est produite avec les serveurs.",
    GENERIC_ERROR_NO_SERVER_AVAILABLE: "Il n'y a aucun serveur disponible.",
    // ACCOUNT
    ACCOUNT_LANGUAGE: "Langage",
    ACCOUNT_LOGIN: "Connexion",
    ACCOUNT_REGISTER: "Inscription",
    ACCOUNT_USERNAME: "Pseudonyme",
    ACCOUNT_PASSWORD: "Mot de passe",
    ACCOUNT_CONFIRM_PASSWORD: "Confirmez votre mot de passe",
    ACCOUNT_SERVER: "Serveur [{0}] - Ping: {1}ms",
    // ACCOUNT_ERROR
    ACCOUNT_ERROR_OCCURED: "Une erreur est survenue, veuillez recharger la page.",
    ACCOUNT_ERROR_FIELDS: "Merci de compléter tous les champs.",
    ACCOUNT_ERROR_ALREADY_LOGGED: "Vous êtes déjà connecté.",
    ACCOUNT_ERROR_INVALID: "Pseuonyme ou mot de passe invalide.",
    ACCOUNT_ERROR_USERNAME_LENGTH: "Votre pseudonyme doit faire entre 3 et 15 caractères.",
    ACCOUNT_ERROR_USERNAME_ALPHANUMERIC: "Votre pseudonyme doit être alphanumérique.",
    ACCOUNT_ERROR_PASSWORD_LENGTH: "Votre mot de passe doit faire 6 caractères minimum.",
    ACCOUNT_ERROR_PASSWORDS_DIFFERENT: "Vos deux mots de passe sont différents.",
    ACCOUNT_INVALID_SERVER: "Le serveur sélectionné n'est pas disponible.",
    // COPYRIGHT
    COPYRIGHT: "© {0}, développé avec ♥ par OvB."
};


/***/ }),

/***/ "./client/Ressource/ResourceManager.ts":
/*!*********************************************!*\
  !*** ./client/Ressource/ResourceManager.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Resources_1 = __webpack_require__(/*! ../Config/Resources */ "./client/Config/Resources.ts");
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./client/main.ts"));
class ResourceManager {
    constructor() {
        this.resources = {};
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                main_1.default.logger.sendLog("INFO", "Initiliazing resources...");
                main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                    message: main_1.default.languageManager.getValueForKey('LOADING_RESOURCES')
                });
                const listOfPromise = [];
                for (let i in Resources_1.Resources) {
                    listOfPromise.push(this.loadResource(i, Resources_1.Resources[i]));
                }
                Promise.all(listOfPromise).then(() => {
                    resolve("All resources have been loaded.");
                }).catch((e) => reject(e.toString()));
            });
        });
    }
    loadResource(key, fileName) {
        const instance = this;
        return new Promise((resolve, reject) => {
            if (fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".svg")) {
                const image = new Image();
                image.onload = function () {
                    instance.resources[`IMAGE_${key}`] = image;
                    resolve(`Image ${key} loaded.`);
                };
                image.onerror = function () {
                    reject(`Impossible to load image ${key}.`);
                };
                image.src = `assets/images/resources/${fileName}`;
            }
            else if (fileName.endsWith(".mp3") || fileName.endsWith(".wav")) {
                const audio = new Audio(`assets/audio/${fileName}`);
                audio.onloadeddata = function () {
                    instance.resources[`AUDIO_${key}`] = audio;
                    resolve(`Audio ${key} loaded.`);
                };
                audio.onerror = function () {
                    reject(`Impossible to load audio ${key}.`);
                };
            }
        });
    }
}
exports["default"] = ResourceManager;


/***/ }),

/***/ "./client/Room/Room.ts":
/*!*****************************!*\
  !*** ./client/Room/Room.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ShareableData_1 = __importDefault(__webpack_require__(/*! ../../shared/ShareableData/ShareableData */ "./shared/ShareableData/ShareableData.ts"));
class Room {
    constructor(data) {
        this.id = data.id;
        this.currentPlayers = data.currentPlayers;
        this.state = data.state;
        this.score = data.score;
        this.stadium = data.stadium;
        this.pickMode = data.pickMode;
        this.history = data.history;
        this.discHistory = {};
    }
    reorderPlayer(playersArray) {
        this.currentPlayers = playersArray;
    }
    getPlayer(playerId) {
        const player = this.currentPlayers.filter((player) => player.id == playerId)[0];
        if (player != null)
            return player;
        else
            return null;
    }
    playerJoin(player) {
        const playerData = this.getPlayer(player.id);
        if (playerData != null)
            return;
        this.currentPlayers.push(player);
    }
    playerLeave(playerId) {
        const playerData = this.getPlayer(playerId);
        if (playerData == null)
            return;
        this.currentPlayers = this.currentPlayers.filter(function (player) {
            return player.id != playerId;
        });
    }
    update(data) {
        this.currentPlayers = data.currentPlayers;
        this.state = data.state;
        this.score = data.score;
        this.stadium.discs = data.discs;
        for (let i in this.stadium.discs) {
            if (this.discHistory[i] == null)
                this.discHistory[i] = [];
            this.discHistory[i].push(new ShareableData_1.default(performance.now(), { x: this.stadium.discs[i].x, y: this.stadium.discs[i].y }));
        }
    }
}
exports["default"] = Room;


/***/ }),

/***/ "./client/Scene/List/GameScene.ts":
/*!****************************************!*\
  !*** ./client/Scene/List/GameScene.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Base_1 = __webpack_require__(/*! ../../../shared/Base/Base */ "./shared/Base/Base.ts");
const Color_1 = __importDefault(__webpack_require__(/*! ../../../shared/Color/Color */ "./shared/Color/Color.ts"));
const Elo_1 = __webpack_require__(/*! ../../../shared/Elo/Elo */ "./shared/Elo/Elo.ts");
const Level_1 = __webpack_require__(/*! ../../../shared/Level/Level */ "./shared/Level/Level.ts");
const RoomState_1 = __webpack_require__(/*! ../../../shared/RoomState/RoomState */ "./shared/RoomState/RoomState.ts");
const Team_1 = __importDefault(__webpack_require__(/*! ../../../shared/Team/Team */ "./shared/Team/Team.ts"));
const Config_1 = __importDefault(__webpack_require__(/*! ../../Config/Config */ "./client/Config/Config.ts"));
const main_1 = __importDefault(__webpack_require__(/*! ../../main */ "./client/main.ts"));
const Scene_1 = __importDefault(__webpack_require__(/*! ../Scene */ "./client/Scene/Scene.ts"));
class GameScene extends Scene_1.default {
    constructor(state) {
        super(state.name);
        this.state = {
            currentUser: state.params.currentUser,
            canvas: null,
            ctx: null,
            zIndex: 0,
            fps: 0,
            canvas_rect: [-150, -75, 150, 75],
            cameraFollow: { x: 0, y: 0 },
            unpauseInterval: 0,
            inputs: {
                left: false,
                right: false,
                up: false,
                down: false,
                kick: false
            },
            lastChangeFps: null,
            settings_category: "graphics",
            settings_record_input: null,
            focusUser: null
        };
    }
    setFps(val) {
        const fps = document.getElementById("fps");
        if (fps == null)
            return;
        const now = window.performance.now();
        this.state.fps = val;
        if (this.state.lastChangeFps != null && this.state.lastChangeFps + 1000 > now)
            return;
        this.state.lastChangeFps = now;
        fps.textContent = val.toString();
    }
    setState(params) {
        super.setState(params);
        for (let i in params) {
            this.state[i] = params[i];
        }
        this.render();
    }
    onWillInit() {
        super.onWillInit();
    }
    onInitialized() {
        super.onInitialized();
        this.state.canvas = document.getElementById("game");
        this.state.ctx = this.state.canvas.getContext("2d");
        Array.from(document.querySelectorAll('#settings .menu li')).forEach((element) => {
            element.addEventListener("click", this.setSettingsCategory.bind(this));
        });
        Array.from(document.querySelectorAll('#admin_menu li')).forEach((element) => {
            element.addEventListener("click", this.setAdminCategory.bind(this));
        });
        Array.from(document.querySelectorAll('#settings input, #settings select')).forEach((element) => {
            element.addEventListener("change", this.setSettings.bind(this));
        });
        const leaderboardFilter = document.getElementById("leaderboardFilter");
        if (leaderboardFilter != null)
            leaderboardFilter.addEventListener("change", this.requestLeaderboard.bind(this));
        const requestProfile = document.getElementById("request_profile");
        if (requestProfile != null)
            requestProfile.addEventListener("click", this.switchProfile.bind(this));
        Array.from(document.getElementsByClassName("general_menu")).forEach((el) => {
            Array.from(el.getElementsByTagName("div")).forEach((element) => {
                element.addEventListener("click", this.switchMenu.bind(this));
            });
        });
        Array.from(document.getElementsByClassName("pick_list_team")).forEach((el) => {
            el.addEventListener("dragover", (e) => e.preventDefault());
            el.addEventListener("drop", this.drop.bind(this));
        });
        const user_menu = document.getElementById("user_menu");
        if (user_menu != null) {
            const li = user_menu.getElementsByTagName("li");
            Array.from(li).forEach((element) => {
                element.addEventListener("click", this.userMenuItem.bind(this));
            });
        }
        Array.from(document.getElementsByClassName("close")).forEach((el) => {
            el.addEventListener("click", () => {
                if (el.parentNode != null && el.parentNode.parentNode != null && el.parentNode.parentNode.parentElement != null)
                    el.parentNode.parentNode.parentNode.style.display = "none";
            });
        });
        document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
        document.addEventListener('keyup', this.KeyUpHandler.bind(this), false);
        const chatForm = document.getElementById("chatForm");
        chatForm === null || chatForm === void 0 ? void 0 : chatForm.addEventListener("submit", this.sendChat.bind(this));
        this.renderMenu();
    }
    renderMenu() {
        Array.from(document.getElementsByClassName("general_menu")).forEach((el) => {
            Array.from(el.getElementsByTagName("div")).forEach((element) => {
                if (element.getAttribute("type") == "admin" && ["user", "vip"].includes(main_1.default.currentUser.rank))
                    element.style.display = "none";
                else
                    element.style.display = "block";
            });
        });
    }
    profileData(data) {
        const profile = document.getElementById("profile");
        if (profile == null)
            return;
        Array.from(profile.querySelectorAll("img, span")).forEach((el) => {
            const profile_data = el.getAttribute("profile_data");
            if (profile_data == null)
                return;
            if (profile_data == "username") {
                el.removeAttribute("class");
                el.classList.add(data.rank);
            }
            if (profile_data == "avatar")
                el.setAttribute("src", main_1.default.resourceManager.resources["IMAGE_AVATAR_" + data.avatar].src);
            if (profile_data == "online") {
                if (data.online)
                    el.classList.add("online");
                else
                    el.classList.remove("online");
            }
            else if (data[profile_data] != null)
                el.textContent = data[profile_data];
            else if (data.stats[profile_data] != null) {
                if (profile_data == "elo")
                    el.textContent = `${main_1.default.languageManager.getValueForKey((0, Elo_1.getElo)(data.stats.elo).name)} ${(0, Elo_1.getElo)(data.stats.elo).value} (${data.stats.elo})`;
                else if (profile_data == "level_xp") {
                    el.textContent = (0, Level_1.getLevel)(data.stats.level_xp).toString();
                }
                else {
                    el.textContent = data.stats[profile_data];
                    ["win_rate", "pass_accuracy", "cs_percentage"].includes(profile_data) ? el.textContent += "%" : null;
                }
            }
        });
        this.state.zIndex++;
        profile.style.zIndex = this.state.zIndex;
        profile.style.display = "block";
    }
    switchMenu(e) {
        this.state.zIndex++;
        switch (e.srcElement.getAttribute("type")) {
            case "shop": {
                this.switchShop();
                break;
            }
            case "friends": {
                this.switchFriends();
                break;
            }
            case "settings": {
                this.switchSettings();
                break;
            }
            case "menu": {
                this.switcMenu();
                break;
            }
            case "leaderboard": {
                this.switchLeaderboard();
                break;
            }
            case "admin": {
                this.switchAdmin();
                break;
            }
            case "team": {
                this.newChat({ type: "announcement", message: "GAME_GENERAL_NOT_AVAILABLE", color: Color_1.default.ROOM_ANNOUNCEMENT, sound: 1, officialTrad: true });
                break;
            }
        }
    }
    setSettings(e) {
        if (e.srcElement.checked != null)
            return main_1.default.settingsManager.setSettings(e.srcElement.getAttribute("settings_category"), e.srcElement.getAttribute("settings_val"), e.srcElement.checked);
        main_1.default.settingsManager.setSettings(e.srcElement.getAttribute("settings_category"), e.srcElement.getAttribute("settings_val"), e.srcElement.value);
    }
    setSettingsCategory(e) {
        this.state.settings_category = e.srcElement.getAttribute("category");
        Array.from(document.querySelectorAll('#settings .menu li')).forEach((element) => {
            if (element.getAttribute("category") == this.state.settings_category && !element.classList.contains("selected"))
                element.classList.add("selected");
            else
                element.classList.remove("selected");
        });
        this.reloadSettings();
    }
    removeKey(type, key) {
        main_1.default.settingsManager.removeKey(type, key);
        this.reloadSettings();
    }
    addHistory(data) {
        const history = document.getElementById("history");
        if (history == null)
            return;
        const div = document.createElement("div");
        div.classList.add("row");
        const icon = document.createElement("img");
        div.appendChild(icon);
        const info = document.createElement("div");
        const time = document.createElement("span");
        time.classList.add("time");
        time.textContent = this.fmtMSS(Math.floor(data.value.time));
        info.appendChild(time);
        const message = document.createElement("div");
        info.appendChild(message);
        div.appendChild(info);
        switch (data.key) {
            case "matchStarted": {
                history.innerHTML = "";
                icon.src = "assets/images/icons/whistle.png";
                message.textContent = main_1.default.languageManager.getValueForKey("HISTORY_MATCH_STARTED");
                break;
            }
            case "shot": {
                icon.src = "assets/images/icons/shot.png";
                message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_SHOT", [data.value.team.name, data.value.username]);
                break;
            }
            case "save": {
                icon.src = "assets/images/icons/save.png";
                message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_SAVE", [data.value.team.name, data.value.username]);
                break;
            }
            case "goal": {
                icon.src = "assets/images/icons/ball.png";
                const notif = document.getElementById("notif");
                if (notif != null) {
                    if (data.value.team.id != data.value.score_team.id)
                        notif.innerHTML = `${main_1.default.languageManager.getValueForKey("GAME_GENERAL_OWN_GOAL", [data.value.team.name, data.value.username])}`;
                    else
                        notif.innerHTML = `${main_1.default.languageManager.getValueForKey("GAME_GENERAL_GOAL", [data.value.team.name, data.value.username])}`;
                }
                if (data.value.team.id != data.value.score_team.id)
                    message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_OWN_GOAL", [data.value.team.name, data.value.username]);
                else if (data.value.assist_id != null)
                    message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_GOAL_ASSISTED", [data.value.team.name, data.value.username, data.value.assist_username]);
                else
                    message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_GOAL", [data.value.team.name, data.value.username]);
                break;
            }
            case "endGame": {
                icon.src = "assets/images/icons/whistle.png";
                if (data.value.score.red > data.value.score.blue)
                    message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_END_RED", [data.value.score.red, data.value.score.blue, data.value.possession.red, data.value.possession.blue]);
                else
                    message.innerHTML = main_1.default.languageManager.getValueForKey("HISTORY_END_BLUE", [data.value.score.red, data.value.score.blue, data.value.possession.red, data.value.possession.blue]);
                break;
            }
        }
        history.prepend(div);
    }
    recordKey(type) {
        const recordKey = document.getElementById("recordKey");
        if (recordKey == null)
            return;
        this.state.settings_record_input = type;
        this.state.inputs.up = false;
        this.state.inputs.down = false;
        this.state.inputs.left = false;
        this.state.inputs.right = false;
        this.state.inputs.kick = false;
        recordKey.style.display = "flex";
    }
    reloadSettings() {
        const settings = document.getElementById("settings"), recordKey = document.getElementById("recordKey");
        if (settings == null)
            return;
        if (recordKey != null)
            recordKey.style.display = "none";
        Array.from(settings.getElementsByClassName("category")).forEach((category) => {
            const category_name = category.getAttribute("category_name");
            if (category_name != null) {
                if (category_name == this.state.settings_category)
                    category.style.display = "block";
                else
                    category.style.display = "none";
            }
            Array.from(category.querySelectorAll("input, select, .inputs_value")).forEach((element) => {
                const settings_category = element.getAttribute("settings_category"), settings_val = element.getAttribute("settings_val");
                if (settings_category != null && settings_val != null) {
                    switch (settings_category) {
                        case "graphics": {
                            if (main_1.default.settingsManager.graphics[settings_val] != null) {
                                if (element.checked != null)
                                    element.checked = main_1.default.settingsManager.graphics[settings_val];
                                else
                                    element.value = main_1.default.settingsManager.graphics[settings_val];
                            }
                            break;
                        }
                        case "audio": {
                            if (main_1.default.settingsManager.audio[settings_val] != null) {
                                if (element.checked != null)
                                    element.checked = main_1.default.settingsManager.audio[settings_val];
                                else
                                    element.value = main_1.default.settingsManager.audio[settings_val];
                            }
                            break;
                        }
                        case "inputs": {
                            element.innerHTML = "";
                            if (main_1.default.settingsManager.inputs[settings_val] == null)
                                return;
                            main_1.default.settingsManager.inputs[settings_val].forEach((key) => {
                                const inputElement = document.createElement("div");
                                inputElement.classList.add("gameInput");
                                inputElement.textContent = key.toString().replace("Key", "");
                                const deleteInput = document.createElement("img");
                                deleteInput.src = "assets/images/icons/cross.svg";
                                deleteInput.addEventListener("click", () => this.removeKey(settings_val, key));
                                inputElement.appendChild(deleteInput);
                                element.appendChild(inputElement);
                            });
                            const inputElement = document.createElement("div");
                            inputElement.classList.add("gameInput");
                            const addInput = document.createElement("img");
                            addInput.classList.add("add");
                            addInput.src = "assets/images/icons/add.svg";
                            addInput.addEventListener("click", () => this.recordKey(settings_val));
                            inputElement.appendChild(addInput);
                            element.appendChild(inputElement);
                            break;
                        }
                    }
                }
            });
        });
    }
    switchProfile() {
        if (main_1.default.currentUser == null)
            return;
        const profile = document.getElementById("profile");
        if (profile == null)
            return;
        if (profile.style.display == "block") {
            profile.style.display = "none";
            return;
        }
        main_1.default.webSocketsManager.sendMsg("requestProfile", main_1.default.currentUser.username);
    }
    requestLeaderboard(e) {
        this.fetchLeaderboard(e.srcElement.value);
    }
    fetchLeaderboard(key) {
        const leaderboardContent = document.getElementById("leaderboardContent");
        if (leaderboardContent == null)
            return;
        leaderboardContent.innerHTML = `<div class="loader"></div>`;
        main_1.default.webSocketsManager.sendMsg("fetchLeaderboard", key);
    }
    setLeaderboardData(data) {
        const leaderboardContent = document.getElementById("leaderboardContent");
        if (leaderboardContent == null)
            return;
        leaderboardContent.innerHTML = ``;
        data.players.forEach((player, index) => {
            const div = document.createElement("div");
            div.classList.add("row");
            const avatar = document.createElement("img");
            avatar.src = main_1.default.resourceManager.resources["IMAGE_AVATAR_" + player.avatar].src;
            div.appendChild(avatar);
            const username = document.createElement("div");
            username.classList.add("username");
            username.textContent = player.username;
            div.appendChild(username);
            const rank = document.createElement("div");
            rank.classList.add("rank");
            rank.textContent = "#" + (index + 1).toString();
            div.appendChild(rank);
            const value = document.createElement("div");
            value.classList.add("value");
            if (["win_rate", "pass_accuracy", "cs_percentage"].includes(data.key))
                value.textContent = player.value + "%";
            else if (data.key == "level_xp")
                value.textContent = (0, Level_1.getLevel)(player.value).toString();
            else if (data.key == "elo")
                value.textContent = `${main_1.default.languageManager.getValueForKey((0, Elo_1.getElo)(player.value).name)} ${(0, Elo_1.getElo)(player.value).value} (${player.value})`;
            else
                value.textContent = player.value;
            div.appendChild(value);
            leaderboardContent.appendChild(div);
        });
    }
    hideMenu() {
        if (main_1.default.currentUser.currentRoom.state != RoomState_1.RoomState.KICK_OFF_RESET) {
            setTimeout(this.hideMenu.bind(this), 10);
            return;
        }
        const pick_list = document.getElementById("pick_list");
        if (pick_list == null)
            return;
        if (pick_list.style.display == "none")
            return;
        pick_list.style.display = "none";
    }
    showMenu() {
        const pick_list = document.getElementById("pick_list");
        if (pick_list == null)
            return;
        if (pick_list.style.display == "block")
            return;
        pick_list.style.display = "block";
    }
    switcMenu() {
        const pick_list = document.getElementById("pick_list");
        if (main_1.default.currentUser.currentRoom.state == RoomState_1.RoomState.GAME_ENDED || pick_list == null)
            return;
        if (pick_list.style.display == "block") {
            pick_list.style.display = "none";
            return;
        }
        pick_list.style.zIndex = this.state.zIndex;
        pick_list.style.display = "block";
    }
    renderAdmin(data) {
        const adminContent = document.getElementById("admin_content");
        if (adminContent == null)
            return;
        switch (data.category) {
            case "team": {
                adminContent.innerHTML = "";
                data.team.forEach((user) => {
                    const element = document.createElement("div");
                    element.classList.add("row");
                    const avatar = document.createElement("img");
                    avatar.src = main_1.default.resourceManager.resources["IMAGE_AVATAR_" + user.avatar].src;
                    avatar.classList.add("avatar");
                    element.appendChild(avatar);
                    const username = document.createElement("div");
                    username.classList.add("username");
                    username.textContent = user.username;
                    element.appendChild(username);
                    const rank = document.createElement("div");
                    rank.classList.add("value");
                    rank.classList.add(user.rank);
                    rank.textContent = main_1.default.languageManager.getValueForKey(`GAME_RANK_${user.rank.toUpperCase()}`);
                    element.appendChild(rank);
                    adminContent.appendChild(element);
                });
                break;
            }
            case "reports": {
                adminContent.innerHTML = `<div class="row info"><div style="width: 30%">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_PLAYER")}</div><div style="width: 30%"">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_BY_PLAYER")}</div><div style="width: 30%">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_DATE")}</div><div class="value">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_ACTION")}</div></div>`;
                data.reports.forEach((report) => {
                    const element = document.createElement("div");
                    element.classList.add("row");
                    const username = document.createElement("div");
                    username.style.width = "30%";
                    username.textContent = report.username;
                    element.appendChild(username);
                    const reported_username = document.createElement("div");
                    reported_username.style.width = "30%";
                    reported_username.textContent = report.reported_username;
                    element.appendChild(reported_username);
                    const date = document.createElement("div");
                    date.style.width = "30%";
                    date.textContent = report.date;
                    element.appendChild(date);
                    const action = document.createElement("div");
                    action.classList.add("value");
                    const chatLog = document.createElement("img");
                    chatLog.classList.add("icon");
                    chatLog.src = "assets/images/icons/chat.svg";
                    action.appendChild(chatLog);
                    chatLog.addEventListener("click", () => {
                        this.fetchAdminCategory("chatlogs", report.reported_username);
                    });
                    const deleteCross = document.createElement("img");
                    deleteCross.classList.add("icon");
                    deleteCross.src = "assets/images/icons/cross.svg";
                    action.appendChild(deleteCross);
                    deleteCross.addEventListener("click", () => {
                        main_1.default.webSocketsManager.sendMsg("deleteReport", report.id);
                    });
                    element.appendChild(action);
                    adminContent.appendChild(element);
                });
                break;
            }
            case "sanctions": {
                adminContent.innerHTML = `<div class="row info"><div style="width: 25%">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_PLAYER")}</div><div style="width: 25%"">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_BY_PLAYER")}</div><div style="width: 10%">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_TYPE")}</div><div style="width: 30%">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_EXPIRE")}</div><div class="value">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_ACTION")}</div></div>`;
                data.sanctions.forEach((sanction) => {
                    const element = document.createElement("div");
                    element.classList.add("row");
                    const username = document.createElement("div");
                    username.style.width = "25%";
                    username.textContent = sanction.username;
                    element.appendChild(username);
                    const by_username = document.createElement("div");
                    by_username.style.width = "25%";
                    by_username.textContent = sanction.by_player;
                    element.appendChild(by_username);
                    const type = document.createElement("div");
                    type.style.width = "10%";
                    type.textContent = main_1.default.languageManager.getValueForKey(`GAME_ADMIN_SANCTION_${sanction.type.toUpperCase()}`);
                    element.appendChild(type);
                    const date = document.createElement("div");
                    date.style.width = "30%";
                    date.textContent = sanction.end_date;
                    element.appendChild(date);
                    const action = document.createElement("div");
                    action.classList.add("value");
                    const chatLog = document.createElement("img");
                    chatLog.classList.add("icon");
                    chatLog.src = "assets/images/icons/chat.svg";
                    action.appendChild(chatLog);
                    chatLog.addEventListener("click", () => {
                        this.fetchAdminCategory("chatlogs", sanction.username);
                    });
                    const deleteCross = document.createElement("img");
                    deleteCross.classList.add("icon");
                    deleteCross.src = "assets/images/icons/cross.svg";
                    action.appendChild(deleteCross);
                    deleteCross.addEventListener("click", () => {
                        main_1.default.webSocketsManager.sendMsg("deleteSanction", sanction.id);
                    });
                    element.appendChild(action);
                    adminContent.appendChild(element);
                });
                break;
            }
            case "chatlogs": {
                adminContent.innerHTML = ``;
                data.logs.forEach((log) => {
                    const element = document.createElement("div");
                    element.classList.add("row");
                    const message = document.createElement("div");
                    message.textContent = log;
                    element.appendChild(message);
                    adminContent.appendChild(element);
                });
                break;
            }
        }
    }
    renderAdminAlert(data) {
        const admin_alert = document.getElementById("admin_alert");
        if (admin_alert == null)
            return;
        if (data.error)
            admin_alert.classList.add("error");
        else
            admin_alert.classList.remove("error");
        admin_alert.textContent = main_1.default.languageManager.getValueForKey(data.message, data.args);
        admin_alert.style.display = "block";
    }
    setRank(e) {
        e.preventDefault();
        const username = document.getElementById("rankUsername"), rank = document.getElementById("rankValue");
        main_1.default.webSocketsManager.sendMsg("adminRank", { username: username.value, rank: rank.value });
    }
    newSanction(e) {
        e.preventDefault();
        const username = document.getElementById("sanctionUsername"), type = document.getElementById("sanctionType"), time = document.getElementById("sanctionTime"), reason = document.getElementById("sanctionReason");
        main_1.default.webSocketsManager.sendMsg("adminSanction", { username: username.value, type: type.value, time: time.value, reason: reason.value });
    }
    fetchAdminCategory(type, args) {
        const adminTitle = document.getElementById("admin_title"), adminContent = document.getElementById("admin_content");
        if (adminTitle == null || adminContent == null)
            return;
        adminTitle.innerText = main_1.default.languageManager.getValueForKey(`GAME_ADMIN_${type.toUpperCase()}`);
        adminContent.innerHTML = `<div class="loader"></div>`;
        switch (type) {
            case "team": {
                main_1.default.webSocketsManager.sendMsg("fetchAdmin", { key: "team" });
                break;
            }
            case "reports": {
                main_1.default.webSocketsManager.sendMsg("fetchAdmin", { key: "reports" });
                break;
            }
            case "chatlogs": {
                main_1.default.webSocketsManager.sendMsg("fetchAdmin", { key: "chatlogs", username: args });
                break;
            }
            case "sanctions": {
                main_1.default.webSocketsManager.sendMsg("fetchAdmin", { key: "sanctions" });
                break;
            }
            case "new_sanction": {
                adminContent.innerHTML = `<div id="admin_alert"></div><form id="adminSanctionForm"><input type="text" id="sanctionUsername" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_USERNAME")}"/><select id="sanctionType"><option value="mute">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_SANCTION_MUTE")}</option><option value="ban">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_SANCTION_BAN")}</option></select><input type="text" id="sanctionTime" placeholder="${main_1.default.languageManager.getValueForKey("GAME_ADMIN_SANCTION_TIME")}"/><input type="text" id="sanctionReason" placeholder="${main_1.default.languageManager.getValueForKey("GAME_ADMIN_SANCTION_REASON")}" maxlength="150"/><input type="submit" value="${main_1.default.languageManager.getValueForKey("GAME_GENERAL_VALIDATE")}"></form>`;
                if (args != null && args.username != null) {
                    const usernameInput = document.getElementById("sanctionUsername");
                    if (usernameInput != null)
                        usernameInput.value = args.username;
                }
                if (args != null && args.type != null) {
                    const typeSelect = document.getElementById("sanctionType");
                    if (typeSelect != null)
                        typeSelect.value = args.type;
                }
                const form = document.getElementById("adminSanctionForm");
                if (form != null)
                    form.addEventListener("submit", this.newSanction);
                break;
            }
            case "rank": {
                adminContent.innerHTML = `<div id="admin_alert"></div><form id="adminRankForm"><input type="text" id="rankUsername" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_USERNAME")}"/><select id="rankValue"></select><input type="submit" value="${main_1.default.languageManager.getValueForKey("GAME_GENERAL_VALIDATE")}"></form>`;
                const rankValue = document.getElementById("rankValue");
                ["owner", "manager", "admin", "mod", "vip", "user"].forEach((rank) => {
                    const option = document.createElement("option");
                    option.value = rank;
                    option.textContent = main_1.default.languageManager.getValueForKey(`GAME_RANK_${rank.toUpperCase()}`);
                    rankValue === null || rankValue === void 0 ? void 0 : rankValue.appendChild(option);
                });
                const form = document.getElementById("adminRankForm");
                if (form != null)
                    form.addEventListener("submit", this.setRank);
                break;
            }
        }
    }
    setAdminCategory(e) {
        this.switchAdmin(e.srcElement.getAttribute("type"));
    }
    switchAdmin(type = null, args = null) {
        if (main_1.default.currentUser == null || ["user", "vip"].includes(main_1.default.currentUser.rank))
            return;
        const admin = document.getElementById("admin"), admin_menu = document.getElementById("admin_menu");
        if (admin == null || admin_menu == null)
            return;
        if (!type && admin.style.display == "block") {
            admin.style.display = "none";
            return;
        }
        if (type == null)
            type = "team";
        Array.from(admin_menu.getElementsByTagName("li")).forEach((el) => {
            if (el.getAttribute("type") == "rank" && !["owner", "manager"].includes(main_1.default.currentUser.rank))
                el.style.display = "none";
            if (el.getAttribute("type") == type)
                el.classList.add("active");
            else
                el.classList.remove("active");
        });
        this.fetchAdminCategory(type, args);
        admin.style.zIndex = this.state.zIndex;
        admin.style.display = "block";
    }
    switchLeaderboard() {
        if (main_1.default.currentUser == null)
            return;
        const leaderboard = document.getElementById("leaderboard"), leaderboardFilter = document.getElementById("leaderboardFilter");
        if (leaderboard == null || leaderboardFilter == null)
            return;
        if (leaderboard.style.display == "block") {
            leaderboard.style.display = "none";
            return;
        }
        if (leaderboardFilter.value.length == 0) {
            const availablesStats = ["elo", "level_xp", "games_played", "games_won", "games_lost", "win_rate", "best_streak", "shots", "shots_per_match", "goals", "goals_per_match", "hat_tricks", "assists", "assists_per_match", "saves", "saves_per_match", "pass_accuracy", "pass_per_match", "played_gk", "cs", "cs_percentage"];
            availablesStats.forEach((stat) => {
                const option = document.createElement("option");
                option.value = stat;
                option.textContent = main_1.default.languageManager.getValueForKey(`GAME_STATS_${stat.toUpperCase()}`);
                leaderboardFilter.appendChild(option);
            });
            this.fetchLeaderboard(availablesStats[0]);
        }
        else
            this.fetchLeaderboard(leaderboardFilter.value);
        leaderboard.style.zIndex = this.state.zIndex;
        leaderboard.style.display = "block";
    }
    switchSettings() {
        if (main_1.default.currentUser == null)
            return;
        const settings = document.getElementById("settings");
        if (settings == null)
            return;
        if (settings.style.display == "block") {
            settings.style.display = "none";
            return;
        }
        this.reloadSettings();
        settings.style.zIndex = this.state.zIndex;
        settings.style.display = "block";
    }
    reloadFriends() {
        const friendsList = document.getElementById("friendsList");
        if (main_1.default.currentUser == null || main_1.default.currentUser.friends == null || friendsList == null)
            return;
        friendsList.innerHTML = "";
        let count = 0;
        main_1.default.currentUser.friends.forEach((friend) => {
            var _a;
            count++;
            const div = document.createElement("div");
            div.classList.add("row");
            if (friend.online)
                div.classList.add("online");
            const user = document.createElement("div");
            user.classList.add("user");
            user.innerText = friend.username;
            if (friend.serverRegion != null) {
                const image = document.createElement("img");
                image.src = `assets/images/flags/region/${this.getRegionFlag(friend.serverRegion.region)}.svg`;
                user.prepend(image);
            }
            div.appendChild(user);
            const action = document.createElement("div");
            action.classList.add("action");
            if (friend.online) {
                const whisper = document.createElement("img");
                whisper.src = "assets/images/icons/chat.svg";
                whisper.addEventListener("click", () => this.whisper(friend.username));
                action.appendChild(whisper);
            }
            if (friend.serverRegion != null && friend.serverRegion.region == ((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentServer) && friend.serverRegion.currentRoom != null) {
                const join = document.createElement("img");
                join.setAttribute("room", friend.serverRegion.currentRoom);
                join.src = "assets/images/icons/chev_right.svg";
                action.appendChild(join);
            }
            const deleteFriend = document.createElement("img");
            deleteFriend.src = "assets/images/icons/cross.svg";
            deleteFriend.addEventListener("click", () => main_1.default.webSocketsManager.sendMsg("deleteFriend", friend.id));
            action.appendChild(deleteFriend);
            div.appendChild(action);
            friendsList.appendChild(div);
        });
        if (count == 0)
            friendsList.innerText = main_1.default.languageManager.getValueForKey("GAME_FRIENDS_NONE");
    }
    switchFriends() {
        if (main_1.default.currentUser == null)
            return;
        const friends = document.getElementById("friends");
        if (friends == null)
            return;
        if (friends.style.display == "block") {
            friends.style.display = "none";
            return;
        }
        this.reloadFriends();
        friends.style.zIndex = this.state.zIndex;
        friends.style.display = "block";
    }
    switchShop() {
        const shop = document.getElementById("shop");
        if (shop == null)
            return;
        if (shop.style.display == "block") {
            shop.style.display = "none";
            return;
        }
        shop.style.zIndex = this.state.zIndex;
        main_1.default.webSocketsManager.sendMsg("fetchShop");
    }
    fetchItemForCategory(e) {
        main_1.default.webSocketsManager.sendMsg("fetchItems", e.srcElement.value);
        const shopItems = document.getElementById("shopItems");
        if (shopItems == null)
            return;
        shopItems.innerHTML = "";
    }
    shopData(shopData) {
        const shop = document.getElementById("shop"), shopCoinVal = document.getElementById("shopCoinVal"), shopCategorys = document.getElementById("shopCategorys");
        if (shop == null || shopCoinVal == null || shopCategorys == null)
            return;
        if (main_1.default.currentUser != null)
            shopCoinVal.textContent = main_1.default.currentUser.coins.toString();
        shopCategorys.innerHTML = "";
        shopData.categorys.forEach((category, index) => {
            const div = document.createElement("div");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "SHOP_CATEGORY";
            input.id = category.name;
            input.value = category.name;
            input.addEventListener("click", this.fetchItemForCategory.bind(this));
            if (index == 0)
                input.checked = true;
            div.appendChild(input);
            const label = document.createElement("label");
            label.setAttribute("for", category.name);
            label.textContent = main_1.default.languageManager.getValueForKey("GAME_" + category.name);
            div.appendChild(label);
            shopCategorys.appendChild(div);
        });
        this.shopDataItems(shopData.items);
        shop.style.display = "block";
    }
    refreshShop() {
        const shop = document.getElementById("shop"), shopCoinVal = document.getElementById("shopCoinVal"), shopItems = document.getElementById("shopItems");
        if (shopCoinVal == null || shopItems == null || shop == null || shop.style.display == "none")
            return;
        if (main_1.default.currentUser != null)
            shopCoinVal.textContent = main_1.default.currentUser.coins.toString();
        Array.from(shopItems.getElementsByTagName("div")).filter((element) => element.classList.contains("row")).forEach((element, index) => {
            var _a, _b;
            element.className = 'row';
            const item_id = element.getAttribute("item_id"), price = element.getAttribute("price");
            const span = element.getElementsByTagName("span")[0];
            if (item_id == null || price == null || span == null)
                return;
            if (((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.avatar) == parseInt(item_id)) {
                element.classList.add("equiped");
                span.textContent = main_1.default.languageManager.getValueForKey("GAME_SHOP_EQUIPED");
            }
            else if ((_b = main_1.default.currentUser) === null || _b === void 0 ? void 0 : _b.items.includes(parseInt(item_id))) {
                span.textContent = main_1.default.languageManager.getValueForKey("GAME_SHOP_EQUIP");
            }
            else {
                if (main_1.default.currentUser != null && main_1.default.currentUser.coins < parseInt(price))
                    element.classList.add("cant_buy");
            }
        });
    }
    shopDataItems(items) {
        const shopItems = document.getElementById("shopItems");
        if (shopItems == null)
            return;
        shopItems.innerHTML = "";
        items.forEach((item) => {
            var _a, _b;
            const div = document.createElement("div");
            div.classList.add("row");
            div.setAttribute("item_id", item.id);
            div.setAttribute("price", item.price);
            const image = main_1.default.resourceManager.resources["IMAGE_AVATAR_" + item.id];
            if (image == null)
                return;
            const imageElement = document.createElement("img");
            imageElement.classList.add("item");
            imageElement.src = image.src;
            div.appendChild(imageElement);
            const action = document.createElement("div");
            action.classList.add("action");
            action.addEventListener("click", () => main_1.default.webSocketsManager.sendMsg("toggleItem", item.id));
            const span = document.createElement("span");
            if (((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.avatar) == item.id) {
                div.classList.add("equiped");
                span.textContent = main_1.default.languageManager.getValueForKey("GAME_SHOP_EQUIPED");
            }
            else if ((_b = main_1.default.currentUser) === null || _b === void 0 ? void 0 : _b.items.includes(item.id)) {
                span.textContent = main_1.default.languageManager.getValueForKey("GAME_SHOP_EQUIP");
            }
            else {
                if (main_1.default.currentUser != null && main_1.default.currentUser.coins < item.price)
                    div.classList.add("cant_buy");
                span.innerHTML = '<img src="assets/images/icons/coin.png"> ' + item.price;
            }
            action.appendChild(span);
            div.appendChild(action);
            shopItems.appendChild(div);
        });
    }
    sendChat(e) {
        e.preventDefault();
        const chatCategory = document.getElementById("msgType"), chatMsg = document.getElementById("chatMsg");
        if (chatCategory == null || chatCategory.value.length == 0 || chatMsg == null || chatMsg.value.length == 0)
            return;
        main_1.default.webSocketsManager.sendMsg("newChat", { type: chatCategory.value, message: chatMsg.value });
        chatMsg.value = "";
    }
    keyDownHandler(e) {
        const inputChat = document.getElementById("chatMsg");
        if (inputChat == null)
            return;
        if (this.state.settings_record_input && inputChat != document.activeElement) {
            main_1.default.settingsManager.setSettings("inputs", this.state.settings_record_input, e.code);
            this.state.settings_record_input = null;
            this.reloadSettings();
            return;
        }
        if (e.code.startsWith("Digit") && inputChat != document.activeElement) {
            const zoom = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];
            const zoomLevel = parseInt(e.code.replace("Digit", ""));
            if (zoom[zoomLevel - 1] != null) {
                main_1.default.settingsManager.setSettings("graphics", "zoom", zoom[zoomLevel - 1]);
                this.reloadSettings();
            }
            return;
        }
        if (e.code == "KeyP" && inputChat != document.activeElement) {
            const server = main_1.default.regionServerManager.getServerById(main_1.default.currentUser.currentServer);
            if (server != null)
                server.sendMsg("pause");
            return;
        }
        if (main_1.default.settingsManager.inputs.right.includes(e.code))
            this.state.inputs.right = true;
        if (main_1.default.settingsManager.inputs.left.includes(e.code))
            this.state.inputs.left = true;
        if (main_1.default.settingsManager.inputs.up.includes(e.code))
            this.state.inputs.up = true;
        if (main_1.default.settingsManager.inputs.down.includes(e.code))
            this.state.inputs.down = true;
        if (main_1.default.settingsManager.inputs.kick.includes(e.code))
            this.state.inputs.kick = true;
        if (inputChat === document.activeElement) {
            this.state.inputs.up = false;
            this.state.inputs.down = false;
            this.state.inputs.left = false;
            this.state.inputs.right = false;
            this.state.inputs.kick = false;
        }
        if (main_1.default.settingsManager.inputs.toggle_chat.includes(e.code)) {
            if ((inputChat === document.activeElement))
                setTimeout(() => this.state.canvas.focus(), 1);
            else {
                setTimeout(() => inputChat.focus(), 1);
            }
        }
    }
    KeyUpHandler(e) {
        if (main_1.default.settingsManager.inputs.right.includes(e.code))
            this.state.inputs.right = false;
        if (main_1.default.settingsManager.inputs.left.includes(e.code))
            this.state.inputs.left = false;
        if (main_1.default.settingsManager.inputs.up.includes(e.code))
            this.state.inputs.up = false;
        if (main_1.default.settingsManager.inputs.down.includes(e.code))
            this.state.inputs.down = false;
        if (main_1.default.settingsManager.inputs.kick.includes(e.code))
            this.state.inputs.kick = false;
    }
    onDestroy() {
        super.onDestroy();
        const chatForm = document.getElementById("chatForm");
        chatForm === null || chatForm === void 0 ? void 0 : chatForm.removeEventListener("chatForm", this.sendChat.bind(this), false);
        document.removeEventListener('keydown', this.keyDownHandler.bind(this), false);
        document.removeEventListener('keyup', this.KeyUpHandler.bind(this), false);
    }
    fmtMSS(s) {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
    }
    updateAvatar() {
        var _a;
        this.refreshShop();
        const avatar = document.getElementById("avatar");
        if (avatar == null)
            return;
        avatar.src = main_1.default.resourceManager.resources["IMAGE_AVATAR_" + ((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.avatar)].src;
    }
    initRoom(room) {
        const roomName = document.getElementById("roomName");
        if (roomName != null)
            roomName.textContent = room.id;
        const playersCount = document.getElementById("playersCount");
        if (playersCount != null)
            playersCount.textContent = room.currentPlayers.length.toString();
        this.updateScoreData(room.score);
        const list_users = document.getElementById("list_users");
        if (list_users != null)
            list_users.innerHTML = "";
        room.currentPlayers.forEach((player) => {
            const li = document.createElement("li");
            li.dataset.userId = player.id.toString();
            li.setAttribute("username", player.username);
            li.innerHTML = `${player.username} <span>${player.ping.toString()}</span>`;
            if (player.team.id == Team_1.default.RED.id)
                li.classList.add("red");
            else if (player.team.id == Team_1.default.BLUE.id)
                li.classList.add("blue");
            if (list_users != null)
                list_users.appendChild(li);
            li.addEventListener("click", this.showUserMenu.bind(this));
        });
        room.history.forEach((history) => this.addHistory(history));
        this.refreshPickList();
    }
    update(room) {
        this.updateScoreData(room.score);
        const list_users = document.getElementById("list_users");
        if (list_users != null) {
            room.currentPlayers.forEach((player) => {
                list_users.querySelectorAll("li").forEach(element => {
                    if (element.dataset.userId == player.id.toString()) {
                        if (player.team.id == Team_1.default.RED.id) {
                            if (element.classList.contains("blue"))
                                element.classList.remove("blue");
                            if (!element.classList.contains("red"))
                                element.classList.add("red");
                        }
                        else if (player.team.id == Team_1.default.BLUE.id) {
                            if (element.classList.contains("red"))
                                element.classList.remove("red");
                            if (!element.classList.contains("blue"))
                                element.classList.add("blue");
                        }
                        else if (element.classList.contains("red") || element.classList.contains("blue"))
                            element.classList.remove(...["red", "blue"]);
                        const ping = element.getElementsByTagName("span")[0];
                        if (ping != null && ping.textContent != player.ping.toString())
                            ping.textContent = player.ping.toString();
                    }
                });
            });
        }
    }
    setCameraFollow() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let centerX, centerY;
        const playerDisc = (_b = (_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentRoom) === null || _b === void 0 ? void 0 : _b.stadium.discs.filter((disc) => disc.player == main_1.default.currentUser.id)[0], ball = (_d = (_c = main_1.default.currentUser) === null || _c === void 0 ? void 0 : _c.currentRoom) === null || _d === void 0 ? void 0 : _d.stadium.discs[0];
        if (ball == null) {
            this.state.camera_follow = { x: 0, y: 0 };
            return;
        }
        const bottomContainerHeight = 160;
        centerX = (_f = (_e = main_1.default.currentUser) === null || _e === void 0 ? void 0 : _e.currentRoom) === null || _f === void 0 ? void 0 : _f.stadium.discs[0].x;
        centerY = (((_h = (_g = main_1.default.currentUser) === null || _g === void 0 ? void 0 : _g.currentRoom) === null || _h === void 0 ? void 0 : _h.stadium.discs[0].y) + bottomContainerHeight);
        if (playerDisc != null) {
            centerX = 0.5 * (centerX + playerDisc.x);
            centerY = 0.5 * (centerY + playerDisc.y);
            const midX = 0.5 * this.state.canvas.width, midY = 0.5 * this.state.canvas.height;
            const infX = playerDisc.x - midX + 50, infY = playerDisc.y - midY + 50, supX = playerDisc.x + midX - 50, supY = playerDisc.y + midY - 50;
            centerX = centerX > supX ? supX : centerX < infX ? infX : centerX;
            centerY = centerY > supY ? supY : centerY < infY ? infY : centerY;
        }
        let frames = 60 * (1 / this.state.fps);
        if (frames > 1)
            frames = 1;
        const smoothingRatio = 0.04;
        frames *= smoothingRatio;
        this.state.cameraFollow.x += (centerX - this.state.cameraFollow.x) * frames;
        this.state.cameraFollow.y += (centerY - this.state.cameraFollow.y) * frames;
        const room = main_1.default.currentUser.currentRoom;
        const margin = 125, canvasHeight = this.state.canvas.height - bottomContainerHeight, stadiumWidth = room.stadium.width + margin, stadiumHeight = room.stadium.height + margin;
        if (this.state.canvas.width > 2 * stadiumWidth) {
            this.state.cameraFollow.x = 0;
        }
        else if (this.state.cameraFollow.x + 0.5 * this.state.canvas.width > stadiumWidth) {
            this.state.cameraFollow.x = stadiumWidth - 0.5 * this.state.canvas.width;
        }
        else if (this.state.cameraFollow.x - 0.5 * this.state.canvas.width < -stadiumWidth) {
            this.state.cameraFollow.x = -stadiumWidth + 0.5 * this.state.canvas.width;
        }
        if (canvasHeight > 2 * stadiumHeight) {
            this.state.cameraFollow.y = 0;
        }
        else if (this.state.cameraFollow.y + 0.5 * canvasHeight > stadiumHeight) {
            this.state.cameraFollow.y = stadiumHeight - 0.5 * canvasHeight;
        }
        else if (this.state.cameraFollow.y - 0.5 * canvasHeight < -stadiumHeight) {
            this.state.cameraFollow.y = -stadiumHeight + 0.5 * canvasHeight;
        }
    }
    renderNotif(dt) {
        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
            return;
        const notif = document.getElementById("notif");
        if (notif == null)
            return;
        switch (main_1.default.currentUser.currentRoom.state) {
            case RoomState_1.RoomState.PAUSE: {
                this.state.canvas.classList.add("pause");
                notif.innerHTML = `${main_1.default.languageManager.getValueForKey("GAME_GENERAL_PAUSE")}`;
                if (notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }
            case RoomState_1.RoomState.UNPAUSE: {
                // TODO PLAYER JOIN ON UNPAUSE
                this.state.unpauseInterval -= (dt * 1000);
                this.state.canvas.classList.add("pause");
                notif.innerHTML = `${main_1.default.languageManager.getValueForKey("GAME_GENERAL_PAUSE")} <div id='pause' style='width: ${this.state.unpauseInterval * 100 / 3000}%'></div>`;
                if (notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }
            case RoomState_1.RoomState.GOAL_SCORE: {
                if (notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }
            default: {
                if (this.state.canvas.classList.length > 0)
                    this.state.canvas.classList = "";
                if (notif.style.display == "block")
                    notif.style.display = "none";
                notif.innerHTML = "";
                break;
            }
        }
    }
    renderGame(dt) {
        if (this.state.canvas == null || this.state.ctx == null || main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null || main_1.default.currentUser.currentRoom.stadium == null)
            return;
        if (main_1.default.currentUser.currentRoom.state == RoomState_1.RoomState.GAME_ENDED) {
            this.state.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.state.ctx.clearRect(0, 0, this.state.canvas_rect[2] - this.state.canvas_rect[0], this.state.canvas_rect[3] - this.state.canvas_rect[1]);
            this.renderNotif(dt);
            this.showMenu();
            return;
        }
        const server = main_1.default.regionServerManager.getServerById(main_1.default.currentUser.currentServer);
        if (server != null)
            server.sendMsg("inputs", this.state.inputs);
        this.resize_canvas();
        this.renderNotif(dt);
        this.state.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.state.ctx.clearRect(0, 0, this.state.canvas_rect[2] - this.state.canvas_rect[0], this.state.canvas_rect[3] - this.state.canvas_rect[1]);
        this.setCameraFollow();
        this.state.ctx.translate(-this.state.canvas_rect[0], -this.state.canvas_rect[1]);
        this.state.ctx.scale(window.devicePixelRatio * main_1.default.settingsManager.graphics.zoom, window.devicePixelRatio * main_1.default.settingsManager.graphics.zoom);
        this.state.ctx.translate(-this.state.cameraFollow.x, -this.state.cameraFollow.y);
        this.renderbg(main_1.default.currentUser.currentRoom.stadium, this.state.ctx);
        main_1.default.currentUser.currentRoom.stadium.segments.forEach((segment) => {
            if (segment.vis) {
                this.state.ctx.beginPath();
                this.state.ctx.lineWidth = 3;
                this.state.ctx.strokeStyle = this.color_to_style(segment.color, Base_1.Base.segment_color);
                var segV0 = segment.v0;
                var segV1 = segment.v1;
                if (segment.curveF === undefined) {
                    this.state.ctx.moveTo(segV0[0], segV0[1]);
                    this.state.ctx.lineTo(segV1[0], segV1[1]);
                }
                else {
                    var segCC = segment.circleCenter;
                    var pos_x = segV0[0] - segCC[0];
                    var pos_y = segV0[1] - segCC[1];
                    this.state.ctx.arc(segCC[0], segCC[1], Math.sqrt(pos_x * pos_x + pos_y * pos_y), Math.atan2(pos_y, pos_x), Math.atan2(segV1[1] - segCC[1], segV1[0] - segCC[0]));
                }
                this.state.ctx.stroke();
            }
        });
        const now = performance.now();
        const renderTimestamp = now - (1000.0 / Config_1.default.SERVER_UPDATE_INTERVAL);
        main_1.default.currentUser.currentRoom.stadium.discs.forEach((disc, i) => {
            var _a, _b;
            const buffer = (_b = (_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentRoom) === null || _b === void 0 ? void 0 : _b.discHistory[i];
            if (buffer != null) {
                while (buffer.length >= 2 && buffer[1].timestamp <= renderTimestamp)
                    buffer.shift();
                if (buffer.length >= 2 && buffer[0].timestamp <= renderTimestamp && renderTimestamp <= buffer[1].timestamp) {
                    disc.x = this.interpolate(buffer[0].shareableData.x, buffer[1].shareableData.x, buffer[0].timestamp, buffer[1].timestamp, renderTimestamp);
                    disc.y = this.interpolate(buffer[0].shareableData.y, buffer[1].shareableData.y, buffer[0].timestamp, buffer[1].timestamp, renderTimestamp);
                }
            }
        });
        const myDisc = main_1.default.currentUser.currentRoom.stadium.discs.filter((disc) => disc.player == main_1.default.currentUser.id);
        if (myDisc[0] != null)
            this.drawPlayerDiscExtLine(myDisc[0]);
        main_1.default.currentUser.currentRoom.stadium.discs.forEach((disc, i) => {
            this.state.ctx.beginPath();
            this.state.ctx.arc(disc.x, disc.y, disc.radius, 0, Math.PI * 2, true);
            if (disc.player != null && disc.player != 0 && disc.player != main_1.default.currentUser.id) {
                const player = main_1.default.currentUser.currentRoom.currentPlayers.filter((p) => p.id == disc.player)[0];
                if (player != null)
                    this.drawUsername(player.username, disc, player.team.id);
            }
            if (disc.kick)
                this.state.ctx.strokeStyle = 'rgb(255,255,255)';
            else
                this.state.ctx.strokeStyle = 'rgb(0,0,0)';
            this.state.ctx.lineWidth = 2;
            if (disc.avatar != null && disc.avatar != 0) {
                this.state.ctx.save();
                this.state.ctx.clip();
                this.state.ctx.drawImage(main_1.default.resourceManager.resources["IMAGE_AVATAR_" + disc.avatar], disc.x - disc.radius, disc.y - disc.radius, disc.radius * 2, disc.radius * 2);
                this.state.ctx.restore();
            }
            else {
                this.state.ctx.fillStyle = this.color_to_style(disc.color, Base_1.Base.discPhysics.color);
                this.state.ctx.fill();
            }
            this.state.ctx.stroke();
        });
    }
    drawUsername(username, disc, team) {
        this.state.ctx.font = '12px sans-serif';
        const text = this.state.ctx.measureText(username);
        this.state.ctx.fillStyle = 'black';
        this.state.ctx.strokeText(username, disc.x - (text.width / 2), disc.y + disc.radius + 15);
        if (team == Team_1.default.RED.id)
            this.state.ctx.fillStyle = '#bd3838';
        else if (team == Team_1.default.BLUE.id)
            this.state.ctx.fillStyle = '#bd3838';
        else
            this.state.ctx.fillStyle = "white";
        this.state.ctx.globalAlpha = 0.8;
        this.state.ctx.fillText(username, disc.x - (text.width / 2), disc.y + disc.radius + 15);
        this.state.ctx.globalAlpha = 1;
    }
    drawPlayerDiscExtLine(disc) {
        this.state.ctx.beginPath();
        this.state.ctx.lineWidth = 3;
        this.state.ctx.strokeStyle = 'white';
        this.state.ctx.globalAlpha = 0.3;
        this.state.ctx.arc(disc.x, disc.y, disc.radius + 10, 0, 2 * Math.PI, false);
        this.state.ctx.stroke();
        this.state.ctx.globalAlpha = 1;
    }
    interpolate(p0, p1, t0, t1, renderTimestamp) {
        const deltaMovement = (p1 - p0);
        return p0 + deltaMovement * (renderTimestamp - t0) / (t1 - t0);
    }
    resize_canvas() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var rect = [-((_b = (_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentRoom) === null || _b === void 0 ? void 0 : _b.stadium.width), -((_d = (_c = main_1.default.currentUser) === null || _c === void 0 ? void 0 : _c.currentRoom) === null || _d === void 0 ? void 0 : _d.stadium.height), (_f = (_e = main_1.default.currentUser) === null || _e === void 0 ? void 0 : _e.currentRoom) === null || _f === void 0 ? void 0 : _f.stadium.width, (_h = (_g = main_1.default.currentUser) === null || _g === void 0 ? void 0 : _g.currentRoom) === null || _h === void 0 ? void 0 : _h.stadium.height];
        var consider = function (pt, r) {
            var x = pt[0];
            var y = pt[1];
            if (x - r < rect[0])
                rect[0] = x - r;
            if (y - r < rect[1])
                rect[1] = y - r;
            if (x + r > rect[2])
                rect[2] = x + r;
            if (y + r > rect[3])
                rect[3] = y + r;
        };
        this.for_all_shapes((_k = (_j = main_1.default.currentUser) === null || _j === void 0 ? void 0 : _j.currentRoom) === null || _k === void 0 ? void 0 : _k.stadium, function (shape) {
            var o = shape.object;
            switch (shape.type) {
                case 'vertexes':
                    consider([o.x, o.y], 0);
                    break;
                case 'goals':
                    consider(o.p0, 0);
                    consider(o.p1, 0);
                    break;
                case 'discs':
                    consider([o.x, o.y], o.radius);
                    break;
            }
        });
        var canvas_div_size = [this.state.canvas.clientWidth, this.state.canvas.clientHeight];
        rect = [
            Math.round(Math.min(rect[0] - 0, -canvas_div_size[0] / 2)),
            Math.round(Math.min(rect[1] - 0, -canvas_div_size[1] / 2)),
            Math.round(Math.max(rect[2] + 0, canvas_div_size[0] / 2)),
            Math.round(Math.max(rect[3] + 0, canvas_div_size[1] / 2)),
        ];
        this.state.canvas_rect = rect;
        this.state.canvas.width = document.body.offsetWidth;
        this.state.canvas.height = document.body.offsetHeight;
    }
    for_all_shapes(st, types, f = null) {
        if (!f) {
            f = types;
            types = ['vertexes', 'segments', 'goals', 'discs', 'planes'];
        }
        types.forEach((name) => {
            var group = st[name];
            if (group) {
                group.forEach((obj, i) => {
                    return f(this.Shape(name, obj, i));
                });
            }
        });
    }
    Shape(type, object, i) {
        return { type: type, object: object, index: i };
    }
    renderbg(stadium, ctx) {
        var bg = stadium.bg;
        ctx.save();
        if (bg.type == 'grass' || bg.type == 'hockey') {
            if (bg.type == 'grass')
                this.state.canvas.style.backgroundColor = Base_1.Base["grass"].bg_color;
            else
                this.state.canvas.style.backgroundColor = Base_1.Base["hockey"].bg_color;
            ctx.beginPath();
            ctx.moveTo(-bg.width + bg.cornerRadius, -bg.height);
            // TODO: Left border is wrong
            ctx.arcTo(bg.width, -bg.height, bg.width, -bg.height + bg.cornerRadius, bg.cornerRadius);
            ctx.arcTo(bg.width, bg.height, bg.width - bg.cornerRadius, bg.height, bg.cornerRadius);
            ctx.arcTo(-bg.width, bg.height, -bg.width, bg.height - bg.cornerRadius, bg.cornerRadius);
            ctx.arcTo(-bg.width, -bg.height, -bg.width + bg.cornerRadius, -bg.height, bg.cornerRadius);
            ctx.save();
            ctx.clip();
            ctx.translate(40, 40);
            ctx.fillStyle = this.state.ctx.createPattern(main_1.default.resourceManager.resources[`IMAGE_TILE_${bg.type.toUpperCase()}`], null);
            ;
            ctx.fillRect(-stadium.width - 50, -stadium.height - 50, 2 * stadium.width - 40, 2 * stadium.height - 20);
            ctx.restore();
            ctx.moveTo(0, -bg.height);
            ctx.lineTo(0, bg.height);
            ctx.moveTo(bg.kickOffRadius, 0);
            ctx.arc(0, 0, bg.kickOffRadius, 0, Math.PI * 2, true);
            ctx.lineWidth = 3;
            ctx.strokeStyle = Base_1.Base["grass"].border_color;
            ctx.stroke();
        }
        else if (bg.type == '' && bg.color != undefined) {
            ctx.fillStyle = this.color_to_style(bg.color);
            ctx.fillRect(-stadium.width, -stadium.height, 2 * stadium.width, 2 * stadium.height);
            this.state.canvas.style.background = this.color_to_style(bg.color);
        }
        else
            this.state.canvas.style.backgroundColor = Base_1.Base["grass"].bg_color;
        ctx.restore();
    }
    color_to_style(color, def = null) {
        if (!color) {
            return def ? def : 'rgb(0,0,0)';
        }
        else if (color.substr) {
            return '#' + color;
        }
        else {
            return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        }
    }
    updateScoreData(score) {
        const scoreRed = document.getElementById("scoreRed");
        if (scoreRed != null)
            scoreRed.textContent = score.red.toString();
        const scoreBlue = document.getElementById("scoreBlue");
        if (scoreBlue != null)
            scoreBlue.textContent = score.blue.toString();
        const time = document.getElementById("time"), overtime = document.getElementById("overtime");
        if (time != null && overtime != null) {
            const room = main_1.default.currentUser.currentRoom;
            if (room.score.timeLimit > 0 && Math.floor(score.time) + 30 > room.score.timeLimit * 60)
                time.classList.add("warning");
            else
                time.classList.remove("warning");
            if (room.score.timeLimit > 0 && Math.floor(score.time) > room.score.timeLimit * 60)
                overtime.style.display = "block";
            else
                overtime.style.display = "none";
            time.textContent = this.fmtMSS(Math.floor(score.time));
        }
    }
    drop(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const target = ev.target;
        const server = main_1.default.regionServerManager.getServerById(main_1.default.currentUser.currentServer);
        if (server == null)
            return;
        switch (ev.target.getAttribute("id")) {
            case "pick_list_red": {
                server.sendMsg("setTeamPlayer", { playerId: parseInt(data), team: Team_1.default.RED.id });
                break;
            }
            case "pick_list_blue": {
                server.sendMsg("setTeamPlayer", { playerId: parseInt(data), team: Team_1.default.BLUE.id });
                break;
            }
            default: {
                server.sendMsg("setTeamPlayer", { playerId: parseInt(data), team: Team_1.default.SPECTATORS.id });
                break;
            }
        }
    }
    startDrag(ev) {
        ev.dataTransfer.setData("text", ev.target.getAttribute("player_id"));
    }
    refreshPickList() {
        var _a, _b;
        const pick_list = document.getElementById("pick_list"), pick_list_red = document.getElementById("pick_list_red"), pick_list_blue = document.getElementById("pick_list_blue"), pick_list_spectators = document.getElementById("pick_list_spectators");
        if (pick_list == null || pick_list_red == null || pick_list_blue == null || pick_list_spectators == null)
            return;
        pick_list_red.innerHTML = "";
        pick_list_blue.innerHTML = "";
        pick_list_spectators.innerHTML = "";
        (_b = (_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentRoom) === null || _b === void 0 ? void 0 : _b.currentPlayers.forEach((player) => {
            var _a, _b;
            const div = document.createElement("div");
            div.setAttribute("player_id", player.id.toString());
            div.draggable = true;
            div.classList.add("row");
            const avatar = document.createElement("img");
            avatar.src = main_1.default.resourceManager.resources["IMAGE_AVATAR_" + player.avatar].src;
            div.appendChild(avatar);
            const username = document.createElement("div");
            username.classList.add("username");
            if (((_b = (_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.currentRoom) === null || _b === void 0 ? void 0 : _b.pickMode) == player.id)
                username.classList.add("picker");
            username.textContent = player.username;
            div.appendChild(username);
            const ping = document.createElement("div");
            ping.classList.add("ping");
            ping.textContent = player.ping.toString();
            div.appendChild(ping);
            div.addEventListener("dragstart", this.startDrag.bind(this));
            if (player.team.id == Team_1.default.RED.id)
                pick_list_red.appendChild(div);
            else if (player.team.id == Team_1.default.BLUE.id)
                pick_list_blue.appendChild(div);
            else
                pick_list_spectators.appendChild(div);
        });
    }
    playerJoin(player, playerLength) {
        const playersCount = document.getElementById("playersCount");
        if (playersCount != null)
            playersCount.textContent = playerLength.toString();
        const list_users = document.getElementById("list_users");
        const li = document.createElement("li");
        li.dataset.userId = player.id.toString();
        li.setAttribute("username", player.username);
        li.innerHTML = `${player.username} <span>${player.ping}</span>`;
        li.addEventListener("click", this.showUserMenu.bind(this));
        if (player.team == Team_1.default.RED)
            li.classList.add("red");
        else if (player.team == Team_1.default.BLUE)
            li.classList.add("blue");
        if (list_users != null)
            list_users.appendChild(li);
        this.refreshPickList();
    }
    playerLeave(playerId, playerLength) {
        const playersCount = document.getElementById("playersCount");
        if (playersCount != null)
            playersCount.textContent = playerLength.toString();
        const list_users = document.getElementById("list_users");
        if (list_users != null) {
            list_users.querySelectorAll("li").forEach(element => {
                if (element.dataset.userId == playerId.toString())
                    list_users.removeChild(element);
            });
        }
        this.refreshPickList();
    }
    newChat(data) {
        const chatContainer = document.getElementById("chatContent");
        let scrollToBottom = false;
        if (chatContainer != null && Math.abs(chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight) < 1)
            scrollToBottom = true;
        switch (data.type) {
            case "announcement":
                {
                    const element = document.createElement("div");
                    element.classList.add("announcement");
                    element.textContent = data.officialTrad ? main_1.default.languageManager.getValueForKey(data.message, data.params ? data.params : []) : data.message;
                    if (data.color != null)
                        element.style.color = data.color;
                    if (data.bold)
                        element.style.fontWeight = "bold";
                    chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(element);
                    switch (data.sound) {
                        case 1:
                            main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.chat ? main_1.default.resourceManager.resources["AUDIO_HIGHLIGHT"].play() : null;
                            break;
                        default:
                            main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.chat ? main_1.default.resourceManager.resources["AUDIO_CHAT"].play() : null;
                            break;
                    }
                    break;
                }
            case "pm_to":
            case "pm_from":
                {
                    const element = document.createElement("div");
                    element.textContent = data.message;
                    const span = document.createElement("span");
                    span.setAttribute("username", data.username);
                    span.classList.add(data.type);
                    if (data.type == "pm_to")
                        span.textContent = `[< ${main_1.default.languageManager.getValueForKey("GAME_CHAT_PM_TO", [data.username])}] `;
                    else
                        span.textContent = `[> ${main_1.default.languageManager.getValueForKey("GAME_CHAT_PM_FROM", [data.username])}] `;
                    span.addEventListener("click", this.showUserMenu.bind(this));
                    element.prepend(span);
                    chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(element);
                    main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.chat ? main_1.default.resourceManager.resources["AUDIO_HIGHLIGHT"].play() : null;
                    break;
                }
            default: {
                const element = document.createElement("div");
                element.textContent = data.message;
                const span = document.createElement("span");
                if (data.team != null) {
                    switch (data.team) {
                        case Team_1.default.RED.id:
                            span.style.color = Team_1.default.RED.color;
                            break;
                        case Team_1.default.BLUE.id:
                            span.style.color = Team_1.default.BLUE.color;
                            break;
                        case Team_1.default.SPECTATORS.id:
                            span.style.color = Team_1.default.SPECTATORS.color;
                            break;
                    }
                    span.textContent = `[${main_1.default.languageManager.getValueForKey("GAME_GENERAL_TEAM")}] ${data.username}: `;
                }
                else {
                    span.classList.add(data.rank);
                    span.textContent = data.username + ": ";
                }
                span.setAttribute("username", data.username);
                span.addEventListener("click", this.showUserMenu.bind(this));
                element.prepend(span);
                chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(element);
                main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.chat ? main_1.default.resourceManager.resources["AUDIO_CHAT"].play() : null;
                break;
            }
        }
        if (chatContainer != null) {
            if (scrollToBottom)
                chatContainer.scrollTop = chatContainer.scrollHeight;
            if (chatContainer.childElementCount > 20)
                chatContainer.removeChild(chatContainer.getElementsByTagName('div')[0]);
        }
    }
    whisper(username) {
        const chatCategory = document.getElementById("msgType"), chatMsg = document.getElementById("chatMsg");
        if (chatCategory == null || chatMsg == null)
            return;
        let optionVal = null;
        Array.from(chatCategory.getElementsByTagName("option")).forEach((element) => {
            if (element.value == username)
                optionVal = element;
        });
        if (optionVal == null) {
            const option = document.createElement("option");
            option.value = username;
            option.innerHTML = username;
            chatCategory.append(option);
        }
        chatCategory.value = username;
        chatMsg.focus();
    }
    userMenuItem(e) {
        switch (e.srcElement.getAttribute("type")) {
            case "whisper": {
                this.whisper(this.state.focusUser);
                break;
            }
            case "profile": {
                main_1.default.webSocketsManager.sendMsg("requestProfile", this.state.focusUser);
                break;
            }
            case "friend": {
                main_1.default.webSocketsManager.sendMsg("addFriend", this.state.focusUser);
                break;
            }
            case "report": {
                main_1.default.webSocketsManager.sendMsg("report", this.state.focusUser);
                break;
            }
            case "mute": {
                this.switchAdmin("new_sanction", { type: "mute", username: this.state.focusUser });
                break;
            }
            case "ban": {
                this.switchAdmin("new_sanction", { type: "ban", username: this.state.focusUser });
                break;
            }
        }
    }
    hideUserMenu() {
        document.removeEventListener('click', this.state.userMenuFunction);
        const user_menu = document.getElementById("user_menu");
        if (user_menu == null)
            return;
        user_menu.style.display = "none";
    }
    showUserMenu(e) {
        var _a;
        if (e.srcElement.getAttribute("username") == ((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.username))
            return;
        this.state.focusUser = e.srcElement.getAttribute("username");
        const user_menu = document.getElementById("user_menu");
        if (user_menu == null)
            return;
        Array.from(user_menu.getElementsByTagName("li")).forEach((element) => {
            var _a;
            if (element.getAttribute("type") == "friend" && ((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.getFriendbyUsername(this.state.focusUser)) != null)
                element.style.display = "none";
            else
                element.style.display = "block";
            if (["mute", "ban"].includes(element.getAttribute("type"))) {
                if (["user", "vip"].includes(main_1.default.currentUser.rank))
                    element.style.display = "none";
                else
                    element.style.display = "block";
            }
        });
        user_menu.style.display = "block";
        user_menu.style.left = (e.pageX - 75) + "px";
        user_menu.style.top = (e.pageY - user_menu.clientHeight - 20) + "px";
        this.state.userMenuFunction = this.hideUserMenu.bind(this);
        setTimeout(() => document.addEventListener('click', this.state.userMenuFunction, false), 10);
    }
    getRegionFlag(region) {
        switch (region.toLowerCase()) {
            case "eu":
                return "EU";
            default:
                return "UNDEFINED";
        }
    }
    render() {
        var _a;
        if (this.app == null)
            return;
        this.app.innerHTML =
            `<div class="gameScreen">
                <canvas id="game" tabindex="1"></canvas>

                <div class="header">
                    <div class="roomScore">
                        <div class="circle red"></div> <span id="scoreRed"></span> <span class="space">-</span> <span id="scoreBlue"></span> <div class="circle blue"></div>
                    </div>

                    <div class="time"><img src="assets/images/icons/clock.png"> <span id="time"></span> <span id="overtime">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_OVERTIME")}</span></div>
                    <div class="players"><img src="assets/images/icons/players.png"> <span id="playersCount"></span></div>
                    <div class="roomName"><img src="assets/images/flags/region/${this.getRegionFlag(this.state.currentUser.currentServer)}.svg"/><span id="roomName"></span></div>
                </div>

                <div class="stats">
                    <div class="row"><span id="fps">0</span> fps</div>
                </div>

                <div class="relative_container">
                    <div id="notif"></div>

                    <div class="modal" id="pick_list">
                        <div class="pick_list_flex">
                            <div class="container red">
                                <div class="title">
                                    <div class="title_content">${main_1.default.languageManager.getValueForKey("GAME_TEAM_RED")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_red"></div>
                            </div>

                            <div class="container spectators">
                                <div class="title">
                                    <div class="title_content">${main_1.default.languageManager.getValueForKey("GAME_TEAM_SPECTATORS")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_spectators"></div>
                            </div>

                            <div class="container blue">
                                <div class="title">
                                    <div class="title_content">${main_1.default.languageManager.getValueForKey("GAME_TEAM_BLUE")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_blue"></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal" id="admin">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${main_1.default.languageManager.getValueForKey("GAME_ADMIN")}</div>
                            </div>

                            <ul id="admin_menu">
                                <li type="team">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_TEAM")}</li>
                                <li type="reports">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_REPORTS")}</li>
                                <li type="sanctions">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_SANCTIONS")}</li>
                                <li type="new_sanction">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_NEW_SANCTION")}</li>
                                <li type="rank">${main_1.default.languageManager.getValueForKey("GAME_ADMIN_RANK")}</li>
                            </ul>

                            <div class="content">
                                <div class="category_title"><span id="admin_title"></span></div>

                                <div id="admin_content"></div>
                            </div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="leaderboard">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${main_1.default.languageManager.getValueForKey("GAME_LEADERBOARD")}</div>
                            </div>

                            <div class="content">
                                <div class="filter">
                                    ${main_1.default.languageManager.getValueForKey("GAME_LEADERBOARD_FILTER")}

                                    <select id="leaderboardFilter"></select>
                                </div>

                                <div id="leaderboardContent"></div>
                            </div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="profile">
                        <div class="container">
                            <div class="title">
                                <div class="avatar"><img profile_data="avatar"></div>
                                <div class="title_content">
                                    <span class="state" profile_data="online"></span>
                                    <span profile_data="username"></span>
                                </div>
                            </div>

                            <div class="content">
                                <div class="category">
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_REGISTERED")}: <span profile_data="registered"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_LEVEL_XP")}: <span profile_data="level_xp"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_ELO")}: <span profile_data="elo"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${main_1.default.languageManager.getValueForKey("GAME_STATS_GAMES")}</div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_GAMES_PLAYED")}: <span profile_data="games_played"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_GAMES_WON")}: <span profile_data="games_won"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_GAMES_LOST")}: <span profile_data="games_lost"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_WIN_RATE")}: <span profile_data="win_rate"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_BEST_STREAK")}: <span profile_data="best_streak"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${main_1.default.languageManager.getValueForKey("GAME_STATS_GENERAL")}</div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_SHOTS")}: <span profile_data="shots"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_SHOTS_PER_MATCH")}: <span profile_data="shots_per_match"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_GOALS")}: <span profile_data="goals"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_GOALS_PER_MATCH")}: <span profile_data="goals_per_match"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_HAT_TRICKS")}: <span profile_data="hat_tricks"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_ASSISTS")}: <span profile_data="assists"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_ASSISTS_PER_MATCH")}: <span profile_data="assists_per_match"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_SAVES")}: <span profile_data="saves"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_SAVES_PER_MATCH")}: <span profile_data="saves_per_match"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_PASS_ACCURACY")}: <span profile_data="pass_accuracy"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_PASS_PER_MATCH")}: <span profile_data="pass_per_match"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${main_1.default.languageManager.getValueForKey("GAME_STATS_GOALKEEPER")}</div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_PLAYED_GK")}: <span profile_data="played_gk"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_CS")}: <span profile_data="cs"></span></div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_STATS_CS_PERCENTAGE")}: <span profile_data="cs_percentage"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${main_1.default.languageManager.getValueForKey("GAME_STATS_BADGES")}</div>
                                    <div>${main_1.default.languageManager.getValueForKey("GAME_GENERAL_NOT_AVAILABLE")}</div>
                                </div>
                            </div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="settings">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${main_1.default.languageManager.getValueForKey("GAME_SETTINGS")}</div>
                            </div>

                            <div class="content">
                                <ul class="menu">
                                    <li category="graphics" class="selected">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS")}</li>
                                    <li category="audio">${main_1.default.languageManager.getValueForKey("GAME_MENU_AUDIO")}</li>
                                    <li category="inputs">${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS")}</li>
                                </ul>

                                <div class="category" category_name="graphics">
                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")}</span>
                                        <select type="settings" settings_category="graphics" settings_val="zoom">
                                            <option value="1">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1x</option>
                                            <option value="1.25">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.25x</option>
                                            <option value="1.5">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.5x</option>
                                            <option value="1.75">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.75x</option>
                                            <option value="2">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2x</option>
                                            <option value="2.25">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2.25x</option>
                                            <option value="2.5">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2.5x</option>
                                        </select>
                                    </div>

                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_FPS")}</span>
                                        <select type="settings" settings_category="graphics" settings_val="fps">
                                            <option value="0">${main_1.default.languageManager.getValueForKey("GAME_MENU_GRAPHICS_FPS_NO_LIMIT")}</option>
                                            <option value="60">60</option>
                                            <option value="30">30</option>
                                            <option value="20">20</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="category" category_name="audio">
                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_AUDIO_GENERAL")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_general" settings_category="audio" settings_val="general">
                                            <label for="settings_audio_general"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_AUDIO_CHAT")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_chat" settings_category="audio" settings_val="chat">
                                            <label for="settings_audio_chat"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_AUDIO_GAME")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_game" settings_category="audio" settings_val="game">
                                            <label for="settings_audio_game"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_AUDIO_NOTIFICATION")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_notif" settings_category="audio" settings_val="notif">
                                            <label for="settings_audio_notif"></label>
                                        </div>
                                    </div>
                                </div>

                                <div class="category" category_name="inputs">
                                    <div id="recordKey"><div>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_PRESS")}</div></div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_UP")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="up"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_DOWN")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="down"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_LEFT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="left"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_RIGHT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="right"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_KICK")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="kick"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${main_1.default.languageManager.getValueForKey("GAME_MENU_INPUTS_TOGGLE_CHAT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="toggle_chat"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="friends">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/heart.svg"> ${main_1.default.languageManager.getValueForKey("GAME_FRIENDS")}</div>
                            </div>

                            <div class="content" id="friendsList"></div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="shop">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/basket.svg"> ${main_1.default.languageManager.getValueForKey("GAME_SHOP")}</div>
                            </div>

                            <div class="flex">
                                <div class="categorys">
                                    <div class="coin"><img src="assets/images/icons/coin.png"> <span id="shopCoinVal"></span></div>

                                    <div id="shopCategorys"></div>
                                </div>

                                <div class="items" id="shopItems"></div>
                            </div>

                            <div class="bottom"><button class="close">${main_1.default.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>
                </div>

                <ul id="user_menu">
                    <li type="mute">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_MUTE")}</li>
                    <li type="ban">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_BAN")}</li>
                    <li type="profile">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_PROFILE")}</li>
                    <li type="friend">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_FRIEND")}</li>
                    <li type="report">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_REPORT")}</li>
                    <li type="whisper">${main_1.default.languageManager.getValueForKey("GAME_USER_MENU_WHISPER")}</li>
                </ul>

                <div class="bottom_container">
                    <div class="user">
                        <div class="left">
                            <div class="avatar" id="request_profile"><img src="${main_1.default.resourceManager.resources["IMAGE_AVATAR_" + ((_a = main_1.default.currentUser) === null || _a === void 0 ? void 0 : _a.avatar)].src}" id="avatar"></div>

                            <div class="general_menu">
                                <div type="friends"><img src="assets/images/icons/heart.svg"></div>
                                <div type="shop"><img src="assets/images/icons/basket.svg"></div>
                                <div type="settings"><img src="assets/images/icons/settings.svg"></div>
                            </div>
                        </div>

                        <div class="right">
                            <div class="general_menu">
                                <div type="menu"><img src="assets/images/icons/menu.svg"></div>
                                <div type="leaderboard"><img src="assets/images/icons/leaderboard.svg"></div>
                                <div type="team"><img src="assets/images/icons/team.svg"></div>
                                <div type="admin"><img src="assets/images/icons/star.svg"></div>
                            </div>
                        </div>
                    </div>

                    <div class="chat">
                        <div id="chatContent"></div>

                        <form method="post" id="chatForm">
                            <select id="msgType">
                                <option value="#room">${main_1.default.languageManager.getValueForKey("GAME_CHAT_OPTION_ROOM")}</option>
                                <option value="#team">${main_1.default.languageManager.getValueForKey("GAME_CHAT_OPTION_TEAM")}</option>
                            </select>

                            <input type="text" id="chatMsg" maxlength="150" placeholder="${main_1.default.languageManager.getValueForKey("GAME_CHAT_MESSAGE")}"/>
                        </form>
                    </div>

                    <ul id="list_users"></ul>

                    <div id="history"></div>
                </div>
            </div>`;
    }
}
exports["default"] = GameScene;


/***/ }),

/***/ "./client/Scene/List/LoginScene.ts":
/*!*****************************************!*\
  !*** ./client/Scene/List/LoginScene.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Config_1 = __importDefault(__webpack_require__(/*! ../../Config/Config */ "./client/Config/Config.ts"));
const main_1 = __importDefault(__webpack_require__(/*! ../../main */ "./client/main.ts"));
const Scene_1 = __importDefault(__webpack_require__(/*! ../Scene */ "./client/Scene/Scene.ts"));
class LoginScene extends Scene_1.default {
    constructor(state) {
        super(state.name);
        this.state = {
            error: null,
            args: null,
            fakeLoginId: 0,
            content: "login",
            username: "",
            password: "",
            password_confirm: "",
            server: null
        };
    }
    setState(params) {
        this.onDestroy();
        for (let i in params) {
            this.state[i] = params[i];
        }
        this.render();
        this.onInitialized();
    }
    onWillInit() {
        super.onWillInit();
    }
    onInitialized() {
        super.onInitialized();
        const username = document.getElementById("username");
        username === null || username === void 0 ? void 0 : username.addEventListener("input", this.setUsername.bind(this));
        const password = document.getElementById("password");
        password === null || password === void 0 ? void 0 : password.addEventListener("input", this.setPassword.bind(this));
        const password_confirm = document.getElementById("password_confirm");
        password_confirm === null || password_confirm === void 0 ? void 0 : password_confirm.addEventListener("input", this.setPasswordConfirm.bind(this));
        const server = document.getElementById("server");
        server === null || server === void 0 ? void 0 : server.addEventListener("change", this.setServer.bind(this));
        const registerButton = document.getElementById("register");
        registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", () => this.setContent("register"));
        const loginButton = document.getElementById("login");
        loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", () => this.setContent("login"));
        const flagButton = document.getElementById("flag");
        flagButton === null || flagButton === void 0 ? void 0 : flagButton.addEventListener("click", () => this.setContent("language"));
        const flags = document.getElementsByClassName("flag_row");
        Array.from(flags).forEach(flagRow => {
            flagRow === null || flagRow === void 0 ? void 0 : flagRow.addEventListener("click", this.setActiveLanguage.bind(this));
        });
        const loginForm = document.getElementById("loginForm");
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", this.login.bind(this));
        const registerForm = document.getElementById("registerForm");
        registerForm === null || registerForm === void 0 ? void 0 : registerForm.addEventListener("submit", this.register.bind(this));
        /*
        const serverse = Application.regionServerManager.getServerById(this.state.server);
        if(serverse == null)
            return this.setState({error: "ACCOUNT_ERROR_OCCURED"});
        
        if(this.state.fakeLoginId == 0)
            Application.webSocketsManager.sendMsg("tryLogin", {username: this.state.username, password: this.state.password, server: this.state.server, serverClientId: serverse.clientId})
    */
    }
    setUsername(e) {
        this.state.username = e.target.value;
    }
    setPassword(e) {
        this.state.password = e.target.value;
    }
    setPasswordConfirm(e) {
        this.state.password_confirm = e.target.value;
    }
    setServer(e) {
        this.state.server = e.target.value;
    }
    onDestroy() {
        super.onDestroy();
        const username = document.getElementById("username");
        username === null || username === void 0 ? void 0 : username.removeEventListener("change", this.setUsername.bind(this), false);
        const password = document.getElementById("password");
        password === null || password === void 0 ? void 0 : password.removeEventListener("change", this.setPassword.bind(this), false);
        const password_confirm = document.getElementById("password_confirm");
        password_confirm === null || password_confirm === void 0 ? void 0 : password_confirm.removeEventListener("change", this.setPasswordConfirm.bind(this), false);
        const server = document.getElementById("server");
        server === null || server === void 0 ? void 0 : server.removeEventListener("change", this.setServer.bind(this), false);
        const registerButton = document.getElementById("register");
        registerButton === null || registerButton === void 0 ? void 0 : registerButton.removeEventListener("click", () => this.setContent("register"), false);
        const loginButton = document.getElementById("register");
        loginButton === null || loginButton === void 0 ? void 0 : loginButton.removeEventListener("click", () => this.setContent("login"), false);
        const flagButton = document.getElementById("register");
        flagButton === null || flagButton === void 0 ? void 0 : flagButton.removeEventListener("click", () => this.setContent("language"), false);
        const flags = document.getElementsByClassName("flag_row");
        Array.from(flags).forEach(flagRow => {
            flagRow === null || flagRow === void 0 ? void 0 : flagRow.removeEventListener("click", this.setActiveLanguage.bind(this), false);
        });
        const loginForm = document.getElementById("loginForm");
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.removeEventListener("submit", this.login.bind(this), false);
        const registerForm = document.getElementById("registerForm");
        registerForm === null || registerForm === void 0 ? void 0 : registerForm.removeEventListener("submit", this.register.bind(this), false);
    }
    setActiveLanguage(e) {
        if (e.target == null || e.target.id == null)
            return;
        main_1.default.languageManager.setLanguage(e.target.id);
        this.setContent("login");
    }
    setContent(value) {
        if (value == "login" || value == "register") {
            this.state.username = "";
            this.state.password = "";
            this.state.password_confirm = "";
            this.state.error = "";
        }
        this.setState({ content: value });
    }
    login(e) {
        e.preventDefault();
        const server = main_1.default.regionServerManager.getServerById(this.state.server);
        if (server == null)
            return this.setState({ error: "ACCOUNT_ERROR_OCCURED" });
        main_1.default.webSocketsManager.sendMsg("tryLogin", { username: this.state.username, password: this.state.password, server: this.state.server, serverClientId: server.clientId });
    }
    register(e) {
        e.preventDefault();
        const server = main_1.default.regionServerManager.getServerById(this.state.server);
        if (server == null)
            return this.setState({ error: "ACCOUNT_ERROR_OCCURED" });
        main_1.default.webSocketsManager.sendMsg("tryRegister", { username: this.state.username, password: this.state.password, password_confirm: this.state.password_confirm, server: this.state.server, serverClientId: server.clientId });
    }
    renderAvaiableLanguage() {
        let content = ``;
        main_1.default.languageManager.getAvailableLanguages().forEach((language) => {
            content += `<img src="assets/images/flags/${language}.svg" class="flag_row" id="${language}">`;
        });
        return content;
    }
    renderServers() {
        let content = ``;
        main_1.default.regionServerManager.getAllServers().forEach((server) => {
            if (this.state.server == null)
                this.state.server = server.id;
            content += `<option value="${server.id}" ${this.state.server == server.id ? "selected" : null}>${main_1.default.languageManager.getValueForKey("ACCOUNT_SERVER", [server.id, server.ping])}</option>`;
        });
        return content;
    }
    renderError() {
        let error = ``;
        if (this.state.error) {
            /*
            this.state.fakeLoginId++;

            const serverse = Application.regionServerManager.getServerById(this.state.server);
            if(serverse != null)
                Application.webSocketsManager.sendMsg("tryLogin", {username: `${this.state.username}${this.state.fakeLoginId}`, password: this.state.password, server: this.state.server, serverClientId: serverse.clientId})
            */
            error = `<div class="error">${main_1.default.languageManager.getValueForKey(this.state.error, this.state.args)}</div>`;
        }
        return error;
    }
    renderContent() {
        switch (this.state.content) {
            case "login":
                return `<div class="login">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${main_1.default.languageManager.getValueForKey("ACCOUNT_LOGIN")}</div>

                    <div class="container">
                        ${this.renderError()}

                        <form method="post" id="loginForm">
                            <input type="text" id="username" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_USERNAME")}" value="${this.state.username}" maxlength="15"></input>
                            <input type="password" id="password" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_PASSWORD")}" value="${this.state.password}"></input>
                            <select id="server">
                                ${this.renderServers()}
                            </select>
                            <input type="submit" value="${main_1.default.languageManager.getValueForKey("ACCOUNT_LOGIN")}">
                        </form>

                        <div class="line">
                            <button id="register">${main_1.default.languageManager.getValueForKey("ACCOUNT_REGISTER")}</button>
                            <img src="assets/images/flags/${main_1.default.languageManager.getValueForKey("CODE")}.svg" class="flag" id="flag"/>
                        </div>
                    </div>
                </div>`;
            case "register":
                return `<div class="register">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${main_1.default.languageManager.getValueForKey("ACCOUNT_REGISTER")}</div>

                    <div class="container">
                        ${this.renderError()}

                        <form method="post" id="registerForm">
                            <input type="text" id="username" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_USERNAME")}" value="${this.state.username}" maxlength="15"></input>
                            <input type="password" id="password" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_PASSWORD")}" value="${this.state.password}"></input>
                            <input type="password" id="password_confirm" placeholder="${main_1.default.languageManager.getValueForKey("ACCOUNT_CONFIRM_PASSWORD")}" value="${this.state.password_confirm}"></input>
                            <select id="server">
                                ${this.renderServers()}
                            </select>
                            <input type="submit" value="${main_1.default.languageManager.getValueForKey("ACCOUNT_REGISTER")}">
                        </form>

                        <div class="line">
                            <button id="login">${main_1.default.languageManager.getValueForKey("ACCOUNT_LOGIN")}</button>
                            <img src="assets/images/flags/${main_1.default.languageManager.getValueForKey("CODE")}.svg" class="flag" id="flag"/>
                        </div>
                    </div>
                </div>`;
            case "language":
                return `<div class="language">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${main_1.default.languageManager.getValueForKey("ACCOUNT_LANGUAGE")}</div>

                    <div class="container">
                        <div class="flags">
                            ${this.renderAvaiableLanguage()}
                        </div>
                    </div>
                </div>`;
            default:
                return null;
        }
    }
    render() {
        if (this.app == null)
            return;
        this.app.innerHTML =
            `<div class="account">

                ${this.renderContent()}

                <div class="footer">${main_1.default.languageManager.getValueForKey("COPYRIGHT", [Config_1.default.NAME])}</div>
            </div>`;
    }
}
exports["default"] = LoginScene;


/***/ }),

/***/ "./client/Scene/List/MessageScene.ts":
/*!*******************************************!*\
  !*** ./client/Scene/List/MessageScene.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Config_1 = __importDefault(__webpack_require__(/*! ../../Config/Config */ "./client/Config/Config.ts"));
const Scene_1 = __importDefault(__webpack_require__(/*! ../Scene */ "./client/Scene/Scene.ts"));
class MessageScene extends Scene_1.default {
    constructor(state) {
        super(state.name);
        this.state = {
            message: state.params.message
        };
    }
    setState(params) {
        super.setState(params);
        for (let i in params) {
            this.state[i] = params[i];
        }
        this.render();
    }
    onWillInit() {
        super.onWillInit();
        document.title = Config_1.default.NAME;
    }
    onInitialized() {
        super.onInitialized();
    }
    onDestroy() {
        super.onDestroy();
    }
    render() {
        if (this.app == null)
            return;
        this.app.innerHTML =
            `<div class="loadingScreen">
                <img src="assets/images/logo.png">
                <div class="message">${this.state["message"]}</div>
            </div>`;
    }
}
exports["default"] = MessageScene;


/***/ }),

/***/ "./client/Scene/Scene.ts":
/*!*******************************!*\
  !*** ./client/Scene/Scene.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./client/main.ts"));
class Scene {
    constructor(name) {
        this.name = name;
        this.app = document.getElementById("app");
        main_1.default.logger.sendLog("VERBOSE", `Initiliazing scene ${this.name}.`);
    }
    setState(params) {
    }
    onWillInit() {
        if (this.app == null)
            main_1.default.logger.sendLog("ERROR", "Impossible to find #app HTML element.");
    }
    onInitialized() { }
    onDestroy() {
        if (this.app != null)
            this.app.innerHTML = "";
    }
    render() { }
}
exports["default"] = Scene;


/***/ }),

/***/ "./client/Scene/SceneList.ts":
/*!***********************************!*\
  !*** ./client/Scene/SceneList.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneType = void 0;
const GameScene_1 = __importDefault(__webpack_require__(/*! ./List/GameScene */ "./client/Scene/List/GameScene.ts"));
const LoginScene_1 = __importDefault(__webpack_require__(/*! ./List/LoginScene */ "./client/Scene/List/LoginScene.ts"));
const MessageScene_1 = __importDefault(__webpack_require__(/*! ./List/MessageScene */ "./client/Scene/List/MessageScene.ts"));
exports.SceneType = {
    0: MessageScene_1.default,
    1: LoginScene_1.default,
    2: GameScene_1.default
};


/***/ }),

/***/ "./client/Scene/SceneManager.ts":
/*!**************************************!*\
  !*** ./client/Scene/SceneManager.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./client/main.ts"));
const GameScene_1 = __importDefault(__webpack_require__(/*! ./List/GameScene */ "./client/Scene/List/GameScene.ts"));
const LoginScene_1 = __importDefault(__webpack_require__(/*! ./List/LoginScene */ "./client/Scene/List/LoginScene.ts"));
const MessageScene_1 = __importDefault(__webpack_require__(/*! ./List/MessageScene */ "./client/Scene/List/MessageScene.ts"));
const SceneList_1 = __webpack_require__(/*! ./SceneList */ "./client/Scene/SceneList.ts");
class SceneManager {
    constructor() {
        this.scene = null;
    }
    initScene(scene, params = {}) {
        if (this.scene instanceof SceneList_1.SceneType[scene])
            return this.scene.setState(params);
        if (this.scene != null) {
            this.scene.onDestroy();
            this.scene = null;
        }
        switch (scene) {
            case 0 /* SceneList.MessageScene */:
                {
                    this.scene = new MessageScene_1.default({
                        name: "MessageScene",
                        params: params
                    });
                    break;
                }
            case 1 /* SceneList.LoginScene */:
                {
                    this.scene = new LoginScene_1.default({
                        name: "LoginScene",
                        params: params
                    });
                    break;
                }
            case 2 /* SceneList.GameScene */:
                {
                    this.scene = new GameScene_1.default({
                        name: "GameScene",
                        params: params
                    });
                    break;
                }
            default:
                main_1.default.logger.sendLog("ERROR", `Impossible to load scene ${scene}.`);
                break;
        }
        if (this.scene != null) {
            this.scene.onWillInit();
            this.scene.render();
            this.scene.onInitialized();
        }
    }
}
exports["default"] = SceneManager;


/***/ }),

/***/ "./client/Settings/SettingsManager.ts":
/*!********************************************!*\
  !*** ./client/Settings/SettingsManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class SettingsManager {
    constructor() {
        this.graphics = {
            zoom: 1.25,
            fps: 0
        };
        this.audio = {
            general: true,
            chat: true,
            game: true,
            notif: true
        };
        this.inputs = {
            up: ["ArrowUp"],
            down: ["ArrowDown"],
            left: ["ArrowLeft"],
            right: ["ArrowRight"],
            kick: ["KeyX", "Space"],
            toggle_chat: ["Enter", "NumpadEnter", "Tab"],
        };
    }
    init() {
        const graphicsStorage = localStorage.getItem("settings_graphics");
        if (graphicsStorage != null && JSON.parse(graphicsStorage))
            this.graphics = JSON.parse(graphicsStorage);
        const audioStorage = localStorage.getItem("settings_audio");
        if (audioStorage != null && JSON.parse(audioStorage))
            this.audio = JSON.parse(audioStorage);
        const inputs = localStorage.getItem("settings_inputs");
        if (inputs != null && JSON.parse(inputs))
            this.inputs = JSON.parse(inputs);
    }
    saveSettings(type) {
        switch (type) {
            case "graphics": {
                localStorage.setItem("settings_graphics", JSON.stringify(this.graphics));
                break;
            }
            case "audio": {
                localStorage.setItem("settings_audio", JSON.stringify(this.audio));
                break;
            }
            case "inputs": {
                localStorage.setItem("settings_inputs", JSON.stringify(this.inputs));
                break;
            }
        }
    }
    removeKey(type, value) {
        if (this.inputs[type] == null || !this.inputs[type].includes(value))
            return;
        this.inputs[type] = this.inputs[type].filter(function (key) {
            return key != value;
        });
        this.saveSettings("inputs");
    }
    setSettings(type, value, val) {
        switch (type) {
            case "graphics": {
                if (this.graphics[value] == null || val instanceof Number)
                    return;
                this.graphics[value] = val;
                this.saveSettings(type);
                break;
            }
            case "audio": {
                if (this.audio[value] == null || val instanceof Boolean)
                    return;
                this.audio[value] = val;
                this.saveSettings(type);
                break;
            }
            case "inputs": {
                if (this.inputs[value] == null || val instanceof String)
                    return;
                let contains = (this.inputs.up.includes(val) ||
                    this.inputs.down.includes(val) ||
                    this.inputs.left.includes(val) ||
                    this.inputs.right.includes(val) ||
                    this.inputs.kick.includes(val) ||
                    this.inputs.toggle_chat.includes(val));
                if (contains || val.startsWith("Digit") || val == "KeyP")
                    return;
                this.inputs[value].push(val);
                this.saveSettings(type);
                break;
            }
        }
    }
}
exports["default"] = SettingsManager;


/***/ }),

/***/ "./client/User/User.ts":
/*!*****************************!*\
  !*** ./client/User/User.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.rank = data.rank;
        this.avatar = data.avatar;
        this.coins = data.coins;
        this.items = data.items;
        this.friends = data.friends;
        this.currentServer = data.currentServer;
        this.currentRoom = null;
    }
    getFriendbyUsername(username) {
        let friendReturned = null;
        this.friends.forEach((friend) => {
            if (friend.username == username)
                friendReturned = friend;
        });
        return friendReturned;
    }
}
exports["default"] = User;


/***/ }),

/***/ "./client/Utils/Utils.ts":
/*!*******************************!*\
  !*** ./client/Utils/Utils.ts ***!
  \*******************************/
/***/ (() => {


String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g, function (a, b) {
        var r = o[b];
        return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
};


/***/ }),

/***/ "./client/WebSockets/RegionServer/RegionServer.ts":
/*!********************************************************!*\
  !*** ./client/WebSockets/RegionServer/RegionServer.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Room_1 = __importDefault(__webpack_require__(/*! ../../Room/Room */ "./client/Room/Room.ts"));
const GameScene_1 = __importDefault(__webpack_require__(/*! ../../Scene/List/GameScene */ "./client/Scene/List/GameScene.ts"));
const main_1 = __importDefault(__webpack_require__(/*! ../../main */ "./client/main.ts"));
class RegionServer {
    constructor(data) {
        this.ws = null;
        this.id = data.id;
        this.ip = data.ip;
        this.port = data.port;
        this.clientId = null;
        this.ping = 0;
        this.pingDate = 0;
        this.intervalPing = null;
        this.getPong = true;
    }
    connect() {
        return new Promise((resolve, reject) => {
            const instance = this;
            this.ws = new WebSocket(`ws://${this.ip}:${this.port}`);
            this.ws.onclose = () => {
                if (instance.intervalPing != null)
                    clearInterval(instance.intervalPing);
                main_1.default.regionServerManager.destroyServer(instance.id);
                resolve(`Impossible to connect to server region [${instance.id}].`);
            };
            this.ws.onopen = () => {
                instance.intervalPing = setInterval(instance.sendPing.bind(instance), 1000);
            };
            this.ws.onmessage = (msg) => {
                if (msg == null || msg.data == null)
                    return;
                const message = JSON.parse(msg.data.toString());
                switch (message.key) {
                    case "pong": {
                        instance.clientId = message.value.clientId;
                        const now = Date.now();
                        instance.ping = Date.now() - instance.pingDate;
                        instance.getPong = true;
                        resolve(`Region server [${instance.id}] loaded.`);
                        break;
                    }
                    case "roomInit": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.currentRoom = new Room_1.default(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.initRoom(main_1.default.currentUser.currentRoom);
                        break;
                    }
                    case "playerJoin": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.playerJoin(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.playerJoin(message.value, main_1.default.currentUser.currentRoom.currentPlayers.length);
                        if (main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.game) {
                            const audio = main_1.default.resourceManager.resources["AUDIO_JOIN"].cloneNode();
                            audio.play();
                        }
                        break;
                    }
                    case "playerLeave": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.playerLeave(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.playerLeave(message.value, main_1.default.currentUser.currentRoom.currentPlayers.length);
                        if (main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.game) {
                            const audio = main_1.default.resourceManager.resources["AUDIO_LEAVE"].cloneNode();
                            audio.play();
                        }
                        break;
                    }
                    case "mapData": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.stadium = message.value;
                        break;
                    }
                    case "worldState": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.update(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.update(main_1.default.currentUser.currentRoom);
                        break;
                    }
                    case "addHistory": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.history.push(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.addHistory(message.value);
                        break;
                    }
                    case "gamePause": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        if (message.value == false) {
                            if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                                main_1.default.sceneManager.scene.state.unpauseInterval = (3000 - this.ping);
                        }
                        break;
                    }
                    case "sound": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        if (!main_1.default.settingsManager.audio.general || !main_1.default.settingsManager.audio.game)
                            return;
                        switch (message.value) {
                            case "kick": {
                                const audio = main_1.default.resourceManager.resources["AUDIO_KICK"].cloneNode();
                                audio.play();
                                break;
                            }
                            case "goal": {
                                main_1.default.resourceManager.resources["AUDIO_GOAL"].play();
                                main_1.default.resourceManager.resources["AUDIO_CROWD"].volume = 1;
                                main_1.default.resourceManager.resources["AUDIO_CROWD"].play();
                                for (let i = 20; i < 40; i++) {
                                    setTimeout(() => {
                                        main_1.default.resourceManager.resources["AUDIO_CROWD"].volume = ((40 - i) / 40) * 2;
                                    }, i * 100);
                                }
                                setTimeout(() => {
                                    main_1.default.resourceManager.resources["AUDIO_CROWD"].pause();
                                    main_1.default.resourceManager.resources["AUDIO_CROWD"].currentTime = 0;
                                }, 4000);
                                break;
                            }
                        }
                        break;
                    }
                    case "reorderPlayer": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.reorderPlayer(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.refreshPickList();
                        break;
                    }
                    case "pickMode": {
                        if (main_1.default.currentUser == null || main_1.default.currentUser.currentRoom == null)
                            return;
                        main_1.default.currentUser.currentRoom.pickMode = message.value;
                        if (main_1.default.currentUser.currentRoom.pickMode == main_1.default.currentUser.id && main_1.default.settingsManager.audio.general && main_1.default.settingsManager.audio.notif) {
                            const audio = main_1.default.resourceManager.resources["AUDIO_NOTIF"].cloneNode();
                            audio.play();
                            break;
                        }
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default) {
                            main_1.default.sceneManager.scene.refreshPickList();
                            if (message.value != null)
                                main_1.default.sceneManager.scene.showMenu();
                        }
                        break;
                    }
                    case "hideMenu": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.hideMenu();
                        break;
                    }
                    case "chatMessage": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.newChat(message.value);
                        break;
                    }
                }
            };
        });
    }
    sendPing() {
        if (this.getPong == false)
            return;
        this.getPong = false;
        this.pingDate = Date.now();
        this.sendMsg("ping", this.ping);
    }
    sendMsg(key, value = null) {
        if (this.ws == null || this.ws.readyState !== WebSocket.OPEN)
            return main_1.default.logger.sendLog("ERROR", "Impossible to send message to region server, websockets are disconnect.");
        const message = JSON.stringify({ key: key, value: value });
        this.ws.send(message);
    }
    destroy() { }
}
exports["default"] = RegionServer;


/***/ }),

/***/ "./client/WebSockets/RegionServer/RegionServerManager.ts":
/*!***************************************************************!*\
  !*** ./client/WebSockets/RegionServer/RegionServerManager.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __importDefault(__webpack_require__(/*! ../../main */ "./client/main.ts"));
const RegionServer_1 = __importDefault(__webpack_require__(/*! ./RegionServer */ "./client/WebSockets/RegionServer/RegionServer.ts"));
class RegionServerManager {
    constructor() {
        this.regionServers = {};
    }
    getServerById(id) {
        for (let i in this.regionServers) {
            const regionServer = this.regionServers[i];
            if (regionServer.id == id)
                return regionServer;
        }
        return null;
    }
    initServer(data) {
        if (data.ip == null || this.getServerById(data.id) != null)
            return;
        const regionServer = new RegionServer_1.default(data);
        this.regionServers[regionServer.id] = regionServer;
        main_1.default.logger.sendLog("INFO", `Region server [${data.id}] loaded.`);
    }
    initAllServers() {
        return new Promise((resolve, reject) => {
            const listOfPromise = [];
            for (let i in this.regionServers) {
                listOfPromise.push(this.regionServers[i].connect());
            }
            Promise.all(listOfPromise).then(() => {
                resolve("All region servers loaded.");
            }).catch((e) => reject(e.toString()));
        });
    }
    destroyServer(id) {
        const regionServer = this.getServerById(id);
        if (regionServer == null)
            return;
        regionServer.destroy();
        delete this.regionServers[id];
        main_1.default.logger.sendLog("INFO", `Region server [${id}] unloaded.`);
    }
    getAllServers() {
        const servers = [];
        for (let i in this.regionServers) {
            const server = this.regionServers[i];
            servers.push({ id: server.id, ip: server.ip, port: server.port, ping: server.ping });
        }
        return servers.sort((a, b) => Number(a.ping) - Number(b.ping));
    }
}
exports["default"] = RegionServerManager;


/***/ }),

/***/ "./client/WebSockets/WebSocketsManager.ts":
/*!************************************************!*\
  !*** ./client/WebSockets/WebSocketsManager.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Config_1 = __importDefault(__webpack_require__(/*! ../Config/Config */ "./client/Config/Config.ts"));
const GameScene_1 = __importDefault(__webpack_require__(/*! ../Scene/List/GameScene */ "./client/Scene/List/GameScene.ts"));
const User_1 = __importDefault(__webpack_require__(/*! ../User/User */ "./client/User/User.ts"));
const main_1 = __importDefault(__webpack_require__(/*! ../main */ "./client/main.ts"));
class WebsocketManager {
    constructor() {
        this.ws = null;
    }
    init() {
        return new Promise((resolve, reject) => {
            const instance = this;
            main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                message: main_1.default.languageManager.getValueForKey('LOADING_CONNECTION_TO_MAIN_SERVER')
            });
            this.ws = new WebSocket(`ws://${Config_1.default.SERVER_HOST}:${Config_1.default.SERVER_PORT}`);
            this.ws.onclose = () => {
                main_1.default.logger.sendLog("ERROR", "Connection to server losted.");
                main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                    message: main_1.default.languageManager.getValueForKey('GENERIC_ERROR_CONNECTION_LOSTED')
                });
            };
            this.ws.onopen = () => {
                main_1.default.logger.sendLog("SUCCESS", "Connected to server.");
                instance.sendMsg("fetchingServers");
                main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                    message: main_1.default.languageManager.getValueForKey('LOADING_FETCHING_REGION_SERVERS')
                });
            };
            this.ws.onmessage = (msg) => {
                if (msg == null || msg.data == null)
                    return;
                const message = JSON.parse(msg.data.toString());
                switch (message.key) {
                    case "getAllServers": {
                        message.value.forEach((server) => main_1.default.regionServerManager.initServer(server));
                        main_1.default.regionServerManager.initAllServers()
                            .then((message) => {
                            main_1.default.logger.sendLog("SUCCESS", message);
                            if (main_1.default.regionServerManager.getAllServers().length == 0)
                                return main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                                    message: main_1.default.languageManager.getValueForKey('GENERIC_ERROR_NO_SERVER_AVAILABLE')
                                });
                            main_1.default.sceneManager.initScene(1 /* SceneList.LoginScene */);
                        })
                            .catch((e) => {
                            main_1.default.logger.sendLog("ERROR", e.toString());
                            main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                                message: main_1.default.languageManager.getValueForKey('GENERIC_ERROR_SERVERS')
                            });
                        });
                        break;
                    }
                    case "errorLogin": {
                        main_1.default.sceneManager.initScene(1 /* SceneList.LoginScene */, {
                            error: message.value.key != null ? message.value.key : message.value,
                            args: message.value.args != null ? message.value.args : []
                        });
                        break;
                    }
                    case "disconnect": {
                        main_1.default.currentUser = null;
                        main_1.default.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                            message: main_1.default.languageManager.getValueForKey(message.value.key, message.value.params)
                        });
                        break;
                    }
                    case "logged": {
                        main_1.default.currentUser = new User_1.default(message.value);
                        main_1.default.sceneManager.initScene(2 /* SceneList.GameScene */, {
                            currentUser: main_1.default.currentUser
                        });
                        break;
                    }
                    case "chatMessage": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.newChat(message.value);
                        break;
                    }
                    case "profileData": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.profileData(message.value);
                        break;
                    }
                    case "friendsData": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.friends = message.value;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.reloadFriends();
                        break;
                    }
                    case "shopData": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.shopData(message.value);
                        break;
                    }
                    case "shopItems": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.shopDataItems(message.value);
                        break;
                    }
                    case "avatarUpdate": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.avatar = message.value;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.updateAvatar();
                        break;
                    }
                    case "rankUpdate": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.rank = message.value;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.renderMenu();
                        break;
                    }
                    case "coins": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.coins = message.value;
                        break;
                    }
                    case "addItem": {
                        if (main_1.default.currentUser == null)
                            return;
                        main_1.default.currentUser.items.push(message.value);
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.refreshShop();
                        break;
                    }
                    case "leaderboardData": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.setLeaderboardData(message.value);
                        break;
                    }
                    case "adminAlert": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.renderAdminAlert(message.value);
                        break;
                    }
                    case "adminData": {
                        if (main_1.default.currentUser == null)
                            return;
                        if (main_1.default.sceneManager.scene instanceof GameScene_1.default)
                            main_1.default.sceneManager.scene.renderAdmin(message.value);
                        break;
                    }
                }
            };
        });
    }
    sendMsg(key, value = null) {
        if (this.ws == null || this.ws.readyState !== WebSocket.OPEN)
            return main_1.default.logger.sendLog("ERROR", "Impossible to send message to server, websockets are disconnect.");
        const message = JSON.stringify({ key: key, value: value });
        this.ws.send(message);
    }
}
exports["default"] = WebsocketManager;


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./Utils/Utils */ "./client/Utils/Utils.ts");
const Logger_1 = __importDefault(__webpack_require__(/*! ../shared/Logger/Logger */ "./shared/Logger/Logger.ts"));
const LanguageManager_1 = __importDefault(__webpack_require__(/*! ./Language/LanguageManager */ "./client/Language/LanguageManager.ts"));
const SceneManager_1 = __importDefault(__webpack_require__(/*! ./Scene/SceneManager */ "./client/Scene/SceneManager.ts"));
const Config_1 = __importDefault(__webpack_require__(/*! ./Config/Config */ "./client/Config/Config.ts"));
const ResourceManager_1 = __importDefault(__webpack_require__(/*! ./Ressource/ResourceManager */ "./client/Ressource/ResourceManager.ts"));
const SettingsManager_1 = __importDefault(__webpack_require__(/*! ./Settings/SettingsManager */ "./client/Settings/SettingsManager.ts"));
const WebSocketsManager_1 = __importDefault(__webpack_require__(/*! ./WebSockets/WebSocketsManager */ "./client/WebSockets/WebSocketsManager.ts"));
const RegionServerManager_1 = __importDefault(__webpack_require__(/*! ./WebSockets/RegionServer/RegionServerManager */ "./client/WebSockets/RegionServer/RegionServerManager.ts"));
const GameScene_1 = __importDefault(__webpack_require__(/*! ./Scene/List/GameScene */ "./client/Scene/List/GameScene.ts"));
let Application;
class App {
    constructor() {
        this.logger = new Logger_1.default();
        this.languageManager = new LanguageManager_1.default();
        this.sceneManager = new SceneManager_1.default();
        this.resourceManager = new ResourceManager_1.default();
        this.webSocketsManager = new WebSocketsManager_1.default();
        this.regionServerManager = new RegionServerManager_1.default();
        this.settingsManager = new SettingsManager_1.default();
        this.currentUser = null;
        this.lastCall = performance.now();
        this.elapsed = performance.now();
        this.elpasedThen = performance.now();
        window.requestAnimationFrame(this.update.bind(this));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.languageManager.init();
            this.settingsManager.init();
            this.sceneManager.initScene(0 /* SceneList.MessageScene */, {
                message: Application.languageManager.getValueForKey('LOADING_MESSAGE', [Config_1.default.NAME])
            });
            let messageLoading = yield this.resourceManager.init();
            Application.logger.sendLog("SUCCESS", messageLoading);
            yield this.webSocketsManager.init();
        });
    }
    update() {
        const now = performance.now();
        this.elapsed = now - this.elpasedThen;
        if (this.settingsManager.graphics.fps != 0 && this.elapsed < (1000 / this.settingsManager.graphics.fps)) {
            window.requestAnimationFrame(this.update.bind(this));
            return;
        }
        if (this.settingsManager.graphics.fps != 0)
            this.elpasedThen = now - (this.elapsed % (1000 / this.settingsManager.graphics.fps));
        const delta = (now - this.lastCall) / 1000;
        this.lastCall = now;
        if (this.sceneManager.scene instanceof GameScene_1.default) {
            this.sceneManager.scene.renderGame(delta);
            this.sceneManager.scene.setFps(Math.round(1 / delta));
        }
        window.requestAnimationFrame(this.update.bind(this));
    }
}
Application = new App();
exports["default"] = Application;
window.addEventListener("load", (event) => {
    Application.init().catch((e) => Application.logger.sendCriticalError(e.toString()));
});


/***/ }),

/***/ "./shared/Base/Base.ts":
/*!*****************************!*\
  !*** ./shared/Base/Base.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = void 0;
exports.Base = {
    hockey: {
        bg_color: 'rgb(85, 85, 85)',
        border_color: 'rgb(233,204,110)',
    },
    grass: {
        bg_color: 'rgb(113,140,90)',
        border_color: 'rgb(199,230,189)',
    },
    segment_color: 'rgb(0,0,0)',
    playerPhysics: {
        radius: 15,
        bCoef: 0.5,
        invMass: 0.5,
        damping: 0.96,
        acceleration: 0.1,
        kickingAcceleration: 0.07,
        kickingDamping: 0.96,
        kickStrength: 5,
        pos: [0, 0],
        cMask: ['all'],
        cGroup: [''],
    },
    ballPhysics: {
        radius: 10,
        bCoef: 0.5,
        invMass: 1,
        damping: 0.99,
        color: 'FFFFFF',
        pos: [0, 0],
        cMask: ['all'],
        cGroup: ['ball'],
    },
    discPhysics: {
        radius: 10,
        bCoef: 0.5,
        invMass: 0,
        damping: 0.99,
        color: 'rgb(255,255,255)',
        cMask: ['all'],
        cGroup: ['all'],
    },
    segmentPhysics: {
        curve: 0,
        bCoef: 1,
        cGroup: ['wall'],
        cMask: ['all'],
    },
    planePhysics: {
        bCoef: 1,
        cGroup: ['wall'],
        cMask: ['all'],
    },
    vertexPhysics: {
        bCoef: 1,
        cGroup: ['wall'],
        cMask: ['all'],
    },
    collisionFlags: {
        all: 63,
        ball: 1,
        blue: 4,
        blueKO: 16,
        c0: 268435456,
        c1: 536870912,
        c2: 1073741824,
        c3: -2147483648,
        kick: 64,
        red: 2,
        redKO: 8,
        score: 128,
        wall: 32,
    }
};


/***/ }),

/***/ "./shared/Color/Color.ts":
/*!*******************************!*\
  !*** ./shared/Color/Color.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    ROOM_ANNOUNCEMENT: "#db8822",
    FRIEND: "#28b34d",
    ERROR: "#b92626"
};


/***/ }),

/***/ "./shared/Elo/Elo.ts":
/*!***************************!*\
  !*** ./shared/Elo/Elo.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElo = void 0;
const getElo = function (elo) {
    switch (true) {
        case (elo > 2000):
            return { name: "GAME_ELO_CHALLENGER", value: 0 };
        case (elo > 1900):
            return { name: "GAME_ELO_CHAMPION", value: 5 };
        case (elo > 1800):
            return { name: "GAME_ELO_CHAMPION", value: 4 };
        case (elo > 1700):
            return { name: "GAME_ELO_CHAMPION", value: 3 };
        case (elo > 1600):
            return { name: "GAME_ELO_CHAMPION", value: 2 };
        case (elo > 1500):
            return { name: "GAME_ELO_CHAMPION", value: 1 };
        case (elo > 1400):
            return { name: "GAME_ELO_DIAMOND", value: 5 };
        case (elo > 1300):
            return { name: "GAME_ELO_DIAMOND", value: 4 };
        case (elo > 1200):
            return { name: "GAME_ELO_DIAMOND", value: 3 };
        case (elo > 1100):
            return { name: "GAME_ELO_DIAMOND", value: 2 };
        case (elo > 1000):
            return { name: "GAME_ELO_DIAMOND", value: 1 };
        case (elo > 900):
            return { name: "GAME_ELO_PLATINIUM", value: 5 };
        case (elo > 850):
            return { name: "GAME_ELO_PLATINIUM", value: 4 };
        case (elo > 800):
            return { name: "GAME_ELO_PLATINIUM", value: 3 };
        case (elo > 750):
            return { name: "GAME_ELO_PLATINIUM", value: 2 };
        case (elo > 700):
            return { name: "GAME_ELO_PLATINIUM", value: 1 };
        case (elo > 650):
            return { name: "GAME_ELO_GOLD", value: 5 };
        case (elo > 600):
            return { name: "GAME_ELO_GOLD", value: 4 };
        case (elo > 550):
            return { name: "GAME_ELO_GOLD", value: 3 };
        case (elo > 500):
            return { name: "GAME_ELO_GOLD", value: 2 };
        case (elo > 450):
            return { name: "GAME_ELO_GOLD", value: 1 };
        case (elo > 400):
            return { name: "GAME_ELO_BRONZE", value: 5 };
        case (elo > 350):
            return { name: "GAME_ELO_BRONZE", value: 4 };
        case (elo > 300):
            return { name: "GAME_ELO_BRONZE", value: 3 };
        case (elo > 250):
            return { name: "GAME_ELO_BRONZE", value: 2 };
        case (elo > 200):
            return { name: "GAME_ELO_BRONZE", value: 1 };
        case (elo > 150):
            return { name: "GAME_ELO_IRON", value: 5 };
        case (elo > 100):
            return { name: "GAME_ELO_IRON", value: 4 };
        case (elo > 50):
            return { name: "GAME_ELO_IRON", value: 3 };
        case (elo > 25):
            return { name: "GAME_ELO_IRON", value: 2 };
        default:
            return { name: "GAME_ELO_IRON", value: 1 };
    }
};
exports.getElo = getElo;


/***/ }),

/***/ "./shared/Level/Level.ts":
/*!*******************************!*\
  !*** ./shared/Level/Level.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLevel = void 0;
const getLevel = function (xp) {
    return Math.floor((Math.sqrt(100 * (2 * xp + 25)) + 50) / 100);
};
exports.getLevel = getLevel;


/***/ }),

/***/ "./shared/Logger/LogLevel.ts":
/*!***********************************!*\
  !*** ./shared/Logger/LogLevel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
};
exports["default"] = LogLevel;


/***/ }),

/***/ "./shared/Logger/Logger.ts":
/*!*********************************!*\
  !*** ./shared/Logger/Logger.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const LogLevel_1 = __importDefault(__webpack_require__(/*! ./LogLevel */ "./shared/Logger/LogLevel.ts"));
class Logger {
    sendLog(logKey, message) {
        if (typeof window === 'undefined')
            console.log(LogLevel_1.default[logKey].bgColor, LogLevel_1.default[logKey].name, "\x1b[0m", message);
        else
            console.log(`%c ${LogLevel_1.default[logKey].name} %c ${message}`, `background-color: ${LogLevel_1.default[logKey].bgWebColor}; color: #FFF; font-weight: bold`, `background-color: inherit; color: inherit`);
    }
    sendCriticalError(message) {
        this.sendLog("CRITICAL_ERROR", message);
        if (typeof window === 'undefined')
            process.exit;
    }
}
exports["default"] = Logger;


/***/ }),

/***/ "./shared/RoomState/RoomState.ts":
/*!***************************************!*\
  !*** ./shared/RoomState/RoomState.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomState = void 0;
var RoomState;
(function (RoomState) {
    RoomState[RoomState["KICK_OFF_RESET"] = 0] = "KICK_OFF_RESET";
    RoomState[RoomState["PAUSE"] = 1] = "PAUSE";
    RoomState[RoomState["UNPAUSE"] = 2] = "UNPAUSE";
    RoomState[RoomState["PLAY"] = 3] = "PLAY";
    RoomState[RoomState["GOAL_SCORE"] = 4] = "GOAL_SCORE";
    RoomState[RoomState["GAME_ENDED"] = 5] = "GAME_ENDED";
})(RoomState || (exports.RoomState = RoomState = {}));


/***/ }),

/***/ "./shared/ShareableData/ShareableData.ts":
/*!***********************************************!*\
  !*** ./shared/ShareableData/ShareableData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ShareableData {
    constructor(ts, p) {
        this.timestamp = ts;
        this.shareableData = p;
    }
}
exports["default"] = ShareableData;


/***/ }),

/***/ "./shared/Team/Team.ts":
/*!*****************************!*\
  !*** ./shared/Team/Team.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
};
exports["default"] = Team;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./client/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsa0RBQWtEO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQixRQUFRLHVCQUF1QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvRUFBb0U7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxRUFBcUUsZ0NBQWdDLHdDQUF3QztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNU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QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsTUFBTTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUN6REY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUM1RkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUN2QkY7QUFDYjtBQUNBLDBCQUEwQixLQUFLLElBQUk7QUFDbkM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtCQUErQixtQkFBTyxDQUFDLDhDQUFpQjtBQUN4RCxvQ0FBb0MsbUJBQU8sQ0FBQyxvRUFBNEI7QUFDeEUsK0JBQStCLG1CQUFPLENBQUMsb0NBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVEsR0FBRyxVQUFVO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFlBQVk7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxZQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ25NRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtCQUErQixtQkFBTyxDQUFDLG9DQUFZO0FBQ25ELHVDQUF1QyxtQkFBTyxDQUFDLHdFQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFFBQVE7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxHQUFHO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0VBQW9FO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDdERGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUNBQWlDLG1CQUFPLENBQUMsbURBQWtCO0FBQzNELG9DQUFvQyxtQkFBTyxDQUFDLGlFQUF5QjtBQUNyRSwrQkFBK0IsbUJBQU8sQ0FBQywyQ0FBYztBQUNyRCwrQkFBK0IsbUJBQU8sQ0FBQyxpQ0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNENBQTRDLDZCQUE2QixHQUFHLDZCQUE2QjtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2hMRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLDhDQUFlO0FBQ3ZCLGlDQUFpQyxtQkFBTyxDQUFDLDBEQUF5QjtBQUNsRSwwQ0FBMEMsbUJBQU8sQ0FBQyx3RUFBNEI7QUFDOUUsdUNBQXVDLG1CQUFPLENBQUMsNERBQXNCO0FBQ3JFLGlDQUFpQyxtQkFBTyxDQUFDLGtEQUFpQjtBQUMxRCwwQ0FBMEMsbUJBQU8sQ0FBQywwRUFBNkI7QUFDL0UsMENBQTBDLG1CQUFPLENBQUMsd0VBQTRCO0FBQzlFLDRDQUE0QyxtQkFBTyxDQUFDLGdGQUFnQztBQUNwRiw4Q0FBOEMsbUJBQU8sQ0FBQyw4R0FBK0M7QUFDckcsb0NBQW9DLG1CQUFPLENBQUMsZ0VBQXdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUMxRVk7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUVhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYzs7Ozs7Ozs7Ozs7QUNyRUQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNOSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDOUNGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUNBQW1DLG1CQUFPLENBQUMsK0NBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQ0FBaUMsS0FBSyxRQUFRLHdCQUF3Qix3Q0FBd0MsYUFBYSxnREFBZ0Q7QUFDek07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNuQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixpQkFBaUIsaUJBQWlCOzs7Ozs7Ozs7OztBQ1h0QztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNSRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDdEJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9Db25maWcvQ29uZmlnLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L0NvbmZpZy9SZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvTGFuZ3VhZ2UvTGFuZ3VhZ2VMaXN0LnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L0xhbmd1YWdlL0xhbmd1YWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9MYW5ndWFnZS9MaXN0L0VOLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L0xhbmd1YWdlL0xpc3QvRlIudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvUmVzc291cmNlL1Jlc291cmNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9Sb29tL1Jvb20udHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvU2NlbmUvTGlzdC9HYW1lU2NlbmUudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvU2NlbmUvTGlzdC9Mb2dpblNjZW5lLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L1NjZW5lL0xpc3QvTWVzc2FnZVNjZW5lLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L1NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L1NjZW5lL1NjZW5lTGlzdC50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9TY2VuZS9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvU2V0dGluZ3MvU2V0dGluZ3NNYW5hZ2VyLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L1VzZXIvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9VdGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9XZWJTb2NrZXRzL1JlZ2lvblNlcnZlci9SZWdpb25TZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9jbGllbnQvV2ViU29ja2V0cy9SZWdpb25TZXJ2ZXIvUmVnaW9uU2VydmVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL2NsaWVudC9XZWJTb2NrZXRzL1dlYlNvY2tldHNNYW5hZ2VyLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vY2xpZW50L21haW4udHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9zaGFyZWQvQmFzZS9CYXNlLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vc2hhcmVkL0NvbG9yL0NvbG9yLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vc2hhcmVkL0Vsby9FbG8udHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9zaGFyZWQvTGV2ZWwvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9zaGFyZWQvTG9nZ2VyL0xvZ0xldmVsLnRzIiwid2VicGFjazovL25vZGViYWxsLy4vc2hhcmVkL0xvZ2dlci9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9zaGFyZWQvUm9vbVN0YXRlL1Jvb21TdGF0ZS50cyIsIndlYnBhY2s6Ly9ub2RlYmFsbC8uL3NoYXJlZC9TaGFyZWFibGVEYXRhL1NoYXJlYWJsZURhdGEudHMiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvLi9zaGFyZWQvVGVhbS9UZWFtLnRzIiwid2VicGFjazovL25vZGViYWxsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGViYWxsL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm9kZWJhbGwvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25vZGViYWxsL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBOQU1FOiBcIk5vZGVCYWxsXCIsXG4gICAgLy9TRVJWRVJfSE9TVDogXCIxNDEuOTUuMTcuNDhcIixcbiAgICBTRVJWRVJfSE9TVDogXCIxMjcuMC4wLjFcIixcbiAgICBTRVJWRVJfUE9SVDogODA5MCxcbiAgICBTRVJWRVJfVVBEQVRFX0lOVEVSVkFMOiA2MFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZXNvdXJjZXMgPSB2b2lkIDA7XG5leHBvcnRzLlJlc291cmNlcyA9IHtcbiAgICAvLyBBVURJT1xuICAgIEtJQ0s6IFwia2ljay53YXZcIixcbiAgICBKT0lOOiBcImpvaW4ud2F2XCIsXG4gICAgTEVBVkU6IFwibGVhdmUud2F2XCIsXG4gICAgSElHSExJR0hUOiBcImhpZ2hsaWdodC53YXZcIixcbiAgICBDUk9XRDogXCJjcm93ZC53YXZcIixcbiAgICBDSEFUOiBcImNoYXQud2F2XCIsXG4gICAgR09BTDogXCJnb2FsLndhdlwiLFxuICAgIE5PVElGOiBcIm5vdGlmLm1wM1wiLFxuICAgIC8vIElNQUdFU1xuICAgIFRJTEVfR1JBU1M6IFwiZ3Jhc3MucG5nXCIsXG4gICAgVElMRV9IT0NLRVk6IFwiaG9ja2V5LnBuZ1wiLFxuICAgIEFWQVRBUl8xOiBcImF2YXRhcnMvMS5zdmdcIixcbiAgICBBVkFUQVJfMjogXCJhdmF0YXJzLzIuc3ZnXCIsXG4gICAgQVZBVEFSXzM6IFwiYXZhdGFycy8zLnN2Z1wiLFxuICAgIEFWQVRBUl80OiBcImF2YXRhcnMvNC5zdmdcIixcbiAgICBBVkFUQVJfNTogXCJhdmF0YXJzLzUuc3ZnXCIsXG4gICAgQVZBVEFSXzY6IFwiYXZhdGFycy82LnN2Z1wiLFxuICAgIEFWQVRBUl83OiBcImF2YXRhcnMvNy5zdmdcIixcbiAgICBBVkFUQVJfODogXCJhdmF0YXJzLzguc3ZnXCIsXG4gICAgQVZBVEFSXzk6IFwiYXZhdGFycy85LnN2Z1wiLFxuICAgIEFWQVRBUl8xMDogXCJhdmF0YXJzLzEwLnN2Z1wiLFxuICAgIEFWQVRBUl8xMTogXCJhdmF0YXJzLzExLnN2Z1wiLFxuICAgIEFWQVRBUl8xMjogXCJhdmF0YXJzLzEyLnN2Z1wiLFxuICAgIEFWQVRBUl8xMzogXCJhdmF0YXJzLzEzLnN2Z1wiLFxuICAgIEFWQVRBUl8xNDogXCJhdmF0YXJzLzE0LnN2Z1wiLFxuICAgIEFWQVRBUl8xNTogXCJhdmF0YXJzLzE1LnN2Z1wiLFxuICAgIEFWQVRBUl8xNjogXCJhdmF0YXJzLzE2LnN2Z1wiLFxuICAgIEFWQVRBUl8xNzogXCJhdmF0YXJzLzE3LnN2Z1wiLFxuICAgIEFWQVRBUl8xODogXCJhdmF0YXJzLzE4LnN2Z1wiLFxuICAgIEFWQVRBUl8xOTogXCJhdmF0YXJzLzE5LnN2Z1wiLFxuICAgIEFWQVRBUl8yMDogXCJhdmF0YXJzLzIwLnN2Z1wiLFxuICAgIEFWQVRBUl8yMTogXCJhdmF0YXJzLzIxLnN2Z1wiLFxuICAgIEFWQVRBUl8yMjogXCJhdmF0YXJzLzIyLnN2Z1wiLFxuICAgIEFWQVRBUl8yMzogXCJhdmF0YXJzLzIzLnN2Z1wiLFxuICAgIEFWQVRBUl8yNDogXCJhdmF0YXJzLzI0LnN2Z1wiLFxuICAgIEFWQVRBUl8yNTogXCJhdmF0YXJzLzI1LnN2Z1wiLFxuICAgIEFWQVRBUl8yNjogXCJhdmF0YXJzLzI2LnN2Z1wiLFxuICAgIEFWQVRBUl8yNzogXCJhdmF0YXJzLzI3LnN2Z1wiLFxuICAgIEFWQVRBUl8yODogXCJhdmF0YXJzLzI4LnN2Z1wiLFxuICAgIEFWQVRBUl8yOTogXCJhdmF0YXJzLzI5LnN2Z1wiLFxuICAgIEFWQVRBUl8zMDogXCJhdmF0YXJzLzMwLnN2Z1wiLFxuICAgIEFWQVRBUl8zMTogXCJhdmF0YXJzLzMxLnN2Z1wiLFxuICAgIEFWQVRBUl8zMjogXCJhdmF0YXJzLzMyLnN2Z1wiLFxuICAgIEFWQVRBUl8zMzogXCJhdmF0YXJzLzMzLnN2Z1wiLFxuICAgIEFWQVRBUl8zNDogXCJhdmF0YXJzLzM0LnN2Z1wiLFxuICAgIEFWQVRBUl8zNTogXCJhdmF0YXJzLzM1LnN2Z1wiLFxuICAgIEFWQVRBUl8zNjogXCJhdmF0YXJzLzM2LnN2Z1wiLFxuICAgIEFWQVRBUl8zNzogXCJhdmF0YXJzLzM3LnN2Z1wiLFxuICAgIEFWQVRBUl8zODogXCJhdmF0YXJzLzM4LnN2Z1wiLFxuICAgIEFWQVRBUl8zOTogXCJhdmF0YXJzLzM5LnN2Z1wiLFxuICAgIEFWQVRBUl80MDogXCJhdmF0YXJzLzQwLnN2Z1wiLFxuICAgIEFWQVRBUl80MTogXCJhdmF0YXJzLzQxLnN2Z1wiLFxuICAgIEFWQVRBUl80MjogXCJhdmF0YXJzLzQyLnN2Z1wiLFxuICAgIEFWQVRBUl80MzogXCJhdmF0YXJzLzQzLnN2Z1wiLFxuICAgIEFWQVRBUl80NDogXCJhdmF0YXJzLzQ0LnN2Z1wiLFxuICAgIEFWQVRBUl80NTogXCJhdmF0YXJzLzQ1LnN2Z1wiLFxuICAgIEFWQVRBUl80NjogXCJhdmF0YXJzLzQ2LnN2Z1wiLFxuICAgIEFWQVRBUl80NzogXCJhdmF0YXJzLzQ3LnN2Z1wiLFxuICAgIEFWQVRBUl80ODogXCJhdmF0YXJzLzQ4LnN2Z1wiLFxuICAgIEFWQVRBUl80OTogXCJhdmF0YXJzLzQ5LnN2Z1wiLFxuICAgIEFWQVRBUl81MDogXCJhdmF0YXJzLzUwLnN2Z1wiLFxuICAgIEFWQVRBUl81MTogXCJhdmF0YXJzLzUxLnN2Z1wiLFxuICAgIEFWQVRBUl81MjogXCJhdmF0YXJzLzUyLnN2Z1wiLFxuICAgIEFWQVRBUl81MzogXCJhdmF0YXJzLzUzLnN2Z1wiLFxuICAgIEFWQVRBUl81NDogXCJhdmF0YXJzLzU0LnN2Z1wiLFxuICAgIEFWQVRBUl81NTogXCJhdmF0YXJzLzU1LnN2Z1wiLFxuICAgIEFWQVRBUl81NjogXCJhdmF0YXJzLzU2LnN2Z1wiLFxuICAgIEFWQVRBUl81NzogXCJhdmF0YXJzLzU3LnN2Z1wiLFxuICAgIEFWQVRBUl81ODogXCJhdmF0YXJzLzU4LnN2Z1wiLFxuICAgIEFWQVRBUl81OTogXCJhdmF0YXJzLzU5LnN2Z1wiLFxuICAgIEFWQVRBUl82MDogXCJhdmF0YXJzLzYwLnN2Z1wiLFxuICAgIEFWQVRBUl82MTogXCJhdmF0YXJzLzYxLnN2Z1wiLFxuICAgIEFWQVRBUl82MjogXCJhdmF0YXJzLzYyLnN2Z1wiLFxuICAgIEFWQVRBUl82MzogXCJhdmF0YXJzLzYzLnN2Z1wiLFxuICAgIEFWQVRBUl82NDogXCJhdmF0YXJzLzY0LnN2Z1wiLFxuICAgIEFWQVRBUl82NTogXCJhdmF0YXJzLzY1LnN2Z1wiLFxuICAgIEFWQVRBUl82NjogXCJhdmF0YXJzLzY2LnN2Z1wiLFxuICAgIEFWQVRBUl82NzogXCJhdmF0YXJzLzY3LnN2Z1wiLFxuICAgIEFWQVRBUl82ODogXCJhdmF0YXJzLzY4LnN2Z1wiLFxuICAgIEFWQVRBUl82OTogXCJhdmF0YXJzLzY5LnN2Z1wiLFxuICAgIEFWQVRBUl83MDogXCJhdmF0YXJzLzcwLnN2Z1wiLFxuICAgIEFWQVRBUl83MTogXCJhdmF0YXJzLzcxLnN2Z1wiLFxuICAgIEFWQVRBUl83MjogXCJhdmF0YXJzLzcyLnN2Z1wiLFxuICAgIEFWQVRBUl83MzogXCJhdmF0YXJzLzczLnN2Z1wiLFxuICAgIEFWQVRBUl83NDogXCJhdmF0YXJzLzc0LnN2Z1wiLFxuICAgIEFWQVRBUl83NTogXCJhdmF0YXJzLzc1LnN2Z1wiLFxuICAgIEFWQVRBUl83NjogXCJhdmF0YXJzLzc2LnN2Z1wiLFxuICAgIEFWQVRBUl83NzogXCJhdmF0YXJzLzc3LnN2Z1wiLFxuICAgIEFWQVRBUl83ODogXCJhdmF0YXJzLzc4LnN2Z1wiLFxuICAgIEFWQVRBUl83OTogXCJhdmF0YXJzLzc5LnN2Z1wiLFxuICAgIEFWQVRBUl84MDogXCJhdmF0YXJzLzgwLnN2Z1wiLFxuICAgIEFWQVRBUl84MTogXCJhdmF0YXJzLzgxLnN2Z1wiLFxuICAgIEFWQVRBUl84MjogXCJhdmF0YXJzLzgyLnN2Z1wiLFxuICAgIEFWQVRBUl84MzogXCJhdmF0YXJzLzgzLnN2Z1wiLFxuICAgIEFWQVRBUl84NDogXCJhdmF0YXJzLzg0LnN2Z1wiLFxuICAgIEFWQVRBUl84NTogXCJhdmF0YXJzLzg1LnN2Z1wiLFxuICAgIEFWQVRBUl84NjogXCJhdmF0YXJzLzg2LnN2Z1wiLFxuICAgIEFWQVRBUl84NzogXCJhdmF0YXJzLzg3LnN2Z1wiLFxuICAgIEFWQVRBUl84ODogXCJhdmF0YXJzLzg4LnN2Z1wiLFxuICAgIEFWQVRBUl84OTogXCJhdmF0YXJzLzg5LnN2Z1wiLFxuICAgIEFWQVRBUl85MDogXCJhdmF0YXJzLzkwLnN2Z1wiLFxuICAgIEFWQVRBUl85MTogXCJhdmF0YXJzLzkxLnN2Z1wiLFxuICAgIEFWQVRBUl85MjogXCJhdmF0YXJzLzkyLnN2Z1wiLFxuICAgIEFWQVRBUl85MzogXCJhdmF0YXJzLzkzLnN2Z1wiLFxuICAgIEFWQVRBUl85NDogXCJhdmF0YXJzLzk0LnN2Z1wiLFxuICAgIEFWQVRBUl85NTogXCJhdmF0YXJzLzk1LnN2Z1wiLFxuICAgIEFWQVRBUl85NjogXCJhdmF0YXJzLzk2LnN2Z1wiLFxuICAgIEFWQVRBUl85NzogXCJhdmF0YXJzLzk3LnN2Z1wiLFxuICAgIEFWQVRBUl85ODogXCJhdmF0YXJzLzk4LnN2Z1wiLFxuICAgIEFWQVRBUl85OTogXCJhdmF0YXJzLzk5LnN2Z1wiLFxuICAgIEFWQVRBUl8xMDA6IFwiYXZhdGFycy8xMDAuc3ZnXCIsXG4gICAgQVZBVEFSXzEwMTogXCJhdmF0YXJzLzEwMS5zdmdcIixcbiAgICBBVkFUQVJfMTAyOiBcImF2YXRhcnMvMTAyLnN2Z1wiLFxuICAgIEFWQVRBUl8xMDM6IFwiYXZhdGFycy8xMDMuc3ZnXCIsXG4gICAgQVZBVEFSXzEwNDogXCJhdmF0YXJzLzEwNC5zdmdcIixcbiAgICBBVkFUQVJfMTA1OiBcImF2YXRhcnMvMTA1LnN2Z1wiLFxuICAgIEFWQVRBUl8xMDY6IFwiYXZhdGFycy8xMDYuc3ZnXCIsXG4gICAgQVZBVEFSXzEwNzogXCJhdmF0YXJzLzEwNy5zdmdcIixcbiAgICBBVkFUQVJfMTA4OiBcImF2YXRhcnMvMTA4LnN2Z1wiLFxuICAgIEFWQVRBUl8xMDk6IFwiYXZhdGFycy8xMDkuc3ZnXCIsXG4gICAgQVZBVEFSXzExMDogXCJhdmF0YXJzLzExMC5zdmdcIixcbiAgICBBVkFUQVJfMTExOiBcImF2YXRhcnMvMTExLnN2Z1wiLFxuICAgIEFWQVRBUl8xMTI6IFwiYXZhdGFycy8xMTIuc3ZnXCIsXG4gICAgQVZBVEFSXzExMzogXCJhdmF0YXJzLzExMy5zdmdcIixcbiAgICBBVkFUQVJfMTE0OiBcImF2YXRhcnMvMTE0LnN2Z1wiLFxuICAgIEFWQVRBUl8xMTU6IFwiYXZhdGFycy8xMTUuc3ZnXCIsXG4gICAgQVZBVEFSXzExNjogXCJhdmF0YXJzLzExNi5zdmdcIixcbiAgICBBVkFUQVJfMTE3OiBcImF2YXRhcnMvMTE3LnN2Z1wiLFxuICAgIEFWQVRBUl8xMTg6IFwiYXZhdGFycy8xMTguc3ZnXCIsXG4gICAgQVZBVEFSXzExOTogXCJhdmF0YXJzLzExOS5zdmdcIixcbiAgICBBVkFUQVJfMTIwOiBcImF2YXRhcnMvMTIwLnN2Z1wiLFxuICAgIEFWQVRBUl8xMjE6IFwiYXZhdGFycy8xMjEuc3ZnXCIsXG4gICAgQVZBVEFSXzEyMjogXCJhdmF0YXJzLzEyMi5zdmdcIixcbiAgICBBVkFUQVJfMTIzOiBcImF2YXRhcnMvMTIzLnN2Z1wiLFxuICAgIEFWQVRBUl8xMjQ6IFwiYXZhdGFycy8xMjQuc3ZnXCIsXG4gICAgQVZBVEFSXzEyNTogXCJhdmF0YXJzLzEyNS5zdmdcIixcbiAgICBBVkFUQVJfMTI2OiBcImF2YXRhcnMvMTI2LnN2Z1wiLFxuICAgIEFWQVRBUl8xMjc6IFwiYXZhdGFycy8xMjcuc3ZnXCIsXG4gICAgQVZBVEFSXzEyODogXCJhdmF0YXJzLzEyOC5zdmdcIixcbiAgICBBVkFUQVJfMTI5OiBcImF2YXRhcnMvMTI5LnN2Z1wiLFxuICAgIEFWQVRBUl8xMzA6IFwiYXZhdGFycy8xMzAuc3ZnXCIsXG4gICAgQVZBVEFSXzEzMTogXCJhdmF0YXJzLzEzMS5zdmdcIixcbiAgICBBVkFUQVJfMTMyOiBcImF2YXRhcnMvMTMyLnN2Z1wiLFxuICAgIEFWQVRBUl8xMzM6IFwiYXZhdGFycy8xMzMuc3ZnXCIsXG4gICAgQVZBVEFSXzEzNDogXCJhdmF0YXJzLzEzNC5zdmdcIixcbiAgICBBVkFUQVJfMTM1OiBcImF2YXRhcnMvMTM1LnN2Z1wiLFxuICAgIEFWQVRBUl8xMzY6IFwiYXZhdGFycy8xMzYuc3ZnXCIsXG4gICAgQVZBVEFSXzEzNzogXCJhdmF0YXJzLzEzNy5zdmdcIixcbiAgICBBVkFUQVJfMTM4OiBcImF2YXRhcnMvMTM4LnN2Z1wiLFxuICAgIEFWQVRBUl8xMzk6IFwiYXZhdGFycy8xMzkuc3ZnXCIsXG4gICAgQVZBVEFSXzE0MDogXCJhdmF0YXJzLzE0MC5zdmdcIixcbiAgICBBVkFUQVJfMTQxOiBcImF2YXRhcnMvMTQxLnN2Z1wiLFxuICAgIEFWQVRBUl8xNDI6IFwiYXZhdGFycy8xNDIuc3ZnXCIsXG4gICAgQVZBVEFSXzE0MzogXCJhdmF0YXJzLzE0My5zdmdcIixcbiAgICBBVkFUQVJfMTQ0OiBcImF2YXRhcnMvMTQ0LnN2Z1wiLFxuICAgIEFWQVRBUl8xNDU6IFwiYXZhdGFycy8xNDUuc3ZnXCIsXG4gICAgQVZBVEFSXzE0NjogXCJhdmF0YXJzLzE0Ni5zdmdcIixcbiAgICBBVkFUQVJfMTQ3OiBcImF2YXRhcnMvMTQ3LnN2Z1wiLFxuICAgIEFWQVRBUl8xNDg6IFwiYXZhdGFycy8xNDguc3ZnXCIsXG4gICAgQVZBVEFSXzE0OTogXCJhdmF0YXJzLzE0OS5zdmdcIixcbiAgICBBVkFUQVJfMTUwOiBcImF2YXRhcnMvMTUwLnN2Z1wiLFxuICAgIEFWQVRBUl8xNTE6IFwiYXZhdGFycy8xNTEuc3ZnXCIsXG4gICAgQVZBVEFSXzE1MjogXCJhdmF0YXJzLzE1Mi5zdmdcIixcbiAgICBBVkFUQVJfMTUzOiBcImF2YXRhcnMvMTUzLnN2Z1wiLFxuICAgIEFWQVRBUl8xNTQ6IFwiYXZhdGFycy8xNTQuc3ZnXCIsXG4gICAgQVZBVEFSXzE1NTogXCJhdmF0YXJzLzE1NS5zdmdcIixcbiAgICBBVkFUQVJfMTU2OiBcImF2YXRhcnMvMTU2LnN2Z1wiLFxuICAgIEFWQVRBUl8xNTc6IFwiYXZhdGFycy8xNTcuc3ZnXCIsXG4gICAgQVZBVEFSXzE1ODogXCJhdmF0YXJzLzE1OC5zdmdcIixcbiAgICBBVkFUQVJfMTU5OiBcImF2YXRhcnMvMTU5LnN2Z1wiLFxuICAgIEFWQVRBUl8xNjA6IFwiYXZhdGFycy8xNjAuc3ZnXCIsXG4gICAgQVZBVEFSXzE2MTogXCJhdmF0YXJzLzE2MS5zdmdcIixcbiAgICBBVkFUQVJfMTYyOiBcImF2YXRhcnMvMTYyLnN2Z1wiLFxuICAgIEFWQVRBUl8xNjM6IFwiYXZhdGFycy8xNjMuc3ZnXCIsXG4gICAgQVZBVEFSXzE2NDogXCJhdmF0YXJzLzE2NC5zdmdcIixcbiAgICBBVkFUQVJfMTY1OiBcImF2YXRhcnMvMTY1LnN2Z1wiLFxuICAgIEFWQVRBUl8xNjY6IFwiYXZhdGFycy8xNjYuc3ZnXCIsXG4gICAgQVZBVEFSXzE2NzogXCJhdmF0YXJzLzE2Ny5zdmdcIixcbiAgICBBVkFUQVJfMTY4OiBcImF2YXRhcnMvMTY4LnN2Z1wiLFxuICAgIEFWQVRBUl8xNjk6IFwiYXZhdGFycy8xNjkuc3ZnXCIsXG4gICAgQVZBVEFSXzE3MDogXCJhdmF0YXJzLzE3MC5zdmdcIixcbiAgICBBVkFUQVJfMTcxOiBcImF2YXRhcnMvMTcxLnN2Z1wiLFxuICAgIEFWQVRBUl8xNzI6IFwiYXZhdGFycy8xNzIuc3ZnXCIsXG4gICAgQVZBVEFSXzE3MzogXCJhdmF0YXJzLzE3My5zdmdcIixcbiAgICBBVkFUQVJfMTc0OiBcImF2YXRhcnMvMTc0LnN2Z1wiLFxuICAgIEFWQVRBUl8xNzU6IFwiYXZhdGFycy8xNzUuc3ZnXCIsXG4gICAgQVZBVEFSXzE3NjogXCJhdmF0YXJzLzE3Ni5zdmdcIixcbiAgICBBVkFUQVJfMTc3OiBcImF2YXRhcnMvMTc3LnN2Z1wiLFxuICAgIEFWQVRBUl8xNzg6IFwiYXZhdGFycy8xNzguc3ZnXCIsXG4gICAgQVZBVEFSXzE3OTogXCJhdmF0YXJzLzE3OS5zdmdcIixcbiAgICBBVkFUQVJfMTgwOiBcImF2YXRhcnMvMTgwLnN2Z1wiLFxuICAgIEFWQVRBUl8xODE6IFwiYXZhdGFycy8xODEuc3ZnXCIsXG4gICAgQVZBVEFSXzE4MjogXCJhdmF0YXJzLzE4Mi5zdmdcIixcbiAgICBBVkFUQVJfMTgzOiBcImF2YXRhcnMvMTgzLnN2Z1wiLFxuICAgIEFWQVRBUl8xODQ6IFwiYXZhdGFycy8xODQuc3ZnXCIsXG4gICAgQVZBVEFSXzE4NTogXCJhdmF0YXJzLzE4NS5zdmdcIixcbiAgICBBVkFUQVJfMTg2OiBcImF2YXRhcnMvMTg2LnN2Z1wiLFxuICAgIEFWQVRBUl8xODc6IFwiYXZhdGFycy8xODcuc3ZnXCIsXG4gICAgQVZBVEFSXzE4ODogXCJhdmF0YXJzLzE4OC5zdmdcIixcbiAgICBBVkFUQVJfMTg5OiBcImF2YXRhcnMvMTg5LnN2Z1wiLFxuICAgIEFWQVRBUl8xOTA6IFwiYXZhdGFycy8xOTAuc3ZnXCIsXG4gICAgQVZBVEFSXzE5MTogXCJhdmF0YXJzLzE5MS5zdmdcIixcbiAgICBBVkFUQVJfMTkyOiBcImF2YXRhcnMvMTkyLnN2Z1wiLFxuICAgIEFWQVRBUl8xOTM6IFwiYXZhdGFycy8xOTMuc3ZnXCIsXG4gICAgQVZBVEFSXzE5NDogXCJhdmF0YXJzLzE5NC5zdmdcIixcbiAgICBBVkFUQVJfMTk1OiBcImF2YXRhcnMvMTk1LnN2Z1wiLFxuICAgIEFWQVRBUl8xOTY6IFwiYXZhdGFycy8xOTYuc3ZnXCIsXG4gICAgQVZBVEFSXzE5NzogXCJhdmF0YXJzLzE5Ny5zdmdcIixcbiAgICBBVkFUQVJfMTk4OiBcImF2YXRhcnMvMTk4LnN2Z1wiLFxuICAgIEFWQVRBUl8xOTk6IFwiYXZhdGFycy8xOTkuc3ZnXCIsXG4gICAgQVZBVEFSXzIwMDogXCJhdmF0YXJzLzIwMC5zdmdcIixcbiAgICBBVkFUQVJfMjAxOiBcImF2YXRhcnMvMjAxLnN2Z1wiLFxuICAgIEFWQVRBUl8yMDI6IFwiYXZhdGFycy8yMDIuc3ZnXCIsXG4gICAgQVZBVEFSXzIwMzogXCJhdmF0YXJzLzIwMy5zdmdcIixcbiAgICBBVkFUQVJfMjA0OiBcImF2YXRhcnMvMjA0LnN2Z1wiLFxuICAgIEFWQVRBUl8yMDU6IFwiYXZhdGFycy8yMDUuc3ZnXCIsXG4gICAgQVZBVEFSXzIwNjogXCJhdmF0YXJzLzIwNi5zdmdcIixcbiAgICBBVkFUQVJfMjA3OiBcImF2YXRhcnMvMjA3LnN2Z1wiLFxuICAgIEFWQVRBUl8yMDg6IFwiYXZhdGFycy8yMDguc3ZnXCIsXG4gICAgQVZBVEFSXzIwOTogXCJhdmF0YXJzLzIwOS5zdmdcIixcbiAgICBBVkFUQVJfMjEwOiBcImF2YXRhcnMvMjEwLnN2Z1wiLFxuICAgIEFWQVRBUl8yMTE6IFwiYXZhdGFycy8yMTEuc3ZnXCIsXG4gICAgQVZBVEFSXzIxMjogXCJhdmF0YXJzLzIxMi5zdmdcIixcbiAgICBBVkFUQVJfMjEzOiBcImF2YXRhcnMvMjEzLnN2Z1wiLFxuICAgIEFWQVRBUl8yMTQ6IFwiYXZhdGFycy8yMTQuc3ZnXCIsXG4gICAgQVZBVEFSXzIxNTogXCJhdmF0YXJzLzIxNS5zdmdcIixcbiAgICBBVkFUQVJfMjE2OiBcImF2YXRhcnMvMjE2LnN2Z1wiLFxuICAgIEFWQVRBUl8yMTc6IFwiYXZhdGFycy8yMTcuc3ZnXCIsXG4gICAgQVZBVEFSXzIxODogXCJhdmF0YXJzLzIxOC5zdmdcIixcbiAgICBBVkFUQVJfMjE5OiBcImF2YXRhcnMvMjE5LnN2Z1wiLFxuICAgIEFWQVRBUl8yMjA6IFwiYXZhdGFycy8yMjAuc3ZnXCIsXG4gICAgQVZBVEFSXzIyMTogXCJhdmF0YXJzLzIyMS5zdmdcIixcbiAgICBBVkFUQVJfMjIyOiBcImF2YXRhcnMvMjIyLnN2Z1wiLFxuICAgIEFWQVRBUl8yMjM6IFwiYXZhdGFycy8yMjMuc3ZnXCIsXG4gICAgQVZBVEFSXzIyNDogXCJhdmF0YXJzLzIyNC5zdmdcIixcbiAgICBBVkFUQVJfMjI1OiBcImF2YXRhcnMvMjI1LnN2Z1wiLFxuICAgIEFWQVRBUl8yMjY6IFwiYXZhdGFycy8yMjYuc3ZnXCIsXG4gICAgQVZBVEFSXzIyNzogXCJhdmF0YXJzLzIyNy5zdmdcIixcbiAgICBBVkFUQVJfMjI4OiBcImF2YXRhcnMvMjI4LnN2Z1wiLFxuICAgIEFWQVRBUl8yMjk6IFwiYXZhdGFycy8yMjkuc3ZnXCIsXG4gICAgQVZBVEFSXzIzMDogXCJhdmF0YXJzLzIzMC5zdmdcIixcbiAgICBBVkFUQVJfMjMxOiBcImF2YXRhcnMvMjMxLnN2Z1wiLFxuICAgIEFWQVRBUl8yMzI6IFwiYXZhdGFycy8yMzIuc3ZnXCIsXG4gICAgQVZBVEFSXzIzMzogXCJhdmF0YXJzLzIzMy5zdmdcIixcbiAgICBBVkFUQVJfMjM0OiBcImF2YXRhcnMvMjM0LnN2Z1wiLFxuICAgIEFWQVRBUl8yMzU6IFwiYXZhdGFycy8yMzUuc3ZnXCIsXG4gICAgQVZBVEFSXzIzNjogXCJhdmF0YXJzLzIzNi5zdmdcIixcbiAgICBBVkFUQVJfMjM3OiBcImF2YXRhcnMvMjM3LnN2Z1wiLFxuICAgIEFWQVRBUl8yMzg6IFwiYXZhdGFycy8yMzguc3ZnXCIsXG4gICAgQVZBVEFSXzIzOTogXCJhdmF0YXJzLzIzOS5zdmdcIixcbiAgICBBVkFUQVJfMjQwOiBcImF2YXRhcnMvMjQwLnN2Z1wiLFxuICAgIEFWQVRBUl8yNDE6IFwiYXZhdGFycy8yNDEuc3ZnXCIsXG4gICAgQVZBVEFSXzI0MjogXCJhdmF0YXJzLzI0Mi5zdmdcIixcbiAgICBBVkFUQVJfMjQzOiBcImF2YXRhcnMvMjQzLnN2Z1wiLFxuICAgIEFWQVRBUl8yNDQ6IFwiYXZhdGFycy8yNDQuc3ZnXCIsXG4gICAgQVZBVEFSXzI0NTogXCJhdmF0YXJzLzI0NS5zdmdcIixcbiAgICBBVkFUQVJfMjQ2OiBcImF2YXRhcnMvMjQ2LnN2Z1wiLFxuICAgIEFWQVRBUl8yNDc6IFwiYXZhdGFycy8yNDcuc3ZnXCIsXG4gICAgQVZBVEFSXzI0ODogXCJhdmF0YXJzLzI0OC5zdmdcIixcbiAgICBBVkFUQVJfMjQ5OiBcImF2YXRhcnMvMjQ5LnN2Z1wiLFxuICAgIEFWQVRBUl8yNTA6IFwiYXZhdGFycy8yNTAuc3ZnXCIsXG4gICAgQVZBVEFSXzI1MTogXCJhdmF0YXJzLzI1MS5zdmdcIixcbiAgICBBVkFUQVJfMjUyOiBcImF2YXRhcnMvMjUyLnN2Z1wiLFxuICAgIEFWQVRBUl8yNTM6IFwiYXZhdGFycy8yNTMuc3ZnXCIsXG4gICAgQVZBVEFSXzI1NDogXCJhdmF0YXJzLzI1NC5zdmdcIixcbiAgICBBVkFUQVJfMjU1OiBcImF2YXRhcnMvMjU1LnN2Z1wiLFxuICAgIEFWQVRBUl8yNTY6IFwiYXZhdGFycy8yNTYuc3ZnXCIsXG4gICAgQVZBVEFSXzI1NzogXCJhdmF0YXJzLzI1Ny5zdmdcIixcbiAgICBBVkFUQVJfMjU4OiBcImF2YXRhcnMvMjU4LnN2Z1wiLFxuICAgIEFWQVRBUl8yNTk6IFwiYXZhdGFycy8yNTkuc3ZnXCIsXG4gICAgQVZBVEFSXzI2MDogXCJhdmF0YXJzLzI2MC5zdmdcIixcbiAgICBBVkFUQVJfMjYxOiBcImF2YXRhcnMvMjYxLnN2Z1wiLFxuICAgIEFWQVRBUl8yNjI6IFwiYXZhdGFycy8yNjIuc3ZnXCIsXG4gICAgQVZBVEFSXzI2MzogXCJhdmF0YXJzLzI2My5zdmdcIixcbiAgICBBVkFUQVJfMjY0OiBcImF2YXRhcnMvMjY0LnN2Z1wiLFxuICAgIEFWQVRBUl8yNjU6IFwiYXZhdGFycy8yNjUuc3ZnXCIsXG4gICAgQVZBVEFSXzI2NjogXCJhdmF0YXJzLzI2Ni5zdmdcIixcbiAgICBBVkFUQVJfMjY3OiBcImF2YXRhcnMvMjY3LnN2Z1wiLFxuICAgIEFWQVRBUl8yNjg6IFwiYXZhdGFycy8yNjguc3ZnXCIsXG4gICAgQVZBVEFSXzI2OTogXCJhdmF0YXJzLzI2OS5zdmdcIixcbiAgICBBVkFUQVJfMjcwOiBcImF2YXRhcnMvMjcwLnN2Z1wiLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRU5fMSA9IHJlcXVpcmUoXCIuL0xpc3QvRU5cIik7XG5jb25zdCBGUl8xID0gcmVxdWlyZShcIi4vTGlzdC9GUlwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBFTjogRU5fMS5FTixcbiAgICBGUjogRlJfMS5GUlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tYWluXCIpKTtcbmNvbnN0IExhbmd1YWdlTGlzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xhbmd1YWdlTGlzdFwiKSk7XG5jbGFzcyBMYW5ndWFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRMYW5ndWFnZSA9IExhbmd1YWdlTGlzdF8xLmRlZmF1bHQuRU47XG4gICAgICAgIHRoaXMuYWN0aXZlTGFuZ3VhZ2UgPSBudWxsO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBtYWluXzEuZGVmYXVsdC5sb2dnZXIuc2VuZExvZyhcIklORk9cIiwgXCJJbml0aWxpYXppbmcgbGFuZ3VhZ2VzLi4uXCIpO1xuICAgICAgICBjb25zdCBsYW5ndWFnZVN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ3VhZ2VcIik7XG4gICAgICAgIGlmIChsYW5ndWFnZVN0b3JlZCAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2VTdG9yZWQpO1xuICAgICAgICBjb25zdCB1c2VyTGFuZ3VhZ2UgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlO1xuICAgICAgICBpZiAodXNlckxhbmd1YWdlICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLnNldExhbmd1YWdlKHVzZXJMYW5ndWFnZS5zdWJzdHJpbmcoMCwgMikpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUxhbmd1YWdlID0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2U7XG4gICAgfVxuICAgIHNldExhbmd1YWdlKGNvZGUpIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VWYWx1ZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VCeUNvZGUoY29kZSk7XG4gICAgICAgIGlmIChsYW5ndWFnZVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ3VhZ2VcIiwgY29kZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcbiAgICB9XG4gICAgZ2V0TGFuZ3VhZ2VCeUNvZGUoY29kZSkge1xuICAgICAgICBmb3IgKGxldCBpIGluIExhbmd1YWdlTGlzdF8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIGlmIChjb2RlLnRvVXBwZXJDYXNlKCkgPT0gaSlcbiAgICAgICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2VMaXN0XzEuZGVmYXVsdFtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VzKCkge1xuICAgICAgICBjb25zdCBhdmFpbGFibGVMYW5ndWFnZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpIGluIExhbmd1YWdlTGlzdF8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUxhbmd1YWdlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF2YWlsYWJsZUxhbmd1YWdlO1xuICAgIH1cbiAgICBnZXRWYWx1ZUZvcktleShrZXksIHBhcmFtcyA9IFtdKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUxhbmd1YWdlICE9IG51bGwgJiYgdGhpcy5hY3RpdmVMYW5ndWFnZVtrZXldICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0gIT0gbnVsbCAmJiBwYXJhbS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCIlVFJBRF9cIikpXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1tpbmRleF0gPSB0aGlzLmdldFZhbHVlRm9yS2V5KHBhcmFtLnJlcGxhY2UoXCIlVFJBRF9cIiwgXCJcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVMYW5ndWFnZVtrZXldLnN1cHBsYW50KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0TGFuZ3VhZ2Vba2V5XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gIT0gbnVsbCAmJiBwYXJhbS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCIlVFJBRF9cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbaW5kZXhdID0gdGhpcy5nZXRWYWx1ZUZvcktleShwYXJhbS5yZXBsYWNlKFwiJVRSQURfXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0TGFuZ3VhZ2Vba2V5XS5zdXBwbGFudChwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIk1pc3Npbmcga2V5OiBcIiArIGtleTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMYW5ndWFnZU1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRU4gPSB2b2lkIDA7XG5leHBvcnRzLkVOID0ge1xuICAgIENPREU6IFwiRU5cIixcbiAgICAvLyBMT0FESU5HXG4gICAgTE9BRElOR19NRVNTQUdFOiBcIkluaXRpYWxpemluZyB7MH0uLi5cIixcbiAgICBMT0FESU5HX1JFU09VUkNFUzogXCJMb2FkaW5nIHJlc291cmNlcy4uLlwiLFxuICAgIExPQURJTkdfQ09OTkVDVElPTl9UT19NQUlOX1NFUlZFUjogXCJDb25uZWN0aW5nIHRvIG1haW4gc2VydmVyLi4uXCIsXG4gICAgTE9BRElOR19GRVRDSElOR19SRUdJT05fU0VSVkVSUzogXCJGZXRjaGluZyByZWdpb24gc2VydmVycy4uLlwiLFxuICAgIC8vIEdFTkVSSUNfRVJST1JcbiAgICBHRU5FUklDX0VSUk9SX0NPTk5FQ1RJT05fTE9TVEVEOiBcIkNvbm5lY3Rpb24gdG8gc2VydmVyIGxvc3RlZC5cIixcbiAgICBHRU5FUklDX0VSUk9SX1NFUlZFUlM6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2l0aCBzZXJ2ZXJzLlwiLFxuICAgIEdFTkVSSUNfRVJST1JfTk9fU0VSVkVSX0FWQUlMQUJMRTogXCJUaGVyZSBhcmUgbm8gc2VydmVycyBhdmFpbGFibGUuXCIsXG4gICAgLy8gQUNDT1VOVFxuICAgIEFDQ09VTlRfTEFOR1VBR0U6IFwiTGFuZ3VhZ2VcIixcbiAgICBBQ0NPVU5UX0xPR0lOOiBcIkxvZ2luXCIsXG4gICAgQUNDT1VOVF9SRUdJU1RFUjogXCJSZWdpc3RlclwiLFxuICAgIEFDQ09VTlRfVVNFUk5BTUU6IFwiVXNlcm5hbWVcIixcbiAgICBBQ0NPVU5UX1BBU1NXT1JEOiBcIlBhc3N3b3JkXCIsXG4gICAgQUNDT1VOVF9DT05GSVJNX1BBU1NXT1JEOiBcIkNvbmZpcm0geW91ciBwYXNzd29yZFwiLFxuICAgIEFDQ09VTlRfU0VSVkVSOiBcIlNlcnZlciBbezB9XSAtIFBpbmc6IHsxfW1zXCIsXG4gICAgLy8gQUNDT1VOVF9FUlJPUlxuICAgIEFDQ09VTlRfRVJST1JfQkFOTkVEOiBcIllvdSBhcmUgYmFubmVkIHVudGlsIHRoZSB7MH0uXCIsXG4gICAgQUNDT1VOVF9FUlJPUl9PQ0NVUkVEOiBcIkFuIGVycm9yIG9jY3VyZWQsIHBsZWFzZSByZWxvYWQgdGhlIHBhZ2UuXCIsXG4gICAgQUNDT1VOVF9FUlJPUl9GSUVMRFM6IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCBmaWVsZHMuXCIsXG4gICAgQUNDT1VOVF9FUlJPUl9BTFJFQURZX0xPR0dFRDogXCJZb3UgYXJlIGFscmVhZHkgbG9nZ2VkLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfSU5WQUxJRDogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfVVNFUk5BTUVfTEVOR1RIOiBcIllvdXIgbmlja25hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDE1IGNoYXJhY3RlcnMgbG9uZy5cIixcbiAgICBBQ0NPVU5UX0VSUk9SX1VTRVJOQU1FX0FMUEhBTlVNRVJJQzogXCJZb3VyIG5pY2tuYW1lIG11c3QgYmUgYWxwaGFudW1lcmljLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfVVNFUk5BTUVfQUxSRUFEWV9VU0VEOiBcIllvdXIgbmlja25hbWUgaXMgYWxyZWFkeSB1c2VkLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfVVNFUk5BTUVfU1RBUlRfTlVNQkVSOiBcIllvdXIgbmlja25hbWUgY2Fubm90IHN0YXJ0IHdpdGggYSBudW1iZXIuXCIsXG4gICAgQUNDT1VOVF9FUlJPUl9QQVNTV09SRF9MRU5HVEg6IFwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfUEFTU1dPUkRTX0RJRkZFUkVOVDogXCJZb3VyIHR3byBwYXNzd29yZHMgYXJlIGRpZmZlcmVudC5cIixcbiAgICBBQ0NPVU5UX0lOVkFMSURfU0VSVkVSOiBcIlRoZSBzZWxlY3RlZCBzZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZS5cIixcbiAgICAvLyBHQU1FXG4gICAgLy8gR0FNRV9HRU5FUkFMXG4gICAgR0FNRV9HRU5FUkFMX0xPQURJTkc6IFwiTG9hZGluZy4uLlwiLFxuICAgIEdBTUVfR0VORVJBTF9DTE9TRTogXCJDbG9zZVwiLFxuICAgIEdBTUVfR0VORVJBTF9PVkVSVElNRTogXCJPdmVydGltZSFcIixcbiAgICBHQU1FX0dFTkVSQUxfUEFVU0U6IFwiUGF1c2VcIixcbiAgICBHQU1FX0dFTkVSQUxfT1dOX0dPQUw6IFwiT3duIGdvYWwgYnkgPHNwYW4gY2xhc3M9J3swfSc+ezF9PC9zcGFuPiFcIixcbiAgICBHQU1FX0dFTkVSQUxfR09BTDogXCJHb2FsIGJ5IDxzcGFuIGNsYXNzPSd7MH0nPnsxfTwvc3Bhbj4hXCIsXG4gICAgR0FNRV9HRU5FUkFMX05PVF9BVkFJTEFCTEU6IFwiTm90IGF2YWlsYWJsZSB5ZXQuLi5cIixcbiAgICBHQU1FX0dFTkVSQUxfVEVBTTogXCJUZWFtXCIsXG4gICAgR0FNRV9HRU5FUkFMX1BMQVlFUjogXCJQbGF5ZXJcIixcbiAgICBHQU1FX0dFTkVSQUxfQllfUExBWUVSOiBcIkJ5IHBsYXllclwiLFxuICAgIEdBTUVfR0VORVJBTF9BQ1RJT046IFwiQWN0aW9uXCIsXG4gICAgR0FNRV9HRU5FUkFMX0RBVEU6IFwiRGF0ZVwiLFxuICAgIEdBTUVfR0VORVJBTF9UWVBFOiBcIlR5cGVcIixcbiAgICBHQU1FX0dFTkVSQUxfRVhQSVJFOiBcIkV4cGlyZVwiLFxuICAgIEdBTUVfR0VORVJBTF9WQUxJREFURTogXCJWYWxpZGF0ZVwiLFxuICAgIC8vIFRFQU1cbiAgICBHQU1FX1RFQU1fU1BFQ1RBVE9SUzogXCJTcGVjdGF0b3JzXCIsXG4gICAgR0FNRV9URUFNX1JFRDogXCJSZWRcIixcbiAgICBHQU1FX1RFQU1fQkxVRTogXCJCbHVlXCIsXG4gICAgLy8gR0FNRV9DSEFUXG4gICAgR0FNRV9DSEFUX01FU1NBR0U6IFwiTWVzc2FnZS4uLlwiLFxuICAgIEdBTUVfQ0hBVF9PUFRJT05fUk9PTTogXCJSb29tXCIsXG4gICAgR0FNRV9DSEFUX09QVElPTl9URUFNOiBcIlRlYW1cIixcbiAgICBHQU1FX0NIQVRfUk9PTV9KT0lORUQ6IFwiWW91IGp1c3Qgam9pbmVkIHRoZSByb29tIHswfSwgdHlwZSAvcm9vbSA8cm9vbU5hbWU+IHRvIGNoYW5nZSByb29tLlwiLFxuICAgIEdBTUVfQ0hBVF9QTV9GUk9NOiBcIldoaXNwZXIgZnJvbSB7MH1cIixcbiAgICBHQU1FX0NIQVRfUE1fVE86IFwiV2hpc3BlciB0byB7MH1cIixcbiAgICBHQU1FX0NIQVRfUE1fT0ZGTElORTogXCJ7MH0gaXMgb2ZmbGluZS5cIixcbiAgICBHQU1FX0NIQVRfRlJJRU5EX0FEREVEOiBcInswfSBpcyBub3cgeW91ciBmcmllbmQuXCIsXG4gICAgR0FNRV9DSEFUX0ZSSUVORF9PVEhFUl9BRERFRDogXCJ7MH0gYWRkZWQgeW91IHRvIHRoZWlyIGZyaWVuZHMgbGlzdC4gVHlwZSAvZnJpZW5kIHswfSB0byBhZGQgaGltIGJhY2suXCIsXG4gICAgR0FNRV9DSEFUX0ZSSUVORF9PVEhFUl9BRERFRF9CQUNLOiBcInswfSBhZGRlZCB5b3UgYmFjayB0byB0aGVpciBmcmllbmQgbGlzdC5cIixcbiAgICBHQU1FX0NIQVRfSk9JTl9ST09NOiBcInswfSBqb2luZWQgdGhlIHJvb20uXCIsXG4gICAgR0FNRV9DSEFUX0xFRlRfUk9PTTogXCJ7MH0gbGVmdCB0aGUgcm9vbS5cIixcbiAgICBHQU1FX0NIQVRfRlJJRU5EX0xPR0lOOiBcInswfSBqdXN0IGxvZ2dlZCBpbi5cIixcbiAgICBHQU1FX0NIQVRfRlJJRU5EX0xPR09VVDogXCJ7MH0ganVzdCBsb2dnZWQgb3V0LlwiLFxuICAgIEdBTUVfQ0hBVF9GUklFTkRfRVJST1JfTUFYOiBcIllvdSBoYXZlIHJlYWNoZWQgdGhlIGxpbWl0IG9mIHswfSBmcmllbmRzLlwiLFxuICAgIEdBTUVfQ0hBVF9JTlZBTElEX0NPTU1BTkQ6IFwiSW52YWxpZCBjb21tYW5kLlwiLFxuICAgIEdBTUVfQ0hBVF9NVVRFRF9NSU5VVEVTOiBcIllvdSBhcmUgbXV0ZWQgZm9yIHswfSBtaW51dGUocykuXCIsXG4gICAgR0FNRV9DSEFUX01VVEVEX0hPVVJTOiBcIllvdSBhcmUgbXV0ZWQgZm9yIHswfSBob3VycyhzKS5cIixcbiAgICBHQU1FX0NIQVRfTkVXX1JFUE9SVDogXCJOZXcgcmVwb3J0IGJ5IHswfS5cIixcbiAgICBHQU1FX0NIQVRfUkVQT1JURUQ6IFwiezB9IGhhcyBiZWVuIHJlcG9ydGVkLlwiLFxuICAgIEdBTUVfQ0hBVF9BTFJFQURZX1JFUE9SVEVEOiBcIllvdSBoYXZlIGFscmVhZHkgcmVwb3J0ZWQgezB9LlwiLFxuICAgIEdBTUVfQ0hBVF9SRUJPT1RfQ0FOQ0VMOiBcIlNlcnZlciByZXN0YXJ0IHdhcyBjYW5jZWxlZC5cIixcbiAgICBHQU1FX0NIQVRfUkVCT09UX01JTlVURVM6IFwiVGhlIHNlcnZlciB3aWxsIHJlc3RhcnQgaW4gezB9IG1pbnV0ZXMuXCIsXG4gICAgR0FNRV9DSEFUX1JFQk9PVF9TRUNPTkRTOiBcIlRoZSBzZXJ2ZXIgd2lsbCByZXN0YXJ0IGluIHswfSBzZWNvbmRzLlwiLFxuICAgIEdBTUVfQ0hBVF9MRVZFTF9VUDogXCJZb3UgYXJlIG5vdyBsZXZlbCB7MH0uXCIsXG4gICAgR0FNRV9DSEFUX1JBTktfVVA6IFwiWW91IGFyZSBub3cgezB9IHsxfS5cIixcbiAgICAvLyBHQU1FX1VTRVJfTUVOVVxuICAgIEdBTUVfVVNFUl9NRU5VX1BST0ZJTEU6IFwiUHJvZmlsZVwiLFxuICAgIEdBTUVfVVNFUl9NRU5VX1dISVNQRVI6IFwiV2hpc3BlclwiLFxuICAgIEdBTUVfVVNFUl9NRU5VX0ZSSUVORDogXCJBZGQgYXMgZnJpZW5kXCIsXG4gICAgR0FNRV9VU0VSX01FTlVfUkVQT1JUOiBcIlJlcG9ydFwiLFxuICAgIEdBTUVfVVNFUl9NRU5VX01VVEU6IFwiTXV0ZVwiLFxuICAgIEdBTUVfVVNFUl9NRU5VX0JBTjogXCJCYW5cIixcbiAgICAvLyBHQU1FX1NFVFRJTkdTXG4gICAgR0FNRV9TRVRUSU5HUzogXCJTZXR0aW5nc1wiLFxuICAgIEdBTUVfTUVOVV9HUkFQSElDUzogXCJHcmFwaGljc1wiLFxuICAgIEdBTUVfTUVOVV9HUkFQSElDU19aT09NOiBcIlpvb21cIixcbiAgICBHQU1FX01FTlVfR1JBUEhJQ1NfRlBTOiBcIkZQUyBMaW1pdFwiLFxuICAgIEdBTUVfTUVOVV9HUkFQSElDU19GUFNfTk9fTElNSVQ6IFwiTm9uZVwiLFxuICAgIEdBTUVfTUVOVV9BVURJTzogXCJBdWRpb1wiLFxuICAgIEdBTUVfTUVOVV9BVURJT19HRU5FUkFMOiBcIkdlbmVyYWxcIixcbiAgICBHQU1FX01FTlVfQVVESU9fQ0hBVDogXCJDaGF0XCIsXG4gICAgR0FNRV9NRU5VX0FVRElPX0dBTUU6IFwiR2FtZVwiLFxuICAgIEdBTUVfTUVOVV9BVURJT19OT1RJRklDQVRJT046IFwiTm90aWZpY2F0aW9uXCIsXG4gICAgR0FNRV9NRU5VX0lOUFVUUzogXCJJbnB1dHNcIixcbiAgICBHQU1FX01FTlVfSU5QVVRTX1BSRVNTOiBcIlByZXNzIGEga2V5XCIsXG4gICAgR0FNRV9NRU5VX0lOUFVUU19VUDogXCJVcFwiLFxuICAgIEdBTUVfTUVOVV9JTlBVVFNfRE9XTjogXCJEb3duXCIsXG4gICAgR0FNRV9NRU5VX0lOUFVUU19MRUZUOiBcIkxlZnRcIixcbiAgICBHQU1FX01FTlVfSU5QVVRTX1JJR0hUOiBcIlJpZ2h0XCIsXG4gICAgR0FNRV9NRU5VX0lOUFVUU19LSUNLOiBcIktpY2tcIixcbiAgICBHQU1FX01FTlVfSU5QVVRTX1RPR0dMRV9DSEFUOiBcIlRvZ2dsZSBjaGF0XCIsXG4gICAgLy8gR0FNRV9TVEFUU1xuICAgIEdBTUVfU1RBVFNfUkVHSVNURVJFRDogXCJSZWdpc3RlcmVkXCIsXG4gICAgR0FNRV9TVEFUU19MRVZFTF9YUDogXCJMZXZlbFwiLFxuICAgIEdBTUVfU1RBVFNfRUxPOiBcIlJhbmtcIixcbiAgICBHQU1FX1NUQVRTX0dBTUVTOiBcIkdhbWVzXCIsXG4gICAgR0FNRV9TVEFUU19HQU1FU19QTEFZRUQ6IFwiR2FtZXMgcGxheWVkXCIsXG4gICAgR0FNRV9TVEFUU19HQU1FU19XT046IFwiR2FtZXMgd29uXCIsXG4gICAgR0FNRV9TVEFUU19HQU1FU19MT1NUOiBcIkdhbWVzIGxvc3RcIixcbiAgICBHQU1FX1NUQVRTX1dJTl9SQVRFOiBcIldpbiByYXRlXCIsXG4gICAgR0FNRV9TVEFUU19CRVNUX1NUUkVBSzogXCJCZXN0IHN0cmVha1wiLFxuICAgIEdBTUVfU1RBVFNfR0VORVJBTDogXCJHZW5lcmFsIHN0YXRzXCIsXG4gICAgR0FNRV9TVEFUU19TSE9UUzogXCJTaG90c1wiLFxuICAgIEdBTUVfU1RBVFNfU0hPVFNfUEVSX01BVENIOiBcIlNob3RzIHBlciBtYXRjaFwiLFxuICAgIEdBTUVfU1RBVFNfR09BTFM6IFwiR29hbHNcIixcbiAgICBHQU1FX1NUQVRTX0dPQUxTX1BFUl9NQVRDSDogXCJHb2FscyBwZXIgbWF0Y2hcIixcbiAgICBHQU1FX1NUQVRTX0hBVF9UUklDS1M6IFwiSGF0IHRyaWNrc1wiLFxuICAgIEdBTUVfU1RBVFNfQVNTSVNUUzogXCJBc3Npc3RzXCIsXG4gICAgR0FNRV9TVEFUU19BU1NJU1RTX1BFUl9NQVRDSDogXCJBc3Npc3RzIHBlciBtYXRjaFwiLFxuICAgIEdBTUVfU1RBVFNfU0FWRVM6IFwiU2F2ZXNcIixcbiAgICBHQU1FX1NUQVRTX1NBVkVTX1BFUl9NQVRDSDogXCJTYXZlcyBwZXIgbWF0Y2hcIixcbiAgICBHQU1FX1NUQVRTX1BBU1NfQUNDVVJBQ1k6IFwiUGFzcyBhY2N1cmFjeVwiLFxuICAgIEdBTUVfU1RBVFNfUEFTU19QRVJfTUFUQ0g6IFwiUGFzcyBwZXIgbWF0Y2hcIixcbiAgICBHQU1FX1NUQVRTX0dPQUxLRUVQRVI6IFwiR29hbGtlZXBlclwiLFxuICAgIEdBTUVfU1RBVFNfUExBWUVEX0dLOiBcIkdhbWVzIHBsYXllZCBhcyBnb2Fsa2VlcGVyXCIsXG4gICAgR0FNRV9TVEFUU19DUzogXCJDbGVhbiBzaGVldHNcIixcbiAgICBHQU1FX1NUQVRTX0NTX1BFUkNFTlRBR0U6IFwiQ2xlYW4gc2hlZXRzIHBlcmNlbnRhZ2VcIixcbiAgICBHQU1FX1NUQVRTX0JBREdFUzogXCJCYWRnZXMgdW5sb2NrZWRcIixcbiAgICAvLyBHQU1FX0xFQURFUkJPQVJEXG4gICAgR0FNRV9MRUFERVJCT0FSRDogXCJMZWFkZXJib2FyZFwiLFxuICAgIEdBTUVfTEVBREVSQk9BUkRfRklMVEVSOiBcIkZpbHRlciBieVwiLFxuICAgIC8vIEdBTUVfRlJJRU5EU1xuICAgIEdBTUVfRlJJRU5EUzogXCJGcmllbmRzXCIsXG4gICAgR0FNRV9GUklFTkRTX05PTkU6IFwiWW91ciBmcmllbmRzIGxpc3QgaXMgZW1wdHkuXCIsXG4gICAgLy8gR0FNRV9TSE9QXG4gICAgR0FNRV9TSE9QOiBcIlNob3BcIixcbiAgICBHQU1FX1NIT1BfQ0FURUdPUllfRkxBR1M6IFwiRmxhZ3NcIixcbiAgICBHQU1FX1NIT1BfRVFVSVA6IFwiRXF1aXBcIixcbiAgICBHQU1FX1NIT1BfRVFVSVBFRDogXCJFcXVpcGVkXCIsXG4gICAgLy8gR0FNRV9TQU5DVElPTlxuICAgIEdBTUVfU0FOQ1RJT05fTVVURTogXCJ7MH0gaGFzIGJlZW4gbXV0ZWQgZm9yIHsxfSBob3VyKHMpLlwiLFxuICAgIEdBTUVfU0FOQ1RJT05fQkFOOiBcInswfSBoYXMgYmVlbiBiYW5uZWQgZm9yIHsxfSBob3VyKHMpLlwiLFxuICAgIC8vIEdBTUVfQURNSU5cbiAgICBHQU1FX0FETUlOOiBcIkFkbWluIHBhbmVsXCIsXG4gICAgR0FNRV9BRE1JTl9URUFNOiBcIlRlYW1cIixcbiAgICBHQU1FX0FETUlOX1JFUE9SVFM6IFwiUmVwb3J0c1wiLFxuICAgIEdBTUVfQURNSU5fU0FOQ1RJT05fTVVURTogXCJNdXRlXCIsXG4gICAgR0FNRV9BRE1JTl9TQU5DVElPTl9CQU46IFwiQmFuXCIsXG4gICAgR0FNRV9BRE1JTl9TQU5DVElPTl9USU1FOiBcIkR1cmF0aW9uIGluIGhvdXJzXCIsXG4gICAgR0FNRV9BRE1JTl9TQU5DVElPTl9SRUFTT046IFwiUmVhc29uXCIsXG4gICAgR0FNRV9BRE1JTl9TQU5DVElPTlM6IFwiU2FuY3Rpb25zXCIsXG4gICAgR0FNRV9BRE1JTl9ORVdfU0FOQ1RJT046IFwiTmV3IHNhbmN0aW9uXCIsXG4gICAgR0FNRV9BRE1JTl9SQU5LOiBcIlJhbmtzXCIsXG4gICAgR0FNRV9BRE1JTl9DSEFUTE9HUzogXCJDaGF0IGxvZ3NcIixcbiAgICBHQU1FX0FETUlOX0VSUk9SX1VTRVJOQU1FOiBcIlRoaXMgcGxheWVyIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgIEdBTUVfQURNSU5fRVJST1JfUkFOSzogXCJ7MH0gaGFzIGFscmVhZHkgezF9IHJhbmsuXCIsXG4gICAgR0FNRV9BRE1JTl9TVUNDRVNTX1JBTks6IFwiezB9IGlzIG5vdyB7MX0uXCIsXG4gICAgR0FNRV9BRE1JTl9FUlJPUl9SQU5LX1BFUk1TOiBcIllvdSBjYW4ndCBjaGFuZ2UgezB9IHJhbmsuXCIsXG4gICAgR0FNRV9BRE1JTl9FUlJPUl9TQU5DVElPTl9QRVJNUzogXCJZb3UgY2FuJ3Qgc2FuY3Rpb25hdGUgezB9LlwiLFxuICAgIEdBTUVfQURNSU5fRVJST1JfU0FOQ1RJT05fQUxSRUFEWV9NVVRFRDogXCJ7MH0gaXMgYWxyZWFkeSBtdXRlZC5cIixcbiAgICBHQU1FX0FETUlOX0VSUk9SX1NBTkNUSU9OX0FMUkVBRFlfQkFOOiBcInswfSBpcyBhbHJlYWR5IGJhbm5lZC5cIixcbiAgICBHQU1FX0FETUlOX0VSUk9SX1NBTkNUSU9OX0RVUkFUSU9OOiBcIlRoZSBkdXJhdGlvbiBpcyBpbnZhbGlkLlwiLFxuICAgIC8vIEdBTUVfUkFOS1xuICAgIEdBTUVfUkFOS19PV05FUjogXCJPd25lclwiLFxuICAgIEdBTUVfUkFOS19NQU5BR0VSOiBcIk1hbmFnZXJcIixcbiAgICBHQU1FX1JBTktfQURNSU46IFwiQWRtaW5cIixcbiAgICBHQU1FX1JBTktfTU9EOiBcIk1vZGVyYXRvclwiLFxuICAgIEdBTUVfUkFOS19WSVA6IFwiVklQXCIsXG4gICAgR0FNRV9SQU5LX1VTRVI6IFwiVXNlclwiLFxuICAgIC8vIEdBTUVfRUxPXG4gICAgR0FNRV9FTE9fSVJPTjogXCJJcm9uXCIsXG4gICAgR0FNRV9FTE9fU0lMVkVSOiBcIlNpbHZlclwiLFxuICAgIEdBTUVfRUxPX0dPTEQ6IFwiR29sZFwiLFxuICAgIEdBTUVfRUxPX1BMQVRJTklVTTogXCJQbGF0aW5pdW1cIixcbiAgICBHQU1FX0VMT19ESUFNT05EOiBcIkRpYW1vbmRcIixcbiAgICBHQU1FX0VMT19DSEFNUElPTjogXCJDaGFtcGlvblwiLFxuICAgIEdBTUVfRUxPX0NIQUxMRU5HRVI6IFwiQ2hhbGxlbmdlclwiLFxuICAgIC8vIEhJU1RPUllcbiAgICBISVNUT1JZX01BVENIX1NUQVJURUQ6IFwiTWF0Y2ggc3RhcnRlZFwiLFxuICAgIEhJU1RPUllfU0hPVDogXCJTaG90IGJ5IDxzcGFuIGNsYXNzPSd7MH0nPnsxfTwvc3Bhbj5cIixcbiAgICBISVNUT1JZX1NBVkU6IFwiU2F2ZSBieSA8c3BhbiBjbGFzcz0nezB9Jz57MX08L3NwYW4+XCIsXG4gICAgSElTVE9SWV9HT0FMOiBcIkdvYWwgYnkgPHNwYW4gY2xhc3M9J3swfSc+ezF9PC9zcGFuPlwiLFxuICAgIEhJU1RPUllfR09BTF9BU1NJU1RFRDogXCJHb2FsIGJ5IDxzcGFuIGNsYXNzPSd7MH0nPnsxfTwvc3Bhbj4gYXNzaXN0ZWQgYnkgPHNwYW4gY2xhc3M9J3swfSc+ezJ9PC9zcGFuPlwiLFxuICAgIEhJU1RPUllfT1dOX0dPQUw6IFwiT3duIGdvYWwgYnkgPHNwYW4gY2xhc3M9J3swfSc+ezF9PC9zcGFuPlwiLFxuICAgIEhJU1RPUllfRU5EX1JFRDogXCJSZWQgdGVhbSB3b24gdGhlIGdhbWUg8J+UtCB7MH0gLSB7MX0g8J+UtSwgcG9zc2Vzc2lvbiDwn5S0IHsyfSUgLSB7M30lIPCflLVcIixcbiAgICBISVNUT1JZX0VORF9CTFVFOiBcIkJsdWUgdGVhbSB3b24gdGhlIGdhbWUg8J+UtCB7MH0gLSB7MX0g8J+UtSwgcG9zc2Vzc2lvbiDwn5S0IHsyfSUgLSB7M30lIPCflLVcIixcbiAgICAvLyBDT1BZUklHSFRcbiAgICBDT1BZUklHSFQ6IFwiwqkgezB9LCBkZXZlbG9wZWQgd2l0aCDimaUgYnkgT3ZCLlwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZSID0gdm9pZCAwO1xuZXhwb3J0cy5GUiA9IHtcbiAgICBDT0RFOiBcIkZSXCIsXG4gICAgLy8gTE9BRElOR1xuICAgIExPQURJTkdfTUVTU0FHRTogXCJJbml0aWFsaXNhdGlvbiBkZSB7MH0uLi5cIixcbiAgICBMT0FESU5HX1JFU09VUkNFUzogXCJDaGFyZ2VtZW50IGRlcyByZXNzb3VyY2VzLi4uXCIsXG4gICAgTE9BRElOR19DT05ORUNUSU9OX1RPX01BSU5fU0VSVkVSOiBcIkNvbm5leGlvbiBhdSBzZXJ2ZXVyIHByaW5jaXBhbC4uLlwiLFxuICAgIExPQURJTkdfRkVUQ0hJTkdfUkVHSU9OX1NFUlZFUlM6IFwiUsOpY3Vww6lyYXRpb24gZGVzIHNlcnZldXJzIGRlIHLDqWdpb24uLi5cIixcbiAgICAvLyBHRU5FUklDX0VSUk9SXG4gICAgR0VORVJJQ19FUlJPUl9DT05ORUNUSU9OX0xPU1RFRDogXCJDb25uZXhpb24gYXUgc2VydmV1ciBwZXJkdWUuXCIsXG4gICAgR0VORVJJQ19FUlJPUl9TRVJWRVJTOiBcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUgYXZlYyBsZXMgc2VydmV1cnMuXCIsXG4gICAgR0VORVJJQ19FUlJPUl9OT19TRVJWRVJfQVZBSUxBQkxFOiBcIklsIG4neSBhIGF1Y3VuIHNlcnZldXIgZGlzcG9uaWJsZS5cIixcbiAgICAvLyBBQ0NPVU5UXG4gICAgQUNDT1VOVF9MQU5HVUFHRTogXCJMYW5nYWdlXCIsXG4gICAgQUNDT1VOVF9MT0dJTjogXCJDb25uZXhpb25cIixcbiAgICBBQ0NPVU5UX1JFR0lTVEVSOiBcIkluc2NyaXB0aW9uXCIsXG4gICAgQUNDT1VOVF9VU0VSTkFNRTogXCJQc2V1ZG9ueW1lXCIsXG4gICAgQUNDT1VOVF9QQVNTV09SRDogXCJNb3QgZGUgcGFzc2VcIixcbiAgICBBQ0NPVU5UX0NPTkZJUk1fUEFTU1dPUkQ6IFwiQ29uZmlybWV6IHZvdHJlIG1vdCBkZSBwYXNzZVwiLFxuICAgIEFDQ09VTlRfU0VSVkVSOiBcIlNlcnZldXIgW3swfV0gLSBQaW5nOiB7MX1tc1wiLFxuICAgIC8vIEFDQ09VTlRfRVJST1JcbiAgICBBQ0NPVU5UX0VSUk9SX09DQ1VSRUQ6IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUsIHZldWlsbGV6IHJlY2hhcmdlciBsYSBwYWdlLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfRklFTERTOiBcIk1lcmNpIGRlIGNvbXBsw6l0ZXIgdG91cyBsZXMgY2hhbXBzLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfQUxSRUFEWV9MT0dHRUQ6IFwiVm91cyDDqnRlcyBkw6lqw6AgY29ubmVjdMOpLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfSU5WQUxJRDogXCJQc2V1b255bWUgb3UgbW90IGRlIHBhc3NlIGludmFsaWRlLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfVVNFUk5BTUVfTEVOR1RIOiBcIlZvdHJlIHBzZXVkb255bWUgZG9pdCBmYWlyZSBlbnRyZSAzIGV0IDE1IGNhcmFjdMOocmVzLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfVVNFUk5BTUVfQUxQSEFOVU1FUklDOiBcIlZvdHJlIHBzZXVkb255bWUgZG9pdCDDqnRyZSBhbHBoYW51bcOpcmlxdWUuXCIsXG4gICAgQUNDT1VOVF9FUlJPUl9QQVNTV09SRF9MRU5HVEg6IFwiVm90cmUgbW90IGRlIHBhc3NlIGRvaXQgZmFpcmUgNiBjYXJhY3TDqHJlcyBtaW5pbXVtLlwiLFxuICAgIEFDQ09VTlRfRVJST1JfUEFTU1dPUkRTX0RJRkZFUkVOVDogXCJWb3MgZGV1eCBtb3RzIGRlIHBhc3NlIHNvbnQgZGlmZsOpcmVudHMuXCIsXG4gICAgQUNDT1VOVF9JTlZBTElEX1NFUlZFUjogXCJMZSBzZXJ2ZXVyIHPDqWxlY3Rpb25uw6kgbidlc3QgcGFzIGRpc3BvbmlibGUuXCIsXG4gICAgLy8gQ09QWVJJR0hUXG4gICAgQ09QWVJJR0hUOiBcIsKpIHswfSwgZMOpdmVsb3Bww6kgYXZlYyDimaUgcGFyIE92Qi5cIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXNvdXJjZXNfMSA9IHJlcXVpcmUoXCIuLi9Db25maWcvUmVzb3VyY2VzXCIpO1xuY29uc3QgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tYWluXCIpKTtcbmNsYXNzIFJlc291cmNlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiSU5GT1wiLCBcIkluaXRpbGlhemluZyByZXNvdXJjZXMuLi5cIik7XG4gICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLmluaXRTY2VuZSgwIC8qIFNjZW5lTGlzdC5NZXNzYWdlU2NlbmUgKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KCdMT0FESU5HX1JFU09VUkNFUycpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdE9mUHJvbWlzZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gUmVzb3VyY2VzXzEuUmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RPZlByb21pc2UucHVzaCh0aGlzLmxvYWRSZXNvdXJjZShpLCBSZXNvdXJjZXNfMS5SZXNvdXJjZXNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwobGlzdE9mUHJvbWlzZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXCJBbGwgcmVzb3VyY2VzIGhhdmUgYmVlbiBsb2FkZWQuXCIpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiByZWplY3QoZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRSZXNvdXJjZShrZXksIGZpbGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5wbmdcIikgfHwgZmlsZU5hbWUuZW5kc1dpdGgoXCIuanBnXCIpIHx8IGZpbGVOYW1lLmVuZHNXaXRoKFwiLnN2Z1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5yZXNvdXJjZXNbYElNQUdFXyR7a2V5fWBdID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYEltYWdlICR7a2V5fSBsb2FkZWQuYCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYEltcG9zc2libGUgdG8gbG9hZCBpbWFnZSAke2tleX0uYCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBgYXNzZXRzL2ltYWdlcy9yZXNvdXJjZXMvJHtmaWxlTmFtZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIubXAzXCIpIHx8IGZpbGVOYW1lLmVuZHNXaXRoKFwiLndhdlwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGBhc3NldHMvYXVkaW8vJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgICAgICAgICBhdWRpby5vbmxvYWRlZGRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnJlc291cmNlc1tgQVVESU9fJHtrZXl9YF0gPSBhdWRpbztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShgQXVkaW8gJHtrZXl9IGxvYWRlZC5gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF1ZGlvLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgSW1wb3NzaWJsZSB0byBsb2FkIGF1ZGlvICR7a2V5fS5gKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZU1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNoYXJlYWJsZURhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc2hhcmVkL1NoYXJlYWJsZURhdGEvU2hhcmVhYmxlRGF0YVwiKSk7XG5jbGFzcyBSb29tIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJzID0gZGF0YS5jdXJyZW50UGxheWVycztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGRhdGEuc3RhdGU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBkYXRhLnNjb3JlO1xuICAgICAgICB0aGlzLnN0YWRpdW0gPSBkYXRhLnN0YWRpdW07XG4gICAgICAgIHRoaXMucGlja01vZGUgPSBkYXRhLnBpY2tNb2RlO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBkYXRhLmhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZGlzY0hpc3RvcnkgPSB7fTtcbiAgICB9XG4gICAgcmVvcmRlclBsYXllcihwbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVycyA9IHBsYXllcnNBcnJheTtcbiAgICB9XG4gICAgZ2V0UGxheWVyKHBsYXllcklkKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuY3VycmVudFBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCA9PSBwbGF5ZXJJZClbMF07XG4gICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwbGF5ZXJKb2luKHBsYXllcikge1xuICAgICAgICBjb25zdCBwbGF5ZXJEYXRhID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyLmlkKTtcbiAgICAgICAgaWYgKHBsYXllckRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgfVxuICAgIHBsYXllckxlYXZlKHBsYXllcklkKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckRhdGEgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJJZCk7XG4gICAgICAgIGlmIChwbGF5ZXJEYXRhID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllcnMgPSB0aGlzLmN1cnJlbnRQbGF5ZXJzLmZpbHRlcihmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLmlkICE9IHBsYXllcklkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVycyA9IGRhdGEuY3VycmVudFBsYXllcnM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhLnN0YXRlO1xuICAgICAgICB0aGlzLnNjb3JlID0gZGF0YS5zY29yZTtcbiAgICAgICAgdGhpcy5zdGFkaXVtLmRpc2NzID0gZGF0YS5kaXNjcztcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YWRpdW0uZGlzY3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2NIaXN0b3J5W2ldID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjSGlzdG9yeVtpXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kaXNjSGlzdG9yeVtpXS5wdXNoKG5ldyBTaGFyZWFibGVEYXRhXzEuZGVmYXVsdChwZXJmb3JtYW5jZS5ub3coKSwgeyB4OiB0aGlzLnN0YWRpdW0uZGlzY3NbaV0ueCwgeTogdGhpcy5zdGFkaXVtLmRpc2NzW2ldLnkgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm9vbTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQmFzZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9CYXNlL0Jhc2VcIik7XG5jb25zdCBDb2xvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvQ29sb3IvQ29sb3JcIikpO1xuY29uc3QgRWxvXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL0Vsby9FbG9cIik7XG5jb25zdCBMZXZlbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9MZXZlbC9MZXZlbFwiKTtcbmNvbnN0IFJvb21TdGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9Sb29tU3RhdGUvUm9vbVN0YXRlXCIpO1xuY29uc3QgVGVhbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvVGVhbS9UZWFtXCIpKTtcbmNvbnN0IENvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db25maWcvQ29uZmlnXCIpKTtcbmNvbnN0IG1haW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbWFpblwiKSk7XG5jb25zdCBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9TY2VuZVwiKSk7XG5jbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XG4gICAgICAgIHN1cGVyKHN0YXRlLm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLnBhcmFtcy5jdXJyZW50VXNlcixcbiAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgICAgIGZwczogMCxcbiAgICAgICAgICAgIGNhbnZhc19yZWN0OiBbLTE1MCwgLTc1LCAxNTAsIDc1XSxcbiAgICAgICAgICAgIGNhbWVyYUZvbGxvdzogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB1bnBhdXNlSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpY2s6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdENoYW5nZUZwczogbnVsbCxcbiAgICAgICAgICAgIHNldHRpbmdzX2NhdGVnb3J5OiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBzZXR0aW5nc19yZWNvcmRfaW5wdXQ6IG51bGwsXG4gICAgICAgICAgICBmb2N1c1VzZXI6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2V0RnBzKHZhbCkge1xuICAgICAgICBjb25zdCBmcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZwc1wiKTtcbiAgICAgICAgaWYgKGZwcyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuc3RhdGUuZnBzID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0Q2hhbmdlRnBzICE9IG51bGwgJiYgdGhpcy5zdGF0ZS5sYXN0Q2hhbmdlRnBzICsgMTAwMCA+IG5vdylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZS5sYXN0Q2hhbmdlRnBzID0gbm93O1xuICAgICAgICBmcHMudGV4dENvbnRlbnQgPSB2YWwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgc2V0U3RhdGUocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyLnNldFN0YXRlKHBhcmFtcyk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlW2ldID0gcGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIG9uV2lsbEluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uV2lsbEluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0aWFsaXplZCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0aWFsaXplZCgpO1xuICAgICAgICB0aGlzLnN0YXRlLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdHggPSB0aGlzLnN0YXRlLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmdzIC5tZW51IGxpJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2V0U2V0dGluZ3NDYXRlZ29yeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2FkbWluX21lbnUgbGknKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zZXRBZG1pbkNhdGVnb3J5LmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZ3MgaW5wdXQsICNzZXR0aW5ncyBzZWxlY3QnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuc2V0U2V0dGluZ3MuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsZWFkZXJib2FyZEZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZGVyYm9hcmRGaWx0ZXJcIik7XG4gICAgICAgIGlmIChsZWFkZXJib2FyZEZpbHRlciAhPSBudWxsKVxuICAgICAgICAgICAgbGVhZGVyYm9hcmRGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnJlcXVlc3RMZWFkZXJib2FyZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdFByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RfcHJvZmlsZVwiKTtcbiAgICAgICAgaWYgKHJlcXVlc3RQcm9maWxlICE9IG51bGwpXG4gICAgICAgICAgICByZXF1ZXN0UHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zd2l0Y2hQcm9maWxlLmJpbmQodGhpcykpO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnZW5lcmFsX21lbnVcIikpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zd2l0Y2hNZW51LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrX2xpc3RfdGVhbVwiKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuZHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHVzZXJfbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9tZW51XCIpO1xuICAgICAgICBpZiAodXNlcl9tZW51ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gdXNlcl9tZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGxpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy51c2VyTWVudUl0ZW0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUgIT0gbnVsbCAmJiBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUgIT0gbnVsbCAmJiBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLktleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGNoYXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0Rm9ybVwiKTtcbiAgICAgICAgY2hhdEZvcm0gPT09IG51bGwgfHwgY2hhdEZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoYXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zZW5kQ2hhdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KCk7XG4gICAgfVxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdlbmVyYWxfbWVudVwiKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09IFwiYWRtaW5cIiAmJiBbXCJ1c2VyXCIsIFwidmlwXCJdLmluY2x1ZGVzKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLnJhbmspKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvZmlsZURhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlXCIpO1xuICAgICAgICBpZiAocHJvZmlsZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBBcnJheS5mcm9tKHByb2ZpbGUucXVlcnlTZWxlY3RvckFsbChcImltZywgc3BhblwiKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVfZGF0YSA9IGVsLmdldEF0dHJpYnV0ZShcInByb2ZpbGVfZGF0YVwiKTtcbiAgICAgICAgICAgIGlmIChwcm9maWxlX2RhdGEgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAocHJvZmlsZV9kYXRhID09IFwidXNlcm5hbWVcIikge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoZGF0YS5yYW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9maWxlX2RhdGEgPT0gXCJhdmF0YXJcIilcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIklNQUdFX0FWQVRBUl9cIiArIGRhdGEuYXZhdGFyXS5zcmMpO1xuICAgICAgICAgICAgaWYgKHByb2ZpbGVfZGF0YSA9PSBcIm9ubGluZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEub25saW5lKVxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwib25saW5lXCIpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcIm9ubGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbcHJvZmlsZV9kYXRhXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YVtwcm9maWxlX2RhdGFdO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5zdGF0c1twcm9maWxlX2RhdGFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZV9kYXRhID09IFwiZWxvXCIpXG4gICAgICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gYCR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KCgwLCBFbG9fMS5nZXRFbG8pKGRhdGEuc3RhdHMuZWxvKS5uYW1lKX0gJHsoMCwgRWxvXzEuZ2V0RWxvKShkYXRhLnN0YXRzLmVsbykudmFsdWV9ICgke2RhdGEuc3RhdHMuZWxvfSlgO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2ZpbGVfZGF0YSA9PSBcImxldmVsX3hwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSAoMCwgTGV2ZWxfMS5nZXRMZXZlbCkoZGF0YS5zdGF0cy5sZXZlbF94cCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YS5zdGF0c1twcm9maWxlX2RhdGFdO1xuICAgICAgICAgICAgICAgICAgICBbXCJ3aW5fcmF0ZVwiLCBcInBhc3NfYWNjdXJhY3lcIiwgXCJjc19wZXJjZW50YWdlXCJdLmluY2x1ZGVzKHByb2ZpbGVfZGF0YSkgPyBlbC50ZXh0Q29udGVudCArPSBcIiVcIiA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS56SW5kZXgrKztcbiAgICAgICAgcHJvZmlsZS5zdHlsZS56SW5kZXggPSB0aGlzLnN0YXRlLnpJbmRleDtcbiAgICAgICAgcHJvZmlsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBzd2l0Y2hNZW51KGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS56SW5kZXgrKztcbiAgICAgICAgc3dpdGNoIChlLnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkge1xuICAgICAgICAgICAgY2FzZSBcInNob3BcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU2hvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZyaWVuZHNcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoRnJpZW5kcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwibWVudVwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y01lbnUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJsZWFkZXJib2FyZFwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMZWFkZXJib2FyZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImFkbWluXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEFkbWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidGVhbVwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdDaGF0KHsgdHlwZTogXCJhbm5vdW5jZW1lbnRcIiwgbWVzc2FnZTogXCJHQU1FX0dFTkVSQUxfTk9UX0FWQUlMQUJMRVwiLCBjb2xvcjogQ29sb3JfMS5kZWZhdWx0LlJPT01fQU5OT1VOQ0VNRU5ULCBzb3VuZDogMSwgb2ZmaWNpYWxUcmFkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFNldHRpbmdzKGUpIHtcbiAgICAgICAgaWYgKGUuc3JjRWxlbWVudC5jaGVja2VkICE9IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLnNldFNldHRpbmdzKGUuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzZXR0aW5nc19jYXRlZ29yeVwiKSwgZS5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZShcInNldHRpbmdzX3ZhbFwiKSwgZS5zcmNFbGVtZW50LmNoZWNrZWQpO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuc2V0U2V0dGluZ3MoZS5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZShcInNldHRpbmdzX2NhdGVnb3J5XCIpLCBlLnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwic2V0dGluZ3NfdmFsXCIpLCBlLnNyY0VsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgICBzZXRTZXR0aW5nc0NhdGVnb3J5KGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXR0aW5nc19jYXRlZ29yeSA9IGUuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZ3MgLm1lbnUgbGknKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIikgPT0gdGhpcy5zdGF0ZS5zZXR0aW5nc19jYXRlZ29yeSAmJiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVsb2FkU2V0dGluZ3MoKTtcbiAgICB9XG4gICAgcmVtb3ZlS2V5KHR5cGUsIGtleSkge1xuICAgICAgICBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIucmVtb3ZlS2V5KHR5cGUsIGtleSk7XG4gICAgICAgIHRoaXMucmVsb2FkU2V0dGluZ3MoKTtcbiAgICB9XG4gICAgYWRkSGlzdG9yeShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpc3RvcnlcIik7XG4gICAgICAgIGlmIChoaXN0b3J5ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdGhpcy5mbXRNU1MoTWF0aC5mbG9vcihkYXRhLnZhbHVlLnRpbWUpKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgc3dpdGNoIChkYXRhLmtleSkge1xuICAgICAgICAgICAgY2FzZSBcIm1hdGNoU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGljb24uc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL3doaXN0bGUucG5nXCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkhJU1RPUllfTUFUQ0hfU1RBUlRFRFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6IHtcbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pY29ucy9zaG90LnBuZ1wiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiSElTVE9SWV9TSE9UXCIsIFtkYXRhLnZhbHVlLnRlYW0ubmFtZSwgZGF0YS52YWx1ZS51c2VybmFtZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInNhdmVcIjoge1xuICAgICAgICAgICAgICAgIGljb24uc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL3NhdmUucG5nXCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJISVNUT1JZX1NBVkVcIiwgW2RhdGEudmFsdWUudGVhbS5uYW1lLCBkYXRhLnZhbHVlLnVzZXJuYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiZ29hbFwiOiB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcmMgPSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvYmFsbC5wbmdcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUudGVhbS5pZCAhPSBkYXRhLnZhbHVlLnNjb3JlX3RlYW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZi5pbm5lckhUTUwgPSBgJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfT1dOX0dPQUxcIiwgW2RhdGEudmFsdWUudGVhbS5uYW1lLCBkYXRhLnZhbHVlLnVzZXJuYW1lXSl9YDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWYuaW5uZXJIVE1MID0gYCR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0dPQUxcIiwgW2RhdGEudmFsdWUudGVhbS5uYW1lLCBkYXRhLnZhbHVlLnVzZXJuYW1lXSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUudGVhbS5pZCAhPSBkYXRhLnZhbHVlLnNjb3JlX3RlYW0uaWQpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiSElTVE9SWV9PV05fR09BTFwiLCBbZGF0YS52YWx1ZS50ZWFtLm5hbWUsIGRhdGEudmFsdWUudXNlcm5hbWVdKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnZhbHVlLmFzc2lzdF9pZCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkhJU1RPUllfR09BTF9BU1NJU1RFRFwiLCBbZGF0YS52YWx1ZS50ZWFtLm5hbWUsIGRhdGEudmFsdWUudXNlcm5hbWUsIGRhdGEudmFsdWUuYXNzaXN0X3VzZXJuYW1lXSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkhJU1RPUllfR09BTFwiLCBbZGF0YS52YWx1ZS50ZWFtLm5hbWUsIGRhdGEudmFsdWUudXNlcm5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJlbmRHYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pY29ucy93aGlzdGxlLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlLnNjb3JlLnJlZCA+IGRhdGEudmFsdWUuc2NvcmUuYmx1ZSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJISVNUT1JZX0VORF9SRURcIiwgW2RhdGEudmFsdWUuc2NvcmUucmVkLCBkYXRhLnZhbHVlLnNjb3JlLmJsdWUsIGRhdGEudmFsdWUucG9zc2Vzc2lvbi5yZWQsIGRhdGEudmFsdWUucG9zc2Vzc2lvbi5ibHVlXSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkhJU1RPUllfRU5EX0JMVUVcIiwgW2RhdGEudmFsdWUuc2NvcmUucmVkLCBkYXRhLnZhbHVlLnNjb3JlLmJsdWUsIGRhdGEudmFsdWUucG9zc2Vzc2lvbi5yZWQsIGRhdGEudmFsdWUucG9zc2Vzc2lvbi5ibHVlXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGlzdG9yeS5wcmVwZW5kKGRpdik7XG4gICAgfVxuICAgIHJlY29yZEtleSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHJlY29yZEtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjb3JkS2V5XCIpO1xuICAgICAgICBpZiAocmVjb3JkS2V5ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuc2V0dGluZ3NfcmVjb3JkX2lucHV0ID0gdHlwZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMudXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLmtpY2sgPSBmYWxzZTtcbiAgICAgICAgcmVjb3JkS2V5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgcmVsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nc1wiKSwgcmVjb3JkS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNvcmRLZXlcIik7XG4gICAgICAgIGlmIChzZXR0aW5ncyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAocmVjb3JkS2V5ICE9IG51bGwpXG4gICAgICAgICAgICByZWNvcmRLZXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBBcnJheS5mcm9tKHNldHRpbmdzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXRlZ29yeVwiKSkuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5X25hbWUgPSBjYXRlZ29yeS5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeV9uYW1lXCIpO1xuICAgICAgICAgICAgaWYgKGNhdGVnb3J5X25hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeV9uYW1lID09IHRoaXMuc3RhdGUuc2V0dGluZ3NfY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCAuaW5wdXRzX3ZhbHVlXCIpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NfY2F0ZWdvcnkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInNldHRpbmdzX2NhdGVnb3J5XCIpLCBzZXR0aW5nc192YWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInNldHRpbmdzX3ZhbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NfY2F0ZWdvcnkgIT0gbnVsbCAmJiBzZXR0aW5nc192YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNldHRpbmdzX2NhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ3JhcGhpY3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuZ3JhcGhpY3Nbc2V0dGluZ3NfdmFsXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5ncmFwaGljc1tzZXR0aW5nc192YWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmdyYXBoaWNzW3NldHRpbmdzX3ZhbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImF1ZGlvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvW3NldHRpbmdzX3ZhbF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW9bc2V0dGluZ3NfdmFsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5hdWRpb1tzZXR0aW5nc192YWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnB1dHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmlucHV0c1tzZXR0aW5nc192YWxdID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzW3NldHRpbmdzX3ZhbF0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQudGV4dENvbnRlbnQgPSBrZXkudG9TdHJpbmcoKS5yZXBsYWNlKFwiS2V5XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUlucHV0LnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pY29ucy9jcm9zcy5zdmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucmVtb3ZlS2V5KHNldHRpbmdzX3ZhbCwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZElucHV0LnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pY29ucy9hZGQuc3ZnXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucmVjb3JkS2V5KHNldHRpbmdzX3ZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzd2l0Y2hQcm9maWxlKCkge1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKTtcbiAgICAgICAgaWYgKHByb2ZpbGUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHByb2ZpbGUuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgIHByb2ZpbGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1haW5fMS5kZWZhdWx0LndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJyZXF1ZXN0UHJvZmlsZVwiLCBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci51c2VybmFtZSk7XG4gICAgfVxuICAgIHJlcXVlc3RMZWFkZXJib2FyZChlKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hMZWFkZXJib2FyZChlLnNyY0VsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgICBmZXRjaExlYWRlcmJvYXJkKGtleSkge1xuICAgICAgICBjb25zdCBsZWFkZXJib2FyZENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkQ29udGVudFwiKTtcbiAgICAgICAgaWYgKGxlYWRlcmJvYXJkQ29udGVudCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZWFkZXJib2FyZENvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5gO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiZmV0Y2hMZWFkZXJib2FyZFwiLCBrZXkpO1xuICAgIH1cbiAgICBzZXRMZWFkZXJib2FyZERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBsZWFkZXJib2FyZENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkQ29udGVudFwiKTtcbiAgICAgICAgaWYgKGxlYWRlcmJvYXJkQ29udGVudCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZWFkZXJib2FyZENvbnRlbnQuaW5uZXJIVE1MID0gYGA7XG4gICAgICAgIGRhdGEucGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgYXZhdGFyLnNyYyA9IG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJJTUFHRV9BVkFUQVJfXCIgKyBwbGF5ZXIuYXZhdGFyXS5zcmM7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYXZhdGFyKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHVzZXJuYW1lLmNsYXNzTGlzdC5hZGQoXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgICAgIHVzZXJuYW1lLnRleHRDb250ZW50ID0gcGxheWVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmFuay5jbGFzc0xpc3QuYWRkKFwicmFua1wiKTtcbiAgICAgICAgICAgIHJhbmsudGV4dENvbnRlbnQgPSBcIiNcIiArIChpbmRleCArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocmFuayk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKFwidmFsdWVcIik7XG4gICAgICAgICAgICBpZiAoW1wid2luX3JhdGVcIiwgXCJwYXNzX2FjY3VyYWN5XCIsIFwiY3NfcGVyY2VudGFnZVwiXS5pbmNsdWRlcyhkYXRhLmtleSkpXG4gICAgICAgICAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSBwbGF5ZXIudmFsdWUgKyBcIiVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEua2V5ID09IFwibGV2ZWxfeHBcIilcbiAgICAgICAgICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9ICgwLCBMZXZlbF8xLmdldExldmVsKShwbGF5ZXIudmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmtleSA9PSBcImVsb1wiKVxuICAgICAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gYCR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KCgwLCBFbG9fMS5nZXRFbG8pKHBsYXllci52YWx1ZSkubmFtZSl9ICR7KDAsIEVsb18xLmdldEVsbykocGxheWVyLnZhbHVlKS52YWx1ZX0gKCR7cGxheWVyLnZhbHVlfSlgO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gcGxheWVyLnZhbHVlO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIGxlYWRlcmJvYXJkQ29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGlkZU1lbnUoKSB7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5zdGF0ZSAhPSBSb29tU3RhdGVfMS5Sb29tU3RhdGUuS0lDS19PRkZfUkVTRVQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5oaWRlTWVudS5iaW5kKHRoaXMpLCAxMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGlja19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrX2xpc3RcIik7XG4gICAgICAgIGlmIChwaWNrX2xpc3QgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHBpY2tfbGlzdC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwaWNrX2xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBzaG93TWVudSgpIHtcbiAgICAgICAgY29uc3QgcGlja19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrX2xpc3RcIik7XG4gICAgICAgIGlmIChwaWNrX2xpc3QgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHBpY2tfbGlzdC5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcGlja19saXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIHN3aXRjTWVudSgpIHtcbiAgICAgICAgY29uc3QgcGlja19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrX2xpc3RcIik7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5zdGF0ZSA9PSBSb29tU3RhdGVfMS5Sb29tU3RhdGUuR0FNRV9FTkRFRCB8fCBwaWNrX2xpc3QgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHBpY2tfbGlzdC5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgcGlja19saXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwaWNrX2xpc3Quc3R5bGUuekluZGV4ID0gdGhpcy5zdGF0ZS56SW5kZXg7XG4gICAgICAgIHBpY2tfbGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICByZW5kZXJBZG1pbihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFkbWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5fY29udGVudFwiKTtcbiAgICAgICAgaWYgKGFkbWluQ29udGVudCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWFtXCI6IHtcbiAgICAgICAgICAgICAgICBhZG1pbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBkYXRhLnRlYW0uZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICBhdmF0YXIuc3JjID0gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIklNQUdFX0FWQVRBUl9cIiArIHVzZXIuYXZhdGFyXS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhci5jbGFzc0xpc3QuYWRkKFwiYXZhdGFyXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGF2YXRhcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUuY2xhc3NMaXN0LmFkZChcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZS50ZXh0Q29udGVudCA9IHVzZXIudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuay5jbGFzc0xpc3QuYWRkKFwidmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJhbmsuY2xhc3NMaXN0LmFkZCh1c2VyLnJhbmspO1xuICAgICAgICAgICAgICAgICAgICByYW5rLnRleHRDb250ZW50ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KGBHQU1FX1JBTktfJHt1c2VyLnJhbmsudG9VcHBlckNhc2UoKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyYW5rKTtcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5Db250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInJlcG9ydHNcIjoge1xuICAgICAgICAgICAgICAgIGFkbWluQ29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJvdyBpbmZvXCI+PGRpdiBzdHlsZT1cIndpZHRoOiAzMCVcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9QTEFZRVJcIil9PC9kaXY+PGRpdiBzdHlsZT1cIndpZHRoOiAzMCVcIlwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0JZX1BMQVlFUlwiKX08L2Rpdj48ZGl2IHN0eWxlPVwid2lkdGg6IDMwJVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0RBVEVcIil9PC9kaXY+PGRpdiBjbGFzcz1cInZhbHVlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfQUNUSU9OXCIpfTwvZGl2PjwvZGl2PmA7XG4gICAgICAgICAgICAgICAgZGF0YS5yZXBvcnRzLmZvckVhY2goKHJlcG9ydCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLnN0eWxlLndpZHRoID0gXCIzMCVcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUudGV4dENvbnRlbnQgPSByZXBvcnQudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBvcnRlZF91c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGVkX3VzZXJuYW1lLnN0eWxlLndpZHRoID0gXCIzMCVcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZWRfdXNlcm5hbWUudGV4dENvbnRlbnQgPSByZXBvcnQucmVwb3J0ZWRfdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVwb3J0ZWRfdXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zdHlsZS53aWR0aCA9IFwiMzAlXCI7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSByZXBvcnQuZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRMb2cuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRMb2cuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL2NoYXQuc3ZnXCI7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5hcHBlbmRDaGlsZChjaGF0TG9nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhdExvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEFkbWluQ2F0ZWdvcnkoXCJjaGF0bG9nc1wiLCByZXBvcnQucmVwb3J0ZWRfdXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQ3Jvc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVDcm9zcy5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ3Jvc3Muc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL2Nyb3NzLnN2Z1wiO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uYXBwZW5kQ2hpbGQoZGVsZXRlQ3Jvc3MpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVDcm9zcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcImRlbGV0ZVJlcG9ydFwiLCByZXBvcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBhZG1pbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwic2FuY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBhZG1pbkNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyb3cgaW5mb1wiPjxkaXYgc3R5bGU9XCJ3aWR0aDogMjUlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfUExBWUVSXCIpfTwvZGl2PjxkaXYgc3R5bGU9XCJ3aWR0aDogMjUlXCJcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9CWV9QTEFZRVJcIil9PC9kaXY+PGRpdiBzdHlsZT1cIndpZHRoOiAxMCVcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9UWVBFXCIpfTwvZGl2PjxkaXYgc3R5bGU9XCJ3aWR0aDogMzAlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfRVhQSVJFXCIpfTwvZGl2PjxkaXYgY2xhc3M9XCJ2YWx1ZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0FDVElPTlwiKX08L2Rpdj48L2Rpdj5gO1xuICAgICAgICAgICAgICAgIGRhdGEuc2FuY3Rpb25zLmZvckVhY2goKHNhbmN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUuc3R5bGUud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZS50ZXh0Q29udGVudCA9IHNhbmN0aW9uLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnlfdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBieV91c2VybmFtZS5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJ5X3VzZXJuYW1lLnRleHRDb250ZW50ID0gc2FuY3Rpb24uYnlfcGxheWVyO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ5X3VzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUuc3R5bGUud2lkdGggPSBcIjEwJVwiO1xuICAgICAgICAgICAgICAgICAgICB0eXBlLnRleHRDb250ZW50ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KGBHQU1FX0FETUlOX1NBTkNUSU9OXyR7c2FuY3Rpb24udHlwZS50b1VwcGVyQ2FzZSgpfWApO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zdHlsZS53aWR0aCA9IFwiMzAlXCI7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzYW5jdGlvbi5lbmRfZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhdExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRMb2cuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRMb2cuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL2NoYXQuc3ZnXCI7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5hcHBlbmRDaGlsZChjaGF0TG9nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhdExvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEFkbWluQ2F0ZWdvcnkoXCJjaGF0bG9nc1wiLCBzYW5jdGlvbi51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVDcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNyb3NzLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVDcm9zcy5zcmMgPSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvY3Jvc3Muc3ZnXCI7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5hcHBlbmRDaGlsZChkZWxldGVDcm9zcyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNyb3NzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiZGVsZXRlU2FuY3Rpb25cIiwgc2FuY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBhZG1pbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2hhdGxvZ3NcIjoge1xuICAgICAgICAgICAgICAgIGFkbWluQ29udGVudC5pbm5lckhUTUwgPSBgYDtcbiAgICAgICAgICAgICAgICBkYXRhLmxvZ3MuZm9yRWFjaCgobG9nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gbG9nO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBhZG1pbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyQWRtaW5BbGVydChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFkbWluX2FsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbl9hbGVydFwiKTtcbiAgICAgICAgaWYgKGFkbWluX2FsZXJ0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLmVycm9yKVxuICAgICAgICAgICAgYWRtaW5fYWxlcnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhZG1pbl9hbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICAgIGFkbWluX2FsZXJ0LnRleHRDb250ZW50ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KGRhdGEubWVzc2FnZSwgZGF0YS5hcmdzKTtcbiAgICAgICAgYWRtaW5fYWxlcnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgc2V0UmFuayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmtVc2VybmFtZVwiKSwgcmFuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFua1ZhbHVlXCIpO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiYWRtaW5SYW5rXCIsIHsgdXNlcm5hbWU6IHVzZXJuYW1lLnZhbHVlLCByYW5rOiByYW5rLnZhbHVlIH0pO1xuICAgIH1cbiAgICBuZXdTYW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmN0aW9uVXNlcm5hbWVcIiksIHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmN0aW9uVHlwZVwiKSwgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FuY3Rpb25UaW1lXCIpLCByZWFzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmN0aW9uUmVhc29uXCIpO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiYWRtaW5TYW5jdGlvblwiLCB7IHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSwgdHlwZTogdHlwZS52YWx1ZSwgdGltZTogdGltZS52YWx1ZSwgcmVhc29uOiByZWFzb24udmFsdWUgfSk7XG4gICAgfVxuICAgIGZldGNoQWRtaW5DYXRlZ29yeSh0eXBlLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IGFkbWluVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluX3RpdGxlXCIpLCBhZG1pbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluX2NvbnRlbnRcIik7XG4gICAgICAgIGlmIChhZG1pblRpdGxlID09IG51bGwgfHwgYWRtaW5Db250ZW50ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGFkbWluVGl0bGUuaW5uZXJUZXh0ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KGBHQU1FX0FETUlOXyR7dHlwZS50b1VwcGVyQ2FzZSgpfWApO1xuICAgICAgICBhZG1pbkNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5gO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWFtXCI6IHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiZmV0Y2hBZG1pblwiLCB7IGtleTogXCJ0ZWFtXCIgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmVwb3J0c1wiOiB7XG4gICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcImZldGNoQWRtaW5cIiwgeyBrZXk6IFwicmVwb3J0c1wiIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNoYXRsb2dzXCI6IHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwiZmV0Y2hBZG1pblwiLCB7IGtleTogXCJjaGF0bG9nc1wiLCB1c2VybmFtZTogYXJncyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJzYW5jdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJmZXRjaEFkbWluXCIsIHsga2V5OiBcInNhbmN0aW9uc1wiIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIm5ld19zYW5jdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgYWRtaW5Db250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiYWRtaW5fYWxlcnRcIj48L2Rpdj48Zm9ybSBpZD1cImFkbWluU2FuY3Rpb25Gb3JtXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzYW5jdGlvblVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCIke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkFDQ09VTlRfVVNFUk5BTUVcIil9XCIvPjxzZWxlY3QgaWQ9XCJzYW5jdGlvblR5cGVcIj48b3B0aW9uIHZhbHVlPVwibXV0ZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9BRE1JTl9TQU5DVElPTl9NVVRFXCIpfTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJiYW5cIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfQURNSU5fU0FOQ1RJT05fQkFOXCIpfTwvb3B0aW9uPjwvc2VsZWN0PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2FuY3Rpb25UaW1lXCIgcGxhY2Vob2xkZXI9XCIke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfQURNSU5fU0FOQ1RJT05fVElNRVwiKX1cIi8+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzYW5jdGlvblJlYXNvblwiIHBsYWNlaG9sZGVyPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0FETUlOX1NBTkNUSU9OX1JFQVNPTlwiKX1cIiBtYXhsZW5ndGg9XCIxNTBcIi8+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX1ZBTElEQVRFXCIpfVwiPjwvZm9ybT5gO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9IG51bGwgJiYgYXJncy51c2VybmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmN0aW9uVXNlcm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VybmFtZUlucHV0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gYXJncy51c2VybmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT0gbnVsbCAmJiBhcmdzLnR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW5jdGlvblR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlU2VsZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0LnZhbHVlID0gYXJncy50eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pblNhbmN0aW9uRm9ybVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5uZXdTYW5jdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmFua1wiOiB7XG4gICAgICAgICAgICAgICAgYWRtaW5Db250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiYWRtaW5fYWxlcnRcIj48L2Rpdj48Zm9ybSBpZD1cImFkbWluUmFua0Zvcm1cIj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJhbmtVc2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX1VTRVJOQU1FXCIpfVwiLz48c2VsZWN0IGlkPVwicmFua1ZhbHVlXCI+PC9zZWxlY3Q+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX1ZBTElEQVRFXCIpfVwiPjwvZm9ybT5gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFua1ZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIFtcIm93bmVyXCIsIFwibWFuYWdlclwiLCBcImFkbWluXCIsIFwibW9kXCIsIFwidmlwXCIsIFwidXNlclwiXS5mb3JFYWNoKChyYW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHJhbms7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShgR0FNRV9SQU5LXyR7cmFuay50b1VwcGVyQ2FzZSgpfWApO1xuICAgICAgICAgICAgICAgICAgICByYW5rVmFsdWUgPT09IG51bGwgfHwgcmFua1ZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByYW5rVmFsdWUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pblJhbmtGb3JtXCIpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnNldFJhbmspO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFkbWluQ2F0ZWdvcnkoZSkge1xuICAgICAgICB0aGlzLnN3aXRjaEFkbWluKGUuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKTtcbiAgICB9XG4gICAgc3dpdGNoQWRtaW4odHlwZSA9IG51bGwsIGFyZ3MgPSBudWxsKSB7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsIHx8IFtcInVzZXJcIiwgXCJ2aXBcIl0uaW5jbHVkZXMobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIucmFuaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGFkbWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pblwiKSwgYWRtaW5fbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRtaW5fbWVudVwiKTtcbiAgICAgICAgaWYgKGFkbWluID09IG51bGwgfHwgYWRtaW5fbWVudSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXR5cGUgJiYgYWRtaW4uc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgIGFkbWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSBudWxsKVxuICAgICAgICAgICAgdHlwZSA9IFwidGVhbVwiO1xuICAgICAgICBBcnJheS5mcm9tKGFkbWluX21lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09IFwicmFua1wiICYmICFbXCJvd25lclwiLCBcIm1hbmFnZXJcIl0uaW5jbHVkZXMobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIucmFuaykpXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT0gdHlwZSlcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZldGNoQWRtaW5DYXRlZ29yeSh0eXBlLCBhcmdzKTtcbiAgICAgICAgYWRtaW4uc3R5bGUuekluZGV4ID0gdGhpcy5zdGF0ZS56SW5kZXg7XG4gICAgICAgIGFkbWluLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIHN3aXRjaExlYWRlcmJvYXJkKCkge1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbGVhZGVyYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkXCIpLCBsZWFkZXJib2FyZEZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZGVyYm9hcmRGaWx0ZXJcIik7XG4gICAgICAgIGlmIChsZWFkZXJib2FyZCA9PSBudWxsIHx8IGxlYWRlcmJvYXJkRmlsdGVyID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChsZWFkZXJib2FyZC5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgbGVhZGVyYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWFkZXJib2FyZEZpbHRlci52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlc1N0YXRzID0gW1wiZWxvXCIsIFwibGV2ZWxfeHBcIiwgXCJnYW1lc19wbGF5ZWRcIiwgXCJnYW1lc193b25cIiwgXCJnYW1lc19sb3N0XCIsIFwid2luX3JhdGVcIiwgXCJiZXN0X3N0cmVha1wiLCBcInNob3RzXCIsIFwic2hvdHNfcGVyX21hdGNoXCIsIFwiZ29hbHNcIiwgXCJnb2Fsc19wZXJfbWF0Y2hcIiwgXCJoYXRfdHJpY2tzXCIsIFwiYXNzaXN0c1wiLCBcImFzc2lzdHNfcGVyX21hdGNoXCIsIFwic2F2ZXNcIiwgXCJzYXZlc19wZXJfbWF0Y2hcIiwgXCJwYXNzX2FjY3VyYWN5XCIsIFwicGFzc19wZXJfbWF0Y2hcIiwgXCJwbGF5ZWRfZ2tcIiwgXCJjc1wiLCBcImNzX3BlcmNlbnRhZ2VcIl07XG4gICAgICAgICAgICBhdmFpbGFibGVzU3RhdHMuZm9yRWFjaCgoc3RhdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gc3RhdDtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoYEdBTUVfU1RBVFNfJHtzdGF0LnRvVXBwZXJDYXNlKCl9YCk7XG4gICAgICAgICAgICAgICAgbGVhZGVyYm9hcmRGaWx0ZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZXRjaExlYWRlcmJvYXJkKGF2YWlsYWJsZXNTdGF0c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5mZXRjaExlYWRlcmJvYXJkKGxlYWRlcmJvYXJkRmlsdGVyLnZhbHVlKTtcbiAgICAgICAgbGVhZGVyYm9hcmQuc3R5bGUuekluZGV4ID0gdGhpcy5zdGF0ZS56SW5kZXg7XG4gICAgICAgIGxlYWRlcmJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIHN3aXRjaFNldHRpbmdzKCkge1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzXCIpO1xuICAgICAgICBpZiAoc2V0dGluZ3MgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHNldHRpbmdzLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxvYWRTZXR0aW5ncygpO1xuICAgICAgICBzZXR0aW5ncy5zdHlsZS56SW5kZXggPSB0aGlzLnN0YXRlLnpJbmRleDtcbiAgICAgICAgc2V0dGluZ3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgcmVsb2FkRnJpZW5kcygpIHtcbiAgICAgICAgY29uc3QgZnJpZW5kc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNMaXN0XCIpO1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbCB8fCBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5mcmllbmRzID09IG51bGwgfHwgZnJpZW5kc0xpc3QgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZnJpZW5kc0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuZnJpZW5kcy5mb3JFYWNoKChmcmllbmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICBpZiAoZnJpZW5kLm9ubGluZSlcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm9ubGluZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdXNlci5jbGFzc0xpc3QuYWRkKFwidXNlclwiKTtcbiAgICAgICAgICAgIHVzZXIuaW5uZXJUZXh0ID0gZnJpZW5kLnVzZXJuYW1lO1xuICAgICAgICAgICAgaWYgKGZyaWVuZC5zZXJ2ZXJSZWdpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBgYXNzZXRzL2ltYWdlcy9mbGFncy9yZWdpb24vJHt0aGlzLmdldFJlZ2lvbkZsYWcoZnJpZW5kLnNlcnZlclJlZ2lvbi5yZWdpb24pfS5zdmdgO1xuICAgICAgICAgICAgICAgIHVzZXIucHJlcGVuZChpbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodXNlcik7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25cIik7XG4gICAgICAgICAgICBpZiAoZnJpZW5kLm9ubGluZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoaXNwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIHdoaXNwZXIuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL2NoYXQuc3ZnXCI7XG4gICAgICAgICAgICAgICAgd2hpc3Blci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy53aGlzcGVyKGZyaWVuZC51c2VybmFtZSkpO1xuICAgICAgICAgICAgICAgIGFjdGlvbi5hcHBlbmRDaGlsZCh3aGlzcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcmllbmQuc2VydmVyUmVnaW9uICE9IG51bGwgJiYgZnJpZW5kLnNlcnZlclJlZ2lvbi5yZWdpb24gPT0gKChfYSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VycmVudFNlcnZlcikgJiYgZnJpZW5kLnNlcnZlclJlZ2lvbi5jdXJyZW50Um9vbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgam9pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgam9pbi5zZXRBdHRyaWJ1dGUoXCJyb29tXCIsIGZyaWVuZC5zZXJ2ZXJSZWdpb24uY3VycmVudFJvb20pO1xuICAgICAgICAgICAgICAgIGpvaW4uc3JjID0gXCJhc3NldHMvaW1hZ2VzL2ljb25zL2NoZXZfcmlnaHQuc3ZnXCI7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmFwcGVuZENoaWxkKGpvaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJpZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5zcmMgPSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvY3Jvc3Muc3ZnXCI7XG4gICAgICAgICAgICBkZWxldGVGcmllbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1haW5fMS5kZWZhdWx0LndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJkZWxldGVGcmllbmRcIiwgZnJpZW5kLmlkKSk7XG4gICAgICAgICAgICBhY3Rpb24uYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpb24pO1xuICAgICAgICAgICAgZnJpZW5kc0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb3VudCA9PSAwKVxuICAgICAgICAgICAgZnJpZW5kc0xpc3QuaW5uZXJUZXh0ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9GUklFTkRTX05PTkVcIik7XG4gICAgfVxuICAgIHN3aXRjaEZyaWVuZHMoKSB7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBmcmllbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzXCIpO1xuICAgICAgICBpZiAoZnJpZW5kcyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZnJpZW5kcy5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xuICAgICAgICAgICAgZnJpZW5kcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxvYWRGcmllbmRzKCk7XG4gICAgICAgIGZyaWVuZHMuc3R5bGUuekluZGV4ID0gdGhpcy5zdGF0ZS56SW5kZXg7XG4gICAgICAgIGZyaWVuZHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgc3dpdGNoU2hvcCgpIHtcbiAgICAgICAgY29uc3Qgc2hvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcFwiKTtcbiAgICAgICAgaWYgKHNob3AgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHNob3Auc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgIHNob3Auc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNob3Auc3R5bGUuekluZGV4ID0gdGhpcy5zdGF0ZS56SW5kZXg7XG4gICAgICAgIG1haW5fMS5kZWZhdWx0LndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJmZXRjaFNob3BcIik7XG4gICAgfVxuICAgIGZldGNoSXRlbUZvckNhdGVnb3J5KGUpIHtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcImZldGNoSXRlbXNcIiwgZS5zcmNFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgY29uc3Qgc2hvcEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wSXRlbXNcIik7XG4gICAgICAgIGlmIChzaG9wSXRlbXMgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2hvcEl0ZW1zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIHNob3BEYXRhKHNob3BEYXRhKSB7XG4gICAgICAgIGNvbnN0IHNob3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3BcIiksIHNob3BDb2luVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wQ29pblZhbFwiKSwgc2hvcENhdGVnb3J5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcENhdGVnb3J5c1wiKTtcbiAgICAgICAgaWYgKHNob3AgPT0gbnVsbCB8fCBzaG9wQ29pblZhbCA9PSBudWxsIHx8IHNob3BDYXRlZ29yeXMgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyICE9IG51bGwpXG4gICAgICAgICAgICBzaG9wQ29pblZhbC50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmNvaW5zLnRvU3RyaW5nKCk7XG4gICAgICAgIHNob3BDYXRlZ29yeXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgc2hvcERhdGEuY2F0ZWdvcnlzLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBcIlNIT1BfQ0FURUdPUllcIjtcbiAgICAgICAgICAgIGlucHV0LmlkID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmZldGNoSXRlbUZvckNhdGVnb3J5LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDApXG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgY2F0ZWdvcnkubmFtZSk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfXCIgKyBjYXRlZ29yeS5uYW1lKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBzaG9wQ2F0ZWdvcnlzLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNob3BEYXRhSXRlbXMoc2hvcERhdGEuaXRlbXMpO1xuICAgICAgICBzaG9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIHJlZnJlc2hTaG9wKCkge1xuICAgICAgICBjb25zdCBzaG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wXCIpLCBzaG9wQ29pblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcENvaW5WYWxcIiksIHNob3BJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcEl0ZW1zXCIpO1xuICAgICAgICBpZiAoc2hvcENvaW5WYWwgPT0gbnVsbCB8fCBzaG9wSXRlbXMgPT0gbnVsbCB8fCBzaG9wID09IG51bGwgfHwgc2hvcC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgIT0gbnVsbClcbiAgICAgICAgICAgIHNob3BDb2luVmFsLnRleHRDb250ZW50ID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY29pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgQXJyYXkuZnJvbShzaG9wSXRlbXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikpLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3dcIikpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAncm93JztcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1faWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIml0ZW1faWRcIiksIHByaWNlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJwcmljZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKVswXTtcbiAgICAgICAgICAgIGlmIChpdGVtX2lkID09IG51bGwgfHwgcHJpY2UgPT0gbnVsbCB8fCBzcGFuID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmF2YXRhcikgPT0gcGFyc2VJbnQoaXRlbV9pZCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcXVpcGVkXCIpO1xuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NIT1BfRVFVSVBFRFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChfYiA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaXRlbXMuaW5jbHVkZXMocGFyc2VJbnQoaXRlbV9pZCkpKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU0hPUF9FUVVJUFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciAhPSBudWxsICYmIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmNvaW5zIDwgcGFyc2VJbnQocHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYW50X2J1eVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3BEYXRhSXRlbXMoaXRlbXMpIHtcbiAgICAgICAgY29uc3Qgc2hvcEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wSXRlbXNcIik7XG4gICAgICAgIGlmIChzaG9wSXRlbXMgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2hvcEl0ZW1zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaXRlbV9pZFwiLCBpdGVtLmlkKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwcmljZVwiLCBpdGVtLnByaWNlKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIklNQUdFX0FWQVRBUl9cIiArIGl0ZW0uaWRdO1xuICAgICAgICAgICAgaWYgKGltYWdlID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBhY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGlvblwiKTtcbiAgICAgICAgICAgIGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcInRvZ2dsZUl0ZW1cIiwgaXRlbS5pZCkpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmF2YXRhcikgPT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZXF1aXBlZFwiKTtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TSE9QX0VRVUlQRURcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoX2IgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLml0ZW1zLmluY2x1ZGVzKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IG1haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU0hPUF9FUVVJUFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciAhPSBudWxsICYmIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmNvaW5zIDwgaXRlbS5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYW50X2J1eVwiKTtcbiAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvY29pbi5wbmdcIj4gJyArIGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpb24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgICAgIHNob3BJdGVtcy5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2VuZENoYXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNoYXRDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXNnVHlwZVwiKSwgY2hhdE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdE1zZ1wiKTtcbiAgICAgICAgaWYgKGNoYXRDYXRlZ29yeSA9PSBudWxsIHx8IGNoYXRDYXRlZ29yeS52YWx1ZS5sZW5ndGggPT0gMCB8fCBjaGF0TXNnID09IG51bGwgfHwgY2hhdE1zZy52YWx1ZS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcIm5ld0NoYXRcIiwgeyB0eXBlOiBjaGF0Q2F0ZWdvcnkudmFsdWUsIG1lc3NhZ2U6IGNoYXRNc2cudmFsdWUgfSk7XG4gICAgICAgIGNoYXRNc2cudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0Q2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdE1zZ1wiKTtcbiAgICAgICAgaWYgKGlucHV0Q2hhdCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZXR0aW5nc19yZWNvcmRfaW5wdXQgJiYgaW5wdXRDaGF0ICE9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5zZXRTZXR0aW5ncyhcImlucHV0c1wiLCB0aGlzLnN0YXRlLnNldHRpbmdzX3JlY29yZF9pbnB1dCwgZS5jb2RlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0dGluZ3NfcmVjb3JkX2lucHV0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5jb2RlLnN0YXJ0c1dpdGgoXCJEaWdpdFwiKSAmJiBpbnB1dENoYXQgIT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgem9vbSA9IFsxLCAxLjI1LCAxLjUsIDEuNzUsIDIsIDIuMjUsIDIuNV07XG4gICAgICAgICAgICBjb25zdCB6b29tTGV2ZWwgPSBwYXJzZUludChlLmNvZGUucmVwbGFjZShcIkRpZ2l0XCIsIFwiXCIpKTtcbiAgICAgICAgICAgIGlmICh6b29tW3pvb21MZXZlbCAtIDFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuc2V0U2V0dGluZ3MoXCJncmFwaGljc1wiLCBcInpvb21cIiwgem9vbVt6b29tTGV2ZWwgLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmNvZGUgPT0gXCJLZXlQXCIgJiYgaW5wdXRDaGF0ICE9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlciA9IG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0U2VydmVyQnlJZChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50U2VydmVyKTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZXIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuc2VuZE1zZyhcInBhdXNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzLnJpZ2h0LmluY2x1ZGVzKGUuY29kZSkpXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5yaWdodCA9IHRydWU7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzLmxlZnQuaW5jbHVkZXMoZS5jb2RlKSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLmxlZnQgPSB0cnVlO1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmlucHV0cy51cC5pbmNsdWRlcyhlLmNvZGUpKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMudXAgPSB0cnVlO1xuICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmlucHV0cy5kb3duLmluY2x1ZGVzKGUuY29kZSkpXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5kb3duID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5pbnB1dHMua2ljay5pbmNsdWRlcyhlLmNvZGUpKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMua2ljayA9IHRydWU7XG4gICAgICAgIGlmIChpbnB1dENoYXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLnVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0cy5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMua2ljayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzLnRvZ2dsZV9jaGF0LmluY2x1ZGVzKGUuY29kZSkpIHtcbiAgICAgICAgICAgIGlmICgoaW5wdXRDaGF0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhdGUuY2FudmFzLmZvY3VzKCksIDEpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dENoYXQuZm9jdXMoKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgS2V5VXBIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5pbnB1dHMucmlnaHQuaW5jbHVkZXMoZS5jb2RlKSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzLmxlZnQuaW5jbHVkZXMoZS5jb2RlKSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5pbnB1dHMudXAuaW5jbHVkZXMoZS5jb2RlKSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLnVwID0gZmFsc2U7XG4gICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuaW5wdXRzLmRvd24uaW5jbHVkZXMoZS5jb2RlKSlcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5pbnB1dHMua2ljay5pbmNsdWRlcyhlLmNvZGUpKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dHMua2ljayA9IGZhbHNlO1xuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveSgpO1xuICAgICAgICBjb25zdCBjaGF0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdEZvcm1cIik7XG4gICAgICAgIGNoYXRGb3JtID09PSBudWxsIHx8IGNoYXRGb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGF0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhdEZvcm1cIiwgdGhpcy5zZW5kQ2hhdC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLktleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxuICAgIGZtdE1TUyhzKSB7XG4gICAgICAgIHJldHVybiAocyAtIChzICU9IDYwKSkgLyA2MCArICg5IDwgcyA/ICc6JyA6ICc6MCcpICsgcztcbiAgICB9XG4gICAgdXBkYXRlQXZhdGFyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMucmVmcmVzaFNob3AoKTtcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmF0YXJcIik7XG4gICAgICAgIGlmIChhdmF0YXIgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYXZhdGFyLnNyYyA9IG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJJTUFHRV9BVkFUQVJfXCIgKyAoKF9hID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hdmF0YXIpXS5zcmM7XG4gICAgfVxuICAgIGluaXRSb29tKHJvb20pIHtcbiAgICAgICAgY29uc3Qgcm9vbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21OYW1lXCIpO1xuICAgICAgICBpZiAocm9vbU5hbWUgIT0gbnVsbClcbiAgICAgICAgICAgIHJvb21OYW1lLnRleHRDb250ZW50ID0gcm9vbS5pZDtcbiAgICAgICAgY29uc3QgcGxheWVyc0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJzQ291bnRcIik7XG4gICAgICAgIGlmIChwbGF5ZXJzQ291bnQgIT0gbnVsbClcbiAgICAgICAgICAgIHBsYXllcnNDb3VudC50ZXh0Q29udGVudCA9IHJvb20uY3VycmVudFBsYXllcnMubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVEYXRhKHJvb20uc2NvcmUpO1xuICAgICAgICBjb25zdCBsaXN0X3VzZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0X3VzZXJzXCIpO1xuICAgICAgICBpZiAobGlzdF91c2VycyAhPSBudWxsKVxuICAgICAgICAgICAgbGlzdF91c2Vycy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByb29tLmN1cnJlbnRQbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaS5kYXRhc2V0LnVzZXJJZCA9IHBsYXllci5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwidXNlcm5hbWVcIiwgcGxheWVyLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAke3BsYXllci51c2VybmFtZX0gPHNwYW4+JHtwbGF5ZXIucGluZy50b1N0cmluZygpfTwvc3Bhbj5gO1xuICAgICAgICAgICAgaWYgKHBsYXllci50ZWFtLmlkID09IFRlYW1fMS5kZWZhdWx0LlJFRC5pZClcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyLnRlYW0uaWQgPT0gVGVhbV8xLmRlZmF1bHQuQkxVRS5pZClcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKTtcbiAgICAgICAgICAgIGlmIChsaXN0X3VzZXJzICE9IG51bGwpXG4gICAgICAgICAgICAgICAgbGlzdF91c2Vycy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93VXNlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb29tLmhpc3RvcnkuZm9yRWFjaCgoaGlzdG9yeSkgPT4gdGhpcy5hZGRIaXN0b3J5KGhpc3RvcnkpKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoUGlja0xpc3QoKTtcbiAgICB9XG4gICAgdXBkYXRlKHJvb20pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZURhdGEocm9vbS5zY29yZSk7XG4gICAgICAgIGNvbnN0IGxpc3RfdXNlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RfdXNlcnNcIik7XG4gICAgICAgIGlmIChsaXN0X3VzZXJzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJvb20uY3VycmVudFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdF91c2Vycy5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC51c2VySWQgPT0gcGxheWVyLmlkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIudGVhbS5pZCA9PSBUZWFtXzEuZGVmYXVsdC5SRUQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllci50ZWFtLmlkID09IFRlYW1fMS5kZWZhdWx0LkJMVUUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmx1ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVkXCIpIHx8IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmx1ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uW1wicmVkXCIsIFwiYmx1ZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaW5nID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIilbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGluZyAhPSBudWxsICYmIHBpbmcudGV4dENvbnRlbnQgIT0gcGxheWVyLnBpbmcudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5nLnRleHRDb250ZW50ID0gcGxheWVyLnBpbmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q2FtZXJhRm9sbG93KCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oO1xuICAgICAgICBsZXQgY2VudGVyWCwgY2VudGVyWTtcbiAgICAgICAgY29uc3QgcGxheWVyRGlzYyA9IChfYiA9IChfYSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VycmVudFJvb20pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdGFkaXVtLmRpc2NzLmZpbHRlcigoZGlzYykgPT4gZGlzYy5wbGF5ZXIgPT0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuaWQpWzBdLCBiYWxsID0gKF9kID0gKF9jID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jdXJyZW50Um9vbSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnN0YWRpdW0uZGlzY3NbMF07XG4gICAgICAgIGlmIChiYWxsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FtZXJhX2ZvbGxvdyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvdHRvbUNvbnRhaW5lckhlaWdodCA9IDE2MDtcbiAgICAgICAgY2VudGVyWCA9IChfZiA9IChfZSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuY3VycmVudFJvb20pID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5zdGFkaXVtLmRpc2NzWzBdLng7XG4gICAgICAgIGNlbnRlclkgPSAoKChfaCA9IChfZyA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuY3VycmVudFJvb20pID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5zdGFkaXVtLmRpc2NzWzBdLnkpICsgYm90dG9tQ29udGFpbmVySGVpZ2h0KTtcbiAgICAgICAgaWYgKHBsYXllckRpc2MgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2VudGVyWCA9IDAuNSAqIChjZW50ZXJYICsgcGxheWVyRGlzYy54KTtcbiAgICAgICAgICAgIGNlbnRlclkgPSAwLjUgKiAoY2VudGVyWSArIHBsYXllckRpc2MueSk7XG4gICAgICAgICAgICBjb25zdCBtaWRYID0gMC41ICogdGhpcy5zdGF0ZS5jYW52YXMud2lkdGgsIG1pZFkgPSAwLjUgKiB0aGlzLnN0YXRlLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBpbmZYID0gcGxheWVyRGlzYy54IC0gbWlkWCArIDUwLCBpbmZZID0gcGxheWVyRGlzYy55IC0gbWlkWSArIDUwLCBzdXBYID0gcGxheWVyRGlzYy54ICsgbWlkWCAtIDUwLCBzdXBZID0gcGxheWVyRGlzYy55ICsgbWlkWSAtIDUwO1xuICAgICAgICAgICAgY2VudGVyWCA9IGNlbnRlclggPiBzdXBYID8gc3VwWCA6IGNlbnRlclggPCBpbmZYID8gaW5mWCA6IGNlbnRlclg7XG4gICAgICAgICAgICBjZW50ZXJZID0gY2VudGVyWSA+IHN1cFkgPyBzdXBZIDogY2VudGVyWSA8IGluZlkgPyBpbmZZIDogY2VudGVyWTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJhbWVzID0gNjAgKiAoMSAvIHRoaXMuc3RhdGUuZnBzKTtcbiAgICAgICAgaWYgKGZyYW1lcyA+IDEpXG4gICAgICAgICAgICBmcmFtZXMgPSAxO1xuICAgICAgICBjb25zdCBzbW9vdGhpbmdSYXRpbyA9IDAuMDQ7XG4gICAgICAgIGZyYW1lcyAqPSBzbW9vdGhpbmdSYXRpbztcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueCArPSAoY2VudGVyWCAtIHRoaXMuc3RhdGUuY2FtZXJhRm9sbG93LngpICogZnJhbWVzO1xuICAgICAgICB0aGlzLnN0YXRlLmNhbWVyYUZvbGxvdy55ICs9IChjZW50ZXJZIC0gdGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueSkgKiBmcmFtZXM7XG4gICAgICAgIGNvbnN0IHJvb20gPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMTI1LCBjYW52YXNIZWlnaHQgPSB0aGlzLnN0YXRlLmNhbnZhcy5oZWlnaHQgLSBib3R0b21Db250YWluZXJIZWlnaHQsIHN0YWRpdW1XaWR0aCA9IHJvb20uc3RhZGl1bS53aWR0aCArIG1hcmdpbiwgc3RhZGl1bUhlaWdodCA9IHJvb20uc3RhZGl1bS5oZWlnaHQgKyBtYXJnaW47XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCA+IDIgKiBzdGFkaXVtV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FtZXJhRm9sbG93LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuY2FtZXJhRm9sbG93LnggKyAwLjUgKiB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCA+IHN0YWRpdW1XaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueCA9IHN0YWRpdW1XaWR0aCAtIDAuNSAqIHRoaXMuc3RhdGUuY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuY2FtZXJhRm9sbG93LnggLSAwLjUgKiB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCA8IC1zdGFkaXVtV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FtZXJhRm9sbG93LnggPSAtc3RhZGl1bVdpZHRoICsgMC41ICogdGhpcy5zdGF0ZS5jYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbnZhc0hlaWdodCA+IDIgKiBzdGFkaXVtSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbWVyYUZvbGxvdy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmNhbWVyYUZvbGxvdy55ICsgMC41ICogY2FudmFzSGVpZ2h0ID4gc3RhZGl1bUhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueSA9IHN0YWRpdW1IZWlnaHQgLSAwLjUgKiBjYW52YXNIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueSAtIDAuNSAqIGNhbnZhc0hlaWdodCA8IC1zdGFkaXVtSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbWVyYUZvbGxvdy55ID0gLXN0YWRpdW1IZWlnaHQgKyAwLjUgKiBjYW52YXNIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyTm90aWYoZHQpIHtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGlmXCIpO1xuICAgICAgICBpZiAobm90aWYgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBSb29tU3RhdGVfMS5Sb29tU3RhdGUuUEFVU0U6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwicGF1c2VcIik7XG4gICAgICAgICAgICAgICAgbm90aWYuaW5uZXJIVE1MID0gYCR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX1BBVVNFXCIpfWA7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFJvb21TdGF0ZV8xLlJvb21TdGF0ZS5VTlBBVVNFOiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyBQTEFZRVIgSk9JTiBPTiBVTlBBVVNFXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51bnBhdXNlSW50ZXJ2YWwgLT0gKGR0ICogMTAwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXMuY2xhc3NMaXN0LmFkZChcInBhdXNlXCIpO1xuICAgICAgICAgICAgICAgIG5vdGlmLmlubmVySFRNTCA9IGAke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9QQVVTRVwiKX0gPGRpdiBpZD0ncGF1c2UnIHN0eWxlPSd3aWR0aDogJHt0aGlzLnN0YXRlLnVucGF1c2VJbnRlcnZhbCAqIDEwMCAvIDMwMDB9JSc+PC9kaXY+YDtcbiAgICAgICAgICAgICAgICBpZiAobm90aWYuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgbm90aWYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgUm9vbVN0YXRlXzEuUm9vbVN0YXRlLkdPQUxfU0NPUkU6IHtcbiAgICAgICAgICAgICAgICBpZiAobm90aWYuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgbm90aWYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYW52YXMuY2xhc3NMaXN0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FudmFzLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICBub3RpZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgbm90aWYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJHYW1lKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuc3RhdGUuY3R4ID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbCB8fCBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbSA9PSBudWxsIHx8IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tLnN0YWRpdW0gPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tLnN0YXRlID09IFJvb21TdGF0ZV8xLlJvb21TdGF0ZS5HQU1FX0VOREVEKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zdGF0ZS5jYW52YXNfcmVjdFsyXSAtIHRoaXMuc3RhdGUuY2FudmFzX3JlY3RbMF0sIHRoaXMuc3RhdGUuY2FudmFzX3JlY3RbM10gLSB0aGlzLnN0YXRlLmNhbnZhc19yZWN0WzFdKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTm90aWYoZHQpO1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlciA9IG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0U2VydmVyQnlJZChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50U2VydmVyKTtcbiAgICAgICAgaWYgKHNlcnZlciAhPSBudWxsKVxuICAgICAgICAgICAgc2VydmVyLnNlbmRNc2coXCJpbnB1dHNcIiwgdGhpcy5zdGF0ZS5pbnB1dHMpO1xuICAgICAgICB0aGlzLnJlc2l6ZV9jYW52YXMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJOb3RpZihkdCk7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc3RhdGUuY2FudmFzX3JlY3RbMl0gLSB0aGlzLnN0YXRlLmNhbnZhc19yZWN0WzBdLCB0aGlzLnN0YXRlLmNhbnZhc19yZWN0WzNdIC0gdGhpcy5zdGF0ZS5jYW52YXNfcmVjdFsxXSk7XG4gICAgICAgIHRoaXMuc2V0Q2FtZXJhRm9sbG93KCk7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LnRyYW5zbGF0ZSgtdGhpcy5zdGF0ZS5jYW52YXNfcmVjdFswXSwgLXRoaXMuc3RhdGUuY2FudmFzX3JlY3RbMV0pO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAqIG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5ncmFwaGljcy56b29tLCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAqIG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5ncmFwaGljcy56b29tKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdHgudHJhbnNsYXRlKC10aGlzLnN0YXRlLmNhbWVyYUZvbGxvdy54LCAtdGhpcy5zdGF0ZS5jYW1lcmFGb2xsb3cueSk7XG4gICAgICAgIHRoaXMucmVuZGVyYmcobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uc3RhZGl1bSwgdGhpcy5zdGF0ZS5jdHgpO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5zdGFkaXVtLnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWdtZW50LnZpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yX3RvX3N0eWxlKHNlZ21lbnQuY29sb3IsIEJhc2VfMS5CYXNlLnNlZ21lbnRfY29sb3IpO1xuICAgICAgICAgICAgICAgIHZhciBzZWdWMCA9IHNlZ21lbnQudjA7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ1YxID0gc2VnbWVudC52MTtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudC5jdXJ2ZUYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5tb3ZlVG8oc2VnVjBbMF0sIHNlZ1YwWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHgubGluZVRvKHNlZ1YxWzBdLCBzZWdWMVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnQ0MgPSBzZWdtZW50LmNpcmNsZUNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc194ID0gc2VnVjBbMF0gLSBzZWdDQ1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc195ID0gc2VnVjBbMV0gLSBzZWdDQ1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHguYXJjKHNlZ0NDWzBdLCBzZWdDQ1sxXSwgTWF0aC5zcXJ0KHBvc194ICogcG9zX3ggKyBwb3NfeSAqIHBvc195KSwgTWF0aC5hdGFuMihwb3NfeSwgcG9zX3gpLCBNYXRoLmF0YW4yKHNlZ1YxWzFdIC0gc2VnQ0NbMV0sIHNlZ1YxWzBdIC0gc2VnQ0NbMF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgcmVuZGVyVGltZXN0YW1wID0gbm93IC0gKDEwMDAuMCAvIENvbmZpZ18xLmRlZmF1bHQuU0VSVkVSX1VQREFURV9JTlRFUlZBTCk7XG4gICAgICAgIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tLnN0YWRpdW0uZGlzY3MuZm9yRWFjaCgoZGlzYywgaSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IChfYiA9IChfYSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VycmVudFJvb20pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kaXNjSGlzdG9yeVtpXTtcbiAgICAgICAgICAgIGlmIChidWZmZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoID49IDIgJiYgYnVmZmVyWzFdLnRpbWVzdGFtcCA8PSByZW5kZXJUaW1lc3RhbXApXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXIubGVuZ3RoID49IDIgJiYgYnVmZmVyWzBdLnRpbWVzdGFtcCA8PSByZW5kZXJUaW1lc3RhbXAgJiYgcmVuZGVyVGltZXN0YW1wIDw9IGJ1ZmZlclsxXS50aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYy54ID0gdGhpcy5pbnRlcnBvbGF0ZShidWZmZXJbMF0uc2hhcmVhYmxlRGF0YS54LCBidWZmZXJbMV0uc2hhcmVhYmxlRGF0YS54LCBidWZmZXJbMF0udGltZXN0YW1wLCBidWZmZXJbMV0udGltZXN0YW1wLCByZW5kZXJUaW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICBkaXNjLnkgPSB0aGlzLmludGVycG9sYXRlKGJ1ZmZlclswXS5zaGFyZWFibGVEYXRhLnksIGJ1ZmZlclsxXS5zaGFyZWFibGVEYXRhLnksIGJ1ZmZlclswXS50aW1lc3RhbXAsIGJ1ZmZlclsxXS50aW1lc3RhbXAsIHJlbmRlclRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbXlEaXNjID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uc3RhZGl1bS5kaXNjcy5maWx0ZXIoKGRpc2MpID0+IGRpc2MucGxheWVyID09IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmlkKTtcbiAgICAgICAgaWYgKG15RGlzY1swXSAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyRGlzY0V4dExpbmUobXlEaXNjWzBdKTtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uc3RhZGl1bS5kaXNjcy5mb3JFYWNoKChkaXNjLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LmFyYyhkaXNjLngsIGRpc2MueSwgZGlzYy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChkaXNjLnBsYXllciAhPSBudWxsICYmIGRpc2MucGxheWVyICE9IDAgJiYgZGlzYy5wbGF5ZXIgIT0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5jdXJyZW50UGxheWVycy5maWx0ZXIoKHApID0+IHAuaWQgPT0gZGlzYy5wbGF5ZXIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VXNlcm5hbWUocGxheWVyLnVzZXJuYW1lLCBkaXNjLCBwbGF5ZXIudGVhbS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlzYy5raWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTUsMjU1LDI1NSknO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigwLDAsMCknO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGlmIChkaXNjLmF2YXRhciAhPSBudWxsICYmIGRpc2MuYXZhdGFyICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHguY2xpcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LmRyYXdJbWFnZShtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW1wiSU1BR0VfQVZBVEFSX1wiICsgZGlzYy5hdmF0YXJdLCBkaXNjLnggLSBkaXNjLnJhZGl1cywgZGlzYy55IC0gZGlzYy5yYWRpdXMsIGRpc2MucmFkaXVzICogMiwgZGlzYy5yYWRpdXMgKiAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yX3RvX3N0eWxlKGRpc2MuY29sb3IsIEJhc2VfMS5CYXNlLmRpc2NQaHlzaWNzLmNvbG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5zdHJva2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdVc2VybmFtZSh1c2VybmFtZSwgZGlzYywgdGVhbSkge1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gJzEycHggc2Fucy1zZXJpZic7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dCh1c2VybmFtZSk7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LnN0cm9rZVRleHQodXNlcm5hbWUsIGRpc2MueCAtICh0ZXh0LndpZHRoIC8gMiksIGRpc2MueSArIGRpc2MucmFkaXVzICsgMTUpO1xuICAgICAgICBpZiAodGVhbSA9PSBUZWFtXzEuZGVmYXVsdC5SRUQuaWQpXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC5maWxsU3R5bGUgPSAnI2JkMzgzOCc7XG4gICAgICAgIGVsc2UgaWYgKHRlYW0gPT0gVGVhbV8xLmRlZmF1bHQuQkxVRS5pZClcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4LmZpbGxTdHlsZSA9ICcjYmQzODM4JztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5nbG9iYWxBbHBoYSA9IDAuODtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdHguZmlsbFRleHQodXNlcm5hbWUsIGRpc2MueCAtICh0ZXh0LndpZHRoIC8gMiksIGRpc2MueSArIGRpc2MucmFkaXVzICsgMTUpO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICAgIGRyYXdQbGF5ZXJEaXNjRXh0TGluZShkaXNjKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5saW5lV2lkdGggPSAzO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4Lmdsb2JhbEFscGhhID0gMC4zO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5hcmMoZGlzYy54LCBkaXNjLnksIGRpc2MucmFkaXVzICsgMTAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdGUuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnN0YXRlLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICAgIGludGVycG9sYXRlKHAwLCBwMSwgdDAsIHQxLCByZW5kZXJUaW1lc3RhbXApIHtcbiAgICAgICAgY29uc3QgZGVsdGFNb3ZlbWVudCA9IChwMSAtIHAwKTtcbiAgICAgICAgcmV0dXJuIHAwICsgZGVsdGFNb3ZlbWVudCAqIChyZW5kZXJUaW1lc3RhbXAgLSB0MCkgLyAodDEgLSB0MCk7XG4gICAgfVxuICAgIHJlc2l6ZV9jYW52YXMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaztcbiAgICAgICAgdmFyIHJlY3QgPSBbLSgoX2IgPSAoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1cnJlbnRSb29tKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhZGl1bS53aWR0aCksIC0oKF9kID0gKF9jID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jdXJyZW50Um9vbSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnN0YWRpdW0uaGVpZ2h0KSwgKF9mID0gKF9lID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jdXJyZW50Um9vbSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnN0YWRpdW0ud2lkdGgsIChfaCA9IChfZyA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuY3VycmVudFJvb20pID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5zdGFkaXVtLmhlaWdodF07XG4gICAgICAgIHZhciBjb25zaWRlciA9IGZ1bmN0aW9uIChwdCwgcikge1xuICAgICAgICAgICAgdmFyIHggPSBwdFswXTtcbiAgICAgICAgICAgIHZhciB5ID0gcHRbMV07XG4gICAgICAgICAgICBpZiAoeCAtIHIgPCByZWN0WzBdKVxuICAgICAgICAgICAgICAgIHJlY3RbMF0gPSB4IC0gcjtcbiAgICAgICAgICAgIGlmICh5IC0gciA8IHJlY3RbMV0pXG4gICAgICAgICAgICAgICAgcmVjdFsxXSA9IHkgLSByO1xuICAgICAgICAgICAgaWYgKHggKyByID4gcmVjdFsyXSlcbiAgICAgICAgICAgICAgICByZWN0WzJdID0geCArIHI7XG4gICAgICAgICAgICBpZiAoeSArIHIgPiByZWN0WzNdKVxuICAgICAgICAgICAgICAgIHJlY3RbM10gPSB5ICsgcjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5mb3JfYWxsX3NoYXBlcygoX2sgPSAoX2ogPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLmN1cnJlbnRSb29tKSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suc3RhZGl1bSwgZnVuY3Rpb24gKHNoYXBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHNoYXBlLm9iamVjdDtcbiAgICAgICAgICAgIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3ZlcnRleGVzJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc2lkZXIoW28ueCwgby55XSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dvYWxzJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc2lkZXIoby5wMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyKG8ucDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkaXNjcyc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyKFtvLngsIG8ueV0sIG8ucmFkaXVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2FudmFzX2Rpdl9zaXplID0gW3RoaXMuc3RhdGUuY2FudmFzLmNsaWVudFdpZHRoLCB0aGlzLnN0YXRlLmNhbnZhcy5jbGllbnRIZWlnaHRdO1xuICAgICAgICByZWN0ID0gW1xuICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLm1pbihyZWN0WzBdIC0gMCwgLWNhbnZhc19kaXZfc2l6ZVswXSAvIDIpKSxcbiAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5taW4ocmVjdFsxXSAtIDAsIC1jYW52YXNfZGl2X3NpemVbMV0gLyAyKSksXG4gICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgubWF4KHJlY3RbMl0gKyAwLCBjYW52YXNfZGl2X3NpemVbMF0gLyAyKSksXG4gICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgubWF4KHJlY3RbM10gKyAwLCBjYW52YXNfZGl2X3NpemVbMV0gLyAyKSksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUuY2FudmFzX3JlY3QgPSByZWN0O1xuICAgICAgICB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc3RhdGUuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICBmb3JfYWxsX3NoYXBlcyhzdCwgdHlwZXMsIGYgPSBudWxsKSB7XG4gICAgICAgIGlmICghZikge1xuICAgICAgICAgICAgZiA9IHR5cGVzO1xuICAgICAgICAgICAgdHlwZXMgPSBbJ3ZlcnRleGVzJywgJ3NlZ21lbnRzJywgJ2dvYWxzJywgJ2Rpc2NzJywgJ3BsYW5lcyddO1xuICAgICAgICB9XG4gICAgICAgIHR5cGVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIHZhciBncm91cCA9IHN0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaCgob2JqLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmKHRoaXMuU2hhcGUobmFtZSwgb2JqLCBpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBTaGFwZSh0eXBlLCBvYmplY3QsIGkpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgb2JqZWN0OiBvYmplY3QsIGluZGV4OiBpIH07XG4gICAgfVxuICAgIHJlbmRlcmJnKHN0YWRpdW0sIGN0eCkge1xuICAgICAgICB2YXIgYmcgPSBzdGFkaXVtLmJnO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBpZiAoYmcudHlwZSA9PSAnZ3Jhc3MnIHx8IGJnLnR5cGUgPT0gJ2hvY2tleScpIHtcbiAgICAgICAgICAgIGlmIChiZy50eXBlID09ICdncmFzcycpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQmFzZV8xLkJhc2VbXCJncmFzc1wiXS5iZ19jb2xvcjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBCYXNlXzEuQmFzZVtcImhvY2tleVwiXS5iZ19jb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oLWJnLndpZHRoICsgYmcuY29ybmVyUmFkaXVzLCAtYmcuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIFRPRE86IExlZnQgYm9yZGVyIGlzIHdyb25nXG4gICAgICAgICAgICBjdHguYXJjVG8oYmcud2lkdGgsIC1iZy5oZWlnaHQsIGJnLndpZHRoLCAtYmcuaGVpZ2h0ICsgYmcuY29ybmVyUmFkaXVzLCBiZy5jb3JuZXJSYWRpdXMpO1xuICAgICAgICAgICAgY3R4LmFyY1RvKGJnLndpZHRoLCBiZy5oZWlnaHQsIGJnLndpZHRoIC0gYmcuY29ybmVyUmFkaXVzLCBiZy5oZWlnaHQsIGJnLmNvcm5lclJhZGl1cyk7XG4gICAgICAgICAgICBjdHguYXJjVG8oLWJnLndpZHRoLCBiZy5oZWlnaHQsIC1iZy53aWR0aCwgYmcuaGVpZ2h0IC0gYmcuY29ybmVyUmFkaXVzLCBiZy5jb3JuZXJSYWRpdXMpO1xuICAgICAgICAgICAgY3R4LmFyY1RvKC1iZy53aWR0aCwgLWJnLmhlaWdodCwgLWJnLndpZHRoICsgYmcuY29ybmVyUmFkaXVzLCAtYmcuaGVpZ2h0LCBiZy5jb3JuZXJSYWRpdXMpO1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKDQwLCA0MCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5jdHguY3JlYXRlUGF0dGVybihtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW2BJTUFHRV9USUxFXyR7YmcudHlwZS50b1VwcGVyQ2FzZSgpfWBdLCBudWxsKTtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgtc3RhZGl1bS53aWR0aCAtIDUwLCAtc3RhZGl1bS5oZWlnaHQgLSA1MCwgMiAqIHN0YWRpdW0ud2lkdGggLSA0MCwgMiAqIHN0YWRpdW0uaGVpZ2h0IC0gMjApO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgLWJnLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDAsIGJnLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGJnLmtpY2tPZmZSYWRpdXMsIDApO1xuICAgICAgICAgICAgY3R4LmFyYygwLCAwLCBiZy5raWNrT2ZmUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IEJhc2VfMS5CYXNlW1wiZ3Jhc3NcIl0uYm9yZGVyX2NvbG9yO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJnLnR5cGUgPT0gJycgJiYgYmcuY29sb3IgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcl90b19zdHlsZShiZy5jb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoLXN0YWRpdW0ud2lkdGgsIC1zdGFkaXVtLmhlaWdodCwgMiAqIHN0YWRpdW0ud2lkdGgsIDIgKiBzdGFkaXVtLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5jb2xvcl90b19zdHlsZShiZy5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQmFzZV8xLkJhc2VbXCJncmFzc1wiXS5iZ19jb2xvcjtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgY29sb3JfdG9fc3R5bGUoY29sb3IsIGRlZiA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZiA/IGRlZiA6ICdyZ2IoMCwwLDApJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2xvci5zdWJzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnIycgKyBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncmdiKCcgKyBjb2xvclswXSArICcsJyArIGNvbG9yWzFdICsgJywnICsgY29sb3JbMl0gKyAnKSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2NvcmVEYXRhKHNjb3JlKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlUmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVJlZFwiKTtcbiAgICAgICAgaWYgKHNjb3JlUmVkICE9IG51bGwpXG4gICAgICAgICAgICBzY29yZVJlZC50ZXh0Q29udGVudCA9IHNjb3JlLnJlZC50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzY29yZUJsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlQmx1ZVwiKTtcbiAgICAgICAgaWYgKHNjb3JlQmx1ZSAhPSBudWxsKVxuICAgICAgICAgICAgc2NvcmVCbHVlLnRleHRDb250ZW50ID0gc2NvcmUuYmx1ZS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLCBvdmVydGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnRpbWVcIik7XG4gICAgICAgIGlmICh0aW1lICE9IG51bGwgJiYgb3ZlcnRpbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgcm9vbSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tO1xuICAgICAgICAgICAgaWYgKHJvb20uc2NvcmUudGltZUxpbWl0ID4gMCAmJiBNYXRoLmZsb29yKHNjb3JlLnRpbWUpICsgMzAgPiByb29tLnNjb3JlLnRpbWVMaW1pdCAqIDYwKVxuICAgICAgICAgICAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZChcIndhcm5pbmdcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGltZS5jbGFzc0xpc3QucmVtb3ZlKFwid2FybmluZ1wiKTtcbiAgICAgICAgICAgIGlmIChyb29tLnNjb3JlLnRpbWVMaW1pdCA+IDAgJiYgTWF0aC5mbG9vcihzY29yZS50aW1lKSA+IHJvb20uc2NvcmUudGltZUxpbWl0ICogNjApXG4gICAgICAgICAgICAgICAgb3ZlcnRpbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvdmVydGltZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdGhpcy5mbXRNU1MoTWF0aC5mbG9vcihzY29yZS50aW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJvcChldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHNlcnZlciA9IG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0U2VydmVyQnlJZChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50U2VydmVyKTtcbiAgICAgICAgaWYgKHNlcnZlciA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgY2FzZSBcInBpY2tfbGlzdF9yZWRcIjoge1xuICAgICAgICAgICAgICAgIHNlcnZlci5zZW5kTXNnKFwic2V0VGVhbVBsYXllclwiLCB7IHBsYXllcklkOiBwYXJzZUludChkYXRhKSwgdGVhbTogVGVhbV8xLmRlZmF1bHQuUkVELmlkIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInBpY2tfbGlzdF9ibHVlXCI6IHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuc2VuZE1zZyhcInNldFRlYW1QbGF5ZXJcIiwgeyBwbGF5ZXJJZDogcGFyc2VJbnQoZGF0YSksIHRlYW06IFRlYW1fMS5kZWZhdWx0LkJMVUUuaWQgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgc2VydmVyLnNlbmRNc2coXCJzZXRUZWFtUGxheWVyXCIsIHsgcGxheWVySWQ6IHBhcnNlSW50KGRhdGEpLCB0ZWFtOiBUZWFtXzEuZGVmYXVsdC5TUEVDVEFUT1JTLmlkIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0RHJhZyhldikge1xuICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcInBsYXllcl9pZFwiKSk7XG4gICAgfVxuICAgIHJlZnJlc2hQaWNrTGlzdCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgcGlja19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrX2xpc3RcIiksIHBpY2tfbGlzdF9yZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tfbGlzdF9yZWRcIiksIHBpY2tfbGlzdF9ibHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrX2xpc3RfYmx1ZVwiKSwgcGlja19saXN0X3NwZWN0YXRvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tfbGlzdF9zcGVjdGF0b3JzXCIpO1xuICAgICAgICBpZiAocGlja19saXN0ID09IG51bGwgfHwgcGlja19saXN0X3JlZCA9PSBudWxsIHx8IHBpY2tfbGlzdF9ibHVlID09IG51bGwgfHwgcGlja19saXN0X3NwZWN0YXRvcnMgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcGlja19saXN0X3JlZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwaWNrX2xpc3RfYmx1ZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwaWNrX2xpc3Rfc3BlY3RhdG9ycy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAoX2IgPSAoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1cnJlbnRSb29tKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY3VycmVudFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJfaWRcIiwgcGxheWVyLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZGl2LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBhdmF0YXIuc3JjID0gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIklNQUdFX0FWQVRBUl9cIiArIHBsYXllci5hdmF0YXJdLnNyYztcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChhdmF0YXIpO1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdXNlcm5hbWUuY2xhc3NMaXN0LmFkZChcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKCgoX2IgPSAoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1cnJlbnRSb29tKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGlja01vZGUpID09IHBsYXllci5pZClcbiAgICAgICAgICAgICAgICB1c2VybmFtZS5jbGFzc0xpc3QuYWRkKFwicGlja2VyXCIpO1xuICAgICAgICAgICAgdXNlcm5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXIudXNlcm5hbWU7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICAgICAgICAgICAgY29uc3QgcGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwaW5nLmNsYXNzTGlzdC5hZGQoXCJwaW5nXCIpO1xuICAgICAgICAgICAgcGluZy50ZXh0Q29udGVudCA9IHBsYXllci5waW5nLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocGluZyk7XG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLnN0YXJ0RHJhZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIudGVhbS5pZCA9PSBUZWFtXzEuZGVmYXVsdC5SRUQuaWQpXG4gICAgICAgICAgICAgICAgcGlja19saXN0X3JlZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyLnRlYW0uaWQgPT0gVGVhbV8xLmRlZmF1bHQuQkxVRS5pZClcbiAgICAgICAgICAgICAgICBwaWNrX2xpc3RfYmx1ZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHBpY2tfbGlzdF9zcGVjdGF0b3JzLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwbGF5ZXJKb2luKHBsYXllciwgcGxheWVyTGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcnNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyc0NvdW50XCIpO1xuICAgICAgICBpZiAocGxheWVyc0NvdW50ICE9IG51bGwpXG4gICAgICAgICAgICBwbGF5ZXJzQ291bnQudGV4dENvbnRlbnQgPSBwbGF5ZXJMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbGlzdF91c2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdF91c2Vyc1wiKTtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmRhdGFzZXQudXNlcklkID0gcGxheWVyLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcInVzZXJuYW1lXCIsIHBsYXllci51c2VybmFtZSk7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IGAke3BsYXllci51c2VybmFtZX0gPHNwYW4+JHtwbGF5ZXIucGluZ308L3NwYW4+YDtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1VzZXJNZW51LmJpbmQodGhpcykpO1xuICAgICAgICBpZiAocGxheWVyLnRlYW0gPT0gVGVhbV8xLmRlZmF1bHQuUkVEKVxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgICAgZWxzZSBpZiAocGxheWVyLnRlYW0gPT0gVGVhbV8xLmRlZmF1bHQuQkxVRSlcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJibHVlXCIpO1xuICAgICAgICBpZiAobGlzdF91c2VycyAhPSBudWxsKVxuICAgICAgICAgICAgbGlzdF91c2Vycy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIHRoaXMucmVmcmVzaFBpY2tMaXN0KCk7XG4gICAgfVxuICAgIHBsYXllckxlYXZlKHBsYXllcklkLCBwbGF5ZXJMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyc0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJzQ291bnRcIik7XG4gICAgICAgIGlmIChwbGF5ZXJzQ291bnQgIT0gbnVsbClcbiAgICAgICAgICAgIHBsYXllcnNDb3VudC50ZXh0Q29udGVudCA9IHBsYXllckxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBsaXN0X3VzZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0X3VzZXJzXCIpO1xuICAgICAgICBpZiAobGlzdF91c2VycyAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0X3VzZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQudXNlcklkID09IHBsYXllcklkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfdXNlcnMucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2hQaWNrTGlzdCgpO1xuICAgIH1cbiAgICBuZXdDaGF0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdENvbnRlbnRcIik7XG4gICAgICAgIGxldCBzY3JvbGxUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2hhdENvbnRhaW5lciAhPSBudWxsICYmIE1hdGguYWJzKGNoYXRDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gY2hhdENvbnRhaW5lci5zY3JvbGxUb3AgLSBjaGF0Q29udGFpbmVyLmNsaWVudEhlaWdodCkgPCAxKVxuICAgICAgICAgICAgc2Nyb2xsVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImFubm91bmNlbWVudFwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFubm91bmNlbWVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEub2ZmaWNpYWxUcmFkID8gbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KGRhdGEubWVzc2FnZSwgZGF0YS5wYXJhbXMgPyBkYXRhLnBhcmFtcyA6IFtdKSA6IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29sb3IgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBkYXRhLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib2xkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXIgPT09IG51bGwgfHwgY2hhdENvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLnNvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmdlbmVyYWwgJiYgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmNoYXQgPyBtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW1wiQVVESU9fSElHSExJR0hUXCJdLnBsYXkoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5hdWRpby5nZW5lcmFsICYmIG1haW5fMS5kZWZhdWx0LnNldHRpbmdzTWFuYWdlci5hdWRpby5jaGF0ID8gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIkFVRElPX0NIQVRcIl0ucGxheSgpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicG1fdG9cIjpcbiAgICAgICAgICAgIGNhc2UgXCJwbV9mcm9tXCI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInVzZXJuYW1lXCIsIGRhdGEudXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoZGF0YS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBcInBtX3RvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYFs8ICR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9DSEFUX1BNX1RPXCIsIFtkYXRhLnVzZXJuYW1lXSl9XSBgO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYFs+ICR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9DSEFUX1BNX0ZST01cIiwgW2RhdGEudXNlcm5hbWVdKX1dIGA7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1VzZXJNZW51LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByZXBlbmQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXIgPT09IG51bGwgfHwgY2hhdENvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmdlbmVyYWwgJiYgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmNoYXQgPyBtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW1wiQVVESU9fSElHSExJR0hUXCJdLnBsYXkoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50ZWFtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLnRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVGVhbV8xLmRlZmF1bHQuUkVELmlkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBUZWFtXzEuZGVmYXVsdC5SRUQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRlYW1fMS5kZWZhdWx0LkJMVUUuaWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFRlYW1fMS5kZWZhdWx0LkJMVUUuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRlYW1fMS5kZWZhdWx0LlNQRUNUQVRPUlMuaWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IFRlYW1fMS5kZWZhdWx0LlNQRUNUQVRPUlMuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGBbJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfVEVBTVwiKX1dICR7ZGF0YS51c2VybmFtZX06IGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoZGF0YS5yYW5rKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGRhdGEudXNlcm5hbWUgKyBcIjogXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwidXNlcm5hbWVcIiwgZGF0YS51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93VXNlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmVwZW5kKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXIgPT09IG51bGwgfHwgY2hhdENvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2VuZXJhbCAmJiBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uY2hhdCA/IG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19DSEFUXCJdLnBsYXkoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXRDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHNjcm9sbFRvQm90dG9tKVxuICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXIuc2Nyb2xsVG9wID0gY2hhdENvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoY2hhdENvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA+IDIwKVxuICAgICAgICAgICAgICAgIGNoYXRDb250YWluZXIucmVtb3ZlQ2hpbGQoY2hhdENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaXNwZXIodXNlcm5hbWUpIHtcbiAgICAgICAgY29uc3QgY2hhdENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtc2dUeXBlXCIpLCBjaGF0TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0TXNnXCIpO1xuICAgICAgICBpZiAoY2hhdENhdGVnb3J5ID09IG51bGwgfHwgY2hhdE1zZyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgb3B0aW9uVmFsID0gbnVsbDtcbiAgICAgICAgQXJyYXkuZnJvbShjaGF0Q2F0ZWdvcnkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIikpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIG9wdGlvblZhbCA9IGVsZW1lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9uVmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSB1c2VybmFtZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSB1c2VybmFtZTtcbiAgICAgICAgICAgIGNoYXRDYXRlZ29yeS5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjaGF0Q2F0ZWdvcnkudmFsdWUgPSB1c2VybmFtZTtcbiAgICAgICAgY2hhdE1zZy5mb2N1cygpO1xuICAgIH1cbiAgICB1c2VyTWVudUl0ZW0oZSkge1xuICAgICAgICBzd2l0Y2ggKGUuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSB7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3BlclwiOiB7XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzcGVyKHRoaXMuc3RhdGUuZm9jdXNVc2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJwcm9maWxlXCI6IHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwicmVxdWVzdFByb2ZpbGVcIiwgdGhpcy5zdGF0ZS5mb2N1c1VzZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZyaWVuZFwiOiB7XG4gICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQud2ViU29ja2V0c01hbmFnZXIuc2VuZE1zZyhcImFkZEZyaWVuZFwiLCB0aGlzLnN0YXRlLmZvY3VzVXNlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmVwb3J0XCI6IHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwicmVwb3J0XCIsIHRoaXMuc3RhdGUuZm9jdXNVc2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJtdXRlXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEFkbWluKFwibmV3X3NhbmN0aW9uXCIsIHsgdHlwZTogXCJtdXRlXCIsIHVzZXJuYW1lOiB0aGlzLnN0YXRlLmZvY3VzVXNlciB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJiYW5cIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQWRtaW4oXCJuZXdfc2FuY3Rpb25cIiwgeyB0eXBlOiBcImJhblwiLCB1c2VybmFtZTogdGhpcy5zdGF0ZS5mb2N1c1VzZXIgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZVVzZXJNZW51KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3RhdGUudXNlck1lbnVGdW5jdGlvbik7XG4gICAgICAgIGNvbnN0IHVzZXJfbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9tZW51XCIpO1xuICAgICAgICBpZiAodXNlcl9tZW51ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHVzZXJfbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHNob3dVc2VyTWVudShlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGUuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ1c2VybmFtZVwiKSA9PSAoKF9hID0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS51c2VybmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuZm9jdXNVc2VyID0gZS5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZShcInVzZXJuYW1lXCIpO1xuICAgICAgICBjb25zdCB1c2VyX21lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfbWVudVwiKTtcbiAgICAgICAgaWYgKHVzZXJfbWVudSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBBcnJheS5mcm9tKHVzZXJfbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09IFwiZnJpZW5kXCIgJiYgKChfYSA9IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RnJpZW5kYnlVc2VybmFtZSh0aGlzLnN0YXRlLmZvY3VzVXNlcikpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgaWYgKFtcIm11dGVcIiwgXCJiYW5cIl0uaW5jbHVkZXMoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSkge1xuICAgICAgICAgICAgICAgIGlmIChbXCJ1c2VyXCIsIFwidmlwXCJdLmluY2x1ZGVzKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLnJhbmspKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVzZXJfbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB1c2VyX21lbnUuc3R5bGUubGVmdCA9IChlLnBhZ2VYIC0gNzUpICsgXCJweFwiO1xuICAgICAgICB1c2VyX21lbnUuc3R5bGUudG9wID0gKGUucGFnZVkgLSB1c2VyX21lbnUuY2xpZW50SGVpZ2h0IC0gMjApICsgXCJweFwiO1xuICAgICAgICB0aGlzLnN0YXRlLnVzZXJNZW51RnVuY3Rpb24gPSB0aGlzLmhpZGVVc2VyTWVudS5iaW5kKHRoaXMpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGF0ZS51c2VyTWVudUZ1bmN0aW9uLCBmYWxzZSksIDEwKTtcbiAgICB9XG4gICAgZ2V0UmVnaW9uRmxhZyhyZWdpb24pIHtcbiAgICAgICAgc3dpdGNoIChyZWdpb24udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcImV1XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRVVcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVU5ERUZJTkVEXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLmFwcCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJnYW1lU2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwiZ2FtZVwiIHRhYmluZGV4PVwiMVwiPjwvY2FudmFzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9vbVNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUgcmVkXCI+PC9kaXY+IDxzcGFuIGlkPVwic2NvcmVSZWRcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3BhY2VcIj4tPC9zcGFuPiA8c3BhbiBpZD1cInNjb3JlQmx1ZVwiPjwvc3Bhbj4gPGRpdiBjbGFzcz1cImNpcmNsZSBibHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2Nsb2NrLnBuZ1wiPiA8c3BhbiBpZD1cInRpbWVcIj48L3NwYW4+IDxzcGFuIGlkPVwib3ZlcnRpbWVcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9PVkVSVElNRVwiKX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllcnNcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvcGxheWVycy5wbmdcIj4gPHNwYW4gaWQ9XCJwbGF5ZXJzQ291bnRcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvb21OYW1lXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZsYWdzL3JlZ2lvbi8ke3RoaXMuZ2V0UmVnaW9uRmxhZyh0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLmN1cnJlbnRTZXJ2ZXIpfS5zdmdcIi8+PHNwYW4gaWQ9XCJyb29tTmFtZVwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj48c3BhbiBpZD1cImZwc1wiPjA8L3NwYW4+IGZwczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub3RpZlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cInBpY2tfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlja19saXN0X2ZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9jb250ZW50XCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1RFQU1fUkVEXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBwaWNrX2xpc3RfdGVhbVwiIGlkPVwicGlja19saXN0X3JlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzcGVjdGF0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9jb250ZW50XCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1RFQU1fU1BFQ1RBVE9SU1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgcGlja19saXN0X3RlYW1cIiBpZD1cInBpY2tfbGlzdF9zcGVjdGF0b3JzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2NvbnRlbnRcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfVEVBTV9CTFVFXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBwaWNrX2xpc3RfdGVhbVwiIGlkPVwicGlja19saXN0X2JsdWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJhZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfY29udGVudFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9zZXR0aW5ncy5zdmdcIj4gJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0FETUlOXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiYWRtaW5fbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwidGVhbVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9BRE1JTl9URUFNXCIpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHR5cGU9XCJyZXBvcnRzXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0FETUlOX1JFUE9SVFNcIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdHlwZT1cInNhbmN0aW9uc1wiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9BRE1JTl9TQU5DVElPTlNcIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdHlwZT1cIm5ld19zYW5jdGlvblwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9BRE1JTl9ORVdfU0FOQ1RJT05cIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdHlwZT1cInJhbmtcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfQURNSU5fUkFOS1wiKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV90aXRsZVwiPjxzcGFuIGlkPVwiYWRtaW5fdGl0bGVcIj48L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhZG1pbl9jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+PGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfQ0xPU0VcIil9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cImxlYWRlcmJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9jb250ZW50XCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL3NldHRpbmdzLnN2Z1wiPiAke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfTEVBREVSQk9BUkRcIil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0xFQURFUkJPQVJEX0ZJTFRFUlwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJsZWFkZXJib2FyZEZpbHRlclwiPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGVhZGVyYm9hcmRDb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+PGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX0dFTkVSQUxfQ0xPU0VcIil9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPjxpbWcgcHJvZmlsZV9kYXRhPVwiYXZhdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZVwiIHByb2ZpbGVfZGF0YT1cIm9ubGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcHJvZmlsZV9kYXRhPVwidXNlcm5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19SRUdJU1RFUkVEXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwicmVnaXN0ZXJlZFwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfTEVWRUxfWFBcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJsZXZlbF94cFwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfRUxPXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwiZWxvXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X3RpdGxlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0dBTUVTXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19HQU1FU19QTEFZRURcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJnYW1lc19wbGF5ZWRcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0dBTUVTX1dPTlwiKX06IDxzcGFuIHByb2ZpbGVfZGF0YT1cImdhbWVzX3dvblwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfR0FNRVNfTE9TVFwiKX06IDxzcGFuIHByb2ZpbGVfZGF0YT1cImdhbWVzX2xvc3RcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX1dJTl9SQVRFXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwid2luX3JhdGVcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0JFU1RfU1RSRUFLXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwiYmVzdF9zdHJlYWtcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfdGl0bGVcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfR0VORVJBTFwiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfU0hPVFNcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJzaG90c1wiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfU0hPVFNfUEVSX01BVENIXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwic2hvdHNfcGVyX21hdGNoXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19HT0FMU1wiKX06IDxzcGFuIHByb2ZpbGVfZGF0YT1cImdvYWxzXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19HT0FMU19QRVJfTUFUQ0hcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJnb2Fsc19wZXJfbWF0Y2hcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0hBVF9UUklDS1NcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJoYXRfdHJpY2tzXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19BU1NJU1RTXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwiYXNzaXN0c1wiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfQVNTSVNUU19QRVJfTUFUQ0hcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJhc3Npc3RzX3Blcl9tYXRjaFwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfU0FWRVNcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJzYXZlc1wiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfU0FWRVNfUEVSX01BVENIXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwic2F2ZXNfcGVyX21hdGNoXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19QQVNTX0FDQ1VSQUNZXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwicGFzc19hY2N1cmFjeVwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfU1RBVFNfUEFTU19QRVJfTUFUQ0hcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJwYXNzX3Blcl9tYXRjaFwiPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV90aXRsZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19HT0FMS0VFUEVSXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TVEFUU19QTEFZRURfR0tcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJwbGF5ZWRfZ2tcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0NTXCIpfTogPHNwYW4gcHJvZmlsZV9kYXRhPVwiY3NcIj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0NTX1BFUkNFTlRBR0VcIil9OiA8c3BhbiBwcm9maWxlX2RhdGE9XCJjc19wZXJjZW50YWdlXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X3RpdGxlXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NUQVRTX0JBREdFU1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9OT1RfQVZBSUxBQkxFXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPjxidXR0b24gY2xhc3M9XCJjbG9zZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0NMT1NFXCIpfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJzZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfY29udGVudFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9zZXR0aW5ncy5zdmdcIj4gJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1NFVFRJTkdTXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjYXRlZ29yeT1cImdyYXBoaWNzXCIgY2xhc3M9XCJzZWxlY3RlZFwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0dSQVBISUNTXCIpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjYXRlZ29yeT1cImF1ZGlvXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfQVVESU9cIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNhdGVnb3J5PVwiaW5wdXRzXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfSU5QVVRTXCIpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCIgY2F0ZWdvcnlfbmFtZT1cImdyYXBoaWNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0dSQVBISUNTX1pPT01cIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwic2V0dGluZ3NcIiBzZXR0aW5nc19jYXRlZ29yeT1cImdyYXBoaWNzXCIgc2V0dGluZ3NfdmFsPVwiem9vbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfR1JBUEhJQ1NfWk9PTVwiKX0gMXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMS4yNVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0dSQVBISUNTX1pPT01cIil9IDEuMjV4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEuNVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0dSQVBISUNTX1pPT01cIil9IDEuNXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMS43NVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0dSQVBISUNTX1pPT01cIil9IDEuNzV4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfTUVOVV9HUkFQSElDU19aT09NXCIpfSAyeDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyLjI1XCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfR1JBUEhJQ1NfWk9PTVwiKX0gMi4yNXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMi41XCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfR1JBUEhJQ1NfWk9PTVwiKX0gMi41eDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfR1JBUEhJQ1NfRlBTXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdHlwZT1cInNldHRpbmdzXCIgc2V0dGluZ3NfY2F0ZWdvcnk9XCJncmFwaGljc1wiIHNldHRpbmdzX3ZhbD1cImZwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfR1JBUEhJQ1NfRlBTX05PX0xJTUlUXCIpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MFwiPjYwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiIGNhdGVnb3J5X25hbWU9XCJhdWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfTUVOVV9BVURJT19HRU5FUkFMXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1yZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2V0dGluZ3NfYXVkaW9fZ2VuZXJhbFwiIHNldHRpbmdzX2NhdGVnb3J5PVwiYXVkaW9cIiBzZXR0aW5nc192YWw9XCJnZW5lcmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNldHRpbmdzX2F1ZGlvX2dlbmVyYWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfQVVESU9fQ0hBVFwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUtcmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNldHRpbmdzX2F1ZGlvX2NoYXRcIiBzZXR0aW5nc19jYXRlZ29yeT1cImF1ZGlvXCIgc2V0dGluZ3NfdmFsPVwiY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZXR0aW5nc19hdWRpb19jaGF0XCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0FVRElPX0dBTUVcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLXJlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzZXR0aW5nc19hdWRpb19nYW1lXCIgc2V0dGluZ3NfY2F0ZWdvcnk9XCJhdWRpb1wiIHNldHRpbmdzX3ZhbD1cImdhbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2V0dGluZ3NfYXVkaW9fZ2FtZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfTUVOVV9BVURJT19OT1RJRklDQVRJT05cIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLXJlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzZXR0aW5nc19hdWRpb19ub3RpZlwiIHNldHRpbmdzX2NhdGVnb3J5PVwiYXVkaW9cIiBzZXR0aW5nc192YWw9XCJub3RpZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZXR0aW5nc19hdWRpb19ub3RpZlwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiIGNhdGVnb3J5X25hbWU9XCJpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlY29yZEtleVwiPjxkaXY+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfSU5QVVRTX1BSRVNTXCIpfTwvZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0lOUFVUU19VUFwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNfdmFsdWVcIiBzZXR0aW5nc19jYXRlZ29yeT1cImlucHV0c1wiIHNldHRpbmdzX3ZhbD1cInVwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0lOUFVUU19ET1dOXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0c192YWx1ZVwiIHNldHRpbmdzX2NhdGVnb3J5PVwiaW5wdXRzXCIgc2V0dGluZ3NfdmFsPVwiZG93blwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfTUVOVV9JTlBVVFNfTEVGVFwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNfdmFsdWVcIiBzZXR0aW5nc19jYXRlZ29yeT1cImlucHV0c1wiIHNldHRpbmdzX3ZhbD1cImxlZnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfSU5QVVRTX1JJR0hUXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0c192YWx1ZVwiIHNldHRpbmdzX2NhdGVnb3J5PVwiaW5wdXRzXCIgc2V0dGluZ3NfdmFsPVwicmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX01FTlVfSU5QVVRTX0tJQ0tcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRzX3ZhbHVlXCIgc2V0dGluZ3NfY2F0ZWdvcnk9XCJpbnB1dHNcIiBzZXR0aW5nc192YWw9XCJraWNrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9NRU5VX0lOUFVUU19UT0dHTEVfQ0hBVFwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNfdmFsdWVcIiBzZXR0aW5nc19jYXRlZ29yeT1cImlucHV0c1wiIHNldHRpbmdzX3ZhbD1cInRvZ2dsZV9jaGF0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPjxidXR0b24gY2xhc3M9XCJjbG9zZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0NMT1NFXCIpfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJmcmllbmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9jb250ZW50XCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2hlYXJ0LnN2Z1wiPiAke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfRlJJRU5EU1wiKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgaWQ9XCJmcmllbmRzTGlzdFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj48YnV0dG9uIGNsYXNzPVwiY2xvc2VcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfR0VORVJBTF9DTE9TRVwiKX08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwic2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfY29udGVudFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9iYXNrZXQuc3ZnXCI+ICR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9TSE9QXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2luXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2NvaW4ucG5nXCI+IDxzcGFuIGlkPVwic2hvcENvaW5WYWxcIj48L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hvcENhdGVnb3J5c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNcIiBpZD1cInNob3BJdGVtc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPjxidXR0b24gY2xhc3M9XCJjbG9zZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9HRU5FUkFMX0NMT1NFXCIpfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInVzZXJfbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwibXV0ZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9VU0VSX01FTlVfTVVURVwiKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiYmFuXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJHQU1FX1VTRVJfTUVOVV9CQU5cIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdHlwZT1cInByb2ZpbGVcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfVVNFUl9NRU5VX1BST0ZJTEVcIil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdHlwZT1cImZyaWVuZFwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9VU0VSX01FTlVfRlJJRU5EXCIpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHR5cGU9XCJyZXBvcnRcIj4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfVVNFUl9NRU5VX1JFUE9SVFwiKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwid2hpc3BlclwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9VU0VSX01FTlVfV0hJU1BFUlwiKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgaWQ9XCJyZXF1ZXN0X3Byb2ZpbGVcIj48aW1nIHNyYz1cIiR7bWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIklNQUdFX0FWQVRBUl9cIiArICgoX2EgPSBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmF2YXRhcildLnNyY31cIiBpZD1cImF2YXRhclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmFsX21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHR5cGU9XCJmcmllbmRzXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2hlYXJ0LnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cInNob3BcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvYmFza2V0LnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cInNldHRpbmdzXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL3NldHRpbmdzLnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhbF9tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwibWVudVwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cImxlYWRlcmJvYXJkXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2xlYWRlcmJvYXJkLnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cInRlYW1cIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvdGVhbS5zdmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHR5cGU9XCJhZG1pblwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Z1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhdENvbnRlbnRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBpZD1cImNoYXRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibXNnVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjcm9vbVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9DSEFUX09QVElPTl9ST09NXCIpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjdGVhbVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiR0FNRV9DSEFUX09QVElPTl9URUFNXCIpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaGF0TXNnXCIgbWF4bGVuZ3RoPVwiMTUwXCIgcGxhY2Vob2xkZXI9XCIke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkdBTUVfQ0hBVF9NRVNTQUdFXCIpfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJsaXN0X3VzZXJzXCI+PC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhpc3RvcnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbmZpZy9Db25maWdcIikpO1xuY29uc3QgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9tYWluXCIpKTtcbmNvbnN0IFNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1NjZW5lXCIpKTtcbmNsYXNzIExvZ2luU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XG4gICAgICAgIHN1cGVyKHN0YXRlLm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBhcmdzOiBudWxsLFxuICAgICAgICAgICAgZmFrZUxvZ2luSWQ6IDAsXG4gICAgICAgICAgICBjb250ZW50OiBcImxvZ2luXCIsXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybTogXCJcIixcbiAgICAgICAgICAgIHNlcnZlcjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzZXRTdGF0ZShwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbaV0gPSBwYXJhbXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5vbkluaXRpYWxpemVkKCk7XG4gICAgfVxuICAgIG9uV2lsbEluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uV2lsbEluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0aWFsaXplZCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0aWFsaXplZCgpO1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIik7XG4gICAgICAgIHVzZXJuYW1lID09PSBudWxsIHx8IHVzZXJuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VybmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5zZXRVc2VybmFtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuICAgICAgICBwYXNzd29yZCA9PT0gbnVsbCB8fCBwYXNzd29yZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuc2V0UGFzc3dvcmQuYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkX2NvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkX2NvbmZpcm1cIik7XG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm0gPT09IG51bGwgfHwgcGFzc3dvcmRfY29uZmlybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFzc3dvcmRfY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5zZXRQYXNzd29yZENvbmZpcm0uYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHNlcnZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVyXCIpO1xuICAgICAgICBzZXJ2ZXIgPT09IG51bGwgfHwgc2VydmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnNldFNlcnZlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdGVyXCIpO1xuICAgICAgICByZWdpc3RlckJ1dHRvbiA9PT0gbnVsbCB8fCByZWdpc3RlckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVnaXN0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2V0Q29udGVudChcInJlZ2lzdGVyXCIpKTtcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xuICAgICAgICBsb2dpbkJ1dHRvbiA9PT0gbnVsbCB8fCBsb2dpbkJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2V0Q29udGVudChcImxvZ2luXCIpKTtcbiAgICAgICAgY29uc3QgZmxhZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxhZ1wiKTtcbiAgICAgICAgZmxhZ0J1dHRvbiA9PT0gbnVsbCB8fCBmbGFnQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmbGFnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNldENvbnRlbnQoXCJsYW5ndWFnZVwiKSk7XG4gICAgICAgIGNvbnN0IGZsYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsYWdfcm93XCIpO1xuICAgICAgICBBcnJheS5mcm9tKGZsYWdzKS5mb3JFYWNoKGZsYWdSb3cgPT4ge1xuICAgICAgICAgICAgZmxhZ1JvdyA9PT0gbnVsbCB8fCBmbGFnUm93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmbGFnUm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNldEFjdGl2ZUxhbmd1YWdlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkZvcm1cIik7XG4gICAgICAgIGxvZ2luRm9ybSA9PT0gbnVsbCB8fCBsb2dpbkZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMubG9naW4uYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJGb3JtXCIpO1xuICAgICAgICByZWdpc3RlckZvcm0gPT09IG51bGwgfHwgcmVnaXN0ZXJGb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdpc3RlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAvKlxuICAgICAgICBjb25zdCBzZXJ2ZXJzZSA9IEFwcGxpY2F0aW9uLnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0U2VydmVyQnlJZCh0aGlzLnN0YXRlLnNlcnZlcik7XG4gICAgICAgIGlmKHNlcnZlcnNlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IFwiQUNDT1VOVF9FUlJPUl9PQ0NVUkVEXCJ9KTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZmFrZUxvZ2luSWQgPT0gMClcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJ0cnlMb2dpblwiLCB7dXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBzZXJ2ZXI6IHRoaXMuc3RhdGUuc2VydmVyLCBzZXJ2ZXJDbGllbnRJZDogc2VydmVyc2UuY2xpZW50SWR9KVxuICAgICovXG4gICAgfVxuICAgIHNldFVzZXJuYW1lKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBzZXRQYXNzd29yZChlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgc2V0UGFzc3dvcmRDb25maXJtKGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZF9jb25maXJtID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIHNldFNlcnZlcihlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VydmVyID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgdXNlcm5hbWUgPT09IG51bGwgfHwgdXNlcm5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJuYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRVc2VybmFtZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcbiAgICAgICAgcGFzc3dvcmQgPT09IG51bGwgfHwgcGFzc3dvcmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhc3N3b3JkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRQYXNzd29yZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkX2NvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkX2NvbmZpcm1cIik7XG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm0gPT09IG51bGwgfHwgcGFzc3dvcmRfY29uZmlybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFzc3dvcmRfY29uZmlybS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuc2V0UGFzc3dvcmRDb25maXJtLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgY29uc3Qgc2VydmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJcIik7XG4gICAgICAgIHNlcnZlciA9PT0gbnVsbCB8fCBzZXJ2ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlcnZlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuc2V0U2VydmVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdGVyXCIpO1xuICAgICAgICByZWdpc3RlckJ1dHRvbiA9PT0gbnVsbCB8fCByZWdpc3RlckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVnaXN0ZXJCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2V0Q29udGVudChcInJlZ2lzdGVyXCIpLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RlclwiKTtcbiAgICAgICAgbG9naW5CdXR0b24gPT09IG51bGwgfHwgbG9naW5CdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvZ2luQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNldENvbnRlbnQoXCJsb2dpblwiKSwgZmFsc2UpO1xuICAgICAgICBjb25zdCBmbGFnQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RlclwiKTtcbiAgICAgICAgZmxhZ0J1dHRvbiA9PT0gbnVsbCB8fCBmbGFnQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmbGFnQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNldENvbnRlbnQoXCJsYW5ndWFnZVwiKSwgZmFsc2UpO1xuICAgICAgICBjb25zdCBmbGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGFnX3Jvd1wiKTtcbiAgICAgICAgQXJyYXkuZnJvbShmbGFncykuZm9yRWFjaChmbGFnUm93ID0+IHtcbiAgICAgICAgICAgIGZsYWdSb3cgPT09IG51bGwgfHwgZmxhZ1JvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmxhZ1Jvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zZXRBY3RpdmVMYW5ndWFnZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luRm9ybVwiKTtcbiAgICAgICAgbG9naW5Gb3JtID09PSBudWxsIHx8IGxvZ2luRm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9naW5Gb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5sb2dpbi5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJGb3JtXCIpO1xuICAgICAgICByZWdpc3RlckZvcm0gPT09IG51bGwgfHwgcmVnaXN0ZXJGb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdpc3RlckZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG4gICAgc2V0QWN0aXZlTGFuZ3VhZ2UoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT0gbnVsbCB8fCBlLnRhcmdldC5pZCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuc2V0TGFuZ3VhZ2UoZS50YXJnZXQuaWQpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoXCJsb2dpblwiKTtcbiAgICB9XG4gICAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gXCJsb2dpblwiIHx8IHZhbHVlID09IFwicmVnaXN0ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmRfY29uZmlybSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udGVudDogdmFsdWUgfSk7XG4gICAgfVxuICAgIGxvZ2luKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZXJ2ZXIgPSBtYWluXzEuZGVmYXVsdC5yZWdpb25TZXJ2ZXJNYW5hZ2VyLmdldFNlcnZlckJ5SWQodGhpcy5zdGF0ZS5zZXJ2ZXIpO1xuICAgICAgICBpZiAoc2VydmVyID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIkFDQ09VTlRfRVJST1JfT0NDVVJFRFwiIH0pO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwidHJ5TG9naW5cIiwgeyB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsIHNlcnZlcjogdGhpcy5zdGF0ZS5zZXJ2ZXIsIHNlcnZlckNsaWVudElkOiBzZXJ2ZXIuY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZXJ2ZXIgPSBtYWluXzEuZGVmYXVsdC5yZWdpb25TZXJ2ZXJNYW5hZ2VyLmdldFNlcnZlckJ5SWQodGhpcy5zdGF0ZS5zZXJ2ZXIpO1xuICAgICAgICBpZiAoc2VydmVyID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIkFDQ09VTlRfRVJST1JfT0NDVVJFRFwiIH0pO1xuICAgICAgICBtYWluXzEuZGVmYXVsdC53ZWJTb2NrZXRzTWFuYWdlci5zZW5kTXNnKFwidHJ5UmVnaXN0ZXJcIiwgeyB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsIHBhc3N3b3JkX2NvbmZpcm06IHRoaXMuc3RhdGUucGFzc3dvcmRfY29uZmlybSwgc2VydmVyOiB0aGlzLnN0YXRlLnNlcnZlciwgc2VydmVyQ2xpZW50SWQ6IHNlcnZlci5jbGllbnRJZCB9KTtcbiAgICB9XG4gICAgcmVuZGVyQXZhaWFibGVMYW5ndWFnZSgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldEF2YWlsYWJsZUxhbmd1YWdlcygpLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50ICs9IGA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmxhZ3MvJHtsYW5ndWFnZX0uc3ZnXCIgY2xhc3M9XCJmbGFnX3Jvd1wiIGlkPVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICAgIHJlbmRlclNlcnZlcnMoKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gYGA7XG4gICAgICAgIG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0QWxsU2VydmVycygpLmZvckVhY2goKHNlcnZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VydmVyID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXJ2ZXIgPSBzZXJ2ZXIuaWQ7XG4gICAgICAgICAgICBjb250ZW50ICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtzZXJ2ZXIuaWR9XCIgJHt0aGlzLnN0YXRlLnNlcnZlciA9PSBzZXJ2ZXIuaWQgPyBcInNlbGVjdGVkXCIgOiBudWxsfT4ke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkFDQ09VTlRfU0VSVkVSXCIsIFtzZXJ2ZXIuaWQsIHNlcnZlci5waW5nXSl9PC9vcHRpb24+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgICByZW5kZXJFcnJvcigpIHtcbiAgICAgICAgbGV0IGVycm9yID0gYGA7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mYWtlTG9naW5JZCsrO1xuXG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJzZSA9IEFwcGxpY2F0aW9uLnJlZ2lvblNlcnZlck1hbmFnZXIuZ2V0U2VydmVyQnlJZCh0aGlzLnN0YXRlLnNlcnZlcik7XG4gICAgICAgICAgICBpZihzZXJ2ZXJzZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLndlYlNvY2tldHNNYW5hZ2VyLnNlbmRNc2coXCJ0cnlMb2dpblwiLCB7dXNlcm5hbWU6IGAke3RoaXMuc3RhdGUudXNlcm5hbWV9JHt0aGlzLnN0YXRlLmZha2VMb2dpbklkfWAsIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBzZXJ2ZXI6IHRoaXMuc3RhdGUuc2VydmVyLCBzZXJ2ZXJDbGllbnRJZDogc2VydmVyc2UuY2xpZW50SWR9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGVycm9yID0gYDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KHRoaXMuc3RhdGUuZXJyb3IsIHRoaXMuc3RhdGUuYXJncyl9PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQUNDT1VOVF9MT0dJTlwiKX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyRXJyb3IoKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBpZD1cImxvZ2luRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX1VTRVJOQU1FXCIpfVwiIHZhbHVlPVwiJHt0aGlzLnN0YXRlLnVzZXJuYW1lfVwiIG1heGxlbmd0aD1cIjE1XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkFDQ09VTlRfUEFTU1dPUkRcIil9XCIgdmFsdWU9XCIke3RoaXMuc3RhdGUucGFzc3dvcmR9XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZXJ2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyU2VydmVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX0xPR0lOXCIpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlZ2lzdGVyXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX1JFR0lTVEVSXCIpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZsYWdzLyR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQ09ERVwiKX0uc3ZnXCIgY2xhc3M9XCJmbGFnXCIgaWQ9XCJmbGFnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQUNDT1VOVF9SRUdJU1RFUlwiKX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyRXJyb3IoKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBpZD1cInJlZ2lzdGVyRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX1VTRVJOQU1FXCIpfVwiIHZhbHVlPVwiJHt0aGlzLnN0YXRlLnVzZXJuYW1lfVwiIG1heGxlbmd0aD1cIjE1XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIke21haW5fMS5kZWZhdWx0Lmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleShcIkFDQ09VTlRfUEFTU1dPUkRcIil9XCIgdmFsdWU9XCIke3RoaXMuc3RhdGUucGFzc3dvcmR9XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkX2NvbmZpcm1cIiBwbGFjZWhvbGRlcj1cIiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQUNDT1VOVF9DT05GSVJNX1BBU1NXT1JEXCIpfVwiIHZhbHVlPVwiJHt0aGlzLnN0YXRlLnBhc3N3b3JkX2NvbmZpcm19XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzZXJ2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyU2VydmVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiJHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX1JFR0lTVEVSXCIpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ2luXCI+JHttYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoXCJBQ0NPVU5UX0xPR0lOXCIpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZsYWdzLyR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQ09ERVwiKX0uc3ZnXCIgY2xhc3M9XCJmbGFnXCIgaWQ9XCJmbGFnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjYXNlIFwibGFuZ3VhZ2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJsYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQUNDT1VOVF9MQU5HVUFHRVwiKX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJBdmFpYWJsZUxhbmd1YWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5hcHAgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWNjb3VudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJDb250ZW50KCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPiR7bWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KFwiQ09QWVJJR0hUXCIsIFtDb25maWdfMS5kZWZhdWx0Lk5BTUVdKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpblNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ29uZmlnL0NvbmZpZ1wiKSk7XG5jb25zdCBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9TY2VuZVwiKSk7XG5jbGFzcyBNZXNzYWdlU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XG4gICAgICAgIHN1cGVyKHN0YXRlLm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogc3RhdGUucGFyYW1zLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2V0U3RhdGUocGFyYW1zKSB7XG4gICAgICAgIHN1cGVyLnNldFN0YXRlKHBhcmFtcyk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlW2ldID0gcGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIG9uV2lsbEluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uV2lsbEluaXQoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBDb25maWdfMS5kZWZhdWx0Lk5BTUU7XG4gICAgfVxuICAgIG9uSW5pdGlhbGl6ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdGlhbGl6ZWQoKTtcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5hcHAgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwibG9hZGluZ1NjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPiR7dGhpcy5zdGF0ZVtcIm1lc3NhZ2VcIl19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWVzc2FnZVNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtYWluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21haW5cIikpO1xuY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQubG9nZ2VyLnNlbmRMb2coXCJWRVJCT1NFXCIsIGBJbml0aWxpYXppbmcgc2NlbmUgJHt0aGlzLm5hbWV9LmApO1xuICAgIH1cbiAgICBzZXRTdGF0ZShwYXJhbXMpIHtcbiAgICB9XG4gICAgb25XaWxsSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwID09IG51bGwpXG4gICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5sb2dnZXIuc2VuZExvZyhcIkVSUk9SXCIsIFwiSW1wb3NzaWJsZSB0byBmaW5kICNhcHAgSFRNTCBlbGVtZW50LlwiKTtcbiAgICB9XG4gICAgb25Jbml0aWFsaXplZCgpIHsgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICByZW5kZXIoKSB7IH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjZW5lVHlwZSA9IHZvaWQgMDtcbmNvbnN0IEdhbWVTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpc3QvR2FtZVNjZW5lXCIpKTtcbmNvbnN0IExvZ2luU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9MaXN0L0xvZ2luU2NlbmVcIikpO1xuY29uc3QgTWVzc2FnZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlzdC9NZXNzYWdlU2NlbmVcIikpO1xuZXhwb3J0cy5TY2VuZVR5cGUgPSB7XG4gICAgMDogTWVzc2FnZVNjZW5lXzEuZGVmYXVsdCxcbiAgICAxOiBMb2dpblNjZW5lXzEuZGVmYXVsdCxcbiAgICAyOiBHYW1lU2NlbmVfMS5kZWZhdWx0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtYWluXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21haW5cIikpO1xuY29uc3QgR2FtZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGlzdC9HYW1lU2NlbmVcIikpO1xuY29uc3QgTG9naW5TY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpc3QvTG9naW5TY2VuZVwiKSk7XG5jb25zdCBNZXNzYWdlU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9MaXN0L01lc3NhZ2VTY2VuZVwiKSk7XG5jb25zdCBTY2VuZUxpc3RfMSA9IHJlcXVpcmUoXCIuL1NjZW5lTGlzdFwiKTtcbmNsYXNzIFNjZW5lTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIH1cbiAgICBpbml0U2NlbmUoc2NlbmUsIHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lIGluc3RhbmNlb2YgU2NlbmVMaXN0XzEuU2NlbmVUeXBlW3NjZW5lXSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLnNldFN0YXRlKHBhcmFtcyk7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUub25EZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHNjZW5lKSB7XG4gICAgICAgICAgICBjYXNlIDAgLyogU2NlbmVMaXN0Lk1lc3NhZ2VTY2VuZSAqLzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgTWVzc2FnZVNjZW5lXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lc3NhZ2VTY2VuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMSAvKiBTY2VuZUxpc3QuTG9naW5TY2VuZSAqLzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgTG9naW5TY2VuZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJMb2dpblNjZW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyIC8qIFNjZW5lTGlzdC5HYW1lU2NlbmUgKi86XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lID0gbmV3IEdhbWVTY2VuZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHYW1lU2NlbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiRVJST1JcIiwgYEltcG9zc2libGUgdG8gbG9hZCBzY2VuZSAke3NjZW5lfS5gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2VuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLm9uV2lsbEluaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLm9uSW5pdGlhbGl6ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNjZW5lTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgU2V0dGluZ3NNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHtcbiAgICAgICAgICAgIHpvb206IDEuMjUsXG4gICAgICAgICAgICBmcHM6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IHtcbiAgICAgICAgICAgIGdlbmVyYWw6IHRydWUsXG4gICAgICAgICAgICBjaGF0OiB0cnVlLFxuICAgICAgICAgICAgZ2FtZTogdHJ1ZSxcbiAgICAgICAgICAgIG5vdGlmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRzID0ge1xuICAgICAgICAgICAgdXA6IFtcIkFycm93VXBcIl0sXG4gICAgICAgICAgICBkb3duOiBbXCJBcnJvd0Rvd25cIl0sXG4gICAgICAgICAgICBsZWZ0OiBbXCJBcnJvd0xlZnRcIl0sXG4gICAgICAgICAgICByaWdodDogW1wiQXJyb3dSaWdodFwiXSxcbiAgICAgICAgICAgIGtpY2s6IFtcIktleVhcIiwgXCJTcGFjZVwiXSxcbiAgICAgICAgICAgIHRvZ2dsZV9jaGF0OiBbXCJFbnRlclwiLCBcIk51bXBhZEVudGVyXCIsIFwiVGFiXCJdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBncmFwaGljc1N0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzX2dyYXBoaWNzXCIpO1xuICAgICAgICBpZiAoZ3JhcGhpY3NTdG9yYWdlICE9IG51bGwgJiYgSlNPTi5wYXJzZShncmFwaGljc1N0b3JhZ2UpKVxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcyA9IEpTT04ucGFyc2UoZ3JhcGhpY3NTdG9yYWdlKTtcbiAgICAgICAgY29uc3QgYXVkaW9TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc19hdWRpb1wiKTtcbiAgICAgICAgaWYgKGF1ZGlvU3RvcmFnZSAhPSBudWxsICYmIEpTT04ucGFyc2UoYXVkaW9TdG9yYWdlKSlcbiAgICAgICAgICAgIHRoaXMuYXVkaW8gPSBKU09OLnBhcnNlKGF1ZGlvU3RvcmFnZSk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2V0dGluZ3NfaW5wdXRzXCIpO1xuICAgICAgICBpZiAoaW5wdXRzICE9IG51bGwgJiYgSlNPTi5wYXJzZShpbnB1dHMpKVxuICAgICAgICAgICAgdGhpcy5pbnB1dHMgPSBKU09OLnBhcnNlKGlucHV0cyk7XG4gICAgfVxuICAgIHNhdmVTZXR0aW5ncyh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImdyYXBoaWNzXCI6IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNldHRpbmdzX2dyYXBoaWNzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JhcGhpY3MpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJhdWRpb1wiOiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXR0aW5nc19hdWRpb1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmF1ZGlvKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiaW5wdXRzXCI6IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNldHRpbmdzX2lucHV0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0cykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUtleSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dHNbdHlwZV0gPT0gbnVsbCB8fCAhdGhpcy5pbnB1dHNbdHlwZV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmlucHV0c1t0eXBlXSA9IHRoaXMuaW5wdXRzW3R5cGVdLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ICE9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoXCJpbnB1dHNcIik7XG4gICAgfVxuICAgIHNldFNldHRpbmdzKHR5cGUsIHZhbHVlLCB2YWwpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiZ3JhcGhpY3NcIjoge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoaWNzW3ZhbHVlXSA9PSBudWxsIHx8IHZhbCBpbnN0YW5jZW9mIE51bWJlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NbdmFsdWVdID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImF1ZGlvXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdWRpb1t2YWx1ZV0gPT0gbnVsbCB8fCB2YWwgaW5zdGFuY2VvZiBCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1t2YWx1ZV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3ModHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiaW5wdXRzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dHNbdmFsdWVdID09IG51bGwgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5zID0gKHRoaXMuaW5wdXRzLnVwLmluY2x1ZGVzKHZhbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dHMuZG93bi5pbmNsdWRlcyh2YWwpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRzLmxlZnQuaW5jbHVkZXModmFsKSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0cy5yaWdodC5pbmNsdWRlcyh2YWwpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRzLmtpY2suaW5jbHVkZXModmFsKSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0cy50b2dnbGVfY2hhdC5pbmNsdWRlcyh2YWwpKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMgfHwgdmFsLnN0YXJ0c1dpdGgoXCJEaWdpdFwiKSB8fCB2YWwgPT0gXCJLZXlQXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0c1t2YWx1ZV0ucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgdGhpcy5yYW5rID0gZGF0YS5yYW5rO1xuICAgICAgICB0aGlzLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICB0aGlzLmNvaW5zID0gZGF0YS5jb2lucztcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRhdGEuaXRlbXM7XG4gICAgICAgIHRoaXMuZnJpZW5kcyA9IGRhdGEuZnJpZW5kcztcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmVyID0gZGF0YS5jdXJyZW50U2VydmVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRSb29tID0gbnVsbDtcbiAgICB9XG4gICAgZ2V0RnJpZW5kYnlVc2VybmFtZSh1c2VybmFtZSkge1xuICAgICAgICBsZXQgZnJpZW5kUmV0dXJuZWQgPSBudWxsO1xuICAgICAgICB0aGlzLmZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJpZW5kLnVzZXJuYW1lID09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIGZyaWVuZFJldHVybmVkID0gZnJpZW5kO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZyaWVuZFJldHVybmVkO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFVzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblN0cmluZy5wcm90b3R5cGUuc3VwcGxhbnQgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL3soW157fV0qKX0vZywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHIgPSBvW2JdO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiBhO1xuICAgIH0pO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUm9vbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Sb29tL1Jvb21cIikpO1xuY29uc3QgR2FtZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL1NjZW5lL0xpc3QvR2FtZVNjZW5lXCIpKTtcbmNvbnN0IG1haW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbWFpblwiKSk7XG5jbGFzcyBSZWdpb25TZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLmlwID0gZGF0YS5pcDtcbiAgICAgICAgdGhpcy5wb3J0ID0gZGF0YS5wb3J0O1xuICAgICAgICB0aGlzLmNsaWVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5waW5nID0gMDtcbiAgICAgICAgdGhpcy5waW5nRGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxQaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXRQb25nID0gdHJ1ZTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7dGhpcy5pcH06JHt0aGlzLnBvcnR9YCk7XG4gICAgICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmludGVydmFsUGluZyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGluc3RhbmNlLmludGVydmFsUGluZyk7XG4gICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQucmVnaW9uU2VydmVyTWFuYWdlci5kZXN0cm95U2VydmVyKGluc3RhbmNlLmlkKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGBJbXBvc3NpYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyIHJlZ2lvbiBbJHtpbnN0YW5jZS5pZH1dLmApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmludGVydmFsUGluZyA9IHNldEludGVydmFsKGluc3RhbmNlLnNlbmRQaW5nLmJpbmQoaW5zdGFuY2UpLCAxMDAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXNnID09IG51bGwgfHwgbXNnLmRhdGEgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKG1zZy5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY2xpZW50SWQgPSBtZXNzYWdlLnZhbHVlLmNsaWVudElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnBpbmcgPSBEYXRlLm5vdygpIC0gaW5zdGFuY2UucGluZ0RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5nZXRQb25nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYFJlZ2lvbiBzZXJ2ZXIgWyR7aW5zdGFuY2UuaWR9XSBsb2FkZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm9vbUluaXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPSBuZXcgUm9vbV8xLmRlZmF1bHQobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUuaW5pdFJvb20obWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBsYXllckpvaW5cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5wbGF5ZXJKb2luKG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnBsYXllckpvaW4obWVzc2FnZS52YWx1ZSwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uY3VycmVudFBsYXllcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2VuZXJhbCAmJiBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2FtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIkFVRElPX0pPSU5cIl0uY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBsYXllckxlYXZlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsIHx8IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20ucGxheWVyTGVhdmUobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUucGxheWVyTGVhdmUobWVzc2FnZS52YWx1ZSwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uY3VycmVudFBsYXllcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2VuZXJhbCAmJiBtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2FtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIkFVRElPX0xFQVZFXCJdLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXBEYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsIHx8IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20uc3RhZGl1bSA9IG1lc3NhZ2UudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid29ybGRTdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbCB8fCBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tLnVwZGF0ZShtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS51cGRhdGUobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFkZEhpc3RvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5oaXN0b3J5LnB1c2gobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUuYWRkSGlzdG9yeShtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnYW1lUGF1c2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS52YWx1ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUuc3RhdGUudW5wYXVzZUludGVydmFsID0gKDMwMDAgLSB0aGlzLnBpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNvdW5kXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsIHx8IG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYWluXzEuZGVmYXVsdC5zZXR0aW5nc01hbmFnZXIuYXVkaW8uZ2VuZXJhbCB8fCAhbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtpY2tcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19LSUNLXCJdLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ29hbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19HT0FMXCJdLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQucmVzb3VyY2VNYW5hZ2VyLnJlc291cmNlc1tcIkFVRElPX0NST1dEXCJdLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19DUk9XRFwiXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19DUk9XRFwiXS52b2x1bWUgPSAoKDQwIC0gaSkgLyA0MCkgKiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW1wiQVVESU9fQ1JPV0RcIl0ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnJlc291cmNlTWFuYWdlci5yZXNvdXJjZXNbXCJBVURJT19DUk9XRFwiXS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVvcmRlclBsYXllclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbCB8fCBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLmN1cnJlbnRSb29tLnJlb3JkZXJQbGF5ZXIobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUucmVmcmVzaFBpY2tMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGlja01vZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwgfHwgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20gPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jdXJyZW50Um9vbS5waWNrTW9kZSA9IG1lc3NhZ2UudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuY3VycmVudFJvb20ucGlja01vZGUgPT0gbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuaWQgJiYgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLmdlbmVyYWwgJiYgbWFpbl8xLmRlZmF1bHQuc2V0dGluZ3NNYW5hZ2VyLmF1ZGlvLm5vdGlmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBtYWluXzEuZGVmYXVsdC5yZXNvdXJjZU1hbmFnZXIucmVzb3VyY2VzW1wiQVVESU9fTk9USUZcIl0uY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUucmVmcmVzaFBpY2tMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudmFsdWUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnNob3dNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGlkZU1lbnVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLmhpZGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhdE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLm5ld0NoYXQobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kUGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9uZyA9PSBmYWxzZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5nZXRQb25nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGluZ0RhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNlbmRNc2coXCJwaW5nXCIsIHRoaXMucGluZyk7XG4gICAgfVxuICAgIHNlbmRNc2coa2V5LCB2YWx1ZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMud3MgPT0gbnVsbCB8fCB0aGlzLndzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKVxuICAgICAgICAgICAgcmV0dXJuIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiRVJST1JcIiwgXCJJbXBvc3NpYmxlIHRvIHNlbmQgbWVzc2FnZSB0byByZWdpb24gc2VydmVyLCB3ZWJzb2NrZXRzIGFyZSBkaXNjb25uZWN0LlwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgdGhpcy53cy5zZW5kKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBkZXN0cm95KCkgeyB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWdpb25TZXJ2ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1haW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbWFpblwiKSk7XG5jb25zdCBSZWdpb25TZXJ2ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9SZWdpb25TZXJ2ZXJcIikpO1xuY2xhc3MgUmVnaW9uU2VydmVyTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVnaW9uU2VydmVycyA9IHt9O1xuICAgIH1cbiAgICBnZXRTZXJ2ZXJCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5yZWdpb25TZXJ2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZWdpb25TZXJ2ZXIgPSB0aGlzLnJlZ2lvblNlcnZlcnNbaV07XG4gICAgICAgICAgICBpZiAocmVnaW9uU2VydmVyLmlkID09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWdpb25TZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGluaXRTZXJ2ZXIoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5pcCA9PSBudWxsIHx8IHRoaXMuZ2V0U2VydmVyQnlJZChkYXRhLmlkKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWdpb25TZXJ2ZXIgPSBuZXcgUmVnaW9uU2VydmVyXzEuZGVmYXVsdChkYXRhKTtcbiAgICAgICAgdGhpcy5yZWdpb25TZXJ2ZXJzW3JlZ2lvblNlcnZlci5pZF0gPSByZWdpb25TZXJ2ZXI7XG4gICAgICAgIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiSU5GT1wiLCBgUmVnaW9uIHNlcnZlciBbJHtkYXRhLmlkfV0gbG9hZGVkLmApO1xuICAgIH1cbiAgICBpbml0QWxsU2VydmVycygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPZlByb21pc2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5yZWdpb25TZXJ2ZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdE9mUHJvbWlzZS5wdXNoKHRoaXMucmVnaW9uU2VydmVyc1tpXS5jb25uZWN0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobGlzdE9mUHJvbWlzZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcIkFsbCByZWdpb24gc2VydmVycyBsb2FkZWQuXCIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHJlamVjdChlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc3Ryb3lTZXJ2ZXIoaWQpIHtcbiAgICAgICAgY29uc3QgcmVnaW9uU2VydmVyID0gdGhpcy5nZXRTZXJ2ZXJCeUlkKGlkKTtcbiAgICAgICAgaWYgKHJlZ2lvblNlcnZlciA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZWdpb25TZXJ2ZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5yZWdpb25TZXJ2ZXJzW2lkXTtcbiAgICAgICAgbWFpbl8xLmRlZmF1bHQubG9nZ2VyLnNlbmRMb2coXCJJTkZPXCIsIGBSZWdpb24gc2VydmVyIFske2lkfV0gdW5sb2FkZWQuYCk7XG4gICAgfVxuICAgIGdldEFsbFNlcnZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHNlcnZlcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnJlZ2lvblNlcnZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlciA9IHRoaXMucmVnaW9uU2VydmVyc1tpXTtcbiAgICAgICAgICAgIHNlcnZlcnMucHVzaCh7IGlkOiBzZXJ2ZXIuaWQsIGlwOiBzZXJ2ZXIuaXAsIHBvcnQ6IHNlcnZlci5wb3J0LCBwaW5nOiBzZXJ2ZXIucGluZyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVycy5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYS5waW5nKSAtIE51bWJlcihiLnBpbmcpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWdpb25TZXJ2ZXJNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ29uZmlnL0NvbmZpZ1wiKSk7XG5jb25zdCBHYW1lU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vU2NlbmUvTGlzdC9HYW1lU2NlbmVcIikpO1xuY29uc3QgVXNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9Vc2VyL1VzZXJcIikpO1xuY29uc3QgbWFpbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tYWluXCIpKTtcbmNsYXNzIFdlYnNvY2tldE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5pbml0U2NlbmUoMCAvKiBTY2VuZUxpc3QuTWVzc2FnZVNjZW5lICovLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KCdMT0FESU5HX0NPTk5FQ1RJT05fVE9fTUFJTl9TRVJWRVInKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke0NvbmZpZ18xLmRlZmF1bHQuU0VSVkVSX0hPU1R9OiR7Q29uZmlnXzEuZGVmYXVsdC5TRVJWRVJfUE9SVH1gKTtcbiAgICAgICAgICAgIHRoaXMud3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5sb2dnZXIuc2VuZExvZyhcIkVSUk9SXCIsIFwiQ29ubmVjdGlvbiB0byBzZXJ2ZXIgbG9zdGVkLlwiKTtcbiAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuaW5pdFNjZW5lKDAgLyogU2NlbmVMaXN0Lk1lc3NhZ2VTY2VuZSAqLywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoJ0dFTkVSSUNfRVJST1JfQ09OTkVDVElPTl9MT1NURUQnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiU1VDQ0VTU1wiLCBcIkNvbm5lY3RlZCB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlbmRNc2coXCJmZXRjaGluZ1NlcnZlcnNcIik7XG4gICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLmluaXRTY2VuZSgwIC8qIFNjZW5lTGlzdC5NZXNzYWdlU2NlbmUgKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWFpbl8xLmRlZmF1bHQubGFuZ3VhZ2VNYW5hZ2VyLmdldFZhbHVlRm9yS2V5KCdMT0FESU5HX0ZFVENISU5HX1JFR0lPTl9TRVJWRVJTJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXNnID09IG51bGwgfHwgbXNnLmRhdGEgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKG1zZy5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdldEFsbFNlcnZlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS52YWx1ZS5mb3JFYWNoKChzZXJ2ZXIpID0+IG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuaW5pdFNlcnZlcihzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnJlZ2lvblNlcnZlck1hbmFnZXIuaW5pdEFsbFNlcnZlcnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQubG9nZ2VyLnNlbmRMb2coXCJTVUNDRVNTXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5yZWdpb25TZXJ2ZXJNYW5hZ2VyLmdldEFsbFNlcnZlcnMoKS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5pbml0U2NlbmUoMCAvKiBTY2VuZUxpc3QuTWVzc2FnZVNjZW5lICovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoJ0dFTkVSSUNfRVJST1JfTk9fU0VSVkVSX0FWQUlMQUJMRScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5pbml0U2NlbmUoMSAvKiBTY2VuZUxpc3QuTG9naW5TY2VuZSAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmxvZ2dlci5zZW5kTG9nKFwiRVJST1JcIiwgZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuaW5pdFNjZW5lKDAgLyogU2NlbmVMaXN0Lk1lc3NhZ2VTY2VuZSAqLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkoJ0dFTkVSSUNfRVJST1JfU0VSVkVSUycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlcnJvckxvZ2luXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5pbml0U2NlbmUoMSAvKiBTY2VuZUxpc3QuTG9naW5TY2VuZSAqLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBtZXNzYWdlLnZhbHVlLmtleSAhPSBudWxsID8gbWVzc2FnZS52YWx1ZS5rZXkgOiBtZXNzYWdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IG1lc3NhZ2UudmFsdWUuYXJncyAhPSBudWxsID8gbWVzc2FnZS52YWx1ZS5hcmdzIDogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRpc2Nvbm5lY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLmluaXRTY2VuZSgwIC8qIFNjZW5lTGlzdC5NZXNzYWdlU2NlbmUgKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtYWluXzEuZGVmYXVsdC5sYW5ndWFnZU1hbmFnZXIuZ2V0VmFsdWVGb3JLZXkobWVzc2FnZS52YWx1ZS5rZXksIG1lc3NhZ2UudmFsdWUucGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG9nZ2VkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID0gbmV3IFVzZXJfMS5kZWZhdWx0KG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLmluaXRTY2VuZSgyIC8qIFNjZW5lTGlzdC5HYW1lU2NlbmUgKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYXRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS5uZXdDaGF0KG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2ZpbGVEYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS5wcm9maWxlRGF0YShtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmcmllbmRzRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5mcmllbmRzID0gbWVzc2FnZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS5yZWxvYWRGcmllbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hvcERhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnNob3BEYXRhKG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNob3BJdGVtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUuc2hvcERhdGFJdGVtcyhtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhdmF0YXJVcGRhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIuYXZhdGFyID0gbWVzc2FnZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS51cGRhdGVBdmF0YXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyYW5rVXBkYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyLnJhbmsgPSBtZXNzYWdlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnJlbmRlck1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2luc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5jb2lucyA9IG1lc3NhZ2UudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWRkSXRlbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlci5pdGVtcy5wdXNoKG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnJlZnJlc2hTaG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVhZGVyYm9hcmREYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5jdXJyZW50VXNlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUgaW5zdGFuY2VvZiBHYW1lU2NlbmVfMS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZS5zZXRMZWFkZXJib2FyZERhdGEobWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWRtaW5BbGVydFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuY3VycmVudFVzZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lIGluc3RhbmNlb2YgR2FtZVNjZW5lXzEuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluXzEuZGVmYXVsdC5zY2VuZU1hbmFnZXIuc2NlbmUucmVuZGVyQWRtaW5BbGVydChtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZG1pbkRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LmN1cnJlbnRVc2VyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5fMS5kZWZhdWx0LnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbl8xLmRlZmF1bHQuc2NlbmVNYW5hZ2VyLnNjZW5lLnJlbmRlckFkbWluKG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2VuZE1zZyhrZXksIHZhbHVlID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy53cyA9PSBudWxsIHx8IHRoaXMud3MucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pXG4gICAgICAgICAgICByZXR1cm4gbWFpbl8xLmRlZmF1bHQubG9nZ2VyLnNlbmRMb2coXCJFUlJPUlwiLCBcIkltcG9zc2libGUgdG8gc2VuZCBtZXNzYWdlIHRvIHNlcnZlciwgd2Vic29ja2V0cyBhcmUgZGlzY29ubmVjdC5cIik7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7IGtleToga2V5LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHRoaXMud3Muc2VuZChtZXNzYWdlKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBXZWJzb2NrZXRNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL1V0aWxzL1V0aWxzXCIpO1xuY29uc3QgTG9nZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9Mb2dnZXIvTG9nZ2VyXCIpKTtcbmNvbnN0IExhbmd1YWdlTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xhbmd1YWdlL0xhbmd1YWdlTWFuYWdlclwiKSk7XG5jb25zdCBTY2VuZU1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TY2VuZS9TY2VuZU1hbmFnZXJcIikpO1xuY29uc3QgQ29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29uZmlnL0NvbmZpZ1wiKSk7XG5jb25zdCBSZXNvdXJjZU1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9SZXNzb3VyY2UvUmVzb3VyY2VNYW5hZ2VyXCIpKTtcbmNvbnN0IFNldHRpbmdzTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NldHRpbmdzL1NldHRpbmdzTWFuYWdlclwiKSk7XG5jb25zdCBXZWJTb2NrZXRzTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1dlYlNvY2tldHMvV2ViU29ja2V0c01hbmFnZXJcIikpO1xuY29uc3QgUmVnaW9uU2VydmVyTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1dlYlNvY2tldHMvUmVnaW9uU2VydmVyL1JlZ2lvblNlcnZlck1hbmFnZXJcIikpO1xuY29uc3QgR2FtZVNjZW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2NlbmUvTGlzdC9HYW1lU2NlbmVcIikpO1xubGV0IEFwcGxpY2F0aW9uO1xuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlTWFuYWdlciA9IG5ldyBMYW5ndWFnZU1hbmFnZXJfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZU1hbmFnZXIgPSBuZXcgUmVzb3VyY2VNYW5hZ2VyXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLndlYlNvY2tldHNNYW5hZ2VyID0gbmV3IFdlYlNvY2tldHNNYW5hZ2VyXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlZ2lvblNlcnZlck1hbmFnZXIgPSBuZXcgUmVnaW9uU2VydmVyTWFuYWdlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc01hbmFnZXIgPSBuZXcgU2V0dGluZ3NNYW5hZ2VyXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2FsbCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbHBhc2VkVGhlbiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZU1hbmFnZXIuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc01hbmFnZXIuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuaW5pdFNjZW5lKDAgLyogU2NlbmVMaXN0Lk1lc3NhZ2VTY2VuZSAqLywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IEFwcGxpY2F0aW9uLmxhbmd1YWdlTWFuYWdlci5nZXRWYWx1ZUZvcktleSgnTE9BRElOR19NRVNTQUdFJywgW0NvbmZpZ18xLmRlZmF1bHQuTkFNRV0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlTG9hZGluZyA9IHlpZWxkIHRoaXMucmVzb3VyY2VNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLmxvZ2dlci5zZW5kTG9nKFwiU1VDQ0VTU1wiLCBtZXNzYWdlTG9hZGluZyk7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLndlYlNvY2tldHNNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IG5vdyAtIHRoaXMuZWxwYXNlZFRoZW47XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzTWFuYWdlci5ncmFwaGljcy5mcHMgIT0gMCAmJiB0aGlzLmVsYXBzZWQgPCAoMTAwMCAvIHRoaXMuc2V0dGluZ3NNYW5hZ2VyLmdyYXBoaWNzLmZwcykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NNYW5hZ2VyLmdyYXBoaWNzLmZwcyAhPSAwKVxuICAgICAgICAgICAgdGhpcy5lbHBhc2VkVGhlbiA9IG5vdyAtICh0aGlzLmVsYXBzZWQgJSAoMTAwMCAvIHRoaXMuc2V0dGluZ3NNYW5hZ2VyLmdyYXBoaWNzLmZwcykpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IChub3cgLSB0aGlzLmxhc3RDYWxsKSAvIDEwMDA7XG4gICAgICAgIHRoaXMubGFzdENhbGwgPSBub3c7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lTWFuYWdlci5zY2VuZSBpbnN0YW5jZW9mIEdhbWVTY2VuZV8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLnNjZW5lLnJlbmRlckdhbWUoZGVsdGEpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuc2NlbmUuc2V0RnBzKE1hdGgucm91bmQoMSAvIGRlbHRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5BcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcGxpY2F0aW9uO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudCkgPT4ge1xuICAgIEFwcGxpY2F0aW9uLmluaXQoKS5jYXRjaCgoZSkgPT4gQXBwbGljYXRpb24ubG9nZ2VyLnNlbmRDcml0aWNhbEVycm9yKGUudG9TdHJpbmcoKSkpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFzZSA9IHZvaWQgMDtcbmV4cG9ydHMuQmFzZSA9IHtcbiAgICBob2NrZXk6IHtcbiAgICAgICAgYmdfY29sb3I6ICdyZ2IoODUsIDg1LCA4NSknLFxuICAgICAgICBib3JkZXJfY29sb3I6ICdyZ2IoMjMzLDIwNCwxMTApJyxcbiAgICB9LFxuICAgIGdyYXNzOiB7XG4gICAgICAgIGJnX2NvbG9yOiAncmdiKDExMywxNDAsOTApJyxcbiAgICAgICAgYm9yZGVyX2NvbG9yOiAncmdiKDE5OSwyMzAsMTg5KScsXG4gICAgfSxcbiAgICBzZWdtZW50X2NvbG9yOiAncmdiKDAsMCwwKScsXG4gICAgcGxheWVyUGh5c2ljczoge1xuICAgICAgICByYWRpdXM6IDE1LFxuICAgICAgICBiQ29lZjogMC41LFxuICAgICAgICBpbnZNYXNzOiAwLjUsXG4gICAgICAgIGRhbXBpbmc6IDAuOTYsXG4gICAgICAgIGFjY2VsZXJhdGlvbjogMC4xLFxuICAgICAgICBraWNraW5nQWNjZWxlcmF0aW9uOiAwLjA3LFxuICAgICAgICBraWNraW5nRGFtcGluZzogMC45NixcbiAgICAgICAga2lja1N0cmVuZ3RoOiA1LFxuICAgICAgICBwb3M6IFswLCAwXSxcbiAgICAgICAgY01hc2s6IFsnYWxsJ10sXG4gICAgICAgIGNHcm91cDogWycnXSxcbiAgICB9LFxuICAgIGJhbGxQaHlzaWNzOiB7XG4gICAgICAgIHJhZGl1czogMTAsXG4gICAgICAgIGJDb2VmOiAwLjUsXG4gICAgICAgIGludk1hc3M6IDEsXG4gICAgICAgIGRhbXBpbmc6IDAuOTksXG4gICAgICAgIGNvbG9yOiAnRkZGRkZGJyxcbiAgICAgICAgcG9zOiBbMCwgMF0sXG4gICAgICAgIGNNYXNrOiBbJ2FsbCddLFxuICAgICAgICBjR3JvdXA6IFsnYmFsbCddLFxuICAgIH0sXG4gICAgZGlzY1BoeXNpY3M6IHtcbiAgICAgICAgcmFkaXVzOiAxMCxcbiAgICAgICAgYkNvZWY6IDAuNSxcbiAgICAgICAgaW52TWFzczogMCxcbiAgICAgICAgZGFtcGluZzogMC45OSxcbiAgICAgICAgY29sb3I6ICdyZ2IoMjU1LDI1NSwyNTUpJyxcbiAgICAgICAgY01hc2s6IFsnYWxsJ10sXG4gICAgICAgIGNHcm91cDogWydhbGwnXSxcbiAgICB9LFxuICAgIHNlZ21lbnRQaHlzaWNzOiB7XG4gICAgICAgIGN1cnZlOiAwLFxuICAgICAgICBiQ29lZjogMSxcbiAgICAgICAgY0dyb3VwOiBbJ3dhbGwnXSxcbiAgICAgICAgY01hc2s6IFsnYWxsJ10sXG4gICAgfSxcbiAgICBwbGFuZVBoeXNpY3M6IHtcbiAgICAgICAgYkNvZWY6IDEsXG4gICAgICAgIGNHcm91cDogWyd3YWxsJ10sXG4gICAgICAgIGNNYXNrOiBbJ2FsbCddLFxuICAgIH0sXG4gICAgdmVydGV4UGh5c2ljczoge1xuICAgICAgICBiQ29lZjogMSxcbiAgICAgICAgY0dyb3VwOiBbJ3dhbGwnXSxcbiAgICAgICAgY01hc2s6IFsnYWxsJ10sXG4gICAgfSxcbiAgICBjb2xsaXNpb25GbGFnczoge1xuICAgICAgICBhbGw6IDYzLFxuICAgICAgICBiYWxsOiAxLFxuICAgICAgICBibHVlOiA0LFxuICAgICAgICBibHVlS086IDE2LFxuICAgICAgICBjMDogMjY4NDM1NDU2LFxuICAgICAgICBjMTogNTM2ODcwOTEyLFxuICAgICAgICBjMjogMTA3Mzc0MTgyNCxcbiAgICAgICAgYzM6IC0yMTQ3NDgzNjQ4LFxuICAgICAgICBraWNrOiA2NCxcbiAgICAgICAgcmVkOiAyLFxuICAgICAgICByZWRLTzogOCxcbiAgICAgICAgc2NvcmU6IDEyOCxcbiAgICAgICAgd2FsbDogMzIsXG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFJPT01fQU5OT1VOQ0VNRU5UOiBcIiNkYjg4MjJcIixcbiAgICBGUklFTkQ6IFwiIzI4YjM0ZFwiLFxuICAgIEVSUk9SOiBcIiNiOTI2MjZcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRFbG8gPSB2b2lkIDA7XG5jb25zdCBnZXRFbG8gPSBmdW5jdGlvbiAoZWxvKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgKGVsbyA+IDIwMDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19DSEFMTEVOR0VSXCIsIHZhbHVlOiAwIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDE5MDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19DSEFNUElPTlwiLCB2YWx1ZTogNSB9O1xuICAgICAgICBjYXNlIChlbG8gPiAxODAwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fQ0hBTVBJT05cIiwgdmFsdWU6IDQgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTcwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0NIQU1QSU9OXCIsIHZhbHVlOiAzIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDE2MDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19DSEFNUElPTlwiLCB2YWx1ZTogMiB9O1xuICAgICAgICBjYXNlIChlbG8gPiAxNTAwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fQ0hBTVBJT05cIiwgdmFsdWU6IDEgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTQwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0RJQU1PTkRcIiwgdmFsdWU6IDUgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTMwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0RJQU1PTkRcIiwgdmFsdWU6IDQgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTIwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0RJQU1PTkRcIiwgdmFsdWU6IDMgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTEwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0RJQU1PTkRcIiwgdmFsdWU6IDIgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMTAwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0RJQU1PTkRcIiwgdmFsdWU6IDEgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gOTAwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fUExBVElOSVVNXCIsIHZhbHVlOiA1IH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDg1MCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX1BMQVRJTklVTVwiLCB2YWx1ZTogNCB9O1xuICAgICAgICBjYXNlIChlbG8gPiA4MDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19QTEFUSU5JVU1cIiwgdmFsdWU6IDMgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gNzUwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fUExBVElOSVVNXCIsIHZhbHVlOiAyIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDcwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX1BMQVRJTklVTVwiLCB2YWx1ZTogMSB9O1xuICAgICAgICBjYXNlIChlbG8gPiA2NTApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19HT0xEXCIsIHZhbHVlOiA1IH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDYwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0dPTERcIiwgdmFsdWU6IDQgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gNTUwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fR09MRFwiLCB2YWx1ZTogMyB9O1xuICAgICAgICBjYXNlIChlbG8gPiA1MDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19HT0xEXCIsIHZhbHVlOiAyIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDQ1MCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0dPTERcIiwgdmFsdWU6IDEgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gNDAwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fQlJPTlpFXCIsIHZhbHVlOiA1IH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDM1MCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0JST05aRVwiLCB2YWx1ZTogNCB9O1xuICAgICAgICBjYXNlIChlbG8gPiAzMDApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19CUk9OWkVcIiwgdmFsdWU6IDMgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gMjUwKTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fQlJPTlpFXCIsIHZhbHVlOiAyIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDIwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0JST05aRVwiLCB2YWx1ZTogMSB9O1xuICAgICAgICBjYXNlIChlbG8gPiAxNTApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19JUk9OXCIsIHZhbHVlOiA1IH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDEwMCk6XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBcIkdBTUVfRUxPX0lST05cIiwgdmFsdWU6IDQgfTtcbiAgICAgICAgY2FzZSAoZWxvID4gNTApOlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19JUk9OXCIsIHZhbHVlOiAzIH07XG4gICAgICAgIGNhc2UgKGVsbyA+IDI1KTpcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiR0FNRV9FTE9fSVJPTlwiLCB2YWx1ZTogMiB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJHQU1FX0VMT19JUk9OXCIsIHZhbHVlOiAxIH07XG4gICAgfVxufTtcbmV4cG9ydHMuZ2V0RWxvID0gZ2V0RWxvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldExldmVsID0gdm9pZCAwO1xuY29uc3QgZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoeHApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5zcXJ0KDEwMCAqICgyICogeHAgKyAyNSkpICsgNTApIC8gMTAwKTtcbn07XG5leHBvcnRzLmdldExldmVsID0gZ2V0TGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvZ0xldmVsID0ge1xuICAgIElORk86IHtcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIG5hbWU6IFwiSU5GT1wiLFxuICAgICAgICBiZ0NvbG9yOiBcIlxceDFiWzQ0bVwiLFxuICAgICAgICBiZ1dlYkNvbG9yOiBcIiMxOTY4OUJcIlxuICAgIH0sXG4gICAgV0FSTklORzoge1xuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgbmFtZTogXCJXQVJOSU5HXCIsXG4gICAgICAgIGJnQ29sb3I6IFwiXFx4MWJbNDNtXCIsXG4gICAgICAgIGJnV2ViQ29sb3I6IFwiI0NGN0UwRlwiXG4gICAgfSxcbiAgICBFUlJPUjoge1xuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgbmFtZTogXCJFUlJPUlwiLFxuICAgICAgICBiZ0NvbG9yOiBcIlxceDFiWzQxbVwiLFxuICAgICAgICBiZ1dlYkNvbG9yOiBcIiNBRjFCMUJcIlxuICAgIH0sXG4gICAgQ1JJVElDQUxfRVJST1I6IHtcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIG5hbWU6IFwiQ1JJVElDQUwgRVJST1JcIixcbiAgICAgICAgYmdDb2xvcjogXCJcXHgxYls0MW1cIixcbiAgICAgICAgYmdXZWJDb2xvcjogXCIjQUYxQjFCXCJcbiAgICB9LFxuICAgIFNVQ0NFU1M6IHtcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIG5hbWU6IFwiU1VDQ0VTU1wiLFxuICAgICAgICBiZ0NvbG9yOiBcIlxceDFiWzQybVwiLFxuICAgICAgICBiZ1dlYkNvbG9yOiBcIiMxNjdDNDNcIlxuICAgIH0sXG4gICAgREVCVUc6IHtcbiAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgIG5hbWU6IFwiREVCVUdcIixcbiAgICAgICAgYmdDb2xvcjogXCJcXHgxYls0Nm1cIixcbiAgICAgICAgYmdXZWJDb2xvcjogXCIjOTUxRDhBXCJcbiAgICB9LFxuICAgIFZFUkJPU0U6IHtcbiAgICAgICAgbGV2ZWw6IDIsXG4gICAgICAgIG5hbWU6IFwiVkVSQk9TRVwiLFxuICAgICAgICBiZ0NvbG9yOiBcIlxceDFiWzQ1bVwiLFxuICAgICAgICBiZ1dlYkNvbG9yOiBcIiM5MThEMTJcIlxuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2dMZXZlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTG9nTGV2ZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Mb2dMZXZlbFwiKSk7XG5jbGFzcyBMb2dnZXIge1xuICAgIHNlbmRMb2cobG9nS2V5LCBtZXNzYWdlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKExvZ0xldmVsXzEuZGVmYXVsdFtsb2dLZXldLmJnQ29sb3IsIExvZ0xldmVsXzEuZGVmYXVsdFtsb2dLZXldLm5hbWUsIFwiXFx4MWJbMG1cIiwgbWVzc2FnZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAke0xvZ0xldmVsXzEuZGVmYXVsdFtsb2dLZXldLm5hbWV9ICVjICR7bWVzc2FnZX1gLCBgYmFja2dyb3VuZC1jb2xvcjogJHtMb2dMZXZlbF8xLmRlZmF1bHRbbG9nS2V5XS5iZ1dlYkNvbG9yfTsgY29sb3I6ICNGRkY7IGZvbnQtd2VpZ2h0OiBib2xkYCwgYGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IGNvbG9yOiBpbmhlcml0YCk7XG4gICAgfVxuICAgIHNlbmRDcml0aWNhbEVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5zZW5kTG9nKFwiQ1JJVElDQUxfRVJST1JcIiwgbWVzc2FnZSk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBMb2dnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUm9vbVN0YXRlID0gdm9pZCAwO1xudmFyIFJvb21TdGF0ZTtcbihmdW5jdGlvbiAoUm9vbVN0YXRlKSB7XG4gICAgUm9vbVN0YXRlW1Jvb21TdGF0ZVtcIktJQ0tfT0ZGX1JFU0VUXCJdID0gMF0gPSBcIktJQ0tfT0ZGX1JFU0VUXCI7XG4gICAgUm9vbVN0YXRlW1Jvb21TdGF0ZVtcIlBBVVNFXCJdID0gMV0gPSBcIlBBVVNFXCI7XG4gICAgUm9vbVN0YXRlW1Jvb21TdGF0ZVtcIlVOUEFVU0VcIl0gPSAyXSA9IFwiVU5QQVVTRVwiO1xuICAgIFJvb21TdGF0ZVtSb29tU3RhdGVbXCJQTEFZXCJdID0gM10gPSBcIlBMQVlcIjtcbiAgICBSb29tU3RhdGVbUm9vbVN0YXRlW1wiR09BTF9TQ09SRVwiXSA9IDRdID0gXCJHT0FMX1NDT1JFXCI7XG4gICAgUm9vbVN0YXRlW1Jvb21TdGF0ZVtcIkdBTUVfRU5ERURcIl0gPSA1XSA9IFwiR0FNRV9FTkRFRFwiO1xufSkoUm9vbVN0YXRlIHx8IChleHBvcnRzLlJvb21TdGF0ZSA9IFJvb21TdGF0ZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFNoYXJlYWJsZURhdGEge1xuICAgIGNvbnN0cnVjdG9yKHRzLCBwKSB7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdHM7XG4gICAgICAgIHRoaXMuc2hhcmVhYmxlRGF0YSA9IHA7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhcmVhYmxlRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVGVhbSA9IHtcbiAgICBTUEVDVEFUT1JTOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcInNwZWN0YXRvcnNcIixcbiAgICAgICAgY29sb3I6ICcjRkZGJyxcbiAgICAgICAgY0dyb3VwOiAwLFxuICAgIH0sXG4gICAgUkVEOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcInJlZFwiLFxuICAgICAgICBjb2xvcjogJyNiZDM4MzgnLFxuICAgICAgICBjR3JvdXA6IDIsXG4gICAgfSxcbiAgICBCTFVFOiB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcImJsdWVcIixcbiAgICAgICAgY29sb3I6ICcjMTM2ZWFjJyxcbiAgICAgICAgY0dyb3VwOiA0LFxuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUZWFtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vY2xpZW50L21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=