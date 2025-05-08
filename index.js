const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		width: 800, height: 600
	});
	mainWindow.loadFile('index.html').then(() => console.log("html loaded"));

	mainWindow.on('closed', () =>  {
		mainWindow = null;
	});
}

app.on('ready', createWindow);