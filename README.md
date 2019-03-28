// vue搭建结构说明
 |-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- utils.js                     // 构建工具相关
|   |-- validate.js                  // 验证方法
|   |-- vue-loader.conf.js           // webpack loader配置
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|-- src                              // 源码目录
|   |-- components                   // vue所有组件
|   |-- assets                       // 照片信息放静态资源
|   |-- router                       // vue的路由管理
|   |-- js                           // 封装请求跟api
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|-- test                             // 测试文件
|   |-- e2e                          // e2e 测试
|   |-- unit                         // 单元测试
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .eslintignore                    // eslint检测代码忽略的文件（夹）
|-- .eslintrc.js                     // 定义eslint的plugins,extends,rules
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcsssrc                      // postcss配置文件
|-- README.md                        // 项目说明，markdown文档
|-- index.html                       // 访问的页面
|-- package.json                     // 项目基本信息,包依赖信息等
！
