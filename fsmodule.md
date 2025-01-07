# `fs` Module in Node.js

The `fs` (File System) module in Node.js allows you to interact with the file system on your machine. You can perform operations like reading, writing, and deleting files.

First, you need to require the `fs` module:

```javascript
const fs = require("fs");
```

### Reading a File

#### Asynchronous Method

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

- `fs.readFile` reads the file asynchronously.
- `'file.txt'` is the file name.
- `'utf8'` specifies the encoding.
- The callback function handles the file content or an error if it occurs.

#### Synchronous Method

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

- `fs.readFileSync` reads the file synchronously.
- It returns the file content, and you can handle errors using a try-catch block.

### Writing to a File

#### Asynchronous Method

```javascript
const fs = require("fs");

const content = "name: 123456\nname: 789012";

fs.writeFile("file.txt", content, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been written");
});
```

- `fs.writeFile` writes to the file asynchronously.
- `'file.txt'` is the file name.
- `content` is the data to be written.
- `'utf8'` specifies the encoding.
- The callback function handles the completion or an error if it occurs.

#### Synchronous Method

```javascript
const fs = require("fs");

const content = "name: 123456\nname: 789012";

try {
  fs.writeFileSync("file.txt", content, "utf8");
  console.log("File has been written");
} catch (err) {
  console.error(err);
}
```

- `fs.writeFileSync` writes to the file synchronously.
- It doesn't use a callback, and you can handle errors using a try-catch block.
