module.exports = Object.freeze({
  TOKEN: '1431838791:AAEXGSlFairVsK0iwqwbwAMgm8CmHnqPd5E', //Telegramm Bot token!
  ARIA_SECRET: '92702689', //Enter the secret key you entered in `aria.sh` file while editing
  ARIA_DOWNLOAD_LOCATION: '/app/dn', //This is for heroku on termux change it to your directory of cloned repo using "pwd" command
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //"No need to touch this!" The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '0ACK_htoS9oiaUk9PVA',
  SUDO_USERS: [812627017, 1342157954],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
