// index.js
const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

app.disableHardwareAcceleration();

function createWindow () {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences : {
            preload : path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile("index.html");
    console.log(Objec.keys(win));
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0 ){
            createWindow()
        }
    });
});

app.on('ready', () => {

})

app.on("window-all-closed", () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
