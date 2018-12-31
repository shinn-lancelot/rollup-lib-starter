* [中文](README.zh-CN.md)
* [English](README.md)

### What is rollup-lib-starter

A project template for writing a js library using the Rollup packaging tool.

### The project content

- /dist —— Dev and prod environment library path.
- /doc —— Project documentation directory, using gitbook to write documentation.
- /example —— The example path.
- /src —— The source code path.
- .editorconfig —— Code style format configuration file.
- .eslintignore —— Eslint check tool ignores files.
- .eslintrc.js —— Eslint check tool configuration file.
- .gitignore —— The gitignore file.
- .travis.yml —— Travis continues to integrate tool configuration files.
- LICENSE —— The LISENSE file.
- package-lock.json —— The NPM lock file.
- package.json —— The NPM config file.
- README.zh-CN.md —— The project README(zh-CN) file.
- README.md —— The project README(EN) file.
- rollup.config.js —— The rollup config file.

### Project document

Project documentation, built using travis and deployed to github pages. [rollup-lib-starter document](https://shinn-lancelot.github.io/rollup-lib-starter/)

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
2. The configuration files are mainly rollup.config.js and package.json. Contains configuration such as class library name, version, and package directory.
3. Unlike usual development, note that the dist directory needs to be submitted to the repository.
4. The travis continuous integration tool needs to be configured on the travis official website for automatic build deployment.
5. The project follows the standard specification and can be modified by itself.
6. Submit using the commitizen specification git. Use npm run commit instead of git commit.