export const EN: Record<string, string> = {
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
}