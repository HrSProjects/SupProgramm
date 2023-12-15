const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");

function appIsReady() {
  const myAppWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, "src", "icons", "HrsC.png"),
  });

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Reload",
          accelerator: "CmdOrCtrl+R",
          click: () => {
            const myAppWindow = BrowserWindow.getFocusedWindow();
            if (myAppWindow) {
              myAppWindow.reload();
            } else {
              app.relaunch();
              app.quit();
            }
          },
        },
        {
          label: "Previous",
          accelerator: "CmdOrCtrl+Z",
          click: () => {
            const currentWindow = BrowserWindow.getFocusedWindow();
            if (currentWindow) {
            } else {
              console.error("No focused window found.");
            }
          },
        },
        { type: "separator" },
        {
          label: "Exit",
          accelerator: "CmdOrCtrl+Q",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: "Info",
      submenu: [
        {
          label: "My Discord Server",
          click: () => {
            shell.openExternal("https://discord.gg/6CuMuv5Yzg");
          },
        },
        {
          label: "My YouTube Channel",
          click: () => {
            shell.openExternal("https://youtube.com/@Mr_HrS");
          },
        },
        {
          label: "My Website",
          click: () => {
            shell.openExternal("https://cuty.io/XF8a95V52yb");
          },
        },
      ],
    },
  ]);

  myAppWindow.setMenu(contextMenu);
  myAppWindow.loadFile(path.join(__dirname, "main.html"));
  myAppWindow.webContents.on("context-menu", (e, params) => {
    contextMenu.popup(myAppWindow, params.x, params.y);
  });
}

app.on("ready", appIsReady);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    appIsReady();
  }
});
