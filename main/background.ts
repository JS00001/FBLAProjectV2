import path from 'path';
import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
	serve({ directory: 'app' });
} else {
	app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
	await app.whenReady();

	const splashWindow = createWindow('splash', {
		width: 340,
		height: 500,
		show: false,
		frame: false,
		resizable: false,
	});

	splashWindow.setAlwaysOnTop(true);

	if (isProd) {
		splashWindow.loadFile('app://splash.html');
	} else {
		splashWindow.loadFile(path.join(__dirname, '../renderer/public/splash.html'));
	}

	splashWindow.once('ready-to-show', () => {
		splashWindow.show();
	});

	const mainWindow = createWindow('main', {
		width: 1344,
		height: 756,
		show: false,
	});

	mainWindow.setMenu(null);

	mainWindow.once('ready-to-show', () => {
		splashWindow.close();
		mainWindow.show();
	});

	ipcMain.on('minimize-window', () => {
		mainWindow.minimize();
	});

	ipcMain.on('close-window', () => {
		mainWindow.close();
	});

	if (isProd) {
		await mainWindow.loadURL('app://./home.html');
	} else {
		const port = process.argv[2];
		await mainWindow.loadURL(`http://localhost:${port}/home`);
	}
})();

app.on('window-all-closed', () => {
	app.quit();
});
