* [中文](README.zh-CN.md)
* [English](README.md)

### What is rollup-lib-starter

A project template which using Rollup to create a library.

### The project content

- /dist —— Dev and prod environment library path.
- /doc —— Project documentation directory, using gitbook to write documentation.
- /example —— The example path.
- /src —— The source code path.
- .gitignore —— The gitignore file.
- .travis.yml —— Travis continues to integrate tool configuration files.
- LICENSE —— The LISENSE file.
- package-lock.json —— The NPM lock file.
- package.json —— The NPM config file.
- README_zh-CN.md —— The project README(zh-CN) file.
- README.md —— The project README(EN) file.
- rollup.config.js —— The rollup config file.

### How to run

1. Install dependency packages.

    ```
    npm install
    ```

2. Listen source code.

    ```
    npm run dev
    ```

3. Build source code.

    ```
    npm run build
    ```

### How to publish and use

It is recommended to publish to the NPM or CDN to use the library.

* Publish to the NPM.
    1. Register a NPM account.
    2. Login NPM account on terminal.
    3. Modify package.js's version and watch and build source code before publish.
    4. Run "npm puiblish".
* Use library.
    1. NPM：Run "npm install LIBNAME --save" to install library. Use CommonJS standard to write code.
    2. script：Use unpkg CDN after publish NPM. e.g. "https://unpkg.com/LIBNAME/dist/LIBNAME.min.js"

### Attention

1. Es6 is recommended for developing library.
2. Main config file is rollup.config.js and package.json.
3. The dist path need to add version repository.
