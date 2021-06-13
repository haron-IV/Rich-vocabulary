const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");

const path = process.cwd();
let mainWindow;

const initFront = () => {
  exec(`cd ${path}/Rich-vocabulary-fron && yarn start`);
};
const initBackend = () => {
  exec(`cd ${path}/Rich-vocabulary-backend && yarn start`);
};

const createWindow = () => {
  initBackend();
  initFront();
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
  });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);
