# GitCode 仓颉项目全量索引

> 数据快照：**2026-07-26**。以 GitCode 的 Cangjie 语言过滤器扫描 `a` 到 `z`，再并入中英文关键词独有结果和重点组织仓库。

[Awesome 精选清单](./awesome-cangjie.md) · [机器可读全量数据](./gitcode-cangjie-all-projects.json) · [精选快照](./gitcode-cangjie-projects.json)

“全量”指本轮 a–z 查询中 GitCode **可见分页**、既有 `仓颉` / `Cangjie` 关键词补漏和 Cangjie-TPC / Cangjie-SIG 组织仓库的并集；它不表示平台意义上的绝对全集。单查询最多显示 100 页，`c`、`e`、`z` 已触及该上限。全量收录不等于推荐，推荐项目仍以 Awesome 精选清单为准。

## 覆盖概览

| 维度 | 数量 | 说明 |
|---|---:|---|
| a–z 搜索分页 | 920 页 | 26 个字母；成功 920，失败 0 |
| a–z 页面结果 | 9,074 条 | 搜索卡片原始行数，包含跨字母重复 |
| a–z 搜索去重 | 3,159 个 | 按完整显示路径 `owner/repo` 做 NFKC + 小写去重 |
| 关键词独有补充 | 27 个 | 旧有 `仓颉` / `Cangjie` 搜索中未被 a–z 命中的仓库 |
| 语言搜索并集 | 3,186 个 | a–z 去重结果 + 关键词独有补充 |
| 重点组织补充 | 62 个 | TPC/SIG 组织页存在、但未命中上述语言搜索 |
| 全量索引 | 3,248 个 | 语言搜索并集 + 重点组织补充 |
| 三方库 | 768 个 | 明确可作为依赖、SDK、框架、驱动、组件或算法库使用 |
| 工具与应用 | 294 个 | 命令行、开发工具、服务、桌面/移动应用、游戏等 |
| 学习与资源 | 274 个 | 示例、教程、书籍、文档、模板与索引 |
| 待人工复核 | 1,912 个 | 其中 1,412 个没有有效简介 |

a–z 方案对绝大多数仓库有效，但并非严格超集：交叉核验发现 27 个关键词结果未被任一英文字母命中，主要是中文路径和课程作业；本索引已保留这些记录。

## 搜索审计

### a–z 查询

| 查询 | 页数 | 结果行 | 触及 100 页上限 |
|---:|---:|---:|:---:|
| `a` | 28 | 279 | 否 |
| `b` | 17 | 163 | 否 |
| `c` | 100 | 997 | 是 |
| `d` | 42 | 411 | 否 |
| `e` | 100 | 999 | 是 |
| `f` | 20 | 191 | 否 |
| `g` | 38 | 376 | 否 |
| `h` | 35 | 350 | 否 |
| `i` | 13 | 122 | 否 |
| `j` | 19 | 187 | 否 |
| `k` | 9 | 85 | 否 |
| `l` | 54 | 535 | 否 |
| `m` | 41 | 400 | 否 |
| `n` | 20 | 196 | 否 |
| `o` | 16 | 154 | 否 |
| `p` | 26 | 252 | 否 |
| `q` | 12 | 119 | 否 |
| `r` | 19 | 189 | 否 |
| `s` | 61 | 605 | 否 |
| `t` | 55 | 539 | 否 |
| `u` | 9 | 85 | 否 |
| `v` | 6 | 60 | 否 |
| `w` | 40 | 394 | 否 |
| `x` | 16 | 151 | 否 |
| `y` | 24 | 236 | 否 |
| `z` | 100 | 999 | 是 |

### 关键词补漏

| 查询 | 页数 | 结果行 | 去重总数 | 对 a–z 的独有补充 |
|---|---:|---:|---:|---:|
| `仓颉` | 100 | 1,000 | — | — |
| `Cangjie` | 100 | 996 | — | — |
| 合并去重 | 200 | 1,996 | 1,186 | 27 |

## 分类口径

- **三方库**：名称、简介或官方目录明确表明通过依赖、SDK、框架、驱动、组件、协议或 API 集成。
- **工具与应用**：主要以命令行、IDE/插件、服务、GUI、应用或游戏方式使用。
- **学习与资源**：示例、教程、课程、书籍、文档、模板和生态索引。
- **待人工复核**：公开简介为空或不足以可靠判断用途；保留仓库但不强行分类。

OpenHarmony/HarmonyOS、Windows、Linux、macOS、Android、Web 等作为 JSON 中的 `platforms` 多值属性，不与主要用途混在同一分类。分类方法与置信度见 JSON 的 `classification_method`、`classification_confidence` 和 `needs_review`。

非 ASCII 显示路径可能无法组成稳定直链，表中以 **🔎** 标记并链接到精确 GitCode 搜索页。

## 三方库（768）

### Web、网络与协议（101）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie/cangjie_stdx](https://gitcode.com/Cangjie/cangjie_stdx) | 仓颉编程语言提供了 stdx 模块，该模块提供了网络、安全等领域的通用能力。 | Cangjie | ★ 559 / Fork 875 | 18 hours ago · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-TPC/hyperion](https://gitcode.com/Cangjie-TPC/hyperion) | 仓颉语言实现的 TCP 通信框架，支持添加自定义编解码器，积木式添加 IoFilter 处理入栈出栈消息。仓颉 redis-sdk 和 activemq4cj 项目使用了该框架。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 148 / Fork 23 | 2025-09-09 · 维护中 | c,Cangjie,h,t,仓颉 |
| [yishengTH/tea](https://gitcode.com/yishengTH/tea) | 仓颉后端生态高性能、高可用、功能完整的Web后端框架 | yishengTH | ★ 146 / Fork 13 | 3 months ago · 活跃 | Cangjie,t,y,仓颉 |
| [soulsoft/spire](https://gitcode.com/soulsoft/spire) | Spire (天擎) 一个基于仓颉语言开发、借鉴 ASP.NET Core 设计哲学的现代化 Web 框架。我们与仓颉官方团队共同研发，致力于打造轻量级、高性能、可扩展的应用开发体验。（1.0版本已上线） | soulsoft | ★ 81 / Fork 16 | 8 days ago · 活跃 | Cangjie,s,仓颉 |
| [Cangjie-TPC/net4cj](https://gitcode.com/Cangjie-TPC/net4cj) | net4cj库参考Apache Commons Net，基于仓颉语言实现了许多基本Internet协议的客户端，提供基本的协议访问。支持的协议包括 Echo、Finger、FTP、NNTP、NTP、POP3（S）、SMTP（S）、Telnet 和 Whois。 | TPC | ★ 60 / Fork 50 | 2025-10-26 · 维护中 | c,Cangjie,n,t |
| [Cangjie-TPC/httpclient4cj](https://gitcode.com/Cangjie-TPC/httpclient4cj) | 高效的 HTTP 客户端，支持 HTTP/2，允许所有同一个主机地址的请求共享同一个 socket 连接，支持连接池减少请求延时，支持缓存响应内容，避免一些完全重复的请求。 | TPC | ★ 54 / Fork 12 | 2026-06-11 · 活跃 | c,Cangjie,h,p,t,仓颉 |
| [Cangjie-TPC/rpc4cj](https://gitcode.com/Cangjie-TPC/rpc4cj) | 高性能、开源和通用的 RPC 框架，基于 ProtoBuf(Protocol Buffers) 序列化协议开发，并且支持众多开发语言。面向服务端和移动端，基于 HTTP/2 设计，带来诸如双向流、流控、头部压缩、单 TCP 连接上的多复用请求等特。这些特性使得其在移动设备上表现更好，更省电和节省空间占用。 | TPC | ★ 34 / Fork 1 | 2026-06-18 · 活跃 | c,Cangjie,h,p,r,t |
| [Cangjie-SIG/easyapi](https://gitcode.com/Cangjie-SIG/easyapi) | 轻量级Http服务框架 | SIG | ★ 30 / Fork 1 | 2025-07-14 · 低活跃 | Cangjie,e,s,仓颉 |
| [MournInk/Requests4cj](https://gitcode.com/MournInk/Requests4cj) | 一个因为仓颉的网络请求太繁琐而诞生的仓颉网络库 | MournInk | ★ 30 / Fork 1 | 1 year ago · 低活跃 | i,m,r |
| [Cangjie-TPC/ntp4cj](https://gitcode.com/Cangjie-TPC/ntp4cj) | 遵循 NTP 协议，从 NTP 服务器获取精确的网络时间。支持自定义 NTP 服务器配置、支持超时控制和错误处理、支持标准 NTP 时间戳解析。 | TPC | ★ 29 / Fork 0 | 2025-04-28 · 低活跃 | c,Cangjie,n,t |
| [Cangjie-SIG/ginger](https://gitcode.com/Cangjie-SIG/ginger) | Ginger是一个轻量级的httpClient库，支持多种请求配置，及使用函数方式注册拦截器链。 | SIG | ★ 28 / Fork 3 | 2026-04-02 · 活跃 | c,Cangjie,g,s,仓颉 |
| [Cangjie-TPC/download4cj](https://gitcode.com/Cangjie-TPC/download4cj) | 文件下载库，提供同步下载、异步下载、暂停任务。 | TPC | ★ 26 / Fork 2 | 2025-07-09 · 低活跃 | c,Cangjie,d,h,p,t |
| [Cangjie-TPC/graphql4cj](https://gitcode.com/Cangjie-TPC/graphql4cj) | 使用仓颉语言实现的基于GraphQL的网络客户端库，支持与GraphQL服务端进行通信。利用 仓颉元编程能力为数据类自动生成序列化和反序列化操作。目前暂不支持graphql的解析和仓颉数据类的自动生成，需要开发者手写请求和响应的数据类。 | TPC | ★ 26 / Fork 1 | 2025-06-09 · 低活跃 | Cangjie,g,仓颉 |
| [Cangjie-SIG/tea](https://gitcode.com/Cangjie-SIG/tea) | 仓颉语言轻量级的、函数式的、高效的HTTP Web后端框架 | SIG | ★ 25 / Fork 3 | 2025-07-04 · 低活跃 | Cangjie,s,t |
| [service/webview-sdk](https://gitcode.com/service/webview-sdk) | 仓颉语言绑定webview； 可以使用任何 web 技术开发你的桌面程序。 | service | ★ 24 / Fork 2 | 11 months ago · 维护中 | s,w |
| [Cangjie-SIG/cj_ftp](https://gitcode.com/Cangjie-SIG/cj_ftp) | No description | SIG | ★ 23 / Fork 1 | 2025-05-29 · 低活跃 | c,f,s |
| [Cangjie-TPC/upload4cj](https://gitcode.com/Cangjie-TPC/upload4cj) | 用于处理浏览器或者其他客户端上传上来的单个或者多个文件的报文解析库。 | TPC | ★ 22 / Fork 4 | 2026-06-11 · 活跃 | c,Cangjie,h,p,t,u,仓颉 |
| [Cangjie-TPC/xmpp4cj](https://gitcode.com/Cangjie-TPC/xmpp4cj) | 开放的即时通讯协议，常用于构建实时通讯应用，如：企业内部通讯系统、多人在线游戏、社交网络等。通过使用 XMPP ,可以方便地实现消息的发送、接收、在线状态管理等功能。 | TPC | ★ 20 / Fork 1 | 2026-06-05 · 活跃 | c,Cangjie,t,x |
| [Cangjie-SIG/grpc-cj](https://gitcode.com/Cangjie-SIG/grpc-cj) | No description | SIG | ★ 19 / Fork 1 | 2025-08-13 · 维护中 | c,Cangjie,g,s |
| [service/fires](https://gitcode.com/service/fires) | 仓颉 web 框架 | service | ★ 17 / Fork 1 | 1 year ago · 低活跃 | f |
| [ZhaoJun-zfh/cangjieWeb](https://gitcode.com/ZhaoJun-zfh/cangjieWeb) | — | ZhaoJun-zfh | ★ 14 / Fork 5 | 5 months ago · 活跃 | c,Cangjie,j,w,z |
| [CoderKevin/cjfinal](https://gitcode.com/CoderKevin/cjfinal) | 极速Web框架 | CoderKevin | ★ 14 / Fork 2 | 13 hours ago · 活跃 | c,k |
| [next-lyle/aceboot](https://gitcode.com/next-lyle/aceboot) | aceboot 是用**纯仓颉（Cangjie）**编写的服务端应用框架，角色对标 Java 的 Spring Boot / Node.js 的 MidwayJS，技术路线对标 Micronaut / Quarkus —— 以编译期宏取代运行时反射，实现「声明式开发体验」与「零反射、可静态审计」的兼得。 ACE 提供从 HTTP 内核到声明式宏层、再到 O… | next-lyle | ★ 13 / Fork 2 | 16 days ago · 活跃 | a,n |
| [Cangjie-SIG/cj_mail](https://gitcode.com/Cangjie-SIG/cj_mail) | 仓颉邮件协议库支持 SMTP / POP / IMAP / BASE64 | SIG | ★ 12 / Fork 0 | 2025-03-21 · 低活跃 | c,Cangjie,m,仓颉 |
| [Cangjie-SIG/http_router](https://gitcode.com/Cangjie-SIG/http_router) | 提供标准化的路由注册、路由匹配能力 | SIG | ★ 11 / Fork 0 | 2026-03-11 · 活跃 | c,Cangjie,h,r,s |
| [dgm108/cjginx](https://gitcode.com/dgm108/cjginx) | cjginx是一个使用Cangjie仓颉语言开发的Web微框架，提供类似go语言Gin框架API，方便开发Web应用项目。 | dgm108 | ★ 11 / Fork 0 | 11 months ago · 维护中 | c,d |
| [Cangjie-SIG/dapr-cangjie-sdk](https://gitcode.com/Cangjie-SIG/dapr-cangjie-sdk) | Dapr Cangjie SDK是Dapr SDK的仓颉实现，实现了一个支持使用 HTTP 协议访问 Dapr 边车的客户端。 | SIG | ★ 9 / Fork 0 | 2026-03-23 · 活跃 | c,Cangjie,d,s,仓颉 |
| [cinyu/ignite-cangjie](https://gitcode.com/cinyu/ignite-cangjie) | 仓颉胃，Express味！🎉🎉🎉🎉🎉🎉🎉🎉🎉可能是仓颉语言里最完善的 Web框架 之一(小字)🎉🎉🎉 Ignite（叶燧）是专为仓颉语言打造、面向真实服务落地的 Web框架，致力于使用仓颉快速上手你的 Web服务项目 。 内置skills，集路由、中间件、Swagger、静态托管、SSE/WebSocket，还有顺手到离谱的 RestClient，收成一条… | cinyu | ★ 8 / Fork 2 | 1 day ago · 活跃 | c,Cangjie,i,仓颉 |
| [niuhuan_cn/cj_ftp](https://gitcode.com/niuhuan_cn/cj_ftp) | 仓颉FTP工具包 | niuhuan_cn | ★ 8 / Fork 1 | 1 year ago · 低活跃 | c,f,n |
| [niuhuan_cn/cj_socks](https://gitcode.com/niuhuan_cn/cj_socks) | 仓颉编程语言 socks5 代理协议库 | niuhuan_cn | ★ 7 / Fork 0 | 1 year ago · 低活跃 | c,n,s |
| [Yesokim/grpc-cj](https://gitcode.com/Yesokim/grpc-cj) | 为Cangjie语言提供的grpc协议支持，API与grpc-java保持一致。 | Yesokim | ★ 7 / Fork 0 | 7 months ago · 维护中 | c,y |
| [changeden/http_lib](https://gitcode.com/changeden/http_lib) | 仓颉 HTTP 协议封装库，支持 HTTP/1.x + HTTP/2 + HTTP/3 客户端与服务器 | changeden | ★ 6 / Fork 1 | 9 days ago · 活跃 | c,h,l |
| [Cangjie-SIG/cj_socks](https://gitcode.com/Cangjie-SIG/cj_socks) | 仓颉socks5、socks4客户端协议库 | SIG | ★ 6 / Fork 0 | 2025-03-19 · 低活跃 | c,s,仓颉 |
| [naxida/tea_template](https://gitcode.com/naxida/tea_template) | 为 tea Web框架的开发模板引擎。 | naxida | ★ 4 / Fork 3 | 3 months ago · 活跃 | n,t |
| [FuranClay/flashtext4cj](https://gitcode.com/FuranClay/flashtext4cj) | 本项目用于提取和替换文本中的关键词，算法基于： https://arxiv.org/abs/1711.00046 | FuranClay | ★ 3 / Fork 1 | 1 year ago · 低活跃 | c,f |
| [service/light](https://gitcode.com/service/light) | 提供仓颉开发 web 框架的工具集合 | service | ★ 3 / Fork 1 | 1 year ago · 低活跃 | l,s |
| [Cangjie-SIG/webview-ffi](https://gitcode.com/Cangjie-SIG/webview-ffi) | No description | SIG | ★ 3 / Fork 0 | 2024-11-19 · 低活跃 | c,f,s,w |
| [next-lyle/acevec](https://gitcode.com/next-lyle/acevec) | aceVec 是一款用仓颉(Cangjie)语言实现的进程内向量数据库,采用纯内存运行 + 快照/WAL 持久化、cjpm workspace 多模块且严格自底向上无环的分层架构(ailego ← compute/storage ← algorithm ← index/sqlengine ← db ← app);它提供丰富的向量索引(Flat/HNSW/I… | next-lyle | ★ 3 / Fork 0 | 3 days ago · 活跃 | l,n |
| [StephenZhou/Remould](https://gitcode.com/StephenZhou/Remould) | 利用宏实现Http接口的快速开发 | StephenZhou | ★ 3 / Fork 0 | 1 year ago · 低活跃 | r,s,z |
| [voidovo/jsonrpc4cj](https://gitcode.com/voidovo/jsonrpc4cj) | — | voidovo | ★ 3 / Fork 0 | 11 months ago · 维护中 | v |
| [Cangjie-SIG/wamr-cj](https://gitcode.com/Cangjie-SIG/wamr-cj) | 这是 WAMR (WebAssembly Micro Runtime) 的仓颉编程语言绑定，提供了在仓颉中运行 WebAssembly 模块的完整支持。 | SIG | ★ 2 / Fork 1 | 2026-07-26 · 活跃 | — |
| [Cool_foolisher1/仓颉学习仓库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cool_foolisher1%2F%E4%BB%93%E9%A2%89%E5%AD%A6%E4%B9%A0%E4%BB%93%E5%BA%93) | 仓颉学习项目，包括：CangJieStudy(仓颉编程语言)、Server(网络服务端)、Client(网络客户端)、ClientOther(网络其他客户端)、DesignPattern(设计模式)、Algorithm(数据结构与算法)、CangJieUI(鸿蒙仓颉)、GrayFish(参考海洋饼干叔叔的项目)、WebStudy(Web基础)、CjoySt… | Cool_foolisher1 | ★ 2 / Fork 1 | 20 days ago · 活跃 | c,f,仓颉 |
| [changeden/easyframework](https://gitcode.com/changeden/easyframework) | 网络应用开发框架，集成Http服务、多种中间件 | changeden | ★ 2 / Fork 0 | 1 year ago · 低活跃 | e |
| [dgm108/cjginxDemo](https://gitcode.com/dgm108/cjginxDemo) | cjginx 仓颉语言Web框架演示Demo | dgm108 | ★ 2 / Fork 0 | 11 months ago · 维护中 | c,d |
| [changeden/quic_cj](https://gitcode.com/changeden/quic_cj) | HTTP 3.x QUIC V1/V2 | changeden | ★ 1 / Fork 1 | 10 days ago · 活跃 | c,q |
| [AlonNas/websocket4cj](https://gitcode.com/AlonNas/websocket4cj) | — | AlonNas | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,n,w |
| [Cangjie-SIG/kafka4cj](https://gitcode.com/Cangjie-SIG/kafka4cj) | No description | SIG | ★ 1 / Fork 0 | 2025-09-02 · 维护中 | Cangjie,k,s |
| [Cangjie-SIG/thrift4cj](https://gitcode.com/Cangjie-SIG/thrift4cj) | No description | SIG | ★ 1 / Fork 0 | 2026-04-08 · 活跃 | — |
| [changeden/easyframework_logger_log4cj](https://gitcode.com/changeden/easyframework_logger_log4cj) | 网络应用开发框架日志输出中间件，集成log4cj | changeden | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [changeden/easyframework_mq_activemq](https://gitcode.com/changeden/easyframework_mq_activemq) | 网络应用开发框架ActiveMQ驱动中间件 | changeden | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,e,m |
| [changeden/easyframework_sample](https://gitcode.com/changeden/easyframework_sample) | 网络应用开发框架示例 | changeden | ★ 1 / Fork 0 | 1 year ago · 低活跃 | s |
| [fandych/cjx_mail](https://gitcode.com/fandych/cjx_mail) | SMTP mail sender for Cangjie | fandych | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,f |
| [night_ycd/BACnetCodec4cj](https://gitcode.com/night_ycd/BACnetCodec4cj) | BACnet通讯协议的编码解码库。 BACnet是楼宇自控、HVAC设备领域的重要ISO标准通讯协议，在楼宇自动行业有着极高的使用率。本项目协议文档参照的是ISO16484-5-2022版本。本项目测试参照BACNET协议栈测试工具VTS Visual Test Shell(VTS) v3.6.7 的生成结果作为测试标准。目前本项目还在制作当中。 | night_ycd | ★ 1 / Fork 0 | 9 months ago · 维护中 | b,c,n,y |
| [SeanXDO/Collection4cj](https://gitcode.com/SeanXDO/Collection4cj) | The missing collection types in cangjie 【项目已关闭并迁移至 https://gitcode.com/SeanXDO/CJCommons 】 | SeanXDO | ★ 1 / Fork 0 | 10 months ago · 维护中 | c,x |
| [xink2594/web-api](https://gitcode.com/xink2594/web-api) | — | xink2594 | ★ 1 / Fork 0 | 2 months ago · 活跃 | w,x |
| [yishengTH/Anise](https://gitcode.com/yishengTH/Anise) | 仓颉后端生态的高性能HTTP客户端（http-client） | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | a,t,y |
| [yishengTH/tea-mvc](https://gitcode.com/yishengTH/tea-mvc) | 仓颉后端高性能web框架的mvc支持 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | m,t,y |
| [zhangyin_gitcode/simpleapi](https://gitcode.com/zhangyin_gitcode/simpleapi) | 一个简单的JSON Web API框架，用于演示Web API框架的基本原理。 | zhangyin_gitcode | ★ 1 / Fork 0 | 1 year ago · 低活跃 | g,z |
| [ZIYAN137/is_webp_cj](https://gitcode.com/ZIYAN137/is_webp_cj) | 判断是否是WEBP格式文件的库 | ZIYAN137 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | i,w,z |
| [zsy619/CjWeave轻量级TCP服务器框架 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zsy619%2FCjWeave%E8%BD%BB%E9%87%8F%E7%BA%A7TCP%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%A1%86%E6%9E%B6) | CjWeave轻量级TCP服务器框架 | zsy619 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,w,z |
| [Cangjie-SIG/cangjie-nacos-client](https://gitcode.com/Cangjie-SIG/cangjie-nacos-client) | No description | SIG | ★ 0 / Fork 1 | 2025-12-17 · 维护中 | c,Cangjie,n,s |
| [zhangyin_gitcode/gari](https://gitcode.com/zhangyin_gitcode/gari) | 一个轻量级的 Server-Sent Events (SSE) 流解析库，为 HttpResponse 提供扩展方法，支持将 HTTP 响应体解析为 SSE 事件流。 | zhangyin_gitcode | ★ 0 / Fork 1 | 4 months ago · 活跃 | g,z |
| [abcd1234-wyj/abWS](https://gitcode.com/abcd1234-wyj/abWS) | 为seedhttp制作的，个人实现版的websocket库 | abcd1234-wyj | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,w |
| [Cangjie-SIG/feign4cj](https://gitcode.com/Cangjie-SIG/feign4cj) | No description | SIG | ★ 0 / Fork 0 | 2025-11-16 · 维护中 | Cangjie,f,s |
| [Cangjie-SIG/nacos-client](https://gitcode.com/Cangjie-SIG/nacos-client) | No description | SIG | ★ 0 / Fork 0 | 2025-08-10 · 维护中 | c,Cangjie,d,n,s |
| [chaloongjir/rpcx_cj](https://gitcode.com/chaloongjir/rpcx_cj) | rpcx转cj练习语法 | chaloongjir | ★ 0 / Fork 0 | 12 days ago · 活跃 | c,r |
| [changeden/easyframework_data_database](https://gitcode.com/changeden/easyframework_data_database) | 网络应用开发框架数据库驱动中间件 | changeden | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e |
| [changeden/easyframework_data_redis](https://gitcode.com/changeden/easyframework_data_redis) | 网络应用开发框架Redis驱动中间件 | changeden | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,r |
| [changeden/easyframework_web_easyapi](https://gitcode.com/changeden/easyframework_web_easyapi) | 网络应用开发框架Http服务中间件，集成easyapi | changeden | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [cheng1shao2yong/基于仓颉编程语言的web快速开发框架 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=cheng1shao2yong%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E7%9A%84web%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6) | 从零编写基于仓颉编程语言的web快速开发框架，每日汇报开发进度，顺便吐槽，qq讨论群：237626046 | cheng1shao2yong | ★ 0 / Fork 0 | 11 months ago · 维护中 | y |
| [copur/webauthn-cj](https://gitcode.com/copur/webauthn-cj) | — | copur | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,w |
| [Feixinzhx/reverse_proxy_cj](https://gitcode.com/Feixinzhx/reverse_proxy_cj) | — | Feixinzhx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,r |
| [gcw_cPu5X9kS/http](https://gitcode.com/gcw_cPu5X9kS/http) | — | gcw_cPu5X9kS | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,p,s,x |
| [gcw_z3acR2wn/cj-validator](https://gitcode.com/gcw_z3acR2wn/cj-validator) | cjValidator 是一个功能完整的仓颉（Cangjie）语言数据验证三方库，参考 Go 语言的 \[go-playground/validator\](https://github.com/go-playground/validator) 库设计实现，提供 193 个内置验证规则，覆盖 100% 的 Go validator 功能，并额外提供 14 … | gcw_z3acR2wn | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,g,r,v,z |
| [iJet/unicode-normalization-cj](https://gitcode.com/iJet/unicode-normalization-cj) | Rust \[unicode-normalization\](https://github.com/unicode-rs/unicode-normalization) 库的仓颉语言重新实现。 提供符合 \[Unicode 标准附录 #15\](https://www.unicode.org/reports/tr15/) 的 Unicode 字符组合与分解工… | iJet | ★ 0 / Fork 0 | 13 days ago · 活跃 | i,j,u |
| [Learn/cangjie-http-demo](https://gitcode.com/Learn/cangjie-http-demo) | 基于 Cangjie stdx 扩展库开发的轻量级 HTTP API 服务器。 | Learn | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,d,h,l |
| [louloulin/vert.cj](https://gitcode.com/louloulin/vert.cj) | 参考vert.x基于cangjie实现实现高性能web框架， | louloulin | ★ 0 / Fork 0 | 11 months ago · 维护中 | l,v |
| [lsmiao/alipay_sdk_cj](https://gitcode.com/lsmiao/alipay_sdk_cj) | AliPay Sdk for 仓颉（本项目已经加入仓颉社区管理） 项目上游是 https://gitcode.com/Cangjie-SIG/alipay_sdk_cj | lsmiao | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,l |
| [Muyyulishang/httpclient4cj](https://gitcode.com/Muyyulishang/httpclient4cj) | — | Muyyulishang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,m |
| [mzgfly/Cangjie_Http](https://gitcode.com/mzgfly/Cangjie_Http) | — | mzgfly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,h,m |
| [next-lyle/mdurl](https://gitcode.com/next-lyle/mdurl) | `mdurl` 是一个使用仓颉语言实现的 URL 工具库，对应 `markdown-it/mdurl` 的核心能力。 它主要用于以下场景： - 对 URL 或 URL 片段进行百分号编码 - 对百分号编码字符串进行安全解码 - 将 URL 解析为结构化对象 - 将结构化 URL 对象重新格式化为字符串 当前版本已经提供 `encode`、`decode`、… | next-lyle | ★ 0 / Fork 0 | 3 months ago · 活跃 | l,m,n |
| [next-lyle/path_to_regex](https://gitcode.com/next-lyle/path_to_regex) | `path_to_regex` 是一个面向仓颉语言的路径模板处理库，用来解决“路径模板定义”和“实际路径处理”之间的转换问题。 它适合放在路由系统、网关转发、文件资源定位、服务接口路径解析等场景中，帮助你用统一的模板表达式完成以下工作： - 定义可读性强的路径规则 - 将路径规则编译为可复用的正则表达式 - 从实际路径中提取命名参数和多段通配参数 - 根据… | next-lyle | ★ 0 / Fork 0 | 2 months ago · 活跃 | l,n,r |
| [niuhuan_cn/cj_feign](https://gitcode.com/niuhuan_cn/cj_feign) | 仓颉HTTP客户端 java feign 的仓颉实现 | niuhuan_cn | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,f,n |
| [oceanSimple/o_gin](https://gitcode.com/oceanSimple/o_gin) | 仿照golang语言中的gin框架,封装http操作 | oceanSimple | ★ 0 / Fork 0 | 1 year ago · 低活跃 | o,s |
| [q1968320838/cjweb](https://gitcode.com/q1968320838/cjweb) | 轻量级仓颉 Web 框架 | q1968320838 | ★ 0 / Fork 0 | 20 days ago · 活跃 | q |
| [rocket049a/jsonstream-cj](https://gitcode.com/rocket049a/jsonstream-cj) | 仓颉语言实现的网络流式 json 处理库，及以此为基础的RPC远程调用库 | rocket049a | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,j,r |
| [sacce/web框架webjson 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=sacce%2Fweb%E6%A1%86%E6%9E%B6webjson) | 通过webjson框架实现仓颉语言返回json数据 | sacce | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [tb0912/cjaxios](https://gitcode.com/tb0912/cjaxios) | 一个为仓颉语言设计的 Axios 风格 HTTP 客户端，提供熟悉且直观的 API 用于发送 HTTP 请求。 | tb0912 | ★ 0 / Fork 0 | 29 days ago · 活跃 | t |
| [trollaxy/troxy-framework](https://gitcode.com/trollaxy/troxy-framework) | a simple framework for http | trollaxy | ★ 0 / Fork 0 | 11 months ago · 维护中 | f,t |
| [tybb2026/tycj-ai](https://gitcode.com/tybb2026/tycj-ai) | TYCJ AI 模块，提供多 Provider LLM 抽象、Agent 框架、MCP 协议支持和 RAG 检索增强生成能力。 | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | a,t |
| [tybb2026/tycj-net](https://gitcode.com/tybb2026/tycj-net) | 仓颉语言网络通信工具库 v1.0.0 -- HTTP 服务器/客户端、WebSocket、中间件 | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | n,t |
| [wang6neng/cjoy](https://gitcode.com/wang6neng/cjoy) | 一个高性能、可扩展、轻量、省心的仓颉Web框架。Rest， 宏路由，Json， 中间件，参数绑定与校验，文件上传下载，MCP...... | wang6neng | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,w |
| [wolfx/cj_simplehttp](https://gitcode.com/wolfx/cj_simplehttp) | — | wolfx | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,s,w |
| [y63512527/cjrpc](https://gitcode.com/y63512527/cjrpc) | 为仓颉编程语言打造的 RPC 框架，支持 gRPC、JSON-RPC、XML-RPC 等多种协议，提供服务发现和负载均衡功能。 | y63512527 | ★ 0 / Fork 0 | 4 months ago · 活跃 | y |
| [ystyle/json-rpc](https://gitcode.com/ystyle/json-rpc) | 仓颉通用JSON-RPC 2.0 通用框架 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | j,r,y |
| [ystyle/rpcx](https://gitcode.com/ystyle/rpcx) | 轻量级、开箱即用的 RPC 框架，适合微服务内部通信 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | r,y |
| [yunting/CangjieCjoyWebSocketDemo](https://gitcode.com/yunting/CangjieCjoyWebSocketDemo) | Cjoy WebSocket示例，前端采用纯 HTML+JS，后端基于Cjoy（Web框架）通过 Docker 容器一键启动。 | yunting | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,d,s,w,y |
| [ZhaoJun-zfh/grpc4cj](https://gitcode.com/ZhaoJun-zfh/grpc4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 18 days ago · 活跃 | g,j,z |
| [ZIYAN137/elfcat4cj](https://gitcode.com/ZIYAN137/elfcat4cj) | elfcat - ELF visualizer. Generates HTML files from ELF binaries. 用仓颉复刻了elfcat。 原项目:https://github.com/ruslashev/elfcat | ZIYAN137 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [开源仓颉第三方开发者社区/bitconverter4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fbitconverter4cj) | 将基数据类型转换为一个字节数组以及将一个字节数组转换为基数据类型，具体参照\[system.bitconverter\](https://learn.microsoft.com/zh-cn/dotnet/api/system.bitconverter?view=net-8.0) | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 11 months ago · 维护中 | b,h,o,p |
| [梅科尔工作室/jsoup4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Fjsoup4cj) | jsoup4cj 是将 Java 著名的 jsoup HTML Parser 迁移到华为仓颉编程语言的完整实现，为仓颉生态提供强大、易用的 HTML 解析和 HTTP 客户端能力。 | 梅科尔工作室 | ★ 0 / Fork 0 | 4 months ago · 活跃 | j,m |

### 数据、存储与序列化（133）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-TPC/redis-sdk](https://gitcode.com/Cangjie-TPC/redis-sdk) | 仓颉语言实现的 Redis 客户端 SDK。接口设计兼容 Jedis 接口语义，支持 RESP2 和 RESP3 协议，支持发布订阅模式，支持哨兵模式和集群模式。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 524 / Fork 55 | 2025-09-09 · 维护中 | c,Cangjie,r,s,t,仓颉 |
| [Cangjie-SIG/mariadb-driver](https://gitcode.com/Cangjie-SIG/mariadb-driver) | MariaDB驱动，适配MySQL、TiDB、OceanBase数据库。 | SIG | ★ 88 / Fork 32 | 2026-07-02 · 活跃 | c,Cangjie,d,m,s,仓颉 |
| [Cangjie-TPC/opengauss-driver](https://gitcode.com/Cangjie-TPC/opengauss-driver) | openGauss 和 PostgreSQL 数据库驱动，包括前后端通信协议模块 Proto3、前后端连接管理模块 Pgconn、驱动接口实现模块 Driver、简单数据库连接池模块 Sqlpool。 | TPC | ★ 70 / Fork 19 | 2026-05-29 · 活跃 | c,Cangjie,d,h,o,p,t,仓颉 |
| [Cangjie-TPC/s3-sdk](https://gitcode.com/Cangjie-TPC/s3-sdk) | 仓颉语言实现的 AWS S3 的客户端。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 41 / Fork 6 | 2025-10-09 · 维护中 | c,Cangjie,s,t,仓颉 |
| [Cangjie-TPC/csv4cj](https://gitcode.com/Cangjie-TPC/csv4cj) | csv 文件的仓颉操作工具，支持 csv 文件的读写、解析，支持中文。 | TPC | ★ 36 / Fork 4 | 2026-06-23 · 活跃 | c,Cangjie,h,p,t,仓颉 |
| [Cangjie-TPC/mqtt4cj](https://gitcode.com/Cangjie-TPC/mqtt4cj) | MQTT 消息队列遥测传输协议库，是一种基于发布/订阅（publish/subscribe）模式的"轻量级"通讯协议，该协议构建于 TCP/IP 协议上。支持 TCP/TLS/WS/WSS 方式连接消息服务端、支持 MQTTv3 协议连接消息服务端、持 MQTT 主题订阅发布。 | TPC | ★ 33 / Fork 3 | 2026-06-08 · 活跃 | c,Cangjie,h,m,p |
| [LilFlameZ/xlsx4cj](https://gitcode.com/LilFlameZ/xlsx4cj) | 纯仓颉语言实现的 Excel xlsx 文件读写库，基于 Office Open XML 标准，无需任何 C FFI 或外部依赖。 | LilFlameZ | ★ 31 / Fork 1 | 2 days ago · 活跃 | Cangjie,f,l,x,z,仓颉 |
| [Cangjie-TPC/protobuf4cj](https://gitcode.com/Cangjie-TPC/protobuf4cj) | Protocol Buffers 协议解析库 | TPC | ★ 29 / Fork 8 | 2026-06-18 · 活跃 | c,Cangjie,h,p,t,仓颉 |
| [Cangjie-TPC/mysqlclient-ffi](https://gitcode.com/Cangjie-TPC/mysqlclient-ffi) | mysql 客户端，可以执行各种数据库操作，包括连接数据库、创建表、插入数据、查询数据、更新数据等。 | TPC | ★ 29 / Fork 4 | 2025-09-01 · 维护中 | f,h,m,t |
| [Cangjie-TPC/cangjieJSON](https://gitcode.com/Cangjie-TPC/cangjieJSON) | Cangjie json 序列化与反序列化库 | TPC | ★ 27 / Fork 19 | 2026-06-08 · 活跃 | c,Cangjie,j,仓颉 |
| [Cangjie-TPC/lite-eventbus-cj](https://gitcode.com/Cangjie-TPC/lite-eventbus-cj) | 精简的发布/订阅事件总线框架，将事件的接受者和发送者分开，简化了组件之间的通信，使用简单，效率高，体积小。 | TPC | ★ 26 / Fork 2 | 2026-06-09 · 活跃 | c,e,h,l,p,t |
| [Cangjie-TPC/eventbus4cj](https://gitcode.com/Cangjie-TPC/eventbus4cj) | 发布/订阅事件总线框架，主要功能是替代 Intent、Handler、BroadCast 在 Activity、Fragment、Service 线程之间传递消息。支持普通事件的订阅和发布，支持粘性事件的订阅和发布。 | TPC | ★ 26 / Fork 1 | 2025-10-31 · 维护中 | e,h,p |
| [Cangjie-TPC/yaml4cj](https://gitcode.com/Cangjie-TPC/yaml4cj) | YAML 格式解析库，可以快速可靠地解析和生成 YAML 数据，支持 YAML 1.1 和 1.2 的大部分内容，包括对锚点，标签，地图合并等的支持。 | TPC | ★ 25 / Fork 14 | 2026-06-06 · 活跃 | c,Cangjie,h,p,t,y,仓颉 |
| [Cangjie-TPC/html4cj](https://gitcode.com/Cangjie-TPC/html4cj) | HTML 格式解析库，可用于分析互联网上或本地的的网页资源和 HTML 标签。支持操作 HTML 节点/属性、CSS 选择器。 | TPC | ★ 25 / Fork 7 | 2026-02-14 · 活跃 | c,Cangjie,h,p,s,t |
| [Cangjie-TPC/fast_json_cj](https://gitcode.com/Cangjie-TPC/fast_json_cj) | fast_json_cj 是一个用仓颉语言编写的高性能JSON处理库，提供了快速的JSON序列化和反序列化功能。该库专为提升JSON处理效率而设计，支持标准JSON数据类型与仓颉语言原生数据结构的相互转换。 | TPC | ★ 24 / Fork 2 | 5 months ago · 活跃 | Cangjie,f,j |
| [Cangjie-TPC/eventsource4cj](https://gitcode.com/Cangjie-TPC/eventsource4cj) | 基于仓颉语言实现的SSE规范(Html5, Server-Send Event)组件。用于服务端和客户端的单向消息推送场景。 | TPC | ★ 21 / Fork 5 | 2026-06-09 · 活跃 | c,Cangjie,e,t |
| [service/cangjie-mysql-driver](https://gitcode.com/service/cangjie-mysql-driver) | 仓颉原生 mysql 驱动实现，专注更少的代码，更好的性能。自带链接池管理, 符合原生协程编程方式。实现官方 datbase.sql 接口。 | service | ★ 21 / Fork 1 | 1 year ago · 低活跃 | c,Cangjie,d,m,s,仓颉 |
| [Cangjie-SIG/cjmustache](https://gitcode.com/Cangjie-SIG/cjmustache) | 一个迁移自 jmustache 的模版引擎项目。 | SIG | ★ 21 / Fork 0 | 2026-06-09 · 活跃 | c,Cangjie,s |
| [Cangjie-SIG/sql_builder](https://gitcode.com/Cangjie-SIG/sql_builder) | sql_builder 库是一个使用仓颉语言数据库ORM组件 | SIG | ★ 20 / Fork 6 | 2026-06-23 · 活跃 | b,c,Cangjie,s,仓颉 |
| [Cangjie-TPC/apm_sdk](https://gitcode.com/Cangjie-TPC/apm_sdk) | 仓颉APM 遵循OTel API规范完成了Metrics 、Tracing数据模型定义，基于OTel SDK规范实现Metrics、Traces等数据的采集。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 20 / Fork 2 | 2025-11-06 · 维护中 | a,c,Cangjie,s,t,仓颉 |
| [Cangjie-TPC/dataORM4cj](https://gitcode.com/Cangjie-TPC/dataORM4cj) | 端侧的数据库 ORM 框架。适用于 OHOS 系统。 | TPC | ★ 19 / Fork 3 | 2025-09-01 · 维护中 | c,Cangjie,d,h,o,p,t |
| [Cangjie-TPC/ini4cj](https://gitcode.com/Cangjie-TPC/ini4cj) | INI 文件是一种无固定标准格式的配置文件。它以简单的文字与简单的结构组成，常常使用在 Windows 操作系统上，许多程序也会采用 INI 文件做为配置文件使用。 | TPC | ★ 19 / Fork 1 | 2025-07-07 · 低活跃 | c,h,i,p,t |
| [soulsoft/sqlsharp](https://gitcode.com/soulsoft/sqlsharp) | sqlsharp是一个支持更改跟踪和自定义类型映射的orm | soulsoft | ★ 19 / Fork 1 | 9 days ago · 活跃 | s |
| [Cangjie-TPC/odbc4cj](https://gitcode.com/Cangjie-TPC/odbc4cj) | 开放数据库互连，用于访问数据库的标准 API，允许应用程序通过一个标准的接口访问不同的数据库管理系统。 | TPC | ★ 18 / Fork 4 | 2026-06-27 · 活跃 | c,Cangjie,h,o,p,t |
| [Cangjie-TPC/jwt4cj](https://gitcode.com/Cangjie-TPC/jwt4cj) | 用于生成和验证 JSON Web Token，支持 Payload 校验、HMAC 算法签名及验证、RSA 算法签名及验证、ECDSA 算法签名及验证。 | TPC | ★ 17 / Fork 13 | 2026-02-12 · 活跃 | c,h,j,p,t |
| [Cangjie-TPC/xml-ffi](https://gitcode.com/Cangjie-TPC/xml-ffi) | XML 格式解析库，支持 XML DOM 和 XML SAX 解析模式。 | TPC | ★ 17 / Fork 6 | 2026-06-04 · 活跃 | — |
| [Cangjie-TPC/asnone4cj](https://gitcode.com/Cangjie-TPC/asnone4cj) | ASN.1 编码器和解码器的实现，它支持字节流的 BER 和 DER 编码规则。 | TPC | ★ 17 / Fork 2 | 2026-06-08 · 活跃 | a,c,Cangjie,h,p,t |
| [Cangjie-TPC/xml_stream](https://gitcode.com/Cangjie-TPC/xml_stream) | XML 序列化反序列化库，提供 XML 操作相关的 STAX 风格接口，符合 XML 1.0 规范，支持命名空间。 | TPC | ★ 17 / Fork 0 | 2025-07-08 · 低活跃 | c,Cangjie,h,p,s,t,x |
| [Cangjie-TPC/toml4cj](https://gitcode.com/Cangjie-TPC/toml4cj) | TOML 格式解析，语义易于阅读，易于解析成各种语言中的数据结构，能无歧义地映射为哈希表，具备实用的原生类型。 | TPC | ★ 16 / Fork 4 | 2025-07-07 · 低活跃 | c,h,p,t |
| [Yesokim/corm](https://gitcode.com/Yesokim/corm) | 基于Cangjie语言开发的轻量级ORM框架，其核心原理是通过宏技术在编译期生成数据库操作的代码。CORM框架借鉴了MyBatis动态SQL的设计，用户可以通过直观的指令动态构建SQL语句，同时也支持对象关系映射，通过声明式配置即可实现一对一嵌套对象映射以及一对多集合映射。 | Yesokim | ★ 16 / Fork 1 | 6 months ago · 活跃 | c,y |
| [Cangjie-TPC/kv4cj](https://gitcode.com/Cangjie-TPC/kv4cj) | 基于 mmap 的高性能 key-value 存储库，主要用于解决 SharedPreferences 存储性能和容量受限的问题。 | TPC | ★ 15 / Fork 3 | 2026-06-23 · 活跃 | h,k,p,t |
| [Cangjie-SIG/simplekv](https://gitcode.com/Cangjie-SIG/simplekv) | simplekv是一个用Cangjie语言实现的高效、简洁的键值存储库，支持快速的数据查找、插入、删除，并具备排序数据获取、范围扫描、并发安全等高级功能，适用于需要高性能数据存储的场景。 | SIG | ★ 15 / Fork 1 | 2026-03-27 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-TPC/activemq4cj](https://gitcode.com/Cangjie-TPC/activemq4cj) | ActiveMQ仓颉语言客户端 SDK，兼容 JMS 规范接口语义，支持 OpenWire 协议，支持点对点与发布/订阅两种消息模型，支持事务消息和失效转移机制。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 14 / Fork 3 | 2025-10-27 · 维护中 | a,Cangjie |
| [ystyle/badger-storm](https://gitcode.com/ystyle/badger-storm) | 嵌入式 JSON 文档数据库 —— 纯仓颉实现，零 FFI 依赖，为仓颉语言提供简单高效的对象存储。 | ystyle | ★ 14 / Fork 0 | 1 day ago · 活跃 | b,Cangjie,s,y,仓颉 |
| [PermissionDog/cangjie_toml](https://gitcode.com/PermissionDog/cangjie_toml) | Cangjie TOML 是一个符合仓颉语言标准库 serialization.serialization 包风格的 TOML 文件解析库，支持 toml 文件到 DataModel 的转换。 | PermissionDog | ★ 12 / Fork 3 | 1 year ago · 低活跃 | c,Cangjie,d,p,t,仓颉 |
| [Cangjie-TPC/cbor4cj](https://gitcode.com/Cangjie-TPC/cbor4cj) | 基于 RFC 7049 协议的简明二进制对象表示法（Cbor）的 Cangjie 语言实现。 | TPC | ★ 12 / Fork 2 | 2026-02-12 · 活跃 | c,t,仓颉 |
| [Cangjie-SIG/multipart](https://gitcode.com/Cangjie-SIG/multipart) | multipart/form-data请求体解析工具 | SIG | ★ 12 / Fork 0 | 2026-03-11 · 活跃 | Cangjie,m,s |
| [Cangjie-SIG/alipay_sdk_cj](https://gitcode.com/Cangjie-SIG/alipay_sdk_cj) | AliPay Sdk for 仓颉 支付宝接口后端sdk，方便cangjie开发者快速接入支付宝的支付接口（目前只支持最广泛使用的商户直接接入模式，只支持最安全的RSA2，公钥证书方式签名验证方式,默认只支持utf-8编码和JSON格式） | SIG | ★ 11 / Fork 0 | 2025-07-02 · 低活跃 | a,c,Cangjie,s |
| [zswcode/autojson](https://gitcode.com/zswcode/autojson) | 使用仓颉的宏 自动编解码json | zswcode | ★ 11 / Fork 0 | 1 year ago · 低活跃 | a,z |
| [Cangjie-SIG/cangjie_toml](https://gitcode.com/Cangjie-SIG/cangjie_toml) | Cangjie TOML 是一个符合仓颉语言标准库 serialization.serialization 包风格的 TOML 文件解析库，支持 toml 文件到 DataModel 的转换。 | SIG | ★ 10 / Fork 1 | 2025-09-03 · 维护中 | c,Cangjie,s,t,仓颉 |
| [Cangjie-SIG/mustache-cj](https://gitcode.com/Cangjie-SIG/mustache-cj) | 基于仓颉实现的mustache模板引擎 | SIG | ★ 10 / Fork 0 | 2026-07-26 · 活跃 | c,Cangjie,m,s,仓颉 |
| [leaveWhite9088/simplekv](https://gitcode.com/leaveWhite9088/simplekv) | simplekv是一个用Cangjie语言实现的高效、简洁的键值存储库，支持快速的数据查找、插入、删除，并具备排序数据获取、范围扫描、并发安全等高级功能，适用于需要高性能数据存储的场景。 | leaveWhite9088 | ★ 10 / Fork 0 | 9 months ago · 维护中 | l,s,w |
| [Cangjie-TPC/oss-sdk](https://gitcode.com/Cangjie-TPC/oss-sdk) | 仓颉语言实现的对象存储服务软件开发工具包（OBS SDK，Object Storage Service Software Development Kit）是对 OBS 服务提供的 REST API 进行的封装。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 9 / Fork 0 | 2025-03-24 · 低活跃 | — |
| [ystyle/sunku-cj](https://gitcode.com/ystyle/sunku-cj) | Redis 兼容的本地 KV 数据库 | ystyle | ★ 9 / Fork 0 | 3 months ago · 活跃 | c,s,y |
| [Cangjie-SIG/mysql-driver-cj](https://gitcode.com/Cangjie-SIG/mysql-driver-cj) | 仓颉原生 mysql 驱动实现，专注更少的代码，更好的性能。自带链接池管理, 符合原生协程编程方式。实现官方 datbase.sql 接口。 | SIG | ★ 8 / Fork 1 | 2024-11-14 · 低活跃 | c,Cangjie,m,s |
| [service/jorm](https://gitcode.com/service/jorm) | 便捷作为第一目标的 ORM 框架 | service | ★ 8 / Fork 0 | 1 year ago · 低活跃 | j |
| [leaveWhite9088/dateparse](https://gitcode.com/leaveWhite9088/dateparse) | dateparse是一个基于 cangjie 标准库实现的高性能、功能丰富的日期时间解析库。它能够自动识别并解析多种格式的日期字符串，支持全球各种常见日期格式，包括各种区域标准、时区处理以及多语言日期表示。该库适合需要处理各种不同格式日期输入的应用程序。 | leaveWhite9088 | ★ 7 / Fork 0 | 10 months ago · 维护中 | d,l,w |
| [开源仓颉第三方开发者社区/cangjie-html 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fcangjie-html) | 声明式HTML构建工具 | 开源仓颉第三方开发者社区 | ★ 7 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,h,o |
| [devinx3/cjsqlite](https://gitcode.com/devinx3/cjsqlite) | SQLite CDBC Driver | devinx3 | ★ 6 / Fork 2 | 2 months ago · 活跃 | c,d |
| [Cangjie-SIG/excel-cj](https://gitcode.com/Cangjie-SIG/excel-cj) | 一个使用仓颉（Cangjie）语言开发的 Excel 文件处理库，支持 XLSX、CSV 格式的读取和写入。 | SIG | ★ 6 / Fork 0 | 2026-01-10 · 维护中 | c,Cangjie,e,s,仓颉 |
| [service/yaml](https://gitcode.com/service/yaml) | 使用仓颉语言开发的 yaml 文件解析 sdk, 一个超轻量级别的 yaml 库，为配置系统编写。 | service | ★ 6 / Fork 0 | 1 year ago · 低活跃 | s,y |
| [changeden/sql_script](https://gitcode.com/changeden/sql_script) | 使用脚本构建SQL的工具 | changeden | ★ 5 / Fork 3 | 1 year ago · 低活跃 | c,s |
| [ystyle/badger-cj](https://gitcode.com/ystyle/badger-cj) | 一个可嵌入、持久化且速度很快的基于LSM-Tree的键值 (KV) 数据库 | ystyle | ★ 5 / Fork 1 | 1 day ago · 活跃 | b,c,y |
| [Cangjie-TPC/hm-metricx-cj](https://gitcode.com/Cangjie-TPC/hm-metricx-cj) | hm-metricx-cj 是一款适用于鸿蒙应用的线上性能监控框架。 | TPC | ★ 4 / Fork 7 | 2026-06-11 · 活跃 | Cangjie,h,m,t |
| [leaveWhite9088/cache4cj](https://gitcode.com/leaveWhite9088/cache4cj) | 一个用 Cangjie 语言实现的高性能、线程安全的缓存库，支持存储带有过期时间的任意数据。该库支持 set、get、delete 等基本操作，并能够自动清理过期的缓存项。非常适合需要定期更新或移除缓存数据，并且对数据检索有高效要求的场景。 | leaveWhite9088 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | c,l |
| [devinx3/litem](https://gitcode.com/devinx3/litem) | 基于 CDBC 简洁的轻量级 ORM | devinx3 | ★ 3 / Fork 2 | 2 months ago · 活跃 | l |
| [Cangjie-TPC/chinamobiledb-driver](https://gitcode.com/Cangjie-TPC/chinamobiledb-driver) | No description | TPC | ★ 3 / Fork 1 | 2024-09-30 · 低活跃 | c,d,t |
| [mumu_xsy/aad4cj](https://gitcode.com/mumu_xsy/aad4cj) | aad4cj 是一个基于仓颉（Cangjie）语言实现的 AAC 音频码流解析与处理组件库。 | mumu_xsy | ★ 3 / Fork 0 | 1 year ago · 低活跃 | a,m,x |
| [xuejmnet/cjq](https://gitcode.com/xuejmnet/cjq) | cangjie最强orm没有之一 | xuejmnet | ★ 3 / Fork 0 | 9 months ago · 维护中 | c,x |
| [aibrary/pgsql-driver](https://gitcode.com/aibrary/pgsql-driver) | postgresql数据库驱动 | aibrary | ★ 2 / Fork 0 | 1 month ago · 活跃 | d,p |
| [dgm108/jsonExt4cj](https://gitcode.com/dgm108/jsonExt4cj) | Json字符串序列化，实现Json字符串到仓颉class类的序列化与反序列化转换 | dgm108 | ★ 2 / Fork 0 | 11 months ago · 维护中 | d,e,j |
| [mumu_xsy/cache4cj](https://gitcode.com/mumu_xsy/cache4cj) | cache4cj 是一个基于仓颉（Cangjie）语言实现的高性能、类型安全的内存缓存库。 | mumu_xsy | ★ 2 / Fork 0 | 6 months ago · 活跃 | c,m,x |
| [StephenZhou/CjModels](https://gitcode.com/StephenZhou/CjModels) | 通过仓颉宏实现Class、Struct、enum类型的自动序列化，支持自定义别名。 | StephenZhou | ★ 2 / Fork 0 | 1 year ago · 低活跃 | j,m,s,z |
| [ystyle/gjson-cj](https://gitcode.com/ystyle/gjson-cj) | GJSON 是一个提供快速且简单方式从JSON文档中获取值的仓颉(Cangjie)语言库。 它具有一行检索、点号路径、迭代遍历、修饰符处理等特性。 | ystyle | ★ 2 / Fork 0 | 3 days ago · 活跃 | c,g,y |
| [soulsoft/soulsoft_formats_asn1](https://gitcode.com/soulsoft/soulsoft_formats_asn1) | 仓颉语言实现的 ASN.1 编解码库，核心类型为 AsnWriter（编码）与 AsnReader/AsnDecoder（解码）。库严格遵循 ITU-T X.690 规范，覆盖布尔、整数、字节串、OID、字符串、UTC 时间、Bit 串、SEQUENCE、SET OF 等常用 ASN.1 类型，广泛用于数字证书（X.509）、TLS、PKCS 等密码学场景。 | soulsoft | ★ 1 / Fork 1 | 4 months ago · 活跃 | a,f,s |
| [Yesokim/protobuf-cj](https://gitcode.com/Yesokim/protobuf-cj) | — | Yesokim | ★ 1 / Fork 1 | 8 months ago · 维护中 | c,p,y |
| [AaTZY/simplejson](https://gitcode.com/AaTZY/simplejson) | 一个使用 Cangjie 语言编写的轻量级 JSON 解析与构建库。 支持完整 JSON 标准语法、文件与字符串解析、格式化打印与文件写入、流式回调处理、以及对象/数组操作。 | AaTZY | ★ 1 / Fork 0 | 9 months ago · 维护中 | s,t |
| [AlonNas/sqlite4cj](https://gitcode.com/AlonNas/sqlite4cj) | sqlite4cj —— 仓颉语言 SQLite 驱动三方库，CFFI 封装原生 SQLite C API，零依赖开箱即用。 - 仓颉 &gt;= 1.0 \| SQLite 3.53.1 内置 \| MIT 许可 - 三平台内置：Windows / Linux / macOS arm64 - 42/42 功能点完成：Connection · Statem… | AlonNas | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,n,s |
| [cangjie-script/html-transform](https://gitcode.com/cangjie-script/html-transform) | 这是一个模版引擎。基于 html 标签的渲染，在符合原生标签格式情况，扩展出来标签渲染器，属性渲染器，文本渲染器等。每种渲染器都支持覆盖，实现多平台渲染，无痛切换 UI 框架等。 | cangjie-script | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,s,t |
| [Cangjie-SIG/json-schema-validator-cj](https://gitcode.com/Cangjie-SIG/json-schema-validator-cj) | No description | SIG | ★ 1 / Fork 0 | 2026-06-25 · 活跃 | c,j,s,v |
| [czj18069891265/cj_xml](https://gitcode.com/czj18069891265/cj_xml) | — | czj18069891265 | ★ 1 / Fork 0 | 3 months ago · 活跃 | c,x |
| [gtn1024/cjcache](https://gitcode.com/gtn1024/cjcache) | Cache library supports LRU for Cangjie | gtn1024 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c |
| [LiqD/supabase4cj](https://gitcode.com/LiqD/supabase4cj) | 可用于在仓颉语言开发中便捷访问 Supabase 服务，提供用户认证、数据库 CRUD、存储桶管理及文件上传下载等功能，支持条件查询、排序和 Token 自动刷新机制。 | LiqD | ★ 1 / Fork 0 | 3 months ago · 活跃 | d,l,s |
| [PermissionDog/hongtools](https://gitcode.com/PermissionDog/hongtools) | 为仓颉语言提供一系列的实用宏，包括自动实现序列化接口、获取变量名称字符串等工具。 | PermissionDog | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,p |
| [SeanXDO/xml4cj](https://gitcode.com/SeanXDO/xml4cj) | — | SeanXDO | ★ 1 / Fork 0 | 9 months ago · 维护中 | s,x |
| [soulsoft/cjdoc](https://gitcode.com/soulsoft/cjdoc) | 根据仓颉项目的 src 目录生成 API Markdown 和 JSON 文档。 | soulsoft | ★ 1 / Fork 0 | 2 months ago · 活跃 | c,s |
| [tunxun1699/cj_log](https://gitcode.com/tunxun1699/cj_log) | cj_log是一个简单易用的仓颉日志框架,用于方便打印仓颉项目日志.使用@Log宏即可快速打印日志,通过json日志配置文件可自定义日志输出格式.通过反射的方式支持自定义logger writer converter组件. | tunxun1699 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,l,t |
| [WinnieHong/jmespath4cj](https://gitcode.com/WinnieHong/jmespath4cj) | JMESPath是一种JSON查询语言，可以快速解析复杂的Json数据。支持数据提取，数据筛选，数据格式转换。 | WinnieHong | ★ 1 / Fork 0 | 1 year ago · 低活跃 | h,j,w |
| [zhangyin_gitcode/naivejson_wp](https://gitcode.com/zhangyin_gitcode/naivejson_wp) | naivejson 是一个仓颉语言的 JSON 库，通过 @JsonAdapter 注解宏让类自动获得 JSON 序列化/反序列化和 JSON Schema 自动生成能力，支持 Draft-06/07、2019-09、2020-12 四种 Schema 版本。 | zhangyin_gitcode | ★ 1 / Fork 0 | 3 months ago · 活跃 | g,n,w,z |
| [cangjie_no_1/kaca_json](https://gitcode.com/cangjie_no_1/kaca_json) | 用 ai 迭代了 48+ 版本 ，寻找到的 性能最高版本 json , 本项目无 跨语言依赖 , 无 `stdx` 依赖 , | cangjie_no_1 | ★ 0 / Fork 1 | 27 days ago · 活跃 | c,j,k,n |
| [cangjie_no_1/kaca_toml](https://gitcode.com/cangjie_no_1/kaca_toml) | 居于ai推动的 toml 库 , | cangjie_no_1 | ★ 0 / Fork 1 | 27 days ago · 活跃 | c,Cangjie,k,n |
| [Cangjie-SIG/UMI-ORM](https://gitcode.com/Cangjie-SIG/UMI-ORM) | No description | SIG | ★ 0 / Fork 1 | 2025-11-23 · 维护中 | Cangjie,o,s,u |
| [cinyu/SeaJson](https://gitcode.com/cinyu/SeaJson) | SeaJson（释笺）是一个面向云原生与高性能计算场景的 JSON 处理库，以“强类型契约 + 零拷贝解析 + SIMD 加速”为核心，为仓颉语言生态提供业界顶尖水平的 JSON 序列化与反序列化能力。释笺（fromJson）笺释（toJson）怎么叫都行😁。 | cinyu | ★ 0 / Fork 1 | 3 months ago · 活跃 | c,j,s |
| [梅科尔工作室/fecha4cj_OH 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Ffecha4cj_OH) | fecha4cj 是 Fecha 日期库的仓颉（Cangjie）语言移植版本。Fecha 是一个轻量级的 JavaScript 日期格式化和解析库，现已完整移植到华为鸿蒙 HarmonyOS NEXT 的仓颉语言，支持 DateTime API。 | 梅科尔工作室 | ★ 0 / Fork 1 | 1 month ago · 活跃 | f,m,o,s |
| [2401_84036247/functionalDB](https://gitcode.com/2401_84036247/functionalDB) | 基于仓颉语言的函数式数据库，支持时间旅行和图遍历 | 2401_84036247 | ★ 0 / Fork 0 | 1 month ago · 活跃 | f |
| [2401_87361395/json_cangjie](https://gitcode.com/2401_87361395/json_cangjie) | json解析器 | 2401_87361395 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,j |
| [a19857196962/tinykv](https://gitcode.com/a19857196962/tinykv) | TinyKV 轻量级键值存储引擎，基于华为仓颉语言移植自《500 Lines or Less》案例。 支持SET/GET/DEL/KEYS/COMMIT/ROLLBACK等指令，带事务缓存、持久化存储、前缀检索；配套完整单元测试，兼容cjpm工程工具，可本地VS Code仓颉SDK一键编译运行，为仓颉课程期末移植大作业。 | a19857196962 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a |
| [akbpg_/JSON_解析器项目 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=akbpg_%2FJSON_%E8%A7%A3%E6%9E%90%E5%99%A8%E9%A1%B9%E7%9B%AE) | 这是一个基于仓颉语言（Cangjie）开发的 JSON 解析器和格式化工具。该项目提供了完整的 JSON 数据解析、生成和美化功能，支持各种复杂的 JSON 数据结构处理。 | akbpg_ | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c,Cangjie,j |
| [Betelgeuse___/jsonparser](https://gitcode.com/Betelgeuse___/jsonparser) | A lightweight JSON parser written in Cangjie programming language. Supports all JSON data types with recursive descent parsing algorithm. Includes 22 unit tests and comprehensive … | Betelgeuse___ | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,j |
| [BisouWen/mysq-driver](https://gitcode.com/BisouWen/mysq-driver) | 仓颉语言MYSQL轻量驱动包 | BisouWen | ★ 0 / Fork 0 | 6 months ago · 活跃 | b,d,m,w |
| [cangjie_no_1/kaca_html](https://gitcode.com/cangjie_no_1/kaca_html) | 仓颉语言实现的HTML5解析器 (HTML5 parser in CangJie) | cangjie_no_1 | ★ 0 / Fork 0 | 13 days ago · 活跃 | Cangjie,h,k,n |
| [cangjie_no_1/kaca_url](https://gitcode.com/cangjie_no_1/kaca_url) | 前端对齐的url解析库 | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | c,k,u |
| [cangjie_wangyanji/JsonUtils4cj](https://gitcode.com/cangjie_wangyanji/JsonUtils4cj) | — | cangjie_wangyanji | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,j,u,w |
| [cangjie-script/sql-extend](https://gitcode.com/cangjie-script/sql-extend) | 在脚本中支持使用 sql 原生语句，支持安全地插值，自动预处理 sql 查询语句。 | cangjie-script | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [Cangjie-SIG/classTransformer4cj](https://gitcode.com/Cangjie-SIG/classTransformer4cj) | No description | SIG | ★ 0 / Fork 0 | 2025-03-11 · 低活跃 | — |
| [Casey_Mighty/light_html](https://gitcode.com/Casey_Mighty/light_html) | cangjie的轻量级html库，能够实现html的解析、语法树修改和构建 | Casey_Mighty | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l,m |
| [ChaosJohn/sqlite4cj](https://gitcode.com/ChaosJohn/sqlite4cj) | — | ChaosJohn | ★ 0 / Fork 0 | 2 months ago · 活跃 | j,s |
| [chongweizhi/simd_json](https://gitcode.com/chongweizhi/simd_json) | — | chongweizhi | ★ 0 / Fork 0 | 5 months ago · 活跃 | j |
| [cj-awesome/libmd_cj](https://gitcode.com/cj-awesome/libmd_cj) | libmd 是一个功能强大的消息摘要算法库，使用仓颉编程语言实现。该库提供 MD2、MD4、MD5、RIPEMD160、SHA-1、SHA-224、SHA-256、SHA-384、SHA-512、SHA-512/256 的一次性与流式计算能力，并内置十六进制大小写编码、文件与分片计算以及 HMAC 便捷方法。可广泛应用于数据完整性校验、密码存储、文件校验等… | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,l |
| [Dacec/simple_ser](https://gitcode.com/Dacec/simple_ser) | simple_ser是一个简单的宏，为类和结构体自动实现serialization.serialization包中的Serializable接口，提供基于DataModel的基础序列化/反序列化能力。 | Dacec | ★ 0 / Fork 0 | 9 months ago · 维护中 | d,s |
| [gcw_XgU3l2iL/DagobaLite-Cangjie](https://gitcode.com/gcw_XgU3l2iL/DagobaLite-Cangjie) | DagobaLite-Cangjie 是一个基于仓颉语言实现的轻量级内存图数据库项目，原型参考《500 Lines or Less》中的 Dagoba。原版 Dagoba 使用 JavaScript 编写，目标是在有限代码量内实现图数据存储、关系遍历和链式查询。 本项目围绕“跨语言移植”展开，重点保留 Dagoba 的核心设计思想：图由顶点和边构成，查询由… | gcw_XgU3l2iL | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,l,u,x |
| [gcw_z3acR2wn/HTML-parser](https://gitcode.com/gcw_z3acR2wn/HTML-parser) | 一个用仓颉语言编写的 HTML 解析库，可将 HTML 字符串转换为 JSON 树状结构，并提取 CSS 样式为 JSON 映射。该库专为鸿蒙 HarmonyOS/ArkTS 开发设计，兼容 DevEco Studio 6.1.0 (23) 和仓颉 SDK 1.0.5。 | gcw_z3acR2wn | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,p,z |
| [Goldgom/dbBulter](https://gitcode.com/Goldgom/dbBulter) | cangjie orm framwork | Goldgom | ★ 0 / Fork 0 | 6 months ago · 活跃 | b,d,g |
| [gongziwushuang/word4cj](https://gitcode.com/gongziwushuang/word4cj) | 解析word的项目 | gongziwushuang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,w |
| [lovelifesp/jsonEasy4cj](https://gitcode.com/lovelifesp/jsonEasy4cj) | 仓颉实现json库 | lovelifesp | ★ 0 / Fork 0 | 1 day ago · 活跃 | e,j,l |
| [luna360/properties4cj](https://gitcode.com/luna360/properties4cj) | 仓颉解析properties文件的库 | luna360 | ★ 0 / Fork 0 | 9 months ago · 维护中 | l,p |
| [m0_74475107/codec](https://gitcode.com/m0_74475107/codec) | Codec 是仓颉编程语言的序列化/反序列化核心库，提供格式无关的序列化抽象。本库借鉴 Rust serde 的成功经验，采用三层架构设计，旨在成为仓颉生态系统的基础设施组件。 | m0_74475107 | ★ 0 / Fork 0 | 3 months ago · 活跃 | m |
| [m0_74475107/codec_json](https://gitcode.com/m0_74475107/codec_json) | JSON 格式实现，为 Codec 框架提供 JSON 序列化/反序列化支持。 | m0_74475107 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,j,m |
| [m0_74475107/codec_macro](https://gitcode.com/m0_74475107/codec_macro) | Codec 宏库，为 Codec 框架提供编译时代码生成功能。通过 `@Codec` 和 `@Field` 宏，自动为数据结构生成高效的序列化/反序列化代码，实现零成本抽象。 | m0_74475107 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,m |
| [m0_74475107/codec_msgpack](https://gitcode.com/m0_74475107/codec_msgpack) | MessagePack 格式实现，为 Codec 框架提供高效的二进制序列化/反序列化支持。 | m0_74475107 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,m |
| [mcallzbl/css_parser_cj](https://gitcode.com/mcallzbl/css_parser_cj) | 这是一个使用仓颉开发的CSS解析器 | mcallzbl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m,p |
| [null_fish/plist](https://gitcode.com/null_fish/plist) | plist文件解析库 | null_fish | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,n,p |
| [Racial_/functionIDB](https://gitcode.com/Racial_/functionIDB) | 基于仓颉语言的函数式数据库，支持时间旅行和图遍历 | Racial_ | ★ 0 / Fork 0 | 1 month ago · 活跃 | i,r |
| [SeanXDO/EasyExcel4cj_Obsolete](https://gitcode.com/SeanXDO/EasyExcel4cj_Obsolete) | 可用于高效处理CSV、XLS和XLSX格式的Excel文件，具备高性能、低内存占用特点，提供简单易用的API，支持注解模拟、数据转换器及监听器模式。【此简介由AI生成】 | SeanXDO | ★ 0 / Fork 0 | 9 months ago · 维护中 | o,s,x |
| [smile_suna/json_macro](https://gitcode.com/smile_suna/json_macro) | — | smile_suna | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,m,s |
| [tybb2026/tycj-cache](https://gitcode.com/tybb2026/tycj-cache) | Redis 兼容的内存缓存服务，纯仓颉语言实现 | tybb2026 | ★ 0 / Fork 0 | 24 days ago · 活跃 | t |
| [tybb2026/tycj-db](https://gitcode.com/tybb2026/tycj-db) | 轻量级嵌入式数据库，提供KV存储引擎和SQL查询能力，面向企业级生产环境 | tybb2026 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d |
| [tybb2026/tycj-storage](https://gitcode.com/tybb2026/tycj-storage) | MinIO/S3 兼容的企业级对象存储服务，纯仓颉语言实现 | tybb2026 | ★ 0 / Fork 0 | 24 days ago · 活跃 | s,t |
| [wangzhepaohui/eudi_lib_wallet_kit](https://gitcode.com/wangzhepaohui/eudi_lib_wallet_kit) | 可用于构建欧盟数字身份钱包应用，实现凭证签发、出示、文档存储等功能。项目移植自欧盟官方参考实现，提供统一钱包公共API，集成11个上游模块，是EUDI仓颉栈的集成顶点。 | wangzhepaohui | ★ 0 / Fork 0 | 15 days ago · 活跃 | e,k,w |
| [wangzhepaohui/eudi_lib_wallet_storage](https://gitcode.com/wangzhepaohui/eudi_lib_wallet_storage) | — | wangzhepaohui | ★ 0 / Fork 0 | 15 days ago · 活跃 | e,l,s,w |
| [xling111/JsonMacro](https://gitcode.com/xling111/JsonMacro) | — | xling111 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,m,x |
| [ystyle/flatbuffers-cj](https://gitcode.com/ystyle/flatbuffers-cj) | 仓颉语言的 FlatBuffers 零拷贝序列化库，支持宏和schema自动生成类定义。 | ystyle | ★ 0 / Fork 0 | 19 days ago · 活跃 | f |
| [ystyle/holt-cj](https://gitcode.com/ystyle/holt-cj) | 仓颉实现的嵌入式图数据库 | ystyle | ★ 0 / Fork 0 | 12 days ago · 活跃 | h,y |
| [ystyle/refine](https://gitcode.com/ystyle/refine) | 仓颉语言编译期类型安全 ORM， 零运行时反射。 | ystyle | ★ 0 / Fork 0 | 15 days ago · 活跃 | r,y |
| [ystyle/sjson-cj](https://gitcode.com/ystyle/sjson-cj) | SJSON 是一个提供快速且简单方式从JSON文档中设置/删除值的库 | ystyle | ★ 0 / Fork 0 | 3 days ago · 活跃 | s,y |
| [ystyle/tomlcj](https://gitcode.com/ystyle/tomlcj) | TOML 解析与编码库，提取自 cjpm | ystyle | ★ 0 / Fork 0 | 20 days ago · 活跃 | t |
| [yunting/cirrus-be](https://gitcode.com/yunting/cirrus-be) | 采用Cangjie语言开发，集成JMeter性能测试框架和Redis缓存管理服务。支持压测任务的创建、执行、监控以及Redis缓存的查看管理功能。 | yunting | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,y |
| [yunting/es-cj](https://gitcode.com/yunting/es-cj) | 基于仓颉语言实现的 Elasticsearch 客户端库，提供简洁的 ORM 风格 API 和强大的 Lambda 查询构建器。 ## 特性 - **ESClient**: 完整的 Elasticsearch REST API 客户端 - **@ESDocument/@ESField 宏**: 自动生成 `toJson()`、`fromJson()`、`i… | yunting | ★ 0 / Fork 0 | 4 months ago · 活跃 | e,y |
| [zhangyin_gitcode/db_driver_check](https://gitcode.com/zhangyin_gitcode/db_driver_check) | 测试数据库驱动能否正常工作，从而简化技术调研论证。通过docker compose快速搭建测试环境，并对数据库驱动进行测试。 | zhangyin_gitcode | ★ 0 / Fork 0 | 6 months ago · 活跃 | d,g,z |
| [zhangyin_gitcode/json2cj](https://gitcode.com/zhangyin_gitcode/json2cj) | json2cj 是一个命令行工具，用于将 JSON 数据结构自动转换为仓颉（Cangjie）语言的 class 定义。工具支持自定义配置、多种序列化框架和灵活的输入输出方式。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,j,z |
| [zhangyin_gitcode/toml2cj](https://gitcode.com/zhangyin_gitcode/toml2cj) | toml2cj 是一个命令行工具，用于将 TOML 数据结构自动转换为仓颉（Cangjie）语言的 class 定义。工具支持自定义配置、多种序列化框架和灵活的输入输出方式。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | t,z |
| [开源仓颉第三方开发者社区/stdx_standalone_encode_json 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fstdx_standalone_encode_json) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | e,j,o,s |
| [开源仓颉第三方开发者社区/yaml4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fyaml4cj) | 一个YAML格式解析库 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,o,t,y |

### 安全与密码学（37）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/cjoy](https://gitcode.com/Cangjie-SIG/cjoy) | 一个高性能、可扩展、轻量、省心的仓颉应用开发框架。IoC，Rest，宏路由，Json，中间件，参数绑定与校验，文件上传下载，OAuth2，MCP...... | SIG | ★ 138 / Fork 25 | 2026-05-16 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-TPC/oauth4cj](https://gitcode.com/Cangjie-TPC/oauth4cj) | OAuth 开放授权协议库，支持协议 OAuth1.0 和 OAuth2.0，允许第三方程序通过访问令牌访问受保护的资源，而无需暴露用户的凭据。支持授权码模式，简化模式，密码模式，客户端模式四种模式。 | TPC | ★ 26 / Fork 2 | 2026-02-10 · 活跃 | Cangjie,h,o,p |
| [Cangjie-TPC/sha256-cj](https://gitcode.com/Cangjie-TPC/sha256-cj) | 密码散列函数，支持使用 UTF-8 编码计算生成数据的 256位（32 字节）散列值。 | TPC | ★ 24 / Fork 3 | 2025-05-16 · 低活跃 | c,s,t |
| [Cangjie-TPC/crypto-ffi](https://gitcode.com/Cangjie-TPC/crypto-ffi) | 安全的密码库，包括摘要算法、对称加密算法、非对称加密算法、密钥生成和签名验证。 | TPC | ★ 23 / Fork 6 | 2026-02-25 · 活跃 | c,Cangjie,f,h,p,t |
| [Cangjie-TPC/md2_cj](https://gitcode.com/Cangjie-TPC/md2_cj) | 消息摘要算法，支持字符串和文件的 MD2 消息摘要计算。 | TPC | ★ 23 / Fork 0 | 2025-12-28 · 维护中 | — |
| [Cangjie-TPC/hicrypto](https://gitcode.com/Cangjie-TPC/hicrypto) | HiCrypto是一个基于仓颉语言开发的密码学库，底层密码套件使用了华为公司自研的openHiTLS，提供了高效、敏捷的全场景开源密码学开发套件。 | TPC | ★ 21 / Fork 0 | 2025-11-19 · 维护中 | Cangjie,h,t,仓颉 |
| [Cangjie-SIG/cjgeohash](https://gitcode.com/Cangjie-SIG/cjgeohash) | No description | SIG | ★ 18 / Fork 0 | 2026-03-24 · 活跃 | c,Cangjie,s |
| [Cangjie-SIG/hashlib4cj](https://gitcode.com/Cangjie-SIG/hashlib4cj) | No description | SIG | ★ 10 / Fork 0 | 2025-06-13 · 低活跃 | c,Cangjie,h,s |
| [cinyu/jinguiSSL](https://gitcode.com/cinyu/jinguiSSL) | jinguiSSL (金匮)是纯仓颉实现的 SSL/TLS 与密码学库，灵感来自无聊SSL\[😁\](https://boringssl.googlesource.com/boringssl/) 的接口与安全规范，为仓颉语言生态提供安全、可靠、高性能的底层加密能力。目前专注于交付HTTP/SSH，欢迎提交issue | cinyu | ★ 8 / Fork 2 | 8 days ago · 活跃 | c,Cangjie,j,s,仓颉 |
| [Cangjie-TPC/checksum4cj](https://gitcode.com/Cangjie-TPC/checksum4cj) | 计算散列函数的库，支持多种校验和算法，如 SHA1，MD5 等。 | TPC | ★ 3 / Fork 0 | 2024-09-23 · 低活跃 | c,Cangjie,t |
| [Cangjie-TPC/md5-cj](https://gitcode.com/Cangjie-TPC/md5-cj) | 用于计算消息摘要的密码散列函数库，可以将任意长度的字符串转换成一个 128 位（16字节）的散列值。 | TPC | ★ 3 / Fork 0 | 2025-01-08 · 低活跃 | c,m,t |
| [Cangjie-TPC/pbkdf2](https://gitcode.com/Cangjie-TPC/pbkdf2) | 基于 OPENSSL 实现的，用于生成 PBKDF2 密钥的工具。 | TPC | ★ 3 / Fork 0 | 2025-02-28 · 低活跃 | c,h,p,t |
| [Cangjie-TPC/pkcs4cj](https://gitcode.com/Cangjie-TPC/pkcs4cj) | 提供 PKCS12 证书的生成、解析功能。 | TPC | ★ 3 / Fork 0 | 2025-02-28 · 低活跃 | c,h,p,t |
| [Cangjie-SIG/random](https://gitcode.com/Cangjie-SIG/random) | 高可扩展、强定制化的伪随机数生成器工具库，允许开发者无缝集成自定义伪随机数生成算法，支持主流概率分布的随机数生成，并提供简洁易用的 API ，适用于科研仿真、数据分析、游戏开发、密码学原型验证等多场景需求，兼顾灵活性与实用性。 | SIG | ★ 2 / Fork 1 | 2 months ago · 活跃 | c,Cangjie,m,r,s |
| [Cangjie-TPC/sha1-cj](https://gitcode.com/Cangjie-TPC/sha1-cj) | 密码散列函数，用于生成数据的固定长度散列值。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | c,Cangjie,s,t |
| [Dacec/blowfish-cj](https://gitcode.com/Dacec/blowfish-cj) | Blowfish 分组密码算法的 Cangjie 实，实现了 std.crypto.cipher.BlockCipher 接口，提供了标准的加密和解密功能。 | Dacec | ★ 2 / Fork 0 | 10 months ago · 维护中 | b |
| [RainBoWli6/checksum4cj](https://gitcode.com/RainBoWli6/checksum4cj) | checksum4cj 仓颉实现的一个简单计算散列函数的组件，如sha1，MD5等 | RainBoWli6 | ★ 1 / Fork 1 | 1 year ago · 低活跃 | b,c,r,w |
| [chipichipi/jgeohash4cj](https://gitcode.com/chipichipi/jgeohash4cj) | — | chipichipi | ★ 1 / Fork 0 | 1 year ago · 低活跃 | j |
| [devinx3/otp](https://gitcode.com/devinx3/otp) | otp是一个仓颉库，用于生成 HOTP（RFC 4226）或 TOTP（RFC 6238）一次性密码 | devinx3 | ★ 1 / Fork 0 | 2 months ago · 活跃 | d,o |
| [mumu_xsy/indicator4cj](https://gitcode.com/mumu_xsy/indicator4cj) | indicator4cj 是一个基于仓颉（Cangjie）语言实现的金融技术分析与回测组件库。本项目由原 Go 语言知名金融库 cinar/indicator (v2) 完整迁移而来，旨在为仓颉生态提供高性能、类型安全且易于扩展的技术指标计算与策略开发工具。 | mumu_xsy | ★ 1 / Fork 0 | 2 months ago · 活跃 | i,m,x |
| [RayJin/cjotp](https://gitcode.com/RayJin/cjotp) | 仓颉语言实现的一次性密码（One-Time Password Library）库 | RayJin | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,j,r |
| [FriskKA/hashlib4cj](https://gitcode.com/FriskKA/hashlib4cj) | 基于仓颉语言的哈希三方库hashlib4cj | FriskKA | ★ 0 / Fork 1 | 1 year ago · 低活跃 | f,h,k |
| [zichexuelan/ensemble4cj](https://gitcode.com/zichexuelan/ensemble4cj) | Ensemble4CJ 是一个专为仓颉语言设计的集合类型强化库，为 `Array`、`ArrayList`、`String`、`Rune` 等基础集合类型提供了丰富的扩展功能，包含200+个方法用于过滤、映射、归约、排序、分组等操作。通过泛型约束和类型安全的方式，为开发者提供高效、易用的集合操作API。 | zichexuelan | ★ 0 / Fork 1 | 11 months ago · 维护中 | e |
| [开源仓颉第三方开发者社区/ahash 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fahash) | 仓颉高性能哈希库 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 1 | 4 months ago · 活跃 | a,o |
| [Cangjie-TPC/appauth4cj](https://gitcode.com/Cangjie-TPC/appauth4cj) | appauth4cj 库，帮助应用安全地实现用户登录和访问受保护资源的功能。 它遵循 OAuth 2.0 和 OpenID Connect 这两个业界标准协议。 | TPC | ★ 0 / Fork 0 | 2025-12-09 · 维护中 | a,t |
| [clearme777/cj-sha1](https://gitcode.com/clearme777/cj-sha1) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,s |
| [clearme777/cj-sha256](https://gitcode.com/clearme777/cj-sha256) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,s |
| [HenonBamboo_YYJ/cjimage](https://gitcode.com/HenonBamboo_YYJ/cjimage) | 可用于图像的读取、处理、显示与保存，是轻量原生纯仓颉库，仅依赖仓颉std，支持多格式编解码，提供丰富图像处理功能，核心设计注重不可变安全与零复制优化。 | HenonBamboo_YYJ | ★ 0 / Fork 0 | 2 days ago · 活跃 | b,c,h,y |
| [jacknqy/eudi_lib_core_crypto](https://gitcode.com/jacknqy/eudi_lib_core_crypto) | — | jacknqy | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,e,j,l |
| [junyang_shi/cipher](https://gitcode.com/junyang_shi/cipher) | SimpleCipher 是一个基于仓颉编程语言实现的流密码加密解密库。它使用伪随机密钥为小写英文字母提供加密和解密功能。 | junyang_shi | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,j,s |
| [tlada/MD5-cj](https://gitcode.com/tlada/MD5-cj) | 使用仓颉编程语言，按std.crypto.digest.Digest接口，实现MD5算法。免去依赖OpenSSL 3 。支持多次输入内容后再最后获得杂凑值(哈希值)结果。 | tlada | ★ 0 / Fork 0 | 10 months ago · 维护中 | m,t |
| [tlada/SM3-cj](https://gitcode.com/tlada/SM3-cj) | 使用仓颉编程语言，按std.crypto.digest.Digest接口，实现SM3算法。免去依赖OpenSSL 3 。支持多次输入内容后再最后获得杂凑值(哈希值)结果。 | tlada | ★ 0 / Fork 0 | 10 months ago · 维护中 | s,t |
| [tlada/SM4-cj](https://gitcode.com/tlada/SM4-cj) | 本项目使用仓颉编程语言，参考crypto.crypto.SM4类，实现国密SM4算法。免去依赖OpenSSL 3 。支持数组模式以及流模式。 | tlada | ★ 0 / Fork 0 | 10 months ago · 维护中 | s,t |
| [tybb2026/tycj-crypto](https://gitcode.com/tybb2026/tycj-crypto) | TYCJ 加密工具库，提供摘要、编码、HMAC 和国密算法等基础密码学能力。 | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | c,t |
| [tybb2026/tycj-security](https://gitcode.com/tybb2026/tycj-security) | tycj_security 是一个综合安全工具库，提供加密、JWT、输入验证、XSS 防护、国密算法等功能。 | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | s,t |
| [wangzhepaohui/eudi_lib_mdoc_security](https://gitcode.com/wangzhepaohui/eudi_lib_mdoc_security) | — | wangzhepaohui | ★ 0 / Fork 0 | 19 days ago · 活跃 | e,l,m,s,w |
| [wangzhepaohui/eudi_lib_sdjwt](https://gitcode.com/wangzhepaohui/eudi_lib_sdjwt) | — | wangzhepaohui | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,l,s,w |

### 算法、科学计算与 AI（78）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-TPC/CangjieMagic](https://gitcode.com/Cangjie-TPC/CangjieMagic) | 基于仓颉编程语言构建的 LLM Agent DSL，其主要特点包括：声明式 DSL、支持 MCP 协议，支持任务智能规划等。 | TPC | ★ 716 / Fork 78 | 2026-05-27 · 活跃 | c,Cangjie,m,t,仓颉 |
| [Cangjie-SIG/cjgrapht](https://gitcode.com/Cangjie-SIG/cjgrapht) | 一个图论数据结构和算法库，提供多种图结构以及图算法。 | SIG | ★ 106 / Fork 96 | 2025-07-04 · 低活跃 | c,Cangjie,s,仓颉 |
| [WBZhang/PiMath](https://gitcode.com/WBZhang/PiMath) | 代数学（algebra）是数学的一个重要分支。它重点研究数、量、关系、结构及方程等重要内容。在一定意义上说，代数学的研究是伴随着人类的出现一起出现的。尽管多数人认为，“代数”这一名称起源于阿拉伯数学家花拉子米（Abu Abdulloh Muhammad ibn Muso al-Xorazmiy，780 -- 850），但与代数学相关的研究却可以追溯到公元前… | WBZhang | ★ 36 / Fork 1 | 1 month ago · 活跃 | m,p,w |
| [Cangjie-TPC/memorycache](https://gitcode.com/Cangjie-TPC/memorycache) | 内存缓存库，支持基于的 lru 本地缓存读写和内存缓存。 | TPC | ★ 34 / Fork 1 | 2026-02-12 · 活跃 | c,Cangjie,m,t,仓颉 |
| [梅科尔工作室/CM_IATP 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_IATP) | 基于CangjieMagic框架开发了一个多智能体协同旅游规划系统，让AI化身专业旅行顾问！ | 梅科尔工作室 | ★ 34 / Fork 0 | 11 months ago · 维护中 | c,i,m,s |
| [Cangjie-TPC/flexsearch4cj](https://gitcode.com/Cangjie-TPC/flexsearch4cj) | 快速、零依赖的全文搜索库。在原始搜索速度方面，FlexSearch 优于每一个搜索库，并提供灵活的搜索功能，如多字段搜索，语音转换或部分匹配。根据使用的选项，它还提供最高内存效率的索引。适用于 OHOS 系统。 | TPC | ★ 31 / Fork 2 | 2025-07-07 · 低活跃 | c,f,h,p |
| [Cangjie-SIG/genex-cj](https://gitcode.com/Cangjie-SIG/genex-cj) | 生成表达式（Generate Expression，简称：Genex或GE）是一款用于按照指定语法规则随机或固定生成数据的功能库。主要适用于依赖规则数据的应用场景，例如：应用测试、模板数据生成等。Genex基于伪随机的生成器，确保在规则和随机种子相同的前提下，生成一致的随机结果。 | SIG | ★ 31 / Fork 0 | 2026-03-29 · 活跃 | c,Cangjie,g |
| [Cangjie-TPC/metaphone4cj](https://gitcode.com/Cangjie-TPC/metaphone4cj) | 语音算法，支持将一个特定的字符串（通常是一个英文单词），将其转化为一个代码，然后可以将其与其他代码（或其他单词）进行比较，以检查他们是否（可能）发音相同。 | TPC | ★ 29 / Fork 1 | 2025-07-04 · 低活跃 | c,m,t |
| [Cangjie-TPC/leven4cj](https://gitcode.com/Cangjie-TPC/leven4cj) | 使用 Levenshtein 距离算法测量两个字符串之间的差异。 | TPC | ★ 28 / Fork 1 | 2026-04-24 · 活跃 | c,Cangjie,l,t,仓颉 |
| [Cangjie-SIG/cjnum](https://gitcode.com/Cangjie-SIG/cjnum) | 这是一个用于 Cangjie 语言的数值计算库，提供了广泛的数学、科学计算和数值分析功能。 | SIG | ★ 27 / Fork 9 | 2026-05-22 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-TPC/matrix4cj](https://gitcode.com/Cangjie-TPC/matrix4cj) | 线性代数库，用于构造和操作密集矩阵。 | TPC | ★ 27 / Fork 5 | 2026-06-23 · 活跃 | c,Cangjie,m,t |
| [Cangjie-TPC/hibase32-cj](https://gitcode.com/Cangjie-TPC/hibase32-cj) | Base32(RFC 4648) 编码/解码库。 | TPC | ★ 27 / Fork 0 | 2025-07-05 · 低活跃 | h,t |
| [Cangjie-TPC/disklrucache4cj](https://gitcode.com/Cangjie-TPC/disklrucache4cj) | 管理硬盘内容的存储管理工具，它采用了最近最少使用（LRU）算法，以对硬盘中存储的文件进行管理，在存储空间短缺的情况下，会优先将最近最少使用的文件删除，以扩展可用的硬盘空间。 | TPC | ★ 23 / Fork 3 | 2026-06-04 · 活跃 | c,Cangjie,d,h,p,t |
| [Cangjie-SIG/stats4cj](https://gitcode.com/Cangjie-SIG/stats4cj) | stats4cj是一个仓颉实现的数学统计库，包括总体/样本均值、总体/样本方差、分位数、统计分布等多种数理统计函数。 | SIG | ★ 23 / Fork 1 | 2026-04-25 · 活跃 | c,s,仓颉 |
| [Cangjie-TPC/md2-cj](https://gitcode.com/Cangjie-TPC/md2-cj) | 仓颉版md2摘要算法 | TPC | ★ 23 / Fork 0 | 6 months ago · 活跃 | c,Cangjie,m,t |
| [Cangjie-TPC/ahocorasick4cj](https://gitcode.com/Cangjie-TPC/ahocorasick4cj) | 使用 Aho-Corasick 字符串搜索算法，能够提供高效的字符串匹配功能，支持多字符搜索，支持关键词库模式，支持自定义值输出模式。 | TPC | ★ 22 / Fork 1 | 2026-06-05 · 活跃 | a,c,Cangjie,h,p,t |
| [Cangjie-SIG/cj-money](https://gitcode.com/Cangjie-SIG/cj-money) | 一个用于解决金融计算领域浮点数误差的库。 | SIG | ★ 20 / Fork 0 | 2025-07-19 · 低活跃 | c,Cangjie,m |
| [Cangjie-TPC/scientific](https://gitcode.com/Cangjie-TPC/scientific) | scientific 是仓颉编程语言中用于统计分析、线性代数求解和数据可视化的库。 我们也对科学计算相关的其他领域感兴趣，这些可能成为未来开发的功能。 | TPC | ★ 16 / Fork 1 | 2025-12-06 · 维护中 | s |
| [abcd1234-wyj/learning_ml_cj](https://gitcode.com/abcd1234-wyj/learning_ml_cj) | 【思路来源】启元实验室 - InfiniLM、“InfiniTensor：人工智能编译器与大模型系统训练营”方向3系列课程 【简要介绍】脱胎于“InfiniTensor：人工智能编译器与大模型系统训练营”的方向3，其旨在自己复现python里ml的“transformer”库的部分功能。在我完成其基本内容后，我决定将其移植至仓颉社区，以完成《东北大学仓颉社… | abcd1234-wyj | ★ 15 / Fork 2 | 1 year ago · 低活跃 | a,c,Cangjie,l,m,w |
| [zhangyin_gitcode/naiveioc](https://gitcode.com/zhangyin_gitcode/naiveioc) | 一个不依赖反射和AOT的依赖注入容器。使用宏实现依赖注入，不依赖反射与AOT，适配鸿蒙与macOS。支持生命周期管理，提供Singleton、Scoped与Transient生命周期。支持泛型（有条件地）。#仓颉# #cangjie# | zhangyin_gitcode | ★ 14 / Fork 3 | 3 months ago · 活跃 | g,n,z |
| [Cangjie-SIG/whatlang4cj](https://gitcode.com/Cangjie-SIG/whatlang4cj) | 一个快捷高效的自然语言检测库 | SIG | ★ 12 / Fork 2 | 2026-03-28 · 活跃 | c,Cangjie,s,w |
| [Cangjie-SIG/xurls4cj](https://gitcode.com/Cangjie-SIG/xurls4cj) | 从文本中提取 URL | SIG | ★ 10 / Fork 0 | 2026-03-28 · 活跃 | Cangjie,s,x |
| [niuhuan_cn/cj_mail](https://gitcode.com/niuhuan_cn/cj_mail) | 仓颉语言邮件工具 支持 STMP、POP、IMAP、BASE64 | niuhuan_cn | ★ 8 / Fork 1 | 1 year ago · 低活跃 | c,m,n |
| [Cangjie-SIG/mlearn4cj](https://gitcode.com/Cangjie-SIG/mlearn4cj) | MLearn4CJ 是一个全面的机器学习库，专为仓颉（Cangjie）语言设计。它包含了丰富的机器学习算法，涵盖分类、回归、聚类、降维、神经网络等领域。 | SIG | ★ 7 / Fork 0 | 2026-01-13 · 维护中 | Cangjie,m,s,仓颉 |
| [CJMP/SystemLibs](https://gitcode.com/CJMP/SystemLibs) | — | CJMP | ★ 6 / Fork 6 | 20 days ago · 活跃 | l,s |
| [yishengTH/metaphone-cj](https://gitcode.com/yishengTH/metaphone-cj) | 语音算法，支持将一个特定的字符串（通常是一个英文单词），将其转化为一个代码，然后可以将其与其他代码（或其他单词）进行比较，以检查他们是否（可能）发音相同。 | yishengTH | ★ 6 / Fork 1 | 1 year ago · 低活跃 | c,m,t,y |
| [raozj/Yez](https://gitcode.com/raozj/Yez) | 这是华为云【案例共创】文章《【案例共创】基于仓颉、DeepSeek与RGF的AI桌宠开发实践》的代码库 | raozj | ★ 6 / Fork 0 | 8 months ago · 维护中 | r,y |
| [Cangjie-SIG/snowflake4cj](https://gitcode.com/Cangjie-SIG/snowflake4cj) | 仓颉的雪花算法库 Snowflake algorithm for Cangjie | SIG | ★ 5 / Fork 0 | 2026-07-26 · 活跃 | Cangjie,s,仓颉 |
| [javpower/mail4cj](https://gitcode.com/javpower/mail4cj) | Mail Cangjie SDK Implementation | javpower | ★ 3 / Fork 2 | 1 year ago · 低活跃 | j,m |
| [Cangjie-TPC/image-filters-cj](https://gitcode.com/Cangjie-TPC/image-filters-cj) | 对图片添加滤波器的图像处理库，支持 Invert、Contrast、Mirror、Brightness、Thresholding 等多种滤镜格式。 | TPC | ★ 3 / Fork 0 | 2025-01-07 · 低活跃 | c,Cangjie,f,i,t |
| [Cangjie-SIG/more-random](https://gitcode.com/Cangjie-SIG/more-random) | 高可扩展、强定制化的伪随机数生成器工具库，允许开发者无缝集成自定义伪随机数生成算法，支持主流概率分布的随机数生成，并提供简洁易用的 API ，适用于科研仿真、数据分析、游戏开发、密码学原型验证等多场景需求，兼顾灵活性与实用性。 | SIG | ★ 2 / Fork 1 | 2026-05-19 · 活跃 | — |
| [Cangjie-TPC/adler4cj](https://gitcode.com/Cangjie-TPC/adler4cj) | 用于计算数据校验的算法库，实现了 Adler-32 校验和算法，支持多种数据类型校验和计算。该算法由 Mark Adler 创建，相比 CRC32 具有更快的计算速度，被广泛应用于数据完整性校验、网络传输和压缩文件格式（如 zlib）中。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | a,c,t |
| [Cangjie-TPC/caverphone4cj](https://gitcode.com/Cangjie-TPC/caverphone4cj) | 用于比较英文单词发音相似度的算法库。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | c,t |
| [Cangjie-TPC/easy-relpace-cj](https://gitcode.com/Cangjie-TPC/easy-relpace-cj) | 用于非正则字符串替换的算法库。支持字符串替换、字符串替换区间的选择。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | c,Cangjie,e,r |
| [Chemxy/leven-cj](https://gitcode.com/Chemxy/leven-cj) | 使用Levenshtein距离算法测量两个字符串之间的差异 | Chemxy | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,l |
| [vchuoshen6/仓颉语言程序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=vchuoshen6%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%A8%8B%E5%BA%8F) | 仓颉语言编写的程序，包括算法库、类库，以及教学示例程序等。 | vchuoshen6 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,v,仓颉 |
| [开源仓颉第三方开发者社区/promise4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fpromise4cj) | 仓颉Promise模型，参考Javascript标准 | 开源仓颉第三方开发者社区 | ★ 2 / Fork 0 | 11 months ago · 维护中 | Cangjie,o,p |
| [aibrary/semver](https://gitcode.com/aibrary/semver) | 完整 Semantic Versioning 2.0.0 规范库 | aibrary | ★ 1 / Fork 1 | 1 month ago · 活跃 | a,s |
| [Chemxy/algorithms_cj](https://gitcode.com/Chemxy/algorithms_cj) | 使用Cangjie语言实现经典数据结构和算法 | Chemxy | ★ 1 / Fork 1 | 1 year ago · 低活跃 | a |
| [2401_82796943/cj_search_algorithm](https://gitcode.com/2401_82796943/cj_search_algorithm) | 使用仓颉实现的多种搜索算法。 | 2401_82796943 | ★ 1 / Fork 0 | 7 months ago · 维护中 | c,s |
| [aibrary/glob](https://gitcode.com/aibrary/glob) | Shell 风格通配符匹配库 | aibrary | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,g |
| [gtn1024/snowflake4cj](https://gitcode.com/gtn1024/snowflake4cj) | Snowflake algorithm for Cangjie | gtn1024 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | g,s |
| [linluo86/algorithmCangjie](https://gitcode.com/linluo86/algorithmCangjie) | 通过仓颉语言来整理数据结构，从而学习算法 | linluo86 | ★ 1 / Fork 0 | 28 days ago · 活跃 | c,Cangjie,l |
| [louloulin/yao](https://gitcode.com/louloulin/yao) | 基于cangjieMagic和mastra的AI Agent框架 | louloulin | ★ 1 / Fork 0 | 1 year ago · 低活跃 | l,y |
| [ystyle/graph-cj](https://gitcode.com/ystyle/graph-cj) | 仓颉语言泛型图数据结构库 | ystyle | ★ 1 / Fork 0 | 18 days ago · 活跃 | g,y |
| [zhangyin_gitcode/naiveguardclauses](https://gitcode.com/zhangyin_gitcode/naiveguardclauses) | 一个简易的参数验证库。 | zhangyin_gitcode | ★ 0 / Fork 3 | 3 months ago · 活跃 | g,n,z |
| [MingGod/吉林大学-孙仕铭-仓颉实现CDMA正交码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=MingGod%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E5%AD%99%E4%BB%95%E9%93%AD-%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0CDMA%E6%AD%A3%E4%BA%A4%E7%A0%81) | 本项目使用华为自主研发的仓颉编程语言，完整实现了CDMA通信系统中的正交码序列生成与编解码演示。项目从C++版本成功迁移而来，展示了仓颉语言在通信算法实现和系统编程方面的能力。 | MingGod | ★ 0 / Fork 2 | 1 month ago · 活跃 | Cangjie,g,j,m,s,仓颉 |
| [zhangyin_gitcode/bandaid](https://gitcode.com/zhangyin_gitcode/bandaid) | 提供一些缺失的API，方便迁移项目。#仓颉# #cangjie# | zhangyin_gitcode | ★ 0 / Fork 2 | 4 months ago · 活跃 | b,g,z |
| [zhangyin_gitcode/naiveseedwork](https://gitcode.com/zhangyin_gitcode/naiveseedwork) | 一个领域驱动设计基础设施套件。#仓颉# #cangjie# | zhangyin_gitcode | ★ 0 / Fork 2 | 3 months ago · 活跃 | g,n,z |
| [music_boyi/linear_algebra](https://gitcode.com/music_boyi/linear_algebra) | 线性代数学习用库,仓颉编程语言 | music_boyi | ★ 0 / Fork 1 | 1 year ago · 低活跃 | a,b,l,m |
| [2301_82335610/cangjie-simple-graph](https://gitcode.com/2301_82335610/cangjie-simple-graph) | 仓颉语言案例：简单图结构实现 | 2301_82335610 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,g,s |
| [2401_82796943/cj_bp_lab0](https://gitcode.com/2401_82796943/cj_bp_lab0) | 使用仓颉实现反向传播bp算法 | 2401_82796943 | ★ 0 / Fork 0 | 3 months ago · 活跃 | b,c,l |
| [BigMiao/cjEdlib](https://gitcode.com/BigMiao/cjEdlib) | 一个简单的、使用仓颉语言编写的字符串比较和编辑距离算法库 | BigMiao | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,c,e,m |
| [bubbleyog/mathcj](https://gitcode.com/bubbleyog/mathcj) | 基于仓颉编程语言实现的数学计算库，包括公式、向量计算和部分科学计算的实现 | bubbleyog | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,m |
| [caizhao/quill4cj](https://gitcode.com/caizhao/quill4cj) | — | caizhao | ★ 0 / Fork 0 | 5 days ago · 活跃 | c,q |
| [caizhao/umeng4cj](https://gitcode.com/caizhao/umeng4cj) | Umeng4cj是一个用仓颉语言封装的适用于鸿蒙系统的友盟统计SDK库。通过ArkInterop混合模式，在仓颉层桥接调用友盟官方鸿蒙SDK（`@umeng/analytics`），将友盟ArkTS/JS API封装为仓颉函数，供仓颉代码直接调用。 | caizhao | ★ 0 / Fork 0 | 1 month ago · 活跃 | u |
| [cangjie_no_1/good_cj](https://gitcode.com/cangjie_no_1/good_cj) | 用ai完成的 , 仓颉语言的 性能最佳实践 探索 | cangjie_no_1 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,n |
| [Cangjie-SIG/flashtext4cj](https://gitcode.com/Cangjie-SIG/flashtext4cj) | 一个相比正则表达式更快的关键词检索定位工具 （尚处开发阶段，暂不推荐应用于科研等严肃领域） | SIG | ★ 0 / Fork 0 | 2026-03-27 · 活跃 | Cangjie,f |
| [Cangjie-SIG/Indexer4cj](https://gitcode.com/Cangjie-SIG/Indexer4cj) | No description | SIG | ★ 0 / Fork 0 | 2024-10-24 · 低活跃 | Cangjie,i |
| [Cangjie-SIG/linear_algebra](https://gitcode.com/Cangjie-SIG/linear_algebra) | No description | SIG | ★ 0 / Fork 0 | 2025-06-28 · 低活跃 | — |
| [Cangjie-SIG/porter2_stemmer](https://gitcode.com/Cangjie-SIG/porter2_stemmer) | No description | SIG | ★ 0 / Fork 0 | 2025-06-11 · 低活跃 | — |
| [changeden/channel_cj](https://gitcode.com/changeden/channel_cj) | 基于 Go channel 模型的仓颉通道库，支持有缓冲和无缓冲并发通道 | changeden | ★ 0 / Fork 0 | 16 days ago · 活跃 | c |
| [flippedx/crc-cj](https://gitcode.com/flippedx/crc-cj) | crc校验码计算，支持CRC_16_USB、CRC_8_ROHC等常用算法 | flippedx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [nutuml/compare-versions4cj](https://gitcode.com/nutuml/compare-versions4cj) | 版本对比工具类 | nutuml | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,n,v |
| [PermissionDog/brainfuck4cj](https://gitcode.com/PermissionDog/brainfuck4cj) | brainfuck 的仓颉语言实现 | PermissionDog | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,d,p |
| [tian_shen_tu/soundex_code_cj](https://gitcode.com/tian_shen_tu/soundex_code_cj) | 这个包公开了一个语音算法。这意味着它得到一个特定的字符串（通常是人名），并将其转换成代码，然后可以将其与其他代码（其他名称）进行比较，以检查它们是否（可能）发音相同 | tian_shen_tu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,t |
| [voidstack/matrix-docker-cj](https://gitcode.com/voidstack/matrix-docker-cj) | 仓颉实现docker | voidstack | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,m,v |
| [yixuan-space/doubao_cangjie](https://gitcode.com/yixuan-space/doubao_cangjie) | DouBao 是一个使用华为自主研发的仓颉(Cangjie)编程语言构建的 HarmonyOS 原生应用。该应用集成了 DeepSeek API，提供流畅的 AI 对话体验，支持流式响应。 | yixuan-space | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,s |
| [ystyle/codegraph-cj](https://gitcode.com/ystyle/codegraph-cj) | 仓颉语言代码分析工具 - 依赖图、调用链 | ystyle | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,y |
| [ystyle/pbkdf2-cj](https://gitcode.com/ystyle/pbkdf2-cj) | PBKDF2 (Password-Based Key Derivation Function 2) 算法的仓颉语言实现 | ystyle | ★ 0 / Fork 0 | 4 months ago · 活跃 | p |
| [zhangyin_gitcode/naiveaisdk_wp](https://gitcode.com/zhangyin_gitcode/naiveaisdk_wp) | AI SDK for Cangjie. | zhangyin_gitcode | ★ 0 / Fork 0 | 2 months ago · 活跃 | g,n,w,z |
| [Zi_Cai/CRC4cj](https://gitcode.com/Zi_Cai/CRC4cj) | — | Zi_Cai | ★ 0 / Fork 0 | 4 days ago · 活跃 | c,z |
| [ZUT_仓颉/E4_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lcg101) | 作业4：编写实现一个常用算法的函数，如快速排序、二分查找等，可参考数据结构中常用算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E4_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ls540) | 作业4： 以下二选一： 编写实现一个常用算法的函数，如快速排序、二分查找等，可参考数据结构中常用算法 输入指定年月的日历，输入年、月，输出当月日历。提示，求星期几可以用蔡勒公式 以下一选一： 编写实现一个函数chessBoard，根据棋局输出国际象棋的局面。给一个8×8字符数组表示棋局，初始化为国际象棋的初始布局。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/sliding_window 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fsliding_window) | 本项目使用华为自研的仓颉编程语言，实现了经典的滑动窗口算法。主要聚焦于解决数组或列表中的子数组问题，核心功能包括计算固定或可变窗口大小下的最大值与最小值。通过仓颉语言的高性能特性，本实现旨在展示其在处理基础算法与数据结构时的简洁性与效率。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,s,w |
| [Zxy764982/leap_year](https://gitcode.com/Zxy764982/leap_year) | 用户可快速判断给定年份或DateTime对象是否为闰年。本项目提供简洁API，支持两种输入方式，严格遵循格里高利历规则，经全面测试，高性能且无额外依赖。【此简介由AI生成】 | Zxy764982 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,y,z |
| [梅科尔工作室/colorpicker4cj_OH 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Fcolorpicker4cj_OH) | ColorPicker 是一款基于 HSB 色彩模型设计的颜色选择器组件，使用仓颉（Cangjie）语言和 ArkUI for Cangjie 开发。 | 梅科尔工作室 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,m,o,p,s |
| [梅科尔工作室/seedrandom4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Fseedrandom4cj) | seedrandom4cj 是 JavaScript seedrandom 库的仓颉语言移植版本，提供多个高质量的伪随机数生成器（PRNG）算法，支持种子初始化和状态管理。 | 梅科尔工作室 | ★ 0 / Fork 0 | 4 months ago · 活跃 | m,s |

### UI、图形与多媒体（79）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/RGF_CJ](https://gitcode.com/Cangjie-SIG/RGF_CJ) | RGF是仓颉Windows系统下的通用渲染框架（兼应用开发框架）。RGF仓颉版（后续简称"RGF"）基于RGF(C/C++版)封装优化而来。RGF为开发者提供轻量化、安全、高性能以及高度一致性的2D渲染能力以及常用的桌面应用开发工具，并且提供对接Direct3D的相关接口，以满足开发者对3D画面渲染的需求。在Windows开发方面，RGF在子包内也提供开箱… | SIG | ★ 100 / Fork 6 | 2026-03-25 · 活跃 | c,Cangjie,r,s,仓颉 |
| [Cangjie-SIG/minimp3-cj](https://gitcode.com/Cangjie-SIG/minimp3-cj) | 一个完全由仓颉语言实现的高性能MP3解码器，参照著名的minimp3 C库重新实现。该项目提供了完整的MP3音频解码功能，支持将MP3文件转换为PCM音频数据。 并在其基础上增加输出为WAV音频文件支持。 | SIG | ★ 33 / Fork 0 | 2025-12-29 · 维护中 | c,m,s,仓颉 |
| [Cangjie-TPC/chart4cj](https://gitcode.com/Cangjie-TPC/chart4cj) | 一个包含各种类型图表的图表库 | TPC | ★ 20 / Fork 4 | 2025-07-22 · 低活跃 | c,h,p,t |
| [Cangjie-TPC/svg4cj](https://gitcode.com/Cangjie-TPC/svg4cj) | SVG 图片的解析器和渲染器，能够渲染大多数标准的 SVG 图像，性能好、内存占用低。 | TPC | ★ 20 / Fork 0 | 2026-06-06 · 活跃 | c,Cangjie,s,t,仓颉 |
| [Cangjie-TPC/overscroll-decor-cj](https://gitcode.com/Cangjie-TPC/overscroll-decor-cj) | 滚动装饰器 UI 组件，支持 RecyclerView、ListView、GridView、ViewPager、ScrollView、HorizontalScrollView、Image 等视图的边缘滚动效果。 | TPC | ★ 18 / Fork 1 | 2025-12-10 · 维护中 | Cangjie,d,o |
| [Cangjie-SIG/gui4cj](https://gitcode.com/Cangjie-SIG/gui4cj) | gui4cj 是一个用仓颉（Cangjie）语言编写的跨平台图形用户界面（GUI）库，使用 OpenGL 进行硬件加速渲染。 | SIG | ★ 17 / Fork 1 | 2026-01-27 · 维护中 | c,Cangjie,g,s,仓颉 |
| [Cangjie-TPC/droplet](https://gitcode.com/Cangjie-TPC/droplet) | 图像加载缓存库，致力于更高效、更轻便、更简单得加载图片。在图片列表滚动时候实现平滑滚动得效果。适用于 OHOS 系统。 | TPC | ★ 15 / Fork 3 | 2026-06-10 · 活跃 | c,Cangjie,d,h,p,t,仓颉 |
| [Cangjie-TPC/refresh-layout-cj](https://gitcode.com/Cangjie-TPC/refresh-layout-cj) | 支持设置动画的下拉刷新和上拉加载组件。支持设置内置动画的各种属性、自定义动画等。 | TPC | ★ 15 / Fork 0 | 2025-07-12 · 低活跃 | c,Cangjie,l,r,t,仓颉 |
| [Cangjie-TPC/circle-indicator-cj](https://gitcode.com/Cangjie-TPC/circle-indicator-cj) | 圆形指示器归一化组件，为 Tabs/Swiper 容器提供了多种自定义风格的指示器。支持圆形、长条、横幅、图标、携带中央视图的Tabs、固定位置 Tabs、胶囊风格固定位置 Tabs、携带角标固定位置 Tabs、可滑动 Tabs 等指示器功能。 | TPC | ★ 14 / Fork 1 | 2025-12-12 · 维护中 | c,Cangjie |
| [Cangjie-SIG/cj-cef](https://gitcode.com/Cangjie-SIG/cj-cef) | CEF(Chromium Embedded Framework)仓颉端封装扩展。作为仓颉桌面端开发框架， 实现基于html、css、 js和仓颉进行跨平台桌面开发的能力。底层使用C语言对CEF C API封装，天生具备高性能，同时还保留了CEF C API在仓颉端结构和接口的直接映射，可直接在仓颉端扩展CEF功能 | SIG | ★ 14 / Fork 0 | 2025-11-09 · 维护中 | — |
| [Cangjie-TPC/droplet-transformations](https://gitcode.com/Cangjie-TPC/droplet-transformations) | 图像转换库,提供了 高亮，滤镜，灰度， 虚幻， 马赛克， 漫画，像素，素描，漩涡， 油画， 暗边， 模糊等图像转换能力。适用于 OHOS 系统。 | TPC | ★ 13 / Fork 1 | 2026-06-10 · 活跃 | c,Cangjie,d,t,仓颉 |
| [Cangjie-SIG/image4cj](https://gitcode.com/Cangjie-SIG/image4cj) | 提供基础图片处理能力 | SIG | ★ 13 / Fork 0 | 2025-07-02 · 低活跃 | c,i,s |
| [Cangjie-TPC/avif-ffi](https://gitcode.com/Cangjie-TPC/avif-ffi) | avif-ffi是一个对avif图片进行解码显示的仓颉库，解码后静态avif图片和动态avif图片都可以显示在控件上。 | TPC | ★ 12 / Fork 10 | 2026-07-24 · 活跃 | a,c,Cangjie,f,t,仓颉 |
| [Cangjie-TPC/lottie4cj](https://gitcode.com/Cangjie-TPC/lottie4cj) | 基于 Json 的动画库。它可以解析 Adobe After Effects 软件通过 Bodymovin 插件导出的 Json格式的动画，并在移动设备上进行本地渲染。支持动画播放/暂停/停止，设置播放速度，设置动画播放方向。适用于 OHOS 系统。 | TPC | ★ 12 / Fork 4 | 2026-06-05 · 活跃 | Cangjie,h,l,p,t |
| [Cangjie-TPC/svga-cj](https://gitcode.com/Cangjie-TPC/svga-cj) | SVGA 格式的动画展示，支持动画播放、暂停、快进等功能。 | TPC | ★ 12 / Fork 3 | 2026-06-04 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-SIG/ratatui](https://gitcode.com/Cangjie-SIG/ratatui) | No description | SIG | ★ 12 / Fork 2 | 2026-01-09 · 维护中 | c,Cangjie,r,s |
| [Cangjie-TPC/ijkplayer-ffi](https://gitcode.com/Cangjie-TPC/ijkplayer-ffi) | 基于 FFmpeg 的视频播放器，包括视频播放、暂停、停止、重置、释放、前进、后退、倍数播放、循环播放、设置音量、屏幕常亮等。适用于 OHOS 系统。 | TPC | ★ 12 / Fork 0 | 2025-09-08 · 维护中 | — |
| [raozj/RGF_UI](https://gitcode.com/raozj/RGF_UI) | RGF_UI是基于RGF_CJ开发的Windows平台控件库，旨在为开发者提供开箱即用的GUI组件，这些组件支持通过主题统一修改配色，也支持独立调整个体样式。 | raozj | ★ 12 / Fork 0 | 8 months ago · 维护中 | r,u |
| [Cangjie-TPC/qrcode4cj](https://gitcode.com/Cangjie-TPC/qrcode4cj) | 解析/生成多种类型的一维码/二维码，包括 QRCode、Data Matrix、PDF417 barcode、Aztec barcode、CodeBar、Code128、Code39、Code93、EAN13、EAN8、ITF、UPC-A、UPC-E、UPC/EAN、MaxiCode、RSS barcode(RSS-14、RSS-Expanded)。 | TPC | ★ 11 / Fork 4 | 2026-07-06 · 活跃 | h,p,q |
| [Cangjie-TPC/gifdrawable4cj](https://gitcode.com/Cangjie-TPC/gifdrawable4cj) | GIF 图像渲染库，支持播放、暂停、调节 GIF 播放速率、设置显示大小、支持不同的拉伸类型。适用于 OHOS 系统。 | TPC | ★ 11 / Fork 2 | 2025-07-09 · 低活跃 | c,Cangjie,g,h,p,t |
| [Cangjie-TPC/rounded-image-view-cj](https://gitcode.com/Cangjie-TPC/rounded-image-view-cj) | 实现图片的圆角显示效果的图片控件。支持多种缩放类型、多种背景平铺类型、多种样式效果、支持多种图片资源数据绘制。 | TPC | ★ 11 / Fork 2 | 2026-06-12 · 活跃 | c,Cangjie,i,r,t,v,仓颉 |
| [Cangjie-TPC/newbie-guide-cj](https://gitcode.com/Cangjie-TPC/newbie-guide-cj) | 高亮型新手引导组件，通过高亮区域与蒙版背景的明暗度对比，使用户快速锁定重点功能，快速掌握应用基本使用方法。 | TPC | ★ 11 / Fork 1 | 2025-12-10 · 维护中 | Cangjie,g,n,t |
| [Cangjie-TPC/text-layout-cj](https://gitcode.com/Cangjie-TPC/text-layout-cj) | 可定制多种样式的文本构建工具，包括字体间距、大小、颜色、布局方式、富文本高亮显示等。 | TPC | ★ 11 / Fork 1 | 2025-07-04 · 低活跃 | l,t |
| [Cangjie-TPC/swipe-item-cj](https://gitcode.com/Cangjie-TPC/swipe-item-cj) | 支持左侧和右侧的滑动布局的组件库。 | TPC | ★ 10 / Fork 0 | 2025-07-04 · 低活跃 | c,Cangjie,i,s,t |
| [Cangjie-TPC/mp3tag4cj](https://gitcode.com/Cangjie-TPC/mp3tag4cj) | 用于读取、写入、添加和删除 ID3v1、ID3v2 标签。标签表示内容支持 ISO-8859-1，UTF-16LE，UTF-16BE，UTF-8 4种编码； 读取音频数据帧帧头包含的数据信息；判断 VBR 文件，获得每个音频数据帧的位率；在音频数据帧结尾和 ID3v1 标记之间添加或删除自定义标签。 | TPC | ★ 9 / Fork 3 | 2026-06-11 · 活跃 | c,Cangjie,h,m,p |
| [Cangjie-TPC/swipe-layout-cj](https://gitcode.com/Cangjie-TPC/swipe-layout-cj) | 用于设置屏幕顶部、底部、左侧和右侧的滑动布局的组件。 | TPC | ★ 9 / Fork 2 | 2025-12-08 · 维护中 | c,Cangjie,l,s |
| [Cangjie-TPC/wheel-picker-cj](https://gitcode.com/Cangjie-TPC/wheel-picker-cj) | 多种选择器，包括时间选择器、地区选择器的三级联动、年、月、日选择器、自定义选择器。支持设置选择器多种样式，包括：文本样式、幕布样式、数据项间隔等。 | TPC | ★ 9 / Fork 2 | 2025-12-15 · 维护中 | c,Cangjie,p,t,w |
| [Cangjie-TPC/mp4parser4cj](https://gitcode.com/Cangjie-TPC/mp4parser4cj) | 读取、写入 mp4 格式音视频文件编辑的工具，包括音视频合成、裁剪、批量合成。 | TPC | ★ 9 / Fork 1 | 2026-06-09 · 活跃 | c,h,m |
| [Cangjie-TPC/rebound4cj](https://gitcode.com/Cangjie-TPC/rebound4cj) | 模拟弹簧动力学，实现弹簧动画效果。适用于 OHOS 系统。 | TPC | ★ 9 / Fork 0 | 2026-06-05 · 活跃 | c,Cangjie,h,p,r,t |
| [Cangjie-TPC/videocache4cj](https://gitcode.com/Cangjie-TPC/videocache4cj) | 边播放边缓存的库，支持自定义设置缓存文件夹位置、设置最大缓存数据清理策略、添加请求头、使用自定义的缓存文件命名规则、注册/取消缓存进度监听器、设置自定义的缓存文件清理规则。 | TPC | ★ 9 / Fork 0 | 2025-07-09 · 低活跃 | t,v |
| [Cangjie-TPC/lyric-view-cj](https://gitcode.com/Cangjie-TPC/lyric-view-cj) | 音乐播放器自动滚动歌词 UI 组件。 | TPC | ★ 8 / Fork 2 | 2025-12-25 · 维护中 | c,Cangjie,l,t,v |
| [Cangjie-TPC/photoview4cj](https://gitcode.com/Cangjie-TPC/photoview4cj) | 支持图片缩放、平移、旋转的浏览组件。 | TPC | ★ 8 / Fork 2 | 2026-06-05 · 活跃 | c,Cangjie,p |
| [Cangjie-SIG/aad4cj](https://gitcode.com/Cangjie-SIG/aad4cj) | aad4cj 是一个基于仓颉（Cangjie）语言实现的 AAC 音频码流解析与处理组件库。 | SIG | ★ 8 / Fork 1 | 2026-03-28 · 活跃 | a,c,Cangjie,s,仓颉 |
| [Cangjie-TPC/easing-functions-cj](https://gitcode.com/Cangjie-TPC/easing-functions-cj) | 动画效果库，该库的函数曲线可用于控制动画对象实现特定的运动轨迹。支持 BackEaseIn 、BackEaseOut 、ExpoEaseOut、SineEaseIn 、SineEaseOut 等多种动画效果。 | TPC | ★ 8 / Fork 1 | 2025-12-16 · 维护中 | c,Cangjie,e,f,t |
| [Cangjie-TPC/shimmer4cj](https://gitcode.com/Cangjie-TPC/shimmer4cj) | 一个简单灵活的为应用视图添加闪烁效果的库，主要有由左到右倾斜，由左到右竖直，由左到右圆形，由上到下水平等闪光效果。适用于 OHOS 系统。 | TPC | ★ 8 / Fork 1 | 2025-07-09 · 低活跃 | c,s,t |
| [Cangjie-SIG/dcmtk-cj](https://gitcode.com/Cangjie-SIG/dcmtk-cj) | DCMTK 3.9.6接口的仓颉封装 | SIG | ★ 8 / Fork 0 | 2025-11-19 · 维护中 | — |
| [Cangjie-TPC/banner4cj](https://gitcode.com/Cangjie-TPC/banner4cj) | 广告图片自动轮播、无限轮播、垂直轮播的组件库。 | TPC | ★ 8 / Fork 0 | 2025-12-15 · 维护中 | b,c,Cangjie,t |
| [Cangjie-TPC/easy-loading-cj](https://gitcode.com/Cangjie-TPC/easy-loading-cj) | 支持各类加载效果的 UI 组件，提供 27 种动画加载效果以及 Toast 功能。 | TPC | ★ 8 / Fork 0 | 2025-12-09 · 维护中 | c,e,l,t |
| [Cangjie-TPC/progress-bar-cj](https://gitcode.com/Cangjie-TPC/progress-bar-cj) | 自定义进度条显示效果的归一化组件。支持 Material 风格和 Smooth 风格的进度条展示。 | TPC | ★ 8 / Fork 0 | 2025-12-16 · 维护中 | b,c,p,t |
| [Cangjie-TPC/recyclerview-animators-cj](https://gitcode.com/Cangjie-TPC/recyclerview-animators-cj) | 带有动画的回收器视图 UI 组件，支持淡入淡出、缩放、滑动等动画效果。 | TPC | ★ 8 / Fork 0 | 2025-12-09 · 维护中 | a,r,t |
| [Cangjie-TPC/circle-image-view-cj](https://gitcode.com/Cangjie-TPC/circle-image-view-cj) | 图片处理库，可以将图片裁剪为圆形或者给图片设置边框。 | TPC | ★ 7 / Fork 1 | 2025-12-06 · 维护中 | c,i,t,v |
| [Cangjie-TPC/bullet-screen-cj](https://gitcode.com/Cangjie-TPC/bullet-screen-cj) | 弹幕框架，支持发送纯文本弹幕、GIF 弹幕、特殊弹幕、设置弹幕在屏幕的显示区域、滚动方向、控制弹幕播放状态等功能。 | TPC | ★ 7 / Fork 0 | 2025-12-09 · 维护中 | b,s |
| [Cangjie-TPC/apng4cj](https://gitcode.com/Cangjie-TPC/apng4cj) | APNG 格式的动画展示，支持本地上传 apng 文件、解析并播放。用于启动页动画、商品动画等。 | TPC | ★ 5 / Fork 0 | 2025-04-27 · 低活跃 | a,c,Cangjie |
| [Cangjie-TPC/large-image-cj](https://gitcode.com/Cangjie-TPC/large-image-cj) | 支持加载图像、缩放图像、拖动图像、双击放大图像。 | TPC | ★ 5 / Fork 0 | 2026-06-05 · 活跃 | i,l,t |
| [knower/minimp3_cj](https://gitcode.com/knower/minimp3_cj) | 一个完全由仓颉语言实现的高性能MP3解码器，参照著名的minimp3 C库重新实现。该项目提供了完整的MP3音频解码功能，支持将MP3文件转换为PCM音频数据。 并在其基础上增加输出为WAV音频文件支持。 本项目开发时测试使用仓颉SDK1.0.0版本 | knower | ★ 4 / Fork 1 | 9 months ago · 维护中 | c,k,m |
| [Cangjie-SIG/cjfltk](https://gitcode.com/Cangjie-SIG/cjfltk) | 轻量化跨平台 GUI 框架 | SIG | ★ 4 / Fork 0 | 2025-12-21 · 维护中 | c,s |
| [Cangjie-TPC/autofit-textview-cj](https://gitcode.com/Cangjie-TPC/autofit-textview-cj) | 能根据占用空间自动调整字体大小的 TextView 组件库，可以自动调整文字以完美贴合显示边界 。 | TPC | ★ 3 / Fork 0 | 2025-01-07 · 低活跃 | a,c,Cangjie,t |
| [Cangjie-TPC/gv-code-cj](https://gitcode.com/Cangjie-TPC/gv-code-cj) | 带干扰线和干扰点的字母数字验证码组件。用于验证用户身份的安全机制，可以有效防止自动化脚本（如网络爬虫）的恶意攻击，提高网站的安全性。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | c,g,t |
| [Cangjie-TPC/list-view-cj](https://gitcode.com/Cangjie-TPC/list-view-cj) | 为 List 组件创建多种条目类型的 UI 组件库。支持设置组件基础属性、排列方向、列表间距、滑动效果、链式联动效果等。 | TPC | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | c,Cangjie,l,t,v |
| [Cangjie-TPC/webrtc-ffi](https://gitcode.com/Cangjie-TPC/webrtc-ffi) | webrtc4cj 是一个基于仓颉版终端提供WebRTC的接口封装，并在C++层适配了视频的采集、渲染及编解码等模块。 | TPC | ★ 2 / Fork 0 | 2026-04-03 · 活跃 | — |
| [iJet/ratatui-cj](https://gitcode.com/iJet/ratatui-cj) | Rust终端UI项目ratatui的仓颉实现 | iJet | ★ 2 / Fork 0 | 17 days ago · 活跃 | i,j,r |
| [Rr125/raylib_cj](https://gitcode.com/Rr125/raylib_cj) | raylib 仓颉语言的绑定，一个简单的GUI库 | Rr125 | ★ 2 / Fork 0 | 2 months ago · 活跃 | c,r |
| [yuan_1992/cjgui](https://gitcode.com/yuan_1992/cjgui) | 基于 Cangjie 1.1.0 的 Windows 原生 GUI 框架，通过 FFI 调用 Direct2D / DirectWrite 实现自绘渲染 | yuan_1992 | ★ 2 / Fork 0 | 19 days ago · 活跃 | c |
| [Cangjie-TPC/libpag-ffi](https://gitcode.com/Cangjie-TPC/libpag-ffi) | libpag-cj是一款在仓颉环境下适配的动态图形渲染库，它基于腾讯的 libpag 开发，并对 libpag 进行了封装。libpag 旨在为仓颉开发者提供高效的矢量动画与序列帧渲染支持。 | TPC | ★ 1 / Fork 0 | 2025-12-11 · 维护中 | c,Cangjie,f,l,t |
| [Cangjie-TPC/lottie-ffi](https://gitcode.com/Cangjie-TPC/lottie-ffi) | lottie动画的加强版本。 | TPC | ★ 1 / Fork 0 | 2025-11-03 · 维护中 | — |
| [Cangjie-TPC/vap-ffi](https://gitcode.com/Cangjie-TPC/vap-ffi) | 强大动画粒子特效渲染组件。 | TPC | ★ 1 / Fork 0 | 2025-12-18 · 维护中 | — |
| [Cangjie-TPC/video-trimmer-cj](https://gitcode.com/Cangjie-TPC/video-trimmer-cj) | video-trimmer提供视频剪辑能力的三方库。 | TPC | ★ 1 / Fork 0 | 2025-12-13 · 维护中 | c,v |
| [czj18069891265/cj_image](https://gitcode.com/czj18069891265/cj_image) | — | czj18069891265 | ★ 1 / Fork 0 | 3 months ago · 活跃 | c,i |
| [SeanXDO/Tickle](https://gitcode.com/SeanXDO/Tickle) | 仓颉跨平台GUI框架 | SeanXDO | ★ 1 / Fork 0 | 5 months ago · 活跃 | s,t,x |
| [tb0912/silkui_cj](https://gitcode.com/tb0912/silkui_cj) | 仓颉语言，arkts通用组件库 | tb0912 | ★ 1 / Fork 0 | 7 months ago · 维护中 | c,s,t |
| [开源仓颉第三方开发者社区/derive_builder 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fderive_builder) | Derive Builder 是一个用于自动生成构建器模式的宏库。它允许开发者通过简单的注解自动生成构建器类，从而简化对象的创建过程。构建器模式特别适用于需要创建具有多个可选参数的复杂对象的场景。 | 开源仓颉第三方开发者社区 | ★ 1 / Fork 0 | 9 months ago · 维护中 | b,Cangjie,d,o |
| [Cangjie-SIG/CJTUI](https://gitcode.com/Cangjie-SIG/CJTUI) | No description | SIG | ★ 0 / Fork 1 | 2026-01-07 · 维护中 | c,Cangjie |
| [AmiracleTa/qrcode4cj](https://gitcode.com/AmiracleTa/qrcode4cj) | 使用仓颉实现的 QR Code Model 2 生成器 | AmiracleTa | ★ 0 / Fork 0 | 6 days ago · 活跃 | a,q,t |
| [cangjie_no_1/kaca_js_parse](https://gitcode.com/cangjie_no_1/kaca_js_parse) | JavaScript parser written in CangJie (仓颉语言), equivalent to @babel/parser | cangjie_no_1 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,j,k,n |
| [Cangjie-SIG/imgui4cj](https://gitcode.com/Cangjie-SIG/imgui4cj) | No description | SIG | ★ 0 / Fork 0 | 2024-09-09 · 低活跃 | i,s |
| [Cangjie-TPC/amount-input-text-cj](https://gitcode.com/Cangjie-TPC/amount-input-text-cj) | 金额输入组件，带有金融业专用版数字键盘。支持常用币种输入、支持键盘乱序、自定义标题等动态化配置。数据未进行网络传输及本地存储，所输入的内容不会被捕捉，相比于系统输入法，更加安全。 | TPC | ★ 0 / Fork 0 | 2025-01-08 · 低活跃 | a,i,t |
| [Cangjie-TPC/floating-menu-cj](https://gitcode.com/Cangjie-TPC/floating-menu-cj) | 悬浮菜单 UI 组件，高度可定制，支持标签、图标、水波纹、悬浮操作按钮和标签背景颜色设置等。 | TPC | ★ 0 / Fork 0 | 2025-01-07 · 低活跃 | Cangjie,f,m,t |
| [Cangjie-TPC/vlayout4cj](https://gitcode.com/Cangjie-TPC/vlayout4cj) | vlayout4cj 能够处理列表、网格和其它布局在同一个视图的复杂情况，使用者可以使用已设定好的容器布局组件，也可以在此基础上自定义容器布局组件 | TPC | ★ 0 / Fork 0 | 2025-12-12 · 维护中 | t,v |
| [Mophy/lyric-view-cj](https://gitcode.com/Mophy/lyric-view-cj) | 音乐播放器自动滚动歌词组UI件 | Mophy | ★ 0 / Fork 0 | 11 months ago · 维护中 | l,m,v |
| [tt88tt/cjRaygui](https://gitcode.com/tt88tt/cjRaygui) | raygui binding | tt88tt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,r,t |
| [tybb2026/tycj-gui](https://gitcode.com/tybb2026/tycj-gui) | 面向 HarmonyOS 优先的跨平台 GUI 开发框架，采用声明式 UI 设计理念，基于仓颉编程语言构建 | tybb2026 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,t |
| [unravel/cj_result_builder](https://gitcode.com/unravel/cj_result_builder) | 类Swift中的resultBuilder | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,c,r,u |
| [wangzhepaohui/eudi_lib_cbor](https://gitcode.com/wangzhepaohui/eudi_lib_cbor) | 可用于 EUDI Wallet 开发中处理 CBOR 数据编码解码。项目为 DevEco Cangjie HAR 静态库，封装 TPC 库 cbor4cj 引擎，提供 SwiftCBOR 风格 CborValue 接口、tag-24 辅助工具及 RFC 8949 规范排序支持，包含 12 个验证测试。 | wangzhepaohui | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,e,l,w |
| [wangzhepaohui/eudi_lib_mdoc_data_model](https://gitcode.com/wangzhepaohui/eudi_lib_mdoc_data_model) | — | wangzhepaohui | ★ 0 / Fork 0 | 18 days ago · 活跃 | d,e,l,m,w |
| [wangzhepaohui/eudi_lib_mdoc_transfer](https://gitcode.com/wangzhepaohui/eudi_lib_mdoc_transfer) | — | wangzhepaohui | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,l,m,t,w |
| [wangzhepaohui/eudi_lib_x509](https://gitcode.com/wangzhepaohui/eudi_lib_x509) | — | wangzhepaohui | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,l,w,x |
| [WendaGu1234/AdvancedUIComponent](https://gitcode.com/WendaGu1234/AdvancedUIComponent) | AdvancedUIComponent, ArkTS to Cangjie,高级组件开发 | WendaGu1234 | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,g,u,w |
| [ystyle/scribe-cj](https://gitcode.com/ystyle/scribe-cj) | 适用于 Cangjie 的二进制读写工具包：支持字节序的整数 I/O、varint/vluint 以及记录对齐 | ystyle | ★ 0 / Fork 0 | 6 days ago · 活跃 | s,y |
| [梅科尔工作室/viewswitcher4cj_OH 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Fviewswitcher4cj_OH) | ViewSwitcher 是一个功能强大的视图切换组件，从 ArkTS 迁移到仓颉语言，支持： 双视图滑动切换动画 - 流畅的视图切换体验 自动播放功能 - 使用 animateTo 循环实现定时切换 手动控制 - 支持上一个/下一个切换 高度可定制 - 动画时长、曲线、尺寸均可配置 回调支持 - 支持点击监听和初始化完成回调 | 梅科尔工作室 | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,o,s,v |

### 系统、并发与互操作（40）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie/cangjie_runtime](https://gitcode.com/Cangjie/cangjie_runtime) | 仓颉编程语言运行时与标准库。 | Cangjie | ★ 639 / Fork 945 | 18 hours ago · 活跃 | c,Cangjie,r,仓颉 |
| [Cangjie/cangjie_python_interop](https://gitcode.com/Cangjie/cangjie_python_interop) | — | Cangjie | ★ 303 / Fork 7 | 18 hours ago · 活跃 | c,i,p |
| [Cangjie/cangjie_js_interop](https://gitcode.com/Cangjie/cangjie_js_interop) | — | Cangjie | ★ 270 / Fork 8 | 1 month ago · 活跃 | c,Cangjie,i,j,仓颉 |
| [Cangjie-TPC/charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj) | 常用的字符编码集合库。 | TPC | ★ 33 / Fork 5 | 2026-06-11 · 活跃 | c,Cangjie,h,p,t,仓颉 |
| [Cangjie-TPC/config-server](https://gitcode.com/Cangjie-TPC/config-server) | Config Server 是仓颉实现的可横向扩展、集中式的配置服务器，它用于集中管理应用程序各个环境下的配置。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 29 / Fork 2 | 2025-12-16 · 维护中 | s,t,仓颉 |
| [Cangjie-TPC/io4cj](https://gitcode.com/Cangjie-TPC/io4cj) | 是 HttpClient 的底层 IO 库，是对仓颉 IO 库的补充，使访问、存储和处理数据变得更加容易。核心概念是 Source 和 Sink，类似于仓颉的 InputStream 和 OutputStream。 | TPC | ★ 27 / Fork 2 | 2025-10-10 · 维护中 | Cangjie,h,i,p,t |
| [Cangjie-TPC/base64-cj](https://gitcode.com/Cangjie-TPC/base64-cj) | ArkTS调用Cangjie版base64编解码算法实现 | TPC | ★ 21 / Fork 0 | 2025-07-12 · 低活跃 | — |
| [Cangjie-TPC/mime4cj](https://gitcode.com/Cangjie-TPC/mime4cj) | MIME 格式解析库。 | TPC | ★ 14 / Fork 3 | 2026-06-11 · 活跃 | c,Cangjie,m,t |
| [Cangjie-SIG/cactor](https://gitcode.com/Cangjie-SIG/cactor) | No description | SIG | ★ 13 / Fork 0 | 2026-05-06 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-TPC/hystrix-cj](https://gitcode.com/Cangjie-TPC/hystrix-cj) | 仓颉熔断降级框架。支持以并发数、TPS、平均响应时间、一段时间内的异常数作为判断指标，作熔断或降级操作。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 10 / Fork 2 | 2025-08-05 · 维护中 | c,Cangjie,h |
| [Cangjie-TPC/ribbon4cj](https://gitcode.com/Cangjie-TPC/ribbon4cj) | 仓颉原生微服务客户端负载均衡器。支持随机/轮询/基于响应时间为权重的轮询算法；支持动态负载均衡列表，支持Apollo/Eureka注册中心；内置区域感知的负载均衡器实现。适配仓颉1.0.0 LTS版本。 | TPC | ★ 9 / Fork 1 | 2025-09-11 · 维护中 | c,Cangjie,r,t,仓颉 |
| [Cangjie-TPC/config-client](https://gitcode.com/Cangjie-TPC/config-client) | Config Client用于操作存储在 Config Server 中的配置内容。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 7 / Fork 1 | 2024-12-25 · 低活跃 | c,Cangjie,t |
| [Cangjie-TPC/quartz4cj](https://gitcode.com/Cangjie-TPC/quartz4cj) | quartz4cj 是功能丰富的开源作业调度库，可通过触发器设置作业定时运行规则，控制作业的运行时间。感谢上海赛可出行科技服务有限公司架构团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 6 / Fork 1 | 2024-10-31 · 低活跃 | c,Cangjie,q,t |
| [PermissionDog/is-png-cj](https://gitcode.com/PermissionDog/is-png-cj) | 判断文件格式是否为png的第三方库 | PermissionDog | ★ 5 / Fork 1 | 1 year ago · 低活跃 | c,d,i,p |
| [Vinx911/cjgtk4](https://gitcode.com/Vinx911/cjgtk4) | Cangjie binding for GTK4 | Vinx911 | ★ 5 / Fork 1 | 1 year ago · 低活跃 | c,v |
| [Cangjie-SIG/cjbind-cangjie](https://gitcode.com/Cangjie-SIG/cjbind-cangjie) | No description | SIG | ★ 3 / Fork 3 | 2026-04-16 · 活跃 | c |
| [Cangjie-SIG/distributed-actors-cj](https://gitcode.com/Cangjie-SIG/distributed-actors-cj) | 一个为仓颉编程语言设计的分布式 Actor 框架，提供基于 Actor 的并发与分布式计算能力，支持本地与远程通信，并可通过 MCP 协议将 Actor 以工具形式集成到 AI 智能体中。 | SIG | ★ 2 / Fork 0 | 2026-03-18 · 活跃 | a,c,d,s |
| [tt88tt/cjRaylib](https://gitcode.com/tt88tt/cjRaylib) | cangjie binding of raylib | tt88tt | ★ 2 / Fork 0 | 22 days ago · 活跃 | c,r,t |
| [Neila/cangjie-ffi-union](https://gitcode.com/Neila/cangjie-ffi-union) | 使用宏，为cangjie的ffi接口，提供模拟union的支持 | Neila | ★ 1 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,f,n,u,仓颉 |
| [raozj/rycj](https://gitcode.com/raozj/rycj) | 仓颉编程语言的跨平台（系统）辅助开发工具库，主要提供一些仓颉编程语言的系统级别操作能力，辅助开发者进行程序开发； | raozj | ★ 1 / Fork 0 | 2 months ago · 活跃 | r |
| [SeanXDO/fastexcel4cj](https://gitcode.com/SeanXDO/fastexcel4cj) | 高性能 Excel 文件读写库，使用仓颉语言实现，参照 FastExcel 设计 | SeanXDO | ★ 1 / Fork 0 | 6 months ago · 活跃 | f,s,x |
| [yishengTH/Kettle](https://gitcode.com/yishengTH/Kettle) | 仓颉后端生态的应用装配与运行时平台层，它的职责是把已经存在的底层与框架能力，组织成一个可启动、可部署、可治理、可扩展的应用形态 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | k,t,y |
| [cj-awesome/filesize](https://gitcode.com/cj-awesome/filesize) | filesize 是一个用仓颉语言编写的文件大小格式化工具库，用于将字节数转换为人类可读的文件大小格式（如 KB、MB、GB 等）。 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,f |
| [deed/clang-api-cj](https://gitcode.com/deed/clang-api-cj) | version independent clang binding for cangjie | deed | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c,d |
| [gao863/cj_interop](https://gitcode.com/gao863/cj_interop) | 仓颉互操作demo | gao863 | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,i |
| [JumpMasterJJ/cangjie-tree-sitter](https://gitcode.com/JumpMasterJJ/cangjie-tree-sitter) | Cangjie binding for tree-sitter. | JumpMasterJJ | ★ 0 / Fork 0 | 5 months ago · 活跃 | c,Cangjie,j,m,t |
| [qingss0/pthread4cj](https://gitcode.com/qingss0/pthread4cj) | Linux下在使用仓颉语言时可以通过CFunc 调用pthread | qingss0 | ★ 0 / Fork 0 | 1 month ago · 活跃 | q |
| [ruanchen/arkcompiler_cangjie_ark_interop](https://gitcode.com/ruanchen/arkcompiler_cangjie_ark_interop) | 仓颉互操作库 | ruanchen | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,Cangjie,i |
| [Starve_Tom/CommonLog](https://gitcode.com/Starve_Tom/CommonLog) | 使用仓颉语言写的一个 Log Utils 库 | Starve_Tom | ★ 0 / Fork 0 | 8 days ago · 活跃 | c,l,s,t |
| [tianyyyyy/dotenv](https://gitcode.com/tianyyyyy/dotenv) | 仓颉语言 dotenv 库 —— 从 .env 文件加载环境变量。 | tianyyyyy | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,t |
| [tinychong/verifyws](https://gitcode.com/tinychong/verifyws) | 仓颉编程语言知识库验证工作空间 - 系统化验证Cangjie语言特性和标准库 | tinychong | ★ 0 / Fork 0 | 2 months ago · 活跃 | v |
| [tt88tt/cj-wren](https://gitcode.com/tt88tt/cj-wren) | cangjie binding for wren-lang | tt88tt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,t,w |
| [tt88tt/cjLua](https://gitcode.com/tt88tt/cjLua) | cangjie binding of lua54 | tt88tt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,l,t |
| [tybb2026/tycj-async](https://gitcode.com/tybb2026/tycj-async) | 仓颉语言异步编程工具库 -- 协程池、Future/Promise、定时任务调度 | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | a |
| [xffish/complexible](https://gitcode.com/xffish/complexible) | 仓颉的复数运算库 | xffish | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,x |
| [ystyle/dotenv-cj](https://gitcode.com/ystyle/dotenv-cj) | 从.env文件中加载环境变量 | ystyle | ★ 0 / Fork 0 | 7 days ago · 活跃 | c,y |
| [ystyle/mmap-cj](https://gitcode.com/ystyle/mmap-cj) | 跨平台内存映射文件库，支持 Linux、macOS、Windows。 | ystyle | ★ 0 / Fork 0 | 6 days ago · 活跃 | m,y |
| [ystyle/zip-cj](https://gitcode.com/ystyle/zip-cj) | ZIP 归档文件的仓颉语言实现，移植自 Go 的 `archive/zip` 包。 | ystyle | ★ 0 / Fork 0 | 3 months ago · 活跃 | y,z |
| [ZIYAN137/rustix4cj](https://gitcode.com/ZIYAN137/rustix4cj) | rustix4cj 是一个通过 C 语言 FFI（外部函数接口）封装系统调用的库。 | ZIYAN137 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r,z |
| [Zxilly/test_cj_ffi](https://gitcode.com/Zxilly/test_cj_ffi) | — | Zxilly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f |

### 测试与质量（12）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/BACnetCodec4cj](https://gitcode.com/Cangjie-SIG/BACnetCodec4cj) | BACnet通讯协议的编码解码库。 BACnet是楼宇自控、HVAC设备领域的重要ISO标准通讯协议，在楼宇自动行业有着极高的使用率。本项目协议文档参照的是ISO16484-5-2022版本。本项目测试参照BACNET协议栈测试工具VTS Visual Test Shell(VTS) v3.6.7 的生成结果作为测试标准。目前本项目还在制作当中。 | SIG | ★ 26 / Fork 0 | 2025-10-20 · 维护中 | b,Cangjie |
| [leaveWhite9088/simpleioc](https://gitcode.com/leaveWhite9088/simpleioc) | simpleioc是一款基于反射的依赖注入容器。IOC容器允许注册类型和创建实例，而不必直接在代码中创建对象实例，这有助于降低代码间的耦合度，提高代码的模块化和可测试性。 | leaveWhite9088 | ★ 14 / Fork 1 | 10 months ago · 维护中 | l,s,w |
| [Cangjie-SIG/assert4cj](https://gitcode.com/Cangjie-SIG/assert4cj) | assert4cj 是一个基于函数断言的单元测试库, 受到 junit-jupiter-api 启发。 | SIG | ★ 2 / Fork 0 | 2024-09-08 · 低活跃 | a,c,Cangjie,s |
| [cangjie_no_1/nova_assert](https://gitcode.com/cangjie_no_1/nova_assert) | 自用的 assert 工具库 , 主要用于在代码里面写一些测试代码 , 当然 任何人都可以用 , | cangjie_no_1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,n |
| [Mophy/lyricView4cj_DT](https://gitcode.com/Mophy/lyricView4cj_DT) | 测试DT | Mophy | ★ 0 / Fork 0 | 9 months ago · 维护中 | d,l,m,v |
| [Mophy/swipe-layout-cj-new](https://gitcode.com/Mophy/swipe-layout-cj-new) | 用于测试覆盖率 | Mophy | ★ 0 / Fork 0 | 8 months ago · 维护中 | l,m,n,s |
| [Mophy/vap_cj](https://gitcode.com/Mophy/vap_cj) | 性能测试 | Mophy | ★ 0 / Fork 0 | 9 months ago · 维护中 | m,v |
| [q1367841052/cangjie-minilisp](https://gitcode.com/q1367841052/cangjie-minilisp) | Cangjie MiniLisp interpreter course project with lexer, parser, evaluator, examples and tests. | q1367841052 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,m,q |
| [Xiaokang2022/cj-test](https://gitcode.com/Xiaokang2022/cj-test) | — | Xiaokang2022 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | t |
| [yirenxi20408/cangjie-templite_ATemplateEngine](https://gitcode.com/yirenxi20408/cangjie-templite_ATemplateEngine) | 基于仓颉 Cangjie 实现的轻量级模板引擎，移植自 AOSA《500 Lines or Less》中的 A Template Engine 章节。项目支持变量替换、点路径访问、条件判断、循环渲染、内置过滤器和自定义过滤器， 包含 README、设计文档、源码和单元测试。 | yirenxi20408 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,e,t,y |
| [zhangqiancheng/test-lib](https://gitcode.com/zhangqiancheng/test-lib) | 我测试用的仓颉三方库 | zhangqiancheng | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,t |
| [zhangqiancheng/testMyLib](https://gitcode.com/zhangqiancheng/testMyLib) | 使用我的测试库 | zhangqiancheng | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,m,t,z |

### 基础与通用（288）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/fountain](https://gitcode.com/Cangjie-SIG/fountain) | 一个用于服务器应用开发的综合工具库。 - 零配置文件 - 环境变量和命令行参数配置 - 约定优于配置 - 深刻利用仓颉语言特性 - 只需要开发动态链接库，fboot负责加载、初始化并运行。 | SIG | ★ 358 / Fork 60 | 2026-07-26 · 活跃 | c,Cangjie,f,s,仓颉 |
| [Cangjie-TPC/markdown4cj](https://gitcode.com/Cangjie-TPC/markdown4cj) | Markdown 解析和展示，排版语法简洁，使用高效便捷，扩展性强，用户可自定义 Markdown 显示样式。适用于 OHOS 系统。 | TPC | ★ 77 / Fork 19 | 2026-07-22 · 活跃 | c,Cangjie,h,m,p,t,仓颉 |
| [Cangjie-TPC/syslog4cj](https://gitcode.com/Cangjie-TPC/syslog4cj) | Syslog4cj 是一个用于处理系统日志（Syslog）的库，它提供了丰富的功能和灵活的配置选项，支持多种系统日志协议，如 TCP、UDP 等。 | TPC | ★ 58 / Fork 53 | 2026-06-06 · 活跃 | c,Cangjie,s,t,仓颉 |
| [Cangjie-TPC/CJQT](https://gitcode.com/Cangjie-TPC/CJQT) | Qt是一个跨平台的C++图形用户界面应用程序开发框架。CJQT是基于仓颉语言对QT进行封装的三方库，侧重QT的widgets封装。目标为使用CJQT可以实现用户界面交互。感谢上海双洪信息技术有限公司为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 52 / Fork 8 | 2025-02-08 · 低活跃 | c,Cangjie,t,仓颉 |
| [CJMP/Docs](https://gitcode.com/CJMP/Docs) | 应用开发者快速入门、框架开发者快速入门等文档 | CJMP | ★ 45 / Fork 16 | 12 days ago · 活跃 | c,d |
| [weixin_63681863/net4cj-2025](https://gitcode.com/weixin_63681863/net4cj-2025) | — | weixin_63681863 | ★ 43 / Fork 41 | 1 month ago · 活跃 | n,w |
| [Cangjie-SIG/仓颉编程快速上手-刘玥_张荣超 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E5%88%98%E7%8E%A5_%E5%BC%A0%E8%8D%A3%E8%B6%85) | 《仓颉编程快速上手》专门为仓颉编程语言的初学者量身打造，目标是助力读者快速上手仓颉编程语言。书中每个章节均配备了翔实的示例，旨在加深读者对所学内容的理解，并提升应用仓颉编程语言的能力。通过学习本书，读者可以快速掌握仓颉语言编程技能，为迈向全场景应用开发高手之路奠定坚实的基础。 | SIG | ★ 43 / Fork 14 | 1 year ago · 低活跃 | c,Cangjie,s,z,仓颉 |
| [Cangjie-TPC/editor4cj](https://gitcode.com/Cangjie-TPC/editor4cj) | OHOS 多语言代码编辑器。用户通过定义 EditorKit 类对象，实现对语言(language)、字体大小(fontSize)、主题(theme)、编辑器文本(text)、代码编辑器高度(height)、代码编辑器宽度(width)、自动缩进(tabLen)的设置，进而实现代码高亮、滚动条、行号显示、自动补全等功能，当前只支持 utf8 编码。适用于 … | TPC | ★ 38 / Fork 3 | 2026-07-07 · 活跃 | c,Cangjie,e,h,p,t,仓颉 |
| [Cangjie-TPC/CJson](https://gitcode.com/Cangjie-TPC/CJson) | Json 序列化/反序列化工具，自动给被标记的类增加fromJson()和toJson()等方法，使其自身具备序列化/反序列化能力。支持功能：1.序列化标记（@JsonSerializable）2. 定制序列化属性名（@JsonName）3. 忽略属性（@JsonIgnore）4.序列化默认值 5.定制序列化和反序列化逻辑（IJsonSerializabl… | TPC | ★ 34 / Fork 8 | 2026-07-21 · 活跃 | c,t,仓颉 |
| [Cangjie-SIG/terminalcolor](https://gitcode.com/Cangjie-SIG/terminalcolor) | 符合直觉的终端颜色库，看一眼就会使用。 | SIG | ★ 31 / Fork 1 | 2026-03-21 · 活跃 | c,Cangjie,t,仓颉 |
| [Cangjie-TPC/fast-eventbus-cj](https://gitcode.com/Cangjie-TPC/fast-eventbus-cj) | 发布/订阅事件总线，为多线程应用程序中的高吞吐量而优化的强大事件总线。支持同步和异步事件发布、事件过滤功能。 | TPC | ★ 29 / Fork 1 | 2026-06-06 · 活跃 | c,e,f,t,仓颉 |
| [Cangjie-TPC/microservice](https://gitcode.com/Cangjie-TPC/microservice) | 仓颉语言实现的快速微服务开发框架。支持注册发现、远程过程调用、http协议、json协议、零侵入业务代码，实现自动装配、手动装配、自定义网络库装配3种模式。感谢上海赛可出行科技服务有限公司架构团队为仓颉编程语言 TPC 社区做出的贡献！ | TPC | ★ 26 / Fork 3 | 2024-08-02 · 低活跃 | — |
| [Cangjie-TPC/cjbind](https://gitcode.com/Cangjie-TPC/cjbind) | 将 C 头文件自动转换成仓颉 CFFI 声明文件，进一步提升 C 互操作开发效率。 | TPC | ★ 26 / Fork 2 | 2026-07-26 · 活跃 | — |
| [Cangjie-TPC/GISTools](https://gitcode.com/Cangjie-TPC/GISTools) | 地理信息系统工具库，处理常用的地理信息，包括坐标转换，几何计算，地图投影等功能。 | TPC | ★ 25 / Fork 0 | 2024-09-07 · 低活跃 | c,Cangjie,g,t,仓颉 |
| [Cangjie-TPC/commonmark4cj](https://gitcode.com/Cangjie-TPC/commonmark4cj) | 根据 CommonMark 规范（以及一些扩展）解析和呈现 Markdown 文本。 | TPC | ★ 24 / Fork 8 | 2026-07-17 · 活跃 | c,h,p,t,仓颉 |
| [Cangjie-TPC/cjfast_json](https://gitcode.com/Cangjie-TPC/cjfast_json) | cjfast_json是一个用仓颉语言编写的高性能JSON处理库，提供了快速的JSON序列化和反序列化功能。该库专为提升JSON处理效率而设计，支持标准JSON数据类型与仓颉语言原生数据结构的相互转换。 | TPC | ★ 24 / Fork 2 | 2026-01-31 · 活跃 | — |
| [Cangjie-TPC/zip4cj](https://gitcode.com/Cangjie-TPC/zip4cj) | 创建和解压 zip 压缩格式文件。 | TPC | ★ 22 / Fork 4 | 2026-02-24 · 活跃 | Cangjie,h,p,t,z |
| [Cangjie-TPC/log-cj](https://gitcode.com/Cangjie-TPC/log-cj) | 日志管理框架，支持控制台日志输出和文件日志输出，支持使用 Json 进行自定义配置。 | TPC | ★ 22 / Fork 3 | 2026-06-12 · 活跃 | c,Cangjie,h,l,p,t |
| [Cangjie-SIG/dateparse4cj](https://gitcode.com/Cangjie-SIG/dateparse4cj) | dateparse4cj 是一个基于 cangjie 标准库实现的高性能、功能丰富的日期时间解析库。它能够自动识别并解析多种格式的日期字符串，支持全球各种常见日期格式，包括各种区域标准、时区处理以及多语言日期表示。该库适合需要处理各种不同格式日期输入的应用程序。 | SIG | ★ 22 / Fork 1 | 2026-03-27 · 活跃 | c,Cangjie,d,s,仓颉 |
| [Cangjie-TPC/pinyin4cj](https://gitcode.com/Cangjie-TPC/pinyin4cj) | 用于将汉字转为拼音，支持词、句转换成拼音，简体/繁体中文字符转换成拼音，多音字符转换成拼音，简体、繁体中文字符互转，支持添加自定义字典，支持 Unicode 格式的字符 ü、支持声调符号、支持首字母格式。 | TPC | ★ 20 / Fork 5 | 2026-06-11 · 活跃 | c,Cangjie,h,p,t |
| [Cangjie-SIG/图解仓颉编程-刘玥_张荣超 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E5%9B%BE%E8%A7%A3%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B-%E5%88%98%E7%8E%A5_%E5%BC%A0%E8%8D%A3%E8%B6%85) | 《图解仓颉编程》系列图书采用广受好评的图解方式，并借助丰富的示例程序，力争做到通俗易懂、深入浅出地阐明仓颉编程语言的相关知识。本系列图书全彩印刷，图文并茂，附有全彩的学习路径图和知识脉络图。 | SIG | ★ 19 / Fork 2 | 1 year ago · 低活跃 | c,Cangjie,t,z |
| [Cangjie-TPC/compress4cj](https://gitcode.com/Cangjie-TPC/compress4cj) | 用于处理多种压缩文件的库，主要包括存档格式 rar、tar、zip 格式, 流式包含bzip2、gzip、zlib、deflate 格式的压缩/解压功能，只支持 rar4.0 文件解压功能。 | TPC | ★ 19 / Fork 2 | 2025-09-01 · 维护中 | c,Cangjie,h,p,t |
| [Cangjie-TPC/chardet4cj](https://gitcode.com/Cangjie-TPC/chardet4cj) | 检测常用文本编码，支持 ISO-2022-CN 编码格式、UTF-8 编码格式、UTF-16BE / UTF-16LE 编码格式。 | TPC | ★ 19 / Fork 1 | 2026-06-02 · 活跃 | c,Cangjie,h,p,t |
| [OpenHarmony/arkcompiler_cangjie_ark_interop](https://gitcode.com/OpenHarmony/arkcompiler_cangjie_ark_interop) | 仓颉互操作库 | OpenHarmony | ★ 18 / Fork 66 | 6 days ago · 活跃 | a,c,Cangjie,h,i,o,仓颉 |
| [Cangjie-TPC/uuid4cj](https://gitcode.com/Cangjie-TPC/uuid4cj) | 通用唯一标识符，长度为 128 位，可以保证跨空间和时间的唯一性。可基于时间/位置、名称（SHA1、MD5）、随机数、时间纪元等生成。 | TPC | ★ 18 / Fork 7 | 2026-04-08 · 活跃 | c,Cangjie,h,p,t,u |
| [Cangjie-TPC/zlib4cj](https://gitcode.com/Cangjie-TPC/zlib4cj) | 创建和解压 zlib 压缩格式文件。 | TPC | ★ 18 / Fork 7 | 2026-06-25 · 活跃 | Cangjie,h,p,t,z,仓颉 |
| [Cangjie-TPC/formula-ffi](https://gitcode.com/Cangjie-TPC/formula-ffi) | 解析和生成数学公式，支持生成 bitmap 图片格式。适用于 OHOS 系统。 | TPC | ★ 17 / Fork 8 | 2026-07-13 · 活跃 | c,Cangjie,f,h,p,t |
| [Cangjie-SIG/filetype4cj](https://gitcode.com/Cangjie-SIG/filetype4cj) | 通过检查魔数签名推断文件和 MIME 类型 | SIG | ★ 17 / Fork 1 | 2026-03-27 · 活跃 | c,Cangjie,f,s |
| [Cangjie-TPC/msgpack4cj](https://gitcode.com/Cangjie-TPC/msgpack4cj) | 基于 msgpack 序列化协议的仓颉实现。旨在为仓颉应用提供高效、紧凑的二进制数据交换格式。支持快速的数据序列化和反序列化操作，适用于需要高性能和低开销的数据传输场景。 | TPC | ★ 17 / Fork 1 | 2026-06-11 · 活跃 | c,m,t |
| [Cangjie-TPC/vcard4cj](https://gitcode.com/Cangjie-TPC/vcard4cj) | 电子名片标准格式（.vcf 文件）解析库。 | TPC | ★ 17 / Fork 1 | 2025-07-04 · 低活跃 | c,h,p,t,v |
| [Cangjie-TPC/fast-compress-cj](https://gitcode.com/Cangjie-TPC/fast-compress-cj) | 支持 snappyy 算法压缩解压、流式压缩解压、帧流式压缩解压。 | TPC | ★ 16 / Fork 1 | 2026-06-02 · 活跃 | c,Cangjie,f,t |
| [Cangjie-SIG/仓颉语言元编程-张磊 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%85%83%E7%BC%96%E7%A8%8B-%E5%BC%A0%E7%A3%8A) | 仓颉语言元编程由张磊编写，清华大学出版社出版。该书从元编程的概念开始，逐步讲解仓颉元编程的基础知识、抽象语法树的常用用法，以及如何定义和使用仓颉宏。 | SIG | ★ 15 / Fork 3 | 1 year ago · 低活跃 | c,Cangjie,s,z,仓颉 |
| [Cangjie-SIG/tabulate4cj](https://gitcode.com/Cangjie-SIG/tabulate4cj) | tabulate4cj - 使用 仓颉 轻松美化 表格数据。 | SIG | ★ 15 / Fork 1 | 2026-03-27 · 活跃 | c,Cangjie,s,t,仓颉 |
| [Cangjie-TPC/bzip2-ffi](https://gitcode.com/Cangjie-TPC/bzip2-ffi) | 创建和解压 bzip2 压缩格式的文件。 | TPC | ★ 15 / Fork 1 | 2025-07-07 · 低活跃 | b,c,f,h,p,t |
| [Cangjie-TPC/prism4cj](https://gitcode.com/Cangjie-TPC/prism4cj) | 轻量的语法高亮库，提供任意语法的标记化策略，支持标记不同类型的关键词、不同语言的解析器/分发器、预定义语法解析器。 | TPC | ★ 15 / Fork 1 | 2026-07-17 · 活跃 | c,Cangjie,h,p,t |
| [Cangjie-SIG/图解仓颉高效编程-吴京润 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E5%9B%BE%E8%A7%A3%E4%BB%93%E9%A2%89%E9%AB%98%E6%95%88%E7%BC%96%E7%A8%8B-%E5%90%B4%E4%BA%AC%E6%B6%A6) | 本项目是《图解高效仓颉编程》的程序清单 | SIG | ★ 14 / Fork 4 | 11 months ago · 维护中 | c,Cangjie,d,e,s,w |
| [Cangjie-SIG/cli-cj](https://gitcode.com/Cangjie-SIG/cli-cj) | No description | SIG | ★ 14 / Fork 1 | 2026-07-26 · 活跃 | c,Cangjie,s |
| [OpenHarmony/arkui_arkui_cangjie_wrapper](https://gitcode.com/OpenHarmony/arkui_arkui_cangjie_wrapper) | The OpenHarmony Cangjie UI framework based on ArkUI framework. | OpenHarmony | ★ 13 / Fork 46 | 23 hours ago · 活跃 | a,c,Cangjie,h,o,w,仓颉 |
| [Cangjie-SIG/仓颉语言实战-张磊 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%9E%E6%88%98-%E5%BC%A0%E7%A3%8A) | 仓颉语言实战由张磊编写，清华大学出版社出版。 该书践行“零基础入门仓颉语言”的理念，具有内容通俗易懂，知识点循序渐进的特点，可以帮助读者快速掌握仓颉编程语言。 | SIG | ★ 13 / Fork 4 | 1 year ago · 低活跃 | c,Cangjie,仓颉 |
| [Cangjie-TPC/is-png-cj](https://gitcode.com/Cangjie-TPC/is-png-cj) | 一个判断图片格式的库，根据图片的文件数据，判断图片是否为 png 格式。 | TPC | ★ 13 / Fork 1 | 2026-01-16 · 维护中 | c,i,p,t |
| [Cangjie-TPC/diffutils4cj](https://gitcode.com/Cangjie-TPC/diffutils4cj) | 可以逐行比对两个字符串的差异，并按行将差异展示出来，提供补丁打包和添加功能。文档和数据的对比需要先转换为字符串数组再使用该库进行逐行比对。 | TPC | ★ 12 / Fork 2 | 2026-02-12 · 活跃 | Cangjie,d,h,p,t |
| [naxida/cjnum](https://gitcode.com/naxida/cjnum) | 一个数值分析仓颉库。 | naxida | ★ 11 / Fork 24 | 7 months ago · 维护中 | c,n |
| [Cangjie-SIG/cjdotenv](https://gitcode.com/Cangjie-SIG/cjdotenv) | A Cangjie library to load environment variables from `.env`. | SIG | ★ 11 / Fork 2 | 2026-07-26 · 活跃 | c,Cangjie,s |
| [Cangjie-SIG/ansies4cj](https://gitcode.com/Cangjie-SIG/ansies4cj) | ANSI转义序列生成，以及基于ANSI转义序列的输出文本颜色和样式、光标操作、屏幕擦除等控制。 | SIG | ★ 11 / Fork 1 | 2026-02-02 · 活跃 | a,c,Cangjie |
| [Cangjie-SIG/stringbuilder](https://gitcode.com/Cangjie-SIG/stringbuilder) | 更自由、更强大的StringBuilder工具类 | SIG | ★ 11 / Fork 1 | 2025-07-02 · 低活跃 | c,Cangjie,s |
| [Cangjie-TPC/phonenumber4cj](https://gitcode.com/Cangjie-TPC/phonenumber4cj) | 用于解析、格式化和验证国际电话号码，可根据电话号码查询运营商信息、地理位置信息、时区信息，为指定国家/地区提供有效的示例号码。 | TPC | ★ 11 / Fork 1 | 2026-06-05 · 活跃 | h,p,t |
| [Cangjie-SIG/address4cj](https://gitcode.com/Cangjie-SIG/address4cj) | 处理地址表示、验证和格式化。 | SIG | ★ 11 / Fork 0 | 2026-03-28 · 活跃 | a,c,s |
| [Cangjie-SIG/simpleioc](https://gitcode.com/Cangjie-SIG/simpleioc) | simpleioc是一款基于反射的依赖注入容器。IOC容器允许注册类型和创建实例，而不必直接在代码中创建对象实例，这有助于降低代码间的耦合度，提高代码的模块化和可测试性。 | SIG | ★ 11 / Fork 0 | 2025-09-13 · 维护中 | c,Cangjie,s |
| [cangjie-script/cjp-language](https://gitcode.com/cangjie-script/cjp-language) | 由仓颉实现的脚本语言 | cangjie-script | ★ 10 / Fork 1 | 1 year ago · 低活跃 | Cangjie,l,仓颉 |
| [Cangjie-SIG/cjok](https://gitcode.com/Cangjie-SIG/cjok) | 仓颉运算符扩展工具集（Cangjie Operation Kit） | SIG | ★ 10 / Fork 1 | 2025-05-30 · 低活跃 | c |
| [Cangjie-SIG/handy4cj](https://gitcode.com/Cangjie-SIG/handy4cj) | No description | SIG | ★ 10 / Fork 0 | 2026-03-28 · 活跃 | Cangjie,h,s |
| [Cangjie-SIG/locale_config](https://gitcode.com/Cangjie-SIG/locale_config) | 本地化配置管理系统 | SIG | ★ 10 / Fork 0 | 2025-08-30 · 维护中 | c,Cangjie,l,s |
| [Cangjie-TPC/rxcj](https://gitcode.com/Cangjie-TPC/rxcj) | 响应式编程框架。 | TPC | ★ 10 / Fork 0 | 2026-01-20 · 维护中 | c,Cangjie,r,t |
| [Cangjie-TPC/video-compress-cj](https://gitcode.com/Cangjie-TPC/video-compress-cj) | 高性能的视频压缩三方库，支持高、中、低三种质量压缩。支持 mp4、mpeg.ts 视频的解封装格式、支持 AVC(H.264)、 HEVC(H.265) 视频解码格式、支持 AAC 音视频解码格式、支持 AVC(H.264)、 HEVC(H.265) 视频编码格式、支持 AAC 音频编码格式、支持 mp4 封装格式。 | TPC | ★ 9 / Fork 1 | 2025-07-08 · 低活跃 | — |
| [Cangjie-TPC/chat4cj](https://gitcode.com/Cangjie-TPC/chat4cj) | 用于与 Rocket.Chat 服务器进行交互的 Cangjie 语言客户端库。它提供了完整的 REST API 封装，使开发者能够轻松地实现用户认证、频道管理、消息发送等功能。 | TPC | ★ 9 / Fork 0 | 2025-12-01 · 维护中 | c,Cangjie,t,仓颉 |
| [Cangjie-TPC/obs-sdk](https://gitcode.com/Cangjie-TPC/obs-sdk) | 对华为OBS服务提供的REST API进行的封装，基于仓颉语言开发应用的用户，可以直接调用OBS SDK提供的接口函数即可实现使用OBS服务业务能力的目的。 | TPC | ★ 9 / Fork 0 | 1 year ago · 低活跃 | c,o,t,仓颉 |
| [开源仓颉第三方开发者社区/DeriveMacros 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FDeriveMacros) | 为enum、struct、class实现相关派生 | 开源仓颉第三方开发者社区 | ★ 8 / Fork 5 | 1 year ago · 低活跃 | c,d,m,o |
| [Cangjie-TPC/protobuf-format-cj](https://gitcode.com/Cangjie-TPC/protobuf-format-cj) | 支持将 protobuf 数据序列化成 json、xml、html、chouchdb 格式。 | TPC | ★ 8 / Fork 0 | 2025-07-21 · 低活跃 | f,p,t |
| [louloulin/cactor](https://gitcode.com/louloulin/cactor) | 基于cangjie实现高性能actor框架 | louloulin | ★ 7 / Fork 2 | 9 months ago · 维护中 | c,l |
| [ystyle/xisp](https://gitcode.com/ystyle/xisp) | 仓颉嵌入式 Lisp 脚本语言 | ystyle | ★ 6 / Fork 0 | 18 days ago · 活跃 | Cangjie,x,y,仓颉 |
| [Pocahontas-1120/address4cj](https://gitcode.com/Pocahontas-1120/address4cj) | 处理地址表示、验证和格式化。 | Pocahontas-1120 | ★ 5 / Fork 2 | 1 year ago · 低活跃 | a,p |
| [Cangjie-TPC/is-webp-cj](https://gitcode.com/Cangjie-TPC/is-webp-cj) | 一款根据文件数据，判断图片是否是 webp 格式的库。 | TPC | ★ 5 / Fork 1 | 2026-01-21 · 维护中 | c,Cangjie,i,t,w,z |
| [louloulin/cjpeg](https://gitcode.com/louloulin/cjpeg) | 基于cangjie的PEG | louloulin | ★ 5 / Fork 1 | 10 months ago · 维护中 | c,l |
| [naxida/cjmustache](https://gitcode.com/naxida/cjmustache) | 一个使用 Cangjie 语言实现的 Mustache 模板引擎。 | naxida | ★ 5 / Fork 0 | 5 months ago · 活跃 | c,n |
| [raozj/cjtrans](https://gitcode.com/raozj/cjtrans) | cjtrans.(cjTranslation)是基于仓颉编程语言开发的聚合翻译接口。开发者可以通过cjtrans.快速的在不同的翻译服务提供商之间切换。 | raozj | ★ 5 / Fork 0 | 3 months ago · 活跃 | c,r,t |
| [OpenHarmony/window_window_cangjie_wrapper](https://gitcode.com/OpenHarmony/window_window_cangjie_wrapper) | The OpenHarmony Cangjie windows framework. | OpenHarmony | ★ 4 / Fork 22 | 2 days ago · 活跃 | c,Cangjie,h,o,w,仓颉 |
| [ccdme/hy](https://gitcode.com/ccdme/hy) | 仓颉基于stdx.net进行开发的后端框架。 | ccdme | ★ 4 / Fork 1 | 10 months ago · 维护中 | c,h |
| [leaveWhite9088/deque4cj](https://gitcode.com/leaveWhite9088/deque4cj) | deque4cj是一个用 Cangjie 语言实现的高效双端队列（Deque）库，支持灵活的元素插入、删除和动态容量管理。 | leaveWhite9088 | ★ 4 / Fork 1 | 3 months ago · 活跃 | d,l,w |
| [yishengTH/docker-cj](https://gitcode.com/yishengTH/docker-cj) | 使用cj控制docker | yishengTH | ★ 4 / Fork 1 | 1 year ago · 低活跃 | d,t,y |
| [Cangjie-SIG/light_html](https://gitcode.com/Cangjie-SIG/light_html) | Light_Html 是 cangjie 的轻量级 html 库，能够解析 html 文档生成 cangjie 的文档对象、对 html 元素进行增删改、使用 CSS 选择器操作元素等功能。 | SIG | ★ 4 / Fork 0 | 2024-11-02 · 低活跃 | Cangjie,h,l,s,仓颉 |
| [Cangjie-TPC/compare-versions-cj](https://gitcode.com/Cangjie-TPC/compare-versions-cj) | 版本对比工具，支持版本号验证、版本号排序、版本号范围识别。 | TPC | ★ 4 / Fork 0 | 2025-02-11 · 低活跃 | c,Cangjie,t,v,仓颉 |
| [service/jcmd](https://gitcode.com/service/jcmd) | 仓颉语言命令行框架, 提供命令引导和 help 命令。 | service | ★ 4 / Fork 0 | 1 year ago · 低活跃 | j,s |
| [OpenHarmony/third_party_cangjie_runtime](https://gitcode.com/OpenHarmony/third_party_cangjie_runtime) | 仓颉编程语言运行时与标准库 | OpenHarmony | ★ 3 / Fork 13 | 3 days ago · 活跃 | c,h,o,p,r,t,仓颉 |
| [belyaev-mikhail/Cangjie-DSLKit](https://gitcode.com/belyaev-mikhail/Cangjie-DSLKit) | Cangjie DSLKit: the ultimate future tool for building your DSLs | belyaev-mikhail | ★ 3 / Fork 4 | 16 days ago · 活跃 | b,c,d,m,仓颉 |
| [jfy13/xurls4cj](https://gitcode.com/jfy13/xurls4cj) | 从文本中提取 URL | jfy13 | ★ 3 / Fork 1 | 1 year ago · 低活跃 | j,x |
| [mumu_xsy/bloom4cj](https://gitcode.com/mumu_xsy/bloom4cj) | 实现了一个标准的布隆过滤器（StandardBloom），用于高效地进行集合成员判断，基于哈希函数和位数组，通过设置多个哈希值来优化假阳性率。 | mumu_xsy | ★ 3 / Fork 1 | 3 months ago · 活跃 | b,m,x |
| [SeanXDO/Clib4cj](https://gitcode.com/SeanXDO/Clib4cj) | 常用C库的仓颉绑定 | SeanXDO | ★ 3 / Fork 1 | 10 months ago · 维护中 | c,s,x |
| [unravel/仓颉标准库扩展 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BB%93%E9%A2%89%E6%A0%87%E5%87%86%E5%BA%93%E6%89%A9%E5%B1%95) | 对仓颉的一些扩展，陆续完善 | unravel | ★ 3 / Fork 1 | 1 month ago · 活跃 | 仓颉 |
| [louloulin/rqt](https://gitcode.com/louloulin/rqt) | 基于仓颉实现的高性能request库 | louloulin | ★ 3 / Fork 0 | 7 months ago · 维护中 | l,r |
| [xiaofengxi/xretry](https://gitcode.com/xiaofengxi/xretry) | 仓颉编程语言 (Cangjie) 的高可用重试与熔断库，提供开箱即用的容错解决方案。 支持指数退避、随机抖动、熔断器模式，并提供熔断器、多种退避策略、统计信息、简洁的宏注解。 | xiaofengxi | ★ 3 / Fork 0 | 4 months ago · 活跃 | Cangjie,x,仓颉 |
| [ZhaoJun-zfh/captcha4cj](https://gitcode.com/ZhaoJun-zfh/captcha4cj) | — | ZhaoJun-zfh | ★ 3 / Fork 0 | 1 month ago · 活跃 | c,j,z |
| [OpenHarmony/multimedia_multimedia_cangjie_wrapper](https://gitcode.com/OpenHarmony/multimedia_multimedia_cangjie_wrapper) | 媒体模块仓颉封装层 | OpenHarmony | ★ 2 / Fork 32 | 2 days ago · 活跃 | c,Cangjie,h,m,o,w,仓颉 |
| [OpenHarmony/telephony_telephony_cangjie_wrapper](https://gitcode.com/OpenHarmony/telephony_telephony_cangjie_wrapper) | 电话服务模块仓颉封装层 | OpenHarmony | ★ 2 / Fork 26 | 6 days ago · 活跃 | c,Cangjie,h,o,t,w,仓颉 |
| [OpenHarmony/ability_ability_cangjie_wrapper](https://gitcode.com/OpenHarmony/ability_ability_cangjie_wrapper) | 元能力仓颉封装 | OpenHarmony | ★ 2 / Fork 23 | 2 days ago · 活跃 | a,c,Cangjie,h,o,w,仓颉 |
| [OpenHarmony/connectivity_connectivity_cangjie_wrapper](https://gitcode.com/OpenHarmony/connectivity_connectivity_cangjie_wrapper) | WLAN服务能力、蓝牙服务等模块仓颉封装层 | OpenHarmony | ★ 2 / Fork 22 | 2 days ago · 活跃 | c,Cangjie,h,o,w |
| [OpenHarmony/bundlemanager_bundlemanager_cangjie_wrapper](https://gitcode.com/OpenHarmony/bundlemanager_bundlemanager_cangjie_wrapper) | 仓颉包管理封装 | OpenHarmony | ★ 2 / Fork 21 | 2 days ago · 活跃 | b,c,Cangjie,h,o,w,仓颉 |
| [OpenHarmony/graphic_graphic_cangjie_wrapper](https://gitcode.com/OpenHarmony/graphic_graphic_cangjie_wrapper) | 图形子系统仓颉封装层 | OpenHarmony | ★ 2 / Fork 17 | 6 days ago · 活跃 | Cangjie,g,h,o,w |
| [soulsoft/nacos](https://gitcode.com/soulsoft/nacos) | Nacos 仓颉语言 SDK，实现了 Nacos 服务注册与发现的核心功能。 | soulsoft | ★ 2 / Fork 4 | 2 months ago · 活跃 | n,s |
| [Cangjie-TPC/brotli4cj](https://gitcode.com/Cangjie-TPC/brotli4cj) | 支持 brotli 格式的压缩和解压缩。 | TPC | ★ 2 / Fork 3 | 2026-06-12 · 活跃 | — |
| [lanlingx/cjlog](https://gitcode.com/lanlingx/cjlog) | 一个为仓颉（Cangjie）编程语言设计的日志框架，专注于可配置性和可扩展性。 | lanlingx | ★ 2 / Fork 2 | 2 months ago · 活跃 | c,l |
| [tian_shen_tu/indexer4cj](https://gitcode.com/tian_shen_tu/indexer4cj) | indexer4j的Cangjie实现，基于仓颉语言实现的简单全文索引和搜索库 | tian_shen_tu | ★ 2 / Fork 2 | 1 year ago · 低活跃 | i,s,t |
| [aka-rrevenantt/cjsdk](https://gitcode.com/aka-rrevenantt/cjsdk) | Cangjiie SDK version manager | aka-rrevenantt | ★ 2 / Fork 1 | 13 hours ago · 活跃 | a,c,r |
| [Cangjie-SIG/仓颉程序设计语言-刘安战 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E4%BB%93%E9%A2%89%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80-%E5%88%98%E5%AE%89%E6%88%98) | — | SIG | ★ 2 / Fork 1 | 1 year ago · 低活跃 | c,Cangjie,l,仓颉 |
| [soulsoft/soulsoft_scheduler](https://gitcode.com/soulsoft/soulsoft_scheduler) | soulsoft.scheduler是一个支持cron表达式的定时任务调度库 | soulsoft | ★ 2 / Fork 1 | 1 month ago · 活跃 | s |
| [Cangjie-SIG/CJ-EKU](https://gitcode.com/Cangjie-SIG/CJ-EKU) | 简洁代码提供常用宏 | SIG | ★ 2 / Fork 0 | 2025-01-16 · 低活跃 | c,e |
| [Cangjie-TPC/xsequence4cj](https://gitcode.com/Cangjie-TPC/xsequence4cj) | xsequence4cj 是一个分布式序列号生成组件。 | TPC | ★ 2 / Fork 0 | 2025-09-26 · 维护中 | c,Cangjie,x |
| [Chemxy/stats4cj](https://gitcode.com/Chemxy/stats4cj) | 仓颉实现的统计库 | Chemxy | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,s |
| [Cosp/delegate4cj](https://gitcode.com/Cosp/delegate4cj) | 使用宏实现仓颉语言的类委托、属性委托。 | Cosp | ★ 2 / Fork 0 | 1 year ago · 低活跃 | d |
| [Minhat/develop_autorun_cj](https://gitcode.com/Minhat/develop_autorun_cj) | 仓颉开发自动运行 | Minhat | ★ 2 / Fork 0 | 1 year ago · 低活跃 | a,c,d,m |
| [oyangzy/framework](https://gitcode.com/oyangzy/framework) | cangjie语言 实现简单的类springboot框架 | oyangzy | ★ 2 / Fork 0 | 1 year ago · 低活跃 | f,o |
| [PermissionDog/feign4cj](https://gitcode.com/PermissionDog/feign4cj) | — | PermissionDog | ★ 2 / Fork 0 | 11 months ago · 维护中 | d,f,p |
| [qq_41740032/machineLearning4cj](https://gitcode.com/qq_41740032/machineLearning4cj) | — | qq_41740032 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | l,m,q |
| [soulsoft/soulsoft_strategy](https://gitcode.com/soulsoft/soulsoft_strategy) | soulsoft_strategy一款基于重试的策略框架，并且支持策略的扩展和编排。 | soulsoft | ★ 2 / Fork 0 | 6 months ago · 活跃 | s |
| [xian_fish/cj-lombok](https://gitcode.com/xian_fish/cj-lombok) | 期望做成类似java 的lombok类似，简化部分模版代码的问题。当前已支持自动添加ToString方法，和给加问号的字段自动添加默认值None | xian_fish | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,f,l,x |
| [ystyle/nes-cj](https://gitcode.com/ystyle/nes-cj) | 仓颉版 NES 模拟器 | ystyle | ★ 2 / Fork 0 | 22 hours ago · 活跃 | c,n,y |
| [OpenHarmony/global_global_cangjie_wrapper](https://gitcode.com/OpenHarmony/global_global_cangjie_wrapper) | 全局化子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 29 | 6 days ago · 活跃 | Cangjie,g,h,w |
| [OpenHarmony/location_location_cangjie_wrapper](https://gitcode.com/OpenHarmony/location_location_cangjie_wrapper) | 位置定位模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 24 | 6 days ago · 活跃 | c,h,l,o,w,仓颉 |
| [OpenHarmony/sensors_sensors_cangjie_wrapper](https://gitcode.com/OpenHarmony/sensors_sensors_cangjie_wrapper) | 泛sensor子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 24 | 6 days ago · 活跃 | c,h,o,s,w,仓颉 |
| [OpenHarmony/time_time_cangjie_wrapper](https://gitcode.com/OpenHarmony/time_time_cangjie_wrapper) | 时间时区子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 23 | 6 days ago · 活跃 | c,Cangjie,t,w |
| [OpenHarmony/applications_applications_cangjie_wrapper](https://gitcode.com/OpenHarmony/applications_applications_cangjie_wrapper) | 系统应用模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 22 | 6 days ago · 活跃 | a,c,Cangjie,o,w,仓颉 |
| [OpenHarmony/filemanagement_filemanagement_cangjie_wrapper](https://gitcode.com/OpenHarmony/filemanagement_filemanagement_cangjie_wrapper) | 文件管理模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 21 | 6 days ago · 活跃 | c,Cangjie,f,o,w |
| [OpenHarmony/request_request_cangjie_wrapper](https://gitcode.com/OpenHarmony/request_request_cangjie_wrapper) | 上传下载子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 21 | 6 days ago · 活跃 | c,Cangjie,o,r,w,仓颉 |
| [OpenHarmony/powermgr_powermgr_cangjie_wrapper](https://gitcode.com/OpenHarmony/powermgr_powermgr_cangjie_wrapper) | 电源管理子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 20 | 6 days ago · 活跃 | c,Cangjie,h,o,p,w,仓颉 |
| [OpenHarmony/startup_startup_cangjie_wrapper](https://gitcode.com/OpenHarmony/startup_startup_cangjie_wrapper) | 启动恢复子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 20 | 6 days ago · 活跃 | Cangjie,o,s,w |
| [OpenHarmony/accesscontrol_accesscontrol_cangjie_wrapper](https://gitcode.com/OpenHarmony/accesscontrol_accesscontrol_cangjie_wrapper) | 仓颉程序访问控制能力封装层 | OpenHarmony | ★ 1 / Fork 19 | 6 days ago · 活跃 | a,Cangjie,h,o,w,仓颉 |
| [OpenHarmony/arkweb_arkweb_cangjie_wrapper](https://gitcode.com/OpenHarmony/arkweb_arkweb_cangjie_wrapper) | web组件仓颉封装层 | OpenHarmony | ★ 1 / Fork 19 | 6 days ago · 活跃 | a,h,o,w,仓颉 |
| [OpenHarmony/communication_communication_cangjie_wrapper](https://gitcode.com/OpenHarmony/communication_communication_cangjie_wrapper) | RPC模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 19 | 2 days ago · 活跃 | c,Cangjie,w |
| [OpenHarmony/hiviewdfx_hiviewdfx_cangjie_wrapper](https://gitcode.com/OpenHarmony/hiviewdfx_hiviewdfx_cangjie_wrapper) | DFX子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 19 | 6 days ago · 活跃 | Cangjie,h,o,w |
| [OpenHarmony/netmanager_netmanager_cangjie_wrapper](https://gitcode.com/OpenHarmony/netmanager_netmanager_cangjie_wrapper) | 网络管理模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 19 | 2 days ago · 活跃 | c,h,n,o,w,仓颉 |
| [OpenHarmony/notification_notification_cangjie_wrapper](https://gitcode.com/OpenHarmony/notification_notification_cangjie_wrapper) | 事件通知子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 19 | 6 days ago · 活跃 | Cangjie,h,n,o,w,仓颉 |
| [OpenHarmony/distributeddatamgr_distributeddatamgr_cangjie_wrapper](https://gitcode.com/OpenHarmony/distributeddatamgr_distributeddatamgr_cangjie_wrapper) | 分布式数据管理子系统仓颉封装层 | OpenHarmony | ★ 1 / Fork 18 | 6 days ago · 活跃 | c,Cangjie,d,h,o,w |
| [OpenHarmony/testfwk_testfwk_cangjie_wrapper](https://gitcode.com/OpenHarmony/testfwk_testfwk_cangjie_wrapper) | 自动化测试框架模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 18 | 6 days ago · 活跃 | h,w,仓颉 |
| [Cangjie-TPC/cjmustache](https://gitcode.com/Cangjie-TPC/cjmustache) | 一个迁移自 jmustache 的模版引擎项目。 | TPC | ★ 1 / Fork 2 | 2026-06-09 · 活跃 | c,Cangjie,t |
| [Bayonet/handy4cj](https://gitcode.com/Bayonet/handy4cj) | — | Bayonet | ★ 1 / Fork 1 | 1 year ago · 低活跃 | b,h |
| [Cangjie-TPC/metadata-extractor-cj](https://gitcode.com/Cangjie-TPC/metadata-extractor-cj) | metadata-extractor-cj 用于从媒体文件中读取元数据。它可以处理多种文件格式，如 JPEG、TIFF、GIF、BMP等，并提取这些文件中包含的各种元数据信息。 | TPC | ★ 1 / Fork 1 | 2025-12-12 · 维护中 | c,Cangjie,e,m,t |
| [Cangjie-TPC/tar4cj](https://gitcode.com/Cangjie-TPC/tar4cj) | tar 格式的压缩和解压缩三方库。 | TPC | ★ 1 / Fork 1 | 2025-10-09 · 维护中 | — |
| [Chemxy/default_value_cj](https://gitcode.com/Chemxy/default_value_cj) | 实现仓颉的数据类型的默认值 | Chemxy | ★ 1 / Fork 1 | 1 year ago · 低活跃 | c,d,v |
| [Cinexus/cj-ignite](https://gitcode.com/Cinexus/cj-ignite) | — | Cinexus | ★ 1 / Fork 1 | 26 days ago · 活跃 | c,i |
| [daqingshu/nacos-client](https://gitcode.com/daqingshu/nacos-client) | — | daqingshu | ★ 1 / Fork 1 | 1 year ago · 低活跃 | c,d,n |
| [仓颉·鸿蒙/hutil 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E4%BB%93%E9%A2%89%C2%B7%E9%B8%BF%E8%92%99%2Fhutil) | 工具库封装 | 仓颉·鸿蒙 | ★ 1 / Fork 1 | 8 months ago · 维护中 | Cangjie,h,仓颉 |
| [2501_94045070/cangjie_generators](https://gitcode.com/2501_94045070/cangjie_generators) | 该库允许 Cangjie 程序员编写生成器函数并将其视为迭代器，利用实验性效果处理程序功能。-- This library allows Cangjie programmers to write generator functions and treat them like iterators, making use of the experimental… | 2501_94045070 | ★ 1 / Fork 0 | 2 days ago · 活跃 | c,Cangjie,g,仓颉 |
| [Cangjie-SIG/humanize4cj](https://gitcode.com/Cangjie-SIG/humanize4cj) | 一个用于 Cangjie 语言的编写的数据格式化工具库，提供"人性化"显示的功能,用于将数值、时间等信息转换为容易阅读的形式。 | SIG | ★ 1 / Fork 0 | 2025-06-04 · 低活跃 | h,s |
| [Cangjie-SIG/itertools](https://gitcode.com/Cangjie-SIG/itertools) | No description | SIG | ★ 1 / Fork 0 | 2026-01-07 · 维护中 | c,i,s |
| [Cangjie-SIG/priorityqueue4cj](https://gitcode.com/Cangjie-SIG/priorityqueue4cj) | No description | SIG | ★ 1 / Fork 0 | 2026-07-26 · 活跃 | — |
| [Cangjie-SIG/tokensplit4cj](https://gitcode.com/Cangjie-SIG/tokensplit4cj) | No description | SIG | ★ 1 / Fork 0 | 2026-03-28 · 活跃 | c,Cangjie,t |
| [chaoling83/snmp-cj](https://gitcode.com/chaoling83/snmp-cj) | 提供仓颉版本的snmp能力 | chaoling83 | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,s |
| [czj18069891265/cj_excel](https://gitcode.com/czj18069891265/cj_excel) | — | czj18069891265 | ★ 1 / Fork 0 | 3 months ago · 活跃 | e |
| [czj18069891265/cj_pdf](https://gitcode.com/czj18069891265/cj_pdf) | — | czj18069891265 | ★ 1 / Fork 0 | 3 months ago · 活跃 | c |
| [czj18069891265/cj_word](https://gitcode.com/czj18069891265/cj_word) | — | czj18069891265 | ★ 1 / Fork 0 | 3 months ago · 活跃 | w |
| [Fufish_SKP/tabulate4cj](https://gitcode.com/Fufish_SKP/tabulate4cj) | tabulate4cj - 使用 仓颉 轻松美化 表格数据。 | Fufish_SKP | ★ 1 / Fork 0 | 1 year ago · 低活跃 | f,t |
| [gtn1024/cjdotenv](https://gitcode.com/gtn1024/cjdotenv) | A Cangjie library to load environment variables from `.env`. | gtn1024 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,g |
| [louloulin/disruptor-cj](https://gitcode.com/louloulin/disruptor-cj) | 基于仓颉实现的disruptor | louloulin | ★ 1 / Fork 0 | 10 months ago · 维护中 | d,l |
| [louloulin/kafka.cj](https://gitcode.com/louloulin/kafka.cj) | 基于cangjie实现的kafka client | louloulin | ★ 1 / Fork 0 | 10 months ago · 维护中 | k |
| [louloulin/log4c](https://gitcode.com/louloulin/log4c) | 基于disruptor实现的高性能的日志库 | louloulin | ★ 1 / Fork 0 | 10 months ago · 维护中 | l |
| [louloulin/tree-sitter.cj](https://gitcode.com/louloulin/tree-sitter.cj) | 仓颉版本的tree-sitter sdk | louloulin | ★ 1 / Fork 0 | 11 months ago · 维护中 | l,s |
| [mumu_xsy/bitreader4cj](https://gitcode.com/mumu_xsy/bitreader4cj) | bitreader4cj 是一个基于仓颉（Cangjie）语言实现的高性能位读取工具库。它提供了高效的位级数据读取和处理功能，支持按位读取、多种数据类型转换以及Exp-Golomb编码解码等功能。 | mumu_xsy | ★ 1 / Fork 0 | 1 year ago · 低活跃 | b,m,x |
| [mumu_xsy/commonslang4cj](https://gitcode.com/mumu_xsy/commonslang4cj) | commons-lang4cj 是 Apache Commons Lang 的仓颉(Cangjie)语言移植版本，提供了一系列 Java 开发者熟悉的工具方法，用于处理 Java 标准库中 java.lang 包中未提供的核心类操作。 | mumu_xsy | ★ 1 / Fork 0 | 5 months ago · 活跃 | c,m,x |
| [StephenZhou/RxCj](https://gitcode.com/StephenZhou/RxCj) | 仓颉语言的响应式编程框架。 | StephenZhou | ★ 1 / Fork 0 | 1 year ago · 低活跃 | r,s,z |
| [unravel/cj_debounce_throttle](https://gitcode.com/unravel/cj_debounce_throttle) | 仓颉实现的debounce和throttle库 | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,d,t,u |
| [unravel/cj_propertywrapper](https://gitcode.com/unravel/cj_propertywrapper) | — | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,p,u |
| [XinlongWu/OpenGL4cj](https://gitcode.com/XinlongWu/OpenGL4cj) | — | XinlongWu | ★ 1 / Fork 0 | 1 year ago · 低活跃 | o,w,x |
| [ystyle/carbon-cj](https://gitcode.com/ystyle/carbon-cj) | 一个简单、语义化且对开发人员友好的日期时间库 | ystyle | ★ 1 / Fork 0 | 4 months ago · 活跃 | c,y |
| [ystyle/emitter](https://gitcode.com/ystyle/emitter) | 轻量级的emitter框架 | ystyle | ★ 1 / Fork 0 | 6 months ago · 活跃 | e,y |
| [zealsoft/iotagent](https://gitcode.com/zealsoft/iotagent) | 【案例共创】基于仓颉编程语言+Cangjie Magic智能体框架+华为云IoTDA+DeepSeek推动智能家居智能体落地 | zealsoft | ★ 1 / Fork 0 | 11 months ago · 维护中 | i,z |
| [ZhaoJun-zfh/commons4cj](https://gitcode.com/ZhaoJun-zfh/commons4cj) | — | ZhaoJun-zfh | ★ 1 / Fork 0 | 13 days ago · 活跃 | c,j,z |
| [ZhaoJun-zfh/log4cj](https://gitcode.com/ZhaoJun-zfh/log4cj) | — | ZhaoJun-zfh | ★ 1 / Fork 0 | 1 month ago · 活跃 | j,l,z |
| [ZhaoJun-zfh/prometheus4cj](https://gitcode.com/ZhaoJun-zfh/prometheus4cj) | — | ZhaoJun-zfh | ★ 1 / Fork 0 | 18 days ago · 活跃 | j,p,z |
| [zsy619/仓颉通用类库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zsy619%2F%E4%BB%93%E9%A2%89%E9%80%9A%E7%94%A8%E7%B1%BB%E5%BA%93) | 仓颉通用扩展类库 | zsy619 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | u,z |
| [cangjie_no_1/kaca_zlib4cj](https://gitcode.com/cangjie_no_1/kaca_zlib4cj) | — | cangjie_no_1 | ★ 0 / Fork 1 | 27 days ago · 活跃 | c,n,z |
| [cj-awesome/tyme4cj](https://gitcode.com/cj-awesome/tyme4cj) | Tyme是一个非常强大的日历工具库，可以破解农历的升级版本，拥有更优秀的设计和扩展性，支持公历、农历、藏历、星座、干支、生肖、节气、法定假日等。 | cj-awesome | ★ 0 / Fork 1 | 8 months ago · 维护中 | a,t |
| [hofighter/sshd4cj](https://gitcode.com/hofighter/sshd4cj) | 仓颉版的sshd | hofighter | ★ 0 / Fork 1 | 1 day ago · 活跃 | h,s |
| [rilkran/量化回测工具 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=rilkran%2F%E9%87%8F%E5%8C%96%E5%9B%9E%E6%B5%8B%E5%B7%A5%E5%85%B7) | 简单的量化回测框架 | rilkran | ★ 0 / Fork 1 | 1 year ago · 低活跃 | b,r,s,t |
| [weixin_44061831/cj-demos](https://gitcode.com/weixin_44061831/cj-demos) | — | weixin_44061831 | ★ 0 / Fork 1 | 10 months ago · 维护中 | c,w |
| [zhangyin_gitcode/dataframe_cj](https://gitcode.com/zhangyin_gitcode/dataframe_cj) | — | zhangyin_gitcode | ★ 0 / Fork 1 | 1 year ago · 低活跃 | d,g,z |
| [zhangyin_gitcode/spu5cj_wp](https://gitcode.com/zhangyin_gitcode/spu5cj_wp) | spu5cj 是一个用仓颉编程语言（Cangjie）实现的数据流计算框架，从 C++ StreamPU 框架移植而来，提供模块化的数据流图执行引擎。 | zhangyin_gitcode | ★ 0 / Fork 1 | 1 month ago · 活跃 | g,s,w,z |
| [2401_82796943/cj_Morse](https://gitcode.com/2401_82796943/cj_Morse) | 仓颉调用WIndowsAPI的Beep(),sleep()函数，将ASCII编码为莫尔斯电码并播放 | 2401_82796943 | ★ 0 / Fork 0 | 4 months ago · 活跃 | m |
| [cangjie_no_1/cj_cef_callback_mod](https://gitcode.com/cangjie_no_1/cj_cef_callback_mod) | 仓颉 cef 中 ,用于 绑定 cef 回调 的 方法 | cangjie_no_1 | ★ 0 / Fork 0 | 11 months ago · 维护中 | Cangjie,m,n |
| [cangjie_no_1/encodeURI_cj](https://gitcode.com/cangjie_no_1/encodeURI_cj) | 能够对齐 js 的 编码函数和 解码函数 , 包括 encodeURIComponent / decodeURIComponent / encodeURI / decodeURI | cangjie_no_1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,n,u |
| [cangjie_no_1/仓颉语言c指针扩展库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=cangjie_no_1%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80c%E6%8C%87%E9%92%88%E6%89%A9%E5%B1%95%E5%BA%93) | 仓颉语言c指针扩展库 , 让大多数c指针操作 1 . 更少的使用 unsafe , 2 . 更加易用 , 3 .更容易了解 c指针 , | cangjie_no_1 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,n,u,仓颉 |
| [Cangjie-SIG/cj_boot](https://gitcode.com/Cangjie-SIG/cj_boot) | No description | SIG | ★ 0 / Fork 0 | 2024-11-25 · 低活跃 | — |
| [Cangjie-SIG/cj_color](https://gitcode.com/Cangjie-SIG/cj_color) | No description | SIG | ★ 0 / Fork 0 | 2025-01-02 · 低活跃 | — |
| [Cangjie-SIG/InterCeptor](https://gitcode.com/Cangjie-SIG/InterCeptor) | No description | SIG | ★ 0 / Fork 0 | 2025-11-12 · 维护中 | Cangjie,s |
| [Cangjie-SIG/losu4cj](https://gitcode.com/Cangjie-SIG/losu4cj) | No description | SIG | ★ 0 / Fork 0 | 2024-12-16 · 低活跃 | — |
| [chaloongjir/gonet_cj](https://gitcode.com/chaloongjir/gonet_cj) | gonet go-cj练习 | chaloongjir | ★ 0 / Fork 0 | 8 months ago · 维护中 | g |
| [changeden/compress4cj](https://gitcode.com/changeden/compress4cj) | 纯仓颉实现的多格式压缩/解压库。零外部依赖，仅使用仓颉 `std` 标准库。 | changeden | ★ 0 / Fork 0 | 23 days ago · 活跃 | c |
| [ChaosJohn/Result4CJ](https://gitcode.com/ChaosJohn/Result4CJ) | — | ChaosJohn | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,r |
| [chenyunda218/jmespath-cj](https://gitcode.com/chenyunda218/jmespath-cj) | — | chenyunda218 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j |
| [choi_uouo/complexnumber](https://gitcode.com/choi_uouo/complexnumber) | 一个用于表示和操作复数的类库实现。该复数类提供了基本的算术运算、三角函数运算、双曲函数运算以及各种实用功能。 | choi_uouo | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,u |
| [chongweizhi/CJ-EKU](https://gitcode.com/chongweizhi/CJ-EKU) | — | chongweizhi | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,e |
| [chongweizhi/excel-cj](https://gitcode.com/chongweizhi/excel-cj) | — | chongweizhi | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,e |
| [cj-awesome/longest_substring](https://gitcode.com/cj-awesome/longest_substring) | 无重复字符的最长子串工具库 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,l |
| [clearme777/autofittextview4cj](https://gitcode.com/clearme777/autofittextview4cj) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a |
| [clearme777/caverphone4cj](https://gitcode.com/clearme777/caverphone4cj) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [clearme777/cj-alder32](https://gitcode.com/clearme777/cj-alder32) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c |
| [clearme777/cj-md5](https://gitcode.com/clearme777/cj-md5) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m |
| [clearme777/easyreplace4cj](https://gitcode.com/clearme777/easyreplace4cj) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [clearme777/lena4cj](https://gitcode.com/clearme777/lena4cj) | — | clearme777 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [copur/totp-cj](https://gitcode.com/copur/totp-cj) | — | copur | ★ 0 / Fork 0 | 3 months ago · 活跃 | c |
| [dgm108/minijinja2cj](https://gitcode.com/dgm108/minijinja2cj) | 仓颉语言绑定Rust语言的轻量级模板引擎MiniJinja，实现Jinja2模板引擎功能。 | dgm108 | ★ 0 / Fork 0 | 11 months ago · 维护中 | m |
| [FinallyLanding/cjir](https://gitcode.com/FinallyLanding/cjir) | 用于将LLVM IR函数编译为仓颉包的工具库。 | FinallyLanding | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,f,l |
| [FinallyLanding/easymacro](https://gitcode.com/FinallyLanding/easymacro) | 仓颉宏编程实用工具库。 | FinallyLanding | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,l |
| [FitnessDoge/clap4cj](https://gitcode.com/FitnessDoge/clap4cj) | A Command Line Argument Parser for Cangjie | FitnessDoge | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,d,f |
| [gcw_1m7STAGp/cj_doem](https://gitcode.com/gcw_1m7STAGp/cj_doem) | 仓颉语言简易示例 | gcw_1m7STAGp | ★ 0 / Fork 0 | 26 days ago · 活跃 | c,d,m |
| [gcw_WlVEL2kv/仓颉语言抽象语法树的坡度计算-山东科技大学-戴睿国-栾文静 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_WlVEL2kv%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91%E7%9A%84%E5%9D%A1%E5%BA%A6%E8%AE%A1%E7%AE%97-%E5%B1%B1%E4%B8%9C%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%88%B4%E7%9D%BF%E5%9B%BD-%E6%A0%BE%E6%96%87%E9%9D%99) | 仓颉数据结构 | gcw_WlVEL2kv | ★ 0 / Fork 0 | 9 days ago · 活跃 | c,Cangjie,v,w,仓颉 |
| [hhhhjjujjjh_hhh/easing-functions-cj-develop](https://gitcode.com/hhhhjjujjjh_hhh/easing-functions-cj-develop) | — | hhhhjjujjjh_hhh | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,e,f,h |
| [hz66682/trie4cj](https://gitcode.com/hz66682/trie4cj) | 用仓颉实现的trie树 | hz66682 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [iJet/crc32fast-cj](https://gitcode.com/iJet/crc32fast-cj) | Fast CRC32 (IEEE) checksum computation - Cangjie reimplementation of Rust crc32fast | iJet | ★ 0 / Fork 0 | 12 days ago · 活跃 | i,j |
| [iJet/unicode-segmentation-cj](https://gitcode.com/iJet/unicode-segmentation-cj) | Rust unicode-segmentation的cangjie实现 | iJet | ★ 0 / Fork 0 | 14 days ago · 活跃 | i,j,s,u |
| [isaced/nanoid-cj](https://gitcode.com/isaced/nanoid-cj) | A NanoID implementation for Cangjie | isaced | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n |
| [jacknqy/eudi_lib_jose](https://gitcode.com/jacknqy/eudi_lib_jose) | — | jacknqy | ★ 0 / Fork 0 | 18 days ago · 活跃 | e,j,l |
| [jacknqy/eudi_lib_openid4vp_vci](https://gitcode.com/jacknqy/eudi_lib_openid4vp_vci) | — | jacknqy | ★ 0 / Fork 0 | 15 days ago · 活跃 | e,j,l,o,v |
| [jacknqy/eudi_lib_statium](https://gitcode.com/jacknqy/eudi_lib_statium) | — | jacknqy | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,j,l,s |
| [jjjyc/cangjie-nacos-client](https://gitcode.com/jjjyc/cangjie-nacos-client) | 仓颉实现的nacos客户端 | jjjyc | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie,j,n |
| [jjjyc/cangjie-nacos-client-backups](https://gitcode.com/jjjyc/cangjie-nacos-client-backups) | — | jjjyc | ★ 0 / Fork 0 | 7 months ago · 维护中 | b,c,Cangjie,j,n |
| [jukuya/amdc-sdk](https://gitcode.com/jukuya/amdc-sdk) | — | jukuya | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,l,r,s |
| [JupiterGao/ferry-cj](https://gitcode.com/JupiterGao/ferry-cj) | 类似 frp rathole 的 内网端口转发工具，参考 rathole 的仓颉习作 | JupiterGao | ★ 0 / Fork 0 | 10 months ago · 维护中 | f,g,j |
| [Leon_2012/msgpack-cj](https://gitcode.com/Leon_2012/msgpack-cj) | msgpack cj 语言库 | Leon_2012 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,m |
| [LiqD/selineDownload](https://gitcode.com/LiqD/selineDownload) | 基于仓颉的下载库 | LiqD | ★ 0 / Fork 0 | 3 months ago · 活跃 | d,l,s |
| [LiqD/zlibraryAPI4CJ](https://gitcode.com/LiqD/zlibraryAPI4CJ) | zlibrary请求API 仓颉版 | LiqD | ★ 0 / Fork 0 | 27 days ago · 活跃 | a,d,l,s,z |
| [liuyang0618/jaxws-api](https://gitcode.com/liuyang0618/jaxws-api) | — | liuyang0618 | ★ 0 / Fork 0 | 3 months ago · 活跃 | a,j,l |
| [liuyuxi3/simplelib](https://gitcode.com/liuyuxi3/simplelib) | — | liuyuxi3 | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,s |
| [liyanqing14/api_tools](https://gitcode.com/liyanqing14/api_tools) | — | liyanqing14 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,l,t |
| [LOOYIABC/neo4j_driver](https://gitcode.com/LOOYIABC/neo4j_driver) | — | LOOYIABC | ★ 0 / Fork 0 | 23 days ago · 活跃 | d,j,l,n |
| [louloulin/serde-cj](https://gitcode.com/louloulin/serde-cj) | — | louloulin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,s |
| [m0_74248193/cangjie1](https://gitcode.com/m0_74248193/cangjie1) | 第一个cangjie项目 包括演示类的继承、接口实现和多态性，动态数组（ArrayList）的使用，实现链表数据结构 | m0_74248193 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,m |
| [m0_75054285/opengauss-driver](https://gitcode.com/m0_75054285/opengauss-driver) | — | m0_75054285 | ★ 0 / Fork 0 | 8 months ago · 维护中 | d,m,o |
| [Maker-IOS-cangjie/cj_log](https://gitcode.com/Maker-IOS-cangjie/cj_log) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | i,l |
| [Maker-IOS-cangjie/cj_validator](https://gitcode.com/Maker-IOS-cangjie/cj_validator) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,m,v |
| [Maker-IOS-cangjie/color-picker-cj](https://gitcode.com/Maker-IOS-cangjie/color-picker-cj) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,i,m,p |
| [Maker-IOS-cangjie/titlebar4cj](https://gitcode.com/Maker-IOS-cangjie/titlebar4cj) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | Cangjie,i,m,t |
| [Maker-IOS-cangjie/view-switcher-cj](https://gitcode.com/Maker-IOS-cangjie/view-switcher-cj) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,i,m,v |
| [mashser/bitset](https://gitcode.com/mashser/bitset) | Compact bit-set library for Cangjie | mashser | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,m |
| [Maxime_Hao/cj_navigation](https://gitcode.com/Maxime_Hao/cj_navigation) | — | Maxime_Hao | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,h,m,n |
| [MBpanzz/harucj](https://gitcode.com/MBpanzz/harucj) | 一个PDF生成库 | MBpanzz | ★ 0 / Fork 0 | 14 days ago · 活跃 | h,m |
| [MooLann/humanize4cj](https://gitcode.com/MooLann/humanize4cj) | — | MooLann | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [Mophy/epublib4cj](https://gitcode.com/Mophy/epublib4cj) | — | Mophy | ★ 0 / Fork 0 | 3 months ago · 活跃 | m |
| [Mophy/zip4cj](https://gitcode.com/Mophy/zip4cj) | — | Mophy | ★ 0 / Fork 0 | 5 months ago · 活跃 | m,z |
| [mzgfly/Cangjie_Macro](https://gitcode.com/mzgfly/Cangjie_Macro) | — | mzgfly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,m |
| [PermissionDog/validation4cj](https://gitcode.com/PermissionDog/validation4cj) | — | PermissionDog | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,p,v |
| [PLMNEXT/next-log-api](https://gitcode.com/PLMNEXT/next-log-api) | — | PLMNEXT | ★ 0 / Fork 0 | 10 months ago · 维护中 | a,n,p |
| [POfvvvv/prometheus4cj](https://gitcode.com/POfvvvv/prometheus4cj) | — | POfvvvv | ★ 0 / Fork 0 | 6 months ago · 活跃 | p |
| [qingss0/ctype4cj](https://gitcode.com/qingss0/ctype4cj) | 用于仓颉语言的ARM64架构C语言变量类型抽象层 | qingss0 | ★ 0 / Fork 0 | 1 month ago · 活跃 | q |
| [qingss0/lua4cj](https://gitcode.com/qingss0/lua4cj) | LUA状态机引用中转站 | qingss0 | ★ 0 / Fork 0 | 23 days ago · 活跃 | l,q |
| [qingss0/spi4cj](https://gitcode.com/qingss0/spi4cj) | — | qingss0 | ★ 0 / Fork 0 | 1 month ago · 活跃 | q,s |
| [qq_41740032/gpt4cj](https://gitcode.com/qq_41740032/gpt4cj) | — | qq_41740032 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,q |
| [qq_73810483/吉林大学-郑程業-二叉搜索树BST的插入中序遍历与查找 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=qq_73810483%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E9%83%91%E7%A8%8B%E6%A5%AD-%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91BST%E7%9A%84%E6%8F%92%E5%85%A5%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E4%B8%8E%E6%9F%A5%E6%89%BE) | 使用仓颉语言实现经典数据结构二叉搜索树 BST，包含节点插入、中序遍历和元素查找等功能 | qq_73810483 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,c,Cangjie,q |
| [SeanXDO/EasyExcel4CJ](https://gitcode.com/SeanXDO/EasyExcel4CJ) | — | SeanXDO | ★ 0 / Fork 0 | 2 months ago · 活跃 | x |
| [SeanXDO/Onnx4CJ](https://gitcode.com/SeanXDO/Onnx4CJ) | ONNX 推理引擎的仓颉wrapper | SeanXDO | ★ 0 / Fork 0 | 3 months ago · 活跃 | o,s,x |
| [SeanXDO/timber4cj](https://gitcode.com/SeanXDO/timber4cj) | 仓颉版timber(java/kotlin) | SeanXDO | ★ 0 / Fork 0 | 8 months ago · 维护中 | s,x |
| [shine-yu-student/cangjieForOI](https://gitcode.com/shine-yu-student/cangjieForOI) | 为 OIer 设计的仓颉语言库。 将来可能会用到。 | shine-yu-student | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,f,o,s,y |
| [tianyyyyy/colorprint](https://gitcode.com/tianyyyyy/colorprint) | 仓颉语言 (Cangjie) 终端彩色输出增强库，通过 ANSI 转义序列实现控制台彩色打印。 | tianyyyyy | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,t |
| [tybb2026/tycj-common](https://gitcode.com/tybb2026/tycj-common) | 仓颉语言通用工具集合 - 类似 Java 的 Hutool | tybb2026 | ★ 0 / Fork 0 | 2 days ago · 活跃 | t |
| [unravel/cj_autoclosure](https://gitcode.com/unravel/cj_autoclosure) | — | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,u |
| [urlyy/mite4cj](https://gitcode.com/urlyy/mite4cj) | 一种模版引擎的Cangjie实现，基于宏与std.ast进行简单封装 | urlyy | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,u |
| [vchuoshen6/libunicode](https://gitcode.com/vchuoshen6/libunicode) | Cangjie Unicode Library | vchuoshen6 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,v |
| [vchuoshen6/unicode](https://gitcode.com/vchuoshen6/unicode) | 专门为 UTF-8 编码的数据提供规范化、大小写转换、字符显示宽度计算及其它功能的仓颉编程语言库。 | vchuoshen6 | ★ 0 / Fork 0 | 1 month ago · 活跃 | u,v |
| [weixin_73693626/FlaskDemo_cangjie](https://gitcode.com/weixin_73693626/FlaskDemo_cangjie) | 仓颉编程语言实现的简易Flask框架 | weixin_73693626 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,f,w |
| [windsonggg/strutil4cj](https://gitcode.com/windsonggg/strutil4cj) | — | windsonggg | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,w |
| [withstand/MonteCarloIntegration](https://gitcode.com/withstand/MonteCarloIntegration) | 仓颉实现的蒙特卡洛积分库。 | withstand | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,w |
| [wolfx/cj_toolkit](https://gitcode.com/wolfx/cj_toolkit) | — | wolfx | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,t |
| [wuca/simple_mcp_cj](https://gitcode.com/wuca/simple_mcp_cj) | — | wuca | ★ 0 / Fork 0 | 1 month ago · 活跃 | w |
| [xu090/csrf4cj](https://gitcode.com/xu090/csrf4cj) | — | xu090 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,x |
| [xu090/tablewriter4cj](https://gitcode.com/xu090/tablewriter4cj) | — | xu090 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x |
| [xuzongmin/modelcontextprotocol_cj_sdk](https://gitcode.com/xuzongmin/modelcontextprotocol_cj_sdk) | — | xuzongmin | ★ 0 / Fork 0 | 6 months ago · 活跃 | m,x |
| [xuzongmin/rocketmq_client_cj](https://gitcode.com/xuzongmin/rocketmq_client_cj) | rocketmq客户端底层实现 | xuzongmin | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,r,x |
| [xyzboom/common_cj](https://gitcode.com/xyzboom/common_cj) | — | xyzboom | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,x |
| [yishengTH/nacos-client](https://gitcode.com/yishengTH/nacos-client) | 奇怪的项目 | yishengTH | ★ 0 / Fork 0 | 10 months ago · 维护中 | n,t |
| [Young242/richeditor4cj](https://gitcode.com/Young242/richeditor4cj) | richeditor4cj | Young242 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r,y |
| [ystyle/cron-cj](https://gitcode.com/ystyle/cron-cj) | 仓颉语言实现的 Cron 定时任务调度器 | ystyle | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,y |
| [ystyle/epub-cj](https://gitcode.com/ystyle/epub-cj) | 仓颉语言的 EPUB 生成库，支持流式写入 | ystyle | ★ 0 / Fork 0 | 7 days ago · 活跃 | y |
| [ystyle/kux-cj](https://gitcode.com/ystyle/kux-cj) | — | ystyle | ★ 0 / Fork 0 | 6 months ago · 活跃 | k,y |
| [ystyle/lsp-cj](https://gitcode.com/ystyle/lsp-cj) | 纯仓颉语言实现的 LSP 3.17/3.18 服务器与客户端框架。 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | l,y |
| [ystyle/mobi-cj](https://gitcode.com/ystyle/mobi-cj) | 仓颉的mobi/azw3/kf8格式电子书生成库 | ystyle | ★ 0 / Fork 0 | 6 days ago · 活跃 | c,m |
| [ystyle/pathx-cj](https://gitcode.com/ystyle/pathx-cj) | 感来自 Python pathlib，仓颉 Path 类型的扩展 | ystyle | ★ 0 / Fork 0 | 2 days ago · 活跃 | p,y |
| [ystyle/snappy-cj](https://gitcode.com/ystyle/snappy-cj) | Snappy压缩库的仓颉语言实现。 | ystyle | ★ 0 / Fork 0 | 4 months ago · 活跃 | y |
| [ystyle/victor](https://gitcode.com/ystyle/victor) | 一个仓颉（Cangjie）的 2D 矢量库，带有用于矢量操作的常见方法 | ystyle | ★ 0 / Fork 0 | 5 months ago · 活跃 | y |
| [yuekcc/bash-prompt-cj](https://gitcode.com/yuekcc/bash-prompt-cj) | — | yuekcc | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,y |
| [yuzhuohao/cj_advanced_components](https://gitcode.com/yuzhuohao/cj_advanced_components) | — | yuzhuohao | ★ 0 / Fork 0 | 23 days ago · 活跃 | a,y |
| [zhangjiyu/spu4cj_new](https://gitcode.com/zhangjiyu/spu4cj_new) | — | zhangjiyu | ★ 0 / Fork 0 | 5 months ago · 活跃 | n,s,z |
| [zhangyin_gitcode/opta_planner_cj](https://gitcode.com/zhangyin_gitcode/opta_planner_cj) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | o,p |
| [ZhaoJun-zfh/cangjie_breakfast_delivery_user_api](https://gitcode.com/ZhaoJun-zfh/cangjie_breakfast_delivery_user_api) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,c,Cangjie,d,j |
| [ZhaoJun-zfh/copier4cj](https://gitcode.com/ZhaoJun-zfh/copier4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,j |
| [ZhaoJun-zfh/elasticsearch4cj](https://gitcode.com/ZhaoJun-zfh/elasticsearch4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 12 days ago · 活跃 | e,j,z |
| [ZhaoJun-zfh/opentelemetry4cj](https://gitcode.com/ZhaoJun-zfh/opentelemetry4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 4 days ago · 活跃 | j,o,z |
| [ZhaoJun-zfh/pool4cj](https://gitcode.com/ZhaoJun-zfh/pool4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 13 days ago · 活跃 | j,p,z |
| [ZhaoJun-zfh/rocketmq4cj](https://gitcode.com/ZhaoJun-zfh/rocketmq4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 3 days ago · 活跃 | j,r,z |
| [ZhaoJun-zfh/wire4cj](https://gitcode.com/ZhaoJun-zfh/wire4cj) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 1 month ago · 活跃 | j,w,z |
| [zichexuelan/wen4cj](https://gitcode.com/zichexuelan/wen4cj) | — | zichexuelan | ★ 0 / Fork 0 | 6 months ago · 活跃 | w,z |
| [zjhzlqs/名人故事生成器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zjhzlqs%2F%E5%90%8D%E4%BA%BA%E6%95%85%E4%BA%8B%E7%94%9F%E6%88%90%E5%99%A8) | 本项目是用仓颉调用deepseek api的教学示例。 | zjhzlqs | ★ 0 / Fork 0 | 5 months ago · 活跃 | z |
| [zwcoder/measure4cj](https://gitcode.com/zwcoder/measure4cj) | — | zwcoder | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,z |
| [Zxilly/buggy_cj_repo](https://gitcode.com/Zxilly/buggy_cj_repo) | — | Zxilly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,r,z |
| [开源仓颉第三方开发者社区/gettext-cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fgettext-cj) | 基于GNU gettext的i18n解决方案 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,o |
| [开源仓颉第三方开发者社区/LocaleConfig-CJ 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FLocaleConfig-CJ) | 仓颉的本土化配置包 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l,o |
| [开源仓颉第三方开发者社区/log4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Flog4cj) | 日志输出工具 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,o |
| [开源仓颉第三方开发者社区/meson-cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fmeson-cj) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 11 months ago · 维护中 | o |
| [梅科尔工作室/jfreechart4cj 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Fjfreechart4cj) | jfreechart4cj 是 Java JFreeChart 库的仓颉语言移植版本，提供丰富的图表类型、灵活的配置选项和专业的渲染效果，适用于数据分析、业务报表、科学可视化等场景。 | 梅科尔工作室 | ★ 0 / Fork 0 | 4 months ago · 活跃 | j,m,s |
| [梅科尔工作室/log4cj-OH 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Flog4cj-OH) | — | 梅科尔工作室 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,m,o,s |
| [梅科尔工作室/titlebar4cj_OH 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2Ftitlebar4cj_OH) | TitleBar4CJ 是一个使用仓颉（Cangjie）语言编写的 HarmonyOS 标题栏组件，从 ArkTS 版本的 titlebar 项目迁移而来。该组件提供了丰富的配置选项和灵活的布局方式。 | 梅科尔工作室 | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,o,s,t |

## 工具与应用（294）

### 开发工具（30）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/CJASTHelper](https://gitcode.com/Cangjie-SIG/CJASTHelper) | Cangjie Abstract Syntax Tree Helper | SIG | ★ 33 / Fork 3 | 2026-07-13 · 活跃 | — |
| [Cangjie-SIG/cj2sql](https://gitcode.com/Cangjie-SIG/cj2sql) | 将仓颉代码转换成 SQL | SIG | ★ 27 / Fork 2 | 2026-05-02 · 活跃 | c,Cangjie,s,仓颉 |
| [Cangjie-SIG/j2cj](https://gitcode.com/Cangjie-SIG/j2cj) | No description | SIG | ★ 26 / Fork 2 | 2026-02-09 · 活跃 | — |
| [Cangjie-SIG/intellij-cangjie](https://gitcode.com/Cangjie-SIG/intellij-cangjie) | Intellij Platform 仓颉语言插件 | SIG | ★ 23 / Fork 1 | 2026-07-26 · 活跃 | — |
| [Cangjie-SIG/tree-sitter-cangjie](https://gitcode.com/Cangjie-SIG/tree-sitter-cangjie) | No description | SIG | ★ 20 / Fork 5 | 2026-07-17 · 活跃 | — |
| [Cangjie-SIG/magic-cli](https://gitcode.com/Cangjie-SIG/magic-cli) | No description | SIG | ★ 14 / Fork 14 | 2026-05-26 · 活跃 | c,m,s,仓颉 |
| [Cangjie-SIG/CJ-NVIM](https://gitcode.com/Cangjie-SIG/CJ-NVIM) | No description | SIG | ★ 10 / Fork 0 | 2025-08-25 · 维护中 | — |
| [Cangjie-SIG/cjman](https://gitcode.com/Cangjie-SIG/cjman) | No description | SIG | ★ 5 / Fork 0 | 2026-07-26 · 活跃 | — |
| [Yesokim/protoc-plugin-cj](https://gitcode.com/Yesokim/protoc-plugin-cj) | 将proto文件转换为Cangjie代码的protoc插件 | Yesokim | ★ 5 / Fork 0 | 1 year ago · 低活跃 | c,p,y |
| [Cangjie-TPC/CangjieMigrator](https://gitcode.com/Cangjie-TPC/CangjieMigrator) | 仓颉语言api升级工具，提供自动升级老版本到新版本的api变更功能。 | TPC | ★ 4 / Fork 0 | 2025-10-14 · 维护中 | — |
| [Cangjie-SIG/cangjie_toml_plugin](https://gitcode.com/Cangjie-SIG/cangjie_toml_plugin) | cangjie_toml_plugin 是一个面向 TOML 文件的 语言服务器协议（LSP） 实现，并对 仓颉 cjpm.toml 清单做了加强（按 schema 与 cjpm 规则做校验、补全、悬停）。服务端用 仓颉 编写，以 cjpm 可执行包形式构建，通过 标准输入输出 使用 JSON-RPC 传输 LSP（基于 jsonrpc4cj）。 | SIG | ★ 3 / Fork 1 | 2026-07-10 · 活跃 | c,Cangjie,p,仓颉 |
| [Cangjie-SIG/CallGraphGenerator](https://gitcode.com/Cangjie-SIG/CallGraphGenerator) | 一款仓颉代码函数调用图生成工具 | SIG | ★ 3 / Fork 0 | 2025-12-22 · 维护中 | c,g,s |
| [Cangjie-TPC/codeformat4cj](https://gitcode.com/Cangjie-TPC/codeformat4cj) | No description | TPC | ★ 2 / Fork 3 | 2026-07-17 · 活跃 | c,Cangjie,t |
| [Cangjie-TPC/cjc-hotfix-plugin](https://gitcode.com/Cangjie-TPC/cjc-hotfix-plugin) | No description | TPC | ★ 2 / Fork 0 | 2026-07-14 · 活跃 | — |
| [cj-awesome/humanize](https://gitcode.com/cj-awesome/humanize) | humanize 是一个功能强大的人性化格式转换库，专为仓颉语言（Cangjie）开发。该库提供了一系列实用的格式化函数，能够将数字、字节、时间等数据转换为人类可读的友好格式，让你的应用程序输出更加友好和易读。 | cj-awesome | ★ 1 / Fork 1 | 8 months ago · 维护中 | a,c,h |
| [BestLeon/cangjie_bigprogram_generator](https://gitcode.com/BestLeon/cangjie_bigprogram_generator) | 基于脚本生成仓颉大工程 | BestLeon | ★ 1 / Fork 0 | 4 months ago · 活跃 | b,Cangjie,g,l |
| [Cangjie-SIG/cangjie-packaging](https://gitcode.com/Cangjie-SIG/cangjie-packaging) | No description | SIG | ★ 1 / Fork 0 | 2025-12-04 · 维护中 | — |
| [Cangjie-TPC/cbc-engine](https://gitcode.com/Cangjie-TPC/cbc-engine) | No description | TPC | ★ 1 / Fork 0 | 2026-07-14 · 活跃 | — |
| [iJet/gitoxide-cj](https://gitcode.com/iJet/gitoxide-cj) | 一个用 仓颉语言 (Cangjie) 实现的原生 Git 库，从 Rust 项目 gitoxide 移植而来。 gitoxide-cj 提供了一套完整的 Git 底层（plumbing）包，用于在仓颉语言中构建 Git 兼容的应用程序，涵盖对象存储、引用管理、协议通信、索引操作等功能。 | iJet | ★ 1 / Fork 0 | 5 days ago · 活跃 | c,g,i,j |
| [PermissionDog/dyncall4cj](https://gitcode.com/PermissionDog/dyncall4cj) | dyncall4cj 支持在运行时直接加载 .dll、.so、.dylib 等动态库文件并调用其函数。无需编译期链接参数（-l），实现动态链接库的按需加载，适用于插件系统、模块热加载等场景。 | PermissionDog | ★ 1 / Fork 0 | 11 months ago · 维护中 | d,p |
| [printed636/toml_lsp4cj](https://gitcode.com/printed636/toml_lsp4cj) | 用户可将其集成到编辑器或 IDE 中，获得 TOML 文件的语法检查、自动补全、悬停提示等功能。该项目支持 Cangjie cjpm.toml 清单的 schema 验证，具备格式化、导航和文档链接等能力，通过 JSON-RPC 与客户端通信。 | printed636 | ★ 1 / Fork 0 | 18 days ago · 活跃 | l,p,t |
| [rimesmile/HDU-Compiler](https://gitcode.com/rimesmile/HDU-Compiler) | 杭电编译原理实验 | rimesmile | ★ 1 / Fork 0 | 1 year ago · 低活跃 | h,r |
| [cj-awesome/sanitize_html](https://gitcode.com/cj-awesome/sanitize_html) | sanitize_html 是一个功能强大的HTML内容清理和消毒库，使用仓颉编程语言实现。该库主要用于防止XSS（跨站脚本）攻击，提供灵活的HTML标签和属性过滤机制。支持标签转换、文本过滤、排除过滤、CSS样式过滤、类名过滤、URL清理等丰富功能，可广泛应用于Web安全、内容管理系统、富文本编辑器等场景。 | cj-awesome | ★ 0 / Fork 1 | 8 months ago · 维护中 | a,h,s |
| [cj-awesome/source_map_js](https://gitcode.com/cj-awesome/source_map_js) | source_map_js 是一个功能强大的 Source Map 处理库，使用仓颉编程语言实现。该库提供了完整的 Source Map 生成和消费功能，支持 VLQ 编码/解码、源代码节点管理、映射查询等丰富特性。可广泛应用于 JavaScript 编译器、打包工具、调试工具等场景。 | cj-awesome | ★ 0 / Fork 1 | 8 months ago · 维护中 | j,s |
| [cj-awesome/string_template](https://gitcode.com/cj-awesome/string_template) | string_template 是一个功能强大的字符串模板引擎库，使用仓颉编程语言实现。该库提供了完整的模板渲染功能，支持模板组管理、字典支持、自动缩进写入器、运行时功能等丰富特性。可广泛应用于代码生成、文档生成、配置管理、Web模板渲染等场景。 | cj-awesome | ★ 0 / Fork 1 | 8 months ago · 维护中 | s,t |
| [ljpm_2/电影评分管理系统_天津农学院_梁银夏_何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ljpm_2%2F%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F_%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2_%E6%A2%81%E9%93%B6%E5%A4%8F_%E4%BD%95%E7%8E%B2) | 功能：列出电影、按评分排序、统计分布、按类型筛选、关键词搜索、增删改标记 运行方式：cjpm build 编译，cjpm run 运行 数据：12 部电影，6 种类型 | ljpm_2 | ★ 0 / Fork 1 | 22 days ago · 活跃 | l |
| [2301_79174397/Rational_Numbers](https://gitcode.com/2301_79174397/Rational_Numbers) | 项目描述： Rational_Numbers 是一个专注于实现有理数（分数）运算的编程项目。该项目旨在提供一套完整的有理数操作库，包括加法、减法、乘法、除法等基本算术运算，以及化简、比较等功能。通过这个项目，用户可以方便地在程序中处理有理数，避免浮点数运算带来的精度问题。 主要功能： 基本算术运算：支持有理数的加、减、乘、除运算。 有理数化简：自动将计算结… | 2301_79174397 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,r |
| [cjc-compiler-frontend/compile_performance_monitor](https://gitcode.com/cjc-compiler-frontend/compile_performance_monitor) | 每日监控编译性能 | cjc-compiler-frontend | ★ 0 / Fork 0 | 2 days ago · 活跃 | f,m,p |
| [niuhuan_cn/cj_lombok](https://gitcode.com/niuhuan_cn/cj_lombok) | 仓颉基础代码生成工具 | niuhuan_cn | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,l,n |
| [weixin_44724691/cangjie_bigprogram_generator](https://gitcode.com/weixin_44724691/cangjie_bigprogram_generator) | — | weixin_44724691 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,g,w |

### AI 与智能体（58）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/ACEHarness](https://gitcode.com/Cangjie-SIG/ACEHarness) | 重构你的Agent生产力 \| Your team of AI | SIG | ★ 162 / Fork 62 | 2026-07-25 · 活跃 | — |
| [Cangjie-SIG/CangjieSkills](https://gitcode.com/Cangjie-SIG/CangjieSkills) | No description | SIG | ★ 78 / Fork 58 | 2026-07-24 · 活跃 | c,Cangjie,s,仓颉 |
| [梅科尔工作室/CM_Recipe 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_Recipe) | 一款基于Cangjie Magic 打造智能食谱系统，做饭小白只需输入食材以及口味，便可生成一份详细且富有趣味的定制化菜谱 | 梅科尔工作室 | ★ 59 / Fork 2 | 11 months ago · 维护中 | c,Cangjie,m,r,s |
| [UCToo/agentskills-runtime](https://gitcode.com/UCToo/agentskills-runtime) | AgentSkills Runtime 是一个基于仓颉编程语言实现的 Agent Skills 标准运行时环境。它是对MCP、WebMCP、AgentSkills、智能体互联国家标准GB/Z 185-2026等开放标准的国产技术栈实现，提供了安全、高效的 AI 智能体运行环境。同时提供了多语言SDK适配各种技术栈。旨在让 AgentSkills 能够在任何… | UCToo | ★ 54 / Fork 5 | 2 days ago · 活跃 | a,Cangjie,r,u |
| [梅科尔工作室/CM_PetAssistant 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_PetAssistant) | 一款基于CanjieMagic打造的AI猫咪养护助手 | 梅科尔工作室 | ★ 54 / Fork 2 | 11 months ago · 维护中 | a,c,m,p,s |
| [梅科尔工作室/CM_BioSnap 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_BioSnap) | 我们打造的菌趣百科小助手是基于Cangjie Magic智能体引擎与MCP协议开发的菌落知识互动平台，将专业微生物检测转化为趣味科学探索。 | 梅科尔工作室 | ★ 53 / Fork 2 | 6 months ago · 活跃 | b,c,s,仓颉 |
| [梅科尔工作室/CM_Poem_Master 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_Poem_Master) | 本项目涵盖Cangjie Magic环境配置到智能体构建和使用的全流程教程，以诗词大师的案例展现Cangjie Magic的开发优势 | 梅科尔工作室 | ★ 51 / Fork 1 | 6 months ago · 活跃 | c,Cangjie,m,p,s |
| [梅科尔工作室/CM_AreaSolver 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_AreaSolver) | 一款基于Cangjie Magic的智能几何计算系统 | 梅科尔工作室 | ★ 51 / Fork 0 | 11 months ago · 维护中 | a,c,Cangjie,m,s,仓颉 |
| [梅科尔工作室/CM_SoilDoctor 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_SoilDoctor) | 本项目将带领读者探索 Cangjie Magic 的开发环境配置、智能体构建方法，并通过土壤医生智能体这一实际应用案例，展示其在农业领域的强大潜力。 | 梅科尔工作室 | ★ 51 / Fork 0 | 8 months ago · 维护中 | c,d,m,s,仓颉 |
| [梅科尔工作室/CM_WireBonding 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_WireBonding) | 在半导体制造的精密世界里，引线键合过程以其高复杂性和高要求，成为生产环节中的关键挑战。而梅科尔工作室基于仓颉编程语言打造的 Cangjie Magic 平台，正以其独特的技术优势，为这一环节注入智能化的新活力 | 梅科尔工作室 | ★ 48 / Fork 1 | 11 months ago · 维护中 | b,c,Cangjie,m,s,w,仓颉 |
| [Cangjie-TPC/CangjieMagic-MCPServer](https://gitcode.com/Cangjie-TPC/CangjieMagic-MCPServer) | No description | TPC | ★ 23 / Fork 3 | 2025-04-24 · 低活跃 | c,Cangjie,m,t |
| [Cangjie-TPC/MagicExplorer](https://gitcode.com/Cangjie-TPC/MagicExplorer) | 基于CangjieMagic(Cangjie Agent DSL)开发的自然语言浏览器Agent系统 | TPC | ★ 23 / Fork 3 | 2025-10-11 · 维护中 | — |
| [Cangjie-TPC/cangjiexiaozhi](https://gitcode.com/Cangjie-TPC/cangjiexiaozhi) | No description | TPC | ★ 22 / Fork 1 | 2025-08-14 · 维护中 | — |
| [LiqD/CloudUI](https://gitcode.com/LiqD/CloudUI) | 一个鸿蒙的开源ai客户端 | LiqD | ★ 22 / Fork 0 | 7 months ago · 维护中 | c,d,l,s,u |
| [Cangjie-TPC/CangChain](https://gitcode.com/Cangjie-TPC/CangChain) | 基于Cangjie的多智能体协同框架 | TPC | ★ 19 / Fork 4 | 2024-09-21 · 低活跃 | — |
| [Cangjie-SIG/DocFlow](https://gitcode.com/Cangjie-SIG/DocFlow) | No description | SIG | ★ 15 / Fork 1 | 2026-02-06 · 活跃 | — |
| [Cangjie-SIG/cangjie-docs-mcp](https://gitcode.com/Cangjie-SIG/cangjie-docs-mcp) | 专为Claude Code设计的仓颉语言文档检索MCP服务器，让你能够直接在Claude Code中高效查询仓颉编程语言的所有文档。 | SIG | ★ 15 / Fork 0 | 2026-07-26 · 活跃 | — |
| [louloulin/codelin](https://gitcode.com/louloulin/codelin) | 基于仓颉实现的智能编助手 | louloulin | ★ 9 / Fork 6 | 9 months ago · 维护中 | c,l |
| [Cangjie-SIG/DocAgent](https://gitcode.com/Cangjie-SIG/DocAgent) | No description | SIG | ★ 7 / Fork 2 | 2025-09-03 · 维护中 | — |
| [zhangyin_gitcode/naivesqlbuilder](https://gitcode.com/zhangyin_gitcode/naivesqlbuilder) | 一个简易的SQL生成工具。#仓颉# #cangjie# | zhangyin_gitcode | ★ 6 / Fork 5 | 3 months ago · 活跃 | g,n,z |
| [qingss0/bot4cj](https://gitcode.com/qingss0/bot4cj) | 基于仓颉和linux-i2c接口的硬件机器人软件 | qingss0 | ★ 5 / Fork 0 | 23 days ago · 活跃 | b,q |
| [zhangyin_gitcode/llm_caller](https://gitcode.com/zhangyin_gitcode/llm_caller) | 教学用大模型调用工具。 | zhangyin_gitcode | ★ 5 / Fork 0 | 9 months ago · 维护中 | c,g,l,z |
| [zhangyin_gitcode/hamster_commander_toolkit](https://gitcode.com/zhangyin_gitcode/hamster_commander_toolkit) | 教学用大模型调用工具。 | zhangyin_gitcode | ★ 4 / Fork 2 | 1 year ago · 低活跃 | c,g,h,z |
| [zhangyin_gitcode/naivevalidation](https://gitcode.com/zhangyin_gitcode/naivevalidation) | 一个简易的数据验证工具。#仓颉# #cangjie# | zhangyin_gitcode | ★ 2 / Fork 2 | 4 months ago · 活跃 | g,n,z |
| [Cangjie-SIG/SpecLang](https://gitcode.com/Cangjie-SIG/SpecLang) | 一个可验证的半形式化软件规约定义、以及配套的 AI 开发流程。目的是保证从需求设计 -&gt; 实现设计 -&gt; 代码产出全流程对需求的理解都完全一致。所有功能都以 skill 的形式承载。 | SIG | ★ 2 / Fork 0 | 2026-07-22 · 活跃 | — |
| [raozj/RGF_AirplaneBattle](https://gitcode.com/raozj/RGF_AirplaneBattle) | 这是书籍《仓颉Windows桌面应用开发（微课视频版）》第十四章《边练边学之飞机大战》的提交历史代码库。本仓库包含了书籍小节中的提交内容，以及变更历史。 | raozj | ★ 2 / Fork 0 | 7 months ago · 维护中 | a,b,r |
| [Tlntin/OpenAI_Chat_CJ](https://gitcode.com/Tlntin/OpenAI_Chat_CJ) | 使用仓颉完成OpenAI类接口的聊天 | Tlntin | ★ 2 / Fork 0 | 1 year ago · 低活跃 | a,c,o |
| [STAND-ALONE/SAAI](https://gitcode.com/STAND-ALONE/SAAI) | 基于仓颉的个人AI助手。 | STAND-ALONE | ★ 1 / Fork 0 | 4 months ago · 活跃 | a,s |
| [zhangyin_gitcode/naivelogger](https://gitcode.com/zhangyin_gitcode/naivelogger) | 一个简易的、可扩展的日志工具。支持多头输出，每个头独立配置。 | zhangyin_gitcode | ★ 0 / Fork 2 | 4 months ago · 活跃 | g,n,z |
| [zhangyin_gitcode/naivehealthcheck](https://gitcode.com/zhangyin_gitcode/naivehealthcheck) | 一个简易的健康检查工具。 | zhangyin_gitcode | ★ 0 / Fork 1 | 4 months ago · 活跃 | n,z |
| [airuyi/aicj_study](https://gitcode.com/airuyi/aicj_study) | 仓颉编程语言学习网站 | airuyi | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,s |
| [Cangjie-SIG/CangjieHelp](https://gitcode.com/Cangjie-SIG/CangjieHelp) | No description | SIG | ★ 0 / Fork 0 | 2026-03-17 · 活跃 | — |
| [Cangjie-SIG/CangjieKG](https://gitcode.com/Cangjie-SIG/CangjieKG) | No description | SIG | ★ 0 / Fork 0 | 2026-04-28 · 活跃 | — |
| [chaoling83/snmp-agent-cj](https://gitcode.com/chaoling83/snmp-agent-cj) | — | chaoling83 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,s |
| [dustleafwjl/cjdiff](https://gitcode.com/dustleafwjl/cjdiff) | 一个专为 AI 场景设计的多策略柔性补丁应用库。支持精确替换、模糊匹配到标准格式的三层策略体系，具备置信度评估与自动降级自纠错能力。 | dustleafwjl | ★ 0 / Fork 0 | 5 days ago · 活跃 | c,d |
| [FateRain/colors](https://gitcode.com/FateRain/colors) | 🚀 简洁的命令行着色工具包，可以设置常用的文字样式、文字颜色预设、背景颜色预设。 | FateRain | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,f,r |
| [iJet/gitoxide-cli](https://gitcode.com/iJet/gitoxide-cli) | 基于 gitoxide-cj 的命令行 Git 工具 — gitoxide 的仓颉语言移植版。 gitoxide-cli（以 gitcj 命令调用）提供了 Git 底层（plumbing）和高层（porcelain）命令，用于检查和操作仓库，类似于原版 gitoxide 中的 gix 二进制。 | iJet | ★ 0 / Fork 0 | 5 days ago · 活跃 | g,i,j |
| [jsjyhy/Hw3-图像隐写与MP3倍速的GUI-Web实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=jsjyhy%2FHw3-%E5%9B%BE%E5%83%8F%E9%9A%90%E5%86%99%E4%B8%8EMP3%E5%80%8D%E9%80%9F%E7%9A%84GUI-Web%E5%AE%9E%E7%8E%B0) | 用户可通过界面完成图像隐写和MP3倍速的输入、处理与结果展示。项目在原有命令行程序基础上实现Web界面，支持文件上传、参数输入、结果展示及前后端交互。【此简介由AI生成】 | jsjyhy | ★ 0 / Fork 0 | 4 months ago · 活跃 | h,j,w |
| [jsjyhy/Hw3-图像隐写与MP3倍速的GUI-Web实现_9828 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=jsjyhy%2FHw3-%E5%9B%BE%E5%83%8F%E9%9A%90%E5%86%99%E4%B8%8EMP3%E5%80%8D%E9%80%9F%E7%9A%84GUI-Web%E5%AE%9E%E7%8E%B0_9828) | 用户可通过界面完成图像隐写和MP3倍速的输入、处理与结果展示。项目在原有命令行程序基础上实现Web界面，支持文件上传、参数输入、结果展示及前后端交互。【此简介由AI生成】 | jsjyhy | ★ 0 / Fork 0 | 3 months ago · 活跃 | h,j,w |
| [JumpMasterJJ/gitcode-bot](https://gitcode.com/JumpMasterJJ/gitcode-bot) | A specialized bot for GitCode, written in \[Cangjie\](https://cangjie-lang.cn/). | JumpMasterJJ | ★ 0 / Fork 0 | 4 months ago · 活跃 | b,j,m |
| [LilFlameZ/AnalyzeDirectoryAgent](https://gitcode.com/LilFlameZ/AnalyzeDirectoryAgent) | 基于 CangjieMagic 实现的文件夹内容分析智能体 | LilFlameZ | ★ 0 / Fork 0 | 9 months ago · 维护中 | a,f,l,z |
| [maichengzuo/fmcomputing_service](https://gitcode.com/maichengzuo/fmcomputing_service) | — | maichengzuo | ★ 0 / Fork 0 | 15 days ago · 活跃 | f,s |
| [ovOen/CM_Travel_Assistant](https://gitcode.com/ovOen/CM_Travel_Assistant) | 当国产编程语言遇上Agent，Cangjie Magic如何颠覆旅行规划? | ovOen | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,c,o,t |
| [SGlow0708/AI-Chat](https://gitcode.com/SGlow0708/AI-Chat) | — | SGlow0708 | ★ 0 / Fork 0 | 4 months ago · 活跃 | a |
| [smile_suna/illness_inquiry_assistant](https://gitcode.com/smile_suna/illness_inquiry_assistant) | — | smile_suna | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,i |
| [xusp977/cangjie-calculatorGUI](https://gitcode.com/xusp977/cangjie-calculatorGUI) | 可视化计算器 — 仓颉语言 Win32 可视化计算器（手动绘制版） 不依赖子控件，通过 WM_PAINT 绘制界面，WM_LBUTTONDOWN 检测点击 代码由AI生成 | xusp977 | ★ 0 / Fork 0 | 10 days ago · 活跃 | g,x |
| [xusp977/FiveInARow](https://gitcode.com/xusp977/FiveInARow) | 代码由AI生成 Cangjie Compiler: 1.0.5 (cjnative) Target: x86_64-w64-mingw32 | xusp977 | ★ 0 / Fork 0 | 10 days ago · 活跃 | a,i,x |
| [yejunchun2017/AI_mall](https://gitcode.com/yejunchun2017/AI_mall) | — | yejunchun2017 | ★ 0 / Fork 0 | 5 days ago · 活跃 | a,m,y |
| [yffsailling/SoKobanGame](https://gitcode.com/yffsailling/SoKobanGame) | 这是一个推箱子的小游戏。 | yffsailling | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,k,s,y |
| [ystyle/jisi-pavilion](https://gitcode.com/ystyle/jisi-pavilion) | 为多个 AI Agent 提供基于邀请码的群聊协作与跨会话记忆继承的 MCP 服务 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | j,p,y |
| [zhangyin_gitcode/naivehealthcheck_dapr](https://gitcode.com/zhangyin_gitcode/naivehealthcheck_dapr) | 一个简易的健康检查工具。提供dapr健康检查功能。 | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,n |
| [zhangyin_gitcode/naivehealthcheck_sql](https://gitcode.com/zhangyin_gitcode/naivehealthcheck_sql) | 一个简易的健康检查工具。提供数据库健康检查功能。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,n,s,z |
| [zhangyin_gitcode/naivehealthcheck_uris](https://gitcode.com/zhangyin_gitcode/naivehealthcheck_uris) | 一个简易的健康检查工具。提供基于URI的健康检查功能。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,n,u,z |
| [zhangyin_gitcode/naiversmapper](https://gitcode.com/zhangyin_gitcode/naiversmapper) | 一个简易的关系型数据库映射工具，适用于ArkData关系型数据库。 | zhangyin_gitcode | ★ 0 / Fork 0 | 3 months ago · 活跃 | g,n,z |
| [zhaocuinan/仓颉跨语言操作-1-windows 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zhaocuinan%2F%E4%BB%93%E9%A2%89%E8%B7%A8%E8%AF%AD%E8%A8%80%E6%93%8D%E4%BD%9C-1-windows) | 前置条件 安装clang编译器 编译c语言 clang test.c -shared -o libtest.dll 编译成 libtest.dll 编译仓颉语言 cjc -L . -l test ./main.cj 编译成exe文件 确保main.exe 与 libtest.dll在同一个目录下 可以正确执行 __declspec(dllexport) d… | zhaocuinan | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,t,w,z,仓颉 |
| [ZUT_仓颉/literature-agent-system 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fliterature-agent-system) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,Cangjie,l,z,仓颉 |
| [ZUT_仓颉/T_dpy_116 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_dpy_116) | 可用于体验经典井字棋游戏或学习仓颉语言开发。支持双人对战、人机对战（简单/困难模式），困难模式AI采用最优策略，棋盘实时原地更新，游戏结束可重新开始或退出。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,t,仓颉 |
| [ZUT_仓颉/tk大战 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Ftk%E5%A4%A7%E6%88%98) | 经典坦克大战游戏 — 仓颉编程语言控制台版。 单人操控坦克，在地图中与 AI 敌方坦克对战，击毁所有敌人即可获胜。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,k,t,z |

### 网络与系统服务（24）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/pothos](https://gitcode.com/Cangjie-SIG/pothos) | Pothos 是一款动态域名解析工具，目前支持阿里云 DNS 云解析, 后续会支持其他主流服务商 DNS 云解析。 | SIG | ★ 25 / Fork 1 | 2025-08-14 · 维护中 | c,Cangjie,p,s |
| [yishengTH/SeedHTTP](https://gitcode.com/yishengTH/SeedHTTP) | 仓颉后端生态的高性能HTTP服务器（http-server） | yishengTH | ★ 14 / Fork 5 | 3 months ago · 活跃 | h,s,t,y |
| [Cangjie-SIG/o_proxy_server](https://gitcode.com/Cangjie-SIG/o_proxy_server) | 反向代理服务器 作为客户端与后端服务器之间的中介，负责接收请求、转发至后端并将响应返回客户端，同时实现负载均衡、安全防护和性能优化等功能。 o_proxy_server 是使用仓颉语言实现的反向代理服务器, 实现了请求转发、身份验证、负载均衡、路径重写等功能 | SIG | ★ 10 / Fork 0 | 2026-03-24 · 活跃 | c,o,s,仓颉 |
| [devinx3/simpleServer](https://gitcode.com/devinx3/simpleServer) | 基于仓颉的简易服务器 | devinx3 | ★ 5 / Fork 1 | 1 year ago · 低活跃 | d,s |
| [cangjie-script/lsp](https://gitcode.com/cangjie-script/lsp) | 使用cjp-language编写的语言服务器 | cangjie-script | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,l,s |
| [tangmoying/Cangjie-SimpleHttpServer](https://gitcode.com/tangmoying/Cangjie-SimpleHttpServer) | 使用仓颉编程语言实现的一个简单的HTTP服务器，功能类似于`Python`语言的`SimpleHTTPServer`，主要用于在本地快速搭建一个临时的Web服务器，可用于提供文件浏览、下载服务或托管纯静态HTML网站。 | tangmoying | ★ 2 / Fork 0 | 11 months ago · 维护中 | c,Cangjie,h,t |
| [oceanSimple/o_proxy_server](https://gitcode.com/oceanSimple/o_proxy_server) | 基于仓颉语言开发的反向代理服务器 | oceanSimple | ★ 1 / Fork 2 | 1 year ago · 低活跃 | o,p,s |
| [zhangyin_gitcode/tea_single_threaded_example](https://gitcode.com/zhangyin_gitcode/tea_single_threaded_example) | 单线程服务器示例。 | zhangyin_gitcode | ★ 0 / Fork 1 | 1 year ago · 低活跃 | e,s,t |
| [zhangyin_gitcode/tea_single_threaded_example_loader](https://gitcode.com/zhangyin_gitcode/tea_single_threaded_example_loader) | 单线程服务器示例负载发起端。 | zhangyin_gitcode | ★ 0 / Fork 1 | 1 year ago · 低活跃 | e,t |
| [AmiracleTa/cangjie-web-server](https://gitcode.com/AmiracleTa/cangjie-web-server) | 使用仓颉移植 500lines 中的 web-server 项目 | AmiracleTa | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,s,t,w |
| [Cangjie-SIG/gateway-cj](https://gitcode.com/Cangjie-SIG/gateway-cj) | 仓颉语言微服务网关 | SIG | ★ 0 / Fork 0 | 2026-05-09 · 活跃 | — |
| [chaoling83/dns-cj](https://gitcode.com/chaoling83/dns-cj) | 用仓颉（Cangjie）语言实现一个**架构、配置、能力全面对标 CoreDNS** 的 DNS 服务器。 | chaoling83 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,d |
| [Chu__a/cangjie移植_500lines中的webserver 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Chu__a%2Fcangjie%E7%A7%BB%E6%A4%8D_500lines%E4%B8%AD%E7%9A%84webserver) | 本项目是对 `aosabook/500lines` 中 `web-server` 案例的仓颉语言移植实现。原项目通过逐步演进的方式展示一个小型 Web 服务器从最简单的固定响应，到静态文件服务、目录处理、CGI 脚本执行，再到最终重构版本的完整过程。 | Chu__a | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,w |
| [joy7/sftp4cj](https://gitcode.com/joy7/sftp4cj) | sftp服务器与客户端的仓颉实现 | joy7 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,s |
| [lqyiwwx/cangjie-server](https://gitcode.com/lqyiwwx/cangjie-server) | 仓颉服务端 | lqyiwwx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,l |
| [m0_74136883/SimpleFileHttpServer](https://gitcode.com/m0_74136883/SimpleFileHttpServer) | SimpleFileHttpServer 是一个基于仓颉语言实现的简单静态文件HTTP服务器。它监听指定IP和端口的HTTP请求，支持GET方法，能够从指定目录读取并返回HTML文件内容。 | m0_74136883 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,m |
| [oceanSimple/o_proxy_server_demo](https://gitcode.com/oceanSimple/o_proxy_server_demo) | — | oceanSimple | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,o,p |
| [service/database](https://gitcode.com/service/database) | — | service | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,s |
| [service/jj](https://gitcode.com/service/jj) | 急急国王的工具, 生成一些辅助代码，能自动完成的事情就不要手动啦 | service | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,s |
| [service/jlog](https://gitcode.com/service/jlog) | — | service | ★ 0 / Fork 0 | 11 months ago · 维护中 | j |
| [szLilyWu/HttpNewsServer-Cangjie](https://gitcode.com/szLilyWu/HttpNewsServer-Cangjie) | 使用仓颉语言开发基于Http的新闻类应用服务器 | szLilyWu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,l,n,s,w |
| [tb0912/json_deserializable](https://gitcode.com/tb0912/json_deserializable) | 为简化从服务器获取的json数据对应实体类的书写 使用宏 进行自动生成接口实现 | tb0912 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,j,t |
| [valueyou24/仓颉RPC代理服务器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=valueyou24%2F%E4%BB%93%E9%A2%89RPC%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8) | — | valueyou24 | ★ 0 / Fork 0 | 6 months ago · 活跃 | b,d,e,h,i,k,v,仓颉 |
| [ystyle/mcp-cj](https://gitcode.com/ystyle/mcp-cj) | 仓颉语言实现的Model Context Protocol (MCP)服务器 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | c,m,y |

### Web 与业务应用（48）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [soulsoft/blog](https://gitcode.com/soulsoft/blog) | 基于spire的博客项目，用于帮助新手快速了解天擎的使用。 | soulsoft | ★ 13 / Fork 4 | 1 month ago · 活跃 | b,s |
| [ZhaoJun-zfh/cangjie_permission_system](https://gitcode.com/ZhaoJun-zfh/cangjie_permission_system) | — | ZhaoJun-zfh | ★ 10 / Fork 1 | 6 months ago · 活跃 | c,Cangjie,p,s,z |
| [zichexuelan/markit](https://gitcode.com/zichexuelan/markit) | 现代化 Cangjie Markdown 解析引擎和 + CLI 命令行程序，支持包含 Standard/CommonMark/GFM 规范在内的多种规格，可配置、灵活、高性能，支持实时预览，以及输出pdf、markdown、website、latex等多种格式。 | zichexuelan | ★ 3 / Fork 0 | 29 days ago · 活跃 | m,z |
| [tybb2026/tycj-admin](https://gitcode.com/tybb2026/tycj-admin) | 基于仓颉编程语言开发的高性能、高可用智能后台管理系统 | tybb2026 | ★ 2 / Fork 0 | 2 days ago · 活跃 | a,t |
| [2401_84872701/student_score_manage-天津农学院-于业-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2401_84872701%2Fstudent_score_manage-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E4%BA%8E%E4%B8%9A-%E4%BD%95%E7%8E%B2) | 学生成绩管理系统 实现功能：学生成绩展示、成绩统计、指令交互查询等功能 开发语言：Cangjie 1.0.5 | 2401_84872701 | ★ 1 / Fork 0 | 21 days ago · 活跃 | m,s |
| [cinyu/SoonLink](https://gitcode.com/cinyu/SoonLink) | SoonLink 是基于 仓颉编程语言 与 Ignite 构建的开源文件管理与跨端传输服务端。它聚焦“自己掌握数据、自己定义流转、自己接入自动化”，把文件浏览、分块上传、目录传输、CLI 与 MCP 收成一个可持续演进的基础能力面。 | cinyu | ★ 1 / Fork 0 | 1 month ago · 活跃 | s |
| [xiaoaoc/基于仓颉的Web图书管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=xiaoaoc%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84Web%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | xiaoaoc | ★ 1 / Fork 0 | 10 months ago · 维护中 | b,c,m,s,w,x |
| [abc5788/图书管理系统1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=abc5788%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F1) | 一个使用仓颉语言编写的极简命令行图书登记系统，支持添加图书和查看所有图书。适合仓颉语言初学者学习面向对象编程、单例模式、集合操作及控制台交互。 | abc5788 | ★ 0 / Fork 1 | 1 month ago · 活跃 | a,u |
| [HFNU-Cangjie/图书管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=HFNU-Cangjie%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 一个使用仓颉语言编写的极简命令行图书登记系统，支持添加图书和查看所有图书。适合仓颉语言初学者学习面向对象编程、单例模式、集合操作及控制台交互。 | HFNU-Cangjie | ★ 0 / Fork 1 | 1 month ago · 活跃 | Cangjie,u |
| [2301_80552013/T_fhy_530](https://gitcode.com/2301_80552013/T_fhy_530) | 仓颉语言实现的学生成绩管理系统 | 2301_80552013 | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,t |
| [f5IIIII/SimpleWebCrawler](https://gitcode.com/f5IIIII/SimpleWebCrawler) | 使用cangjie编写的一个网络爬虫项目 | f5IIIII | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,s,w |
| [feizaohe/student-managerment-systerm](https://gitcode.com/feizaohe/student-managerment-systerm) | 学生管理系统 | feizaohe | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,m,s |
| [gcw_5YB8ts9Q/warehouse-management-system](https://gitcode.com/gcw_5YB8ts9Q/warehouse-management-system) | 仓颉语言实现的仓库物资管理系统，支持增删改查、库存盘点等功能 | gcw_5YB8ts9Q | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,m,q,s,w |
| [gcw_RG4lIFnE/银行存取款管理系统_浙江树人学院_苏杭嘉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_RG4lIFnE%2F%E9%93%B6%E8%A1%8C%E5%AD%98%E5%8F%96%E6%AC%BE%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F_%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2_%E8%8B%8F%E6%9D%AD%E5%98%89) | — | gcw_RG4lIFnE | ★ 0 / Fork 0 | 7 months ago · 维护中 | e,i,y |
| [gcw_tihzYx59/图书管理系统-临沂科技职业学院-信义龙--指导老师李晓坤 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_tihzYx59%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F-%E4%B8%B4%E6%B2%82%E7%A7%91%E6%8A%80%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2-%E4%BF%A1%E4%B9%89%E9%BE%99--%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E6%9D%8E%E6%99%93%E5%9D%A4) | — | gcw_tihzYx59 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,t,y |
| [Hatohas/图书馆管理系统浙江树人学院竺煜杰 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Hatohas%2F%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2%E7%AB%BA%E7%85%9C%E6%9D%B0) | — | Hatohas | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,m |
| [Jslog/shopcj](https://gitcode.com/Jslog/shopcj) | cangjieB2B,B2C商城后端 | Jslog | ★ 0 / Fork 0 | 4 months ago · 活跃 | s |
| [lwl2308054426/图书管理系统-天津农学院-李汶亮-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=lwl2308054426%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E6%9D%8E%E6%B1%B6%E4%BA%AE-%E4%BD%95%E7%8E%B2) | 基于仓颉语言的图书管理系统 | lwl2308054426 | ★ 0 / Fork 0 | 23 days ago · 活跃 | l,m,s |
| [n123456987654321/基于仓颉的学生信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=n123456987654321%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 学生信息管理系统，提供添加，修改，查询，删除学生信息等功能 | n123456987654321 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,n |
| [weixin_49360835/基于仓颉语言的学生信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=weixin_49360835%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%9A%84%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | weixin_49360835 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h,t,w |
| [ZUT_仓颉/cangjie-library-system 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fcangjie-library-system) | 仓颉语言实现的图书管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,l,z,仓颉 |
| [ZUT_仓颉/D_dlx104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_dlx104) | 学生成绩管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,仓颉 |
| [ZUT_仓颉/library_system 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Flibrary_system) | 基于仓颉语言完成的图书管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h,l,s,t,z |
| [ZUT_仓颉/student-managerment-systerm 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fstudent-managerment-systerm) | 学生管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,m,s,z,仓颉 |
| [ZUT_仓颉/T_fzh_013 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_fzh_013) | 学生管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,f,t,z |
| [ZUT_仓颉/T_hwy_320 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_hwy_320) | 仓颉语言控制台图书借阅管理系统，总代码1568行，纯顶层函数编写，无class、static、pub修饰符。 功能包含：用户注册登录（管理员/普通读者双权限）、图书新增/删除/模糊检索、图书借阅、归还、逾期自动生成罚款、罚金缴纳、个人借阅记录查询。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,t,z,仓颉 |
| [ZUT_仓颉/T_lmy_202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_lmy_202) | 学生信息管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,l,t,z,仓颉 |
| [ZUT_仓颉/T_zb_917 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zb_917) | 学生管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/WarehouseMaterialManagementSystem 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FWarehouseMaterialManagementSystem) | 本仓库物资管理系统功能完整、逻辑严谨，完整实现了小型仓库基础物资管理业务。整体代码遵循仓颉语言编码规范，结构分层明确，交互简洁直观，既可以作为编程语言实践案例，也可应用于小型库房、工作室等简易仓储场景，具备较强的实用性与学习参考价值。后续可在此基础上拓展批量操作、数据持久化、分类筛选等进阶功能。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,s,w,z,仓颉 |
| [ZUT_仓颉/个人任务管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%B8%AA%E4%BA%BA%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,m,t,z |
| [ZUT_仓颉/仓颉学生信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 一款基于 仓颉编程语言 开发的命令行交互式学生信息管理系统，实现多科目成绩管理、智能数据统计、文件自动备份、分页浏览、多维排序搜索等完整功能，是掌握仓颉语言核心特性的综合实战项目。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,t,z,仓颉 |
| [ZUT_仓颉/公司职员信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%85%AC%E5%8F%B8%E8%81%8C%E5%91%98%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | e,z,仓颉 |
| [ZUT_仓颉/员工管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 员工管理系统，实现增删改查 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,y,z,仓颉 |
| [ZUT_仓颉/员工管理系统实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E5%AE%9E%E7%8E%B0) | 这是一个员工管理系统，实现基本的增删改查，包含有 1. 查看所有员工 2. 添加员工 3. 查找员工（按ID） 4. 修改员工信息 5. 删除员工 6. 按姓名搜索 7. 按部门筛选 8. 部门平均薪资统计 9. 薪资最高的员工 10. 保存数据到文件 11. 从文件加载数据 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,t,z,仓颉 |
| [ZUT_仓颉/商品库存管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%95%86%E5%93%81%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 商品库存管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | t,z,仓颉 |
| [ZUT_仓颉/图书管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,仓颉 |
| [ZUT_仓颉/图书管理系统1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | j,z,仓颉 |
| [ZUT_仓颉/基于仓颉编程语言的学生成绩管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E7%9A%84%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 学生成绩管理系统 基于“仓颉编程语言”（Cangjie）开发的交互式学生成绩管理系统，支持学生信息管理、成绩录入、排名统计、成绩报表等功能。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | j,z,仓颉 |
| [ZUT_仓颉/外卖骑手信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A4%96%E5%8D%96%E9%AA%91%E6%89%8B%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,f,z,仓颉 |
| [ZUT_仓颉/学生个人管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E4%B8%AA%E4%BA%BA%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,仓颉 |
| [ZUT_仓颉/学生信息管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 学生信息管理系统 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,x,仓颉 |
| [ZUT_仓颉/学生成绩管理系统_增删改查 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F_%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5) | 学生成绩信息管理，可对学生成绩信息进行增删改查 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,t,z,仓颉 |
| [ZUT_仓颉/学生成绩课程管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E8%AF%BE%E7%A8%8B%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,w,z |
| [ZUT_仓颉/学生管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | j,t,仓颉 |
| [ZUT_仓颉/社团活动管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%A4%BE%E5%9B%A2%E6%B4%BB%E5%8A%A8%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,s,z,仓颉 |
| [ZUT_仓颉/社团管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%A4%BE%E5%9B%A2%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,仓颉 |
| [ZUT_仓颉/若涵_基于仓颉Web的在线聊天系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%8B%A5%E6%B6%B5_%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89Web%E7%9A%84%E5%9C%A8%E7%BA%BF%E8%81%8A%E5%A4%A9%E7%B3%BB%E7%BB%9F) | 本项目是一个关于仓颉知识学习系统的一个项目 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,t,z,仓颉 |
| [ZzzzGggg_/仓颉语言实现的学生成绩管理系统-浙江树人学院-郭昱含 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZzzzGggg_%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F-%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2-%E9%83%AD%E6%98%B1%E5%90%AB) | 基于仓颉语言开发的学生成绩管理系统，具备学生信息管理、成绩录入查询、统计分析等功能。采用模块化设计，支持多用户权限，适用于各类教育机构的成绩管理需求。 | ZzzzGggg_ | ★ 0 / Fork 0 | 7 months ago · 维护中 | g,z,仓颉 |

### 桌面、移动与 UI（8）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [jackhetie/学生成绩管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=jackhetie%2F%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 是一个基于仓颉语言开发的学生成绩管理系统。该项目提供完整的学生信息管理、成绩录入、统计分析功能，采用面向对象设计，包含学生类、成绩管理类等模块。系统具有交互式菜单界面，支持平均分计算、成绩查询、数据统计等操作，展示了仓颉语言的类封装、集合操作和错误处理等特性，适合教育机构进行学生成绩管理。 | jackhetie | ★ 1 / Fork 0 | 7 months ago · 维护中 | j |
| [xiaohuiii/pb](https://gitcode.com/xiaohuiii/pb) | 简单的命令行进度条for cangjie | xiaohuiii | ★ 1 / Fork 0 | 1 year ago · 低活跃 | p,x |
| [vchuoshen6/terminal.ui](https://gitcode.com/vchuoshen6/terminal.ui) | 面向终端应用的组件库 | vchuoshen6 | ★ 0 / Fork 2 | 1 month ago · 活跃 | t,v |
| [zhangyin_gitcode/fakeuuid4cj](https://gitcode.com/zhangyin_gitcode/fakeuuid4cj) | 一个伪造的uuid工具。 | zhangyin_gitcode | ★ 0 / Fork 1 | 5 months ago · 活跃 | f,g,z |
| [Harry_LuoMingRui/简易待办事项管理器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Harry_LuoMingRui%2F%E7%AE%80%E6%98%93%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E7%AE%A1%E7%90%86%E5%99%A8) | 这是一个基于仓颉语言开发的简易命令行待办事项管理器，支持添加、标记完成、删除、列出待办事项等基础功能，适合快速管理日常任务。 | Harry_LuoMingRui | ★ 0 / Fork 0 | 8 months ago · 维护中 | h,l,m,t |
| [linluo86/linLuoLayui](https://gitcode.com/linluo86/linLuoLayui) | 仓颉web的管理系统单体 | linluo86 | ★ 0 / Fork 0 | 10 months ago · 维护中 | l |
| [qq_44992579/tools](https://gitcode.com/qq_44992579/tools) | — | qq_44992579 | ★ 0 / Fork 0 | 5 days ago · 活跃 | q |
| [szLilyWu/HttpNewsApp-Cangjie](https://gitcode.com/szLilyWu/HttpNewsApp-Cangjie) | 使用仓颉语言开发基于Http的HarmonyOS新闻类应用 | szLilyWu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,h,l,n,w |

### 游戏与多媒体（73）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Bzrce/NJUST基于仓颉的打砖块游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Bzrce%2FNJUST%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E6%89%93%E7%A0%96%E5%9D%97%E6%B8%B8%E6%88%8F) | — | Bzrce | ★ 2 / Fork 0 | 8 months ago · 维护中 | b,n |
| [zhangyin_gitcode/spu4cj](https://gitcode.com/zhangyin_gitcode/spu4cj) | 一个用于流处理应用的领域特定嵌入式语言，适用于软件定义无线电（SDR）系统、音视频处理以及一般的单速率同步数据流（SDF）流处理应用。 | zhangyin_gitcode | ★ 1 / Fork 6 | 3 months ago · 活跃 | g,s,z |
| [ZUT_仓颉/PushBox 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FPushBox) | 一个仓颉写的推箱子小游戏 | ZUT_仓颉 | ★ 1 / Fork 1 | 5 months ago · 活跃 | b,Cangjie,p,z,仓颉 |
| [raozj/RGF_CourseCode](https://gitcode.com/raozj/RGF_CourseCode) | 这是书籍《仓颉Windows桌面应用开发（微课视频版）》配套课程视频的提交历史代码库。本仓库包含了视频中的提交内容，以及变更历史。 | raozj | ★ 1 / Fork 0 | 7 months ago · 维护中 | c |
| [raozj/RGF_Whiteboard](https://gitcode.com/raozj/RGF_Whiteboard) | 这是书籍《仓颉Windows桌面应用开发（微课视频版）》第十三章《边练边学之教学白板》的提交历史代码库。本仓库包含了书籍小节中的提交内容，以及变更历史。 | raozj | ★ 1 / Fork 0 | 9 months ago · 维护中 | r,w |
| [zsy619/基于CjWeave的mmo游戏示例 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zsy619%2F%E5%9F%BA%E4%BA%8ECjWeave%E7%9A%84mmo%E6%B8%B8%E6%88%8F%E7%A4%BA%E4%BE%8B) | 基于CjWeave的mmo游戏示例 | zsy619 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | g,m,w |
| [ZUT_仓颉/D_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_mcl220) | 该项目主要实现了3x3的井字棋游戏 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,d,j,z,仓颉 |
| [ZUT_仓颉/D_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ZSK303) | 仓颉大作业，扫雷小游戏 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/T_YPY_102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_YPY_102) | 打砖块小游戏 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,y,z |
| [ZUT_仓颉/仓颉实现的2048小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%842048%E5%B0%8F%E6%B8%B8%E6%88%8F) | 仓颉实现的2048小游戏 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 month ago · 活跃 | t,w,z,仓颉 |
| [Evil__Bear/Minesweeper](https://gitcode.com/Evil__Bear/Minesweeper) | 仓颉语法实现的简单扫雷游戏 | Evil__Bear | ★ 0 / Fork 1 | 1 month ago · 活跃 | b,e,m |
| [TYMM/心灵感应魔法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=TYMM%2F%E5%BF%83%E7%81%B5%E6%84%9F%E5%BA%94%E9%AD%94%E6%B3%95) | 哈利·波特之心灵感应魔法是一种常见的儿童益智游戏。表演者首先会要求观众在心中默想一个60以内的整数，然后依次将图3-14所示的卡片1到卡片6展示给观众，并询问观众他所默想的数字是否在卡片上。在卡片出示的过程中，卡片是背对表演者的，即表演者是看不到卡片的。在听完观众的6个回答之后，表演者即可“猜” 出观众默想的数字，仿佛掌握了“读心术”一般。解析该游戏背后的… | TYMM | ★ 0 / Fork 1 | 1 month ago · 活跃 | p |
| [2301_80446875/自定义扫雷游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_80446875%2F%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%AB%E9%9B%B7%E6%B8%B8%E6%88%8F) | 仓颉语言创建的自定义扫雷游戏 | 2301_80446875 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [GCNEKO/剪刀石头布游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=GCNEKO%2F%E5%89%AA%E5%88%80%E7%9F%B3%E5%A4%B4%E5%B8%83%E6%B8%B8%E6%88%8F) | — | GCNEKO | ★ 0 / Fork 0 | 8 months ago · 维护中 | g |
| [gcw_AvuYueZq/仓颉写的贪吃蛇 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_AvuYueZq%2F%E4%BB%93%E9%A2%89%E5%86%99%E7%9A%84%E8%B4%AA%E5%90%83%E8%9B%87) | 本项目使用仓颉编程语言开发复古贪吃蛇小游戏，实现核心游玩机制： 1.方向键控制蛇身上下左右移动 2.吃到随机生成食物后身体变长、分数增加 3.触碰墙壁或自身身体判定游戏结束 4.简易计分展示，界面简洁易运行 5.适合仓颉语言初学者练习基础语法、循环与事件交互逻辑。 | gcw_AvuYueZq | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,g,s,y,仓颉 |
| [gcw_cRHpJCT9/贪吃蛇游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_cRHpJCT9%2F%E8%B4%AA%E5%90%83%E8%9B%87%E6%B8%B8%E6%88%8F) | — | gcw_cRHpJCT9 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,r |
| [gcw_i6VSfgX4/猜数字小游戏-天津农学院-张钰-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_i6VSfgX4%2F%E7%8C%9C%E6%95%B0%E5%AD%97%E5%B0%8F%E6%B8%B8%E6%88%8F-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E5%BC%A0%E9%92%B0-%E4%BD%95%E7%8E%B2) | 天津农学院仓颉课程作业，猜数字小游戏，代码无报错可正常运行。 | gcw_i6VSfgX4 | ★ 0 / Fork 0 | 24 days ago · 活跃 | g,i,n,x |
| [gcw_LkAEWdo5/tabchishe](https://gitcode.com/gcw_LkAEWdo5/tabchishe) | 本项目采用仓颉编程语言实现经典贪吃蛇小游戏，通过模块化编码完成蛇体移动、随机食物生成、边界与自身碰撞检测、分数统计等核心玩法，依靠原生能力完成画面绘制与按键交互，代码结构规整、运行轻便，既是对仓颉基础语法与图形编程的实战练习，也完整还原了贪吃蛇经典游玩体验。 | gcw_LkAEWdo5 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,g,l,t |
| [gcw_Njt2dSvN/guess-game-cangjie](https://gitcode.com/gcw_Njt2dSvN/guess-game-cangjie) | 猜数字小游戏 | gcw_Njt2dSvN | ★ 0 / Fork 0 | 21 days ago · 活跃 | Cangjie,g,s |
| [gcw_oG81YLXg/D_gomoku](https://gitcode.com/gcw_oG81YLXg/D_gomoku) | 基于仓颉编程语言开发的控制台双人五子棋游戏。 两位玩家在同一台终端上轮流落子，在 9×9 棋盘上率先连成五子者获胜。 | gcw_oG81YLXg | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,g,o |
| [gcw_YF2kmBp8/数字解密游戏-北京师范大学-张潇垚-高建花 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_YF2kmBp8%2F%E6%95%B0%E5%AD%97%E8%A7%A3%E5%AF%86%E6%B8%B8%E6%88%8F-%E5%8C%97%E4%BA%AC%E5%B8%88%E8%8C%83%E5%A4%A7%E5%AD%A6-%E5%BC%A0%E6%BD%87%E5%9E%9A-%E9%AB%98%E5%BB%BA%E8%8A%B1) | — | gcw_YF2kmBp8 | ★ 0 / Fork 0 | 8 months ago · 维护中 | b,g,y |
| [hid85916935/snake_game](https://gitcode.com/hid85916935/snake_game) | 控制台字符版贪吃蛇游戏 — 仓颉语言实现 | hid85916935 | ★ 0 / Fork 0 | 9 days ago · 活跃 | g,h,s |
| [liuanzhan/PushBox](https://gitcode.com/liuanzhan/PushBox) | 一个仓颉实现的推箱子小游戏 | liuanzhan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,l,p |
| [ljj1410446243/minesweeper](https://gitcode.com/ljj1410446243/minesweeper) | 简易的终端仓颉扫雷游戏 | ljj1410446243 | ★ 0 / Fork 0 | 8 months ago · 维护中 | l,m |
| [qq_39535992/基于仓颉语言开发简易猜数字游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=qq_39535992%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%BC%80%E5%8F%91%E7%AE%80%E6%98%93%E7%8C%9C%E6%95%B0%E5%AD%97%E6%B8%B8%E6%88%8F) | 这是一个使用华为仓颉编程语言开发的猜数字多人对战游戏，支持2-4名玩家，每人进行3轮猜数，每轮可自由选择难度。游戏采用"三马争位"的排名机制，根据玩家的总积分进行排名，决出上等马、中等马和下等马。 | qq_39535992 | ★ 0 / Fork 0 | 3 months ago · 活跃 | Cangjie,p,q |
| [Ronmi_/吉林大学-庞润锡-井字棋游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Ronmi_%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E5%BA%9E%E6%B6%A6%E9%94%A1-%E4%BA%95%E5%AD%97%E6%A3%8B%E6%B8%B8%E6%88%8F) | — | Ronmi_ | ★ 0 / Fork 0 | 6 months ago · 活跃 | r,t |
| [Sun3et001/基于仓颉实现的单词打字小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Sun3et001%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8D%95%E8%AF%8D%E6%89%93%E5%AD%97%E5%B0%8F%E6%B8%B8%E6%88%8F) | 基于仓颉实现的单词打字小游戏 · 词库包含 20 个英文单词，每轮随机抽取一个。 · 共 5 轮，需要准确输入看到的目标单词并回车。 · 每次输入会计时，最终统计正确数、平均用时，并给出趣味评价。 | Sun3et001 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,t |
| [tt88tt/game_dev_libraries](https://gitcode.com/tt88tt/game_dev_libraries) | — | tt88tt | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,g,t |
| [wnj_good/西邮硕士25级-仓颉代码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wnj_good%2F%E8%A5%BF%E9%82%AE%E7%A1%95%E5%A3%AB25%E7%BA%A7-%E4%BB%93%E9%A2%89%E4%BB%A3%E7%A0%81) | 本项目是基于仓颉语言开发的教育类控制台单词记忆小游戏，核心功能包括4级分级词库（涵盖四级、六级/考研、雅思/托福及专业领域，共60+带音标的单词）、智能难度晋级（答题≥10题且正确率≥80%自动升阶）、错题本记录（含错误答案与时间）、进度自动/手动保存，支持提示、音标查看、难度切换等交互指令，操作简单且适配不同英语水平。 | wnj_good | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,e,g,w,仓颉 |
| [zhouyihao42/cj2048](https://gitcode.com/zhouyihao42/cj2048) | 使用cangjie开发语言，版本1.1.3，实现的2048小游戏。 | zhouyihao42 | ★ 0 / Fork 0 | 19 days ago · 活跃 | c,z |
| [ZUT_仓颉/21点 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F21%E7%82%B9) | 仓颉小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,Cangjie,s,z,仓颉 |
| [ZUT_仓颉/BoxGame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBoxGame) | 推箱子小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,z,仓颉 |
| [ZUT_仓颉/D_2048 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_2048) | 2048小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d |
| [ZUT_仓颉/D_junqi 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_junqi) | 军棋小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lcg101) | 大作业：五子棋游戏，实现了人机对战 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z,仓颉 |
| [ZUT_仓颉/D_snake_game 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_snake_game) | 一个用仓颉语言完成的简单贪吃蛇小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,g,s |
| [ZUT_仓颉/D_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wch336) | 迷宫小游戏（使用键盘操控你的角色走出迷宫） ♀ : 小人 ☆: 终点 ! ：开关 门：需要用开关解锁 游戏规则 迷宫小游戏，操控小人打开开关，逃脱迷宫。 走出迷宫，逃脱升天！ | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z,仓颉 |
| [ZUT_仓颉/E3_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_gcl_127) | 作业3： 编写一个猜数字大小的游戏，程序生成一个随机数，然后用户猜大小，提示猜大了还是小了。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,仓颉 |
| [ZUT_仓颉/E3_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ls540) | 以下二选一： 写一个可以输入和输出各种基本类型的Demo程序 编写一个猜数字大小的游戏，程序生成一个随机数，然后用户猜大小，提示猜大了还是小了。 以下一选一： 输入指定年月的日历，输入年、月，及该月1号星期几，输出日历.如输入： 2025 3 3，输出该月日历。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/guessing_game_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fguessing_game_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,l |
| [ZUT_仓颉/GuessNumberGame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FGuessNumberGame) | 仓颉实现的猜数字游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,n,t |
| [ZUT_仓颉/jumpGame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FjumpGame) | 跳跃游戏仓颉算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,j,仓颉 |
| [ZUT_仓颉/mazegame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fmazegame) | 迷宫小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,g,m,z,仓颉 |
| [ZUT_仓颉/SnakeGame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FSnakeGame) | 贪吃蛇小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,z,仓颉 |
| [ZUT_仓颉/T_fxy_130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_fxy_130) | 基于仓颉编程语言开发的控制台双人五子棋游戏。 两位玩家在同一台终端上轮流落子，在 9×9 棋盘上率先连成五子者获胜。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,f,t,z,仓颉 |
| [ZUT_仓颉/T_gyc_728 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_gyc_728) | 文字格斗游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,t,z,仓颉 |
| [ZUT_仓颉/T_hcx_433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_hcx_433) | 军棋小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,t,z |
| [ZUT_仓颉/T_hs_223 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_hs_223) | 猜数小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,t,z,仓颉 |
| [ZUT_仓颉/T_hyx_208 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_hyx_208) | 用户可通过该项目体验经典的石头剪刀布游戏，输入数字选择出拳与电脑对战。项目核心功能包括随机出拳、胜负判断、战绩记录，支持退出查看最终战绩，使用模式匹配、随机数生成等技术实现。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h,t,z,仓颉 |
| [ZUT_仓颉/T_lh_516 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_lh_516) | 本项目采用仓颉编程语言实现经典贪吃蛇小游戏，通过模块化编码完成蛇体移动、随机食物生成、边界与自身碰撞检测、分数统计等核心玩法，依靠原生能力完成画面绘制与按键交互，代码结构规整、运行轻便，既是对仓颉基础语法与图形编程的实战练习，也完整还原了贪吃蛇经典游玩体验。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,l,t,z,仓颉 |
| [ZUT_仓颉/T_lzh_407 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_lzh_407) | 仓颉语言实现五子棋小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,l,t,z |
| [ZUT_仓颉/T_shz_904 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_shz_904) | 贪吃蛇小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,z,仓颉 |
| [ZUT_仓颉/T_wx_303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_wx_303) | 一个简单的贪吃蛇小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,w,z |
| [ZUT_仓颉/T_wzh_434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_wzh_434) | 使用仓颉实现的扫雷小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,w,z |
| [ZUT_仓颉/T_zs_704 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zs_704) | 仓颉实现的五子棋小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z |
| [ZUT_仓颉/Tetris 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FTetris) | 简单俄罗斯方块小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie |
| [ZUT_仓颉/仓颉写的贪吃蛇 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%86%99%E7%9A%84%E8%B4%AA%E5%90%83%E8%9B%87) | 本项目使用仓颉编程语言开发复古贪吃蛇小游戏，实现核心游玩机制： 1.方向键控制蛇身上下左右移动 2.吃到随机生成食物后身体变长、分数增加 3.触碰墙壁或自身身体判定游戏结束 4.简易计分展示，界面简洁易运行 5.适合仓颉语言初学者练习基础语法、循环与事件交互逻辑。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,z,仓颉 |
| [ZUT_仓颉/仓颉实现五子棋小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E4%BA%94%E5%AD%90%E6%A3%8B%E5%B0%8F%E6%B8%B8%E6%88%8F) | 仓颉实现五子棋小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,仓颉 |
| [ZUT_仓颉/仓颉实现数字炸弹游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E6%95%B0%E5%AD%97%E7%82%B8%E5%BC%B9%E6%B8%B8%E6%88%8F) | 数字炸弹小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,g,z,仓颉 |
| [ZUT_仓颉/仓颉实现的五子棋小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E4%BA%94%E5%AD%90%E6%A3%8B%E5%B0%8F%E6%B8%B8%E6%88%8F) | 五子棋 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,w,仓颉 |
| [ZUT_仓颉/仓颉实现的寻宝猎人小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%AF%BB%E5%AE%9D%E7%8C%8E%E4%BA%BA%E5%B0%8F%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,z,仓颉 |
| [ZUT_仓颉/仓颉实现的飞机大战游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98%E6%B8%B8%E6%88%8F) | 仓颉语言实现的飞机大战游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,仓颉 |
| [ZUT_仓颉/仓颉扫雷 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E6%89%AB%E9%9B%B7) | 扫雷是一款经典的单人益智游戏，起源于20世纪60年代。 玩家根据数字提示推断地雷位置，运用逻辑推理排除所有非雷区域。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/仓颉数字炸弹小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E6%95%B0%E5%AD%97%E7%82%B8%E5%BC%B9%E5%B0%8F%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,x,z,仓颉 |
| [ZUT_仓颉/仓颉语言下实现的推箱子游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E4%B8%8B%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%8E%A8%E7%AE%B1%E5%AD%90%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/仓颉语言实现的象棋小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E7%9A%84%E8%B1%A1%E6%A3%8B%E5%B0%8F%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/基于仓颉实现的贪吃蛇小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,x,z,仓颉 |
| [ZUT_仓颉/基于仓颉语言实现的推箱子游戏SoKobanGame 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%8E%A8%E7%AE%B1%E5%AD%90%E6%B8%B8%E6%88%8FSoKobanGame) | 基于仓颉语言实现的推箱子游戏SoKobanGame | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,k,l,t,z,仓颉 |
| [ZUT_仓颉/扫雷游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%89%AB%E9%9B%B7%E6%B8%B8%E6%88%8F) | 本项目是仓颉语言编写的控制台扫雷游戏，使用 9×9 棋盘与 10 颗地雷，依托仓颉标准库实现随机布雷、周边地雷计数、递归翻开、旗帜标记等功能。支持命令行交互操作，代码模块化、逻辑简洁，无需第三方依赖，可直接编译运行，适合学习仓颉基础语法、数组与算法实践。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,z,仓颉 |
| [ZUT_仓颉/推箱子小游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8E%A8%E7%AE%B1%E5%AD%90%E5%B0%8F%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/期末大作业仓颉实现五子棋游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%9F%E6%9C%AB%E5%A4%A7%E4%BD%9C%E4%B8%9A%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E4%BA%94%E5%AD%90%E6%A3%8B%E6%B8%B8%E6%88%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,t,z,仓颉 |
| [ZUT_仓颉/贪吃蛇游戏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%B4%AA%E5%90%83%E8%9B%87%E6%B8%B8%E6%88%8F) | 使用仓颉实现的贪吃蛇游戏算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,z,仓颉 |
| [ZUT_仓颉/飞机大战 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98) | 本项目使用仓颉语言实现了一个简单的飞机小游戏 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,p |

### DevOps、云原生与可观测性（3）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [yukariyuko/simplefilemoniter4cj](https://gitcode.com/yukariyuko/simplefilemoniter4cj) | 基于轮询的单线程文件系统变动监听器 | yukariyuko | ★ 1 / Fork 0 | 1 year ago · 低活跃 | s,y |
| [qq_21766175/Monitor](https://gitcode.com/qq_21766175/Monitor) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q |
| [ZUT_仓颉/T_xfy_604 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_xfy_604) | 基于仓颉编程语言的飞机大战游戏 ## 项目简介 使用华为仓颉（Cangjie）编程语言开发的经典飞机射击游戏， 作为仓颉语言课程的大作业。 ## 功能特性 - 玩家飞机移动与射击 - 多种敌机类型与行为 - 碰撞检测系统 - 分数统计与生命值管理 - 道具系统（炸弹、补给等） ## 技术要点 - 面向对象设计（飞机类、子弹类、敌机类） - 游戏循环与帧率控… | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,p,t,w,x,z,仓颉 |

### 安全工具（3）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [cj-awesome/Simple_HTTP_Server](https://gitcode.com/cj-awesome/Simple_HTTP_Server) | Simple HTTP Server 是一个使用仓颉编程语言实现的轻量级HTTP静态文件服务器，提供安全、高效的Web内容服务功能。该项目充分利用仓颉语言的现代特性，为开发者提供简洁易用的Web服务解决方案。 | cj-awesome | ★ 1 / Fork 1 | 8 months ago · 维护中 | a,h,s |
| [gcw_noibU8gY/vigenere-cipher](https://gitcode.com/gcw_noibU8gY/vigenere-cipher) | 基于仓颉编程语言（cangjie）实现的维吉尼亚密码加解密系统。支持自定义密钥流与100位强随机密钥自动生成，内置多场景自动化自检测测试集，具备高复用性与现代空安全防御功能。 | gcw_noibU8gY | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,n,u,v |
| [tybb2026/tycj-game](https://gitcode.com/tybb2026/tycj-game) | 面向HarmonyOS的轻量级2D游戏引擎，无GC停顿，内存安全 | tybb2026 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g |

### 测试与质量（7）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-TPC/TPC-Test-Framework](https://gitcode.com/Cangjie-TPC/TPC-Test-Framework) | 仓颉用例执行脚本 | TPC | ★ 16 / Fork 1 | 2026-07-16 · 活跃 | — |
| [OpenHarmony-SIG/xts_acts_cangjie](https://gitcode.com/OpenHarmony-SIG/xts_acts_cangjie) | 提供仓颉语言应用兼容性测试套件，提供验证设备兼容性的执行机制，开发者可以借助此套件对兼容性进行评估和验证 | OpenHarmony-SIG | ★ 4 / Fork 4 | 4 days ago · 活跃 | a,c,h,o,s,x,仓颉 |
| [gcw_UfxhHADX/图书管理系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_UfxhHADX%2F%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_UfxhHADX | ★ 1 / Fork 0 | 8 months ago · 维护中 | g,h,u |
| [2301_78926381/simpleforth](https://gitcode.com/2301_78926381/simpleforth) | 用仓颉语言实现的简易 Forth 解释器 —— Exercism Java Track Hard 难度。支持四则运算、栈操作、自定义词定义、IF/THEN 条件分支、BEGIN/UNTIL 循环、递归。19 个测试用例全部通过。 | 2301_78926381 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s |
| [gcw_nLpE8z1p/BOOKSTOE](https://gitcode.com/gcw_nLpE8z1p/BOOKSTOE) | BookStore 是一个基于仓颉语言实现的图书折扣计算系统。它解决经典的“哈利·波特系列图书折扣”问题：给定 5 种图书的购买数量，系统自动找出最优分组方案，使总折扣最大，并输出详细的价格计算过程。 该项目源自国际知名的“Harry Potter Kata”编程练习，已被广泛应用于函数式编程、算法设计及测试驱动开发的教学场景。本次移植旨在验证仓颉语言在算… | gcw_nLpE8z1p | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,g,n,p |
| [m18868123244/chip8emu](https://gitcode.com/m18868123244/chip8emu) | CHIP-8 是一种解释型编程语言，最初由 Joseph Weisbecker 在 1970 年代开发，用于简化 8 位计算机上的游戏开发。它包含 35 条简单指令，拥有一个 64×32 像素的单色显示屏和 16 键的键盘。 本项目严格遵循 CHIP-8 技术规范，完整实现了全部 35 条指令，并通过 48 个单元测试 验证。运行方式为 Windows 命… | m18868123244 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,m |
| [wangsijia-w/汉字拼图游戏-天津机电职业技术学院-王思佳-魏颖 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wangsijia-w%2F%E6%B1%89%E5%AD%97%E6%8B%BC%E5%9B%BE%E6%B8%B8%E6%88%8F-%E5%A4%A9%E6%B4%A5%E6%9C%BA%E7%94%B5%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2-%E7%8E%8B%E6%80%9D%E4%BD%B3-%E9%AD%8F%E9%A2%96) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | wangsijia-w | ★ 0 / Fork 0 | 7 months ago · 维护中 | Cangjie,e,w |

### 其他工具与应用（40）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [梅科尔工作室/CM_FWC 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E6%A2%85%E7%A7%91%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%2FCM_FWC) | 一款基于Cangjie Magic的趣味天气预报系统,把天气变成段子 | 梅科尔工作室 | ★ 31 / Fork 0 | 11 months ago · 维护中 | c,f,m |
| [PermissionDog/dapr-cangjie-sdk](https://gitcode.com/PermissionDog/dapr-cangjie-sdk) | Dapr Cangjie SDK是Dapr SDK的仓颉实现，实现了一个支持使用 HTTP 协议访问 Dapr 边车的客户端。 | PermissionDog | ★ 12 / Fork 3 | 1 year ago · 低活跃 | c,Cangjie,d,p,s,仓颉 |
| [copur/lanlu](https://gitcode.com/copur/lanlu) | 私有电子书/漫画/图集管理服务端 | copur | ★ 12 / Fork 0 | 23 hours ago · 活跃 | c,l |
| [copur/opds4cj](https://gitcode.com/copur/opds4cj) | 仓颉的opds服务端实现 写得比较野蛮，欢迎修改 | copur | ★ 8 / Fork 0 | 3 months ago · 活跃 | c,o |
| [mcbbsandnz/cli-cj](https://gitcode.com/mcbbsandnz/cli-cj) | 一个简单的cli库 | mcbbsandnz | ★ 7 / Fork 2 | 1 month ago · 活跃 | c,m |
| [devinx3/cj2sql](https://gitcode.com/devinx3/cj2sql) | 将仓颉代码转换成 SQL | devinx3 | ★ 7 / Fork 1 | 1 year ago · 低活跃 | c |
| [tangrx1983/cangjie-colored](https://gitcode.com/tangrx1983/cangjie-colored) | 仓颉控制台下的命令行色彩使用库 | tangrx1983 | ★ 7 / Fork 1 | 1 year ago · 低活跃 | c,t |
| [jerome_tan/SimpleLedgerApp](https://gitcode.com/jerome_tan/SimpleLedgerApp) | 一个简单的记账应用。 | jerome_tan | ★ 6 / Fork 0 | 1 year ago · 低活跃 | a,j,l,s,t |
| [raozj/cjdoc](https://gitcode.com/raozj/cjdoc) | cjdoc是基于仓颉编程语言开发的仓颉项目注释文档提取生成工具。cjdoc在提供exe基础能力之外，开发者还可以通过引入cjdoc static/dynamic库并注入自己的生成逻辑，来实现自定义的文档生成。 | raozj | ★ 6 / Fork 0 | 3 months ago · 活跃 | c,r |
| [pionneer/whatlang4cj](https://gitcode.com/pionneer/whatlang4cj) | 一个基于Cangjie语言实现的自然语言检测工具。 | pionneer | ★ 3 / Fork 2 | 1 year ago · 低活跃 | p,w |
| [Casey_Mighty/boot_cj](https://gitcode.com/Casey_Mighty/boot_cj) | boot_cj是一个基于cangjie语言的上下文管理工具，同时支持静态特征（基于宏，便于生产环境的使用）和动态特征（基于反射，便于开发环境使用）的实现，能够实现对象创建的控制反转，依赖注入等功能。 | Casey_Mighty | ★ 2 / Fork 0 | 1 year ago · 低活跃 | b,c,m |
| [Neila/EasyX-in-Cangjie](https://gitcode.com/Neila/EasyX-in-Cangjie) | 为cangjie提供一个简单易用的图形库，仅支持Windows平台 | Neila | ★ 2 / Fork 0 | 8 months ago · 维护中 | c,e,i,n,x |
| [zhangyin_gitcode/opencode_skill](https://gitcode.com/zhangyin_gitcode/opencode_skill) | opencode_skill 是一个命令行工具，用于管理 opencode 的 skills 资源。工具支持从 Git 仓库克隆、列出、添加、删除和更新 skills，实现 skills 的便捷管理。 | zhangyin_gitcode | ★ 2 / Fork 0 | 3 months ago · 活跃 | g,o,s,z |
| [zhangyin_gitcode/list_cjpkg_version](https://gitcode.com/zhangyin_gitcode/list_cjpkg_version) | list_cjpkg_version 是一个命令行工具，用于查询仓颉包仓库中指定包的版本列表。工具支持按组名查询，并以简洁的格式输出版本号。 | zhangyin_gitcode | ★ 1 / Fork 0 | 4 months ago · 活跃 | c,l,v |
| [PermissionDog/seq4cj](https://gitcode.com/PermissionDog/seq4cj) | seq4cj 是一个仓颉语言标准库 log.Logger 的 seq 日志客户端实现。 | PermissionDog | ★ 0 / Fork 1 | 4 months ago · 活跃 | d,p,s |
| [2201_75800124/cangjie简单计算器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2201_75800124%2Fcangjie%E7%AE%80%E5%8D%95%E8%AE%A1%E7%AE%97%E5%99%A8) | 本项目使用华为仓颉编程语言实现了一个命令行的简单计算器，可输入一行表达式（可包含加减乘除、括号和幂运算）进行计算 | 2201_75800124 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,s |
| [chengdudongruanyj/成都东软学院-yangjun 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=chengdudongruanyj%2F%E6%88%90%E9%83%BD%E4%B8%9C%E8%BD%AF%E5%AD%A6%E9%99%A2-yangjun) | 简单的计算器 | chengdudongruanyj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,o,y |
| [CoderKevin/cjfinal-launcher](https://gitcode.com/CoderKevin/cjfinal-launcher) | CJFinal项目启动器 | CoderKevin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | k |
| [Elder_Zhao/科学计算器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Elder_Zhao%2F%E7%A7%91%E5%AD%A6%E8%AE%A1%E7%AE%97%E5%99%A8) | — | Elder_Zhao | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,k,z |
| [GaseousLand/LL1](https://gitcode.com/GaseousLand/LL1) | 1. 读取文件中的文法 2. 消除左递归 3. 提取左公因子 4. First集和Follow集 5. LL(1)文法判定与预测分析器设计及实现 | GaseousLand | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,l |
| [gcw_94jmryCU/计算器-集美大学-肖梦萍-罗方芳 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_94jmryCU%2F%E8%AE%A1%E7%AE%97%E5%99%A8-%E9%9B%86%E7%BE%8E%E5%A4%A7%E5%AD%A6-%E8%82%96%E6%A2%A6%E8%90%8D-%E7%BD%97%E6%96%B9%E8%8A%B3) | 仓颉语言实现的计算器，支持四则运算 | gcw_94jmryCU | ★ 0 / Fork 0 | 29 days ago · 活跃 | c,g,j,x |
| [Hoseaaaaa/Cangjie-change](https://gitcode.com/Hoseaaaaa/Cangjie-change) | 该项目是一个零钱找零计算器，用于计算给定金额的最优找零方案。 | Hoseaaaaa | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,h |
| [linc87887-cyber/Cangjie-RLE-Tool](https://gitcode.com/linc87887-cyber/Cangjie-RLE-Tool) | 基于仓颉编程语言(Cangjie)的轻量级行程长度编码(RLE)压缩工具，包含压缩与解压核心算法实现。 | linc87887-cyber | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,l,r,t |
| [lingluody/仓颉词法分析器-杭州电子科技大学-陆鑫涛-谌志群 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=lingluody%2F%E4%BB%93%E9%A2%89%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8-%E6%9D%AD%E5%B7%9E%E7%94%B5%E5%AD%90%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E9%99%86%E9%91%AB%E6%B6%9B-%E8%B0%8C%E5%BF%97%E7%BE%A4) | 初学仓颉，用仓颉写了一个词法分析器，附带graphviz绘图 | lingluody | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie,l,仓颉 |
| [lovesea1/leap-year](https://gitcode.com/lovesea1/leap-year) | 基于仓颉语言实现的闰年判断工具，支持判断单个年份是否为闰年，以及获取两个年份之间的所有闰年列表。 | lovesea1 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,y |
| [mqgbl_/cangjie-minipy-interpreter](https://gitcode.com/mqgbl_/cangjie-minipy-interpreter) | 基于《500 Lines or Less》的 MiniPy 解释器，使用仓颉语言移植实现。 | mqgbl_ | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,i,m |
| [pzqluck/calc](https://gitcode.com/pzqluck/calc) | 仓颉编写计算器工具 | pzqluck | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,p |
| [qq_21766175/calc](https://gitcode.com/qq_21766175/calc) | 简易计算器 | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,q |
| [ruolng/tcpchat](https://gitcode.com/ruolng/tcpchat) | 本项目是基于TCP协议实现的网络聊天室系统 | ruolng | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r,t |
| [sun_youhan/cangjie-tools](https://gitcode.com/sun_youhan/cangjie-tools) | 仓颉工具包 | sun_youhan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,s,y |
| [sunbing9208/medical_platform](https://gitcode.com/sunbing9208/medical_platform) | 佛山智慧医疗平台 | sunbing9208 | ★ 0 / Fork 0 | 10 months ago · 维护中 | m,p,s |
| [wjz18568763867/ComplexNumbers](https://gitcode.com/wjz18568763867/ComplexNumbers) | 实现了一个简单的复数计算器功能 | wjz18568763867 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,w |
| [yagma_tunita/小数计算器_集美大学_肖扬_罗方芳 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=yagma_tunita%2F%E5%B0%8F%E6%95%B0%E8%AE%A1%E7%AE%97%E5%99%A8_%E9%9B%86%E7%BE%8E%E5%A4%A7%E5%AD%A6_%E8%82%96%E6%89%AC_%E7%BD%97%E6%96%B9%E8%8A%B3) | — | yagma_tunita | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,t,y |
| [yejunchun2017/cj_app_management_system](https://gitcode.com/yejunchun2017/cj_app_management_system) | — | yejunchun2017 | ★ 0 / Fork 0 | 5 days ago · 活跃 | a,c,m,s |
| [YiLiangDeng/cj_chat](https://gitcode.com/YiLiangDeng/cj_chat) | — | YiLiangDeng | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,d,l,y |
| [YX_Git/在线电影购票系统_周朴_何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=YX_Git%2F%E5%9C%A8%E7%BA%BF%E7%94%B5%E5%BD%B1%E8%B4%AD%E7%A5%A8%E7%B3%BB%E7%BB%9F_%E5%91%A8%E6%9C%B4_%E4%BD%95%E7%8E%B2) | 在线电影购票系统 功能有： 1、查看正在热映电影 2、查看影院场次 3、选择场次与座位 4、生成购票订单 5、查看订单 6、退票并释放座位 | YX_Git | ★ 0 / Fork 0 | 21 days ago · 活跃 | m,t,y |
| [zhangyin_gitcode/determine_cjpkg_version](https://gitcode.com/zhangyin_gitcode/determine_cjpkg_version) | determine_cjpkg_version 是一个命令行工具，用于根据远程仓库版本自动决定 cjpm.toml 文件中的版本号。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | d,g,z |
| [zsy619/thymeleaf4cj](https://gitcode.com/zsy619/thymeleaf4cj) | thymeleaf模板解释器 | zsy619 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/MoneyTracker 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FMoneyTracker) | 一个使用仓颉（Cangjie）语言开发的命令行个人记账工具，支持收入/支出记录、查看账单和月度统计分析。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,m,t |
| [开源仓颉第三方开发者社区/json2class-cmd 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fjson2class-cmd) | 通过命令行将Json字符串转换成对应的仓颉Class/Struct | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,o |

## 学习资源、示例与模板（274）

### 示例与教程（207）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie/HarmonyOS-Examples](https://gitcode.com/Cangjie/HarmonyOS-Examples) | 本仓将收集和展示仓颉鸿蒙应用示例代码，欢迎大家投稿，在仓颉鸿蒙社区展现你的妙趣设计！ | Cangjie | ★ 835 / Fork 1260 | 1 month ago · 活跃 | c,Cangjie,e,h,o,仓颉 |
| [Cangjie/cangjie_test](https://gitcode.com/Cangjie/cangjie_test) | 仓颉编程语言测试用例。 | Cangjie | ★ 480 / Fork 926 | 18 hours ago · 活跃 | c,Cangjie,t,仓颉 |
| [Cangjie/HarmonyOS-Cangjie-Cases](https://gitcode.com/Cangjie/HarmonyOS-Cangjie-Cases) | 参考 HarmonyOS-Cases/Cases，提供仓颉开发鸿蒙 NEXT 应用的案例集 | Cangjie | ★ 374 / Fork 759 | 1 year ago · 低活跃 | c,Cangjie,h,o,仓颉 |
| [Cangjie/Learning](https://gitcode.com/Cangjie/Learning) | 仓颉高校实践活动成果收集与展示 | Cangjie | ★ 350 / Fork 830 | 7 months ago · 维护中 | c,Cangjie,l,仓颉 |
| [Cangjie/Exercises](https://gitcode.com/Cangjie/Exercises) | 本仓收集仓颉算法题解程序 | Cangjie | ★ 339 / Fork 932 | 1 year ago · 低活跃 | c,Cangjie,e,仓颉 |
| [Cangjie/OpenHarmony](https://gitcode.com/Cangjie/OpenHarmony) | 在 OpenHarmony 开发板上运行仓颉程序 | Cangjie | ★ 325 / Fork 744 | 1 year ago · 低活跃 | c,Cangjie,h,o,仓颉 |
| [Cangjie/CangjieMagic-Examples](https://gitcode.com/Cangjie/CangjieMagic-Examples) | — | Cangjie | ★ 324 / Fork 748 | 3 months ago · 活跃 | c,Cangjie,e,m,仓颉 |
| [CJMP/Test](https://gitcode.com/CJMP/Test) | — | CJMP | ★ 17 / Fork 14 | 2 days ago · 活跃 | c,t |
| [raozj/RGF_CJ_Example](https://gitcode.com/raozj/RGF_CJ_Example) | 本项目存储的是 RGF_CJ 的示例代码 | raozj | ★ 12 / Fork 0 | 7 months ago · 维护中 | c,e,r |
| [zhangyin_gitcode/hamster_commander](https://gitcode.com/zhangyin_gitcode/hamster_commander) | 本项目是东北大学软件学院“仓颉社区软件工程”课程教学项目，用于介绍仓颉语言的多种关键特性。 | zhangyin_gitcode | ★ 11 / Fork 2 | 1 year ago · 低活跃 | c,g,h,z |
| [zhangyin_gitcode/rec_all_cangjie](https://gitcode.com/zhangyin_gitcode/rec_all_cangjie) | 仓颉领域驱动设计云原生开发示例项目。 | zhangyin_gitcode | ★ 9 / Fork 4 | 1 year ago · 低活跃 | a,c,g,r,z,仓颉 |
| [unravel/仓颉标准库的样例代码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BB%93%E9%A2%89%E6%A0%87%E5%87%86%E5%BA%93%E7%9A%84%E6%A0%B7%E4%BE%8B%E4%BB%A3%E7%A0%81) | 仓颉标准库的样例代码 | unravel | ★ 6 / Fork 3 | 1 month ago · 活跃 | c,Cangjie,e,s,u,仓颉 |
| [Cangjie-SIG/仓颉语言程序设计-董昱 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Cangjie-SIG%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1-%E8%91%A3%E6%98%B1) | 《仓颉语言程序设计》定位于仓颉语言的入门教程，成体系深入浅出地介绍仓颉语言应用开发的基础知识和常用标准库的使用方法，面向所有对仓颉语言的爱好者。 | SIG | ★ 5 / Fork 4 | 1 year ago · 低活跃 | c,d,s,仓颉 |
| [soulsoft/examples](https://gitcode.com/soulsoft/examples) | spire项目共享知识库，希望大家多多提交，供大模型快速学习。 | soulsoft | ★ 4 / Fork 1 | 3 months ago · 活跃 | e |
| [cangjie-learning/design-pattern](https://gitcode.com/cangjie-learning/design-pattern) | 设计模式 | cangjie-learning | ★ 3 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,p |
| [cangjie-script/demo](https://gitcode.com/cangjie-script/demo) | cjp-language项目的最小WEB使用例子 | cangjie-script | ★ 3 / Fork 0 | 1 year ago · 低活跃 | c,d |
| [yangmie2/用仓颉完成编译原理实验 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=yangmie2%2F%E7%94%A8%E4%BB%93%E9%A2%89%E5%AE%8C%E6%88%90%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%E5%AE%9E%E9%AA%8C) | 初学仓颉，用仓颉完成编译原理实验课程 | yangmie2 | ★ 3 / Fork 0 | 1 year ago · 低活跃 | y |
| [zhangyin_gitcode/rec_all_spring_2026](https://gitcode.com/zhangyin_gitcode/rec_all_spring_2026) | 仓颉领域驱动设计云原生开发示例项目，东北大学软件学院2026年春季“仓颉社区软件工程”课程项目。 | zhangyin_gitcode | ★ 3 / Fork 0 | 3 months ago · 活跃 | a,r,s,z |
| [OpenHarmony-SIG/applications_app_samples_cangjie](https://gitcode.com/OpenHarmony-SIG/applications_app_samples_cangjie) | 仓颉鸿蒙示例仓库 | OpenHarmony-SIG | ★ 2 / Fork 5 | 5 months ago · 活跃 | a,c,Cangjie,h,o,仓颉 |
| [zhangyin_gitcode/gitcode_pipeline_demo](https://gitcode.com/zhangyin_gitcode/gitcode_pipeline_demo) | GitCode流水线仓颉示例。 | zhangyin_gitcode | ★ 2 / Fork 1 | 1 year ago · 低活跃 | d,g,p,z |
| [zhangyin_gitcode/hos_ioc_mvvm_iservice_demo](https://gitcode.com/zhangyin_gitcode/hos_ioc_mvvm_iservice_demo) | — | zhangyin_gitcode | ★ 2 / Fork 1 | 5 months ago · 活跃 | d,i,m,z |
| [zhangyin_gitcode/meiwen_diary](https://gitcode.com/zhangyin_gitcode/meiwen_diary) | 仓颉云原生开发示例项目。 | zhangyin_gitcode | ★ 2 / Fork 1 | 1 year ago · 低活跃 | d,g,m,z |
| [jiao_yang/API_SAMPLES](https://gitcode.com/jiao_yang/API_SAMPLES) | — | jiao_yang | ★ 1 / Fork 1 | 8 months ago · 维护中 | a,j,s,y |
| [ultrayay/cjmp_demo](https://gitcode.com/ultrayay/cjmp_demo) | — | ultrayay | ★ 1 / Fork 1 | 3 months ago · 活跃 | c,d,u |
| [unravel/仓颉学习项目 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BB%93%E9%A2%89%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE) | 一些学习仓颉的代码和练习项目 | unravel | ★ 1 / Fork 1 | 1 month ago · 活跃 | s,u,仓颉 |
| [abcd1234-wyj/learning_ml_cj_example](https://gitcode.com/abcd1234-wyj/learning_ml_cj_example) | learning_ml_cj 的使用示例仓库 | abcd1234-wyj | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,e,l,m,w |
| [aminhappy/Cangjie-Learning-Notes](https://gitcode.com/aminhappy/Cangjie-Learning-Notes) | 仓颉学习笔记， 大家一起来学习仓颉语言。包含程序例子，知识点记录。 用一种循序渐进的方式学习，从一个感兴趣的点开始学习，遇到什么就去学习什么，不是按照目录顺序学习。 | aminhappy | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,c,Cangjie |
| [gzpanf0103/遗传学习算法框架 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gzpanf0103%2F%E9%81%97%E4%BC%A0%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95%E6%A1%86%E6%9E%B6) | 模拟自然演化、遗传机制以及人类学习成长过程设计一套全局性随机搜索算法。 | gzpanf0103 | ★ 1 / Fork 0 | 11 months ago · 维护中 | g |
| [halocj/halo_example](https://gitcode.com/halocj/halo_example) | — | halocj | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,h |
| [hylab/MCP-Demo](https://gitcode.com/hylab/MCP-Demo) | 通过 CangjieMagic 实现 MCP | hylab | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,h,m |
| [leng_study/Cangjiedemo](https://gitcode.com/leng_study/Cangjiedemo) | — | leng_study | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,l |
| [SoraLuna/arkui-kit-window-brightness-pure-cangjie-demo](https://gitcode.com/SoraLuna/arkui-kit-window-brightness-pure-cangjie-demo) | 基于 HarmonyOS 6.1 纯仓颉 ArkUI 的窗口亮度调节最小示例，通过 JSRuntime 调用 ArkUI Kit window 能力获取当前窗口并设置窗口亮度，支持滑块调节、预设亮度和默认亮度恢复。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,b,c,Cangjie,d,k,l,p,s,w |
| [SoraLuna/arkui-kit-window-keep-screen-on-pure-cangjie-demo](https://gitcode.com/SoraLuna/arkui-kit-window-keep-screen-on-pure-cangjie-demo) | HarmonyOS 6.1 纯仓颉最小可运行示例，演示获取当前窗口、开启或关闭屏幕常亮、跳转系统休眠设置，并通过 30 秒倒计时验证常亮效果。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,d,k,l,o,p,s,w |
| [SoraLuna/connectivity-kit-apdu-pure-cangjie-demo](https://gitcode.com/SoraLuna/connectivity-kit-apdu-pure-cangjie-demo) | 基于 HarmonyOS 6.1 Connectivity Kit 的纯仓颉 APDU 示例，自动寻卡展示 NFC 状态、UID、历史字节和技术类型，支持输入 APDU 十六进制指令并输出 IsoDep 响应结果。适用于 NFC APDU 能力学习、功能验证和纯仓颉项目预研。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,d,k,l,p,s |
| [SoraLuna/connectivity-kit-mifare-classic-pure-cangjie-demo](https://gitcode.com/SoraLuna/connectivity-kit-mifare-classic-pure-cangjie-demo) | 基于 HarmonyOS Connectivity Kit 的纯仓颉 MIFARE Classic 最小可运行示例，自动寻卡展示 UID、SAK、ATQA 和技术类型，支持输入扇区、块数、Key A/Key B 与密钥，读取和写入 MIFARE Classic 扇区数据。适用于 NFC 卡片能力学习、功能验证和项目预研。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,d,k,m |
| [SoraLuna/core-file-kit-file-picker-read-write-pure-cangjie-demo](https://gitcode.com/SoraLuna/core-file-kit-file-picker-read-write-pure-cangjie-demo) | 基于 HarmonyOS Core File Kit 的纯仓颉最小可运行文件选择与读写示例，支持调起系统文件选择器读取文本文件，并通过系统保存器导出文本内容。使用仓颉构建页面和业务逻辑，适用于文件选择、URI 读写和纯仓颉工程能力验证。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,d,f,k,l,p,r,s,w |
| [SoraLuna/crypto-architecture-kit-aes-gcm-pure-cangjie-demo](https://gitcode.com/SoraLuna/crypto-architecture-kit-aes-gcm-pure-cangjie-demo) | 基于 HarmonyOS Crypto Architecture Kit 的纯仓颉 AES-GCM 加解密示例，支持明文、Key、IV、AAD、密文和 AuthTag 的输入输出，完成 AES-GCM 加密、解密和认证标签校验。项目使用纯仓颉 ArkUI 构建界面，适用于加密能力学习、功能验证和项目预研。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,Cangjie,d,g,k,l,p,s |
| [SoraLuna/crypto-architecture-kit-crypto-basics-pure-cangjie-demo](https://gitcode.com/SoraLuna/crypto-architecture-kit-crypto-basics-pure-cangjie-demo) | 基于 HarmonyOS Crypto Architecture Kit 的纯仓颉基础加密示例，支持 SHA-256、SHA-384、SHA-512 消息摘要，HMAC-SHA256、HMAC-SHA512 消息认证码生成，以及安全随机字节生成。项目使用纯仓颉 ArkUI 构建界面，适用于加密基础能力学习、功能验证和项目预研。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | b,c,Cangjie,d,k,l,p,s |
| [tyssd/仓颉编程语言练习 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=tyssd%2F%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E7%BB%83%E4%B9%A0) | 《仓颉编程快速上手》的学习练习 | tyssd | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,e |
| [unravel/stdx_sample](https://gitcode.com/unravel/stdx_sample) | stdx扩展库的样例代码 | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | s,u |
| [ZUT_仓颉/D_DSY234 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_DSY234) | 大作业实现五子棋，可以在控制台通过输入棋子位置坐标实现人人对战和人机对战 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,w,z |
| [ZUT_仓颉/HelloWorld 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FHelloWorld) | 第一个仓颉程序 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,z |
| [XJTU-Course-Introducation-to-Computing/Hw3-图像隐写与MP3倍速的GUI-Web实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=XJTU-Course-Introducation-to-Computing%2FHw3-%E5%9B%BE%E5%83%8F%E9%9A%90%E5%86%99%E4%B8%8EMP3%E5%80%8D%E9%80%9F%E7%9A%84GUI-Web%E5%AE%9E%E7%8E%B0) | — | XJTU-Course-Introducation-to-Computing | ★ 0 / Fork 318 | 4 months ago · 活跃 | c,h,i,t,w,x |
| [zhangyin_gitcode/dapr_cangjie_demo](https://gitcode.com/zhangyin_gitcode/dapr_cangjie_demo) | Dapr仓颉示例项目。 | zhangyin_gitcode | ★ 0 / Fork 9 | 1 year ago · 低活跃 | Cangjie,d,g,z |
| [2301_80220344/Cangjie-Examples](https://gitcode.com/2301_80220344/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | 2301_80220344 | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c,Cangjie,e |
| [CaseDeveloper/Cangjie-Examples](https://gitcode.com/CaseDeveloper/Cangjie-Examples) | 案例仓颉示例代码 | CaseDeveloper | ★ 0 / Fork 1 | 10 months ago · 维护中 | c,Cangjie,d,e |
| [fyj2487045907/Cangjie-Examples](https://gitcode.com/fyj2487045907/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | fyj2487045907 | ★ 0 / Fork 1 | 7 months ago · 维护中 | c,Cangjie,e,f |
| [gcw_5gUDF2GS/Cangjie-Examples](https://gitcode.com/gcw_5gUDF2GS/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_5gUDF2GS | ★ 0 / Fork 1 | 10 months ago · 维护中 | c,Cangjie,e,g,u |
| [gcw_Vo1pfmCX/Cangjie-Examples](https://gitcode.com/gcw_Vo1pfmCX/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_Vo1pfmCX | ★ 0 / Fork 1 | 8 months ago · 维护中 | Cangjie,g,v |
| [kzx-1234/Cangjie-Examples_2176](https://gitcode.com/kzx-1234/Cangjie-Examples_2176) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | kzx-1234 | ★ 0 / Fork 1 | 7 months ago · 维护中 | c,Cangjie,e,k |
| [Orca-/Cangjie-Examples](https://gitcode.com/Orca-/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | Orca- | ★ 0 / Fork 1 | 7 months ago · 维护中 | c,Cangjie,e,o |
| [wanjlong/Cangjie-Examples_9992_7406](https://gitcode.com/wanjlong/Cangjie-Examples_9992_7406) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | wanjlong | ★ 0 / Fork 1 | 8 months ago · 维护中 | c,Cangjie,e,w |
| [www19232524332/HarmonyOS-Examples](https://gitcode.com/www19232524332/HarmonyOS-Examples) | 本仓将收集和展示仓颉鸿蒙应用示例代码，欢迎大家投稿，在仓颉鸿蒙社区展现你的妙趣设计！ | www19232524332 | ★ 0 / Fork 1 | 1 month ago · 活跃 | e,h,o,w |
| [wzw1666/Cangjie-Examples](https://gitcode.com/wzw1666/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | wzw1666 | ★ 0 / Fork 1 | 11 months ago · 维护中 | e,w |
| [yingxinwu/cangjie-demo](https://gitcode.com/yingxinwu/cangjie-demo) | Learn Cangjie | yingxinwu | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c,Cangjie,y |
| [2301_80702746/first_Demo](https://gitcode.com/2301_80702746/first_Demo) | — | 2301_80702746 | ★ 0 / Fork 0 | 9 months ago · 维护中 | d,f |
| [2302_79680604/仓颉语言并行矩阵乘法示例-北京师范大学-陈旭彤-高建花 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2302_79680604%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%B9%B6%E8%A1%8C%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95%E7%A4%BA%E4%BE%8B-%E5%8C%97%E4%BA%AC%E5%B8%88%E8%8C%83%E5%A4%A7%E5%AD%A6-%E9%99%88%E6%97%AD%E5%BD%A4-%E9%AB%98%E5%BB%BA%E8%8A%B1) | 本示例展示了如何使用仓颉编程语言实现并行矩阵乘法，重点演示了仓颉语言的M:N线程模型在实际科学计算问题中的应用。通过三种不同的矩阵乘法实现方式，展示了从串行到并行的渐进式优化过程。 | 2302_79680604 | ★ 0 / Fork 0 | 7 months ago · 维护中 | g,仓颉 |
| [2401_82796943/cj_ftp_client_lab](https://gitcode.com/2401_82796943/cj_ftp_client_lab) | 计算机网络课程实验 | 2401_82796943 | ★ 0 / Fork 0 | 8 months ago · 维护中 | f,l |
| [2401_83013032/CangjieDBDB](https://gitcode.com/2401_83013032/CangjieDBDB) | 高级程序设计的课程大作业，用仓颉（Cangjie）语言对500 Lines Or Less里面的DBDB（Dog Bed Database）进行完整移植。原始实现为Python，是一款"追加式二叉搜索树键值数据库"，本项目在保持原架构不变的前提下，适配仓颉的类型系统、Option模式、文件API和构建工具链。 | 2401_83013032 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d |
| [2401_87565004/cangjie_homework](https://gitcode.com/2401_87565004/cangjie_homework) | — | 2401_87565004 | ★ 0 / Fork 0 | 29 days ago · 活跃 | c,h |
| [2401_87632862/Cangjie-Examples_3465](https://gitcode.com/2401_87632862/Cangjie-Examples_3465) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | 2401_87632862 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,e |
| [2403_87076304/mytest](https://gitcode.com/2403_87076304/mytest) | 《计算机网络仿真技术》课程代码 | 2403_87076304 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m |
| [alpsen/learn_cangjie](https://gitcode.com/alpsen/learn_cangjie) | — | alpsen | ★ 0 / Fork 0 | 7 months ago · 维护中 | a,Cangjie,l |
| [andymumu/note_cj](https://gitcode.com/andymumu/note_cj) | 仓颉语言学习笔记 | andymumu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,n |
| [Cangjie-Ark/Demo](https://gitcode.com/Cangjie-Ark/Demo) | — | Cangjie-Ark | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,d |
| [Cangjie-Demo/Cangjie-Demo](https://gitcode.com/Cangjie-Demo/Cangjie-Demo) | — | Cangjie-Demo | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,Cangjie |
| [cangjie-learning/algorithm](https://gitcode.com/cangjie-learning/algorithm) | Cangjie algorithm learning | cangjie-learning | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,l |
| [cangjie-learning/basic_knowledge](https://gitcode.com/cangjie-learning/basic_knowledge) | Cangjie 基础知识 | cangjie-learning | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,Cangjie,k,l |
| [caolanglang/cj-demo](https://gitcode.com/caolanglang/cj-demo) | 学习cangjie开发HarmoneyOS Application | caolanglang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d |
| [ChesterX/rec_all_cangjie_learn](https://gitcode.com/ChesterX/rec_all_cangjie_learn) | — | ChesterX | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l,r,x |
| [chipichipi/re_call_cangjie_learning_chipi](https://gitcode.com/chipichipi/re_call_cangjie_learning_chipi) | — | chipichipi | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,r |
| [cwc0000/study_first](https://gitcode.com/cwc0000/study_first) | 张引原生 | cwc0000 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [fengxiao_020705/E1_dml623](https://gitcode.com/fengxiao_020705/E1_dml623) | 学习仓颉语言 | fengxiao_020705 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,f |
| [Fufish_SKP/hamster_commander](https://gitcode.com/Fufish_SKP/hamster_commander) | 大三下仓颉社区系统课程作业 | Fufish_SKP | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,h,s |
| [gcw_2sMO9UWv/Cangjie-Examples](https://gitcode.com/gcw_2sMO9UWv/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_2sMO9UWv | ★ 0 / Fork 0 | 5 months ago · 活跃 | c,Cangjie,e,g,m |
| [gcw_4Xo98yzs/lab15--cangjie大作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_4Xo98yzs%2Flab15--cangjie%E5%A4%A7%E4%BD%9C%E4%B8%9A) | — | gcw_4Xo98yzs | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,l |
| [gcw_4Xo98yzs/lab15-cangjie大作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_4Xo98yzs%2Flab15-cangjie%E5%A4%A7%E4%BD%9C%E4%B8%9A) | — | gcw_4Xo98yzs | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,g,l |
| [gcw_55BzqIeK/Cangjie-HelloWorld](https://gitcode.com/gcw_55BzqIeK/Cangjie-HelloWorld) | — | gcw_55BzqIeK | ★ 0 / Fork 0 | 21 days ago · 活跃 | c,Cangjie,g,h,i,k,w |
| [gcw_5erv2Ual/jitong_cangjie](https://gitcode.com/gcw_5erv2Ual/jitong_cangjie) | 仓颉代码示例仓库，用于存储和分享仓颉语言的示例代码。 | gcw_5erv2Ual | ★ 0 / Fork 0 | 8 months ago · 维护中 | Cangjie,g,j |
| [gcw_MFb8NtxB/2025年西电仓颉训练营-树-佟鑫心-孙亦婷-范晨琪 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_MFb8NtxB%2F2025%E5%B9%B4%E8%A5%BF%E7%94%B5%E4%BB%93%E9%A2%89%E8%AE%AD%E7%BB%83%E8%90%A5-%E6%A0%91-%E4%BD%9F%E9%91%AB%E5%BF%83-%E5%AD%99%E4%BA%A6%E5%A9%B7-%E8%8C%83%E6%99%A8%E7%90%AA) | — | gcw_MFb8NtxB | ★ 0 / Fork 0 | 8 months ago · 维护中 | b,g,m,q |
| [gcw_mO0PTbfK/cangjie-homework-cicd-demo](https://gitcode.com/gcw_mO0PTbfK/cangjie-homework-cicd-demo) | — | gcw_mO0PTbfK | ★ 0 / Fork 0 | 27 days ago · 活跃 | c,Cangjie,d,g,h,k,m,o |
| [gcw_ty2laOk6/仓颉学习 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_ty2laOk6%2F%E4%BB%93%E9%A2%89%E5%AD%A6%E4%B9%A0) | 学习 | gcw_ty2laOk6 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,g,o,t,仓颉 |
| [gcw_ZzGdJbZl/由Cangjie实现的学生成绩管理统计系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_ZzGdJbZl%2F%E7%94%B1Cangjie%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86%E7%BB%9F%E8%AE%A1%E7%B3%BB%E7%BB%9F) | 东北大学2025年春季学期 仓颉社区软件工程大作业 | gcw_ZzGdJbZl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,p,z |
| [GikkiAres1/CjCourse01](https://gitcode.com/GikkiAres1/CjCourse01) | 第一行仓颉代码系列课程的代码资源 | GikkiAres1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c |
| [gj04/Cangjie-Examples](https://gitcode.com/gj04/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gj04 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,e,g |
| [gj04/Cangjie-Examples_5615_1327](https://gitcode.com/gj04/Cangjie-Examples_5615_1327) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gj04 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c |
| [Hacker_DL/my_first_cangjie_app](https://gitcode.com/Hacker_DL/my_first_cangjie_app) | 本人的第一个Cangjie项目，项目内容参考东北大学张引老师的B站课程《仓颉社区软件工程》 | Hacker_DL | ★ 0 / Fork 0 | 3 months ago · 活跃 | a,Cangjie,d,f,h,m |
| [Hanlin-Xiao/程序设计课程-火车票订票系统 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Hanlin-Xiao%2F%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%BE%E7%A8%8B-%E7%81%AB%E8%BD%A6%E7%A5%A8%E8%AE%A2%E7%A5%A8%E7%B3%BB%E7%BB%9F) | — | Hanlin-Xiao | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,h,s,x |
| [Hl220744089-/Cangjie-Examples_5798](https://gitcode.com/Hl220744089-/Cangjie-Examples_5798) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | Hl220744089- | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,Cangjie,e,h |
| [hou_yun_long/cang_jie_exercise](https://gitcode.com/hou_yun_long/cang_jie_exercise) | 仓颉练习 | hou_yun_long | ★ 0 / Fork 0 | 11 months ago · 维护中 | Cangjie,e,h,l,y |
| [Huangjinbin_gitcode/pipeline_demo](https://gitcode.com/Huangjinbin_gitcode/pipeline_demo) | — | Huangjinbin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h,p |
| [hzhj2/cangjie_demo](https://gitcode.com/hzhj2/cangjie_demo) | — | hzhj2 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,h |
| [iptton/ohcj-example](https://gitcode.com/iptton/ohcj-example) | — | iptton | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,i,o |
| [jiecaonengchima/cangjie_learning](https://gitcode.com/jiecaonengchima/cangjie_learning) | 仓颉个人学习练习仓库 | jiecaonengchima | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,l |
| [JieJiezzZ/cangjie-test-demo](https://gitcode.com/JieJiezzZ/cangjie-test-demo) | — | JieJiezzZ | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,j,t,z |
| [jobsliu/cangjie_study](https://gitcode.com/jobsliu/cangjie_study) | — | jobsliu | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,j,s |
| [john_zhang/cangjie_demo](https://gitcode.com/john_zhang/cangjie_demo) | — | john_zhang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [kzx-1234/Cangjie-Examples](https://gitcode.com/kzx-1234/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | kzx-1234 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie,e,k |
| [kzx-1234/Cangjie-Examples_2459](https://gitcode.com/kzx-1234/Cangjie-Examples_2459) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | kzx-1234 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,e,k |
| [leaveWhite9088/dateparse_demo](https://gitcode.com/leaveWhite9088/dateparse_demo) | 项目dateparse的演示demo | leaveWhite9088 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,w |
| [liuanzhan/cjstudy](https://gitcode.com/liuanzhan/cjstudy) | 学习仓颉代码，练习仓库 | liuanzhan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [liuyule/Demo](https://gitcode.com/liuyule/Demo) | — | liuyule | ★ 0 / Fork 0 | 6 months ago · 活跃 | d,l |
| [liyanqing14/zlib_test_demo](https://gitcode.com/liyanqing14/zlib_test_demo) | — | liyanqing14 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [lysithea/pipline_demo](https://gitcode.com/lysithea/pipline_demo) | — | lysithea | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,p |
| [m0_61740895/cangjieMagic_agent](https://gitcode.com/m0_61740895/cangjieMagic_agent) | 实验和大作业 | m0_61740895 | ★ 0 / Fork 0 | 5 months ago · 活跃 | a,c |
| [m0_74803157/cj-money-example](https://gitcode.com/m0_74803157/cj-money-example) | cj-money库的例子 | m0_74803157 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,e,m |
| [m0_75199941/Cangjie-Examples](https://gitcode.com/m0_75199941/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | m0_75199941 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [methadone/sample_for_perform](https://gitcode.com/methadone/sample_for_perform) | — | methadone | ★ 0 / Fork 0 | 3 months ago · 活跃 | f,m,p,s |
| [mksword_hw/cangjie-sample](https://gitcode.com/mksword_hw/cangjie-sample) | — | mksword_hw | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,m,s |
| [moonlighthh/Cangjie-Examples](https://gitcode.com/moonlighthh/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | moonlighthh | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,e,m |
| [mrchs0119/cjpm_demo_test](https://gitcode.com/mrchs0119/cjpm_demo_test) | cjpm_demo_test | mrchs0119 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,d,m,t |
| [mzgfly/Cangjie0.53.13_Study](https://gitcode.com/mzgfly/Cangjie0.53.13_Study) | — | mzgfly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,m,s |
| [No22KAKA/Cangjie编译原理课程设计 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=No22KAKA%2FCangjie%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1) | 使用Cangjie编写的编译原理课程设计的代码 | No22KAKA | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,n |
| [Opanda/仓颉练习小程序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Opanda%2F%E4%BB%93%E9%A2%89%E7%BB%83%E4%B9%A0%E5%B0%8F%E7%A8%8B%E5%BA%8F) | 学习仓颉时练习写的程序片段 | Opanda | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,o,仓颉 |
| [PLMNEXT/next-example](https://gitcode.com/PLMNEXT/next-example) | Next-Web 示例 | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n,p |
| [qq_62509159/cj_demo](https://gitcode.com/qq_62509159/cj_demo) | — | qq_62509159 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,d,q |
| [Ref1ec4/Cangjie-Examples_5453](https://gitcode.com/Ref1ec4/Cangjie-Examples_5453) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | Ref1ec4 | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,Cangjie,e,m,r |
| [RiverMelanie/learning_ml_cj_commandline](https://gitcode.com/RiverMelanie/learning_ml_cj_commandline) | — | RiverMelanie | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,m,r |
| [RiverMelanie/my_learning_ml_cj](https://gitcode.com/RiverMelanie/my_learning_ml_cj) | — | RiverMelanie | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,m |
| [RiverMelanie/pipeline_demo](https://gitcode.com/RiverMelanie/pipeline_demo) | — | RiverMelanie | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,m,p,r |
| [Shaoyuwu/HarmonyOS-Examples](https://gitcode.com/Shaoyuwu/HarmonyOS-Examples) | 本仓将收集和展示仓颉鸿蒙应用示例代码，欢迎大家投稿，在仓颉鸿蒙社区展现你的妙趣设计！ | Shaoyuwu | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,h,o |
| [Sharapov-Maksim/cjmp_interpreter_demo](https://gitcode.com/Sharapov-Maksim/cjmp_interpreter_demo) | — | Sharapov-Maksim | ★ 0 / Fork 0 | 4 days ago · 活跃 | c,d,i,m |
| [silence917/cangjie-cicd-demo](https://gitcode.com/silence917/cangjie-cicd-demo) | 仓颉语言 CI/CD 单元测试演示项目 - 演示GitCode流水线自动化构建与测试 | silence917 | ★ 0 / Fork 0 | 30 days ago · 活跃 | c,Cangjie,d,s |
| [SoraLuna/basic-services-kit-device-status-pure-cangjie-demo](https://gitcode.com/SoraLuna/basic-services-kit-device-status-pure-cangjie-demo) | HarmonyOS 6.1 纯仓颉设备状态最小示例，通过 JSRuntime 调用 Basic Services Kit，展示设备信息、电池状态和电源状态。 | SoraLuna | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,Cangjie,d,k,l,p,s |
| [SoraLuna/share-kit-multi-format-share-pure-cangjie-demo](https://gitcode.com/SoraLuna/share-kit-multi-format-share-pure-cangjie-demo) | 基于 HarmonyOS Share Kit 的纯仓颉多格式分享示例，支持文本、SVG 图片、PDF、JSON 文件生成与系统分享面板调用，并通过 harmonyShare 注册碰一碰和抓握一下动作分享。项目使用纯仓颉 ArkUI 构建界面，适用于 Share Kit 能力学习、功能验证和项目预研。 | SoraLuna | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,f,k,l,m,p,s |
| [swrQ/Cangjie-Examples](https://gitcode.com/swrQ/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | swrQ | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,Cangjie,e,q,s |
| [tangrui1986/hello_cangjie](https://gitcode.com/tangrui1986/hello_cangjie) | 学习仓颉 | tangrui1986 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,t |
| [tinychong/tinyalgorithms](https://gitcode.com/tinychong/tinyalgorithms) | 算法学习项目 - 使用仓颉编程语言实现常见算法 | tinychong | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [ttcr1234/大作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ttcr1234%2F%E5%A4%A7%E4%BD%9C%E4%B8%9A) | 基于CangjieMagic的简单应用,利用CangjieMagic完成的饮食规划agent | ttcr1234 | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,t |
| [UESTC_仓颉语言课程2026/exam-paper-selector 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=UESTC_%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E8%AF%BE%E7%A8%8B2026%2Fexam-paper-selector) | 基于仓颉语言的试卷随机选择器桌面应用。 | UESTC_仓颉语言课程2026 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,e,p,s,u,仓颉 |
| [valueyou24/demo](https://gitcode.com/valueyou24/demo) | — | valueyou24 | ★ 0 / Fork 0 | 9 months ago · 维护中 | d,v |
| [vchuoshen6/计算机网络仿真技术实验教程及示例代码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=vchuoshen6%2F%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BB%BF%E7%9C%9F%E6%8A%80%E6%9C%AF%E5%AE%9E%E9%AA%8C%E6%95%99%E7%A8%8B%E5%8F%8A%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) | 使用仓颉语言基于离散事件处理的计算机网络仿真系统 | vchuoshen6 | ★ 0 / Fork 0 | 3 months ago · 活跃 | n,v |
| [wang_lu2/learning](https://gitcode.com/wang_lu2/learning) | test | wang_lu2 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,w |
| [weixin_46244104/Cangjie-Examples_6925](https://gitcode.com/weixin_46244104/Cangjie-Examples_6925) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | weixin_46244104 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,e,w |
| [weixin_46244104/HarmonyOS-Examples_5545](https://gitcode.com/weixin_46244104/HarmonyOS-Examples_5545) | 本仓将收集和展示仓颉鸿蒙应用示例代码，欢迎大家投稿，在仓颉鸿蒙社区展现你的妙趣设计！ | weixin_46244104 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,o,w |
| [weixin_48384182/cj1_tets](https://gitcode.com/weixin_48384182/cj1_tets) | 用户可通过该项目快速体验仓颉语言开发，实现基本算术运算。支持加减乘除及退出命令，具备错误处理功能，编译运行简单，适合学习仓颉语言的入门示例。 | weixin_48384182 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,t,w |
| [wqaddddd_/Cangjie-Examples](https://gitcode.com/wqaddddd_/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | wqaddddd_ | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,e,w |
| [wuzixi/吴子熙仓颉作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wuzixi%2F%E5%90%B4%E5%AD%90%E7%86%99%E4%BB%93%E9%A2%89%E4%BD%9C%E4%B8%9A) | 吴子熙仓颉语言作业 | wuzixi | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,w |
| [xu555/Cangjie-Examples_2124](https://gitcode.com/xu555/Cangjie-Examples_2124) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | xu555 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,e,x |
| [xu555/Cangjie-Examples_9534](https://gitcode.com/xu555/Cangjie-Examples_9534) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | xu555 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,e,x |
| [xutongyao/Cangjie-Examples](https://gitcode.com/xutongyao/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | xutongyao | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,e,x |
| [YBL_starry/lab15.submit.cangjie](https://gitcode.com/YBL_starry/lab15.submit.cangjie) | 存放仓颉大作业部分 | YBL_starry | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,s,y |
| [yejunchun2017/cj_os_demo](https://gitcode.com/yejunchun2017/cj_os_demo) | 测试仓颉应用 | yejunchun2017 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,d,o,y |
| [yejunchun2017/cj_os_shop_demo](https://gitcode.com/yejunchun2017/cj_os_shop_demo) | — | yejunchun2017 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,d,o,s,y |
| [Yessy/OHOS_demo](https://gitcode.com/Yessy/OHOS_demo) | — | Yessy | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,o,y |
| [yukariyuko/canvord_cj](https://gitcode.com/yukariyuko/canvord_cj) | 仓颉领域驱动设计云原生开发，东北大学软件学院“微服务架构与设计模式”课程结课项目。 | yukariyuko | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,y |
| [z2429116079/ColorfulPainting](https://gitcode.com/z2429116079/ColorfulPainting) | 大作业 | z2429116079 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,p,z |
| [zhangpeng_1424/Cangjie-Examples](https://gitcode.com/zhangpeng_1424/Cangjie-Examples) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | zhangpeng_1424 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,e |
| [zhangpeng_1424/Cangjie-Examples_1106](https://gitcode.com/zhangpeng_1424/Cangjie-Examples_1106) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | zhangpeng_1424 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,e |
| [zhangqiancheng/hello-cangjie](https://gitcode.com/zhangqiancheng/hello-cangjie) | — | zhangqiancheng | ★ 0 / Fork 0 | 6 months ago · 活跃 | Cangjie,h,z |
| [zhangqiancheng/仓颉编程语言学习笔记 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zhangqiancheng%2F%E4%BB%93%E9%A2%89%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0) | 我学习仓颉编程语言的过程 | zhangqiancheng | ★ 0 / Fork 0 | 5 months ago · 活跃 | Cangjie,n,o,s,z,仓颉 |
| [zhangyin_gitcode/ci_demo](https://gitcode.com/zhangyin_gitcode/ci_demo) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | c,d |
| [zhangyin_gitcode/hos_ginger_demo](https://gitcode.com/zhangyin_gitcode/hos_ginger_demo) | HOS ginger DEMO | zhangyin_gitcode | ★ 0 / Fork 0 | 6 months ago · 活跃 | d,g,h,z |
| [zhangyin_gitcode/hos_har_feature_ioc_mvvm_iservice_demo](https://gitcode.com/zhangyin_gitcode/hos_har_feature_ioc_mvvm_iservice_demo) | HOS UIAbility/Component 双模式全模块化 IoC + MVVM + IService 架构设计 | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,f,h,i,m,z |
| [zhangyin_gitcode/hos_view_model_validation_demo](https://gitcode.com/zhangyin_gitcode/hos_view_model_validation_demo) | HOS ViewModel Validation Demo | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,g,h,m,v |
| [zhangyin_gitcode/naiveteaset_openapi_demo](https://gitcode.com/zhangyin_gitcode/naiveteaset_openapi_demo) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 6 months ago · 活跃 | g,n,o,z |
| [zhangyin_gitcode/simpleapi_mysql_demo](https://gitcode.com/zhangyin_gitcode/simpleapi_mysql_demo) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,m,s |
| [zhangYongFeng110/practice_demo](https://gitcode.com/zhangYongFeng110/practice_demo) | — | zhangYongFeng110 | ★ 0 / Fork 0 | 6 months ago · 活跃 | f,p,y |
| [zhannk/sample](https://gitcode.com/zhannk/sample) | — | zhannk | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [zhanqiZ/CJ_Exercise](https://gitcode.com/zhanqiZ/CJ_Exercise) | 学习华为仓颉编程语言的练习小项目合集 | zhanqiZ | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,e |
| [ZhaoJun-zfh/spire_demo](https://gitcode.com/ZhaoJun-zfh/spire_demo) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 5 months ago · 活跃 | z |
| [zhaoyiskz/cangjie-unit-test-demo](https://gitcode.com/zhaoyiskz/cangjie-unit-test-demo) | — | zhaoyiskz | ★ 0 / Fork 0 | 28 days ago · 活跃 | c,Cangjie,d,t,u |
| [zickler/Cangjie-Examples](https://gitcode.com/zickler/Cangjie-Examples) | — | zickler | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,Cangjie,e,z |
| [ZUT_仓颉/D_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ls540) | 3×3井字棋大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z,仓颉 |
| [ZUT_仓颉/D_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lxy102) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [ZUT_仓颉/D_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_LYY416) | 五子棋大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/D_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_YL104) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,y,z |
| [ZUT_仓颉/D-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD-lxy105) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z,仓颉 |
| [ZUT_仓颉/DA_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDA_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/Demo_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDemo_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,x,z |
| [ZUT_仓颉/demo_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fdemo_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,y,z,仓颉 |
| [ZUT_仓颉/DZY_DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_DS106) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/DZY_zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_zwy135) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/E_4nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_4nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E1_lyy416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lyy416) | 仓颉课程代码 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,仓颉 |
| [ZUT_仓颉/E1_YCH111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_YCH111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E2_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E2_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E3__DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__DS106) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E3_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E3_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E3_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ysr105) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E4_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/e4-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fe4-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E5__lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5__lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E5_byh236_ 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_byh236_) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E5_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_LYY416) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E5_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E5_xsk611 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_xsk611) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E6_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E61_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E62_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wch336) | 第六次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E62_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | 仓颉 |
| [ZUT_仓颉/E7_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_ay118) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,z,仓颉 |
| [ZUT_仓颉/E7_jcq229大作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_jcq229%E5%A4%A7%E4%BD%9C%E4%B8%9A) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j |
| [ZUT_仓颉/E7_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_zyy112) | 大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/final_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Ffinal_WQJ334) | 期末大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,w,z |
| [ZUT_仓颉/shudu 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fshudu) | 仓颉大作业数独 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,z,仓颉 |
| [ZUT_仓颉/Study 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FStudy) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [ZUT_仓颉/仓颉作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E4%BD%9C%E4%B8%9A) | 仓颉数独结课大作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,z,仓颉 |
| [ZUT_仓颉/内省排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%86%85%E7%9C%81%E6%8E%92%E5%BA%8F) | Introsort（内省排序） | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,仓颉 |
| [ZUT_仓颉/最小生成森林1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A3%AE%E6%9E%971) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | 仓颉 |
| [ZUT_仓颉/大作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A4%A7%E4%BD%9C%E4%B8%9A) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,仓颉 |
| [ZUT_仓颉/计数排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,仓颉 |
| [zxy37/CangjieStudy](https://gitcode.com/zxy37/CangjieStudy) | Cangjie学习笔记 | zxy37 | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,z |
| [zxyyyyyy111ai/基于仓颉语言的空闲链表内存管理模拟器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zxyyyyyy111ai%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%9A%84%E7%A9%BA%E9%97%B2%E9%93%BE%E8%A1%A8%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%A8%A1%E6%8B%9F%E5%99%A8) | 本项目使用仓颉语言实现空闲链表法动态内存分配模拟器，模拟操作系统内存申请、内存释放、内存碎片合并、空闲块遍历等核心内存管理逻辑，直观演示空闲链表存储结构与内存分配回收算法，适合数据结构、操作系统课程实验学习使用。 | zxyyyyyy111ai | ★ 0 / Fork 0 | 6 days ago · 活跃 | Cangjie,f,l,m |
| [矢量工坊/cangjie_raylib 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E7%9F%A2%E9%87%8F%E5%B7%A5%E5%9D%8A%2Fcangjie_raylib) | 使用仓颉语言编写的 Raylib 图形库示例项目。 | 矢量工坊 | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,Cangjie,r,v,w |

### 书籍与文档（16）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/cangjiebianchengkuaisushangshou-ZRC](https://gitcode.com/Cangjie-SIG/cangjiebianchengkuaisushangshou-ZRC) | 《仓颉编程快速上手》专门为仓颉编程语言的初学者量身打造，目标是助力读者快速上手仓颉编程语言。书中每个章节均配备了翔实的示例，旨在加深读者对所学内容的理解，并提升应用仓颉编程语言的能力。通过学习本书，读者可以快速掌握仓颉语言编程技能，为迈向全场景应用开发高手之路奠定坚实的基础。 | SIG | ★ 43 / Fork 14 | 2025-07-01 · 低活跃 | — |
| [Cangjie-TPC/TPC-Cangjie-HarmonyOS-API](https://gitcode.com/Cangjie-TPC/TPC-Cangjie-HarmonyOS-API) | No description | TPC | ★ 24 / Fork 0 | 2025-06-28 · 低活跃 | — |
| [Cangjie-SIG/tujiecangjiebiancheng-ZRC](https://gitcode.com/Cangjie-SIG/tujiecangjiebiancheng-ZRC) | 《图解仓颉编程》系列图书采用广受好评的图解方式，并借助丰富的示例程序，力争做到通俗易懂、深入浅出地阐明仓颉编程语言的相关知识。本系列图书全彩印刷，图文并茂，附有全彩的学习路径图和知识脉络图。 | SIG | ★ 19 / Fork 2 | 2025-07-01 · 低活跃 | — |
| [Cangjie-SIG/cangjieyuyanyuanbiancheng-ZL](https://gitcode.com/Cangjie-SIG/cangjieyuyanyuanbiancheng-ZL) | 仓颉语言元编程由张磊编写，清华大学出版社出版。该书从元编程的概念开始，逐步讲解仓颉元编程的基础知识、抽象语法树的常用用法，以及如何定义和使用仓颉宏。 | SIG | ★ 15 / Fork 3 | 2025-07-17 · 低活跃 | — |
| [Cangjie-SIG/EffectiveCangjieWithDiagrams](https://gitcode.com/Cangjie-SIG/EffectiveCangjieWithDiagrams) | 本项目是《图解高效仓颉编程》的程序清单 | SIG | ★ 14 / Fork 4 | 2025-08-10 · 维护中 | — |
| [Cangjie-SIG/cangjieyuyanshizhan-ZL](https://gitcode.com/Cangjie-SIG/cangjieyuyanshizhan-ZL) | 仓颉语言实战由张磊编写，清华大学出版社出版。 该书践行“零基础入门仓颉语言”的理念，具有内容通俗易懂，知识点循序渐进的特点，可以帮助读者快速掌握仓颉编程语言。 | SIG | ★ 13 / Fork 4 | 2025-07-13 · 低活跃 | — |
| [Cangjie-SIG/Cangjie_Basics_Application](https://gitcode.com/Cangjie-SIG/Cangjie_Basics_Application) | 《仓颉编程基础及应用》，清华大学出版社，2025年9月第1版： 1. 随书源代码； 2. PPT; 3.在线扩展阅读资料。 | SIG | ★ 11 / Fork 2 | 2025-11-17 · 维护中 | — |
| [Cangjie-SIG/cangjieyuyanhexinbiancheng-XLW](https://gitcode.com/Cangjie-SIG/cangjieyuyanhexinbiancheng-XLW) | 面向全场景应用开发的仓颉语言作为基础软件的骨架，能够为我国自主可控的信息技术创新体系提供支撑。本书简明扼要地介绍了仓颉语言的基本开发功能和应用，是一部仓颉语言从入门到深入的优秀参考书 | SIG | ★ 10 / Fork 4 | 2024-10-30 · 低活跃 | — |
| [Cangjie-SIG/cangjieyuyanchengxusheji-DY](https://gitcode.com/Cangjie-SIG/cangjieyuyanchengxusheji-DY) | 《仓颉语言程序设计》定位于仓颉语言的入门教程，成体系深入浅出地介绍仓颉语言应用开发的基础知识和常用标准库的使用方法，面向所有对仓颉语言的爱好者。 | SIG | ★ 5 / Fork 4 | 2024-10-23 · 低活跃 | — |
| [Cangjie-SIG/cangjiechengxusheji-LAZ](https://gitcode.com/Cangjie-SIG/cangjiechengxusheji-LAZ) | No description | SIG | ★ 2 / Fork 1 | 2024-10-25 · 低活跃 | — |
| [Cangjie-SIG/Docs](https://gitcode.com/Cangjie-SIG/Docs) | Cangjie-SIG组织文档 | SIG | ★ 1 / Fork 0 | 2024-08-28 · 低活跃 | — |
| [Smite/仓颉练习 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Smite%2F%E4%BB%93%E9%A2%89%E7%BB%83%E4%B9%A0) | 积累一些文档的代码, 结合在线代码, 验证标准库 | Smite | ★ 1 / Fork 0 | 8 months ago · 维护中 | e,s,仓颉 |
| [Cangjie-SIG/best_practice](https://gitcode.com/Cangjie-SIG/best_practice) | No description | SIG | ★ 0 / Fork 2 | 2026-05-07 · 活跃 | — |
| [2301_80111423/Change](https://gitcode.com/2301_80111423/Change) | ### 项目概述：基于仓颉编程语言的"Change"算法实现 本任务将Exercism平台的Java练习"Change"（零钱计算问题）迁移至华为仓颉编程语言，展示仓颉在算法实现中的简洁性、安全性与多范式融合能力。项目通过仓颉的强类型系统、模式匹配和函数式特性，重构Java版本的零钱计算逻辑，突出仓颉在金融计算场景的优势。 以下是为大作业文档撰写的项目介绍… | 2301_80111423 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [SoraLuna/Mac-Learning-Cangjie](https://gitcode.com/SoraLuna/Mac-Learning-Cangjie) | 本仓库用于存放“Mac玩转仓颉内测版”教程的源码。包含示例代码、练习项目及文档，帮助用户学习和掌握仓颉编程语言的基础与应用。 | SoraLuna | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,m,s |
| [zjhzlqs/仓颉语言面向对象程序设计教材配套实验26版 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zjhzlqs%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%95%99%E6%9D%90%E9%85%8D%E5%A5%97%E5%AE%9E%E9%AA%8C26%E7%89%88) | 本仓库是清华大学出版社《仓颉语言面向对象程序设计》（栗青生 主编，2026年5月）的配套实验指导书与全部实验代码。包含10个递进式实验，覆盖仓颉语言核心语法、OOP、集合IO、网络编程等知识点。每个实验提供Python对比代码，支持学生按"基础→进阶→挑战"三档闯关学习。所有代码在仓颉1.0.1上实测通过，配合沙箱、OJ、AI答疑等在线资源使用。适合高校教… | zjhzlqs | ★ 0 / Fork 0 | 7 days ago · 活跃 | c,z,仓颉 |

### 模板与生态索引（51）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-TPC/TPC-Resource](https://gitcode.com/Cangjie-TPC/TPC-Resource) | Cangjie-TPC（Third Party Components）仓颉编程语言三方库资源汇总 | TPC | ★ 154 / Fork 7 | 2025-12-09 · 维护中 | c,r,t,仓颉 |
| [Cangjie-TPC/Community](https://gitcode.com/Cangjie-TPC/Community) | Cangjie-TPC（Third Party Components）仓颉编程语言三方库社区资源汇总 | TPC | ★ 57 / Fork 5 | 2025-03-25 · 低活跃 | — |
| [cj-awesome/byteorder4cj](https://gitcode.com/cj-awesome/byteorder4cj) | — | cj-awesome | ★ 3 / Fork 1 | 2 days ago · 活跃 | a,b,c |
| [cj-awesome/leap_year](https://gitcode.com/cj-awesome/leap_year) | — | cj-awesome | ★ 2 / Fork 39 | 10 days ago · 活跃 | a,c,l,y |
| [cj-awesome/chinese_finance_number](https://gitcode.com/cj-awesome/chinese_finance_number) | 将数字转换成财务用的中文大写数字 | cj-awesome | ★ 2 / Fork 0 | 8 months ago · 维护中 | a,c,f,n |
| [cj-awesome/idcard](https://gitcode.com/cj-awesome/idcard) | 居民身份证,港澳台居住证,外国人永久居留身份证 | cj-awesome | ★ 1 / Fork 2 | 10 days ago · 活跃 | a,c,i |
| [cj-awesome/bytes4cj](https://gitcode.com/cj-awesome/bytes4cj) | — | cj-awesome | ★ 1 / Fork 1 | 4 days ago · 活跃 | a,b,c |
| [cj-awesome/ipnetwork4cj](https://gitcode.com/cj-awesome/ipnetwork4cj) | — | cj-awesome | ★ 1 / Fork 1 | 5 days ago · 活跃 | a,c,i |
| [cj-awesome/libpng4cj](https://gitcode.com/cj-awesome/libpng4cj) | — | cj-awesome | ★ 1 / Fork 1 | 3 days ago · 活跃 | a,l |
| [cj-awesome/textwrap4cj](https://gitcode.com/cj-awesome/textwrap4cj) | — | cj-awesome | ★ 1 / Fork 1 | 3 days ago · 活跃 | a,c,t |
| [cj-awesome/walkdir4cj](https://gitcode.com/cj-awesome/walkdir4cj) | — | cj-awesome | ★ 1 / Fork 1 | 6 days ago · 活跃 | a,c,w |
| [cj-awesome/nonoid](https://gitcode.com/cj-awesome/nonoid) | 安全可靠、URL 友好仓颉版本的 唯一字符串 ID 生成器。 | cj-awesome | ★ 1 / Fork 0 | 8 months ago · 维护中 | c,n |
| [cj-awesome/petgraph4cj](https://gitcode.com/cj-awesome/petgraph4cj) | — | cj-awesome | ★ 0 / Fork 2 | 9 days ago · 活跃 | a,c,p |
| [cj-awesome/blake34cj](https://gitcode.com/cj-awesome/blake34cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,b,c |
| [cj-awesome/click4cj](https://gitcode.com/cj-awesome/click4cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,c |
| [cj-awesome/decimal4cj](https://gitcode.com/cj-awesome/decimal4cj) | — | cj-awesome | ★ 0 / Fork 1 | 2 days ago · 活跃 | a,c,d |
| [cj-awesome/encoding4cj](https://gitcode.com/cj-awesome/encoding4cj) | — | cj-awesome | ★ 0 / Fork 1 | 8 days ago · 活跃 | a,c,e |
| [cj-awesome/errgroup4cj](https://gitcode.com/cj-awesome/errgroup4cj) | — | cj-awesome | ★ 0 / Fork 1 | 8 days ago · 活跃 | a,c,e |
| [cj-awesome/fastjson4cj](https://gitcode.com/cj-awesome/fastjson4cj) | — | cj-awesome | ★ 0 / Fork 1 | 7 days ago · 活跃 | c,f |
| [cj-awesome/flask4cj](https://gitcode.com/cj-awesome/flask4cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,c,f |
| [cj-awesome/gin4cj](https://gitcode.com/cj-awesome/gin4cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,c,g |
| [cj-awesome/godotenv4cj](https://gitcode.com/cj-awesome/godotenv4cj) | — | cj-awesome | ★ 0 / Fork 1 | 6 days ago · 活跃 | a,c,g |
| [cj-awesome/ini4cj](https://gitcode.com/cj-awesome/ini4cj) | — | cj-awesome | ★ 0 / Fork 1 | 2 days ago · 活跃 | a,c,i |
| [cj-awesome/ipnet4cj](https://gitcode.com/cj-awesome/ipnet4cj) | — | cj-awesome | ★ 0 / Fork 1 | 3 days ago · 活跃 | a,i |
| [cj-awesome/jsonc4cj](https://gitcode.com/cj-awesome/jsonc4cj) | — | cj-awesome | ★ 0 / Fork 1 | 3 days ago · 活跃 | a,c,j |
| [cj-awesome/libcrc_cj](https://gitcode.com/cj-awesome/libcrc_cj) | libcrc 是一个功能强大的循环冗余校验（CRC）计算库，使用仓颉编程语言实现。该库支持多种 CRC 算法，包括 CRC-8、CRC-16、CRC-32、CRC-64、CRC-CCITT、CRC-DNP、CRC-Kermit、CRC-SICK、CRC-Modbus、CRC-XModem 等，并提供 NMEA 校验和计算功能。可广泛应用于数据完整性校验、通… | cj-awesome | ★ 0 / Fork 1 | 8 months ago · 维护中 | a,l |
| [cj-awesome/maud4cj](https://gitcode.com/cj-awesome/maud4cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,c,m |
| [cj-awesome/ristretto4cj](https://gitcode.com/cj-awesome/ristretto4cj) | — | cj-awesome | ★ 0 / Fork 1 | 2 days ago · 活跃 | a,r |
| [cj-awesome/semaphore4cj](https://gitcode.com/cj-awesome/semaphore4cj) | — | cj-awesome | ★ 0 / Fork 1 | 2 days ago · 活跃 | a,c,s |
| [cj-awesome/strsim4cj](https://gitcode.com/cj-awesome/strsim4cj) | — | cj-awesome | ★ 0 / Fork 1 | 1 day ago · 活跃 | a,c,s |
| [cj-awesome/titlebar4cj](https://gitcode.com/cj-awesome/titlebar4cj) | — | cj-awesome | ★ 0 / Fork 1 | 6 days ago · 活跃 | a |
| [cj-awesome/unicodenorm4cj](https://gitcode.com/cj-awesome/unicodenorm4cj) | — | cj-awesome | ★ 0 / Fork 1 | 2 days ago · 活跃 | a,c,u |
| [cj-awesome/unicodeseg4cj](https://gitcode.com/cj-awesome/unicodeseg4cj) | — | cj-awesome | ★ 0 / Fork 1 | 5 days ago · 活跃 | a,c,u |
| [cj-awesome/whoami4cj](https://gitcode.com/cj-awesome/whoami4cj) | — | cj-awesome | ★ 0 / Fork 1 | 6 days ago · 活跃 | a,c,w |
| [2301_81076948/模板引擎cangjie 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_81076948%2F%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8Ecangjie) | just作业 | 2301_81076948 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h |
| [2405_87893488/template](https://gitcode.com/2405_87893488/template) | template的仓颉移植项目 | 2405_87893488 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [2501_90943167/template-engine](https://gitcode.com/2501_90943167/template-engine) | — | 2501_90943167 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,t |
| [cj-awesome/async4cj](https://gitcode.com/cj-awesome/async4cj) | — | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a |
| [cj-awesome/cangjie-grade-system](https://gitcode.com/cj-awesome/cangjie-grade-system) | — | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,c,Cangjie,g,s |
| [cj-awesome/cjlog](https://gitcode.com/cj-awesome/cjlog) | CJLog - 高级日志库 功能：提供多级别日志记录（DEBUG、INFO、WARN、ERROR）。 特点： 支持日志文件轮转。 自定义日志格式。 异步写入。 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,c |
| [cj-awesome/color4cj](https://gitcode.com/cj-awesome/color4cj) | — | cj-awesome | ★ 0 / Fork 0 | 10 days ago · 活跃 | a |
| [cj-awesome/gcoord4cj2](https://gitcode.com/cj-awesome/gcoord4cj2) | 可用于 Web/移动地图开发中的坐标转换，支持WGS84、GCJ02等常用坐标系，实现单点转换、GeoJSON坐标数组递归转换及顶层对象转换，轻量零依赖且覆盖常见坐标系别名。【此简介由AI生成】 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | g |
| [cj-awesome/ihih](https://gitcode.com/cj-awesome/ihih) | 用仓颉语言编写的简单 .INI 文件解析器，适用于嵌入式系统 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,i,t |
| [cj-awesome/librtp_cj](https://gitcode.com/cj-awesome/librtp_cj) | librtp 是一个功能完整的 RTP/RTCP 协议处理库，使用仓颉编程语言实现。该库支持 RTP 包的创建、读取和序列化，RTCP 包的创建和解析（包括 SR、RR、SDES、BYE、APP、RTPFB 等类型），NTP 时间戳和 RTP 时间戳的转换，以及 RTP 抖动缓冲管理。可广泛应用于音视频流媒体传输、实时通信、网络监控等场景。 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,l |
| [cj-awesome/milliseconds](https://gitcode.com/cj-awesome/milliseconds) | 用于将时间转换为毫秒的极其轻量级的模块。 只是为了让时间的书写更加易读，而不需要记住一天、一周、一个月、一年有多少毫秒 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,m |
| [cj-awesome/text_encoding4cj](https://gitcode.com/cj-awesome/text_encoding4cj) | — | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | e,t |
| [cj-awesome/tinyexpr4cj](https://gitcode.com/cj-awesome/tinyexpr4cj) | tinyexpr4cj 是将知名的 C 开源项目 TinyExpr 移植到仓颉（Cangjie）语言的实现。它是一个体积小、零依赖的“递归下降”数学表达式解析与计算引擎，适合在运行时对字符串表达式进行求值。 | cj-awesome | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,t |
| [etcj/template-cj](https://gitcode.com/etcj/template-cj) | Cangjie 模板项目 | etcj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t |
| [etcj/template-cj-monorepo](https://gitcode.com/etcj/template-cj-monorepo) | Cangjie Monorepo 模板项目 | etcj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,t |
| [mashser/cangjie-cmake-template](https://gitcode.com/mashser/cangjie-cmake-template) | An example/template cjpm project showing how to use Cangjie and cmake together wiring everything via build.cj | mashser | ★ 0 / Fork 0 | 9 days ago · 活跃 | c,m,t |
| [tybb2026/tycj-template](https://gitcode.com/tybb2026/tycj-template) | tycj_template 是一个轻量级 HTML 模板引擎，支持类似 Jinja2/Handlebars 的语法，用于 Web 页面渲染。 | tybb2026 | ★ 0 / Fork 0 | 24 days ago · 活跃 | t |

## 待人工复核（1,912）

### 待人工复核（1,912）

| 项目 | 简介 | 来源 | Star / Fork | 最近更新 | 检索命中 |
|---|---|---|---:|---|---|
| [Cangjie-SIG/codelin](https://gitcode.com/Cangjie-SIG/codelin) | No description | SIG | ★ 17 / Fork 0 | 2025-08-08 · 维护中 | c,Cangjie |
| [Cangjie-TPC/cjhead](https://gitcode.com/Cangjie-TPC/cjhead) | No description | TPC | ★ 10 / Fork 0 | 2025-07-03 · 低活跃 | — |
| [Cangjie-SIG/cangjie-lsh](https://gitcode.com/Cangjie-SIG/cangjie-lsh) | No description | SIG | ★ 9 / Fork 0 | 2025-06-06 · 低活跃 | c,l,s |
| [zhangyin_gitcode/cjgrapht_wp](https://gitcode.com/zhangyin_gitcode/cjgrapht_wp) | — | zhangyin_gitcode | ★ 6 / Fork 41 | 17 days ago · 活跃 | c,g,w,z |
| [Cangjie-SIG/hongtools](https://gitcode.com/Cangjie-SIG/hongtools) | No description | SIG | ★ 6 / Fork 2 | 2025-01-15 · 低活跃 | c,Cangjie,h,s |
| [CJMP/ThirdParty-Markdown](https://gitcode.com/CJMP/ThirdParty-Markdown) | — | CJMP | ★ 5 / Fork 3 | 9 days ago · 活跃 | c,m,p,t |
| [PermissionDog/中嘞 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=PermissionDog%2F%E4%B8%AD%E5%98%9E) | — | PermissionDog | ★ 5 / Fork 1 | 1 year ago · 低活跃 | d,p,z |
| [yishengTH/TeaExample](https://gitcode.com/yishengTH/TeaExample) | Tea的使用示例 | yishengTH | ★ 5 / Fork 1 | 1 year ago · 低活跃 | e,t,y |
| [bying19/CST-2025](https://gitcode.com/bying19/CST-2025) | — | bying19 | ★ 4 / Fork 74 | 8 months ago · 维护中 | b,c |
| [losu-lang/losu-ospp2025-task2](https://gitcode.com/losu-lang/losu-ospp2025-task2) | 该项目要求使用仓颉编程语言进行实现一个嵌入式的洛书运行环境，可以在仓颉工程中插入洛书编写的脚本代码，提高工程的灵活性与拓展性。 | losu-lang | ★ 4 / Fork 3 | 8 months ago · 维护中 | l,o,t |
| [CJMP/CJFrontend](https://gitcode.com/CJMP/CJFrontend) | — | CJMP | ★ 4 / Fork 2 | 1 month ago · 活跃 | c |
| [folib/cjpmp](https://gitcode.com/folib/cjpmp) | cjpm的plus版本，支持从folib制品库获取依赖 | folib | ★ 4 / Fork 1 | 7 months ago · 维护中 | c,f |
| [Yesokim/aura](https://gitcode.com/Yesokim/aura) | — | Yesokim | ★ 4 / Fork 1 | 8 months ago · 维护中 | a,y |
| [坚果派/cjui 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%9D%9A%E6%9E%9C%E6%B4%BE%2Fcjui) | — | 坚果派 | ★ 4 / Fork 1 | 2 months ago · 活跃 | c,n |
| [开源仓颉第三方开发者社区/official-backend 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fofficial-backend) | 组织官网后端 | 开源仓颉第三方开发者社区 | ★ 4 / Fork 1 | 1 year ago · 低活跃 | b,Cangjie,o |
| [flippedx/kafka-cangjie](https://gitcode.com/flippedx/kafka-cangjie) | 仓颉Kafka客户端，支持加载元数据、发送消息、获取消息、提交消费者组的偏移量、获取消费者组的偏移量。 | flippedx | ★ 4 / Fork 0 | 1 year ago · 低活跃 | c,f,k |
| [ZUT_仓颉/E1_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E2_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E3_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E4_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,z,仓颉 |
| [ZUT_仓颉/E61_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E62_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ljq129) | — | ZUT_仓颉 | ★ 4 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,z,仓颉 |
| [zhangyin_gitcode/icli_wp](https://gitcode.com/zhangyin_gitcode/icli_wp) | — | zhangyin_gitcode | ★ 3 / Fork 4 | 1 month ago · 活跃 | g,w |
| [weixin_42567637/鸿蒙2048 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=weixin_42567637%2F%E9%B8%BF%E8%92%992048) | 仓颉+鸿蒙，2048Demo | weixin_42567637 | ★ 3 / Fork 2 | 1 year ago · 低活跃 | o,w |
| [wtao0301/cangjie-tools](https://gitcode.com/wtao0301/cangjie-tools) | — | wtao0301 | ★ 3 / Fork 2 | 3 months ago · 活跃 | c,Cangjie,w |
| [BUGPZ/jwt](https://gitcode.com/BUGPZ/jwt) | 仓颉版 JWT token生成库（JWT for cangjie） | BUGPZ | ★ 3 / Fork 1 | 1 year ago · 低活跃 | b,Cangjie,j,仓颉 |
| [LiqD/LinderHttp](https://gitcode.com/LiqD/LinderHttp) | — | LiqD | ★ 3 / Fork 1 | 22 days ago · 活跃 | d,h,l |
| [LiqD/SelineRead](https://gitcode.com/LiqD/SelineRead) | zlib三方客户端 | LiqD | ★ 3 / Fork 1 | 25 days ago · 活跃 | d,l,r,s |
| [zhangyin_gitcode/cjakarta_activation](https://gitcode.com/zhangyin_gitcode/cjakarta_activation) | 本项目迁移自 Jakarta Activation 、 Eclipse Angus - Activation 和 Mime。 | zhangyin_gitcode | ★ 3 / Fork 1 | 1 year ago · 低活跃 | a,c,g,z |
| [Alger/xmlparser](https://gitcode.com/Alger/xmlparser) | Xml文件解析 | Alger | ★ 3 / Fork 0 | 1 year ago · 低活跃 | a |
| [linluo86/excelUtil](https://gitcode.com/linluo86/excelUtil) | cangjie语言生成excel工具类 | linluo86 | ★ 3 / Fork 0 | 8 months ago · 维护中 | e,l,u |
| [midwinter1993/magic-translator](https://gitcode.com/midwinter1993/magic-translator) | — | midwinter1993 | ★ 3 / Fork 0 | 1 year ago · 低活跃 | m,t |
| [PermissionDog/cjfs](https://gitcode.com/PermissionDog/cjfs) | — | PermissionDog | ★ 3 / Fork 0 | 1 year ago · 低活跃 | c,d,p |
| [Tlntin/tokenizer](https://gitcode.com/Tlntin/tokenizer) | 使用仓颉编写的分词器 | Tlntin | ★ 3 / Fork 0 | 1 year ago · 低活跃 | t |
| [ycypyc/Cangjie-Simple](https://gitcode.com/ycypyc/Cangjie-Simple) | 使用 Cangjie 语言编写的简单项目 | ycypyc | ★ 3 / Fork 0 | 1 year ago · 低活跃 | c,s,y |
| [ZUT_仓颉/D_ljq129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ljq129) | — | ZUT_仓颉 | ★ 3 / Fork 0 | 1 year ago · 低活跃 | Cangjie,d,l |
| [zhangyin_gitcode/cjnum_wp](https://gitcode.com/zhangyin_gitcode/cjnum_wp) | — | zhangyin_gitcode | ★ 2 / Fork 9 | 22 days ago · 活跃 | c,g,w,z |
| [Chemxy/ginger](https://gitcode.com/Chemxy/ginger) | — | Chemxy | ★ 2 / Fork 2 | 10 months ago · 维护中 | c,g |
| [OpenHarmony-SIG/third_party_cangjie_stdx](https://gitcode.com/OpenHarmony-SIG/third_party_cangjie_stdx) | 仓颉编程语言提供了 stdx 模块，该模块提供了网络、安全等领域的通用能力 | OpenHarmony-SIG | ★ 2 / Fork 2 | 8 months ago · 维护中 | c,Cangjie,h,o,p,s,t,仓颉 |
| [CodexBai/build_in_cangjie](https://gitcode.com/CodexBai/build_in_cangjie) | — | CodexBai | ★ 2 / Fork 1 | 15 days ago · 活跃 | b,c,Cangjie,i |
| [Danny_Summer/feign-cangjie](https://gitcode.com/Danny_Summer/feign-cangjie) | — | Danny_Summer | ★ 2 / Fork 1 | 1 month ago · 活跃 | c,Cangjie,f,s |
| [SMATLab/CangAnalyzer](https://gitcode.com/SMATLab/CangAnalyzer) | — | SMATLab | ★ 2 / Fork 1 | 9 months ago · 维护中 | a,c,s |
| [unravel/使用仓颉实现的算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BD%BF%E7%94%A8%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E7%AE%97%E6%B3%95) | 使用仓颉语言实现的一些算法。包括leetcode和算法指南上的实现等 | unravel | ★ 2 / Fork 1 | 1 month ago · 活跃 | a,c,Cangjie,u,仓颉 |
| [Yang_Fan__/hmworld](https://gitcode.com/Yang_Fan__/hmworld) | 仓颉-鸿蒙世界 | Yang_Fan__ | ★ 2 / Fork 1 | 1 year ago · 低活跃 | f,h,y |
| [zhangyin_gitcode/evently](https://gitcode.com/zhangyin_gitcode/evently) | 一套简易的事件机制，实现类似C#事件的功能。 #仓颉# #cangjie# | zhangyin_gitcode | ★ 2 / Fork 1 | 4 months ago · 活跃 | e,g,z |
| [开源仓颉第三方开发者社区/json2class 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fjson2class) | 通过Json字符串转换成对应的仓颉Class/Struct，并生成对应变量的Getter/Setter、Json序列化反序列化函数、ClasModel序列化反序列化函数 | 开源仓颉第三方开发者社区 | ★ 2 / Fork 1 | 1 year ago · 低活跃 | Cangjie,j,o |
| [aibrary/oquic](https://gitcode.com/aibrary/oquic) | QUIC(RFC 9000/9001/9002)实现 | aibrary | ★ 2 / Fork 0 | 17 days ago · 活跃 | a,o |
| [array2d/deepcj](https://gitcode.com/array2d/deepcj) | — | array2d | ★ 2 / Fork 0 | 1 year ago · 低活跃 | a,d |
| [Cy2s1ne/ComplexNumber](https://gitcode.com/Cy2s1ne/ComplexNumber) | 使用仓颉语言改写ComplexNumber | Cy2s1ne | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,n |
| [halocj/halo_router](https://gitcode.com/halocj/halo_router) | — | halocj | ★ 2 / Fork 0 | 1 year ago · 低活跃 | h,r |
| [halocj/halo_web](https://gitcode.com/halocj/halo_web) | — | halocj | ★ 2 / Fork 0 | 1 year ago · 低活跃 | h,w |
| [HuangJiaxin23310/cangjie](https://gitcode.com/HuangJiaxin23310/cangjie) | 基于cangjie仓颉编程语言实现的排序算法 | HuangJiaxin23310 | ★ 2 / Fork 0 | 10 months ago · 维护中 | c,Cangjie,h,j,仓颉 |
| [hylab/CangjieMagic-fork](https://gitcode.com/hylab/CangjieMagic-fork) | CangjieMagic的分支，主要维护Canary版本，不兼容ohos，添加了简单的SSE支持 | hylab | ★ 2 / Fork 0 | 1 year ago · 低活跃 | f,h,m |
| [louloulin/ratatui.cj](https://gitcode.com/louloulin/ratatui.cj) | — | louloulin | ★ 2 / Fork 0 | 11 months ago · 维护中 | l,r |
| [MurasameXuu/rac](https://gitcode.com/MurasameXuu/rac) | — | MurasameXuu | ★ 2 / Fork 0 | 1 year ago · 低活跃 | m,r,x |
| [PLMNEXT/next-web](https://gitcode.com/PLMNEXT/next-web) | — | PLMNEXT | ★ 2 / Fork 0 | 1 year ago · 低活跃 | n,p,w |
| [qingss0/仓颉网络工具 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=qingss0%2F%E4%BB%93%E9%A2%89%E7%BD%91%E7%BB%9C%E5%B7%A5%E5%85%B7) | 本项目通过随机生成URL并进行验证，对互联网上的网页进行挖掘。 | qingss0 | ★ 2 / Fork 0 | 1 month ago · 活跃 | q,u,仓颉 |
| [soulsoft/spire_embed](https://gitcode.com/soulsoft/spire_embed) | 用于支持编译阶段将静态资源文件嵌入仓颉代码中 | soulsoft | ★ 2 / Fork 0 | 9 months ago · 维护中 | e |
| [Tlntin/HarmonyOS-NEXT-Cangjie-C](https://gitcode.com/Tlntin/HarmonyOS-NEXT-Cangjie-C) | 鸿蒙Next使用仓颉开发，调用C程序示例。 | Tlntin | ★ 2 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,h,n,o,t |
| [xieyw/design_pattern](https://gitcode.com/xieyw/design_pattern) | 设计模式(design pattern)是对面向对象设计中反复出现的问题的解决方案。 | xieyw | ★ 2 / Fork 0 | 10 months ago · 维护中 | d,p,x |
| [xieyw/leetcode-solution](https://gitcode.com/xieyw/leetcode-solution) | leetcode solution by Cangjie. | xieyw | ★ 2 / Fork 0 | 1 month ago · 活跃 | l,x |
| [zhangyin_gitcode/rac](https://gitcode.com/zhangyin_gitcode/rac) | — | zhangyin_gitcode | ★ 2 / Fork 0 | 1 year ago · 低活跃 | r,z |
| [ZUT_仓颉/D_zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,d,z,仓颉 |
| [ZUT_仓颉/E1_zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E2_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zsk133) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E2_zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zsk133) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E3_zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E4_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zsk133) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E4_zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E5_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zsk133) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5-zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E61-zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61-zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E62_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zsk133) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,仓颉 |
| [ZUT_仓颉/E62-zxc112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-zxc112) | — | ZUT_仓颉 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [开源仓颉第三方开发者社区/Result异常处理模型 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FResult%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%A8%A1%E5%9E%8B) | Result异常处理模型 | 开源仓颉第三方开发者社区 | ★ 2 / Fork 0 | 1 year ago · 低活跃 | o,r |
| [OpenHarmony/security_security_cangjie_wrapper](https://gitcode.com/OpenHarmony/security_security_cangjie_wrapper) | 安全模块仓颉封装层 | OpenHarmony | ★ 1 / Fork 35 | 6 days ago · 活跃 | c,o,s,w |
| [zgs828/cangjie_arkui_skills](https://gitcode.com/zgs828/cangjie_arkui_skills) | — | zgs828 | ★ 1 / Fork 4 | 5 months ago · 活跃 | a,c,Cangjie,z |
| [2301_76230122/cjgrapht](https://gitcode.com/2301_76230122/cjgrapht) | cjgrapht | 2301_76230122 | ★ 1 / Fork 2 | 1 year ago · 低活跃 | c |
| [ljh11_zj/OpenHarmony_AI_CangjieUI_Project](https://gitcode.com/ljh11_zj/OpenHarmony_AI_CangjieUI_Project) | 仓颉UI在Openharmony的AI工作流平台 | ljh11_zj | ★ 1 / Fork 2 | 3 months ago · 活跃 | a,c,Cangjie,h,l,o,p,u,z,仓颉 |
| [lywrtwt/maze-天津机电职业技术学院-卢怡-魏颖 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=lywrtwt%2Fmaze-%E5%A4%A9%E6%B4%A5%E6%9C%BA%E7%94%B5%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2-%E5%8D%A2%E6%80%A1-%E9%AD%8F%E9%A2%96) | 这是一个简易迷宫 | lywrtwt | ★ 1 / Fork 2 | 7 months ago · 维护中 | l,m |
| [zhangyin_gitcode/naivelogger_seq](https://gitcode.com/zhangyin_gitcode/naivelogger_seq) | — | zhangyin_gitcode | ★ 1 / Fork 2 | 6 months ago · 活跃 | g,n,s,z |
| [zhangyin_gitcode/naivemediator](https://gitcode.com/zhangyin_gitcode/naivemediator) | 一个不依赖反射和AOT的中介者模式实现，支持流水线。#仓颉# #cangjie# | zhangyin_gitcode | ★ 1 / Fork 2 | 4 months ago · 活跃 | g,n |
| [zhangyin_gitcode/naiveserviceresult](https://gitcode.com/zhangyin_gitcode/naiveserviceresult) | 一个通用返回值套件。#仓颉# #cangjie# | zhangyin_gitcode | ★ 1 / Fork 2 | 4 months ago · 活跃 | g,n |
| [小学期小组/小组作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%B0%8F%E5%AD%A6%E6%9C%9F%E5%B0%8F%E7%BB%84%2F%E5%B0%8F%E7%BB%84%E4%BD%9C%E4%B8%9A) | — | 小学期小组 | ★ 1 / Fork 2 | 9 days ago · 活跃 | x |
| [b_andrew/InteropHello](https://gitcode.com/b_andrew/InteropHello) | — | b_andrew | ★ 1 / Fork 1 | 1 month ago · 活跃 | a,b,h,i |
| [cangjie_no_1/kaca_https](https://gitcode.com/cangjie_no_1/kaca_https) | — | cangjie_no_1 | ★ 1 / Fork 1 | 18 days ago · 活跃 | h,k,n |
| [louloulin/lingshu](https://gitcode.com/louloulin/lingshu) | — | louloulin | ★ 1 / Fork 1 | 9 months ago · 维护中 | l |
| [m0_72341396/Cangjie-egg](https://gitcode.com/m0_72341396/Cangjie-egg) | 仓颉移植egg语言 | m0_72341396 | ★ 1 / Fork 1 | 6 months ago · 活跃 | c,Cangjie,e,m |
| [Moem/hibase32cj](https://gitcode.com/Moem/hibase32cj) | hibase32cj 仓颉实现的一个简单的Base32(RFC 4648)编码/解码函数支持UTF-8编码 | Moem | ★ 1 / Fork 1 | 1 year ago · 低活跃 | h,m |
| [vchuoshen6/jsonparser](https://gitcode.com/vchuoshen6/jsonparser) | — | vchuoshen6 | ★ 1 / Fork 1 | 7 months ago · 维护中 | j,v |
| [zhangyin_gitcode/resembed](https://gitcode.com/zhangyin_gitcode/resembed) | 在编译时将文件内容嵌入到代码中，方便在代码中使用外部文件的内容。 | zhangyin_gitcode | ★ 1 / Fork 1 | 1 year ago · 低活跃 | g,r,z |
| [开源仓颉第三方开发者社区/GetRandom 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FGetRandom) | — | 开源仓颉第三方开发者社区 | ★ 1 / Fork 1 | 2 months ago · 活跃 | Cangjie,g,o,r |
| [开源仓颉第三方开发者社区/ulid 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fulid) | 通用唯一的字典排序标识符 | 开源仓颉第三方开发者社区 | ★ 1 / Fork 1 | 1 month ago · 活跃 | o,u |
| [2201_76051721/E1_ykx403](https://gitcode.com/2201_76051721/E1_ykx403) | — | 2201_76051721 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e |
| [2301_82059049/Cjweb](https://gitcode.com/2301_82059049/Cjweb) | 仓颉编程任务（代码移植） | 2301_82059049 | ★ 1 / Fork 0 | 30 days ago · 活跃 | c |
| [2301_82068460/E5_gcl127](https://gitcode.com/2301_82068460/E5_gcl127) | 作业5： 定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 | 2301_82068460 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [abandon1a2b/cangcommand](https://gitcode.com/abandon1a2b/cangcommand) | — | abandon1a2b | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,b,c |
| [abandon1a2b/cangopt](https://gitcode.com/abandon1a2b/cangopt) | — | abandon1a2b | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,b,c |
| [abandon1a2b/cast](https://gitcode.com/abandon1a2b/cast) | — | abandon1a2b | ★ 1 / Fork 0 | 1 year ago · 低活跃 | a,b,c |
| [aibrary/acoap](https://gitcode.com/aibrary/acoap) | — | aibrary | ★ 1 / Fork 0 | 1 month ago · 活跃 | a |
| [aibrary/cipher](https://gitcode.com/aibrary/cipher) | — | aibrary | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,c |
| [aibrary/fastcp](https://gitcode.com/aibrary/fastcp) | 高性能无锁数据库连接池 | aibrary | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,f |
| [AlonNas/CjChatRoom](https://gitcode.com/AlonNas/CjChatRoom) | — | AlonNas | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,c,n,r |
| [Archer_f/cangjie](https://gitcode.com/Archer_f/cangjie) | 这是我第一个仓颉项目 | Archer_f | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,f |
| [CAPTAIN1275/FSD_Cangjie](https://gitcode.com/CAPTAIN1275/FSD_Cangjie) | — | CAPTAIN1275 | ★ 1 / Fork 0 | 1 day ago · 活跃 | Cangjie,f |
| [Cedar-Z/Cangjie](https://gitcode.com/Cedar-Z/Cangjie) | — | Cedar-Z | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,t,z |
| [chipichipi/cjgeohash_pre](https://gitcode.com/chipichipi/cjgeohash_pre) | — | chipichipi | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,p |
| [chongweizhi/HiCrypto](https://gitcode.com/chongweizhi/HiCrypto) | 基于openHiTls提供完全国产、高效、敏捷的全场景开源密码学开发套件 | chongweizhi | ★ 1 / Fork 0 | 9 months ago · 维护中 | c,h |
| [daqingshu/serde](https://gitcode.com/daqingshu/serde) | — | daqingshu | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,s |
| [deed/cbindings](https://gitcode.com/deed/cbindings) | Automatic C foreign declarations generator for cangjie | deed | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,d |
| [DreamPanda/evalexpr](https://gitcode.com/DreamPanda/evalexpr) | — | DreamPanda | ★ 1 / Fork 0 | 6 months ago · 活跃 | d,e,p |
| [elon_tang/colored](https://gitcode.com/elon_tang/colored) | 🎨 Adding color to your terminal has never been easier. | elon_tang | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,e,t |
| [gcw_0pggJ8AM/ICLI_WP](https://gitcode.com/gcw_0pggJ8AM/ICLI_WP) | — | gcw_0pggJ8AM | ★ 1 / Fork 0 | 1 month ago · 活跃 | g,i,j,w |
| [gcw_A2aNHCbd/Cangjie](https://gitcode.com/gcw_A2aNHCbd/Cangjie) | — | gcw_A2aNHCbd | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,g,n |
| [gqb6666/仓颉语言的llm_wiki知识库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gqb6666%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%9A%84llm_wiki%E7%9F%A5%E8%AF%86%E5%BA%93) | 此项目整合并优化了仓颉的特性以及全面覆盖各种知识点。适合大模型去调用，编写应用、代码等 | gqb6666 | ★ 1 / Fork 0 | 1 month ago · 活跃 | Cangjie,l,w,仓颉 |
| [hanbao556/leap_year](https://gitcode.com/hanbao556/leap_year) | — | hanbao556 | ★ 1 / Fork 0 | 1 month ago · 活跃 | h,l,y |
| [harmony-os-hw-bj/harmonyCanjieHybird](https://gitcode.com/harmony-os-hw-bj/harmonyCanjieHybird) | 仓颉鸿蒙混合工程示例 | harmony-os-hw-bj | ★ 1 / Fork 0 | 1 year ago · 低活跃 | b,c,h,o |
| [ID_xiaorui/cjtermprogress](https://gitcode.com/ID_xiaorui/cjtermprogress) | — | ID_xiaorui | ★ 1 / Fork 0 | 17 days ago · 活跃 | c,i,x |
| [JieCat2526/Mammoth](https://gitcode.com/JieCat2526/Mammoth) | — | JieCat2526 | ★ 1 / Fork 0 | 6 months ago · 活跃 | c,j,m |
| [kazuradrop/xxhash64](https://gitcode.com/kazuradrop/xxhash64) | 纯仓颉实现的XXHash（64 bits version） | kazuradrop | ★ 1 / Fork 0 | 1 year ago · 低活跃 | k,x |
| [kirby/cangjie_mbpp](https://gitcode.com/kirby/cangjie_mbpp) | — | kirby | ★ 1 / Fork 0 | 10 days ago · 活跃 | c,k,m |
| [Libres/librarySystem](https://gitcode.com/Libres/librarySystem) | — | Libres | ★ 1 / Fork 0 | 1 year ago · 低活跃 | l |
| [louloulin/cokio](https://gitcode.com/louloulin/cokio) | 基于仓颉实现runtime | louloulin | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,l |
| [M-Robots官方社区/distributeddatamgr_distributeddatamgr_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fdistributeddatamgr_distributeddatamgr_cangjie_wrapper) | KaihongOS 5.0.1 distributeddatamgr_distributeddatamgr_cangjie_wrapper repository | M-Robots官方社区 | ★ 1 / Fork 0 | 30 days ago · 活跃 | d,m,r,w,仓颉 |
| [M-Robots官方社区/startup_startup_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fstartup_startup_cangjie_wrapper) | KaihongOS 5.0.1 startup_startup_cangjie_wrapper repository | M-Robots官方社区 | ★ 1 / Fork 0 | 30 days ago · 活跃 | m,r,s,w |
| [M-Robots官方社区/window_window_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fwindow_window_cangjie_wrapper) | KaihongOS 5.0.1 window_window_cangjie_wrapper repository | M-Robots官方社区 | ★ 1 / Fork 0 | 30 days ago · 活跃 | m,r,w,仓颉 |
| [Moem/Cangjie](https://gitcode.com/Moem/Cangjie) | cangjie | Moem | ★ 1 / Fork 0 | 1 year ago · 低活跃 | m |
| [sfy123456789/临沂科技职业学院-史飞扬-指导老师李晓坤 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=sfy123456789%2F%E4%B8%B4%E6%B2%82%E7%A7%91%E6%8A%80%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2-%E5%8F%B2%E9%A3%9E%E6%89%AC-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E6%9D%8E%E6%99%93%E5%9D%A4) | — | sfy123456789 | ★ 1 / Fork 0 | 1 month ago · 活跃 | a,s |
| [Sixxxxxx/recall_cangjie](https://gitcode.com/Sixxxxxx/recall_cangjie) | — | Sixxxxxx | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,r |
| [SoraLuna/cangjie-demos](https://gitcode.com/SoraLuna/cangjie-demos) | 纯仓颉 ArkUI HarmonyOS 示例集，记录从一句自然语言需求到可运行应用的实践过程。项目按应用逐篇提交，每个示例包含独立 README，可单独打开、构建和验证。 | SoraLuna | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,d,l,s |
| [soulsoft/agents](https://gitcode.com/soulsoft/agents) | 人工智能开发套件(智擎) | soulsoft | ★ 1 / Fork 0 | 5 days ago · 活跃 | a,s |
| [StephenZhou/Navigator](https://gitcode.com/StephenZhou/Navigator) | 在应用开发中可依赖该工具轻松的实现页面跳转。 | StephenZhou | ★ 1 / Fork 0 | 1 year ago · 低活跃 | n,s |
| [UCToo/nuanshou](https://gitcode.com/UCToo/nuanshou) | heronix黑客松 | UCToo | ★ 1 / Fork 0 | 1 month ago · 活跃 | n,u |
| [unravel/debug环境调试宏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2Fdebug%E7%8E%AF%E5%A2%83%E8%B0%83%E8%AF%95%E5%AE%8F) | 用于debug环境下进行调试的宏。可以同时打印表达式以及值 | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,d,m,u,v |
| [unravel/仓颉实用宏定义 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%94%A8%E5%AE%8F%E5%AE%9A%E4%B9%89) | 定义一些常用的仓颉的宏定义 | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,m,u |
| [unravel/自动柯里化宏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E8%87%AA%E5%8A%A8%E6%9F%AF%E9%87%8C%E5%8C%96%E5%AE%8F) | 自动完成对函数的柯里化 | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,m,u |
| [unravel/设计模式和设计原则的仓颉实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%92%8C%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99%E7%9A%84%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0) | — | unravel | ★ 1 / Fork 0 | 1 month ago · 活跃 | c,d,u |
| [xitem/cangjie](https://gitcode.com/xitem/cangjie) | cangjie project code | xitem | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,x,仓颉 |
| [xuanjz/tcp_invest](https://gitcode.com/xuanjz/tcp_invest) | — | xuanjz | ★ 1 / Fork 0 | 4 months ago · 活跃 | i,t |
| [xuzongmin/myRecallCJ](https://gitcode.com/xuzongmin/myRecallCJ) | 仓颉云原生个人版 | xuzongmin | ★ 1 / Fork 0 | 1 year ago · 低活跃 | m,r,x |
| [yishengTH/BarkTLS](https://gitcode.com/yishengTH/BarkTLS) | 仓颉后端生态的安全传输膜 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | b,y |
| [yishengTH/Glowcap](https://gitcode.com/yishengTH/Glowcap) | 仓颉后端生态的客观测接入层 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | t,y |
| [yishengTH/GraftSQL](https://gitcode.com/yishengTH/GraftSQL) | 仓颉后端生态中的关系型数据访问基座 | yishengTH | ★ 1 / Fork 0 | 2 months ago · 活跃 | g,s,t,y |
| [yishengTH/Infuser](https://gitcode.com/yishengTH/Infuser) | 仓颉后端生态的显式模块装配层、IoC 与配置绑定层 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | i,t |
| [yishengTH/Petal](https://gitcode.com/yishengTH/Petal) | 仓颉后端生态的高性能HTTP协议实现 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | p,t |
| [yishengTH/Pith](https://gitcode.com/yishengTH/Pith) | 仓颉后端生态的高性能统一字节平面与内存平面 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | p,t,y |
| [yishengTH/Rachis](https://gitcode.com/yishengTH/Rachis) | 仓颉后端生态的高性能传输内核 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | r,t,y |
| [yishengTH/Resin](https://gitcode.com/yishengTH/Resin) | — | yishengTH | ★ 1 / Fork 0 | 2 months ago · 活跃 | r,y |
| [yishengTH/Seedbed](https://gitcode.com/yishengTH/Seedbed) | 仓颉后端生态的高性能执行语义与并发治理内核 | yishengTH | ★ 1 / Fork 0 | 3 months ago · 活跃 | s,t |
| [yuzhuohao/LoginComponent](https://gitcode.com/yuzhuohao/LoginComponent) | — | yuzhuohao | ★ 1 / Fork 0 | 9 months ago · 维护中 | y |
| [zhangyin_gitcode/DailyPoetryC](https://gitcode.com/zhangyin_gitcode/DailyPoetryC) | — | zhangyin_gitcode | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,g,p,z |
| [zhangyin_gitcode/exec](https://gitcode.com/zhangyin_gitcode/exec) | — | zhangyin_gitcode | ★ 1 / Fork 0 | 4 months ago · 活跃 | e,g,z |
| [zhaocuinan/仓颉跨语言操作-2-windows-中间库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zhaocuinan%2F%E4%BB%93%E9%A2%89%E8%B7%A8%E8%AF%AD%E8%A8%80%E6%93%8D%E4%BD%9C-2-windows-%E4%B8%AD%E9%97%B4%E5%BA%93) | — | zhaocuinan | ★ 1 / Fork 0 | 11 months ago · 维护中 | c,t,w,z |
| [ZhenPengDong/cangjie_educoder_TJUT_easyTianJin](https://gitcode.com/ZhenPengDong/cangjie_educoder_TJUT_easyTianJin) | 津门·仓颉·学生先行者—— 天津理工大学 华信软件学院 易游津门 | ZhenPengDong | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,d,e,j,p,z |
| [zjhzlqs/cangjie_ai](https://gitcode.com/zjhzlqs/cangjie_ai) | cangjie_ai（跟着仓颉学AI） 是利用颉编程语言实现AI相关算法的实验，该项目结合中国传统的文化，用简洁的cangjie编程语言重塑在AI领域的经典的算法模型，增强初学编程者的人机交互体验，达到最大价值的“文化+科技”的融合。 | zjhzlqs | ★ 1 / Fork 0 | 9 months ago · 维护中 | c,Cangjie,z |
| [ZUT_仓颉/D_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,d,h,z,仓颉 |
| [ZUT_仓颉/D_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zsk133) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/E1_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,h,仓颉 |
| [ZUT_仓颉/E1_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zsk133) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z |
| [ZUT_仓颉/E1_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ZSK303) | 仓颉作业 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z |
| [ZUT_仓颉/E2_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,h,z,仓颉 |
| [ZUT_仓颉/E2_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ZSK303) | 仓颉作业2 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E3_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,h |
| [ZUT_仓颉/E3_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lhx134) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E3_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ZSK303) | 仓颉作业3 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E4__lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__lhx134) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l,z,仓颉 |
| [ZUT_仓颉/E4_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | h,仓颉 |
| [ZUT_仓颉/E4_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ZSK303) | 仓颉作业4 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | h,z,仓颉 |
| [ZUT_仓颉/E5_lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lh114) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lhx134) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/E5_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ZSK303) | 仓颉作业5 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E61_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,h,z |
| [ZUT_仓颉/E61_lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lh114) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E61_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lhx134) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l,z,仓颉 |
| [ZUT_仓颉/E61_zsk133 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zsk133) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E61_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ZSK303) | 仓颉作业6.1 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z,仓颉 |
| [ZUT_仓颉/E62_hzz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_hzz107) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,z,仓颉 |
| [ZUT_仓颉/E62_lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lh114) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,仓颉 |
| [ZUT_仓颉/E62_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lhx134) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E62_ZSK303 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ZSK303) | 仓颉作业6.2 | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/HelloWorld229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FHelloWorld229) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h,w,仓颉 |
| [ZUT_仓颉/指数搜索 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8C%87%E6%95%B0%E6%90%9C%E7%B4%A2) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 2 months ago · 活跃 | f,s,z,仓颉 |
| [ZUT_仓颉/臭皮匠排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%87%AD%E7%9A%AE%E5%8C%A0%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 1 / Fork 0 | 2 months ago · 活跃 | Cangjie,s,仓颉 |
| [坚果派/cangjiedemo 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%9D%9A%E6%9E%9C%E6%B4%BE%2Fcangjiedemo) | 鸿蒙cangjie demo | 坚果派 | ★ 1 / Fork 0 | 9 months ago · 维护中 | c,Cangjie,n |
| [小学期小组/小组作业最终版 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%B0%8F%E5%AD%A6%E6%9C%9F%E5%B0%8F%E7%BB%84%2F%E5%B0%8F%E7%BB%84%E4%BD%9C%E4%B8%9A%E6%9C%80%E7%BB%88%E7%89%88) | — | 小学期小组 | ★ 1 / Fork 0 | 9 days ago · 活跃 | f,x |
| [开源仓颉第三方开发者社区/CJNotify 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FCJNotify) | 仓颉的 libnotify 绑定。 | 开源仓颉第三方开发者社区 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,o |
| [开源仓颉第三方开发者社区/context 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fcontext) | 类似于golang中的context.Context，包含channel+select操作 | 开源仓颉第三方开发者社区 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | c,h,o,p |
| [开源仓颉第三方开发者社区/jsonpeek 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fjsonpeek) | 路径读取Json内容工具，`a.b\[0\].c\['d'\].e` | 开源仓颉第三方开发者社区 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,j,o |
| [开源仓颉第三方开发者社区/nanoid 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fnanoid) | 一个小巧、安全、URL友好、唯一的 仓颉 字符串ID生成器 | 开源仓颉第三方开发者社区 | ★ 1 / Fork 0 | 1 year ago · 低活跃 | Cangjie,n,o |
| [wjzInNj/cangjie_api_scan](https://gitcode.com/wjzInNj/cangjie_api_scan) | — | wjzInNj | ★ 0 / Fork 4 | 9 months ago · 维护中 | a,c,Cangjie,i,n,w |
| [zhangyin_gitcode/naiveteaset](https://gitcode.com/zhangyin_gitcode/naiveteaset) | 将naivetoolkit集成到tea。#仓颉# #cangjie# | zhangyin_gitcode | ★ 0 / Fork 3 | 1 year ago · 低活跃 | n,z |
| [zhaoziming/mgitcodecj](https://gitcode.com/zhaoziming/mgitcodecj) | — | zhaoziming | ★ 0 / Fork 3 | 1 month ago · 活跃 | m |
| [2501_93100976/基于仓颉的进程调度算法模拟实现-西南科技大学-张清秀-陈杨杰-黄雅莉-马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2501_93100976%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E8%BF%9B%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E5%BC%A0%E6%B8%85%E7%A7%80-%E9%99%88%E6%9D%A8%E6%9D%B0-%E9%BB%84%E9%9B%85%E8%8E%89-%E9%A9%AC%E7%AB%8B%E5%B9%B3) | 基于仓颉的进程调度算法模拟实现 | 2501_93100976 | ★ 0 / Fork 2 | 3 months ago · 活跃 | c,Cangjie |
| [Cangku/Jingui-Core](https://gitcode.com/Cangku/Jingui-Core) | JinguiSSL-core 是 JinguiSSL 系列的底层仓，涵盖【 对称密码：AES、ChaCha20、Poly1305、SM4； 摘要与派生：MD5、SHA-1、SHA-256/384/512、HMAC、HKDF； 非对称密码：RSA、ECC、Ed25519、X25519； 证书与合规：X.509、PEM/DER 解析、证书链验证、FIPS pr… | Cangku | ★ 0 / Fork 2 | 5 days ago · 活跃 | c,j,k |
| [cjgit_hfnu/CJSTL](https://gitcode.com/cjgit_hfnu/CJSTL) | 手写模仿stl的类 | cjgit_hfnu | ★ 0 / Fork 2 | 1 year ago · 低活跃 | h |
| [gcw_9qSmc9LX/yyj](https://gitcode.com/gcw_9qSmc9LX/yyj) | — | gcw_9qSmc9LX | ★ 0 / Fork 2 | 1 year ago · 低活跃 | g,s,y |
| [yeeee621112/porter2_stemmer](https://gitcode.com/yeeee621112/porter2_stemmer) | — | yeeee621112 | ★ 0 / Fork 2 | 1 year ago · 低活跃 | p,s,y |
| [zhangyin_gitcode/hellohilo](https://gitcode.com/zhangyin_gitcode/hellohilo) | 一个简易的HiLo算法实现。 | zhangyin_gitcode | ★ 0 / Fork 2 | 3 months ago · 活跃 | g,h,z |
| [2301_80108490/cangjie111](https://gitcode.com/2301_80108490/cangjie111) | — | 2301_80108490 | ★ 0 / Fork 1 | 1 year ago · 低活跃 | Cangjie |
| [BinaRoy/incremental_runtime](https://gitcode.com/BinaRoy/incremental_runtime) | — | BinaRoy | ★ 0 / Fork 1 | 7 months ago · 维护中 | b,r |
| [Cangjie-DataLoom/DataLoom](https://gitcode.com/Cangjie-DataLoom/DataLoom) | 基于哈夫曼树和ASE来对用户输入的字符串进行加密 | Cangjie-DataLoom | ★ 0 / Fork 1 | 1 month ago · 活跃 | Cangjie,d,l |
| [ccdme/gaosiqudong](https://gitcode.com/ccdme/gaosiqudong) | — | ccdme | ★ 0 / Fork 1 | 11 months ago · 维护中 | g |
| [chipichipi/cjgeohash](https://gitcode.com/chipichipi/cjgeohash) | — | chipichipi | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c |
| [cinyu/lisi](https://gitcode.com/cinyu/lisi) | 仓颉第三方的stdx，兼容native | cinyu | ★ 0 / Fork 1 | 1 day ago · 活跃 | c,l |
| [cjgit_hfnu/CJSTLv1](https://gitcode.com/cjgit_hfnu/CJSTLv1) | — | cjgit_hfnu | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c,h |
| [gcw_fWgqpmbY/Cangjie-Exampletwo](https://gitcode.com/gcw_fWgqpmbY/Cangjie-Exampletwo) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_fWgqpmbY | ★ 0 / Fork 1 | 8 months ago · 维护中 | Cangjie,e,f,g,w,y |
| [gcw_U31ARWoT/吉林大学-夏依旦-仓颉实现二叉树算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_U31ARWoT%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E5%A4%8F%E4%BE%9D%E6%97%A6-%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E4%BA%8C%E5%8F%89%E6%A0%91%E7%AE%97%E6%B3%95) | — | gcw_U31ARWoT | ★ 0 / Fork 1 | 6 months ago · 活跃 | e,g |
| [HFNU-Cangjie/HarmonyOS开发 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=HFNU-Cangjie%2FHarmonyOS%E5%BC%80%E5%8F%91) | 本项目用于收集鸿蒙开发项目 | HFNU-Cangjie | ★ 0 / Fork 1 | 8 months ago · 维护中 | Cangjie,h,o |
| [john1257/cangjie-tset](https://gitcode.com/john1257/cangjie-tset) | — | john1257 | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c,Cangjie,j,t |
| [kentzhu/test003](https://gitcode.com/kentzhu/test003) | — | kentzhu | ★ 0 / Fork 1 | 1 year ago · 低活跃 | k |
| [kirby/system_cida](https://gitcode.com/kirby/system_cida) | — | kirby | ★ 0 / Fork 1 | 4 months ago · 活跃 | k,s |
| [liruixin/git](https://gitcode.com/liruixin/git) | — | liruixin | ★ 0 / Fork 1 | 8 months ago · 维护中 | l |
| [ll85/harmony-008](https://gitcode.com/ll85/harmony-008) | — | ll85 | ★ 0 / Fork 1 | 8 months ago · 维护中 | h,l |
| [m0_73803195/hc](https://gitcode.com/m0_73803195/hc) | — | m0_73803195 | ★ 0 / Fork 1 | 1 year ago · 低活跃 | g,h,m |
| [moonlighthh/two](https://gitcode.com/moonlighthh/two) | — | moonlighthh | ★ 0 / Fork 1 | 8 months ago · 维护中 | m,t |
| [persisting/material_project](https://gitcode.com/persisting/material_project) | — | persisting | ★ 0 / Fork 1 | 9 days ago · 活跃 | m,p |
| [QYYQ666/Cangjie111](https://gitcode.com/QYYQ666/Cangjie111) | — | QYYQ666 | ★ 0 / Fork 1 | 8 months ago · 维护中 | c,Cangjie,q |
| [sym3/main](https://gitcode.com/sym3/main) | — | sym3 | ★ 0 / Fork 1 | 11 months ago · 维护中 | m,s |
| [weiliangliang123/HelloCangjie](https://gitcode.com/weiliangliang123/HelloCangjie) | — | weiliangliang123 | ★ 0 / Fork 1 | 1 month ago · 活跃 | c,h,w |
| [XiaoTian_cj/rule-gen](https://gitcode.com/XiaoTian_cj/rule-gen) | — | XiaoTian_cj | ★ 0 / Fork 1 | 3 months ago · 活跃 | g,r,t,x |
| [zhangyin_gitcode/effectively](https://gitcode.com/zhangyin_gitcode/effectively) | 鬼要来了 | zhangyin_gitcode | ★ 0 / Fork 1 | 3 months ago · 活跃 | e |
| [zhangyin_gitcode/meiwen_diary_a](https://gitcode.com/zhangyin_gitcode/meiwen_diary_a) | — | zhangyin_gitcode | ★ 0 / Fork 1 | 8 months ago · 维护中 | d,g,m,z |
| [zhangyin_gitcode/naivelogger_tea](https://gitcode.com/zhangyin_gitcode/naivelogger_tea) | naivelogger的tea适配。 | zhangyin_gitcode | ★ 0 / Fork 1 | 4 months ago · 活跃 | g,n,t,z |
| [仓颉·鸿蒙/aion-scheduler 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E4%BB%93%E9%A2%89%C2%B7%E9%B8%BF%E8%92%99%2Faion-scheduler) | — | 仓颉·鸿蒙 | ★ 0 / Fork 1 | 3 months ago · 活跃 | a,Cangjie,h,仓颉 |
| [仓颉·鸿蒙/voider 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E4%BB%93%E9%A2%89%C2%B7%E9%B8%BF%E8%92%99%2Fvoider) | voider protocol | 仓颉·鸿蒙 | ★ 0 / Fork 1 | 3 months ago · 活跃 | h,v,仓颉 |
| [刘邬小组/CMS 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%88%98%E9%82%AC%E5%B0%8F%E7%BB%84%2FCMS) | — | 刘邬小组 | ★ 0 / Fork 1 | 1 year ago · 低活跃 | c,l,w |
| [开源仓颉第三方开发者社区/ConstRandom 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2FConstRandom) | 提供编译期确定的随机数 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 1 | 2 months ago · 活跃 | c,Cangjie,o,r |
| [2202_75861782/E1_wjl308](https://gitcode.com/2202_75861782/E1_wjl308) | 仓颉语言仓库 | 2202_75861782 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [2301_76230122/GitDemo](https://gitcode.com/2301_76230122/GitDemo) | 一个Demo | 2301_76230122 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g |
| [2301_76230122/hamster_commander](https://gitcode.com/2301_76230122/hamster_commander) | — | 2301_76230122 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [2301_76240745/change](https://gitcode.com/2301_76240745/change) | — | 2301_76240745 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [2301_76679810/E61-gsh104](https://gitcode.com/2301_76679810/E61-gsh104) | — | 2301_76679810 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [2301_76679810/E62-gsh104](https://gitcode.com/2301_76679810/E62-gsh104) | — | 2301_76679810 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [2301_79351075/cangjie-ocr-numbers](https://gitcode.com/2301_79351075/cangjie-ocr-numbers) | cangjie复现项目： 光学字符识别(OCR) - 将由管道符、下划线和空格组成的字符网格识别为数字字符串 | 2301_79351075 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,n,o |
| [2301_79438736/基于仓颉语言的简单哈希算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_79438736%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E7%9A%84%E7%AE%80%E5%8D%95%E5%93%88%E5%B8%8C%E7%AE%97%E6%B3%95) | 基于仓颉语言的简单哈希算法 | 2301_79438736 | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,Cangjie |
| [2301_79600629/CangjieShell](https://gitcode.com/2301_79600629/CangjieShell) | — | 2301_79600629 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,s |
| [2301_79999887/OCR_Numbers](https://gitcode.com/2301_79999887/OCR_Numbers) | 仓颉编程语言 | 2301_79999887 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,o |
| [2301_80091553/pythagorean-triplet-cangjie](https://gitcode.com/2301_80091553/pythagorean-triplet-cangjie) | cangjie移植 | 2301_80091553 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t |
| [2301_80391741/cangjie-miniexpr](https://gitcode.com/2301_80391741/cangjie-miniexpr) | — | 2301_80391741 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,m |
| [2301_80418525/仓颉环形缓冲堆 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_80418525%2F%E4%BB%93%E9%A2%89%E7%8E%AF%E5%BD%A2%E7%BC%93%E5%86%B2%E5%A0%86) | — | 2301_80418525 | ★ 0 / Fork 0 | 30 days ago · 活跃 | c,仓颉 |
| [2301_80460648/cangjie_nfa_dfa_mindfa](https://gitcode.com/2301_80460648/cangjie_nfa_dfa_mindfa) | — | 2301_80460648 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie,d,m,n |
| [2301_80460648/grammar-analyzer-cangjie](https://gitcode.com/2301_80460648/grammar-analyzer-cangjie) | — | 2301_80460648 | ★ 0 / Fork 0 | 6 months ago · 活跃 | a |
| [2301_80776153/hamster_commander](https://gitcode.com/2301_80776153/hamster_commander) | — | 2301_80776153 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [2301_80906295/lab_cangjie](https://gitcode.com/2301_80906295/lab_cangjie) | — | 2301_80906295 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,l |
| [2301_81076948/个人阅读器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_81076948%2F%E4%B8%AA%E4%BA%BA%E9%98%85%E8%AF%BB%E5%99%A8) | just作业，所有文本仅用于测试 | 2301_81076948 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h |
| [2301_81786874/待办事项管理器-天津农学院-高天煜-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2301_81786874%2F%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E7%AE%A1%E7%90%86%E5%99%A8-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E9%AB%98%E5%A4%A9%E7%85%9C-%E4%BD%95%E7%8E%B2) | — | 2301_81786874 | ★ 0 / Fork 0 | 20 days ago · 活跃 | c,Cangjie,t |
| [2301_82068460/E1_gcl127](https://gitcode.com/2301_82068460/E1_gcl127) | — | 2301_82068460 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [2301_82068460/E2_gcl127](https://gitcode.com/2301_82068460/E2_gcl127) | — | 2301_82068460 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [2301_82068460/E3_gcl127](https://gitcode.com/2301_82068460/E3_gcl127) | — | 2301_82068460 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [2302_78047539/软件工程实践njust 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2302_78047539%2F%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%AE%9E%E8%B7%B5njust) | — | 2302_78047539 | ★ 0 / Fork 0 | 8 months ago · 维护中 | s |
| [2302_79303158/E2_gyf424](https://gitcode.com/2302_79303158/E2_gyf424) | — | 2302_79303158 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g |
| [2302_79303158/E3_gyf424](https://gitcode.com/2302_79303158/E3_gyf424) | — | 2302_79303158 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g |
| [2302_80257087/hc](https://gitcode.com/2302_80257087/hc) | — | 2302_80257087 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [2302_80368334/FileProcessingForCangJie](https://gitcode.com/2302_80368334/FileProcessingForCangJie) | — | 2302_80368334 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,j,p |
| [2302_80415092/基于仓颉的最长回文算法示例 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2302_80415092%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E7%AE%97%E6%B3%95%E7%A4%BA%E4%BE%8B) | — | 2302_80415092 | ★ 0 / Fork 0 | 9 months ago · 维护中 | d |
| [2302_81918214/仓颉程序设计 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2302_81918214%2F%E4%BB%93%E9%A2%89%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1) | 用于存储仓颉程序 | 2302_81918214 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie |
| [2303_78981444/CangJie云 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2303_78981444%2FCangJie%E4%BA%91) | — | 2303_78981444 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,j |
| [2401_82796943/cangjie_win_waveout](https://gitcode.com/2401_82796943/cangjie_win_waveout) | 使用WinAPI+PCM+WInAPI | 2401_82796943 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,w |
| [2401_82796943/cjtoeknizer_ML_trial](https://gitcode.com/2401_82796943/cjtoeknizer_ML_trial) | — | 2401_82796943 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,m |
| [2401_82796943/CS_Net_Lab3](https://gitcode.com/2401_82796943/CS_Net_Lab3) | 使用仓颉在TCP模拟二层交换机的转发机制 | 2401_82796943 | ★ 0 / Fork 0 | 4 months ago · 活跃 | l,n |
| [2401_82796943/CS_Net_Lab6](https://gitcode.com/2401_82796943/CS_Net_Lab6) | — | 2401_82796943 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,n |
| [2401_82991813/学生成绩统计-天津农学院-朱致若-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2401_82991813%2F%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%BB%9F%E8%AE%A1-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E6%9C%B1%E8%87%B4%E8%8B%A5-%E4%BD%95%E7%8E%B2) | — | 2401_82991813 | ★ 0 / Fork 0 | 28 days ago · 活跃 | s,t |
| [2401_83161252/demo1_1](https://gitcode.com/2401_83161252/demo1_1) | 写仓颉项目 | 2401_83161252 | ★ 0 / Fork 0 | 3 months ago · 活跃 | d |
| [2401_86989261/智能待办清单-集美大学-鄢菁一-罗方芳 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2401_86989261%2F%E6%99%BA%E8%83%BD%E5%BE%85%E5%8A%9E%E6%B8%85%E5%8D%95-%E9%9B%86%E7%BE%8E%E5%A4%A7%E5%AD%A6-%E9%84%A2%E8%8F%81%E4%B8%80-%E7%BD%97%E6%96%B9%E8%8A%B3) | 基于仓颉语言实现的控制台待办清单小项目，支持任务添加、查看、完成、删除和统计功能。 | 2401_86989261 | ★ 0 / Fork 0 | 30 days ago · 活跃 | j,l,s,t,y |
| [2401_87219212/yizhi](https://gitcode.com/2401_87219212/yizhi) | 简单加密解密 | 2401_87219212 | ★ 0 / Fork 0 | 30 days ago · 活跃 | y |
| [2401_87624598/cangjie_xidian](https://gitcode.com/2401_87624598/cangjie_xidian) | — | 2401_87624598 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [2401_88451611/cjgeopandas](https://gitcode.com/2401_88451611/cjgeopandas) | — | 2401_88451611 | ★ 0 / Fork 0 | 25 days ago · 活跃 | c |
| [2401_88487585/仓颉练习111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2401_88487585%2F%E4%BB%93%E9%A2%89%E7%BB%83%E4%B9%A0111) | 这是第一个项目 | 2401_88487585 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,仓颉 |
| [2402_87706246/templite](https://gitcode.com/2402_87706246/templite) | — | 2402_87706246 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [2403_87281602/todocangjie](https://gitcode.com/2403_87281602/todocangjie) | — | 2403_87281602 | ★ 0 / Fork 0 | 29 days ago · 活跃 | t |
| [2403_87688456/西南科技大学-案例2-基于生产消费者问题实现模拟-邓景曦-路响-肖荣芳-马立平老师 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2403_87688456%2F%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%A1%88%E4%BE%8B2-%E5%9F%BA%E4%BA%8E%E7%94%9F%E4%BA%A7%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98%E5%AE%9E%E7%8E%B0%E6%A8%A1%E6%8B%9F-%E9%82%93%E6%99%AF%E6%9B%A6-%E8%B7%AF%E5%93%8D-%E8%82%96%E8%8D%A3%E8%8A%B3-%E9%A9%AC%E7%AB%8B%E5%B9%B3%E8%80%81%E5%B8%88) | — | 2403_87688456 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,d |
| [2403_87688456/西南科技大学-案例3-基于仓颉的银行家算法实现模拟-路响-邓景曦-肖荣芳-马立平老师 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2403_87688456%2F%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%A1%88%E4%BE%8B3-%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E6%A8%A1%E6%8B%9F-%E8%B7%AF%E5%93%8D-%E9%82%93%E6%99%AF%E6%9B%A6-%E8%82%96%E8%8D%A3%E8%8A%B3-%E9%A9%AC%E7%AB%8B%E5%B9%B3%E8%80%81%E5%B8%88) | — | 2403_87688456 | ★ 0 / Fork 0 | 2 months ago · 活跃 | d |
| [2403_87688456/西南科技大学-案例4-基于仓颉的虚拟内存页面置换算法模拟实现-邓景曦-路响-肖荣芳-马立平老师 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2403_87688456%2F%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%A1%88%E4%BE%8B4-%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E9%82%93%E6%99%AF%E6%9B%A6-%E8%B7%AF%E5%93%8D-%E8%82%96%E8%8D%A3%E8%8A%B3-%E9%A9%AC%E7%AB%8B%E5%B9%B3%E8%80%81%E5%B8%88) | 基于仓颉语言实现的虚拟内存页面置换算法模拟，包含FIFO、LRU等算法的演示代码 | 2403_87688456 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,d |
| [2403_87959211/rac](https://gitcode.com/2403_87959211/rac) | — | 2403_87959211 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r |
| [2403_89531997/CangjieDemo-集美大学-王翊嘉-罗方芳 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2403_89531997%2FCangjieDemo-%E9%9B%86%E7%BE%8E%E5%A4%A7%E5%AD%A6-%E7%8E%8B%E7%BF%8A%E5%98%89-%E7%BD%97%E6%96%B9%E8%8A%B3) | — | 2403_89531997 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,d,j,l,w |
| [2501_90260269/alg_flow_wp](https://gitcode.com/2501_90260269/alg_flow_wp) | — | 2501_90260269 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,w |
| [2501_93332685/demo2](https://gitcode.com/2501_93332685/demo2) | — | 2501_93332685 | ★ 0 / Fork 0 | 7 months ago · 维护中 | d |
| [2503_93802495/申逸飞_cangjie 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2503_93802495%2F%E7%94%B3%E9%80%B8%E9%A3%9E_cangjie) | — | 2503_93802495 | ★ 0 / Fork 0 | 5 months ago · 活跃 | c,Cangjie |
| [2601_94850989/串的顺序和链式存储-鹤壁职业技术学院-耿雅坤-刘毅 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2601_94850989%2F%E4%B8%B2%E7%9A%84%E9%A1%BA%E5%BA%8F%E5%92%8C%E9%93%BE%E5%BC%8F%E5%AD%98%E5%82%A8-%E9%B9%A4%E5%A3%81%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2-%E8%80%BF%E9%9B%85%E5%9D%A4-%E5%88%98%E6%AF%85) | — | 2601_94850989 | ★ 0 / Fork 0 | 22 days ago · 活跃 | d |
| [2601_94850989/仓颉代码耿雅坤 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=2601_94850989%2F%E4%BB%93%E9%A2%89%E4%BB%A3%E7%A0%81%E8%80%BF%E9%9B%85%E5%9D%A4) | — | 2601_94850989 | ★ 0 / Fork 0 | 22 days ago · 活跃 | d |
| [a114514987/E1_wtx103](https://gitcode.com/a114514987/E1_wtx103) | — | a114514987 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [a19170897640/FingerSearch](https://gitcode.com/a19170897640/FingerSearch) | — | a19170897640 | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,f,s |
| [a2164624578/BookStore-cangjie](https://gitcode.com/a2164624578/BookStore-cangjie) | 将java移植为cangjie语言 原java代码地址： https://exercism.org/tracks/java/exercises/book-store/solutions/uzilan | a2164624578 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,b,s |
| [Aa1695001520/caixingb1](https://gitcode.com/Aa1695001520/caixingb1) | — | Aa1695001520 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c |
| [ab305/cangjie_ci_test](https://gitcode.com/ab305/cangjie_ci_test) | — | ab305 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,t |
| [ab305/cangjie-todo](https://gitcode.com/ab305/cangjie-todo) | — | ab305 | ★ 0 / Fork 0 | 17 days ago · 活跃 | c |
| [airuyi/fullstack_cangjie_v1](https://gitcode.com/airuyi/fullstack_cangjie_v1) | 仓颉编程语言全栈班第一季代码 | airuyi | ★ 0 / Fork 0 | 10 months ago · 维护中 | a,Cangjie,f,v |
| [Akie_bao/wangmuyuan](https://gitcode.com/Akie_bao/wangmuyuan) | 对开源项目cdangjie magic进行尝试性的使用 | Akie_bao | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,c,w |
| [aldiwave/cajngjie-static-analysis](https://gitcode.com/aldiwave/cajngjie-static-analysis) | — | aldiwave | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,s |
| [AllenChu/CalendarDemo](https://gitcode.com/AllenChu/CalendarDemo) | — | AllenChu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c,d |
| [AllenChu/SpanDemo](https://gitcode.com/AllenChu/SpanDemo) | — | AllenChu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,d,s |
| [Amour-emotion/E1-zhy301](https://gitcode.com/Amour-emotion/E1-zhy301) | 第一次仓颉作业 | Amour-emotion | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [Amour-emotion/E2-zhy223](https://gitcode.com/Amour-emotion/E2-zhy223) | — | Amour-emotion | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [Amour-emotion/E3-zhy301](https://gitcode.com/Amour-emotion/E3-zhy301) | — | Amour-emotion | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e |
| [anancds123/cangjie-arkts](https://gitcode.com/anancds123/cangjie-arkts) | — | anancds123 | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,c |
| [andymumu/IdCardUtil](https://gitcode.com/andymumu/IdCardUtil) | 公民身份号码校验及字段值提取 | andymumu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | i,u |
| [ANYE123/rec_all_cangjie](https://gitcode.com/ANYE123/rec_all_cangjie) | — | ANYE123 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,r |
| [Aperze/TodoAssistant](https://gitcode.com/Aperze/TodoAssistant) | — | Aperze | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,t |
| [Approach1999/ci-test](https://gitcode.com/Approach1999/ci-test) | — | Approach1999 | ★ 0 / Fork 0 | 27 days ago · 活跃 | a,c |
| [arxy/hc](https://gitcode.com/arxy/hc) | — | arxy | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,h |
| [asdaassad/cangjie_project](https://gitcode.com/asdaassad/cangjie_project) | 高级程序设计作业 | asdaassad | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,c,Cangjie,p |
| [ATheNight/E1_zry225](https://gitcode.com/ATheNight/E1_zry225) | — | ATheNight | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,n |
| [atreeof_wind/AutoApp](https://gitcode.com/atreeof_wind/AutoApp) | — | atreeof_wind | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,w |
| [awdasd22/Cangjie](https://gitcode.com/awdasd22/Cangjie) | — | awdasd22 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,d,m |
| [b_andrew/gists-public](https://gitcode.com/b_andrew/gists-public) | — | b_andrew | ★ 0 / Fork 0 | 8 days ago · 活跃 | a,b,p |
| [baiye0844/cangjie-test-lab](https://gitcode.com/baiye0844/cangjie-test-lab) | — | baiye0844 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,l,t |
| [Bayonet/hc](https://gitcode.com/Bayonet/hc) | — | Bayonet | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b |
| [bczygg/testproject](https://gitcode.com/bczygg/testproject) | — | bczygg | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,t |
| [bczygg/uncoveredlines](https://gitcode.com/bczygg/uncoveredlines) | — | bczygg | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,u |
| [bingo_wxp/TimeWheel](https://gitcode.com/bingo_wxp/TimeWheel) | TimeWheel是以netty中使用的时间轮架构思想创建单时间轮，进行定时任务 | bingo_wxp | ★ 0 / Fork 0 | 11 months ago · 维护中 | b,t,w |
| [birdyqi/cangjie](https://gitcode.com/birdyqi/cangjie) | 这是第一个项目 | birdyqi | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,c,Cangjie |
| [birdyqi/gongfang](https://gitcode.com/birdyqi/gongfang) | — | birdyqi | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,g |
| [BonZer0/IncrementalEngine](https://gitcode.com/BonZer0/IncrementalEngine) | — | BonZer0 | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,e,i,z |
| [BonZer0/Optics](https://gitcode.com/BonZer0/Optics) | — | BonZer0 | ★ 0 / Fork 0 | 9 months ago · 维护中 | b,z |
| [BT0/Cangjie-sampler](https://gitcode.com/BT0/Cangjie-sampler) | 可用于多项分布采样与概率计算，以及构建RPG魔法装备生成与伤害模拟系统。完整实现多项分布采样与PMF，含NaN边界处理，具备随机可复现性和对数伽马计算，支持装备生成与伤害分位数估算。【此简介由AI生成】 | BT0 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,c,Cangjie,s |
| [cai-zhaojie666/my-cangjie-project](https://gitcode.com/cai-zhaojie666/my-cangjie-project) | 基于仓颉语言创建计算机项目 集美大学 蔡钊杰 | cai-zhaojie666 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,p,z |
| [Caines/Compile](https://gitcode.com/Caines/Compile) | 使用仓颉语言实现词法分析、语法分析核心算法 | Caines | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [caizhao/sanitize-html-2.17.0](https://gitcode.com/caizhao/sanitize-html-2.17.0) | — | caizhao | ★ 0 / Fork 0 | 4 months ago · 活跃 | h,s |
| [cangjie_no_1/cjs_engin_pro](https://gitcode.com/cangjie_no_1/cjs_engin_pro) | 一个用ai 开发的 js引擎 ,现已流产 | cangjie_no_1 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,e,n,p |
| [cangjie_no_1/kaca_Base64](https://gitcode.com/cangjie_no_1/kaca_Base64) | kaca_Base64 | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | b,k,n |
| [cangjie_no_1/kaca_cookies](https://gitcode.com/cangjie_no_1/kaca_cookies) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | c,Cangjie,k,n |
| [cangjie_no_1/kaca_encodeURI](https://gitcode.com/cangjie_no_1/kaca_encodeURI) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | e,k,n,u |
| [cangjie_no_1/kaca_fetch](https://gitcode.com/cangjie_no_1/kaca_fetch) | kaca_fetch | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | f,k,n |
| [cangjie_no_1/kaca_IDLConv](https://gitcode.com/cangjie_no_1/kaca_IDLConv) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | Cangjie,i,k,n |
| [cangjie_no_1/kaca_IDNA](https://gitcode.com/cangjie_no_1/kaca_IDNA) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | i,k,n |
| [cangjie_no_1/kaca_linkedhash](https://gitcode.com/cangjie_no_1/kaca_linkedhash) | 重度参考 仓颉 std 的 hashmap ， 实现的 linkedhashmap 和 linkedhashset ，目的是为了对齐风格 ， | cangjie_no_1 | ★ 0 / Fork 0 | 3 months ago · 活跃 | k,l,n |
| [cangjie_no_1/kaca_pdf](https://gitcode.com/cangjie_no_1/kaca_pdf) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | Cangjie,k,n,p |
| [cangjie_no_1/kaca_RC4](https://gitcode.com/cangjie_no_1/kaca_RC4) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | k,n,r |
| [cangjie_no_1/kaca_urlpattern](https://gitcode.com/cangjie_no_1/kaca_urlpattern) | kaca_urlpattern | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | Cangjie,k,n,u |
| [cangjie_no_1/kaca_URLSearchParams](https://gitcode.com/cangjie_no_1/kaca_URLSearchParams) | — | cangjie_no_1 | ★ 0 / Fork 0 | 27 days ago · 活跃 | c,Cangjie,k,n,u |
| [cangjie_no_1/仓颉禁止关键词 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=cangjie_no_1%2F%E4%BB%93%E9%A2%89%E7%A6%81%E6%AD%A2%E5%85%B3%E9%94%AE%E8%AF%8D) | 在制作生成代码工具的时候 , 我们希望生成的代码 与 语言内置关键词 和内置类型 无冲突 本库收录了 仓颉公布的关键词 ,已经std.core 自带的内置类型 , 您在使用的时候 ,建议 进行去重 ,因为 关键词 包含一些基础类型 , 基础类型 和内置类型 有一些重合 , | cangjie_no_1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,k,n,u,仓颉 |
| [cangjie-clone/cangjieJSON](https://gitcode.com/cangjie-clone/cangjieJSON) | — | cangjie-clone | ★ 0 / Fork 0 | 10 months ago · 维护中 | j |
| [cangjie-script/php-extend](https://gitcode.com/cangjie-script/php-extend) | 把部分 php 函数使用仓颉重新实现，实现了cjp-language的导入入口 | cangjie-script | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,p,s |
| [CangjieLearning/CangjieDemo](https://gitcode.com/CangjieLearning/CangjieDemo) | — | CangjieLearning | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,d,l |
| [CangjieLearning/stdz](https://gitcode.com/CangjieLearning/stdz) | Cangjie 学习实践项目，未完成，未测试。 | CangjieLearning | ★ 0 / Fork 0 | 8 months ago · 维护中 | l,s |
| [Cangku/JinguiSSL-Bridge](https://gitcode.com/Cangku/JinguiSSL-Bridge) | — | Cangku | ★ 0 / Fork 0 | 25 days ago · 活跃 | b,j,k |
| [captain_zh/computer_interlocking](https://gitcode.com/captain_zh/computer_interlocking) | — | captain_zh | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,i,z |
| [captain_zh/win_lottery](https://gitcode.com/captain_zh/win_lottery) | — | captain_zh | ★ 0 / Fork 0 | 11 months ago · 维护中 | l,w,z |
| [captain_zh/调用星火大模型 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=captain_zh%2F%E8%B0%83%E7%94%A8%E6%98%9F%E7%81%AB%E5%A4%A7%E6%A8%A1%E5%9E%8B) | — | captain_zh | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,l,z |
| [ccnj09/CangjieCalendar](https://gitcode.com/ccnj09/CangjieCalendar) | — | ccnj09 | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie |
| [cgs50054202/mydemo](https://gitcode.com/cgs50054202/mydemo) | — | cgs50054202 | ★ 0 / Fork 0 | 3 months ago · 活跃 | m |
| [Chanbake/CangjieCountdownTimer仓颉倒数计时器_树人_曾煜雅 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Chanbake%2FCangjieCountdownTimer%E4%BB%93%E9%A2%89%E5%80%92%E6%95%B0%E8%AE%A1%E6%97%B6%E5%99%A8_%E6%A0%91%E4%BA%BA_%E6%9B%BE%E7%85%9C%E9%9B%85) | CangjieCountdownTimer仓颉倒数计时器_树人_曾煜雅 | Chanbake | ★ 0 / Fork 0 | 7 months ago · 维护中 | t |
| [changewam/贪吃蛇-西安电子科技大学-王睿哲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=changewam%2F%E8%B4%AA%E5%90%83%E8%9B%87-%E8%A5%BF%E5%AE%89%E7%94%B5%E5%AD%90%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E7%8E%8B%E7%9D%BF%E5%93%B2) | 仓颉语言实现贪吃蛇 | changewam | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [ChaosJohn/purecj](https://gitcode.com/ChaosJohn/purecj) | — | ChaosJohn | ★ 0 / Fork 0 | 2 months ago · 活跃 | j,p |
| [Chemxy/lemon](https://gitcode.com/Chemxy/lemon) | 简易的链路追踪 | Chemxy | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,l |
| [Chemxy/lemon_dapr](https://gitcode.com/Chemxy/lemon_dapr) | — | Chemxy | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,d,l |
| [Chemxy/lemon_ginger](https://gitcode.com/Chemxy/lemon_ginger) | — | Chemxy | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,g,l |
| [Chemxy/lemon_tea](https://gitcode.com/Chemxy/lemon_tea) | — | Chemxy | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,l,t |
| [Chemxy/medi_lab](https://gitcode.com/Chemxy/medi_lab) | — | Chemxy | ★ 0 / Fork 0 | 2 months ago · 活跃 | l,m |
| [cheng_yt/cangjie](https://gitcode.com/cheng_yt/cangjie) | 这是第一个仓颉项目 | cheng_yt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,y |
| [chenxxsuoyou/asd](https://gitcode.com/chenxxsuoyou/asd) | — | chenxxsuoyou | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a |
| [chenxxsuoyou/zzz2](https://gitcode.com/chenxxsuoyou/zzz2) | — | chenxxsuoyou | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [chese123/西南科技大学-案例2基于仓颉的生产者-消费者问题-刘泽宇-陈婉玲-马立平老师 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=chese123%2F%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%A1%88%E4%BE%8B2%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E7%94%9F%E4%BA%A7%E8%80%85-%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98-%E5%88%98%E6%B3%BD%E5%AE%87-%E9%99%88%E5%A9%89%E7%8E%B2-%E9%A9%AC%E7%AB%8B%E5%B9%B3%E8%80%81%E5%B8%88) | — | chese123 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c |
| [cinyu/easyTODO-core](https://gitcode.com/cinyu/easyTODO-core) | — | cinyu | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,e,t |
| [cinyu/FoodCj](https://gitcode.com/cinyu/FoodCj) | 纯仓颉实现的https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-food-menu-app-demo-v1-0000002300530042 | cinyu | ★ 0 / Fork 0 | 10 months ago · 维护中 | f |
| [cinyu/ignite-benchmark](https://gitcode.com/cinyu/ignite-benchmark) | — | cinyu | ★ 0 / Fork 0 | 4 months ago · 活跃 | b,i |
| [cjmp-windows/cangjie_runtime](https://gitcode.com/cjmp-windows/cangjie_runtime) | 仓颉运行时 - Windows交叉编译补丁 | cjmp-windows | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,r,w |
| [cjw63651560/ComplexNumber](https://gitcode.com/cjw63651560/ComplexNumber) | 一个高效的复数运算实现，支持基本的复数运算和数学函数计算。 | cjw63651560 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,n |
| [Codesomething/StackMachine](https://gitcode.com/Codesomething/StackMachine) | — | Codesomething | ★ 0 / Fork 0 | 6 months ago · 活跃 | m,s |
| [copur/ignite-middleware-brotli](https://gitcode.com/copur/ignite-middleware-brotli) | — | copur | ★ 0 / Fork 0 | 3 months ago · 活跃 | b,c,i,m |
| [cqcya/QuickStartCJ](https://gitcode.com/cqcya/QuickStartCJ) | HarmonyOS应用开发快速入门项目-QuickStart的仓颉版 | cqcya | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s |
| [crazeh/CangjieHttpTest](https://gitcode.com/crazeh/CangjieHttpTest) | — | crazeh | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,g,h,t |
| [CSDH666/CangjieProject](https://gitcode.com/CSDH666/CangjieProject) | 仓颉语言项目 | CSDH666 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,p |
| [CSDH666/E1_ZSK303](https://gitcode.com/CSDH666/E1_ZSK303) | 仓颉 | CSDH666 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [cssshk/hc_dome](https://gitcode.com/cssshk/hc_dome) | — | cssshk | ★ 0 / Fork 0 | 9 months ago · 维护中 | h |
| [ctjzhl/game2048](https://gitcode.com/ctjzhl/game2048) | — | ctjzhl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [ctjzhl/TankWar](https://gitcode.com/ctjzhl/TankWar) | — | ctjzhl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | t,w |
| [cwc0000/my_frist_project_gitcode](https://gitcode.com/cwc0000/my_frist_project_gitcode) | — | cwc0000 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,p |
| [cwc0000/my_rac](https://gitcode.com/cwc0000/my_rac) | — | cwc0000 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,r |
| [cwc0000/rac_61](https://gitcode.com/cwc0000/rac_61) | — | cwc0000 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r |
| [czj18069891265/cj4tsf](https://gitcode.com/czj18069891265/cj4tsf) | — | czj18069891265 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c |
| [d_boulytchev/Cangjie-Lama](https://gitcode.com/d_boulytchev/Cangjie-Lama) | A deep embedding of a Lama-like language into Cangjie | d_boulytchev | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,c,Cangjie,l |
| [Dacec/data_model](https://gitcode.com/Dacec/data_model) | data_model包提供序列化和反序列化的能力 | Dacec | ★ 0 / Fork 0 | 9 months ago · 维护中 | d,m |
| [daisukiEREN/cangjie-test](https://gitcode.com/daisukiEREN/cangjie-test) | — | daisukiEREN | ★ 0 / Fork 0 | 28 days ago · 活跃 | c,Cangjie,d,e,t |
| [daqingshu/acojjo](https://gitcode.com/daqingshu/acojjo) | — | daqingshu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,d |
| [daqingshu/meta_item](https://gitcode.com/daqingshu/meta_item) | — | daqingshu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,i,m |
| [daqingshu/syncpool](https://gitcode.com/daqingshu/syncpool) | — | daqingshu | ★ 0 / Fork 0 | 2 months ago · 活跃 | d,s |
| [DCloud/test4050-harmony-cangjie](https://gitcode.com/DCloud/test4050-harmony-cangjie) | — | DCloud | ★ 0 / Fork 0 | 7 months ago · 维护中 | Cangjie,d,h,t |
| [de17/Cangjie](https://gitcode.com/de17/Cangjie) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,d |
| [de17/E2_DS106](https://gitcode.com/de17/E2_DS106) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [de17/E3_DS106](https://gitcode.com/de17/E3_DS106) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [de17/E4_DS106](https://gitcode.com/de17/E4_DS106) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [de17/E5_DS106](https://gitcode.com/de17/E5_DS106) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [de17/E6_DS106](https://gitcode.com/de17/E6_DS106) | — | de17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [ding_hong_4/annotation](https://gitcode.com/ding_hong_4/annotation) | — | ding_hong_4 | ★ 0 / Fork 0 | 9 months ago · 维护中 | a,h |
| [Doggy666/cangjie-fushu-zxt](https://gitcode.com/Doggy666/cangjie-fushu-zxt) | 基于cangjie语言实现的复数基本运算 | Doggy666 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,f,z |
| [dtg233/凯撒密码-cangjie语言实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=dtg233%2F%E5%87%AF%E6%92%92%E5%AF%86%E7%A0%81-cangjie%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0) | 利用仓颉语言实现凯撒密码的加密解密 | dtg233 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d |
| [duanxs/learnCangjieBase](https://gitcode.com/duanxs/learnCangjieBase) | — | duanxs | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l |
| [dxt2003/unicode-width](https://gitcode.com/dxt2003/unicode-width) | — | dxt2003 | ★ 0 / Fork 0 | 1 day ago · 活跃 | d,u |
| [Eclipse1220/hamster_commander](https://gitcode.com/Eclipse1220/hamster_commander) | — | Eclipse1220 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,r |
| [Eclipse1220/hc](https://gitcode.com/Eclipse1220/hc) | — | Eclipse1220 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,r |
| [EINath/cangjielx](https://gitcode.com/EINath/cangjielx) | — | EINath | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,e |
| [EMROF/CangjieStdxCompressTar](https://gitcode.com/EMROF/CangjieStdxCompressTar) | — | EMROF | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,Cangjie,e,s,t |
| [Epochkkkk/test](https://gitcode.com/Epochkkkk/test) | — | Epochkkkk | ★ 0 / Fork 0 | 8 months ago · 维护中 | e,t |
| [ExtLyn/Eva](https://gitcode.com/ExtLyn/Eva) | Cangjie 语言开发的一个支持多数据类型的表达式演算器 | ExtLyn | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [f42e278/waterflow](https://gitcode.com/f42e278/waterflow) | — | f42e278 | ★ 0 / Fork 0 | 7 months ago · 维护中 | e,f,w |
| [Fan666888999/cangjie](https://gitcode.com/Fan666888999/cangjie) | 这是我的第一个仓颉项目 | Fan666888999 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,f |
| [FateRain/spincj](https://gitcode.com/FateRain/spincj) | 💻 终端加载旋转进度显示~ | FateRain | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,r |
| [fengyue--111/吉林大学-李斌-广度优先 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=fengyue--111%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E6%9D%8E%E6%96%8C-%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88) | — | fengyue--111 | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,g,l,u |
| [fgbmkld/first](https://gitcode.com/fgbmkld/first) | — | fgbmkld | ★ 0 / Fork 0 | 2 months ago · 活跃 | f |
| [fhwu/rec](https://gitcode.com/fhwu/rec) | — | fhwu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,r |
| [FlareAP/imgen](https://gitcode.com/FlareAP/imgen) | — | FlareAP | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,f,i |
| [flippedx/uuid](https://gitcode.com/flippedx/uuid) | UUID（通用唯一标识符）,支持v1、v3、v4、v5、v6、v7 | flippedx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,u |
| [fly_c_p/test](https://gitcode.com/fly_c_p/test) | — | fly_c_p | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,f,p,t |
| [flycloud162/CangjieStudy20260429](https://gitcode.com/flycloud162/CangjieStudy20260429) | 仓颉编程语言学习 | flycloud162 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,f |
| [freeol/CangjiePlay](https://gitcode.com/freeol/CangjiePlay) | 仓颉语言学习 | freeol | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,f,p |
| [FriskKA/cangjiebugtest](https://gitcode.com/FriskKA/cangjiebugtest) | — | FriskKA | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,f,k |
| [FrontclvSong/cjquicknote](https://gitcode.com/FrontclvSong/cjquicknote) | — | FrontclvSong | ★ 0 / Fork 0 | 9 months ago · 维护中 | f,s |
| [FrontclvSong/cjtypevar](https://gitcode.com/FrontclvSong/cjtypevar) | — | FrontclvSong | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,f,s |
| [FrontclvSong/magic-common-utils](https://gitcode.com/FrontclvSong/magic-common-utils) | — | FrontclvSong | ★ 0 / Fork 0 | 9 months ago · 维护中 | f,m,s,u |
| [g0ubu1i/cangjie_code](https://gitcode.com/g0ubu1i/cangjie_code) | — | g0ubu1i | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,g,i |
| [g202320164233/BSTsearch](https://gitcode.com/g202320164233/BSTsearch) | — | g202320164233 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,g |
| [g21ggg/DagobaLite-Cangjie](https://gitcode.com/g21ggg/DagobaLite-Cangjie) | — | g21ggg | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,g,l |
| [GaseousLand/NFAtoDFA](https://gitcode.com/GaseousLand/NFAtoDFA) | 将正规表达式转为NFA，再将NFA转为DFA，最后将DFA最小化 | GaseousLand | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,l,n |
| [gcw_1azcASHm/hamsterCommander](https://gitcode.com/gcw_1azcASHm/hamsterCommander) | — | gcw_1azcASHm | ★ 0 / Fork 0 | 9 months ago · 维护中 | h |
| [gcw_1fh9BN4f/1](https://gitcode.com/gcw_1fh9BN4f/1) | — | gcw_1fh9BN4f | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,g,t |
| [gcw_2YqTb9Ma/cjweb](https://gitcode.com/gcw_2YqTb9Ma/cjweb) | — | gcw_2YqTb9Ma | ★ 0 / Fork 0 | 30 days ago · 活跃 | g |
| [gcw_3dFedUev/E62_lxt317](https://gitcode.com/gcw_3dFedUev/E62_lxt317) | — | gcw_3dFedUev | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,g,u |
| [gcw_5YB8ts9Q/T_fhy_530](https://gitcode.com/gcw_5YB8ts9Q/T_fhy_530) | — | gcw_5YB8ts9Q | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,g,q,t |
| [gcw_9iaLt35d/pedometer](https://gitcode.com/gcw_9iaLt35d/pedometer) | — | gcw_9iaLt35d | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,p |
| [gcw_A7ZCsob6/FolwShop_CangJie](https://gitcode.com/gcw_A7ZCsob6/FolwShop_CangJie) | Flow Shop 调度求解器 | gcw_A7ZCsob6 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,f,g,j,s |
| [gcw_Ayb6kzLT/BCang](https://gitcode.com/gcw_Ayb6kzLT/BCang) | 这是一个项目 | gcw_Ayb6kzLT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,b,l |
| [gcw_B1amJYUB/z_pipeline](https://gitcode.com/gcw_B1amJYUB/z_pipeline) | — | gcw_B1amJYUB | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,g,j,p,z |
| [gcw_B1t33VRm/mdurl](https://gitcode.com/gcw_B1t33VRm/mdurl) | — | gcw_B1t33VRm | ★ 0 / Fork 0 | 20 days ago · 活跃 | b,g,m,t |
| [gcw_B1t33VRm/titlebar](https://gitcode.com/gcw_B1t33VRm/titlebar) | — | gcw_B1t33VRm | ★ 0 / Fork 0 | 20 days ago · 活跃 | b,g,t |
| [gcw_B1t33VRm/url_parse](https://gitcode.com/gcw_B1t33VRm/url_parse) | — | gcw_B1t33VRm | ★ 0 / Fork 0 | 20 days ago · 活跃 | b,g,p,t,u |
| [gcw_bF90NPco/E3_wzp115](https://gitcode.com/gcw_bF90NPco/E3_wzp115) | — | gcw_bF90NPco | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,g,w |
| [gcw_dixpCF8P/E1_zjr125](https://gitcode.com/gcw_dixpCF8P/E1_zjr125) | — | gcw_dixpCF8P | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,p |
| [gcw_fWgqpmbY/Cangjie-Examplesone](https://gitcode.com/gcw_fWgqpmbY/Cangjie-Examplesone) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_fWgqpmbY | ★ 0 / Fork 0 | 8 months ago · 维护中 | e,f,g,w,y |
| [gcw_GhKayeTQ/SPT](https://gitcode.com/gcw_GhKayeTQ/SPT) | — | gcw_GhKayeTQ | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,k,s |
| [gcw_gY8E0HVY/Cangjie0318](https://gitcode.com/gcw_gY8E0HVY/Cangjie0318) | — | gcw_gY8E0HVY | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g,y |
| [gcw_IMTQtqwh/Memo](https://gitcode.com/gcw_IMTQtqwh/Memo) | — | gcw_IMTQtqwh | ★ 0 / Fork 0 | 1 year ago · 低活跃 | i,m |
| [gcw_IyOMgtiy/hi-cangjie](https://gitcode.com/gcw_IyOMgtiy/hi-cangjie) | — | gcw_IyOMgtiy | ★ 0 / Fork 0 | 4 months ago · 活跃 | Cangjie,g,h,i,o |
| [gcw_j3Aien55/E3_YZX640](https://gitcode.com/gcw_j3Aien55/E3_YZX640) | — | gcw_j3Aien55 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,j |
| [gcw_jpHfD6gb/ghg](https://gitcode.com/gcw_jpHfD6gb/ghg) | — | gcw_jpHfD6gb | ★ 0 / Fork 0 | 19 hours ago · 活跃 | d,g,h |
| [gcw_kCJJQwqd/hamsterCommander](https://gitcode.com/gcw_kCJJQwqd/hamsterCommander) | — | gcw_kCJJQwqd | ★ 0 / Fork 0 | 8 months ago · 维护中 | g,h,k |
| [gcw_kCLHceEK/天津农学院-张怡婷-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_kCLHceEK%2F%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E5%BC%A0%E6%80%A1%E5%A9%B7-%E4%BD%95%E7%8E%B2) | 作业 | gcw_kCLHceEK | ★ 0 / Fork 0 | 21 days ago · 活跃 | c,d,e,g,k |
| [gcw_KL9G7Y6G/ComplexNumber](https://gitcode.com/gcw_KL9G7Y6G/ComplexNumber) | — | gcw_KL9G7Y6G | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,g,k,n,y |
| [gcw_klUZtMlZ/Dijkstra](https://gitcode.com/gcw_klUZtMlZ/Dijkstra) | Dijkstra 算法实现 | gcw_klUZtMlZ | ★ 0 / Fork 0 | 6 months ago · 活跃 | d,k,m,z |
| [gcw_LeNAa0sn/gomoku-cangjie](https://gitcode.com/gcw_LeNAa0sn/gomoku-cangjie) | 可用于体验终端五子棋双人对战，支持15×15棋盘，黑方先手，横、竖、对角线连五获胜。具备终端渲染、落子校验、四向判胜及平局检测功能，单文件无依赖，代码注释详尽。 | gcw_LeNAa0sn | ★ 0 / Fork 0 | 10 days ago · 活跃 | Cangjie,g,l,n |
| [gcw_lfUn3FNk/仓颉期末作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_lfUn3FNk%2F%E4%BB%93%E9%A2%89%E6%9C%9F%E6%9C%AB%E4%BD%9C%E4%B8%9A) | 1 | gcw_lfUn3FNk | ★ 0 / Fork 0 | 28 days ago · 活跃 | g,l,u |
| [gcw_mE43ICHT/焦婉婷的作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_mE43ICHT%2F%E7%84%A6%E5%A9%89%E5%A9%B7%E7%9A%84%E4%BD%9C%E4%B8%9A) | — | gcw_mE43ICHT | ★ 0 / Fork 0 | 21 days ago · 活跃 | e,h,j,m |
| [gcw_NHYk66ND/最小直径生成树 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_NHYk66ND%2F%E6%9C%80%E5%B0%8F%E7%9B%B4%E5%BE%84%E7%94%9F%E6%88%90%E6%A0%91) | — | gcw_NHYk66ND | ★ 0 / Fork 0 | 2 months ago · 活跃 | d,m,n,s,t |
| [gcw_O8AJno2M/基于仓颉的生产者-消费者问题模拟实现-何毅-张晗阳-刘雨夏-马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_O8AJno2M%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E7%94%9F%E4%BA%A7%E8%80%85-%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E4%BD%95%E6%AF%85-%E5%BC%A0%E6%99%97%E9%98%B3-%E5%88%98%E9%9B%A8%E5%A4%8F-%E9%A9%AC%E7%AB%8B%E5%B9%B3) | 基于仓颉的生产者-消费者问题模拟实现 | gcw_O8AJno2M | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,d,m,o,s |
| [gcw_OHhL2fOj/正则表达式 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_OHhL2fOj%2F%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F) | — | gcw_OHhL2fOj | ★ 0 / Fork 0 | 2 months ago · 活跃 | g,l,o,z |
| [gcw_OMeb4CEF/simple_cipher](https://gitcode.com/gcw_OMeb4CEF/simple_cipher) | — | gcw_OMeb4CEF | ★ 0 / Fork 0 | 1 month ago · 活跃 | o,s |
| [gcw_OyZ8dT6l/CangJie](https://gitcode.com/gcw_OyZ8dT6l/CangJie) | — | gcw_OyZ8dT6l | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,g,j,l,o,t,z |
| [gcw_QUs3K4vZ/啃不完的麻辣兔头 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_QUs3K4vZ%2F%E5%95%83%E4%B8%8D%E5%AE%8C%E7%9A%84%E9%BA%BB%E8%BE%A3%E5%85%94%E5%A4%B4) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | gcw_QUs3K4vZ | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,k,q |
| [gcw_QwQTezDl/complex-cangjie](https://gitcode.com/gcw_QwQTezDl/complex-cangjie) | — | gcw_QwQTezDl | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,g,q |
| [gcw_QyKaX2B9/ComplexNumbers](https://gitcode.com/gcw_QyKaX2B9/ComplexNumbers) | 实现复数的一些运算 | gcw_QyKaX2B9 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,c,g,k,n,q,x |
| [gcw_rDJgLH3v/simpleinterpreter](https://gitcode.com/gcw_rDJgLH3v/simpleinterpreter) | SimpleInterpreter: Python to Cangjie port from 500lines simplest_interpreter.py | gcw_rDJgLH3v | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,l,r,v |
| [gcw_RG4lIFnE/简易联系人管理_浙江树人学院_郑士瑞 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_RG4lIFnE%2F%E7%AE%80%E6%98%93%E8%81%94%E7%B3%BB%E4%BA%BA%E7%AE%A1%E7%90%86_%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2_%E9%83%91%E5%A3%AB%E7%91%9E) | — | gcw_RG4lIFnE | ★ 0 / Fork 0 | 7 months ago · 维护中 | e,l,r |
| [gcw_TIniZAZV/信息论编码示例-宿迁学院-嵇沁园-贾银洁 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_TIniZAZV%2F%E4%BF%A1%E6%81%AF%E8%AE%BA%E7%BC%96%E7%A0%81%E7%A4%BA%E4%BE%8B-%E5%AE%BF%E8%BF%81%E5%AD%A6%E9%99%A2-%E5%B5%87%E6%B2%81%E5%9B%AD-%E8%B4%BE%E9%93%B6%E6%B4%81) | — | gcw_TIniZAZV | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,t |
| [gcw_UI1RPYeZ/cangjie_cicd_test](https://gitcode.com/gcw_UI1RPYeZ/cangjie_cicd_test) | — | gcw_UI1RPYeZ | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,g,t,u |
| [gcw_W4PdAW4O/仓颉移植 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_W4PdAW4O%2F%E4%BB%93%E9%A2%89%E7%A7%BB%E6%A4%8D) | — | gcw_W4PdAW4O | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,c,Cangjie,g,o,w |
| [gcw_XPoy7A6N/BankersAlgorithm](https://gitcode.com/gcw_XPoy7A6N/BankersAlgorithm) | — | gcw_XPoy7A6N | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,b,n |
| [gcw_xxUphqEc/E3_ljl239](https://gitcode.com/gcw_xxUphqEc/E3_ljl239) | — | gcw_xxUphqEc | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,l,u,x |
| [gcw_ZBxgQKtO/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_ZBxgQKtO%2F%E4%BB%93%E9%A2%89) | — | gcw_ZBxgQKtO | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,g,o,q,z,仓颉 |
| [gcw_ZBxgQKtO/仓颉暴打李帅 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_ZBxgQKtO%2F%E4%BB%93%E9%A2%89%E6%9A%B4%E6%89%93%E6%9D%8E%E5%B8%85) | — | gcw_ZBxgQKtO | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,g,o,q,z,仓颉 |
| [gcw_zGKIA328/吉林大学-陈庆雯-仓颉实现并归排序算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_zGKIA328%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E9%99%88%E5%BA%86%E9%9B%AF-%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E5%B9%B6%E5%BD%92%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95) | — | gcw_zGKIA328 | ★ 0 / Fork 0 | 6 months ago · 活跃 | g,m,s,z |
| [gcw_ZkX4mPmh/povl](https://gitcode.com/gcw_ZkX4mPmh/povl) | — | gcw_ZkX4mPmh | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,p,x |
| [gcw_ZQf72kI3/吉林大学-丁露-仓颉实现Dijkstra最短路径算法实现实例 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gcw_ZQf72kI3%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E4%B8%81%E9%9C%B2-%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0Dijkstra%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E5%AE%9E%E4%BE%8B) | 基于仓颉实现Dijkstra最短路径算法实现实例，手动添加更改实例 | gcw_ZQf72kI3 | ★ 0 / Fork 0 | 7 months ago · 维护中 | d,g,i |
| [ghbcxdf/高级程序设计cangjie 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ghbcxdf%2F%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1cangjie) | 这是管一超的高级程序设计的cangjie代码 | ghbcxdf | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie |
| [Gloomysunny/InterCeptor](https://gitcode.com/Gloomysunny/InterCeptor) | — | Gloomysunny | ★ 0 / Fork 0 | 8 months ago · 维护中 | g,i |
| [glue502/cjsh](https://gitcode.com/glue502/cjsh) | — | glue502 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,g |
| [gmyy00/RecAll_cangjie](https://gitcode.com/gmyy00/RecAll_cangjie) | 仓颉云原生 - 东北大学张引 | gmyy00 | ★ 0 / Fork 0 | 7 months ago · 维护中 | a,Cangjie,r |
| [goukun/update_cjut](https://gitcode.com/goukun/update_cjut) | 更新cjut到黄区 | goukun | ★ 0 / Fork 0 | 4 months ago · 活跃 | u |
| [gsyh/仓颉实现的推箱子 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=gsyh%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%8E%A8%E7%AE%B1%E5%AD%90) | — | gsyh | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,d,s,t,x |
| [guyongzhe/E2_zxs402](https://gitcode.com/guyongzhe/E2_zxs402) | — | guyongzhe | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,z |
| [h-s-s/humster_commander](https://gitcode.com/h-s-s/humster_commander) | — | h-s-s | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,s |
| [HakureiReimuGensouky/lingo-master-cangjie](https://gitcode.com/HakureiReimuGensouky/lingo-master-cangjie) | — | HakureiReimuGensouky | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,g,l,r |
| [HakureiReimuGensouky/recall_cangjie](https://gitcode.com/HakureiReimuGensouky/recall_cangjie) | — | HakureiReimuGensouky | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,g,h,r |
| [HCJ0119/run_test](https://gitcode.com/HCJ0119/run_test) | — | HCJ0119 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,r,t |
| [hevienz/cangjie_libbpf](https://gitcode.com/hevienz/cangjie_libbpf) | cangjie libbpf bindings | hevienz | ★ 0 / Fork 0 | 4 months ago · 活跃 | h,l |
| [HFNU-Cangjie/猜数字 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=HFNU-Cangjie%2F%E7%8C%9C%E6%95%B0%E5%AD%97) | — | HFNU-Cangjie | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h |
| [hhdhqb/ComplexNumber_cangjie](https://gitcode.com/hhdhqb/ComplexNumber_cangjie) | 使用cangjie语言实现https://exercism.org/tracks/java/exercises/complex-numbers上的编程题 | hhdhqb | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,h,n |
| [hiext/RoaringBitmapcj](https://gitcode.com/hiext/RoaringBitmapcj) | bitmap | hiext | ★ 0 / Fork 0 | 9 months ago · 维护中 | b,h,r |
| [hjbfhfg/快速幂分治 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=hjbfhfg%2F%E5%BF%AB%E9%80%9F%E5%B9%82%E5%88%86%E6%B2%BB) | — | hjbfhfg | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,h |
| [hjbfhfg/快速幂分治1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=hjbfhfg%2F%E5%BF%AB%E9%80%9F%E5%B9%82%E5%88%86%E6%B2%BB1) | — | hjbfhfg | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,h |
| [Hjj12312/1](https://gitcode.com/Hjj12312/1) | — | Hjj12312 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [hongyu-Jin/仓颉语言实现基于前序与中序遍历序列的二叉树重建算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=hongyu-Jin%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91%E9%87%8D%E5%BB%BA%E7%AE%97%E6%B3%95) | 本项目使用仓颉语言实现了基于前序和中序遍历序列的二叉树重建算法 | hongyu-Jin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,h,j,仓颉 |
| [hsjdh23123/问答程序浙江树人学院黄佳浩 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=hsjdh23123%2F%E9%97%AE%E7%AD%94%E7%A8%8B%E5%BA%8F%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2%E9%BB%84%E4%BD%B3%E6%B5%A9) | — | hsjdh23123 | ★ 0 / Fork 0 | 7 months ago · 维护中 | h,w |
| [Huangjinbin_gitcode/HamsterCommander](https://gitcode.com/Huangjinbin_gitcode/HamsterCommander) | — | Huangjinbin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,h |
| [Huangjinbin_gitcode/hc](https://gitcode.com/Huangjinbin_gitcode/hc) | — | Huangjinbin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [Huangjinbin_gitcode/Todo_List](https://gitcode.com/Huangjinbin_gitcode/Todo_List) | — | Huangjinbin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,h,l,t |
| [huhu21/hc](https://gitcode.com/huhu21/hc) | — | huhu21 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [HuKeping/rbtree](https://gitcode.com/HuKeping/rbtree) | This is an implementation of Red-Black tree written by Cangjie which does `not` support duplicate keys. | HuKeping | ★ 0 / Fork 0 | 10 months ago · 维护中 | h,k,r |
| [hurpter/hamsterDemo](https://gitcode.com/hurpter/hamsterDemo) | — | hurpter | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h |
| [HurtinLuis/image-filters](https://gitcode.com/HurtinLuis/image-filters) | — | HurtinLuis | ★ 0 / Fork 0 | 28 days ago · 活跃 | f,h,i,l |
| [huxiao10/submit.cangjie](https://gitcode.com/huxiao10/submit.cangjie) | — | huxiao10 | ★ 0 / Fork 0 | 1 month ago · 活跃 | h,s |
| [Hyc_hyc/cangjie](https://gitcode.com/Hyc_hyc/cangjie) | 这是第一个仓颉 | Hyc_hyc | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,h |
| [hyswasd/cangjie](https://gitcode.com/hyswasd/cangjie) | 这是高级程序设计的作业 | hyswasd | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,h |
| [hzqd/pl](https://gitcode.com/hzqd/pl) | PkrLog - 扑克 + 日志（斗地主卡牌记录工具） | hzqd | ★ 0 / Fork 0 | 11 months ago · 维护中 | h,p |
| [if_one/bookstore](https://gitcode.com/if_one/bookstore) | — | if_one | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,o |
| [IgniteKit/WebAuthn](https://gitcode.com/IgniteKit/WebAuthn) | — | IgniteKit | ★ 0 / Fork 0 | 3 months ago · 活跃 | a,i,k,w |
| [Ilnur_ha/FuncLanguage](https://gitcode.com/Ilnur_ha/FuncLanguage) | Toy LISP-like language. Example project for Cangjie-DSLKit tree visitor extension | Ilnur_ha | ★ 0 / Fork 0 | 17 days ago · 活跃 | f,h,i,l |
| [imnsugar/sampler](https://gitcode.com/imnsugar/sampler) | — | imnsugar | ★ 0 / Fork 0 | 1 year ago · 低活跃 | i,s |
| [Inactionware/uapi.cj](https://gitcode.com/Inactionware/uapi.cj) | — | Inactionware | ★ 0 / Fork 0 | 1 month ago · 活跃 | i |
| [islet_gitcode/hamster_commander](https://gitcode.com/islet_gitcode/hamster_commander) | — | islet_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | g,h,i |
| [ixyos/mae-code](https://gitcode.com/ixyos/mae-code) | — | ixyos | ★ 0 / Fork 0 | 1 month ago · 活跃 | i,m |
| [iyangt8/Liyangt](https://gitcode.com/iyangt8/Liyangt) | 新的代码仓 | iyangt8 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | i,l |
| [jacknqy/Cangjie_Deadlock_Detector](https://gitcode.com/jacknqy/Cangjie_Deadlock_Detector) | — | jacknqy | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,d |
| [JasmineZhu/android-hello-world](https://gitcode.com/JasmineZhu/android-hello-world) | — | JasmineZhu | ★ 0 / Fork 0 | 3 months ago · 活跃 | a,h,j,w,z |
| [Javeyzzz/counter](https://gitcode.com/Javeyzzz/counter) | 仓颉counter | Javeyzzz | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,j |
| [jerome_tan/cangjieJSON](https://gitcode.com/jerome_tan/cangjieJSON) | — | jerome_tan | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,Cangjie,t |
| [jeromelsj/cangjie](https://gitcode.com/jeromelsj/cangjie) | 这是我第一个仓颉项目 | jeromelsj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j |
| [jeromelsj/MyGame2048](https://gitcode.com/jeromelsj/MyGame2048) | MyGame2048 | jeromelsj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,j,m |
| [jghbb/最大子数组和 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=jghbb%2F%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C) | — | jghbb | ★ 0 / Fork 0 | 2 months ago · 活跃 | j,k |
| [jiangjiale2025/cangjie_translate](https://gitcode.com/jiangjiale2025/cangjie_translate) | — | jiangjiale2025 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,j,t |
| [jiangjianhong/cangjie](https://gitcode.com/jiangjianhong/cangjie) | — | jiangjianhong | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,j |
| [JiangQixiang/hamster_commander](https://gitcode.com/JiangQixiang/hamster_commander) | for cangjie class | JiangQixiang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,j,q |
| [jinchengquan/E1](https://gitcode.com/jinchengquan/E1) | — | jinchengquan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [jinchengquan/E1--jcq229](https://gitcode.com/jinchengquan/E1--jcq229) | — | jinchengquan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j |
| [jinenjie/hc](https://gitcode.com/jinenjie/hc) | — | jinenjie | ★ 0 / Fork 0 | 8 months ago · 维护中 | h |
| [JM_05/吉林大学-刘佳明-Kruskal最小生成树算法的实现与验证 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=JM_05%2F%E5%90%89%E6%9E%97%E5%A4%A7%E5%AD%A6-%E5%88%98%E4%BD%B3%E6%98%8E-Kruskal%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91%E7%AE%97%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0%E4%B8%8E%E9%AA%8C%E8%AF%81) | Kruskal最小生成树算法的实现与验证 | JM_05 | ★ 0 / Fork 0 | 6 months ago · 活跃 | j,k |
| [JoeDrake07/cangjie_weibo](https://gitcode.com/JoeDrake07/cangjie_weibo) | — | JoeDrake07 | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,Cangjie,j,w |
| [Joeyscat/zao](https://gitcode.com/Joeyscat/zao) | — | Joeyscat | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,z |
| [Jslog/box](https://gitcode.com/Jslog/box) | 开发测试工具 | Jslog | ★ 0 / Fork 0 | 5 months ago · 活跃 | b,j |
| [Jslog/jly](https://gitcode.com/Jslog/jly) | Cangjie 开源社区项目 | Jslog | ★ 0 / Fork 0 | 9 months ago · 维护中 | j |
| [Jslog/ops](https://gitcode.com/Jslog/ops) | — | Jslog | ★ 0 / Fork 0 | 5 months ago · 活跃 | j,o |
| [Jytle/hamster_commander](https://gitcode.com/Jytle/hamster_commander) | 上课用 | Jytle | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,j |
| [kai3902/test.cj](https://gitcode.com/kai3902/test.cj) | — | kai3902 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [kaokaoxxl/demo01](https://gitcode.com/kaokaoxxl/demo01) | — | kaokaoxxl | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,k |
| [KazeIto/hc](https://gitcode.com/KazeIto/hc) | — | KazeIto | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,i,k |
| [kevinzhangzj/cangjie-easy-build](https://gitcode.com/kevinzhangzj/cangjie-easy-build) | 可编程的仓颉构建工具。 | kevinzhangzj | ★ 0 / Fork 0 | 8 months ago · 维护中 | b,Cangjie,e,k |
| [Lan_xq/cangjie](https://gitcode.com/Lan_xq/cangjie) | 这是第一个仓颉项目 | Lan_xq | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,l,x |
| [Lan_xq/lxq_a](https://gitcode.com/Lan_xq/lxq_a) | — | Lan_xq | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,x |
| [langx_zym/Rantional_Numbers](https://gitcode.com/langx_zym/Rantional_Numbers) | — | langx_zym | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,r,z |
| [laurelwater/废案 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=laurelwater%2F%E5%BA%9F%E6%A1%88) | 就是这样 | laurelwater | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,e,l |
| [Lawlers/buy-system](https://gitcode.com/Lawlers/buy-system) | — | Lawlers | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,l,s |
| [Lawlers/hc](https://gitcode.com/Lawlers/hc) | — | Lawlers | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [lcysdmn123456/ccccc](https://gitcode.com/lcysdmn123456/ccccc) | — | lcysdmn123456 | ★ 0 / Fork 0 | 3 months ago · 活跃 | h,l |
| [lcysdmn123456/demo2](https://gitcode.com/lcysdmn123456/demo2) | — | lcysdmn123456 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,l |
| [ldysix6/ldy-test](https://gitcode.com/ldysix6/ldy-test) | — | ldysix6 | ★ 0 / Fork 0 | 10 months ago · 维护中 | l,t |
| [leaveWhite9088/simplekv_test](https://gitcode.com/leaveWhite9088/simplekv_test) | simplekv的测试文件。包含了创建、删除文件以及读写操作的测试用例。这些测试用例被独立出来，以防止对项目目录造成污染，确保测试过程的整洁和安全 | leaveWhite9088 | ★ 0 / Fork 0 | 9 months ago · 维护中 | t,w |
| [LGH_520/cangjie_wp](https://gitcode.com/LGH_520/cangjie_wp) | — | LGH_520 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,l,w |
| [LGH_520/icli_wp](https://gitcode.com/LGH_520/icli_wp) | — | LGH_520 | ★ 0 / Fork 0 | 2 months ago · 活跃 | i,l,w |
| [LGH_520/NoFake](https://gitcode.com/LGH_520/NoFake) | cangjie harness enginerring 实现中转站模型检测，Token注水的cli工具 | LGH_520 | ★ 0 / Fork 0 | 16 days ago · 活跃 | f,l,n |
| [LGYddd/E62__LGY435](https://gitcode.com/LGYddd/E62__LGY435) | — | LGYddd | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [li-jiahao57/ListCangjie](https://gitcode.com/li-jiahao57/ListCangjie) | — | li-jiahao57 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,l |
| [Libres/Ham_c](https://gitcode.com/Libres/Ham_c) | — | Libres | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,h |
| [likeyoudo/cjStudy](https://gitcode.com/likeyoudo/cjStudy) | — | likeyoudo | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,l,s |
| [Lin_Ga/CalendarOfIncomeAndExpenseCJ](https://gitcode.com/Lin_Ga/CalendarOfIncomeAndExpenseCJ) | 每日收支日历图Cangjie实现 | Lin_Ga | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,c,g,i,o |
| [Lin-jingy/Matrix-cangjie](https://gitcode.com/Lin-jingy/Matrix-cangjie) | — | Lin-jingy | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,j,l,m |
| [lingfeishengtian/sqlite3cj](https://gitcode.com/lingfeishengtian/sqlite3cj) | 用仓颉语言操作sqlite | lingfeishengtian | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [LinQingYing/cjpm-text](https://gitcode.com/LinQingYing/cjpm-text) | — | LinQingYing | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,q,t,y |
| [LiqD/cjHomoTempProject](https://gitcode.com/LiqD/cjHomoTempProject) | — | LiqD | ★ 0 / Fork 0 | 19 days ago · 活跃 | c,d,h,l,p,s,t |
| [LiqD/selineWebdav](https://gitcode.com/LiqD/selineWebdav) | — | LiqD | ★ 0 / Fork 0 | 4 months ago · 活跃 | d,l,s,w |
| [liuaolin44944/blanck](https://gitcode.com/liuaolin44944/blanck) | — | liuaolin44944 | ★ 0 / Fork 0 | 6 months ago · 活跃 | b |
| [liuaolin44944/XXXASDASD](https://gitcode.com/liuaolin44944/XXXASDASD) | asd | liuaolin44944 | ★ 0 / Fork 0 | 29 days ago · 活跃 | d,l,x |
| [LIUDAGE_666/西邮硕士25级-仓颉代码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=LIUDAGE_666%2F%E8%A5%BF%E9%82%AE%E7%A1%95%E5%A3%AB25%E7%BA%A7-%E4%BB%93%E9%A2%89%E4%BB%A3%E7%A0%81) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | LIUDAGE_666 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,e,l,仓颉 |
| [liujie_1/test](https://gitcode.com/liujie_1/test) | — | liujie_1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [liuming2708/center](https://gitcode.com/liuming2708/center) | 配置服务 | liuming2708 | ★ 0 / Fork 0 | 4 days ago · 活跃 | c,l |
| [liushengchang/demo2-临沂科技职业技术学院-刘盛昌-指导教师李晓坤 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=liushengchang%2Fdemo2-%E4%B8%B4%E6%B2%82%E7%A7%91%E6%8A%80%E8%81%8C%E4%B8%9A%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2-%E5%88%98%E7%9B%9B%E6%98%8C-%E6%8C%87%E5%AF%BC%E6%95%99%E5%B8%88%E6%9D%8E%E6%99%93%E5%9D%A4) | — | liushengchang | ★ 0 / Fork 0 | 1 month ago · 活跃 | d |
| [liushihao1/LSH666](https://gitcode.com/liushihao1/LSH666) | — | liushihao1 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [liuyang0618/commons-net](https://gitcode.com/liuyang0618/commons-net) | — | liuyang0618 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,l,n |
| [liuyang0618/curator](https://gitcode.com/liuyang0618/curator) | — | liuyang0618 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c |
| [liuyang0618/jetty](https://gitcode.com/liuyang0618/jetty) | — | liuyang0618 | ★ 0 / Fork 0 | 3 months ago · 活跃 | j,l |
| [liuyuxi3/simpleapp](https://gitcode.com/liuyuxi3/simpleapp) | — | liuyuxi3 | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,s |
| [liuzian/图像Exif信息解析工具仓颉版 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=liuzian%2F%E5%9B%BE%E5%83%8FExif%E4%BF%A1%E6%81%AF%E8%A7%A3%E6%9E%90%E5%B7%A5%E5%85%B7%E4%BB%93%E9%A2%89%E7%89%88) | — | liuzian | ★ 0 / Fork 0 | 5 months ago · 活跃 | a,e |
| [llj_/基础数字运算-天津农学院-梁林杰-何玲 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=llj_%2F%E5%9F%BA%E7%A1%80%E6%95%B0%E5%AD%97%E8%BF%90%E7%AE%97-%E5%A4%A9%E6%B4%A5%E5%86%9C%E5%AD%A6%E9%99%A2-%E6%A2%81%E6%9E%97%E6%9D%B0-%E4%BD%95%E7%8E%B2) | 天津农学院仓颉语言课堂作业，学生：梁林杰，授课老师：何玲 包含基础数字运算、字符串输出、if分支判断、while循环基础代码。 | llj_ | ★ 0 / Fork 0 | 22 days ago · 活跃 | c,Cangjie,h,v,w |
| [llllnna/高级程序设计-仓颉书店移植 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=llllnna%2F%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1-%E4%BB%93%E9%A2%89%E4%B9%A6%E5%BA%97%E7%A7%BB%E6%A4%8D) | — | llllnna | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,l |
| [Loo1221/hamster_commander](https://gitcode.com/Loo1221/hamster_commander) | — | Loo1221 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [LOOYIABC/HydroPred](https://gitcode.com/LOOYIABC/HydroPred) | — | LOOYIABC | ★ 0 / Fork 0 | 4 days ago · 活跃 | h,l,p |
| [LOOYIABC/jbxxx](https://gitcode.com/LOOYIABC/jbxxx) | — | LOOYIABC | ★ 0 / Fork 0 | 9 months ago · 维护中 | j,l |
| [lordcxy/HarmonyOS-AIChat](https://gitcode.com/lordcxy/HarmonyOS-AIChat) | — | lordcxy | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,h,l,o |
| [louloulin/wenyuan](https://gitcode.com/louloulin/wenyuan) | — | louloulin | ★ 0 / Fork 0 | 9 months ago · 维护中 | w |
| [Loyea/cangjie-test](https://gitcode.com/Loyea/cangjie-test) | — | Loyea | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,l,t |
| [lsj25316/E1_lsj420](https://gitcode.com/lsj25316/E1_lsj420) | — | lsj25316 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [lsplfx/hc](https://gitcode.com/lsplfx/hc) | — | lsplfx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [LTFLTFLTFLTFLTFL/仓吉开发 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=LTFLTFLTFLTFLTFL%2F%E4%BB%93%E5%90%89%E5%BC%80%E5%8F%91) | — | LTFLTFLTFLTFLTFL | ★ 0 / Fork 0 | 9 months ago · 维护中 | c,l |
| [LuShengyuan/cangjie_code](https://gitcode.com/LuShengyuan/cangjie_code) | — | LuShengyuan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,s |
| [luxingxing1/CJDemo](https://gitcode.com/luxingxing1/CJDemo) | — | luxingxing1 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,l |
| [luzhoucheng/xiaoxueqi](https://gitcode.com/luzhoucheng/xiaoxueqi) | — | luzhoucheng | ★ 0 / Fork 0 | 10 months ago · 维护中 | l,x |
| [lvxuelei/filesize](https://gitcode.com/lvxuelei/filesize) | — | lvxuelei | ★ 0 / Fork 0 | 7 months ago · 维护中 | f |
| [lwh0528/仓鼠智能命令体 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=lwh0528%2F%E4%BB%93%E9%BC%A0%E6%99%BA%E8%83%BD%E5%91%BD%E4%BB%A4%E4%BD%93) | — | lwh0528 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [Lx_c/E3_lxc089](https://gitcode.com/Lx_c/E3_lxc089) | — | Lx_c | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [Lxy_0326/cangjie-objmodel](https://gitcode.com/Lxy_0326/cangjie-objmodel) | — | Lxy_0326 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,l,o |
| [LYQ_YES/cjpm_test](https://gitcode.com/LYQ_YES/cjpm_test) | — | LYQ_YES | ★ 0 / Fork 0 | 10 months ago · 维护中 | t,y |
| [lysithea/hamster_commander](https://gitcode.com/lysithea/hamster_commander) | — | lysithea | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l |
| [lyx001/E3_lyx124](https://gitcode.com/lyx001/E3_lyx124) | — | lyx001 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [lyx001/E62_lyx124](https://gitcode.com/lyx001/E62_lyx124) | — | lyx001 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [lyx001/E7_lyx124](https://gitcode.com/lyx001/E7_lyx124) | — | lyx001 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [M-Robots官方社区/ability_ability_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fability_ability_cangjie_wrapper) | KaihongOS 5.0.1 ability_ability_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | a,Cangjie,m,r |
| [M-Robots官方社区/accesscontrol_accesscontrol_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Faccesscontrol_accesscontrol_cangjie_wrapper) | KaihongOS 5.0.1 accesscontrol_accesscontrol_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | a,Cangjie,m,r,w |
| [M-Robots官方社区/applications_applications_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fapplications_applications_cangjie_wrapper) | KaihongOS 5.0.1 applications_applications_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | a,Cangjie,m,r,w |
| [M-Robots官方社区/arkcompiler_cangjie_ark_interop 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Farkcompiler_cangjie_ark_interop) | KaihongOS 5.0.1 arkcompiler_cangjie_ark_interop repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,i,m |
| [M-Robots官方社区/arkui_arkui_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Farkui_arkui_cangjie_wrapper) | KaihongOS 5.0.1 arkui_arkui_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | a,Cangjie,m,r |
| [M-Robots官方社区/arkweb_arkweb_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Farkweb_arkweb_cangjie_wrapper) | KaihongOS 5.0.1 arkweb_arkweb_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | a,Cangjie,m,r,w |
| [M-Robots官方社区/bundlemanager_bundlemanager_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fbundlemanager_bundlemanager_cangjie_wrapper) | KaihongOS 5.0.1 bundlemanager_bundlemanager_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | b,Cangjie,m,r,w |
| [M-Robots官方社区/communication_communication_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fcommunication_communication_cangjie_wrapper) | KaihongOS 5.0.1 communication_communication_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | c,r,w |
| [M-Robots官方社区/connectivity_connectivity_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fconnectivity_connectivity_cangjie_wrapper) | KaihongOS 5.0.1 connectivity_connectivity_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | c,Cangjie,w |
| [M-Robots官方社区/filemanagement_filemanagement_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Ffilemanagement_filemanagement_cangjie_wrapper) | KaihongOS 5.0.1 filemanagement_filemanagement_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | f,w |
| [M-Robots官方社区/global_global_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fglobal_global_cangjie_wrapper) | KaihongOS 5.0.1 global_global_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,g,r |
| [M-Robots官方社区/graphic_graphic_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fgraphic_graphic_cangjie_wrapper) | KaihongOS 5.0.1 graphic_graphic_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,g,m,r,w |
| [M-Robots官方社区/hiviewdfx_hiviewdfx_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fhiviewdfx_hiviewdfx_cangjie_wrapper) | KaihongOS 5.0.1 hiviewdfx_hiviewdfx_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | h,m,r,w |
| [M-Robots官方社区/location_location_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Flocation_location_cangjie_wrapper) | KaihongOS 5.0.1 location_location_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,l,m,r,w |
| [M-Robots官方社区/multimedia_multimedia_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fmultimedia_multimedia_cangjie_wrapper) | KaihongOS 5.0.1 multimedia_multimedia_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | m,w |
| [M-Robots官方社区/netmanager_netmanager_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fnetmanager_netmanager_cangjie_wrapper) | KaihongOS 5.0.1 netmanager_netmanager_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,n,w |
| [M-Robots官方社区/notification_notification_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fnotification_notification_cangjie_wrapper) | KaihongOS 5.0.1 notification_notification_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | m,n,w |
| [M-Robots官方社区/powermgr_powermgr_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fpowermgr_powermgr_cangjie_wrapper) | KaihongOS 5.0.1 powermgr_powermgr_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | m,p,r,w |
| [M-Robots官方社区/request_request_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Frequest_request_cangjie_wrapper) | KaihongOS 5.0.1 request_request_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,r |
| [M-Robots官方社区/security_security_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fsecurity_security_cangjie_wrapper) | KaihongOS 5.0.1 security_security_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,r |
| [M-Robots官方社区/sensors_sensors_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fsensors_sensors_cangjie_wrapper) | KaihongOS 5.0.1 sensors_sensors_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,r,w |
| [M-Robots官方社区/telephony_telephony_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Ftelephony_telephony_cangjie_wrapper) | KaihongOS 5.0.1 telephony_telephony_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,r,t,w |
| [M-Robots官方社区/testfwk_testfwk_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Ftestfwk_testfwk_cangjie_wrapper) | KaihongOS 5.0.1 testfwk_testfwk_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | m,r,t,w |
| [M-Robots官方社区/third_party_cangjie_runtime 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Fthird_party_cangjie_runtime) | KaihongOS 5.0.1 third_party_cangjie_runtime repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | Cangjie,m,p,r,t |
| [M-Robots官方社区/time_time_cangjie_wrapper 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=M-Robots%E5%AE%98%E6%96%B9%E7%A4%BE%E5%8C%BA%2Ftime_time_cangjie_wrapper) | KaihongOS 5.0.1 time_time_cangjie_wrapper repository | M-Robots官方社区 | ★ 0 / Fork 0 | 30 days ago · 活跃 | m,t,w |
| [m0_72759898/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=m0_72759898%2F%E4%BB%93%E9%A2%89) | — | m0_72759898 | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,m,仓颉 |
| [m0_73304331/E2_yb113](https://gitcode.com/m0_73304331/E2_yb113) | — | m0_73304331 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73589513/E1_dsy111](https://gitcode.com/m0_73589513/E1_dsy111) | — | m0_73589513 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [m0_73589513/E1_dsy234](https://gitcode.com/m0_73589513/E1_dsy234) | — | m0_73589513 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73589513/E3_DSY234](https://gitcode.com/m0_73589513/E3_DSY234) | 第三次作业 | m0_73589513 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,m |
| [m0_73589513/E4_DSY234](https://gitcode.com/m0_73589513/E4_DSY234) | 第四次作业 | m0_73589513 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73824108/complex-number-calculation](https://gitcode.com/m0_73824108/complex-number-calculation) | — | m0_73824108 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m |
| [m0_73843621/E1_ysr105](https://gitcode.com/m0_73843621/E1_ysr105) | — | m0_73843621 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,y |
| [m0_73875399/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=m0_73875399%2F%E4%BB%93%E9%A2%89) | 仓颉 | m0_73875399 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m |
| [m0_73875990/E1_zwy135](https://gitcode.com/m0_73875990/E1_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,z |
| [m0_73875990/E2_zwy135](https://gitcode.com/m0_73875990/E2_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,z |
| [m0_73875990/E3_zwy135](https://gitcode.com/m0_73875990/E3_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73875990/E4___zwy135](https://gitcode.com/m0_73875990/E4___zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73875990/E5_zwy135](https://gitcode.com/m0_73875990/E5_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73875990/E6__zwy135](https://gitcode.com/m0_73875990/E6__zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_73875990/jiekezuoye_weiqi_zwy135](https://gitcode.com/m0_73875990/jiekezuoye_weiqi_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,m |
| [m0_73875990/weiqi_zwy135](https://gitcode.com/m0_73875990/weiqi_zwy135) | — | m0_73875990 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,w |
| [m0_74011464/Cangjie](https://gitcode.com/m0_74011464/Cangjie) | — | m0_74011464 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m |
| [m0_74033251/E3_zzy632](https://gitcode.com/m0_74033251/E3_zzy632) | — | m0_74033251 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_74033251/E4_zzy632](https://gitcode.com/m0_74033251/E4_zzy632) | — | m0_74033251 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [m0_74185544/hamster_commander_git](https://gitcode.com/m0_74185544/hamster_commander_git) | — | m0_74185544 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [m0_74214324/complexnumbers](https://gitcode.com/m0_74214324/complexnumbers) | Complex number operations in Cangjie language” | m0_74214324 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m |
| [m0_74246678/Cangjie-BookStore](https://gitcode.com/m0_74246678/Cangjie-BookStore) | 仓颉语言实现BookStore简单示例 | m0_74246678 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,s |
| [m0_74289362/仓颉lottie库 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=m0_74289362%2F%E4%BB%93%E9%A2%89lottie%E5%BA%93) | — | m0_74289362 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,d,m,仓颉 |
| [m0_74721756/cangjie_test_tms](https://gitcode.com/m0_74721756/cangjie_test_tms) | 一个简单的仓颉自动化测试 | m0_74721756 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,m |
| [m0_75011210/complex_number](https://gitcode.com/m0_75011210/complex_number) | 复数运算 | m0_75011210 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m,n |
| [maichengzuo/Cangjie](https://gitcode.com/maichengzuo/Cangjie) | — | maichengzuo | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,m |
| [Maker-IOS-cangjie/CangjieMagic_linux](https://gitcode.com/Maker-IOS-cangjie/CangjieMagic_linux) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,i,l,m |
| [Maker-IOS-cangjie/video2audio](https://gitcode.com/Maker-IOS-cangjie/video2audio) | — | Maker-IOS-cangjie | ★ 0 / Fork 0 | 4 months ago · 活跃 | Cangjie,i,m,v |
| [man8spirit/rac](https://gitcode.com/man8spirit/rac) | — | man8spirit | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,r |
| [maotan/cjoy_web](https://gitcode.com/maotan/cjoy_web) | cangjie cjoy web | maotan | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,w |
| [mashser/scanner](https://gitcode.com/mashser/scanner) | Token scanner primitive for easier token parsing for Cangjie | mashser | ★ 0 / Fork 0 | 2 months ago · 活跃 | m |
| [master_die/cangjieplan](https://gitcode.com/master_die/cangjieplan) | — | master_die | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,m |
| [mcallzbl/gitDemo](https://gitcode.com/mcallzbl/gitDemo) | 无 | mcallzbl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,m |
| [mcallzbl/sanitize-html](https://gitcode.com/mcallzbl/sanitize-html) | 用于清理HTML内容，防止跨站脚本攻击（XSS）。它可以删除不必要的标签和属性，同时保留你需要的内容。 | mcallzbl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,m,s |
| [mcll/E1_mcl000](https://gitcode.com/mcll/E1_mcl000) | — | mcll | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [mcll/E1_mcl220](https://gitcode.com/mcll/E1_mcl220) | — | mcll | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [MentalOut/cangjie](https://gitcode.com/MentalOut/cangjie) | — | MentalOut | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,o |
| [Merely_theBreeze/tinycalc](https://gitcode.com/Merely_theBreeze/tinycalc) | — | Merely_theBreeze | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,m,t |
| [Merely_theBreeze/啃不完的麻辣兔头-成都东软学院-熊蔚-梁睿 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Merely_theBreeze%2F%E5%95%83%E4%B8%8D%E5%AE%8C%E7%9A%84%E9%BA%BB%E8%BE%A3%E5%85%94%E5%A4%B4-%E6%88%90%E9%83%BD%E4%B8%9C%E8%BD%AF%E5%AD%A6%E9%99%A2-%E7%86%8A%E8%94%9A-%E6%A2%81%E7%9D%BF) | — | Merely_theBreeze | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,h,m,o,r,t |
| [MIAO0225/E1_ml221](https://gitcode.com/MIAO0225/E1_ml221) | — | MIAO0225 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m |
| [MIAO0225/E2_ml221](https://gitcode.com/MIAO0225/E2_ml221) | — | MIAO0225 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [mingyuwang1/booksiyidui](https://gitcode.com/mingyuwang1/booksiyidui) | 我的项目 | mingyuwang1 | ★ 0 / Fork 0 | 7 months ago · 维护中 | b,l,m |
| [mingyuwang1/question1](https://gitcode.com/mingyuwang1/question1) | 第一题 | mingyuwang1 | ★ 0 / Fork 0 | 7 months ago · 维护中 | m,q |
| [MONcanyea/BranchandBoundwithPruning](https://gitcode.com/MONcanyea/BranchandBoundwithPruning) | 一、基本理念 分支限界 = 分叉搜索 + 用边界判断提前剪枝 二、核心思想 你在做搜索（比如 DFS、BFS）时，会遇到很多不可能成为最优解的分支。如果不剪掉，程序会傻呵呵全搜一遍，非常慢。 分支限界的作用就是： 搜索过程中，估算当前分支的最优可能值（上界 / 下界） 如果这个 “最优可能值” 都比现在已经找到的答案还差 直接剪掉这条分支，不再往下搜 这就… | MONcanyea | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,m,p |
| [Mophy/wheelpacker-mf](https://gitcode.com/Mophy/wheelpacker-mf) | — | Mophy | ★ 0 / Fork 0 | 7 months ago · 维护中 | m,w |
| [Mophy/wheelpickercj](https://gitcode.com/Mophy/wheelpickercj) | — | Mophy | ★ 0 / Fork 0 | 8 months ago · 维护中 | m,w |
| [msyyyyyy/cangjie-lexer](https://gitcode.com/msyyyyyy/cangjie-lexer) | — | msyyyyyy | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,l,m |
| [mu_hua_xiong/Cipher](https://gitcode.com/mu_hua_xiong/Cipher) | — | mu_hua_xiong | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,h,m,x |
| [myh11/cengxvsheji](https://gitcode.com/myh11/cengxvsheji) | — | myh11 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m |
| [myh11/cx](https://gitcode.com/myh11/cx) | — | myh11 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,m |
| [Nd60/1](https://gitcode.com/Nd60/1) | — | Nd60 | ★ 0 / Fork 0 | 7 months ago · 维护中 | n |
| [Neila/mnist-cangjie](https://gitcode.com/Neila/mnist-cangjie) | 使用仓颉简单训练mnist数据集 | Neila | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,m,n |
| [next-lyle/仓颉入门直播demo 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=next-lyle%2F%E4%BB%93%E9%A2%89%E5%85%A5%E9%97%A8%E7%9B%B4%E6%92%ADdemo) | — | next-lyle | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,d,仓颉 |
| [nianangao/实现一个骰子 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=nianangao%2F%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E9%AA%B0%E5%AD%90) | — | nianangao | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,n |
| [niuhongyan/E1_Nhy207](https://gitcode.com/niuhongyan/E1_Nhy207) | — | niuhongyan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n |
| [nNioiOn_/Rejection_Sampler](https://gitcode.com/nNioiOn_/Rejection_Sampler) | 使用仓颉语言编写的一个拒绝采样器 | nNioiOn_ | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,o,r |
| [nnnnl/E1_ln111](https://gitcode.com/nnnnl/E1_ln111) | — | nnnnl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n |
| [nnnnl/E2_ln111](https://gitcode.com/nnnnl/E2_ln111) | — | nnnnl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n |
| [nnnnl/E3_ln111](https://gitcode.com/nnnnl/E3_ln111) | — | nnnnl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,n |
| [nnnnl/E4_ln111](https://gitcode.com/nnnnl/E4_ln111) | — | nnnnl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [No_1Chen/cjh2](https://gitcode.com/No_1Chen/cjh2) | — | No_1Chen | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c |
| [null_fish/fishop](https://gitcode.com/null_fish/fishop) | — | null_fish | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,n |
| [null_fish/rac](https://gitcode.com/null_fish/rac) | — | null_fish | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,n,r |
| [null_fish/RACPlus](https://gitcode.com/null_fish/RACPlus) | — | null_fish | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,r |
| [nutuml/cjDemo](https://gitcode.com/nutuml/cjDemo) | 仓颉demo代码 | nutuml | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,d,n |
| [o414o/HelloCJ](https://gitcode.com/o414o/HelloCJ) | 仓颉的练习代码 | o414o | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,o |
| [oceanSimple/oProxyServerDocker](https://gitcode.com/oceanSimple/oProxyServerDocker) | oProxyServer的docker版本 | oceanSimple | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,o,p |
| [oceanSimple/ReOProxyServer](https://gitcode.com/oceanSimple/ReOProxyServer) | o_proxy_server 项目重构 | oceanSimple | ★ 0 / Fork 0 | 1 year ago · 低活跃 | o,r,s |
| [ochuidscguv/D_WYC118](https://gitcode.com/ochuidscguv/D_WYC118) | — | ochuidscguv | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,o,w |
| [ochuidscguv/E62_WYC118](https://gitcode.com/ochuidscguv/E62_WYC118) | — | ochuidscguv | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,o,w |
| [Omega/Bonjour](https://gitcode.com/Omega/Bonjour) | Cangjie, bonjour! | Omega | ★ 0 / Fork 0 | 1 year ago · 低活跃 | o |
| [onlytimer/cangjie_syntax](https://gitcode.com/onlytimer/cangjie_syntax) | 仓颉语法练习 | onlytimer | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,o,s |
| [Orca-/orca-test-2025](https://gitcode.com/Orca-/orca-test-2025) | — | Orca- | ★ 0 / Fork 0 | 7 months ago · 维护中 | o,t |
| [ovy/cangjie_misc](https://gitcode.com/ovy/cangjie_misc) | — | ovy | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,m,o |
| [pangshuaishuai/CST-2025](https://gitcode.com/pangshuaishuai/CST-2025) | — | pangshuaishuai | ★ 0 / Fork 0 | 8 months ago · 维护中 | c |
| [paoludecaic/CangjieUtils](https://gitcode.com/paoludecaic/CangjieUtils) | 自己写的一点仓颉工具demo | paoludecaic | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,Cangjie,p,u |
| [pear213/cjtest](https://gitcode.com/pear213/cjtest) | 仓颉 学习代码 | pear213 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,p |
| [pengkc/cangjie](https://gitcode.com/pengkc/cangjie) | cangjie学习 | pengkc | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,p |
| [pensoul/cangjieDesignMode](https://gitcode.com/pensoul/cangjieDesignMode) | 针对仓颉开发提供设计模式用的包，主要学习如何在git做包导入dependencies | pensoul | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,p |
| [pensoul/仓颉Web开发 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=pensoul%2F%E4%BB%93%E9%A2%89Web%E5%BC%80%E5%8F%91) | — | pensoul | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,p,w,仓颉 |
| [PermissionDog/hongtools_debug](https://gitcode.com/PermissionDog/hongtools_debug) | — | PermissionDog | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h,p |
| [PGeorge13u_/SimpleCipher](https://gitcode.com/PGeorge13u_/SimpleCipher) | 简单加密算法 | PGeorge13u_ | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,s,u |
| [phoenix_hong/cangjie-show-case](https://gitcode.com/phoenix_hong/cangjie-show-case) | — | phoenix_hong | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,Cangjie,h,p |
| [PiggyCare/PiggyCare](https://gitcode.com/PiggyCare/PiggyCare) | 基于仓颉开发的一款智能记账网页~ | PiggyCare | ★ 0 / Fork 0 | 8 months ago · 维护中 | p |
| [Pizzattt/ATM_AI_management_system](https://gitcode.com/Pizzattt/ATM_AI_management_system) | — | Pizzattt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,p,s |
| [Pizzattt/first_cangjie](https://gitcode.com/Pizzattt/first_cangjie) | — | Pizzattt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,f,p |
| [Pizzattt/hamasterCommander](https://gitcode.com/Pizzattt/hamasterCommander) | — | Pizzattt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p |
| [PLMNEXT/next-beans](https://gitcode.com/PLMNEXT/next-beans) | — | PLMNEXT | ★ 0 / Fork 0 | 11 months ago · 维护中 | b,n,p |
| [PLMNEXT/next-boot](https://gitcode.com/PLMNEXT/next-boot) | — | PLMNEXT | ★ 0 / Fork 0 | 11 months ago · 维护中 | b,n,p |
| [PLMNEXT/next-context](https://gitcode.com/PLMNEXT/next-context) | — | PLMNEXT | ★ 0 / Fork 0 | 11 months ago · 维护中 | n,p |
| [PLMNEXT/next-core](https://gitcode.com/PLMNEXT/next-core) | — | PLMNEXT | ★ 0 / Fork 0 | 10 months ago · 维护中 | n,p |
| [PLMNEXT/next-log](https://gitcode.com/PLMNEXT/next-log) | — | PLMNEXT | ★ 0 / Fork 0 | 11 months ago · 维护中 | l,n,p |
| [PLMNEXT/next-log-core](https://gitcode.com/PLMNEXT/next-log-core) | — | PLMNEXT | ★ 0 / Fork 0 | 10 months ago · 维护中 | l,n,p |
| [PLMNEXT/next-middleware](https://gitcode.com/PLMNEXT/next-middleware) | Next-Web 中间件 | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,n,p |
| [PLMNEXT/next-mime](https://gitcode.com/PLMNEXT/next-mime) | — | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,n,p |
| [PLMNEXT/next-result](https://gitcode.com/PLMNEXT/next-result) | — | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,p |
| [PLMNEXT/next-router](https://gitcode.com/PLMNEXT/next-router) | — | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,r |
| [PLMNEXT/next-toml](https://gitcode.com/PLMNEXT/next-toml) | Toml语法的全面支持 | PLMNEXT | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,p,t |
| [Plus0717/个人健康打卡系统_浙江树人学院_李嘉浩 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Plus0717%2F%E4%B8%AA%E4%BA%BA%E5%81%A5%E5%BA%B7%E6%89%93%E5%8D%A1%E7%B3%BB%E7%BB%9F_%E6%B5%99%E6%B1%9F%E6%A0%91%E4%BA%BA%E5%AD%A6%E9%99%A2_%E6%9D%8E%E5%98%89%E6%B5%A9) | — | Plus0717 | ★ 0 / Fork 0 | 7 months ago · 维护中 | h,p,t |
| [Poker_Knight/高级程序设计仓颉项目实例 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Poker_Knight%2F%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E4%BB%93%E9%A2%89%E9%A1%B9%E7%9B%AE%E5%AE%9E%E4%BE%8B) | — | Poker_Knight | ★ 0 / Fork 0 | 1 year ago · 低活跃 | k,p |
| [POPMINASANG/CangjiePracticeToolbox-集美大学-林泓成-罗方芳 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=POPMINASANG%2FCangjiePracticeToolbox-%E9%9B%86%E7%BE%8E%E5%A4%A7%E5%AD%A6-%E6%9E%97%E6%B3%93%E6%88%90-%E7%BD%97%E6%96%B9%E8%8A%B3) | — | POPMINASANG | ★ 0 / Fork 0 | 25 days ago · 活跃 | c,Cangjie,j,l,p,t |
| [potager/pepper-cmd](https://gitcode.com/potager/pepper-cmd) | — | potager | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p |
| [ProALgebra/Symcalc](https://gitcode.com/ProALgebra/Symcalc) | — | ProALgebra | ★ 0 / Fork 0 | 3 months ago · 活跃 | a,p,s |
| [pulluh/cangjie-test](https://gitcode.com/pulluh/cangjie-test) | — | pulluh | ★ 0 / Fork 0 | 28 days ago · 活跃 | c,Cangjie,p |
| [PYY-123/cj](https://gitcode.com/PYY-123/cj) | 仓颉项目 | PYY-123 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,p |
| [Q2777089217/cangjie](https://gitcode.com/Q2777089217/cangjie) | 仓颉代码移植 | Q2777089217 | ★ 0 / Fork 0 | 30 days ago · 活跃 | c,Cangjie,q |
| [q812623051/ChangeCalculator](https://gitcode.com/q812623051/ChangeCalculator) | 换硬币问题仓颉移植 | q812623051 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,q |
| [qiangwentao/studentsystem](https://gitcode.com/qiangwentao/studentsystem) | — | qiangwentao | ★ 0 / Fork 0 | 1 month ago · 活跃 | q,s |
| [qq_21766175/AtomicBool](https://gitcode.com/qq_21766175/AtomicBool) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,b,q |
| [qq_21766175/AtomicInt64](https://gitcode.com/qq_21766175/AtomicInt64) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,q |
| [qq_21766175/AtomicReference](https://gitcode.com/qq_21766175/AtomicReference) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,q,r |
| [qq_21766175/avoiding_deadlock](https://gitcode.com/qq_21766175/avoiding_deadlock) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,q |
| [qq_21766175/Bank](https://gitcode.com/qq_21766175/Bank) | 银行存款 | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,q |
| [qq_21766175/barrier](https://gitcode.com/qq_21766175/barrier) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,q |
| [qq_21766175/BufferedInputStream](https://gitcode.com/qq_21766175/BufferedInputStream) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,i,q,s |
| [qq_21766175/ChangeVarDecl](https://gitcode.com/qq_21766175/ChangeVarDecl) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,q,v |
| [qq_21766175/deadlock](https://gitcode.com/qq_21766175/deadlock) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,q |
| [qq_21766175/fibonacci](https://gitcode.com/qq_21766175/fibonacci) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q |
| [qq_21766175/GenerateCtor](https://gitcode.com/qq_21766175/GenerateCtor) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [qq_21766175/GenerateCtor2](https://gitcode.com/qq_21766175/GenerateCtor2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q |
| [qq_21766175/GenerateProps](https://gitcode.com/qq_21766175/GenerateProps) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,p,q |
| [qq_21766175/GetFuncIdentifier](https://gitcode.com/qq_21766175/GetFuncIdentifier) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,i,q |
| [qq_21766175/getfuncSignature](https://gitcode.com/qq_21766175/getfuncSignature) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,q,s |
| [qq_21766175/GetFuncSignature2](https://gitcode.com/qq_21766175/GetFuncSignature2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,g,q,s |
| [qq_21766175/GetMemberInfo](https://gitcode.com/qq_21766175/GetMemberInfo) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,i,m,q |
| [qq_21766175/GetPublicFuncSigs](https://gitcode.com/qq_21766175/GetPublicFuncSigs) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,p,q |
| [qq_21766175/GetPublicFuncSigs_2](https://gitcode.com/qq_21766175/GetPublicFuncSigs_2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,g,p,q,s |
| [qq_21766175/logging_function_call](https://gitcode.com/qq_21766175/logging_function_call) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,l,q |
| [qq_21766175/MeasureTime](https://gitcode.com/qq_21766175/MeasureTime) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,t |
| [qq_21766175/MeasureTime2](https://gitcode.com/qq_21766175/MeasureTime2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,t |
| [qq_21766175/Memoized](https://gitcode.com/qq_21766175/Memoized) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q |
| [qq_21766175/MultiConditionMonitor](https://gitcode.com/qq_21766175/MultiConditionMonitor) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q |
| [qq_21766175/PrintFuncCallTime](https://gitcode.com/qq_21766175/PrintFuncCallTime) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,t |
| [qq_21766175/reentrant_read_write_mutex](https://gitcode.com/qq_21766175/reentrant_read_write_mutex) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,r,w |
| [qq_21766175/reentrant_read_write_mutex2](https://gitcode.com/qq_21766175/reentrant_read_write_mutex2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,r,w |
| [qq_21766175/reentrant_read_write_mutex3](https://gitcode.com/qq_21766175/reentrant_read_write_mutex3) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,r,w |
| [qq_21766175/ReentrantMutex](https://gitcode.com/qq_21766175/ReentrantMutex) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,r |
| [qq_21766175/ReentrantMutex2](https://gitcode.com/qq_21766175/ReentrantMutex2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,r |
| [qq_21766175/Semaphore](https://gitcode.com/qq_21766175/Semaphore) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s |
| [qq_21766175/Semaphore2](https://gitcode.com/qq_21766175/Semaphore2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q |
| [qq_21766175/SetAttribute](https://gitcode.com/qq_21766175/SetAttribute) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [qq_21766175/SetAttribute2](https://gitcode.com/qq_21766175/SetAttribute2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,q,s |
| [qq_21766175/socket](https://gitcode.com/qq_21766175/socket) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q |
| [qq_21766175/SyncCounter](https://gitcode.com/qq_21766175/SyncCounter) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s |
| [qq_21766175/synchronized2](https://gitcode.com/qq_21766175/synchronized2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s |
| [qq_21766175/syncSemaphore](https://gitcode.com/qq_21766175/syncSemaphore) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s |
| [qq_21766175/TcpServerSocket](https://gitcode.com/qq_21766175/TcpServerSocket) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s,t |
| [qq_21766175/TcpSocket](https://gitcode.com/qq_21766175/TcpSocket) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s,t |
| [qq_21766175/TcpSocketClient](https://gitcode.com/qq_21766175/TcpSocketClient) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,s,t |
| [qq_21766175/TcpSocketClient2](https://gitcode.com/qq_21766175/TcpSocketClient2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,t |
| [qq_21766175/test1](https://gitcode.com/qq_21766175/test1) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,t |
| [qq_21766175/test2](https://gitcode.com/qq_21766175/test2) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,t |
| [qq_21766175/TestBinaryExpr](https://gitcode.com/qq_21766175/TestBinaryExpr) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,e,q,t |
| [qq_21766175/thread_info](https://gitcode.com/qq_21766175/thread_info) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,t |
| [qq_21766175/thread_local](https://gitcode.com/qq_21766175/thread_local) | — | qq_21766175 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,q,t |
| [qq_42449696/邹名扬程序设计方法学作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=qq_42449696%2F%E9%82%B9%E5%90%8D%E6%89%AC%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%B3%95%E5%AD%A6%E4%BD%9C%E4%B8%9A) | — | qq_42449696 | ★ 0 / Fork 0 | 8 months ago · 维护中 | h,q |
| [qq_47690720/cangjie_deveco](https://gitcode.com/qq_47690720/cangjie_deveco) | 本工程记录的是deveco下cangjie的常见编译错误以及修复方法 | qq_47690720 | ★ 0 / Fork 0 | 6 months ago · 活跃 | c,Cangjie,q |
| [qq_61750566/CangJieBase](https://gitcode.com/qq_61750566/CangJieBase) | 学习cangjie编程语言基础 | qq_61750566 | ★ 0 / Fork 0 | 10 months ago · 维护中 | b,c,j,q |
| [qq_63187947/E2_Lyr128](https://gitcode.com/qq_63187947/E2_Lyr128) | — | qq_63187947 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,q |
| [qq_63187947/E3_lyr128](https://gitcode.com/qq_63187947/E3_lyr128) | — | qq_63187947 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,q |
| [qq_63187947/E4_lyr128](https://gitcode.com/qq_63187947/E4_lyr128) | — | qq_63187947 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,q |
| [qq_63187947/E5_lyr128](https://gitcode.com/qq_63187947/E5_lyr128) | 作业5： 要求 定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 发票也可以替换成其他的类，但是要求成员数据不少于5个，数据类型要不少于3种，尽量结合实际。 | qq_63187947 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,q |
| [qq_74029362/E6_ay118](https://gitcode.com/qq_74029362/E6_ay118) | — | qq_74029362 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e,q |
| [qq_74873405/Change](https://gitcode.com/qq_74873405/Change) | Change | qq_74873405 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,q |
| [QUARES-1/workflow_test](https://gitcode.com/QUARES-1/workflow_test) | — | QUARES-1 | ★ 0 / Fork 0 | 1 month ago · 活跃 | q,w |
| [Qwzwsx/IycMf1UZ0BcahFzLbMyM](https://gitcode.com/Qwzwsx/IycMf1UZ0BcahFzLbMyM) | — | Qwzwsx | ★ 0 / Fork 0 | 22 days ago · 活跃 | f,i,m,q |
| [rabitlogic/permission_system](https://gitcode.com/rabitlogic/permission_system) | — | rabitlogic | ★ 0 / Fork 0 | 6 months ago · 活跃 | p,r,s |
| [RB226GYL/D_gyl626](https://gitcode.com/RB226GYL/D_gyl626) | — | RB226GYL | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,r |
| [RB226GYL/E62_gyl626](https://gitcode.com/RB226GYL/E62_gyl626) | — | RB226GYL | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,r |
| [reall666/cangjie-grpc](https://gitcode.com/reall666/cangjie-grpc) | — | reall666 | ★ 0 / Fork 0 | 19 days ago · 活跃 | c,Cangjie,r |
| [reall666/cangjie-http2](https://gitcode.com/reall666/cangjie-http2) | — | reall666 | ★ 0 / Fork 0 | 19 days ago · 活跃 | c,Cangjie,h,r |
| [reall666/rich](https://gitcode.com/reall666/rich) | — | reall666 | ★ 0 / Fork 0 | 2 days ago · 活跃 | r |
| [Recardo_M_W/adwjia](https://gitcode.com/Recardo_M_W/adwjia) | — | Recardo_M_W | ★ 0 / Fork 0 | 7 months ago · 维护中 | a,m,r |
| [redenvelope/compile](https://gitcode.com/redenvelope/compile) | 仓颉实现编译原理算法 | redenvelope | ★ 0 / Fork 0 | 7 months ago · 维护中 | r |
| [redlilis/ComplexNumber](https://gitcode.com/redlilis/ComplexNumber) | 使用仓颉语言改写ComplexNumber 能够完成复数的加、减、乘、除、模、共轭、指数等运算 | redlilis | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,n,r |
| [rePeek/ViewDemo](https://gitcode.com/rePeek/ViewDemo) | — | rePeek | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,p,r,v |
| [rihua/E2_wky108](https://gitcode.com/rihua/E2_wky108) | — | rihua | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,r,w |
| [rihua/test](https://gitcode.com/rihua/test) | — | rihua | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r,t |
| [RiverMelanie/MyCommandLine](https://gitcode.com/RiverMelanie/MyCommandLine) | — | RiverMelanie | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,m,r |
| [RiverMelanie/myfirstcjcode](https://gitcode.com/RiverMelanie/myfirstcjcode) | — | RiverMelanie | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r |
| [Ro1eee/ReverseProxy](https://gitcode.com/Ro1eee/ReverseProxy) | — | Ro1eee | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,r |
| [robin030913/cartoon_cangjie](https://gitcode.com/robin030913/cartoon_cangjie) | — | robin030913 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,r |
| [robin030913/recall](https://gitcode.com/robin030913/recall) | — | robin030913 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r |
| [Rong_yi/基于仓颉的生产者-消费者问题模拟实现-西南科技大学-荣俊杰-黄芸-黄康杰-指导老师马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Rong_yi%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E7%94%9F%E4%BA%A7%E8%80%85-%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E8%8D%A3%E4%BF%8A%E6%9D%B0-%E9%BB%84%E8%8A%B8-%E9%BB%84%E5%BA%B7%E6%9D%B0-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E9%A9%AC%E7%AB%8B%E5%B9%B3) | 基于仓颉的生产者-消费者问题模拟实现 | Rong_yi | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,p,r,y |
| [s-lu/E1_ls540](https://gitcode.com/s-lu/E1_ls540) | — | s-lu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,s |
| [s-lu/E5_ls540](https://gitcode.com/s-lu/E5_ls540) | 作业5： 要求： 定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 发票也可以替换成其他的类，但是要求成员数据不少于5个，数据类型要不少于3种，尽量结合实际。 | s-lu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [sacce/webjson1](https://gitcode.com/sacce/webjson1) | 1 | sacce | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,w |
| [sacce/线代算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=sacce%2F%E7%BA%BF%E4%BB%A3%E7%AE%97%E6%B3%95) | — | sacce | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,l |
| [sahasdfghjkl/morristraversal](https://gitcode.com/sahasdfghjkl/morristraversal) | — | sahasdfghjkl | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,s |
| [Sanren_OOO/cangjie_buybooks](https://gitcode.com/Sanren_OOO/cangjie_buybooks) | 书店最优惠买书方案 | Sanren_OOO | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,o,s |
| [sanwaininiW/cangjie](https://gitcode.com/sanwaininiW/cangjie) | — | sanwaininiW | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,s,w |
| [sasiliya/cangjie](https://gitcode.com/sasiliya/cangjie) | — | sasiliya | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie |
| [SeanXDO/cangjieJson_simd_bench](https://gitcode.com/SeanXDO/cangjieJson_simd_bench) | — | SeanXDO | ★ 0 / Fork 0 | 7 months ago · 维护中 | b,Cangjie,j,s,x |
| [SeanXDO/CJCommons](https://gitcode.com/SeanXDO/CJCommons) | Commons for Cangjie/仓颉, like Apache Commons for Java | SeanXDO | ★ 0 / Fork 0 | 8 months ago · 维护中 | c,s,x |
| [SeanXDO/MyClaw_ICUCJ](https://gitcode.com/SeanXDO/MyClaw_ICUCJ) | — | SeanXDO | ★ 0 / Fork 0 | 4 months ago · 活跃 | i,m,s,x |
| [SeanXDO/MyClaw_ICUCJ4](https://gitcode.com/SeanXDO/MyClaw_ICUCJ4) | ICU for Cangjie | SeanXDO | ★ 0 / Fork 0 | 4 months ago · 活跃 | i,m,s,x |
| [SeEmIng5/E62_nbx513](https://gitcode.com/SeEmIng5/E62_nbx513) | — | SeEmIng5 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,i,n,s |
| [self-test/test](https://gitcode.com/self-test/test) | — | self-test | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [shane555/hamster_commander](https://gitcode.com/shane555/hamster_commander) | — | shane555 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [shangdongxu/E4_sdx605](https://gitcode.com/shangdongxu/E4_sdx605) | — | shangdongxu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [shangdongxu/E5_sdx605](https://gitcode.com/shangdongxu/E5_sdx605) | — | shangdongxu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [shangdongxu/E6_sdx605](https://gitcode.com/shangdongxu/E6_sdx605) | — | shangdongxu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [sharego/json5](https://gitcode.com/sharego/json5) | * 仓颉 JSON5 * A Cangjie JSON5 serializer and deserializer | sharego | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,s |
| [shiavin/基于仓颉的生产者-消费者问题模拟实现-西南科技大学-汪俊杰-彭煜炀-邓宏-指导老师马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=shiavin%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E7%94%9F%E4%BA%A7%E8%80%85-%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%B1%AA%E4%BF%8A%E6%9D%B0-%E5%BD%AD%E7%85%9C%E7%82%80-%E9%82%93%E5%AE%8F-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E9%A9%AC%E7%AB%8B%E5%B9%B3) | 无 | shiavin | ★ 0 / Fork 0 | 1 month ago · 活跃 | s |
| [shiavin/基于仓颉的虚拟内存页面置换算法模拟实现-西南科技大学-汪俊杰-彭煜炀-邓宏-指导老师马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=shiavin%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%B1%AA%E4%BF%8A%E6%9D%B0-%E5%BD%AD%E7%85%9C%E7%82%80-%E9%82%93%E5%AE%8F-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E9%A9%AC%E7%AB%8B%E5%B9%B3) | — | shiavin | ★ 0 / Fork 0 | 1 month ago · 活跃 | n |
| [shiavin/基于仓颉的进程调度算法模拟实现-西南科技大学-汪俊杰-彭煜炀-邓宏-指导老师马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=shiavin%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E8%BF%9B%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%B1%AA%E4%BF%8A%E6%9D%B0-%E5%BD%AD%E7%85%9C%E7%82%80-%E9%82%93%E5%AE%8F-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E9%A9%AC%E7%AB%8B%E5%B9%B3) | — | shiavin | ★ 0 / Fork 0 | 1 month ago · 活跃 | s |
| [shiavin/基于仓颉的银行家算法模拟实现-西南科技大学-汪俊杰-彭煜炀-邓宏-指导老师马立平 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=shiavin%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-%E8%A5%BF%E5%8D%97%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E6%B1%AA%E4%BF%8A%E6%9D%B0-%E5%BD%AD%E7%85%9C%E7%82%80-%E9%82%93%E5%AE%8F-%E6%8C%87%E5%AF%BC%E8%80%81%E5%B8%88%E9%A9%AC%E7%AB%8B%E5%B9%B3) | 无 | shiavin | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,b,c,Cangjie,s |
| [ShireWhite/OCRnumbers](https://gitcode.com/ShireWhite/OCRnumbers) | 基于仓颉语言的数码管数字识别 | ShireWhite | ★ 0 / Fork 0 | 1 year ago · 低活跃 | o,w |
| [shl6666669/shl_test](https://gitcode.com/shl6666669/shl_test) | 111 | shl6666669 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,t |
| [shunchen_luo/CST-2025](https://gitcode.com/shunchen_luo/CST-2025) | — | shunchen_luo | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,l,s |
| [shunchen_luo/CST-2025_2200](https://gitcode.com/shunchen_luo/CST-2025_2200) | — | shunchen_luo | ★ 0 / Fork 0 | 7 months ago · 维护中 | l,s |
| [sige1079/neu_cangjie_microserver](https://gitcode.com/sige1079/neu_cangjie_microserver) | 学习自东北大学张引老师的仓颉微服务 | sige1079 | ★ 0 / Fork 0 | 10 months ago · 维护中 | Cangjie,s |
| [sigmoid/fakeNginx](https://gitcode.com/sigmoid/fakeNginx) | — | sigmoid | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,n,s |
| [sinat_41661654/HEat_Ass](https://gitcode.com/sinat_41661654/HEat_Ass) | — | sinat_41661654 | ★ 0 / Fork 0 | 7 months ago · 维护中 | a,h |
| [sln2004/E1_sln226](https://gitcode.com/sln2004/E1_sln226) | — | sln2004 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [sln2004/E3_sln226](https://gitcode.com/sln2004/E3_sln226) | — | sln2004 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [sln2004/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=sln2004%2F%E4%BB%93%E9%A2%89) | — | sln2004 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [smile_suna/hamster_commander](https://gitcode.com/smile_suna/hamster_commander) | — | smile_suna | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,s |
| [snowglass/followZyGit](https://gitcode.com/snowglass/followZyGit) | — | snowglass | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,g,s,z |
| [Solus2112/二叉树与平衡树仓颉语言完整实现 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Solus2112%2F%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%8E%E5%B9%B3%E8%A1%A1%E6%A0%91%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%95%B4%E5%AE%9E%E7%8E%B0) | 二叉树与平衡树 — 仓颉语言完整实现 Binary Trees & Balanced Trees — Cangjie Implementation 内容涵盖： 二叉树节点定义与创建 四种遍历算法（前序/中序/后序/层序，递归与非递归） 二叉搜索树（BST）查找、插入、删除 AVL 树（旋转 + 插入自动平衡） 红黑树（节点定义 + 插入修复） | Solus2112 | ★ 0 / Fork 0 | 9 days ago · 活跃 | Cangjie,d,s |
| [Sorry0426/wssllhdg](https://gitcode.com/Sorry0426/wssllhdg) | — | Sorry0426 | ★ 0 / Fork 0 | 11 days ago · 活跃 | s,w |
| [SowrJam/HamsterCommander](https://gitcode.com/SowrJam/HamsterCommander) | — | SowrJam | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,j,s |
| [Spacefield/test](https://gitcode.com/Spacefield/test) | 用于作业演示的项目 | Spacefield | ★ 0 / Fork 0 | 1 month ago · 活跃 | s |
| [starsac/CangjieSmartQuery](https://gitcode.com/starsac/CangjieSmartQuery) | 仓颉智询 | starsac | ★ 0 / Fork 0 | 5 months ago · 活跃 | Cangjie,q,s |
| [Starve_Tom/commonTools](https://gitcode.com/Starve_Tom/commonTools) | 开放仓颉应用/模块的过程中普遍会用到的一些 Tools / Kits 的源码 | Starve_Tom | ★ 0 / Fork 0 | 6 days ago · 活跃 | c,s,t |
| [subaruawa486/cangjie_fushuyunsuan](https://gitcode.com/subaruawa486/cangjie_fushuyunsuan) | 采用仓颉语言完成了复数运算功能的实现 | subaruawa486 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,f,s |
| [sunbing9208/testdemo](https://gitcode.com/sunbing9208/testdemo) | — | sunbing9208 | ★ 0 / Fork 0 | 10 months ago · 维护中 | t |
| [suncx11/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=suncx11%2F%E4%BB%93%E9%A2%89) | — | suncx11 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,s,仓颉 |
| [suncx11/仓颉课堂 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=suncx11%2F%E4%BB%93%E9%A2%89%E8%AF%BE%E5%A0%82) | — | suncx11 | ★ 0 / Fork 0 | 4 months ago · 活跃 | Cangjie,s,仓颉 |
| [supermoose/cangjie](https://gitcode.com/supermoose/cangjie) | — | supermoose | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,s |
| [Syihang/rec_all_cangjie](https://gitcode.com/Syihang/rec_all_cangjie) | — | Syihang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,r,s |
| [Syihang/syh](https://gitcode.com/Syihang/syh) | — | Syihang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s |
| [szLilyWu/cjMPCServer](https://gitcode.com/szLilyWu/cjMPCServer) | — | szLilyWu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,l,m,w |
| [tb0912/rec_all_cangjie](https://gitcode.com/tb0912/rec_all_cangjie) | — | tb0912 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,r,t |
| [Tghoul-xlx/bpta-picture-preview](https://gitcode.com/Tghoul-xlx/bpta-picture-preview) | — | Tghoul-xlx | ★ 0 / Fork 0 | 7 months ago · 维护中 | p,t |
| [tianyyyyy/html_entities](https://gitcode.com/tianyyyyy/html_entities) | — | tianyyyyy | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,h,t |
| [tinychong/public_cangjie](https://gitcode.com/tinychong/public_cangjie) | 个人开源仓颉原型项目 | tinychong | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,p,t |
| [tinychong/tinyapps](https://gitcode.com/tinychong/tinyapps) | — | tinychong | ★ 0 / Fork 0 | 2 days ago · 活跃 | t |
| [tkysys/E3_yck335](https://gitcode.com/tkysys/E3_yck335) | — | tkysys | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t,y |
| [Tlntin/AIClassify](https://gitcode.com/Tlntin/AIClassify) | — | Tlntin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,t |
| [Tlntin/qwen_ms_llm](https://gitcode.com/Tlntin/qwen_ms_llm) | — | Tlntin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,t |
| [tqs2003/E1_tqs123](https://gitcode.com/tqs2003/E1_tqs123) | — | tqs2003 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t |
| [tsxb/CalendarManager](https://gitcode.com/tsxb/CalendarManager) | — | tsxb | ★ 0 / Fork 0 | 10 months ago · 维护中 | m,t |
| [tsxb/CanvasCinema](https://gitcode.com/tsxb/CanvasCinema) | 用仓颉重写了ArkTS的电影选座用例 | tsxb | ★ 0 / Fork 0 | 11 months ago · 维护中 | c |
| [tsxb/CJCallArkTSDemo](https://gitcode.com/tsxb/CJCallArkTSDemo) | — | tsxb | ★ 0 / Fork 0 | 10 months ago · 维护中 | a |
| [tsxb/StockChart](https://gitcode.com/tsxb/StockChart) | — | tsxb | ★ 0 / Fork 0 | 11 months ago · 维护中 | t |
| [tt88tt/cjCli](https://gitcode.com/tt88tt/cjCli) | cli utils for cj | tt88tt | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,t |
| [tt88tt/cjPattern](https://gitcode.com/tt88tt/cjPattern) | Design Pattern | tt88tt | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,p |
| [u012582674/LuckyDrawWheel](https://gitcode.com/u012582674/LuckyDrawWheel) | — | u012582674 | ★ 0 / Fork 0 | 6 months ago · 活跃 | d,l,u,w |
| [u012582674/Windmill](https://gitcode.com/u012582674/Windmill) | 仓颉语言开发，一款可控制风车大小和转速的app。 | u012582674 | ★ 0 / Fork 0 | 10 months ago · 维护中 | u,w |
| [u013107253/CangJieStudy](https://gitcode.com/u013107253/CangJieStudy) | — | u013107253 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,u |
| [u014005316/CangjieMIDI](https://gitcode.com/u014005316/CangjieMIDI) | — | u014005316 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,m,u |
| [ucj/unique](https://gitcode.com/ucj/unique) | 唯一值生成器 | ucj | ★ 0 / Fork 0 | 1 year ago · 低活跃 | u |
| [uiUuu/Acang](https://gitcode.com/uiUuu/Acang) | 这是一个项目 | uiUuu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,u |
| [unravel/canglings](https://gitcode.com/unravel/canglings) | — | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,u |
| [unravel/cjpm_git](https://gitcode.com/unravel/cjpm_git) | 练习仓颉自定义命令。一个自定义的git批量操作命令 | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,u |
| [unravel/仓颉学习博客 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E4%BB%93%E9%A2%89%E5%AD%A6%E4%B9%A0%E5%8D%9A%E5%AE%A2) | — | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,c,Cangjie |
| [unravel/命令行参数解析宏 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=unravel%2F%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%AE%8F) | — | unravel | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,p |
| [valueyou24/cangjie_RBAC_system](https://gitcode.com/valueyou24/cangjie_RBAC_system) | — | valueyou24 | ★ 0 / Fork 0 | 9 months ago · 维护中 | Cangjie,r,s,v |
| [valueyou24/myCangjieProjects](https://gitcode.com/valueyou24/myCangjieProjects) | 仓颉的一些小项目 | valueyou24 | ★ 0 / Fork 0 | 8 months ago · 维护中 | Cangjie,m,p,v |
| [valueyou24/quickSort](https://gitcode.com/valueyou24/quickSort) | — | valueyou24 | ★ 0 / Fork 0 | 8 months ago · 维护中 | q,v |
| [valueyou24/TcpChat](https://gitcode.com/valueyou24/TcpChat) | — | valueyou24 | ★ 0 / Fork 0 | 9 months ago · 维护中 | t |
| [valueyou24/矩阵的并行计算 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=valueyou24%2F%E7%9F%A9%E9%98%B5%E7%9A%84%E5%B9%B6%E8%A1%8C%E8%AE%A1%E7%AE%97) | — | valueyou24 | ★ 0 / Fork 0 | 6 months ago · 活跃 | g,r,u,v |
| [Viper3333333/cj](https://gitcode.com/Viper3333333/cj) | — | Viper3333333 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,v |
| [Viper3333333/E1_XJH103](https://gitcode.com/Viper3333333/E1_XJH103) | — | Viper3333333 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,v,x |
| [wang_lu2/rac](https://gitcode.com/wang_lu2/rac) | — | wang_lu2 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,r |
| [wangle2016/CangjieDemo](https://gitcode.com/wangle2016/CangjieDemo) | — | wangle2016 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,d,w |
| [waomao/waomao_com_cangjie](https://gitcode.com/waomao/waomao_com_cangjie) | — | waomao | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,w |
| [waomao/waomao_com_www_cangjie](https://gitcode.com/waomao/waomao_com_www_cangjie) | — | waomao | ★ 0 / Fork 0 | 10 months ago · 维护中 | Cangjie,w |
| [wei050126/cangjie2](https://gitcode.com/wei050126/cangjie2) | 没有描述 | wei050126 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie |
| [weixin_41024010/HUAWEIDEMO](https://gitcode.com/weixin_41024010/HUAWEIDEMO) | DEMO | weixin_41024010 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,w |
| [weixin_45805642/cjtest](https://gitcode.com/weixin_45805642/cjtest) | — | weixin_45805642 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,w |
| [weixin_53039330/HTTPServer](https://gitcode.com/weixin_53039330/HTTPServer) | HTTP前后端交互 | weixin_53039330 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,w |
| [weixin_73741764/hamster_commander](https://gitcode.com/weixin_73741764/hamster_commander) | — | weixin_73741764 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,w |
| [weixin_73816604/complex-number-calculation](https://gitcode.com/weixin_73816604/complex-number-calculation) | — | weixin_73816604 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,w |
| [weixin_73886306/E61_hzh424](https://gitcode.com/weixin_73886306/E61_hzh424) | — | weixin_73886306 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,w |
| [weixin_73886306/E62_hzh424](https://gitcode.com/weixin_73886306/E62_hzh424) | — | weixin_73886306 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,w |
| [weixin_74194izw/E4_qjw130](https://gitcode.com/weixin_74194izw/E4_qjw130) | — | weixin_74194izw | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,w |
| [wendy_tian/rac](https://gitcode.com/wendy_tian/rac) | — | wendy_tian | ★ 0 / Fork 0 | 1 year ago · 低活跃 | r,t,w |
| [wg-2/wg-second](https://gitcode.com/wg-2/wg-second) | — | wg-2 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,w |
| [whisper815/cangjieproject](https://gitcode.com/whisper815/cangjieproject) | — | whisper815 | ★ 0 / Fork 0 | 5 months ago · 活跃 | w |
| [WHJOY/weighted-kahn-cangjie](https://gitcode.com/WHJOY/weighted-kahn-cangjie) | — | WHJOY | ★ 0 / Fork 0 | 3 months ago · 活跃 | Cangjie,k,w |
| [whn/cangjiework](https://gitcode.com/whn/cangjiework) | 找零计算 | whn | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,w |
| [wimany/十进制转换器-苏州工业园区服务外包职业学院-王译漫-刘小芬 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wimany%2F%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2%E5%99%A8-%E8%8B%8F%E5%B7%9E%E5%B7%A5%E4%B8%9A%E5%9B%AD%E5%8C%BA%E6%9C%8D%E5%8A%A1%E5%A4%96%E5%8C%85%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2-%E7%8E%8B%E8%AF%91%E6%BC%AB-%E5%88%98%E5%B0%8F%E8%8A%AC) | — | wimany | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,l,w |
| [Windy2024/cjgrapht](https://gitcode.com/Windy2024/cjgrapht) | — | Windy2024 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,w |
| [WinRs/MysteriousCangjie](https://gitcode.com/WinRs/MysteriousCangjie) | — | WinRs | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,m,r,w |
| [wn11/cangjie](https://gitcode.com/wn11/cangjie) | — | wn11 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,w |
| [wo_decutcli/frist](https://gitcode.com/wo_decutcli/frist) | — | wo_decutcli | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,f,w |
| [wqkjrhqr/hhha](https://gitcode.com/wqkjrhqr/hhha) | — | wqkjrhqr | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,w |
| [wqkjrhqr/sssda](https://gitcode.com/wqkjrhqr/sssda) | — | wqkjrhqr | ★ 0 / Fork 0 | 2 months ago · 活跃 | s,w |
| [wriosneikos/hamster_commander](https://gitcode.com/wriosneikos/hamster_commander) | — | wriosneikos | ★ 0 / Fork 0 | 5 months ago · 活跃 | h,w |
| [wsxl/百马百瓦-湖北工业大学-礼兴佳-徐承志 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wsxl%2F%E7%99%BE%E9%A9%AC%E7%99%BE%E7%93%A6-%E6%B9%96%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6-%E7%A4%BC%E5%85%B4%E4%BD%B3-%E5%BE%90%E6%89%BF%E5%BF%97) | 百马百瓦 | wsxl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,w |
| [wuwu1q31/mywork](https://gitcode.com/wuwu1q31/mywork) | work | wuwu1q31 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,q,w |
| [Wwwwwzp/batchTrain](https://gitcode.com/Wwwwwzp/batchTrain) | — | Wwwwwzp | ★ 0 / Fork 0 | 10 months ago · 维护中 | b,w |
| [Wwwwwzp/HorizentalAndVerticalScrollingList](https://gitcode.com/Wwwwwzp/HorizentalAndVerticalScrollingList) | — | Wwwwwzp | ★ 0 / Fork 0 | 11 months ago · 维护中 | a,h,s,w |
| [Wwwwwzp/MINIST](https://gitcode.com/Wwwwwzp/MINIST) | — | Wwwwwzp | ★ 0 / Fork 0 | 10 months ago · 维护中 | m,w |
| [wxf1141/曲线拟合 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=wxf1141%2F%E6%9B%B2%E7%BA%BF%E6%8B%9F%E5%90%88) | — | wxf1141 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,p,w |
| [wyh_Creat/hamster_commander](https://gitcode.com/wyh_Creat/hamster_commander) | — | wyh_Creat | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,h,w |
| [X_wuyan/Sudokugenerator](https://gitcode.com/X_wuyan/Sudokugenerator) | 自动生成数独并解题 | X_wuyan | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,x |
| [x-yueliang/Acang](https://gitcode.com/x-yueliang/Acang) | 一个项目 | x-yueliang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,y |
| [x-yueliang/cang](https://gitcode.com/x-yueliang/cang) | 这是第一个项目 | x-yueliang | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,x,y |
| [x1872768065/StudentManager](https://gitcode.com/x1872768065/StudentManager) | — | x1872768065 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,x |
| [X1ANG_0/BookStore](https://gitcode.com/X1ANG_0/BookStore) | 关于BookStore的仓颉移植 | X1ANG_0 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,x |
| [XanPL/ham_com](https://gitcode.com/XanPL/ham_com) | — | XanPL | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,x |
| [xcfly/cangjie](https://gitcode.com/xcfly/cangjie) | 这是我第一个仓颉项目 | xcfly | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,x |
| [xdst/cangjie_tpc_fast](https://gitcode.com/xdst/cangjie_tpc_fast) | — | xdst | ★ 0 / Fork 0 | 5 months ago · 活跃 | c,t,x |
| [Xedokyah/RBTreeMap](https://gitcode.com/Xedokyah/RBTreeMap) | 仓颉编程语言中TreeMap的红黑树实现(非官方) | Xedokyah | ★ 0 / Fork 0 | 11 months ago · 维护中 | m,r,x |
| [xh_gitcode/hamster_commander](https://gitcode.com/xh_gitcode/hamster_commander) | — | xh_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [xiaoaoc/基于仓颉的单词统计工具 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=xiaoaoc%2F%E5%9F%BA%E4%BA%8E%E4%BB%93%E9%A2%89%E7%9A%84%E5%8D%95%E8%AF%8D%E7%BB%9F%E8%AE%A1%E5%B7%A5%E5%85%B7) | — | xiaoaoc | ★ 0 / Fork 0 | 10 months ago · 维护中 | c,w |
| [xiaoSosA/hc](https://gitcode.com/xiaoSosA/hc) | — | xiaoSosA | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,h,s,x |
| [xiaoxuheng/CustomizeKeyboard](https://gitcode.com/xiaoxuheng/CustomizeKeyboard) | 鸿蒙仓颉自定义键盘应用示例 | xiaoxuheng | ★ 0 / Fork 0 | 7 months ago · 维护中 | k,x |
| [xiaoxuheng/DesktopShortcut](https://gitcode.com/xiaoxuheng/DesktopShortcut) | 仓颉鸿蒙桌面快捷方式实例应用 | xiaoxuheng | ★ 0 / Fork 0 | 7 months ago · 维护中 | d,s,x |
| [xiaxue0215/Weather](https://gitcode.com/xiaxue0215/Weather) | — | xiaxue0215 | ★ 0 / Fork 0 | 16 days ago · 活跃 | w,x |
| [XinlongWu/OpenGL4cjTeste](https://gitcode.com/XinlongWu/OpenGL4cjTeste) | — | XinlongWu | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,o,t,w,x |
| [xintechatom/html2markdown](https://gitcode.com/xintechatom/html2markdown) | — | xintechatom | ★ 0 / Fork 0 | 1 month ago · 活跃 | h,x |
| [xiranke/E4_zyf304](https://gitcode.com/xiranke/E4_zyf304) | — | xiranke | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [xiranke/E61_zyf304](https://gitcode.com/xiranke/E61_zyf304) | — | xiranke | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [xixiaodianzhanli/TrainTicket](https://gitcode.com/xixiaodianzhanli/TrainTicket) | — | xixiaodianzhanli | ★ 0 / Fork 0 | 1 month ago · 活跃 | t |
| [xsk226/E1_xsk611](https://gitcode.com/xsk226/E1_xsk611) | — | xsk226 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [xu090/hamster_commander](https://gitcode.com/xu090/hamster_commander) | — | xu090 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x |
| [xuyanlin01/分别根据前序后序-前序中序-中序后序得二叉树-徐岩林-山东科技大学-鲁法明 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=xuyanlin01%2F%E5%88%86%E5%88%AB%E6%A0%B9%E6%8D%AE%E5%89%8D%E5%BA%8F%E5%90%8E%E5%BA%8F-%E5%89%8D%E5%BA%8F%E4%B8%AD%E5%BA%8F-%E4%B8%AD%E5%BA%8F%E5%90%8E%E5%BA%8F%E5%BE%97%E4%BA%8C%E5%8F%89%E6%A0%91-%E5%BE%90%E5%B2%A9%E6%9E%97-%E5%B1%B1%E4%B8%9C%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6-%E9%B2%81%E6%B3%95%E6%98%8E) | 分别根据前序后序-前序中序-中序后序得二叉树-徐岩林-山东科技大学-鲁法明 | xuyanlin01 | ★ 0 / Fork 0 | 7 days ago · 活跃 | b,f,t,x |
| [xuzongmin/codex_skill](https://gitcode.com/xuzongmin/codex_skill) | — | xuzongmin | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,s,x |
| [xuzongmin/DailyPoetryA](https://gitcode.com/xuzongmin/DailyPoetryA) | 每日诗词-仓颉版 | xuzongmin | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,d,p,x |
| [xyer93/sortDemo-cangjie](https://gitcode.com/xyer93/sortDemo-cangjie) | 仓颉实现经典排序算法 | xyer93 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,d,s,x |
| [Y-Z-L/hc](https://gitcode.com/Y-Z-L/hc) | — | Y-Z-L | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,l,y |
| [yangzhiqiang_huawei/DtCov](https://gitcode.com/yangzhiqiang_huawei/DtCov) | — | yangzhiqiang_huawei | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,d,h,y |
| [Yannuonuo/cangjie](https://gitcode.com/Yannuonuo/cangjie) | 这是我的第一个仓颉项目 | Yannuonuo | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,y |
| [YanYeek/hamster_commande](https://gitcode.com/YanYeek/hamster_commande) | 跟视频学习：https://www.bilibili.com/video/BV1Sc2VYkEo9 | YanYeek | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,y |
| [yasuozz6/sort-bench](https://gitcode.com/yasuozz6/sort-bench) | — | yasuozz6 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,s,y |
| [yasuozz6/test-1215](https://gitcode.com/yasuozz6/test-1215) | — | yasuozz6 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | t,y |
| [Ychhhhhhhhh/E2_ych603](https://gitcode.com/Ychhhhhhhhh/E2_ych603) | — | Ychhhhhhhhh | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [yckand/ku](https://gitcode.com/yckand/ku) | 无 | yckand | ★ 0 / Fork 0 | 6 months ago · 活跃 | k,y |
| [yeee17/cangjieApp](https://gitcode.com/yeee17/cangjieApp) | — | yeee17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,Cangjie,y |
| [yff-y/cangjie](https://gitcode.com/yff-y/cangjie) | 这是第一个项目 | yff-y | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,y |
| [yishengTH/coptis](https://gitcode.com/yishengTH/coptis) | 奇怪的项目 | yishengTH | ★ 0 / Fork 0 | 11 months ago · 维护中 | c,t,y |
| [yishengTH/object_pool](https://gitcode.com/yishengTH/object_pool) | 奇怪的项目 | yishengTH | ★ 0 / Fork 0 | 10 months ago · 维护中 | o,p,y |
| [yishengTH/Sepal](https://gitcode.com/yishengTH/Sepal) | — | yishengTH | ★ 0 / Fork 0 | 2 months ago · 活跃 | s,y |
| [yishengTH/TeaAuth](https://gitcode.com/yishengTH/TeaAuth) | 奇怪的项目 | yishengTH | ★ 0 / Fork 0 | 11 months ago · 维护中 | t,y |
| [yk_32201214/PythagoreanTriplet](https://gitcode.com/yk_32201214/PythagoreanTriplet) | 毕达哥拉斯三元组（cangjie实现） | yk_32201214 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,t,y |
| [yongjiejiang/jiangyongjie](https://gitcode.com/yongjiejiang/jiangyongjie) | — | yongjiejiang | ★ 0 / Fork 0 | 1 month ago · 活跃 | j,y |
| [Young242/icu](https://gitcode.com/Young242/icu) | — | Young242 | ★ 0 / Fork 0 | 9 months ago · 维护中 | i,y |
| [youthlin/format.cj](https://gitcode.com/youthlin/format.cj) | printf("Hello, {}! Since{1:5}", "World", 2025) | youthlin | ★ 0 / Fork 0 | 6 months ago · 活跃 | f,y |
| [youthlin/locale.cj](https://gitcode.com/youthlin/locale.cj) | \[Cangjie\] get system default locales. \[仓颉\] 获取系统默认语言。 | youthlin | ★ 0 / Fork 0 | 6 months ago · 活跃 | l,y |
| [ypc_28/MeiWen_Diary](https://gitcode.com/ypc_28/MeiWen_Diary) | 日记 | ypc_28 | ★ 0 / Fork 0 | 10 months ago · 维护中 | d,m,y |
| [Yrugit/HamsterCommander](https://gitcode.com/Yrugit/HamsterCommander) | — | Yrugit | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,y |
| [Yrugit/text_processor](https://gitcode.com/Yrugit/text_processor) | — | Yrugit | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,t,y |
| [ystyle/cjpm-task](https://gitcode.com/ystyle/cjpm-task) | 仓颉声明式任务运行器，灵感来自 go-task。支持 TOML 声明任务和 build.cj 脚本集成两种方式。 | ystyle | ★ 0 / Fork 0 | 1 day ago · 活跃 | c,t,y |
| [ystyle/jsonvalue](https://gitcode.com/ystyle/jsonvalue) | 通用 JSON Value 类型，对标 Rust serde_json::Value。 | ystyle | ★ 0 / Fork 0 | 3 months ago · 活跃 | j,y |
| [yuan0425/cangjie](https://gitcode.com/yuan0425/cangjie) | — | yuan0425 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,y |
| [Yuanwei12/cangjie](https://gitcode.com/Yuanwei12/cangjie) | 这是一个新项目 | Yuanwei12 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [yunting/cirrus-ai](https://gitcode.com/yunting/cirrus-ai) | 采用Cangjie语言开发，集成CangjieMagic的AI服务 | yunting | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,y |
| [yvansl/cangjie](https://gitcode.com/yvansl/cangjie) | — | yvansl | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [yxy060701/codearts](https://gitcode.com/yxy060701/codearts) | — | yxy060701 | ★ 0 / Fork 0 | 3 months ago · 活跃 | c,y |
| [yxy2458818899/cjglfw](https://gitcode.com/yxy2458818899/cjglfw) | — | yxy2458818899 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,y |
| [yyyy17/cangjie](https://gitcode.com/yyyy17/cangjie) | 第一个仓颉 | yyyy17 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | c,Cangjie,y |
| [yzx88/GraphAlgorithms](https://gitcode.com/yzx88/GraphAlgorithms) | 使用仓颉语言实现的最短路径算法（Dijkstra、Floyd、Bellman-Ford、SPFA） | yzx88 | ★ 0 / Fork 0 | 6 days ago · 活跃 | a,g,y |
| [z_futt/Mazy](https://gitcode.com/z_futt/Mazy) | 简单的迷宫生成 | z_futt | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,z |
| [z2632361405/E1_zxs402](https://gitcode.com/z2632361405/E1_zxs402) | — | z2632361405 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [Z2847827155/毕达哥拉斯三元组查找器 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=Z2847827155%2F%E6%AF%95%E8%BE%BE%E5%93%A5%E6%8B%89%E6%96%AF%E4%B8%89%E5%85%83%E7%BB%84%E6%9F%A5%E6%89%BE%E5%99%A8) | 毕达哥拉斯三元组查找器 | Z2847827155 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [zbc1/仓颉 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zbc1%2F%E4%BB%93%E9%A2%89) | — | zbc1 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,z,仓颉 |
| [zbc1/仓颉造字小课堂 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zbc1%2F%E4%BB%93%E9%A2%89%E9%80%A0%E5%AD%97%E5%B0%8F%E8%AF%BE%E5%A0%82) | — | zbc1 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,Cangjie,z,仓颉 |
| [zbohsvj/graduation-design-backup](https://gitcode.com/zbohsvj/graduation-design-backup) | graduation-design-backup | zbohsvj | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,d,g,z |
| [ZhaJunpeng/BestPractice](https://gitcode.com/ZhaJunpeng/BestPractice) | — | ZhaJunpeng | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,c,l,p,z |
| [ZhaJunpeng/MixedUILottie](https://gitcode.com/ZhaJunpeng/MixedUILottie) | — | ZhaJunpeng | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,m,u |
| [ZhaJunpeng/MixedUIMarkDown](https://gitcode.com/ZhaJunpeng/MixedUIMarkDown) | — | ZhaJunpeng | ★ 0 / Fork 0 | 11 months ago · 维护中 | d,j,m,u |
| [zhang_xiao_ning/表白 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zhang_xiao_ning%2F%E8%A1%A8%E7%99%BD) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | zhang_xiao_ning | ★ 0 / Fork 0 | 7 months ago · 维护中 | c,Cangjie,e,x |
| [ZhangHao0921/RationalNumber](https://gitcode.com/ZhangHao0921/RationalNumber) | 有理数定义为两个整数 a 和 b 的商，分别称为分子和分母，其中 b 不等于 0 。本项目简单实现了有理数的加减乘除包括幂运算。 | ZhangHao0921 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,n,r,z |
| [zhangpeng_1424/appDvlpnt](https://gitcode.com/zhangpeng_1424/appDvlpnt) | 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。 | zhangpeng_1424 | ★ 0 / Fork 0 | 8 months ago · 维护中 | a,d |
| [zhangw_yx/hamster_commander](https://gitcode.com/zhangw_yx/hamster_commander) | — | zhangw_yx | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [Zhangxc2923/D_zxc112](https://gitcode.com/Zhangxc2923/D_zxc112) | — | Zhangxc2923 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [zhangyin_gitcode/access_field](https://gitcode.com/zhangyin_gitcode/access_field) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,f,g |
| [zhangyin_gitcode/daily_poetry_hos](https://gitcode.com/zhangyin_gitcode/daily_poetry_hos) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 5 hours ago · 活跃 | d,g,h,p,z |
| [zhangyin_gitcode/datamodel2cj](https://gitcode.com/zhangyin_gitcode/datamodel2cj) | 本项目用于将 DataModel 结构自动转换为仓颉语言的 class 定义。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | d |
| [zhangyin_gitcode/datetime_serialization](https://gitcode.com/zhangyin_gitcode/datetime_serialization) | 提供DateTime的序列化与反序列化。 | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | d,s,z |
| [zhangyin_gitcode/ddd_fundamentals](https://gitcode.com/zhangyin_gitcode/ddd_fundamentals) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 10 months ago · 维护中 | d,f,z |
| [zhangyin_gitcode/gcli_wp](https://gitcode.com/zhangyin_gitcode/gcli_wp) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 3 months ago · 活跃 | g,w |
| [zhangyin_gitcode/gingerfield](https://gitcode.com/zhangyin_gitcode/gingerfield) | 一块出产优质姜的姜田。 | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [zhangyin_gitcode/hc](https://gitcode.com/zhangyin_gitcode/hc) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,h,z |
| [zhangyin_gitcode/mssanitizer_wp](https://gitcode.com/zhangyin_gitcode/mssanitizer_wp) | MindStudio Sanitizer in Cangjie | zhangyin_gitcode | ★ 0 / Fork 0 | 2 months ago · 活跃 | g,m,w,z |
| [zhangyin_gitcode/naivecancellation](https://gitcode.com/zhangyin_gitcode/naivecancellation) | naivecancellation 提供了线程安全的取消令牌机制，用于在仓颉语言中实现协作式取消操作。 | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,n,z |
| [zhangyin_gitcode/naiveconfiguration](https://gitcode.com/zhangyin_gitcode/naiveconfiguration) | 从多种数据源（.env 文件、系统环境变量、JSON）加载配置数据，并提供统一的配置访问接口。 | zhangyin_gitcode | ★ 0 / Fork 0 | 3 months ago · 活跃 | n,z |
| [zhangyin_gitcode/naivehostel_ioc](https://gitcode.com/zhangyin_gitcode/naivehostel_ioc) | 将naiveioc集成到HOS。 | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | g,i,n,z |
| [zhangyin_gitcode/naivejsonschema_wp](https://gitcode.com/zhangyin_gitcode/naivejsonschema_wp) | naivejsonschema 为仓颉语言提供 声明式 JSON Schema 验证能力——将 JSON Schema 编译为验证器，对 JSON 实例执行结构化验证，支持 Draft-04 至 Draft 2020-12 多版本。 | zhangyin_gitcode | ★ 0 / Fork 0 | 2 months ago · 活跃 | g,n,w |
| [zhangyin_gitcode/naivemvvm](https://gitcode.com/zhangyin_gitcode/naivemvvm) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,n |
| [zhangyin_gitcode/naiveteaset_contextaccessor](https://gitcode.com/zhangyin_gitcode/naiveteaset_contextaccessor) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | n |
| [zhangyin_gitcode/naiveteaset_dapr](https://gitcode.com/zhangyin_gitcode/naiveteaset_dapr) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 10 months ago · 维护中 | d,g,n,z |
| [zhangyin_gitcode/naiveteaset_infrastructure](https://gitcode.com/zhangyin_gitcode/naiveteaset_infrastructure) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,i,n,z |
| [zhangyin_gitcode/naiveteaset_ioc](https://gitcode.com/zhangyin_gitcode/naiveteaset_ioc) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,i,n |
| [zhangyin_gitcode/naiveteaset_openapi](https://gitcode.com/zhangyin_gitcode/naiveteaset_openapi) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | g,n,o,z |
| [zhangyin_gitcode/naiveteaset_validation](https://gitcode.com/zhangyin_gitcode/naiveteaset_validation) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 4 months ago · 活跃 | n,v,z |
| [zhangyin_gitcode/naivetui](https://gitcode.com/zhangyin_gitcode/naivetui) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 2 months ago · 活跃 | n |
| [zhangyin_gitcode/opencode_compose_wp](https://gitcode.com/zhangyin_gitcode/opencode_compose_wp) | opencode_compose 是审议式工作流编排工具，通过 TOML 配置定义多步骤 AI agent 工作流，支持审议循环（生产者-审查者迭代）、基于 label 的条件路由和全局轮次迭代。 | zhangyin_gitcode | ★ 0 / Fork 0 | 3 months ago · 活跃 | o,w |
| [zhangyin_gitcode/software_engineering_cangjie](https://gitcode.com/zhangyin_gitcode/software_engineering_cangjie) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 7 months ago · 维护中 | e,g,s,z |
| [zhangyin_gitcode/software_engineering_live_20260205](https://gitcode.com/zhangyin_gitcode/software_engineering_live_20260205) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | e,g,l,s,z |
| [zhangyin_gitcode/the-reverse-proxy-experiment](https://gitcode.com/zhangyin_gitcode/the-reverse-proxy-experiment) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,p,r |
| [zhangyin_gitcode/todatamodel](https://gitcode.com/zhangyin_gitcode/todatamodel) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 5 months ago · 活跃 | g,t,z |
| [zhangyin_gitcode/transparent_bearer_token_handling](https://gitcode.com/zhangyin_gitcode/transparent_bearer_token_handling) | — | zhangyin_gitcode | ★ 0 / Fork 0 | 11 months ago · 维护中 | b,g,h,t |
| [zhangYongFeng110/challenge](https://gitcode.com/zhangYongFeng110/challenge) | 我们拥有有趣的灵魂，应该做一些有趣的事。 | zhangYongFeng110 | ★ 0 / Fork 0 | 4 months ago · 活跃 | c,f,y |
| [zhao0929/ds_code](https://gitcode.com/zhao0929/ds_code) | — | zhao0929 | ★ 0 / Fork 0 | 18 days ago · 活跃 | d |
| [zhaocuinan/仓颉跨语言操作-3-windows-整体练习 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zhaocuinan%2F%E4%BB%93%E9%A2%89%E8%B7%A8%E8%AF%AD%E8%A8%80%E6%93%8D%E4%BD%9C-3-windows-%E6%95%B4%E4%BD%93%E7%BB%83%E4%B9%A0) | — | zhaocuinan | ★ 0 / Fork 0 | 10 months ago · 维护中 | t,w,z,仓颉 |
| [ZhaoJun-zfh/cjf](https://gitcode.com/ZhaoJun-zfh/cjf) | — | ZhaoJun-zfh | ★ 0 / Fork 0 | 1 day ago · 活跃 | c,j,z |
| [zhuguoqian_flora/FLORA](https://gitcode.com/zhuguoqian_flora/FLORA) | 个人仓库 | zhuguoqian_flora | ★ 0 / Fork 0 | 1 month ago · 活跃 | f,z |
| [Zhumengxiang/zhumengxiang](https://gitcode.com/Zhumengxiang/zhumengxiang) | — | Zhumengxiang | ★ 0 / Fork 0 | 1 month ago · 活跃 | z |
| [zjhzlqs/cangjie_oop](https://gitcode.com/zjhzlqs/cangjie_oop) | 这是仓颉面向对象程序设计（初定）教材的示例代码 | zjhzlqs | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,o,z |
| [zjhzlqs/仓颉语言面向对象程序设计教材代码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=zjhzlqs%2F%E4%BB%93%E9%A2%89%E8%AF%AD%E8%A8%80%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%95%99%E6%9D%90%E4%BB%A3%E7%A0%81) | 本书从现代软件工程的实际需求出发，系统地介绍面向对象程序设计的原理、方法和实践技巧。通过对仓颉编程语言的深度解析，全面阐述了面向对象程序设计的核心特征，包括数据封装、继承机制和多态性等关键概念。本书注重理论与实践相结合，重点突出，叙述清晰，深入浅出，论述详尽，旨在帮助读者既深刻理解面向对象程序设计的思想精髓，又能熟练掌握仓颉语言的面向对象编程技术与实际应用… | zjhzlqs | ★ 0 / Fork 0 | 8 days ago · 活跃 | z,仓颉 |
| [ZUT_仓颉/111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/1456789 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F1456789) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z,仓颉 |
| [ZUT_仓颉/backtracking 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fbacktracking) | 回溯是一种暴力搜索 + 剪枝优化的深度优先算法思想，本质是尝试、选择、往前走；走不通就退回、撤销选择、换条路。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,Cangjie,z,仓颉 |
| [ZUT_仓颉/BFS遍历图 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBFS%E9%81%8D%E5%8E%86%E5%9B%BE) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,g,t,z |
| [ZUT_仓颉/BigWork_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBigWork_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,w,y,z |
| [ZUT_仓颉/bm_search 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fbm_search) | 可用于高效进行字符串匹配操作。该项目精简实现了Boyer-Moore算法，核心包含手动计算字符串长度、算法核心搜索（返回匹配起始索引）及批量测试验证功能，相比暴力匹配能跳过大量无效比较，效率极高。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,Cangjie,s,z,仓颉 |
| [ZUT_仓颉/BogoSort 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBogoSort) | 仓颉语言实现5字符数组的猴子排序 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | b,Cangjie,s,z,仓颉 |
| [ZUT_仓颉/Boruvka算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBoruvka%E7%AE%97%E6%B3%95) | Boruvka算法（最小生成树） | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z |
| [ZUT_仓颉/BranchandBoundwithPruning 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FBranchandBoundwithPruning) | 可用于高效求解0/1背包问题，在不超重前提下获取最大总价值。核心功能包括解空间树构建、上界函数计算与剪枝，采用最佳优先搜索策略，通过优先队列优化搜索效率，平均时间复杂度远优于暴力枚举。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,p,z |
| [ZUT_仓颉/B树插入删除 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FB%E6%A0%91%E6%8F%92%E5%85%A5%E5%88%A0%E9%99%A4) | 实现B树的插入，删除等操作 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,h,仓颉 |
| [ZUT_仓颉/cangjie-number-sort 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fcangjie-number-sort) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | n,s |
| [ZUT_仓颉/ChatSoftware 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FChatSoftware) | 仓颉语言实现的简易聊天软件 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,s,t,z,仓颉 |
| [ZUT_仓颉/chengji 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fchengji) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,仓颉 |
| [ZUT_仓颉/cjxiangmu 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fcjxiangmu) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,Cangjie,仓颉 |
| [ZUT_仓颉/D_108dyl 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_108dyl) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/D_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_DAUZUOYYYYY 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_DAUZUOYYYYY) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_dzy236 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_dzy236) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_gcl_127) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,z,仓颉 |
| [ZUT_仓颉/D_gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g |
| [ZUT_仓颉/D_gyf424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_gyf424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,g,z,仓颉 |
| [ZUT_仓颉/D_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,z |
| [ZUT_仓颉/D_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h,仓颉 |
| [ZUT_仓颉/D_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h,仓颉 |
| [ZUT_仓颉/D_hzh424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_hzh424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,h,仓颉 |
| [ZUT_仓颉/D_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_jmc335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,j,仓颉 |
| [ZUT_仓颉/D_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,j,仓颉 |
| [ZUT_仓颉/D_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z |
| [ZUT_仓颉/D_LGY435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_LGY435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/D_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lhx134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z |
| [ZUT_仓颉/D_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/D_LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z,仓颉 |
| [ZUT_仓颉/D_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z,仓颉 |
| [ZUT_仓颉/D_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/D_LSH420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_LSH420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/D_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z |
| [ZUT_仓颉/D_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z |
| [ZUT_仓颉/D_lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,z |
| [ZUT_仓颉/D_lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l |
| [ZUT_仓颉/D_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,m,仓颉 |
| [ZUT_仓颉/D_nbx513 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_nbx513) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,n,z |
| [ZUT_仓颉/D_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,p,z,仓颉 |
| [ZUT_仓颉/D_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,q |
| [ZUT_仓颉/D_QZY207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_QZY207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,q,z,仓颉 |
| [ZUT_仓颉/D_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,s,z,仓颉 |
| [ZUT_仓颉/D_sty711 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_sty711) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | d,z |
| [ZUT_仓颉/D_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_tmy233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,z,仓颉 |
| [ZUT_仓颉/D_WCX202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_WCX202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z,仓颉 |
| [ZUT_仓颉/D_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,仓颉 |
| [ZUT_仓颉/D_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,仓颉 |
| [ZUT_仓颉/D_wjl308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wjl308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z,仓颉 |
| [ZUT_仓颉/D_wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | t,w,仓颉 |
| [ZUT_仓颉/D_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z |
| [ZUT_仓颉/D_wx231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wx231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_wyg617 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wyg617) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,w,z |
| [ZUT_仓颉/D_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [ZUT_仓颉/D_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,x,z |
| [ZUT_仓颉/D_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/D_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,y |
| [ZUT_仓颉/D_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,y,仓颉 |
| [ZUT_仓颉/D_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ysr105) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_ZJR125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_ZJR125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,m,z |
| [ZUT_仓颉/D_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/D_zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D_zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/D_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/D--lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD--lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/D-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,g,仓颉 |
| [ZUT_仓颉/D-lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FD-lh114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,l,仓颉 |
| [ZUT_仓颉/demo1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fdemo1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/dzy_byh236 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fdzy_byh236) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,d,z |
| [ZUT_仓颉/DZY_czy331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_czy331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/DZY_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,f,z,仓颉 |
| [ZUT_仓颉/DZY_nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,仓颉 |
| [ZUT_仓颉/DZY_zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FDZY_zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/dzy-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fdzy-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/E_1zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_1zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E_2zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_2zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E_3_WKY108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_3_WKY108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E_3nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_3nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E_3zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_3zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_czp227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E_YZX640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE_YZX640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E1________zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1________zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E1_____zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_____zwy135) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1___ln111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1___ln111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E1__lgy435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1__lgy435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E1__lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1__lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E1__lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1__lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1__zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1__zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1_byh 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_byh) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,z,仓颉 |
| [ZUT_仓颉/E1_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E1_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_cxl 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_cxl) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_cya218) | cangjie作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_czy331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_czy331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_d136 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_d136) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,仓颉 |
| [ZUT_仓颉/E1_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/E1_dsy234 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_dsy234) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,z,仓颉 |
| [ZUT_仓颉/E1_dsy234_2 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_dsy234_2) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e |
| [ZUT_仓颉/E1_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z |
| [ZUT_仓颉/E1_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_gcl_127) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E1_gyf424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_gyf424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g,z |
| [ZUT_仓颉/E1_GYL626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_GYL626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E1_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,仓颉 |
| [ZUT_仓颉/E1_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,仓颉 |
| [ZUT_仓颉/E1_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1_jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,l,z,仓颉 |
| [ZUT_仓颉/E1_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_jmc335) | 提交作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,z,仓颉 |
| [ZUT_仓颉/E1_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,z,仓颉 |
| [ZUT_仓颉/E1_Laz000 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_Laz000) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E1_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lcg101) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z,仓颉 |
| [ZUT_仓颉/E1_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1_lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lh114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E1_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lhx134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E1_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E1_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1_lqh433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lqh433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E1_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ls540) | 输出"Hello World" | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E1_lsh420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lsh420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E1_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E1_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_lxy102) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E1_Lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_Lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_mcl220) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,仓颉 |
| [ZUT_仓颉/E1_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [ZUT_仓颉/E1_nbx513 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_nbx513) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n,z,仓颉 |
| [ZUT_仓颉/E1_nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | n,z,仓颉 |
| [ZUT_仓颉/E1_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p,仓颉 |
| [ZUT_仓颉/E1_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,z |
| [ZUT_仓颉/E1_QZY207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_QZY207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z,仓颉 |
| [ZUT_仓颉/E1_SDX605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_SDX605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,z,仓颉 |
| [ZUT_仓颉/E1_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,z,仓颉 |
| [ZUT_仓颉/E1_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_syh329) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,仓颉 |
| [ZUT_仓颉/E1_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t,仓颉 |
| [ZUT_仓颉/E1_WCH336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_WCH336) | 第一次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E1_wcx202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wcx202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E1_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_Whx4132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_Whx4132) | helloworld | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E1_WJJ132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_WJJ132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E1_wjl308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wjl308) | 仓颉程序设计 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,w,z |
| [ZUT_仓颉/E1_wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E1_wqj334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wqj334) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z,仓颉 |
| [ZUT_仓颉/E1_WT101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_WT101) | cangjie代码仓 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z |
| [ZUT_仓颉/E1_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E1_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z |
| [ZUT_仓颉/E1_wx231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wx231) | cangjie作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E1_wxy201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wxy201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E1_wyq412 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wyq412) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E1_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E1_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,仓颉 |
| [ZUT_仓颉/E1_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E1_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x |
| [ZUT_仓颉/E1_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_yb113) | cangjie作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [ZUT_仓颉/E1_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E1_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ygc235) | 用于交作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E1_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E1_YL104_2 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_YL104_2) | 第一次提交设置为了私有，无法更改，此为二次提交 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E1_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E1_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ysr105) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1_YZX640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_YZX640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E1_ZJR25 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_ZJR25) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E1_zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E1_zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E1--jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1--jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E1-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E1-gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1-gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E1-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1-lxy105) | 作业1 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E1-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E1gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE1gzw109) | 项目实现了以下功能： 1. 常量定义 ：定义了 PI（圆周率）和 MAX_COUNT（最大计数）两个常量 2. 变量定义 ：定义了 sum（求和变量）和 message（消息变量）两个变量 3. 信息输出 ：输出欢迎信息和常量值 4. 求和计算 ：计算 1 到 MAX_COUNT 的和 5. 结果输出 ：输出计算结果 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,仓颉 |
| [ZUT_仓颉/E2_____zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_____zwy135) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E2___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2___zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2___zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2__lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2__lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2__lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2__lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2__ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2__ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,仓颉 |
| [ZUT_仓颉/E2__zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2__zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E2_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a |
| [ZUT_仓颉/E2_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_czp227) | 计算一下100的-3次方，并输出 使用数组，编程实现卷积运算，关于卷积请查询相关资料 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2_czy331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_czy331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E2_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,z |
| [ZUT_仓颉/E2_dkx136 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_dkx136) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z |
| [ZUT_仓颉/E2_dyl108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_dyl108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/E2_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,仓颉 |
| [ZUT_仓颉/E2_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,z,仓颉 |
| [ZUT_仓颉/E2_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_gcl_127) | 作业2： 1.计算一下100的-3次方，并输出 2.使用数组，编程实现卷积运算，关于卷积请查询相关资料 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,仓颉 |
| [ZUT_仓颉/E2_gyf424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_gyf424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,e,g,z,仓颉 |
| [ZUT_仓颉/E2_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z,仓颉 |
| [ZUT_仓颉/E2_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g,z,仓颉 |
| [ZUT_仓颉/E2_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,z |
| [ZUT_仓颉/E2_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,z |
| [ZUT_仓颉/E2_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lcg101) | 第二次作业：计算100的三次方并取倒数 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z,仓颉 |
| [ZUT_仓颉/E2_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_LGY435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_LGY435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lh114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E2_lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_lhx134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lhx134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E2_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E2_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E2_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ls540) | 计算一下100的-3次方，并输出 使用数组，编程实现卷积运算，关于卷积请查询相关资料 实现一个计算向量乘法的运算符(可以自学运算符重载) | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E2_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_Lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_Lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_lxy102) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_LYY416) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E2_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_mcl220) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,z |
| [ZUT_仓颉/E2_nbx513 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_nbx513) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n,仓颉 |
| [ZUT_仓颉/E2_nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n |
| [ZUT_仓颉/E2_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q |
| [ZUT_仓颉/E2_QZY207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_QZY207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z |
| [ZUT_仓颉/E2_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,z,仓颉 |
| [ZUT_仓颉/E2_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,z,仓颉 |
| [ZUT_仓颉/E2_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_syh329) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | s,仓颉 |
| [ZUT_仓颉/E2_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_tmy233) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t,仓颉 |
| [ZUT_仓颉/E2_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t |
| [ZUT_仓颉/E2_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wch336) | 第二次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E2_WCX202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_WCX202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E2_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2_wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E2_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_WQJ334) | E2_WQJ334 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,仓颉 |
| [ZUT_仓颉/E2_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E2_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E2_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E2_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z,仓颉 |
| [ZUT_仓颉/E2_wyg617 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wyg617) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E2_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [ZUT_仓颉/E2_xsk611 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_xsk611) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,z,仓颉 |
| [ZUT_仓颉/E2_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z,仓颉 |
| [ZUT_仓颉/E2_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_YL104) | 第二次提交 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E2_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E2_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_ysr105) | 第二次作业，选择的 1.求100的-3次方，并输出 2.使用数组，编程实现卷积运算，关于卷积请查询相关资料 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E2_zjr125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zjr125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_Zsb302) | 1、计算100的-3次幂 2、利用数组实现一维卷积运算 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E2_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E2_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E2_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2--wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2--wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E2-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,z |
| [ZUT_仓颉/E2-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,仓颉 |
| [ZUT_仓颉/E2-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-lxy105) | 作业2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E2-wyb624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-wyb624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2-YZX40 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-YZX40) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E2-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E2-zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE2-zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E3___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3___zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3___zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3__LGY435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__LGY435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3__lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E3__lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E3__ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,仓颉 |
| [ZUT_仓颉/E3__zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3__zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e,z,仓颉 |
| [ZUT_仓颉/E3_byh236. 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_byh236.) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,z,仓颉 |
| [ZUT_仓颉/E3_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_cxl225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_cxl225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E3_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E3_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_czp227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E3_CZY331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_CZY331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,z |
| [ZUT_仓颉/E3_dkx136 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_dkx136) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,z,仓颉 |
| [ZUT_仓颉/E3_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_FY103) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E3_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z |
| [ZUT_仓颉/E3_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [ZUT_仓颉/E3_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,e,g,仓颉 |
| [ZUT_仓颉/E3_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z,仓颉 |
| [ZUT_仓颉/E3_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,z |
| [ZUT_仓颉/E3_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,z |
| [ZUT_仓颉/E3_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_jmc335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,仓颉 |
| [ZUT_仓颉/E3_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lcg101) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3_lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E3_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E3_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E3_LSH420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_LSH420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E3_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E3_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_lxy102) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E3_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_LYY416) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3_MCL220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_MCL220) | 第三次作业：输入和输出各种基本类型的Demo程序 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,z,仓颉 |
| [ZUT_仓颉/E3_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [ZUT_仓颉/E3_nbx513 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_nbx513) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n,z |
| [ZUT_仓颉/E3_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_pjf233) | 第三次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,p,仓颉 |
| [ZUT_仓颉/E3_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z |
| [ZUT_仓颉/E3_qzy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_qzy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z |
| [ZUT_仓颉/E3_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,z |
| [ZUT_仓颉/E3_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E3_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_syh329) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E3_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_tmy233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,t |
| [ZUT_仓颉/E3_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_WCX202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_WCX202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z |
| [ZUT_仓颉/E3_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E3_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E3_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_WQJ334) | E3_WQJ334 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,仓颉 |
| [ZUT_仓颉/E3_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E3_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E3_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E3_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,仓颉 |
| [ZUT_仓颉/E3_wyg617 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wyg617) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,仓颉 |
| [ZUT_仓颉/E3_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E3_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E3_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,仓颉 |
| [ZUT_仓颉/E3_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z,仓颉 |
| [ZUT_仓颉/E3_xsk611 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_xsk611) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [ZUT_仓颉/E3_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x |
| [ZUT_仓颉/E3_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E3_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_yb113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E3_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E3_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E3_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E3_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_YL104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,仓颉 |
| [ZUT_仓颉/E3_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E3_zjr125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zjr125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E3_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E3_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E3-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,仓颉 |
| [ZUT_仓颉/E3-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3-lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-lh114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E3-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-lxy105) | 作业3 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3-wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E3-wyb624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-wyb624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,仓颉 |
| [ZUT_仓颉/E3-YZX640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-YZX640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/e3-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fe3-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E3-zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE3-zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E4____zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4____zwy135) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E4___zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4___zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4__DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__DS106) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4__LGY435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__LGY435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4__lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4__lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__lyr128) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E4__zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4__zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e,z,仓颉 |
| [ZUT_仓颉/E4_byh236 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_byh236) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_czp227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_czy331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_czy331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e |
| [ZUT_仓颉/E4_dlx104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_dlx104) | 作业4：贪心算法的钱币找零问题 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,e,z |
| [ZUT_仓颉/E4_dyl108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_dyl108) | 快排，初始化国际象棋的初始布局。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d |
| [ZUT_仓颉/E4_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f |
| [ZUT_仓颉/E4_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,仓颉 |
| [ZUT_仓颉/E4_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_gcl_127) | 作业4： 编写实现一个函数chessBoard，根据棋局输出国际象棋的局面。给一个8×8字符数组表示棋局，初始化为国际象棋的初始布局。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [ZUT_仓颉/E4_gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z |
| [ZUT_仓颉/E4_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E4_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,e,g,z |
| [ZUT_仓颉/E4_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,z |
| [ZUT_仓颉/E4_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,z |
| [ZUT_仓颉/E4_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,z |
| [ZUT_仓颉/E4_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_jmc335) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,z |
| [ZUT_仓颉/E4_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,仓颉 |
| [ZUT_仓颉/E4_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E4_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E4_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_LSH410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_LSH410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E4_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E4_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E4_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E4_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lxy102) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E4_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_LYY416) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E4_lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E4_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_mcl220) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,仓颉 |
| [ZUT_仓颉/E4_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,z,仓颉 |
| [ZUT_仓颉/E4_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,z,仓颉 |
| [ZUT_仓颉/E4_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,p,z |
| [ZUT_仓颉/E4_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z,仓颉 |
| [ZUT_仓颉/E4_qzy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_qzy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q |
| [ZUT_仓颉/E4_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E4_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_tmy233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wch336) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_WCX202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_WCX202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z |
| [ZUT_仓颉/E4_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E4_WKY108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_WKY108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z |
| [ZUT_仓颉/E4_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_WQJ334) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E4_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E4_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E4_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_wxy201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wxy201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E4_wyg617 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wyg617) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z,仓颉 |
| [ZUT_仓颉/E4_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E4_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E4_xsk611 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_xsk611) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E4_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,z,仓颉 |
| [ZUT_仓颉/E4_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_yb113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E4_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E4_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E4_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_YL104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E4_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [ZUT_仓颉/E4_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_ysr105) | 第四次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E4_zjr125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zjr125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E4_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E4-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,z,仓颉 |
| [ZUT_仓颉/E4-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j |
| [ZUT_仓颉/E4-lh114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-lh114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E4-lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E4-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-lxy105) | 作业4 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E4-wyb624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-wyb624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E4-zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE4-zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5____zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5____zwy135) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E5___zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5___zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5__DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5__DS106) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5__lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5__lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E5__yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5__yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E5__zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5__zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e |
| [ZUT_仓颉/E5_byh236 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_byh236) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_czp227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_czy331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_czy331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,仓颉 |
| [ZUT_仓颉/E5_DSY234 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_DSY234) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f |
| [ZUT_仓颉/E5_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_gcl_127) | 作业5： 要求： 1.定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 2.发票也可以替换成其他的类，但是要求成员数据不少于5个，数据类型要不少于3种，尽量结合实际。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E5_gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E5_gyf424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_gyf424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,z |
| [ZUT_仓颉/E5_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [ZUT_仓颉/E5_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g,z,仓颉 |
| [ZUT_仓颉/E5_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,z |
| [ZUT_仓颉/E5_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h |
| [ZUT_仓颉/E5_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_jmc335) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,仓颉 |
| [ZUT_仓颉/E5_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,仓颉 |
| [ZUT_仓颉/E5_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lcg101) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E5_LGY435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_LGY435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E5_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E5_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E5_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ls540) | 作业5： 要求： 定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 发票也可以替换成其他的类，但是要求成员数据不少于5个，数据类型要不少于3种，尽量结合实际。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E5_LSH420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_LSH420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E5_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E5_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lxy102) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5_lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z,仓颉 |
| [ZUT_仓颉/E5_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_mcl220) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,仓颉 |
| [ZUT_仓颉/E5_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,仓颉 |
| [ZUT_仓颉/E5_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_mzs414) | 定义一个发票类，包括具体信息参考真实发票。使用一个链表ArrayList管理若干张发票，能够进行基本的增删改查操作。 发票也可以替换成其他的类，但是要求成员数据不少于5个，数据类型要不少于3种，尽量结合实际。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | p |
| [ZUT_仓颉/E5_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_qjw130) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z |
| [ZUT_仓颉/E5_qzy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_qzy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,仓颉 |
| [ZUT_仓颉/E5_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,仓颉 |
| [ZUT_仓颉/E5_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_syh329) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_tmy233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wch336) | 第五次仓颉作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,w,z,仓颉 |
| [ZUT_仓颉/E5_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z,仓颉 |
| [ZUT_仓颉/E5_WKY108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_WKY108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E5_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_WQJ334) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E5_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E5_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E5_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E5_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z,仓颉 |
| [ZUT_仓颉/E5_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E5_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,仓颉 |
| [ZUT_仓颉/E5_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,仓颉 |
| [ZUT_仓颉/E5_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E5_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_yb113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,仓颉 |
| [ZUT_仓颉/E5_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z,仓颉 |
| [ZUT_仓颉/E5_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E5_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,仓颉 |
| [ZUT_仓颉/E5_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_YL104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E5_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ysr105) | 第五次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5_yzx640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_yzx640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E5_ZJR125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_ZJR125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E5_zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E5_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E5_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E5_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E5-cxl225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-cxl225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z |
| [ZUT_仓颉/E5-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,仓颉 |
| [ZUT_仓颉/E5-lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E5-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-lxy105) | 作业5 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E5-WYB624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-WYB624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/e5-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fe5-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E5-zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE5-zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E6___zjj134 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6___zjj134) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6_1nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_1nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E6_ay118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_ay118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | a,e,仓颉 |
| [ZUT_仓颉/E6_byh236 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_byh236) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,e |
| [ZUT_仓颉/E6_byh236_1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_byh236_1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | b,e |
| [ZUT_仓颉/E6_czp227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_czp227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f,z |
| [ZUT_仓颉/E6_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_gcl_127) | 作业6： 1. 在仓颉中，目前不支持两个字符串相加拼接，请重载运算+，使其可以进行字符串相加，以及字符串和其他基本类型拼接 如： “abc”+“efg” 结果为 abcefg 3 + “abc” 结果为 3abc “abcd” + 6.8 结果为 abcd6.8 学习链接：https://cangjie-lang.cn/docs?url=%2F0.53.1… | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,g |
| [ZUT_仓颉/E6_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | j,z,仓颉 |
| [ZUT_仓颉/E6_LQH433 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_LQH433) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E6_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E6_lxc108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_lxc108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6_lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E6_LYY416 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_LYY416) | 第六次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E6_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,p |
| [ZUT_仓颉/E6_qzy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_qzy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z,仓颉 |
| [ZUT_仓颉/E6_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E6_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_syh329) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E6_wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E6_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [ZUT_仓颉/E6_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,仓颉 |
| [ZUT_仓颉/E6_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z |
| [ZUT_仓颉/E6_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_YL104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E6_yzx640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_yzx640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6_zjr125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_zjr125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6_zyy112 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_zyy112) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E6_zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E6_zzy632 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6_zzy632) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E6-1_WKY108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6-1_WKY108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E6-2_sdx605 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6-2_sdx605) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E6-cxl225-1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6-cxl225-1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E6-cxl225-2 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6-cxl225-2) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E6-WYB624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE6-WYB624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/e6-zhy301 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fe6-zhy301) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E61___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61__DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61__DS106) | 公开版 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,仓颉 |
| [ZUT_仓颉/E61__lgy435 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61__lgy435) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E61_108dyl 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_108dyl) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E61_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E61_CZY331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_CZY331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_DSY234 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_DSY234) | 第六次作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E61_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f |
| [ZUT_仓颉/E61_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_gcl_127) | 作业6：1. 在仓颉中，目前不支持两个字符串相加拼接，请重载运算+，使其可以进行字符串相加，以及字符串和其他基本类型拼接 如： “abc”+“efg” 结果为 abcefg 3 + “abc” 结果为 3abc “abcd” + 6.8 结果为 abcd6.8 学习链接：https://cangjie-lang.cn/docs?url=%2F0.53.18… | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,g,z |
| [ZUT_仓颉/E61_gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E61_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g |
| [ZUT_仓颉/E61_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,e,g,z,仓颉 |
| [ZUT_仓颉/E61_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,仓颉 |
| [ZUT_仓颉/E61_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,h,仓颉 |
| [ZUT_仓颉/E61_hyh130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_hyh130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [ZUT_仓颉/E61_hzh424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_hzh424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,z,仓颉 |
| [ZUT_仓颉/E61_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_jmc335) | 第六次作业一 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j |
| [ZUT_仓颉/E61_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lcg101) | 第六次作业1 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E61_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E61_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E61_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E61_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E61_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ls540) | 在仓颉中，目前不支持两个字符串相加拼接，请重载运算+，使其可以进行字符串相加，以及字符串和其他基本类型拼接 如： “abc”+“efg” 结果为 abcefg 3 + “abc” 结果为 3abc “abcd” + 6.8 结果为 abcd6.8 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E61_LSH420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_LSH420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E61_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E61_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E61_lxy101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lxy101) | 第六次作业1 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E61_lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lyr128) | 在仓颉中，目前不支持两个字符串相加拼接，请重载运算+，使其可以进行字符串相加，以及字符串和其他基本类型拼接 如： “abc”+“efg” 结果为 abcefg 3 + “abc” 结果为 3abc “abcd” + 6.8 结果为 abcd6.8 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,z,仓颉 |
| [ZUT_仓颉/E61_lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_mcl220) | 第六次作业1 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,z,仓颉 |
| [ZUT_仓颉/E61_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,z,仓颉 |
| [ZUT_仓颉/E61_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,仓颉 |
| [ZUT_仓颉/E61_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s |
| [ZUT_仓颉/E61_sws322 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_sws322) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E61_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E61_wch336 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wch336) | 第六次仓颉作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,w,z,仓颉 |
| [ZUT_仓颉/E61_wcx202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wcx202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z,仓颉 |
| [ZUT_仓颉/E61_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E61_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E61_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_WQJ334) | E61_WQJ334 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E61_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E61_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E61_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E61_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E61_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z,仓颉 |
| [ZUT_仓颉/E61_wyg617 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wyg617) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E61_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E61_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [ZUT_仓颉/E61_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E61_xsk611 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_xsk611) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,z |
| [ZUT_仓颉/E61_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_yb113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y |
| [ZUT_仓颉/E61_yck335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_yck335) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [ZUT_仓颉/E61_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E61_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E61_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_ysr105) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y |
| [ZUT_仓颉/E61_zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E61_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E61_zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zwy135) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E61_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E61_zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61_zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E61-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,仓颉 |
| [ZUT_仓颉/E61-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E61-lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61-lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E61-lxy105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE61-lxy105) | 作业61 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E62___LN111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62___LN111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,z |
| [ZUT_仓颉/E62__DS106 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62__DS106) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | d,e,z,仓颉 |
| [ZUT_仓颉/E62__LGY435_ 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62__LGY435_) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62_ck507 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ck507) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62_cya218 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_cya218) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E62_CZY331 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_CZY331) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E62_DHJ129 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_DHJ129) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62_DSY234 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_DSY234) | 第六次作业2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E62_FY103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_FY103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | f |
| [ZUT_仓颉/E62_fyz107 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_fyz107) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,仓颉 |
| [ZUT_仓颉/E62_gcl_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_gcl_127) | 作业6： 2.学习一下仓颉中的多线程，使用多线程编程模拟经典的生产者-消费者问题 学习链接：https://cangjie-lang.cn/docs?url=%2F0.53.18%2Fuser_manual%2Fsource_zh_cn%2Fconcurrency%2Fconcurrency_overview.html | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,g |
| [ZUT_仓颉/E62_gww429 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_gww429) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z,仓颉 |
| [ZUT_仓颉/E62_gyf424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_gyf424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,g,z |
| [ZUT_仓颉/E62_gyl626 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_gyl626) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g |
| [ZUT_仓颉/E62_gzw109 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_gzw109) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,z,仓颉 |
| [ZUT_仓颉/E62_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,z |
| [ZUT_仓颉/E62_hbc238 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_hbc238) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [ZUT_仓颉/E62_hyh 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_hyh) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h |
| [ZUT_仓颉/E62_hzh424 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_hzh424) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E62_jmc335 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_jmc335) | 第六次作业二 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,z,仓颉 |
| [ZUT_仓颉/E62_jyh314 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_jyh314) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,j,z,仓颉 |
| [ZUT_仓颉/E62_lcg101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lcg101) | 第六次作业2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_lcs434 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lcs434) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_ljl239 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ljl239) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E62_ljl315 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ljl315) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E62_lps113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lps113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l |
| [ZUT_仓颉/E62_ls540 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ls540) | 使用多线程编程模拟经典的生产者-消费者问题 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E62_LSH420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_LSH420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E62_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E62_lxt317 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lxt317) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_lxy102 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lxy102) | 第六次作业2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E62_lym410 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lym410) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E62_lyr128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lyr128) | 学习一下仓颉中的多线程，使用多线程编程模拟经典的生产者-消费者问题 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,l,z,仓颉 |
| [ZUT_仓颉/E62_lzx423 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_lzx423) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l |
| [ZUT_仓颉/E62_mcl220 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_mcl220) | 第六次作业2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m,仓颉 |
| [ZUT_仓颉/E62_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,仓颉 |
| [ZUT_仓颉/E62_mzs414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_mzs414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,m |
| [ZUT_仓颉/E62_nbx513 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_nbx513) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n,z,仓颉 |
| [ZUT_仓颉/E62_pjf233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_pjf233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,p,z |
| [ZUT_仓颉/E62_qjw130 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_qjw130) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | q,z,仓颉 |
| [ZUT_仓颉/E62_QZY207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_QZY207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,q,z,仓颉 |
| [ZUT_仓颉/E62_sln226 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_sln226) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E62_syh329 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_syh329) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,s,z |
| [ZUT_仓颉/E62_tmy233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_tmy233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z,仓颉 |
| [ZUT_仓颉/E62_tqs123 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_tqs123) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | t,z |
| [ZUT_仓颉/E62_WCX202 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_WCX202) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w,z,仓颉 |
| [ZUT_仓颉/E62_wh231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wh231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E62_wjj132 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wjj132) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E62_wky108 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wky108) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E62_WQJ334 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_WQJ334) | 第二个作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_wt101 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wt101) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E62_wtx103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wtx103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E62_wwl114 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wwl114) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w |
| [ZUT_仓颉/E62_WX231 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_WX231) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,仓颉 |
| [ZUT_仓颉/E62_WXY201 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_WXY201) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,w,z |
| [ZUT_仓颉/E62_wyy111 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wyy111) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E62_wzp115 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_wzp115) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_XJH103 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_XJH103) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x |
| [ZUT_仓颉/E62_xjh332 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_xjh332) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x,仓颉 |
| [ZUT_仓颉/E62_XWT119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_XWT119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,x |
| [ZUT_仓颉/E62_yb113 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_yb113) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,仓颉 |
| [ZUT_仓颉/E62_ych603 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ych603) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,仓颉 |
| [ZUT_仓颉/E62_ygc235 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ygc235) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E62_ykx403 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ykx403) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z,仓颉 |
| [ZUT_仓颉/E62_YL104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_YL104) | 第六次仓颉作业（任务2 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | Cangjie,e,z |
| [ZUT_仓颉/E62_ypj313 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ypj313) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_ysr105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ysr105) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | y,z |
| [ZUT_仓颉/E62_yzx640 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_yzx640) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,y,z,仓颉 |
| [ZUT_仓颉/E62_ZJR125 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_ZJR125) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E62_zky203 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zky203) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E62_zry225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zry225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62_Zsb302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_Zsb302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [ZUT_仓颉/E62_zwy135 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zwy135) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62_zxs402 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zxs402) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E62_zyf304 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zyf304) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62_zzh302 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zzh302) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z,仓颉 |
| [ZUT_仓颉/E62_zzh308 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62_zzh308) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [ZUT_仓颉/E62-gsh104 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-gsh104) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,g,z |
| [ZUT_仓颉/E62-jcq229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-jcq229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/E62-lh118 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-lh118) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | l,仓颉 |
| [ZUT_仓颉/E62-LXY105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-LXY105) | 作业62 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,z |
| [ZUT_仓颉/E62-nhy207 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-nhy207) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,n |
| [ZUT_仓颉/E62-WYB624 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE62-WYB624) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | w |
| [ZUT_仓颉/E7_lsj420 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_lsj420) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,l,仓颉 |
| [ZUT_仓颉/E7_xwt119 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_xwt119) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/E7_xwx409 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7_xwx409) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | x,z |
| [ZUT_仓颉/E7-cxl225 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FE7-cxl225) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e |
| [ZUT_仓颉/Eqimo_ch240 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FEqimo_ch240) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,仓颉 |
| [ZUT_仓颉/extend_gcd 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fextend_gcd) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,e,g,z |
| [ZUT_仓颉/FFT 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FFFT) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,f,z |
| [ZUT_仓颉/FibonacciSearch算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FFibonacciSearch%E7%AE%97%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,f,s,z,仓颉 |
| [ZUT_仓颉/Floyd-Warshall 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FFloyd-Warshall) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,f,w,z |
| [ZUT_仓颉/Hopcroft_Karp算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FHopcroft_Karp%E7%AE%97%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,k,z,仓颉 |
| [ZUT_仓颉/KMP算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FKMP%E7%AE%97%E6%B3%95) | 仓颉语言实现KMP算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,k,z,仓颉 |
| [ZUT_仓颉/KnapsackProblem 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FKnapsackProblem) | 背包问题 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,k,p,z,仓颉 |
| [ZUT_仓颉/Kruskal算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FKruskal%E7%AE%97%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,k,仓颉 |
| [ZUT_仓颉/LCA-l 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FLCA-l) | LCA（最近公共祖先） | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,l,z,仓颉 |
| [ZUT_仓颉/LCS 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FLCS) | 最大公共子序列 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,l,仓颉 |
| [ZUT_仓颉/MineSweep 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FMineSweep) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,g,m,s,仓颉 |
| [ZUT_仓颉/minesweeping 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fminesweeping) | 扫雷 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,仓颉 |
| [ZUT_仓颉/MonteCarlosimulation 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FMonteCarlosimulation) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | c,m,z,仓颉 |
| [ZUT_仓颉/NaturalMergeSort 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FNaturalMergeSort) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,n,s,z |
| [ZUT_仓颉/Prim算法_最小生成树 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FPrim%E7%AE%97%E6%B3%95_%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91) | 最小生成树 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,p,s,t,z,仓颉 |
| [ZUT_仓颉/Rabin-Karp算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FRabin-Karp%E7%AE%97%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | k,r,仓颉 |
| [ZUT_仓颉/SaoLei_Gzy419 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FSaoLei_Gzy419) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | g,s |
| [ZUT_仓颉/snake 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fsnake) | 贪吃蛇 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,s,仓颉 |
| [ZUT_仓颉/SPFA算法1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FSPFA%E7%AE%97%E6%B3%951) | 使用华为仓颉（Cangjie）编程语言完整实现 SPFA（队列优化的 Bellman-Ford）最短路径算法，并验证其对一般图与负权边的处理能力。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z |
| [ZUT_仓颉/SPT 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FSPT) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,s,z,仓颉 |
| [ZUT_仓颉/StudentSystem1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FStudentSystem1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,s,z |
| [ZUT_仓颉/Sunday算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FSunday%E7%AE%97%E6%B3%95) | Sunday算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z |
| [ZUT_仓颉/T_czz_127 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_czz_127) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,t,z |
| [ZUT_仓颉/T_dty_117 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_dty_117) | 逻辑迷宫 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,t,z |
| [ZUT_仓颉/T_hzx_233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_hzx_233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,t,z,仓颉 |
| [ZUT_仓颉/T_kt_710 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_kt_710) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,k,t,z,仓颉 |
| [ZUT_仓颉/T_lrl_233 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_lrl_233) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,l,t |
| [ZUT_仓颉/T_mjz_206 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_mjz_206) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,t |
| [ZUT_仓颉/T_nxs_229 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_nxs_229) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,n,t,z,仓颉 |
| [ZUT_仓颉/T_sah_812 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_sah_812) | 俄罗斯方块 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,s,t,z,仓颉 |
| [ZUT_仓颉/T_smy_021 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_smy_021) | 2048С��Ϸ - ���������ʵ�� | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,s,t,z,仓颉 |
| [ZUT_仓颉/T_sr_105 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_sr_105) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,s,z,仓颉 |
| [ZUT_仓颉/T_xcy_539 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_xcy_539) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | t,x,z,仓颉 |
| [ZUT_仓颉/T_xyw_328 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_xyw_328) | 扫雷 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,x,z,仓颉 |
| [ZUT_仓颉/T_yh_414 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_yh_414) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,y,z |
| [ZUT_仓颉/T_yjr_418 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_yjr_418) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,y,z,仓颉 |
| [ZUT_仓颉/T_zs 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zs) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,仓颉 |
| [ZUT_仓颉/T_zs_227 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zs_227) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | z,仓颉 |
| [ZUT_仓颉/T_zs_310 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zs_310) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/T_zsh_432 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zsh_432) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z |
| [ZUT_仓颉/T_zx_401 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zx_401) | 该项目简单实现了带图形化界面的五子棋 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,w,z,仓颉 |
| [ZUT_仓颉/T_zyx_625 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT_zyx_625) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,t,z,仓颉 |
| [ZUT_仓颉/T-GluttonousSnake-535 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FT-GluttonousSnake-535) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,s,t,z |
| [ZUT_仓颉/Tarjan901 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FTarjan901) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | t,仓颉 |
| [ZUT_仓颉/Tim排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FTim%E6%8E%92%E5%BA%8F) | 晚上作业项目 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | s,t,z |
| [ZUT_仓颉/tkwar 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Ftkwar) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,g,t,z,仓颉 |
| [ZUT_仓颉/tuixiangzi 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Ftuixiangzi) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/tuixingzi901 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Ftuixingzi901) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/work_ml221 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fwork_ml221) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | m,w,仓颉 |
| [ZUT_仓颉/wzq 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fwzq) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,w,z,仓颉 |
| [ZUT_仓颉/yang 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fyang) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,y,z |
| [ZUT_仓颉/ZUT_红黑树删除插入 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2FZUT_%E7%BA%A2%E9%BB%91%E6%A0%91%E5%88%A0%E9%99%A4%E6%8F%92%E5%85%A5) | 红黑树删除插入（包含颜色调整) | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,d,i,r,t,z,仓颉 |
| [ZUT_仓颉/z字形遍历1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2Fz%E5%AD%97%E5%BD%A2%E9%81%8D%E5%8E%861) | z字形遍历 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z |
| [ZUT_仓颉/二分查找 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,Cangjie,z,仓颉 |
| [ZUT_仓颉/二叉树遍历 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BA%8C%E5%8F%89%E6%A0%91%E9%81%8D%E5%8E%86) | 二叉树遍历 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,t,z,仓颉 |
| [ZUT_仓颉/仓颉实现的推箱子 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%8E%A8%E7%AE%B1%E5%AD%90) | 推箱子 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/仓颉象棋 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BB%93%E9%A2%89%E8%B1%A1%E6%A3%8B) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/位运算优化 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BD%8D%E8%BF%90%E7%AE%97%E4%BC%98%E5%8C%96) | 位运算优化 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | w,z,仓颉 |
| [ZUT_仓颉/侏儒排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BE%8F%E5%84%92%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,g,s,z |
| [ZUT_仓颉/俄罗斯方块 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | e,仓颉 |
| [ZUT_仓颉/冒泡排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,Cangjie,z,仓颉 |
| [ZUT_仓颉/最大子数组和 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | k,仓颉 |
| [ZUT_仓颉/最小公共祖先 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,Cangjie,l,仓颉 |
| [ZUT_仓颉/最小割Max-FlowMin-Cut 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E5%89%B2Max-FlowMin-Cut) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,m,z,仓颉 |
| [ZUT_仓颉/最小度约束生成树1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E5%BA%A6%E7%BA%A6%E6%9D%9F%E7%94%9F%E6%88%90%E6%A0%911) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,z,仓颉 |
| [ZUT_仓颉/最小生成树 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91) | 最小生成树项目作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,z,仓颉 |
| [ZUT_仓颉/最小费用最大流 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E5%B0%8F%E8%B4%B9%E7%94%A8%E6%9C%80%E5%A4%A7%E6%B5%81) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | z |
| [ZUT_仓颉/最短路径 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84) | 本项目使用仓颉语言实现最短路径算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | d,仓颉 |
| [ZUT_仓颉/最近公共祖先 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | l,z |
| [ZUT_仓颉/最长递增子序列 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | i,l,s,z,仓颉 |
| [ZUT_仓颉/分数背包问题 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%88%86%E6%95%B0%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98) | 仓颉算法作业题“分数背包问题” | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,w,z,仓颉 |
| [ZUT_仓颉/分治求最大最小值 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%88%86%E6%B2%BB%E6%B1%82%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%80%BC) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,d,f,m,z,仓颉 |
| [ZUT_仓颉/分治求最大子数组 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%88%86%E6%B2%BB%E6%B1%82%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84) | 分治求最大子数组 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,s,仓颉 |
| [ZUT_仓颉/判断环算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%88%A4%E6%96%AD%E7%8E%AF%E7%AE%97%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,d,z,仓颉 |
| [ZUT_仓颉/前缀和与差分数组 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%89%8D%E7%BC%80%E5%92%8C%E4%B8%8E%E5%B7%AE%E5%88%86%E6%95%B0%E7%BB%84) | 线上作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,仓颉 |
| [ZUT_仓颉/匈牙利算法二分图匹配 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%8C%88%E7%89%99%E5%88%A9%E7%AE%97%E6%B3%95%E4%BA%8C%E5%88%86%E5%9B%BE%E5%8C%B9%E9%85%8D) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,h,仓颉 |
| [ZUT_仓颉/双向搜素 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%8F%8C%E5%90%91%E6%90%9C%E7%B4%A0) | 简单的双向搜索算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,Cangjie,s,z,仓颉 |
| [ZUT_仓颉/双指针 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%8F%8C%E6%8C%87%E9%92%88) | 可用于学习和实践双指针算法，项目实现了快慢指针（检测链表环、寻找中点等）和左右指针（二分查找、两数之和等）核心功能，包含完整示例与运行演示。【此简介由AI生成】 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/后缀自动机 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%90%8E%E7%BC%80%E8%87%AA%E5%8A%A8%E6%9C%BA) | 张宇恒的仓颉算法作业题 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | z |
| [ZUT_仓颉/周围排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%91%A8%E5%9B%B4%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,仓颉 |
| [ZUT_仓颉/哈密顿路径 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%93%88%E5%AF%86%E9%A1%BF%E8%B7%AF%E5%BE%84) | 哈密顿路径 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,z |
| [ZUT_仓颉/哈希查找 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%93%88%E5%B8%8C%E6%9F%A5%E6%89%BE) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,h,z,仓颉 |
| [ZUT_仓颉/回文排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9B%9E%E6%96%87%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | p,s |
| [ZUT_仓颉/基数排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,r,z,仓颉 |
| [ZUT_仓颉/堆排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A0%86%E6%8E%92%E5%BA%8F) | 用仓颉语言进行堆排序算法 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,h,z,仓颉 |
| [ZUT_仓颉/堆调整 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A0%86%E8%B0%83%E6%95%B4) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,h,z |
| [ZUT_仓颉/增减字符串匹配1 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A2%9E%E5%87%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | d,i,m,s,z,仓颉 |
| [ZUT_仓颉/大整数乘法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%A4%A7%E6%95%B4%E6%95%B0%E4%B9%98%E6%B3%95) | 大整数乘法（分治）算法。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,仓颉 |
| [ZUT_仓颉/子树判断 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%90%E6%A0%91%E5%88%A4%E6%96%AD) | 本项目使用仓颉语言实现二叉树的子树判断功能，包含核心算法与测试用例。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,s,z,仓颉 |
| [ZUT_仓颉/字典树 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%97%E5%85%B8%E6%A0%91) | 字典树（tire）/插入/查询/前缀匹配 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,t,z,仓颉 |
| [ZUT_仓颉/学生成绩管理 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%AD%A6%E7%94%9F%E6%88%90%E7%BB%A9%E7%AE%A1%E7%90%86) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | z |
| [ZUT_仓颉/层次遍历 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%B1%82%E6%AC%A1%E9%81%8D%E5%8E%86) | 层次遍历(BFS) | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,z |
| [ZUT_仓颉/希尔排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F) | 分组插入排序 + 逐步缩小增量，它是对直接插入排序的优化。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,d,i,s,z,仓颉 |
| [ZUT_仓颉/广度优先搜索 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2) | 广度优先搜索（BFS）是逐层遍历图 / 树的算法，核心用队列（Queue） 实现，先访问当前节点的所有邻接节点，再向下层遍历，适合找最短路径、层级遍历等场景。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | b,f,s,z |
| [ZUT_仓颉/序列化反序列化二叉树 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BA%8F%E5%88%97%E5%8C%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E4%BA%8C%E5%8F%89%E6%A0%91) | 实现二叉树的序列化与反序列化操作功能实现 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,z,仓颉 |
| [ZUT_仓颉/归并分治算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BD%92%E5%B9%B6%E5%88%86%E6%B2%BB%E7%AE%97%E6%B3%95) | 归并排序（分治）算法用仓颉语言的实现 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,d,m,s,z |
| [ZUT_仓颉/归并排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | m,z,仓颉 |
| [ZUT_仓颉/快犯得上发射点 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BF%AB%E7%8A%AF%E5%BE%97%E4%B8%8A%E5%8F%91%E5%B0%84%E7%82%B9) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,仓颉 |
| [ZUT_仓颉/快速幂分治 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BF%AB%E9%80%9F%E5%B9%82%E5%88%86%E6%B2%BB) | 曹正展的快速幂分治 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,z |
| [ZUT_仓颉/快速排序分治 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E5%88%86%E6%B2%BB) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,k,z,仓颉 |
| [ZUT_仓颉/快速排序并打印国际象棋棋盘 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E5%B9%B6%E6%89%93%E5%8D%B0%E5%9B%BD%E9%99%85%E8%B1%A1%E6%A3%8B%E6%A3%8B%E7%9B%98) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | x,z,仓颉 |
| [ZUT_仓颉/快速排序法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E6%B3%95) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | q,s,仓颉 |
| [ZUT_仓颉/拓扑排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | t |
| [ZUT_仓颉/排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8E%92%E5%BA%8F) | 写一个仓颉程序实现对文件中的数值排序（大到小），并输出排好序数据，同时输出最大值，最小值，平均值，数的个数。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,Cangjie,n,s |
| [ZUT_仓颉/推箱子 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8E%A8%E7%AE%B1%E5%AD%90) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | m,t,z,仓颉 |
| [ZUT_仓颉/插值排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8F%92%E5%80%BC%E6%8E%92%E5%BA%8F) | 这是一个由仓颉语言编写的插值排序 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | i,s,z,仓颉 |
| [ZUT_仓颉/插入排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F) | 仓颉作业 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,i,仓颉 |
| [ZUT_仓颉/支票信息管理 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%94%AF%E7%A5%A8%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/支票信息管理服务 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%94%AF%E7%A5%A8%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | s,z,仓颉 |
| [ZUT_仓颉/斐波那契数列 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,f,z |
| [ZUT_仓颉/梳排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%A2%B3%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | c,Cangjie,z,仓颉 |
| [ZUT_仓颉/植物大战僵尸 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%A4%8D%E7%89%A9%E5%A4%A7%E6%88%98%E5%83%B5%E5%B0%B8) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | l,z,仓颉 |
| [ZUT_仓颉/欧几里得算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%AC%A7%E5%87%A0%E9%87%8C%E5%BE%97%E7%AE%97%E6%B3%95) | 仓颉语言实现的欧几里得算法（求最大公约数）示例代码 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,z,仓颉 |
| [ZUT_仓颉/欧拉路径或回路Hierholzer算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%AC%A7%E6%8B%89%E8%B7%AF%E5%BE%84%E6%88%96%E5%9B%9E%E8%B7%AFHierholzer%E7%AE%97%E6%B3%95) | 欧拉回路（Eulerian Circuit）是图论中的经典问题，指在图中经过每条边恰好一次且起点和终点相同的闭合路径。该问题起源于18世纪数学家欧拉对柯尼斯堡七桥问题的研究，是图论学科的奠基问题之一。 Hierholzer算法（1873年由Carl Hierholzer提出）是求解欧拉回路的最高效算法，时间复杂度为 O(V + E)。相比Fleury算法需… | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,z,仓颉 |
| [ZUT_仓颉/正则表达式 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | e,r,z |
| [ZUT_仓颉/活动选择问题 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%B4%BB%E5%8A%A8%E9%80%89%E6%8B%A9%E9%97%AE%E9%A2%98) | 活动选择问题 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | a,Cangjie,p,s,仓颉 |
| [ZUT_仓颉/深度优先搜索 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | f,s,z,仓颉 |
| [ZUT_仓颉/猜数字 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%8C%9C%E6%95%B0%E5%AD%97) | 猜数字 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f |
| [ZUT_仓颉/生产者与消费者 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%94%9F%E4%BA%A7%E8%80%85%E4%B8%8E%E6%B6%88%E8%B4%B9%E8%80%85) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | p,s,v,z,仓颉 |
| [ZUT_仓颉/生产者与消费者模型 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%94%9F%E4%BA%A7%E8%80%85%E4%B8%8E%E6%B6%88%E8%B4%B9%E8%80%85%E6%A8%A1%E5%9E%8B) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,t,y,z,仓颉 |
| [ZUT_仓颉/第5此作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%AC%AC5%E6%AD%A4%E4%BD%9C%E4%B8%9A) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z,仓颉 |
| [ZUT_仓颉/第六次作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%AC%AC%E5%85%AD%E6%AC%A1%E4%BD%9C%E4%B8%9A) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z,仓颉 |
| [ZUT_仓颉/第六次作业2 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%AC%AC%E5%85%AD%E6%AC%A1%E4%BD%9C%E4%B8%9A2) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z |
| [ZUT_仓颉/第四次作业 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%AC%AC%E5%9B%9B%E6%AC%A1%E4%BD%9C%E4%B8%9A) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,f,z |
| [ZUT_仓颉/简易扫雷 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%AE%80%E6%98%93%E6%89%AB%E9%9B%B7) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,j,l,s,y,仓颉 |
| [ZUT_仓颉/线性同余方程 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%BA%BF%E6%80%A7%E5%90%8C%E4%BD%99%E6%96%B9%E7%A8%8B) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | e,l |
| [ZUT_仓颉/线性搜索 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%BA%BF%E6%80%A7%E6%90%9C%E7%B4%A2) | 线性搜索项目 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,l,s,仓颉 |
| [ZUT_仓颉/网络中的Dinic算法0 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E7%BD%91%E7%BB%9C%E4%B8%AD%E7%9A%84Dinic%E7%AE%97%E6%B3%950) | 本项目实现了图论中经典的 Dinic（狄尼茨）最大网络流算法，包含完整的算法原理讲解、标准模板代码、详细注释与经典例题测试。Dinic 算法是求解最大流、最小割问题的高效算法，广泛应用于物流规划、资源分配、二分图匹配、网络建模等场景。项目配套完整的使用说明、复杂度分析与优化技巧，适合算法学习、竞赛刷题与工程参考，欢迎交流学习与 Star 收藏。 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,d,z,仓颉 |
| [ZUT_仓颉/贪吃蛇 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%B4%AA%E5%90%83%E8%9B%87) | 基于仓颉的贪吃蛇 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/贪心匹配 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%B4%AA%E5%BF%83%E5%8C%B9%E9%85%8D) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | g,z,仓颉 |
| [ZUT_仓颉/赫夫曼编码构建 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%B5%AB%E5%A4%AB%E6%9B%BC%E7%BC%96%E7%A0%81%E6%9E%84%E5%BB%BA) | 赫夫曼编码构建 | ZUT_仓颉 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,h,z |
| [ZUT_仓颉/跳跃搜索 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E8%B7%B3%E8%B7%83%E6%90%9C%E7%B4%A2) | 跳跃搜索（Jump Search）算法的仓颉语言实现，算法上机作业。 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,j,s,z |
| [ZUT_仓颉/选择排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,z,仓颉 |
| [ZUT_仓颉/镜像翻转 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%95%9C%E5%83%8F%E7%BF%BB%E8%BD%AC) | — | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,d,仓颉 |
| [ZUT_仓颉/霍夫曼编码 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%9C%8D%E5%A4%AB%E6%9B%BC%E7%BC%96%E7%A0%81) | 霍夫曼编码的实现 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,z |
| [ZUT_仓颉/霍夫曼编码算法 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%9C%8D%E5%A4%AB%E6%9B%BC%E7%BC%96%E7%A0%81%E7%AE%97%E6%B3%95) | 霍夫曼编码算法实现 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | h,z,仓颉 |
| [ZUT_仓颉/鸡尾酒排序 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=ZUT_%E4%BB%93%E9%A2%89%2F%E9%B8%A1%E5%B0%BE%E9%85%92%E6%8E%92%E5%BA%8F) | 实现鸡尾酒排序 | ZUT_仓颉 | ★ 0 / Fork 0 | 2 months ago · 活跃 | Cangjie,y,z,仓颉 |
| [zwcoder/Aquarium](https://gitcode.com/zwcoder/Aquarium) | — | zwcoder | ★ 0 / Fork 0 | 1 month ago · 活跃 | a,z |
| [zwcoder/Cachify](https://gitcode.com/zwcoder/Cachify) | — | zwcoder | ★ 0 / Fork 0 | 12 days ago · 活跃 | c,z |
| [zyjjjd/Cangjie-Chip8](https://gitcode.com/zyjjjd/Cangjie-Chip8) | — | zyjjjd | ★ 0 / Fork 0 | 1 month ago · 活跃 | z |
| [zyjjjd/simpleioc](https://gitcode.com/zyjjjd/simpleioc) | — | zyjjjd | ★ 0 / Fork 0 | 1 month ago · 活跃 | z |
| [Zys158/hc](https://gitcode.com/Zys158/hc) | — | Zys158 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,z |
| [zzh111216/1](https://gitcode.com/zzh111216/1) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [zzh111216/11](https://gitcode.com/zzh111216/11) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | z |
| [zzh111216/E1_ZZH308](https://gitcode.com/zzh111216/E1_ZZH308) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [zzh111216/E2_zzh308](https://gitcode.com/zzh111216/E2_zzh308) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [zzh111216/E3_zzh308](https://gitcode.com/zzh111216/E3_zzh308) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [zzh111216/E4_zzh308](https://gitcode.com/zzh111216/E4_zzh308) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [zzh111216/E5_zzh308](https://gitcode.com/zzh111216/E5_zzh308) | — | zzh111216 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | e,z |
| [仓颉·鸿蒙/nexus 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E4%BB%93%E9%A2%89%C2%B7%E9%B8%BF%E8%92%99%2Fnexus) | Nexus — The AI Integration Hub. Connect models, apps, and data seamlessly. | 仓颉·鸿蒙 | ★ 0 / Fork 0 | 10 months ago · 维护中 | Cangjie,h,n,仓颉 |
| [开源仓颉第三方开发者社区/hash2 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fhash2) | 哈希接口 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | h,o |
| [开源仓颉第三方开发者社区/i128 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fi128) | 为仓颉提供 UInt128 类型 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | Cangjie,i,o |
| [开源仓颉第三方开发者社区/log 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Flog) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 month ago · 活跃 | Cangjie,l |
| [开源仓颉第三方开发者社区/sense 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fsense) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 5 months ago · 活跃 | o,s |
| [开源仓颉第三方开发者社区/stdx_standalone_log 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fstdx_standalone_log) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | o,s |
| [开源仓颉第三方开发者社区/stdx_standalone_logger 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fstdx_standalone_logger) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | l,o |
| [开源仓颉第三方开发者社区/stdx_standalone_serialization 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fstdx_standalone_serialization) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 6 months ago · 活跃 | o,s |
| [开源仓颉第三方开发者社区/stringbuilder 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Fstringbuilder) | 更自由、更强大的StringBuilder工具类。 | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 1 year ago · 低活跃 | h,o,p,s |
| [开源仓颉第三方开发者社区/unicode_width 🔎](https://gitcode.com/search?l=Cangjie&type=repo&q=%E5%BC%80%E6%BA%90%E4%BB%93%E9%A2%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA%2Funicode_width) | — | 开源仓颉第三方开发者社区 | ★ 0 / Fork 0 | 3 months ago · 活跃 | o,u,w |

## 数据与维护说明

- 数据快照中的 Star、Fork 和更新时间会随 GitCode 页面变化。
- 重点组织的许可证、Issue、PR 和精确更新时间来自组织仓库列表；其他项目保留搜索卡片可见字段。
- 新一轮更新应再次运行 a–z 全部分页，并与中英文关键词结果、重点组织仓库按 `canonical_id` 做并集合并；不要仅追加新行。
- Awesome 精选与本文件分离：进入全量索引不自动成为推荐项目。
