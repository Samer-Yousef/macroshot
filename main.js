const {app,BrowserWindow} = require('electron');
const url = require('url')
const path = require('path');
const { start } = require('repl');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "MacroShot",
        width: 1000,
        height: 600
    });
    const starturl = url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(starturl);
}

app.whenReady().then(createMainWindow)
