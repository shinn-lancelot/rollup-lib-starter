# rollup-lib-starter 一个编写js类库的项目模板

# 目录结构

- /dist —— 开发与生产环境打包类库后存放的目录
- /example —— 用于开发测试类库的目录
- /src —— 类库核心代码目录
- .gitignore —— git忽略文件
- LICENSE —— 协议文件
- package-lock.json —— npm锁文件（包含需要依赖库及版本）
- package.json —— npm配置文件
- README.md —— 项目README文件，使用前必读
- rollup.config.js —— rollup打包工具的配置文件（为默认名称）

# 如何运行

1. 安装依赖包

    ```
    npm install
    ```

2. 运行开发环境（仅进行打包，不开启web服务，若要运行example内index.html。请另开启web服务）

    ```
    npm run dev
    ```

3. 打包用于生产环境的类库

    ```
    npm run build
    ```

# 如何发布使用

建议发布到NPM或者CDN来使用库

* 发布到NPM
    1. 注册NPM账号
    2. 在终端登录NPM账号
    3. 在发布前请注意修改package.json的类库版本号，并打包类库（建议开发和生成类库均打包）
    4. 发布到NPM，执行npm publish即可
* 使用类库
    1. 方式一（NPM）：在平时的项目目录下执行npm install LIBNAME --save即完成类库安装（此操作注意镜像源，比如使用的是taonpm镜像源，则在发布到NPM之后需要等待taonpm同步完类库之后才能安装成功）。然后使用CommonJS规范使用即可
    2. 方式二（script）：直接使用unpkg提供的CDN即可，在发布到NPM之后即可直接使用。比如："https://unpkg.com/LIBNAME/dist/LIBNAME.min.js"。 不过速度略慢，也可考虑将类库提交到cdnjs或者直接下载类库文件到本地项目。

# 其它说明

1. 类库建议使用es6开发
2. 配置文件主要为rollup.config.js及package.json。包含类库名称，版本，打包目录等配置。
3. 与平时开发不同，注意dist目录需要提交到版本库。
