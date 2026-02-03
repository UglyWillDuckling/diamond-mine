---
source: "https://medium.com/@sagar.hudge/electron-js-read-write-to-locale-file-711c230c798e"
author:
  - "[[Sagar Hudge]]"
published: 2025-01-31
created: 2025-11-15
tags:
---
[Sitemap](https://medium.com/sitemap/sitemap.xml)

Managing data in Electron applications often involves reading from and writing to local files using `Node.js` file system (`fs`) module.

To kickstart our project, we’ll use the popular [**Electron React Boilerplate**](https://github.com/electron-react-boilerplate/electron-react-boilerplate). This boilerplate provides a solid foundation for building scalable desktop applications with Electron, React, and Webpack

### Setting Up the File Operations

Create a file named `fileOperations.ts` to handle file operations.

The `recursive` option in `fs.mkdirSync(dirname, { recursive: true })` allows the creation of a directory and any necessary subdirectories along the given path.

```c
import * as fs from 'fs';
import * as path from 'path';

const userDataPath = app.getPath('appData');
const igxDirectoryPath = path.join(userDataPath, 'Project_Name');
const parentDirectoryPath = path.join(igxDirectoryPath, 'Folder_Name');

function ensureICSDirectory(): void {
  if (!fs.existsSync(parentDirectoryPath)) {
    fs.mkdirSync(parentDirectoryPath, { recursive: true });
    console.log('Directory created successfully:', parentDirectoryPath);
  } else {
    console.log('Directory already exists:', parentDirectoryPath);
  }
}

// Ensure directory and file existence
function ensureFileExistence(filePath: string): void {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}), 'utf-8');
  }
}

export function writeData(data: any): void {
  const timestamp = Date.now().toString();
  const directoryPath = path.join(parentDirectoryPath, timestamp);
  const filePath = path.join(directoryPath, 'output.json');
  ensureFileExistence(filePath);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Read data from a file
export function readData(timestamp: string): any {
  ensureICSDirectory();
  const filePath = path.join(parentDirectoryPath, timestamp, 'output.json');
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } else {
    return JSON.stringify({});
  }
}
```

**Encryption Decryption**

To `encrypt` files in the specified location, use the following encryption methods. Ensure to `encrypt` the files before saving them and `decrypt` them after reading:

`fileEncryptionDecryption.ts`

```c
import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = Buffer.from('12345678901234567890123456789012', 'utf-8'); // Example 32-byte key (for AES-256)
const iv = Buffer.from('1234567890123456', 'utf-8'); // Example 16-byte IV (for AES-256)

export function encrypt(text:any) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
  }
  
  // Decrypt function
  export function decrypt(encrypted:any) {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(encrypted.iv, 'hex'));
    let decrypted = decipher.update(encrypted.encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
  }
```

### Integrating File Operations in main.ts

Next, you’ll integrate these operations into your Electron main process. Add the following code to your `main.ts` file:

```c
import { readData, writeData } from '../files/fileOperations';
import { ipcMain } from 'electron';
ipcMain.handle('read-data', () => {
  return readData();
});
ipcMain.handle('write-data', (event, data) => {
  writeData(data);
});
```

### Handling TypeScript Type Errors

To avoid type errors, create a `global.d.ts` file

```c
export {};

declare global {
  interface Window {
    electronAPI: {
      readData: () => Promise<any>;
      writeData: (data: any) => Promise<void>;
    };
  }
}
```

### Reading and Writing to the File from the Renderer Process

Use the following code in your renderer process to read from and write to the file.

```c
useEffect(() => {
    //global.d.tx
    //readData will read from the file
    window.electronAPI.readData().then((data: any) => {
      setJsonOutput(data.structures || []);
    });
  }, []);

  const handleSave = (jsonObj: any): void => {
    window.electronAPI.writeData(jsonObj).then(() => {
      setJsonOutput(jsonObj);
    });
  };
```

### Conclusion

This setup ensures that your Electron app can read from and write to local files efficiently. By breaking down the process into manageable steps and using Electron’s `IPC` (Inter-Process Communication) mechanism, you can easily manage local file operations in your application.

I hope this guide helps you get started with file operations in `Electron JS!` If you have any questions or need further assistance, feel free to ask.

Happy coding!

## More from Sagar Hudge

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--711c230c798e---------------------------------------)