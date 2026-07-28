# Awesome Cangjie on GitCode

> GitCode 上的仓颉三方库、工具与应用清单。数据快照：**2026-07-26**。

本清单以 [Cangjie-TPC](https://gitcode.com/cangjie-tpc) 和 [Cangjie-SIG](https://gitcode.com/cangjie-sig) 为重点，同时补充个人及其他组织中 Star 较多、Fork 较多，或填补生态空白的项目。这里是精选清单；所有 a–z 搜索命中见 [全量分类索引](./all-cangjie-projects.md) 和 [全量 JSON](./gitcode-cangjie-all-projects.json)，精选原始字段见 [精选快照](./gitcode-cangjie-projects.json)。

## 快速概览

| 范围 | 已扫描 | 说明 |
|---|---:|---|
| Cangjie-TPC | 168 个组织页仓库 | 官方资源汇总覆盖 147 个组件、25 个分类；与语言搜索合并后索引中有 171 个显示路径 |
| Cangjie-SIG | 122 个组织页仓库 | 孵化中的库、开发工具、应用和书籍配套代码；与语言搜索合并后索引中有 130 个显示路径 |
| a–z 语言搜索 | 9,074 条结果 / 3,159 个去重仓库 | 26 个字母、920 个可见分页全部成功采集，按完整 `owner/repo` 去重 |
| 关键词独有补充 | 27 个 | 旧有 `仓颉` / `Cangjie` 搜索中未被任一英文字母命中的仓库 |
| 语言搜索并集 | 3,186 个 | a–z 去重结果 + 关键词独有补充 |
| 全量索引 | 3,248 条 | 语言搜索并集，加 62 个未命中语言搜索的 TPC/SIG 组织仓库 |
| 精选机器快照 | 352 条 | 337 个推荐项目，另保留 15 个候选或待核验项目 |

> a–z 方案覆盖面很大，但交叉核验发现它会漏掉几乎不含拉丁字母的中文路径；本清单已补回 27 个旧关键词独有结果。另因 GitCode 单查询最多显示 100 页，且 `c`、`e`、`z` 已触及上限，“全量”不宣称平台意义上的绝对全集。

## 分类与字段

一级分类按主要使用方式划分：

- **三方库**：主要通过 `import`、`cjpm`、FFI 或 SDK 集成使用。
- **工具与应用**：主要通过命令行、IDE、GUI、服务部署或直接运行使用。
- **学习与资源**：书籍配套代码、示例、组织索引和社区资料，不混入核心推荐。
- **待补说明**：仓库存在，但缺少足够的公开简介或复用说明。

表格同时记录来源、主语言、Star/Fork、GitCode 显示的更新时间、活跃度与许可证。活跃度仅描述维护节奏，不代表质量：180 天内为“活跃”，181–365 天为“维护中”，366–730 天为“低活跃”，超过 730 天为“沉寂”。

> 注意：组织仓库页的 `Updated at` 是 GitCode 的仓库级平台时间，不保证等同于默认分支最近一次提交时间；Star/Fork 也会随时间变化。

## 三方库

### Cangjie-TPC 官方三方组件

以下保留 [TPC-Resource 官方汇总](https://gitcode.com/Cangjie-TPC/TPC-Resource) 的原始分类，并补充仓库指标。

#### 网络

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [download4cj](https://gitcode.com/Cangjie-TPC/download4cj) | 文件下载库，提供同步下载、异步下载、暂停任务。 | `TPC` | Cangjie | ★ 26 / Fork 2 | 2025-07-09 · 低活跃 | Apache-2.0 |
| [httpclient4cj](https://gitcode.com/Cangjie-TPC/httpclient4cj) | 高效的 HTTP 客户端，支持 HTTP/2，允许所有同一个主机地址的请求共享同一个 socket 连接，支持连接池减少请求延时，支持缓存响应内容，避免一些完全重复的请求。 | `TPC` | Cangjie | ★ 54 / Fork 12 | 2026-06-11 · 活跃 | Apache-2.0 |
| [hyperion](https://gitcode.com/Cangjie-TPC/hyperion) | 仓颉语言实现的 TCP 通信框架，支持添加自定义编解码器，积木式添加 IoFilter 处理入栈出栈消息。仓颉 redis-sdk 和 activemq4cj 项目使用了该框架。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 148 / Fork 23 | 2025-09-09 · 维护中 | Apache-2.0 |
| [net4cj](https://gitcode.com/Cangjie-TPC/net4cj) | net4cj库参考Apache Commons Net，基于仓颉语言实现了许多基本Internet协议的客户端，提供基本的协议访问。支持的协议包括 Echo、Finger、FTP、NNTP、NTP、POP3（S）、SMTP（S）、Telnet 和 Whois。 | `TPC` | Cangjie | ★ 60 / Fork 50 | 2025-10-26 · 维护中 | Apache-2.0 |
| [ntp4cj](https://gitcode.com/Cangjie-TPC/ntp4cj) | 遵循 NTP 协议，从 NTP 服务器获取精确的网络时间。支持自定义 NTP 服务器配置、支持超时控制和错误处理、支持标准 NTP 时间戳解析。 | `TPC` | Cangjie | ★ 29 / Fork 0 | 2025-04-28 · 低活跃 | MIT |
| [rpc4cj](https://gitcode.com/Cangjie-TPC/rpc4cj) | 高性能、开源和通用的 RPC 框架，基于 ProtoBuf(Protocol Buffers) 序列化协议开发，并且支持众多开发语言。面向服务端和移动端，基于 HTTP/2 设计，带来诸如双向流、流控、头部压缩、单 TCP 连接上的多复用请求等特。这些特性使得其在移动设备上表现更好，更省电和节省空间占用。 | `TPC` | Cangjie | ★ 34 / Fork 1 | 2026-06-18 · 活跃 | Apache-2.0 |
| [upload4cj](https://gitcode.com/Cangjie-TPC/upload4cj) | 用于处理浏览器或者其他客户端上传上来的单个或者多个文件的报文解析库。 | `TPC` | Cangjie | ★ 22 / Fork 4 | 2026-06-11 · 活跃 | Apache-2.0 |
| [xmpp4cj](https://gitcode.com/Cangjie-TPC/xmpp4cj) | 开放的即时通讯协议，常用于构建实时通讯应用，如：企业内部通讯系统、多人在线游戏、社交网络等。通过使用 XMPP ,可以方便地实现消息的发送、接收、在线状态管理等功能。 | `TPC` | Cangjie | ★ 20 / Fork 1 | 2026-06-05 · 活跃 | Apache-2.0 |

#### 数据库驱动

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [kv4cj](https://gitcode.com/Cangjie-TPC/kv4cj) | 基于 mmap 的高性能 key-value 存储库，主要用于解决 SharedPreferences 存储性能和容量受限的问题。 | `TPC` | Cangjie | ★ 15 / Fork 3 | 2026-06-23 · 活跃 | NOASSERTION |
| [mysqlclient-ffi](https://gitcode.com/Cangjie-TPC/mysqlclient-ffi) | mysql 客户端，可以执行各种数据库操作，包括连接数据库、创建表、插入数据、查询数据、更新数据等。 | `TPC` | Cangjie | ★ 29 / Fork 4 | 2025-09-01 · 维护中 | NOASSERTION |
| [odbc4cj](https://gitcode.com/Cangjie-TPC/odbc4cj) | 开放数据库互连，用于访问数据库的标准 API，允许应用程序通过一个标准的接口访问不同的数据库管理系统。 | `TPC` | Cangjie | ★ 18 / Fork 4 | 2026-06-27 · 活跃 | MulanPSL-2.0 |
| [opengauss-driver](https://gitcode.com/Cangjie-TPC/opengauss-driver) | openGauss 和 PostgreSQL 数据库驱动，包括前后端通信协议模块 Proto3、前后端连接管理模块 Pgconn、驱动接口实现模块 Driver、简单数据库连接池模块 Sqlpool。 | `TPC` | Cangjie | ★ 70 / Fork 19 | 2026-05-29 · 活跃 | MulanPSL-2.0 |
| [redis-sdk](https://gitcode.com/Cangjie-TPC/redis-sdk) | 仓颉语言实现的 Redis 客户端 SDK。接口设计兼容 Jedis 接口语义，支持 RESP2 和 RESP3 协议，支持发布订阅模式，支持哨兵模式和集群模式。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 524 / Fork 55 | 2025-09-09 · 维护中 | Apache-2.0 |

#### 数据封装传递

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [eventbus4cj](https://gitcode.com/Cangjie-TPC/eventbus4cj) | 发布/订阅事件总线框架，主要功能是替代 Intent、Handler、BroadCast 在 Activity、Fragment、Service 线程之间传递消息。支持普通事件的订阅和发布，支持粘性事件的订阅和发布。 | `TPC` | Cangjie | ★ 26 / Fork 1 | 2025-10-31 · 维护中 | Apache-2.0 |
| [eventsource4cj](https://gitcode.com/Cangjie-TPC/eventsource4cj) | 基于仓颉语言实现的SSE规范(Html5, Server-Send Event)组件。用于服务端和客户端的单向消息推送场景。 | `TPC` | Cangjie | ★ 21 / Fork 5 | 2026-06-09 · 活跃 | MulanPSL-2.0 |
| [lite-eventbus-cj](https://gitcode.com/Cangjie-TPC/lite-eventbus-cj) | 精简的发布/订阅事件总线框架，将事件的接受者和发送者分开，简化了组件之间的通信，使用简单，效率高，体积小。 | `TPC` | Cangjie | ★ 26 / Fork 2 | 2026-06-09 · 活跃 | MIT |
| [mqtt4cj](https://gitcode.com/Cangjie-TPC/mqtt4cj) | MQTT 消息队列遥测传输协议库，是一种基于发布/订阅（publish/subscribe）模式的"轻量级"通讯协议，该协议构建于 TCP/IP 协议上。支持 TCP/TLS/WS/WSS 方式连接消息服务端、支持 MQTTv3 协议连接消息服务端、持 MQTT 主题订阅发布。 | `TPC` | Cangjie | ★ 33 / Fork 3 | 2026-06-08 · 活跃 | BSD-3-Clause-Clear |

#### 数据解析

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [asnone4cj](https://gitcode.com/Cangjie-TPC/asnone4cj) | ASN.1 编码器和解码器的实现，它支持字节流的 BER 和 DER 编码规则。 | `TPC` | Cangjie | ★ 17 / Fork 2 | 2026-06-08 · 活跃 | Apache-2.0 |
| [cbor4cj](https://gitcode.com/Cangjie-TPC/cbor4cj) | 基于 RFC 7049 协议的简明二进制对象表示法（Cbor）的 Cangjie 语言实现。 | `TPC` | Cangjie | ★ 12 / Fork 2 | 2026-02-12 · 活跃 | Apache-2.0 |
| [csv4cj](https://gitcode.com/Cangjie-TPC/csv4cj) | csv 文件的仓颉操作工具，支持 csv 文件的读写、解析，支持中文。 | `TPC` | Cangjie | ★ 36 / Fork 4 | 2026-06-23 · 活跃 | Apache-2.0 |
| [html4cj](https://gitcode.com/Cangjie-TPC/html4cj) | HTML 格式解析库，可用于分析互联网上或本地的的网页资源和 HTML 标签。支持操作 HTML 节点/属性、CSS 选择器。 | `TPC` | Cangjie | ★ 25 / Fork 7 | 2026-02-14 · 活跃 | MIT |
| [ini4cj](https://gitcode.com/Cangjie-TPC/ini4cj) | INI 文件是一种无固定标准格式的配置文件。它以简单的文字与简单的结构组成，常常使用在 Windows 操作系统上，许多程序也会采用 INI 文件做为配置文件使用。 | `TPC` | Cangjie | ★ 19 / Fork 1 | 2025-07-07 · 低活跃 | MulanPSL-2.0 |
| [jwt4cj](https://gitcode.com/Cangjie-TPC/jwt4cj) | 用于生成和验证 JSON Web Token，支持 Payload 校验、HMAC 算法签名及验证、RSA 算法签名及验证、ECDSA 算法签名及验证。 | `TPC` | Cangjie | ★ 17 / Fork 13 | 2026-02-12 · 活跃 | MIT |
| [protobuf4cj](https://gitcode.com/Cangjie-TPC/protobuf4cj) | Protocol Buffers 协议解析库 | `TPC` | Cangjie | ★ 29 / Fork 8 | 2026-06-18 · 活跃 | NOASSERTION |
| [toml4cj](https://gitcode.com/Cangjie-TPC/toml4cj) | TOML 格式解析，语义易于阅读，易于解析成各种语言中的数据结构，能无歧义地映射为哈希表，具备实用的原生类型。 | `TPC` | Cangjie | ★ 16 / Fork 4 | 2025-07-07 · 低活跃 | MIT |
| [xml_stream](https://gitcode.com/Cangjie-TPC/xml_stream) | XML 序列化反序列化库，提供 XML 操作相关的 STAX 风格接口，符合 XML 1.0 规范，支持命名空间。 | `TPC` | Cangjie | ★ 17 / Fork 0 | 2025-07-08 · 低活跃 | Apache-2.0 |
| [xml-ffi](https://gitcode.com/Cangjie-TPC/xml-ffi) | XML 格式解析库，支持 XML DOM 和 XML SAX 解析模式。 | `TPC` | C | ★ 17 / Fork 6 | 2026-06-04 · 活跃 | NOASSERTION |
| [yaml4cj](https://gitcode.com/Cangjie-TPC/yaml4cj) | YAML 格式解析库，可以快速可靠地解析和生成 YAML 数据，支持 YAML 1.1 和 1.2 的大部分内容，包括对锚点，标签，地图合并等的支持。 | `TPC` | Cangjie | ★ 25 / Fork 14 | 2026-06-06 · 活跃 | Apache-2.0 |

#### 数据库框架

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [dataORM4cj](https://gitcode.com/Cangjie-TPC/dataORM4cj) | 端侧的数据库 ORM 框架。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 19 / Fork 3 | 2025-09-01 · 维护中 | Apache-2.0 |

#### 对象存储

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [obs-sdk](https://gitcode.com/Cangjie-TPC/oss-sdk) | 仓颉语言实现的对象存储服务软件开发工具包（OBS SDK，Object Storage Service Software Development Kit）是对 OBS 服务提供的 REST API 进行的封装。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 9 / Fork 0 | 2025-03-24 · 低活跃 | Apache-2.0 |
| [s3-sdk](https://gitcode.com/Cangjie-TPC/s3-sdk) | 仓颉语言实现的 AWS S3 的客户端。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 41 / Fork 6 | 2025-10-09 · 维护中 | Apache-2.0 |

#### 分布式

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [config-client](https://gitcode.com/Cangjie-TPC/config-client) | Config Client用于操作存储在 Config Server 中的配置内容。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 7 / Fork 1 | 2024-12-25 · 低活跃 | Apache-2.0 |
| [config-server](https://gitcode.com/Cangjie-TPC/config-server) | Config Server 是仓颉实现的可横向扩展、集中式的配置服务器，它用于集中管理应用程序各个环境下的配置。感谢普元信息技术股份有限公司为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 29 / Fork 2 | 2025-12-16 · 维护中 | — |

#### 任务调度

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [quartz4cj](https://gitcode.com/Cangjie-TPC/quartz4cj) | quartz4cj 是功能丰富的开源作业调度库，可通过触发器设置作业定时运行规则，控制作业的运行时间。感谢上海赛可出行科技服务有限公司架构团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 6 / Fork 1 | 2024-10-31 · 低活跃 | Apache-2.0 |

#### 安全类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [appauth4cj](https://gitcode.com/Cangjie-TPC/appauth4cj) | appauth4cj 库，帮助应用安全地实现用户登录和访问受保护资源的功能。 它遵循 OAuth 2.0 和 OpenID Connect 这两个业界标准协议。 | `TPC` | Cangjie | ★ 0 / Fork 0 | 2025-12-09 · 维护中 | Apache-2.0 |
| [checksum4cj](https://gitcode.com/Cangjie-TPC/checksum4cj) | 计算散列函数的库，支持多种校验和算法，如 SHA1，MD5 等。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2024-09-23 · 低活跃 | MIT |
| [crypto-ffi](https://gitcode.com/Cangjie-TPC/crypto-ffi) | 安全的密码库，包括摘要算法、对称加密算法、非对称加密算法、密钥生成和签名验证。 | `TPC` | Cangjie | ★ 23 / Fork 6 | 2026-02-25 · 活跃 | Apache-2.0 |
| [hicrypto](https://gitcode.com/Cangjie-TPC/hicrypto) | HiCrypto是一个基于仓颉语言开发的密码学库，底层密码套件使用了华为公司自研的openHiTLS，提供了高效、敏捷的全场景开源密码学开发套件。 | `TPC` | Cangjie | ★ 21 / Fork 0 | 2025-11-19 · 维护中 | Apache-2.0 |
| [md2-cj](https://gitcode.com/Cangjie-TPC/md2_cj) | 消息摘要算法，支持字符串和文件的 MD2 消息摘要计算。 | `TPC` | Cangjie | ★ 23 / Fork 0 | 2025-12-28 · 维护中 | MIT |
| [md5-cj](https://gitcode.com/Cangjie-TPC/md5-cj) | 用于计算消息摘要的密码散列函数库，可以将任意长度的字符串转换成一个 128 位（16字节）的散列值。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2025-01-08 · 低活跃 | MIT |
| [oauth4cj](https://gitcode.com/Cangjie-TPC/oauth4cj) | OAuth 开放授权协议库，支持协议 OAuth1.0 和 OAuth2.0，允许第三方程序通过访问令牌访问受保护的资源，而无需暴露用户的凭据。支持授权码模式，简化模式，密码模式，客户端模式四种模式。 | `TPC` | Cangjie | ★ 26 / Fork 2 | 2026-02-10 · 活跃 | MIT |
| [pbkdf2](https://gitcode.com/Cangjie-TPC/pbkdf2) | 基于 OPENSSL 实现的，用于生成 PBKDF2 密钥的工具。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2025-02-28 · 低活跃 | Apache-2.0 |
| [pkcs4cj](https://gitcode.com/Cangjie-TPC/pkcs4cj) | 提供 PKCS12 证书的生成、解析功能。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2025-02-28 · 低活跃 | Apache-2.0 |
| [sha1-cj](https://gitcode.com/Cangjie-TPC/sha1-cj) | 密码散列函数，用于生成数据的固定长度散列值。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | MIT |
| [sha256-cj](https://gitcode.com/Cangjie-TPC/sha256-cj) | 密码散列函数，支持使用 UTF-8 编码计算生成数据的 256位（32 字节）散列值。 | `TPC` | Cangjie | ★ 24 / Fork 3 | 2025-05-16 · 低活跃 | MIT |

#### 工具类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [brotli4cj](https://gitcode.com/Cangjie-TPC/brotli4cj) | 支持 brotli 格式的压缩和解压缩。 | `TPC` | C | ★ 2 / Fork 3 | 2026-06-12 · 活跃 | MIT |
| [bzip2-ffi](https://gitcode.com/Cangjie-TPC/bzip2-ffi) | 创建和解压 bzip2 压缩格式的文件。 | `TPC` | Cangjie | ★ 15 / Fork 1 | 2025-07-07 · 低活跃 | NOASSERTION |
| [chardet4cj](https://gitcode.com/Cangjie-TPC/chardet4cj) | 检测常用文本编码，支持 ISO-2022-CN 编码格式、UTF-8 编码格式、UTF-16BE / UTF-16LE 编码格式。 | `TPC` | Cangjie | ★ 19 / Fork 1 | 2026-06-02 · 活跃 | NOASSERTION |
| [chat4cj](https://gitcode.com/Cangjie-TPC/chat4cj) | 用于与 Rocket.Chat 服务器进行交互的 Cangjie 语言客户端库。它提供了完整的 REST API 封装，使开发者能够轻松地实现用户认证、频道管理、消息发送等功能。 | `TPC` | Cangjie | ★ 9 / Fork 0 | 2025-12-01 · 维护中 | MIT |
| [cjbind](https://gitcode.com/Cangjie-TPC/cjbind) | 将 C 头文件自动转换成仓颉 CFFI 声明文件，进一步提升 C 互操作开发效率。 | `TPC` | Cangjie | ★ 26 / Fork 2 | 2026-07-26 · 活跃 | MIT |
| [cjmustache](https://gitcode.com/Cangjie-TPC/cjmustache) | 一个迁移自 jmustache 的模版引擎项目。 | `TPC` | Cangjie | ★ 1 / Fork 2 | 2026-06-09 · 活跃 | Apache-2.0 |
| [CJson](https://gitcode.com/Cangjie-TPC/CJson) | Json 序列化/反序列化工具，自动给被标记的类增加fromJson()和toJson()等方法，使其自身具备序列化/反序列化能力。支持功能：1.序列化标记（@JsonSerializable）2. 定制序列化属性名（@JsonName）3. 忽略属性（@JsonIgnore）4.序列化默认值 5.定制序列化和反序列化逻辑（IJsonS… | `TPC` | Cangjie | ★ 34 / Fork 8 | 2026-07-21 · 活跃 | Apache-2.0 |
| [compare-versions-cj](https://gitcode.com/Cangjie-TPC/compare-versions-cj) | 版本对比工具，支持版本号验证、版本号排序、版本号范围识别。 | `TPC` | Cangjie | ★ 4 / Fork 0 | 2025-02-11 · 低活跃 | MIT |
| [compress4cj](https://gitcode.com/Cangjie-TPC/compress4cj) | 用于处理多种压缩文件的库，主要包括存档格式 rar、tar、zip 格式, 流式包含bzip2、gzip、zlib、deflate 格式的压缩/解压功能，只支持 rar4.0 文件解压功能。 | `TPC` | Cangjie | ★ 19 / Fork 2 | 2025-09-01 · 维护中 | Apache-2.0 |
| [diffutils4cj](https://gitcode.com/Cangjie-TPC/diffutils4cj) | 可以逐行比对两个字符串的差异，并按行将差异展示出来，提供补丁打包和添加功能。文档和数据的对比需要先转换为字符串数组再使用该库进行逐行比对。 | `TPC` | Cangjie | ★ 12 / Fork 2 | 2026-02-12 · 活跃 | Apache-2.0 |
| [fast_json_cj](https://gitcode.com/Cangjie-TPC/cjfast_json) | cjfast_json是一个用仓颉语言编写的高性能JSON处理库，提供了快速的JSON序列化和反序列化功能。该库专为提升JSON处理效率而设计，支持标准JSON数据类型与仓颉语言原生数据结构的相互转换。 | `TPC` | Cangjie | ★ 24 / Fork 2 | 2026-01-31 · 活跃 | Apache-2.0 |
| [fast-compress-cj](https://gitcode.com/Cangjie-TPC/fast-compress-cj) | 支持 snappyy 算法压缩解压、流式压缩解压、帧流式压缩解压。 | `TPC` | Cangjie | ★ 16 / Fork 1 | 2026-06-02 · 活跃 | Apache-2.0 |
| [fast-eventbus-cj](https://gitcode.com/Cangjie-TPC/fast-eventbus-cj) | 发布/订阅事件总线，为多线程应用程序中的高吞吐量而优化的强大事件总线。支持同步和异步事件发布、事件过滤功能。 | `TPC` | Cangjie | ★ 29 / Fork 1 | 2026-06-06 · 活跃 | MIT |
| [is-png-cj](https://gitcode.com/Cangjie-TPC/is-png-cj) | 一个判断图片格式的库，根据图片的文件数据，判断图片是否为 png 格式。 | `TPC` | Cangjie | ★ 13 / Fork 1 | 2026-01-16 · 维护中 | MIT |
| [is-webp-cj](https://gitcode.com/Cangjie-TPC/is-webp-cj) | 一款根据文件数据，判断图片是否是 webp 格式的库。 | `TPC` | Cangjie | ★ 5 / Fork 1 | 2026-01-21 · 维护中 | MIT |
| [metadata-extractor-cj](https://gitcode.com/Cangjie-TPC/metadata-extractor-cj) | metadata-extractor-cj 用于从媒体文件中读取元数据。它可以处理多种文件格式，如 JPEG、TIFF、GIF、BMP等，并提取这些文件中包含的各种元数据信息。 | `TPC` | Cangjie | ★ 1 / Fork 1 | 2025-12-12 · 维护中 | Apache-2.0 |
| [msgpack4cj](https://gitcode.com/Cangjie-TPC/msgpack4cj) | 基于 msgpack 序列化协议的仓颉实现。旨在为仓颉应用提供高效、紧凑的二进制数据交换格式。支持快速的数据序列化和反序列化操作，适用于需要高性能和低开销的数据传输场景。 | `TPC` | Cangjie | ★ 17 / Fork 1 | 2026-06-11 · 活跃 | Apache-2.0 |
| [phonenumber4cj](https://gitcode.com/Cangjie-TPC/phonenumber4cj) | 用于解析、格式化和验证国际电话号码，可根据电话号码查询运营商信息、地理位置信息、时区信息，为指定国家/地区提供有效的示例号码。 | `TPC` | Cangjie | ★ 11 / Fork 1 | 2026-06-05 · 活跃 | Apache-2.0 |
| [pinyin4cj](https://gitcode.com/Cangjie-TPC/pinyin4cj) | 用于将汉字转为拼音，支持词、句转换成拼音，简体/繁体中文字符转换成拼音，多音字符转换成拼音，简体、繁体中文字符互转，支持添加自定义字典，支持 Unicode 格式的字符 ü、支持声调符号、支持首字母格式。 | `TPC` | Cangjie | ★ 20 / Fork 5 | 2026-06-11 · 活跃 | MIT |
| [protobuf-format-cj](https://gitcode.com/Cangjie-TPC/protobuf-format-cj) | 支持将 protobuf 数据序列化成 json、xml、html、chouchdb 格式。 | `TPC` | Cangjie | ★ 8 / Fork 0 | 2025-07-21 · 低活跃 | BSD-3-Clause |
| [tar4cj](https://gitcode.com/Cangjie-TPC/tar4cj) | tar 格式的压缩和解压缩三方库。 | `TPC` | C | ★ 1 / Fork 1 | 2025-10-09 · 维护中 | Apache-2.0 |
| [uuid4cj](https://gitcode.com/Cangjie-TPC/uuid4cj) | 通用唯一标识符，长度为 128 位，可以保证跨空间和时间的唯一性。可基于时间/位置、名称（SHA1、MD5）、随机数、时间纪元等生成。 | `TPC` | Cangjie | ★ 18 / Fork 7 | 2026-04-08 · 活跃 | Apache-2.0 |
| [vcard4cj](https://gitcode.com/Cangjie-TPC/vcard4cj) | 电子名片标准格式（.vcf 文件）解析库。 | `TPC` | Cangjie | ★ 17 / Fork 1 | 2025-07-04 · 低活跃 | MIT |
| [video-compress-cj](https://gitcode.com/Cangjie-TPC/video-compress-cj) | 高性能的视频压缩三方库，支持高、中、低三种质量压缩。支持 mp4、mpeg.ts 视频的解封装格式、支持 AVC(H.264)、 HEVC(H.265) 视频解码格式、支持 AAC 音视频解码格式、支持 AVC(H.264)、 HEVC(H.265) 视频编码格式、支持 AAC 音频编码格式、支持 mp4 封装格式。 | `TPC` | C++ | ★ 9 / Fork 1 | 2025-07-08 · 低活跃 | Apache-2.0 |
| [xsequence4cj](https://gitcode.com/Cangjie-TPC/xsequence4cj) | xsequence4cj 是一个分布式序列号生成组件。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-09-26 · 维护中 | Apache-2.0 |
| [zip4cj](https://gitcode.com/Cangjie-TPC/zip4cj) | 创建和解压 zip 压缩格式文件。 | `TPC` | Cangjie | ★ 22 / Fork 4 | 2026-02-24 · 活跃 | Apache-2.0 |
| [zlib4cj](https://gitcode.com/Cangjie-TPC/zlib4cj) | 创建和解压 zlib 压缩格式文件。 | `TPC` | Cangjie | ★ 18 / Fork 7 | 2026-06-25 · 活跃 | NOASSERTION |

#### 日志类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [log-cj](https://gitcode.com/Cangjie-TPC/log-cj) | 日志管理框架，支持控制台日志输出和文件日志输出，支持使用 Json 进行自定义配置。 | `TPC` | Cangjie | ★ 22 / Fork 3 | 2026-06-12 · 活跃 | Apache-2.0 |
| [syslog4cj](https://gitcode.com/Cangjie-TPC/syslog4cj) | Syslog4cj 是一个用于处理系统日志（Syslog）的库，它提供了丰富的功能和灵活的配置选项，支持多种系统日志协议，如 TCP、UDP 等。 | `TPC` | Cangjie | ★ 58 / Fork 53 | 2026-06-06 · 活跃 | LGPL-2.1 |

#### 算法类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [adler4cj](https://gitcode.com/Cangjie-TPC/adler4cj) | 用于计算数据校验的算法库，实现了 Adler-32 校验和算法，支持多种数据类型校验和计算。该算法由 Mark Adler 创建，相比 CRC32 具有更快的计算速度，被广泛应用于数据完整性校验、网络传输和压缩文件格式（如 zlib）中。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | Apache-2.0 |
| [ahocorasick4cj](https://gitcode.com/Cangjie-TPC/ahocorasick4cj) | 使用 Aho-Corasick 字符串搜索算法，能够提供高效的字符串匹配功能，支持多字符搜索，支持关键词库模式，支持自定义值输出模式。 | `TPC` | Cangjie | ★ 22 / Fork 1 | 2026-06-05 · 活跃 | Apache-2.0 |
| [caverphone4cj](https://gitcode.com/Cangjie-TPC/caverphone4cj) | 用于比较英文单词发音相似度的算法库。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | ISC |
| [disklrucache4cj](https://gitcode.com/Cangjie-TPC/disklrucache4cj) | 管理硬盘内容的存储管理工具，它采用了最近最少使用（LRU）算法，以对硬盘中存储的文件进行管理，在存储空间短缺的情况下，会优先将最近最少使用的文件删除，以扩展可用的硬盘空间。 | `TPC` | Cangjie | ★ 23 / Fork 3 | 2026-06-04 · 活跃 | Apache-2.0 |
| [easy-relpace-cj](https://gitcode.com/Cangjie-TPC/easy-relpace-cj) | 用于非正则字符串替换的算法库。支持字符串替换、字符串替换区间的选择。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | MIT |
| [flexsearch4cj](https://gitcode.com/Cangjie-TPC/flexsearch4cj) | 快速、零依赖的全文搜索库。在原始搜索速度方面，FlexSearch 优于每一个搜索库，并提供灵活的搜索功能，如多字段搜索，语音转换或部分匹配。根据使用的选项，它还提供最高内存效率的索引。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 31 / Fork 2 | 2025-07-07 · 低活跃 | Apache-2.0 |
| [hibase32-cj](https://gitcode.com/Cangjie-TPC/hibase32-cj) | Base32(RFC 4648) 编码/解码库。 | `TPC` | Cangjie | ★ 27 / Fork 0 | 2025-07-05 · 低活跃 | MIT |
| [image-filters-cj](https://gitcode.com/Cangjie-TPC/image-filters-cj) | 对图片添加滤波器的图像处理库，支持 Invert、Contrast、Mirror、Brightness、Thresholding 等多种滤镜格式。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2025-01-07 · 低活跃 | — |
| [leven4cj](https://gitcode.com/Cangjie-TPC/leven4cj) | 使用 Levenshtein 距离算法测量两个字符串之间的差异。 | `TPC` | Cangjie | ★ 28 / Fork 1 | 2026-04-24 · 活跃 | Apache-2.0 |
| [memorycache](https://gitcode.com/Cangjie-TPC/memorycache) | 内存缓存库，支持基于的 lru 本地缓存读写和内存缓存。 | `TPC` | Cangjie | ★ 34 / Fork 1 | 2026-02-12 · 活跃 | MulanPSL-2.0 |

#### 音视频

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [ijkplayer-ffi](https://gitcode.com/Cangjie-TPC/ijkplayer-ffi) | 基于 FFmpeg 的视频播放器，包括视频播放、暂停、停止、重置、释放、前进、后退、倍数播放、循环播放、设置音量、屏幕常亮等。适用于 OHOS 系统。 | `TPC` | C | ★ 12 / Fork 0 | 2025-09-08 · 维护中 | LGPL-2.1 |
| [mp3tag4cj](https://gitcode.com/Cangjie-TPC/mp3tag4cj) | 用于读取、写入、添加和删除 ID3v1、ID3v2 标签。标签表示内容支持 ISO-8859-1，UTF-16LE，UTF-16BE，UTF-8 4种编码； 读取音频数据帧帧头包含的数据信息；判断 VBR 文件，获得每个音频数据帧的位率；在音频数据帧结尾和 ID3v1 标记之间添加或删除自定义标签。 | `TPC` | Cangjie | ★ 9 / Fork 3 | 2026-06-11 · 活跃 | MIT |
| [mp4parser4cj](https://gitcode.com/Cangjie-TPC/mp4parser4cj) | 读取、写入 mp4 格式音视频文件编辑的工具，包括音视频合成、裁剪、批量合成。 | `TPC` | Cangjie | ★ 9 / Fork 1 | 2026-06-09 · 活跃 | Apache-2.0 |
| [video-trimmer-cj](https://gitcode.com/Cangjie-TPC/video-trimmer-cj) | video-trimmer提供视频剪辑能力的三方库。 | `TPC` | Cangjie | ★ 1 / Fork 0 | 2025-12-13 · 维护中 | Apache-2.0 |
| [videocache4cj](https://gitcode.com/Cangjie-TPC/videocache4cj) | 边播放边缓存的库，支持自定义设置缓存文件夹位置、设置最大缓存数据清理策略、添加请求头、使用自定义的缓存文件命名规则、注册/取消缓存进度监听器、设置自定义的缓存文件清理规则。 | `TPC` | Cangjie | ★ 9 / Fork 0 | 2025-07-09 · 低活跃 | Apache-2.0 |
| [webrtc-ffi](https://gitcode.com/Cangjie-TPC/webrtc-ffi) | webrtc4cj 是一个基于仓颉版终端提供WebRTC的接口封装，并在C++层适配了视频的采集、渲染及编解码等模块。 | `TPC` | C++ | ★ 2 / Fork 0 | 2026-04-03 · 活跃 | Apache-2.0 |

#### 字符编码

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj) | 常用的字符编码集合库。 | `TPC` | Cangjie | ★ 33 / Fork 5 | 2026-06-11 · 活跃 | MulanPSL-2.0 |

#### 图像处理

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [avif-ffi](https://gitcode.com/Cangjie-TPC/avif-ffi) | avif-ffi是一个对avif图片进行解码显示的仓颉库，解码后静态avif图片和动态avif图片都可以显示在控件上。 | `TPC` | Cangjie | ★ 12 / Fork 10 | 2026-07-24 · 活跃 | Apache-2.0 |
| [circle-image-view-cj](https://gitcode.com/Cangjie-TPC/circle-image-view-cj) | 图片处理库，可以将图片裁剪为圆形或者给图片设置边框。 | `TPC` | Cangjie | ★ 7 / Fork 1 | 2025-12-06 · 维护中 | Apache-2.0 |
| [droplet](https://gitcode.com/Cangjie-TPC/droplet) | 图像加载缓存库，致力于更高效、更轻便、更简单得加载图片。在图片列表滚动时候实现平滑滚动得效果。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 15 / Fork 3 | 2026-06-10 · 活跃 | NOASSERTION |
| [droplet-transformations](https://gitcode.com/Cangjie-TPC/droplet-transformations) | 图像转换库,提供了 高亮，滤镜，灰度， 虚幻， 马赛克， 漫画，像素，素描，漩涡， 油画， 暗边， 模糊等图像转换能力。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 13 / Fork 1 | 2026-06-10 · 活跃 | Apache-2.0 |
| [gifdrawable4cj](https://gitcode.com/Cangjie-TPC/gifdrawable4cj) | GIF 图像渲染库，支持播放、暂停、调节 GIF 播放速率、设置显示大小、支持不同的拉伸类型。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 11 / Fork 2 | 2025-07-09 · 低活跃 | Apache-2.0 |
| [large-image-cj](https://gitcode.com/Cangjie-TPC/large-image-cj) | 支持加载图像、缩放图像、拖动图像、双击放大图像。 | `TPC` | Cangjie | ★ 5 / Fork 0 | 2026-06-05 · 活跃 | Apache-2.0 |
| [libpag-ffi](https://gitcode.com/Cangjie-TPC/libpag-ffi) | libpag-cj是一款在仓颉环境下适配的动态图形渲染库，它基于腾讯的 libpag 开发，并对 libpag 进行了封装。libpag 旨在为仓颉开发者提供高效的矢量动画与序列帧渲染支持。 | `TPC` | Cangjie | ★ 1 / Fork 0 | 2025-12-11 · 维护中 | Apache-2.0 |
| [photoview4cj](https://gitcode.com/Cangjie-TPC/photoview4cj) | 支持图片缩放、平移、旋转的浏览组件。 | `TPC` | Cangjie | ★ 8 / Fork 2 | 2026-06-05 · 活跃 | Apache-2.0 |
| [qrcode4cj](https://gitcode.com/Cangjie-TPC/qrcode4cj) | 解析/生成多种类型的一维码/二维码，包括 QRCode、Data Matrix、PDF417 barcode、Aztec barcode、CodeBar、Code128、Code39、Code93、EAN13、EAN8、ITF、UPC-A、UPC-E、UPC/EAN、MaxiCode、RSS barcode(RSS-14、RSS-Exp… | `TPC` | Cangjie | ★ 11 / Fork 4 | 2026-07-06 · 活跃 | Apache-2.0 |
| [rounded-image-view-cj](https://gitcode.com/Cangjie-TPC/rounded-image-view-cj) | 实现图片的圆角显示效果的图片控件。支持多种缩放类型、多种背景平铺类型、多种样式效果、支持多种图片资源数据绘制。 | `TPC` | Cangjie | ★ 11 / Fork 2 | 2026-06-12 · 活跃 | Apache-2.0 |
| [svg4cj](https://gitcode.com/Cangjie-TPC/svg4cj) | SVG 图片的解析器和渲染器，能够渲染大多数标准的 SVG 图像，性能好、内存占用低。 | `TPC` | Cangjie | ★ 20 / Fork 0 | 2026-06-06 · 活跃 | Apache-2.0 |

#### 开发者类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [commonmark4cj](https://gitcode.com/Cangjie-TPC/commonmark4cj) | 根据 CommonMark 规范（以及一些扩展）解析和呈现 Markdown 文本。 | `TPC` | Cangjie | ★ 24 / Fork 8 | 2026-07-17 · 活跃 | BSD-2-Clause |
| [editor4cj](https://gitcode.com/Cangjie-TPC/editor4cj) | OHOS 多语言代码编辑器。用户通过定义 EditorKit 类对象，实现对语言(language)、字体大小(fontSize)、主题(theme)、编辑器文本(text)、代码编辑器高度(height)、代码编辑器宽度(width)、自动缩进(tabLen)的设置，进而实现代码高亮、滚动条、行号显示、自动补全等功能，当前只支持 ut… | `TPC` | Cangjie | ★ 38 / Fork 3 | 2026-07-07 · 活跃 | Apache-2.0 |
| [formula-ffi](https://gitcode.com/Cangjie-TPC/formula-ffi) | 解析和生成数学公式，支持生成 bitmap 图片格式。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 17 / Fork 8 | 2026-07-13 · 活跃 | MIT |
| [markdown4cj](https://gitcode.com/Cangjie-TPC/markdown4cj) | Markdown 解析和展示，排版语法简洁，使用高效便捷，扩展性强，用户可自定义 Markdown 显示样式。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 77 / Fork 19 | 2026-07-22 · 活跃 | Apache-2.0 |
| [prism4cj](https://gitcode.com/Cangjie-TPC/prism4cj) | 轻量的语法高亮库，提供任意语法的标记化策略，支持标记不同类型的关键词、不同语言的解析器/分发器、预定义语法解析器。 | `TPC` | Cangjie | ★ 15 / Fork 1 | 2026-07-17 · 活跃 | Apache-2.0 |

#### 动画类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [apng4cj](https://gitcode.com/Cangjie-TPC/apng4cj) | APNG 格式的动画展示，支持本地上传 apng 文件、解析并播放。用于启动页动画、商品动画等。 | `TPC` | Cangjie | ★ 5 / Fork 0 | 2025-04-27 · 低活跃 | Apache-2.0 |
| [banner4cj](https://gitcode.com/Cangjie-TPC/banner4cj) | 广告图片自动轮播、无限轮播、垂直轮播的组件库。 | `TPC` | Cangjie | ★ 8 / Fork 0 | 2025-12-15 · 维护中 | Apache-2.0 |
| [easing-functions-cj](https://gitcode.com/Cangjie-TPC/easing-functions-cj) | 动画效果库，该库的函数曲线可用于控制动画对象实现特定的运动轨迹。支持 BackEaseIn 、BackEaseOut 、ExpoEaseOut、SineEaseIn 、SineEaseOut 等多种动画效果。 | `TPC` | Cangjie | ★ 8 / Fork 1 | 2025-12-16 · 维护中 | MIT |
| [lottie-ffi](https://gitcode.com/Cangjie-TPC/lottie-ffi) | lottie动画的加强版本。 | `TPC` | C++ | ★ 1 / Fork 0 | 2025-11-03 · 维护中 | Apache-2.0 |
| [lottie4cj](https://gitcode.com/Cangjie-TPC/lottie4cj) | 基于 Json 的动画库。它可以解析 Adobe After Effects 软件通过 Bodymovin 插件导出的 Json格式的动画，并在移动设备上进行本地渲染。支持动画播放/暂停/停止，设置播放速度，设置动画播放方向。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 12 / Fork 4 | 2026-06-05 · 活跃 | MIT |
| [rebound4cj](https://gitcode.com/Cangjie-TPC/rebound4cj) | 模拟弹簧动力学，实现弹簧动画效果。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 9 / Fork 0 | 2026-06-05 · 活跃 | BSD-3-Clause |
| [shimmer4cj](https://gitcode.com/Cangjie-TPC/shimmer4cj) | 一个简单灵活的为应用视图添加闪烁效果的库，主要有由左到右倾斜，由左到右竖直，由左到右圆形，由上到下水平等闪光效果。适用于 OHOS 系统。 | `TPC` | Cangjie | ★ 8 / Fork 1 | 2025-07-09 · 低活跃 | BSD-3-Clause |
| [svga-cj](https://gitcode.com/Cangjie-TPC/svga-cj) | SVGA 格式的动画展示，支持动画播放、暂停、快进等功能。 | `TPC` | Cangjie | ★ 12 / Fork 3 | 2026-06-04 · 活跃 | Apache-2.0 |
| [vap-ffi](https://gitcode.com/Cangjie-TPC/vap-ffi) | 强大动画粒子特效渲染组件。 | `TPC` | C++ | ★ 1 / Fork 0 | 2025-12-18 · 维护中 | NOASSERTION |

#### 基础设施

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [io4cj](https://gitcode.com/Cangjie-TPC/io4cj) | 是 HttpClient 的底层 IO 库，是对仓颉 IO 库的补充，使访问、存储和处理数据变得更加容易。核心概念是 Source 和 Sink，类似于仓颉的 InputStream 和 OutputStream。 | `TPC` | Cangjie | ★ 27 / Fork 2 | 2025-10-10 · 维护中 | Apache-2.0 |
| [mime4cj](https://gitcode.com/Cangjie-TPC/mime4cj) | MIME 格式解析库。 | `TPC` | Cangjie | ★ 14 / Fork 3 | 2026-06-11 · 活跃 | MIT |

#### 地理信息

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [GISTools](https://gitcode.com/Cangjie-TPC/GISTools) | 地理信息系统工具库，处理常用的地理信息，包括坐标转换，几何计算，地图投影等功能。 | `TPC` | Cangjie | ★ 25 / Fork 0 | 2024-09-07 · 低活跃 | Apache-2.0 |

#### UI类

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [amount-input-text-cj](https://gitcode.com/Cangjie-TPC/amount-input-text-cj) | 金额输入组件，带有金融业专用版数字键盘。支持常用币种输入、支持键盘乱序、自定义标题等动态化配置。数据未进行网络传输及本地存储，所输入的内容不会被捕捉，相比于系统输入法，更加安全。 | `TPC` | Cangjie | ★ 0 / Fork 0 | 2025-01-08 · 低活跃 | Apache-2.0 |
| [autofit-textview-cj](https://gitcode.com/Cangjie-TPC/autofit-textview-cj) | 能根据占用空间自动调整字体大小的 TextView 组件库，可以自动调整文字以完美贴合显示边界 。 | `TPC` | Cangjie | ★ 3 / Fork 0 | 2025-01-07 · 低活跃 | Apache-2.0 |
| [bullet-screen-cj](https://gitcode.com/Cangjie-TPC/bullet-screen-cj) | 弹幕框架，支持发送纯文本弹幕、GIF 弹幕、特殊弹幕、设置弹幕在屏幕的显示区域、滚动方向、控制弹幕播放状态等功能。 | `TPC` | Cangjie | ★ 7 / Fork 0 | 2025-12-09 · 维护中 | Apache-2.0 |
| [circle-indicator-cj](https://gitcode.com/Cangjie-TPC/circle-indicator-cj) | 圆形指示器归一化组件，为 Tabs/Swiper 容器提供了多种自定义风格的指示器。支持圆形、长条、横幅、图标、携带中央视图的Tabs、固定位置 Tabs、胶囊风格固定位置 Tabs、携带角标固定位置 Tabs、可滑动 Tabs 等指示器功能。 | `TPC` | Cangjie | ★ 14 / Fork 1 | 2025-12-12 · 维护中 | Apache-2.0 |
| [easy-loading-cj](https://gitcode.com/Cangjie-TPC/easy-loading-cj) | 支持各类加载效果的 UI 组件，提供 27 种动画加载效果以及 Toast 功能。 | `TPC` | Cangjie | ★ 8 / Fork 0 | 2025-12-09 · 维护中 | MIT |
| [floating-menu-cj](https://gitcode.com/Cangjie-TPC/floating-menu-cj) | 悬浮菜单 UI 组件，高度可定制，支持标签、图标、水波纹、悬浮操作按钮和标签背景颜色设置等。 | `TPC` | Cangjie | ★ 0 / Fork 0 | 2025-01-07 · 低活跃 | Apache-2.0 |
| [gv-code-cj](https://gitcode.com/Cangjie-TPC/gv-code-cj) | 带干扰线和干扰点的字母数字验证码组件。用于验证用户身份的安全机制，可以有效防止自动化脚本（如网络爬虫）的恶意攻击，提高网站的安全性。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | MIT |
| [list-view-cj](https://gitcode.com/Cangjie-TPC/list-view-cj) | 为 List 组件创建多种条目类型的 UI 组件库。支持设置组件基础属性、排列方向、列表间距、滑动效果、链式联动效果等。 | `TPC` | Cangjie | ★ 2 / Fork 0 | 2025-01-08 · 低活跃 | Apache-2.0 |
| [lyric-view-cj](https://gitcode.com/Cangjie-TPC/lyric-view-cj) | 音乐播放器自动滚动歌词 UI 组件。 | `TPC` | Cangjie | ★ 8 / Fork 2 | 2025-12-25 · 维护中 | Apache-2.0 |
| [newbie-guide-cj](https://gitcode.com/Cangjie-TPC/newbie-guide-cj) | 高亮型新手引导组件，通过高亮区域与蒙版背景的明暗度对比，使用户快速锁定重点功能，快速掌握应用基本使用方法。 | `TPC` | Cangjie | ★ 11 / Fork 1 | 2025-12-10 · 维护中 | Apache-2.0 |
| [overscroll-decor-cj](https://gitcode.com/Cangjie-TPC/overscroll-decor-cj) | 滚动装饰器 UI 组件，支持 RecyclerView、ListView、GridView、ViewPager、ScrollView、HorizontalScrollView、Image 等视图的边缘滚动效果。 | `TPC` | Cangjie | ★ 18 / Fork 1 | 2025-12-10 · 维护中 | BSD-2-Clause |
| [progress-bar-cj](https://gitcode.com/Cangjie-TPC/progress-bar-cj) | 自定义进度条显示效果的归一化组件。支持 Material 风格和 Smooth 风格的进度条展示。 | `TPC` | Cangjie | ★ 8 / Fork 0 | 2025-12-16 · 维护中 | Apache-2.0 |
| [recyclerview-animators-cj](https://gitcode.com/Cangjie-TPC/recyclerview-animators-cj) | 带有动画的回收器视图 UI 组件，支持淡入淡出、缩放、滑动等动画效果。 | `TPC` | Cangjie | ★ 8 / Fork 0 | 2025-12-09 · 维护中 | Apache-2.0 |
| [refresh-layout-cj](https://gitcode.com/Cangjie-TPC/refresh-layout-cj) | 支持设置动画的下拉刷新和上拉加载组件。支持设置内置动画的各种属性、自定义动画等。 | `TPC` | Cangjie | ★ 15 / Fork 0 | 2025-07-12 · 低活跃 | Apache-2.0 |
| [swipe-item-cj](https://gitcode.com/Cangjie-TPC/swipe-item-cj) | 支持左侧和右侧的滑动布局的组件库。 | `TPC` | Cangjie | ★ 10 / Fork 0 | 2025-07-04 · 低活跃 | MIT |
| [swipe-layout-cj](https://gitcode.com/Cangjie-TPC/swipe-layout-cj) | 用于设置屏幕顶部、底部、左侧和右侧的滑动布局的组件。 | `TPC` | Cangjie | ★ 9 / Fork 2 | 2025-12-08 · 维护中 | MIT |
| [text-layout-cj](https://gitcode.com/Cangjie-TPC/text-layout-cj) | 可定制多种样式的文本构建工具，包括字体间距、大小、颜色、布局方式、富文本高亮显示等。 | `TPC` | Cangjie | ★ 11 / Fork 1 | 2025-07-04 · 低活跃 | Apache-2.0 |
| [vlayout4cj](https://gitcode.com/Cangjie-TPC/vlayout4cj) | vlayout4cj 能够处理列表、网格和其它布局在同一个视图的复杂情况，使用者可以使用已设定好的容器布局组件，也可以在此基础上自定义容器布局组件 | `TPC` | Cangjie | ★ 0 / Fork 0 | 2025-12-12 · 维护中 | MIT |
| [wheel-picker-cj](https://gitcode.com/Cangjie-TPC/wheel-picker-cj) | 多种选择器，包括时间选择器、地区选择器的三级联动、年、月、日选择器、自定义选择器。支持设置选择器多种样式，包括：文本样式、幕布样式、数据项间隔等。 | `TPC` | Cangjie | ★ 9 / Fork 2 | 2025-12-15 · 维护中 | Apache-2.0 |

#### 科学计算

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [matrix4cj](https://gitcode.com/Cangjie-TPC/matrix4cj) | 线性代数库，用于构造和操作密集矩阵。 | `TPC` | Cangjie | ★ 27 / Fork 5 | 2026-06-23 · 活跃 | Apache-2.0 |
| [scientific](https://gitcode.com/Cangjie-TPC/scientific) | scientific 是仓颉编程语言中用于统计分析、线性代数求解和数据可视化的库。 我们也对科学计算相关的其他领域感兴趣，这些可能成为未来开发的功能。 | `TPC` | Cangjie | ★ 16 / Fork 1 | 2025-12-06 · 维护中 | Apache-2.0 |

#### 编程框架

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [CJQT](https://gitcode.com/Cangjie-TPC/CJQT) | Qt是一个跨平台的C++图形用户界面应用程序开发框架。CJQT是基于仓颉语言对QT进行封装的三方库，侧重QT的widgets封装。目标为使用CJQT可以实现用户界面交互。感谢上海双洪信息技术有限公司为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 52 / Fork 8 | 2025-02-08 · 低活跃 | GPL-3.0 |
| [microservice](https://gitcode.com/Cangjie-TPC/microservice) | 仓颉语言实现的快速微服务开发框架。支持注册发现、远程过程调用、http协议、json协议、零侵入业务代码，实现自动装配、手动装配、自定义网络库装配3种模式。感谢上海赛可出行科技服务有限公司架构团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 26 / Fork 3 | 2024-08-02 · 低活跃 | Apache-2.0 |
| [rxcj](https://gitcode.com/Cangjie-TPC/rxcj) | 响应式编程框架。 | `TPC` | Cangjie | ★ 10 / Fork 0 | 2026-01-20 · 维护中 | Apache-2.0 |

#### 数据监控

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [apm_sdk](https://gitcode.com/Cangjie-TPC/apm_sdk) | 仓颉APM 遵循OTel API规范完成了Metrics 、Tracing数据模型定义，基于OTel SDK规范实现Metrics、Traces等数据的采集。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 20 / Fork 2 | 2025-11-06 · 维护中 | Apache-2.0 |
| [hm-metricx-cj](https://gitcode.com/Cangjie-TPC/hm-metricx-cj) | hm-metricx-cj 是一款适用于鸿蒙应用的线上性能监控框架。 | `TPC` | Cangjie | ★ 4 / Fork 7 | 2026-06-11 · 活跃 | ECL-2.0 |

#### 熔断降级

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [hystrix-cj](https://gitcode.com/Cangjie-TPC/hystrix-cj) | 仓颉熔断降级框架。支持以并发数、TPS、平均响应时间、一段时间内的异常数作为判断指标，作熔断或降级操作。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 10 / Fork 2 | 2025-08-05 · 维护中 | Apache-2.0 |

#### 消息队列

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [activemq4cj](https://gitcode.com/Cangjie-TPC/activemq4cj) | ActiveMQ仓颉语言客户端 SDK，兼容 JMS 规范接口语义，支持 OpenWire 协议，支持点对点与发布/订阅两种消息模型，支持事务消息和失效转移机制。感谢北京宝兰德软件股份有限公司中间件团队为仓颉编程语言 TPC 社区做出的贡献！ | `TPC` | Cangjie | ★ 14 / Fork 3 | 2025-10-27 · 维护中 | Apache-2.0 |

### TPC 官方汇总尚未覆盖的库与框架

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [base64-cj](https://gitcode.com/Cangjie-TPC/base64-cj) | ArkTS调用Cangjie版base64编解码算法实现 | `TPC` | ArkTS | ★ 21 / Fork 0 | 2025-07-12 · 低活跃 | Apache-2.0 |
| [cangjieJSON](https://gitcode.com/Cangjie-TPC/cangjieJSON) | Cangjie json 序列化与反序列化库 | `TPC` | Cangjie | ★ 27 / Fork 19 | 2026-06-08 · 活跃 | Apache-2.0 |
| [CangjieMagic](https://gitcode.com/Cangjie-TPC/CangjieMagic) | 基于仓颉编程语言构建的 LLM Agent DSL，其主要特点包括：声明式 DSL、支持 MCP 协议，支持任务智能规划等。 | `TPC` | Cangjie | ★ 716 / Fork 78 | 2026-05-27 · 活跃 | MIT |
| [chart4cj](https://gitcode.com/Cangjie-TPC/chart4cj) | 一个包含各种类型图表的图表库 | `TPC` | Cangjie | ★ 20 / Fork 4 | 2025-07-22 · 低活跃 | Apache-2.0 |
| [chinamobiledb-driver](https://gitcode.com/Cangjie-TPC/chinamobiledb-driver) | 简介待补；使用前请先核验 README。 | `TPC` | Cangjie | ★ 3 / Fork 1 | 2024-09-30 · 低活跃 | Apache-2.0 |
| [graphql4cj](https://gitcode.com/Cangjie-TPC/graphql4cj) | 使用仓颉语言实现的基于GraphQL的网络客户端库，支持与GraphQL服务端进行通信。利用 仓颉元编程能力为数据类自动生成序列化和反序列化操作。目前暂不支持graphql的解析和仓颉数据类的自动生成，需要开发者手写请求和响应的数据类。 | `TPC` | Cangjie | ★ 26 / Fork 1 | 2025-06-09 · 低活跃 | — |
| [metaphone4cj](https://gitcode.com/Cangjie-TPC/metaphone4cj) | 语音算法，支持将一个特定的字符串（通常是一个英文单词），将其转化为一个代码，然后可以将其与其他代码（或其他单词）进行比较，以检查他们是否（可能）发音相同。 | `TPC` | Cangjie | ★ 29 / Fork 1 | 2025-07-04 · 低活跃 | MIT |
| [ribbon4cj](https://gitcode.com/Cangjie-TPC/ribbon4cj) | 仓颉原生微服务客户端负载均衡器。支持随机/轮询/基于响应时间为权重的轮询算法；支持动态负载均衡列表，支持Apollo/Eureka注册中心；内置区域感知的负载均衡器实现。适配仓颉1.0.0 LTS版本。 | `TPC` | Cangjie | ★ 9 / Fork 1 | 2025-09-11 · 维护中 | Apache-2.0 |

### Cangjie-SIG 孵化库

#### Web、网络与协议

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cangjie-nacos-client](https://gitcode.com/Cangjie-SIG/cangjie-nacos-client) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 1 | 2025-12-17 · 维护中 | Apache-2.0 |
| [cj_ftp](https://gitcode.com/Cangjie-SIG/cj_ftp) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 23 / Fork 1 | 2025-05-29 · 低活跃 | Apache-2.0 |
| [cj_mail](https://gitcode.com/Cangjie-SIG/cj_mail) | 仓颉邮件协议库支持 SMTP / POP / IMAP / BASE64 | `SIG` | Cangjie | ★ 12 / Fork 0 | 2025-03-21 · 低活跃 | Apache-2.0 |
| [cj_socks](https://gitcode.com/Cangjie-SIG/cj_socks) | 仓颉socks5、socks4客户端协议库 | `SIG` | Cangjie | ★ 6 / Fork 0 | 2025-03-19 · 低活跃 | Apache-2.0 |
| [dapr-cangjie-sdk](https://gitcode.com/Cangjie-SIG/dapr-cangjie-sdk) | Dapr Cangjie SDK是Dapr SDK的仓颉实现，实现了一个支持使用 HTTP 协议访问 Dapr 边车的客户端。 | `SIG` | Cangjie | ★ 9 / Fork 0 | 2026-03-23 · 活跃 | MIT |
| [easyapi](https://gitcode.com/Cangjie-SIG/easyapi) | 轻量级Http服务框架 | `SIG` | Cangjie | ★ 30 / Fork 1 | 2025-07-14 · 低活跃 | MulanPSL-2.0 |
| [feign4cj](https://gitcode.com/Cangjie-SIG/feign4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 0 | 2025-11-16 · 维护中 | MIT |
| [ginger](https://gitcode.com/Cangjie-SIG/ginger) | Ginger是一个轻量级的httpClient库，支持多种请求配置，及使用函数方式注册拦截器链。 | `SIG` | Cangjie | ★ 28 / Fork 3 | 2026-04-02 · 活跃 | Apache-2.0 |
| [grpc-cj](https://gitcode.com/Cangjie-SIG/grpc-cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 19 / Fork 1 | 2025-08-13 · 维护中 | Apache-2.0 |
| [http_router](https://gitcode.com/Cangjie-SIG/http_router) | 提供标准化的路由注册、路由匹配能力 | `SIG` | Cangjie | ★ 11 / Fork 0 | 2026-03-11 · 活跃 | MulanPSL-2.0 |
| [kafka4cj](https://gitcode.com/Cangjie-SIG/kafka4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2025-09-02 · 维护中 | — |
| [nacos-client](https://gitcode.com/Cangjie-SIG/nacos-client) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 0 | 2025-08-10 · 维护中 | NOASSERTION |
| [tea](https://gitcode.com/Cangjie-SIG/tea) | 仓颉语言轻量级的、函数式的、高效的HTTP Web后端框架 | `SIG` | Cangjie | ★ 25 / Fork 3 | 2025-07-04 · 低活跃 | MIT |
| [thrift4cj](https://gitcode.com/Cangjie-SIG/thrift4cj) | 简介待补；使用前请先核验 README。 | `SIG` | C++ | ★ 1 / Fork 0 | 2026-04-08 · 活跃 | Apache-2.0 |
| [wamr-cj](https://gitcode.com/Cangjie-SIG/wamr-cj) | 这是 WAMR (WebAssembly Micro Runtime) 的仓颉编程语言绑定，提供了在仓颉中运行 WebAssembly 模块的完整支持。 | `SIG` | C | ★ 2 / Fork 1 | 2026-07-26 · 活跃 | Apache-2.0 |
| [webview-ffi](https://gitcode.com/Cangjie-SIG/webview-ffi) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 3 / Fork 0 | 2024-11-19 · 低活跃 | MIT |

#### 数据、存储与序列化

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [alipay_sdk_cj](https://gitcode.com/Cangjie-SIG/alipay_sdk_cj) | AliPay Sdk for 仓颉 支付宝接口后端sdk，方便cangjie开发者快速接入支付宝的支付接口（目前只支持最广泛使用的商户直接接入模式，只支持最安全的RSA2，公钥证书方式签名验证方式,默认只支持utf-8编码和JSON格式） | `SIG` | Cangjie | ★ 11 / Fork 0 | 2025-07-02 · 低活跃 | MulanPSL-2.0 |
| [cangjie_toml](https://gitcode.com/Cangjie-SIG/cangjie_toml) | Cangjie TOML 是一个符合仓颉语言标准库 serialization.serialization 包风格的 TOML 文件解析库，支持 toml 文件到 DataModel 的转换。 | `SIG` | Cangjie | ★ 10 / Fork 1 | 2025-09-03 · 维护中 | MIT |
| [cjmustache](https://gitcode.com/Cangjie-SIG/cjmustache) | 一个迁移自 jmustache 的模版引擎项目。 | `SIG` | Cangjie | ★ 21 / Fork 0 | 2026-06-09 · 活跃 | Apache-2.0 |
| [classTransformer4cj](https://gitcode.com/Cangjie-SIG/classTransformer4cj) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2025-03-11 · 低活跃 | — |
| [excel-cj](https://gitcode.com/Cangjie-SIG/excel-cj) | 一个使用仓颉（Cangjie）语言开发的 Excel 文件处理库，支持 XLSX、CSV 格式的读取和写入。 | `SIG` | Cangjie | ★ 6 / Fork 0 | 2026-01-10 · 维护中 | Apache-2.0 |
| [json-schema-validator-cj](https://gitcode.com/Cangjie-SIG/json-schema-validator-cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2026-06-25 · 活跃 | Apache-2.0 |
| [mariadb-driver](https://gitcode.com/Cangjie-SIG/mariadb-driver) | MariaDB驱动，适配MySQL、TiDB、OceanBase数据库。 | `SIG` | Cangjie | ★ 88 / Fork 32 | 2026-07-02 · 活跃 | Apache-2.0 |
| [multipart](https://gitcode.com/Cangjie-SIG/multipart) | multipart/form-data请求体解析工具 | `SIG` | Cangjie | ★ 12 / Fork 0 | 2026-03-11 · 活跃 | MulanPSL-2.0 |
| [mustache-cj](https://gitcode.com/Cangjie-SIG/mustache-cj) | 基于仓颉实现的mustache模板引擎 | `SIG` | Cangjie | ★ 10 / Fork 0 | 2026-07-26 · 活跃 | MulanPSL-2.0 |
| [mysql-driver-cj](https://gitcode.com/Cangjie-SIG/mysql-driver-cj) | 仓颉原生 mysql 驱动实现，专注更少的代码，更好的性能。自带链接池管理, 符合原生协程编程方式。实现官方 datbase.sql 接口。 | `SIG` | Cangjie | ★ 8 / Fork 1 | 2024-11-14 · 低活跃 | MIT |
| [simplekv](https://gitcode.com/Cangjie-SIG/simplekv) | simplekv是一个用Cangjie语言实现的高效、简洁的键值存储库，支持快速的数据查找、插入、删除，并具备排序数据获取、范围扫描、并发安全等高级功能，适用于需要高性能数据存储的场景。 | `SIG` | Cangjie | ★ 15 / Fork 1 | 2026-03-27 · 活跃 | MIT |
| [sql_builder](https://gitcode.com/Cangjie-SIG/sql_builder) | sql_builder 库是一个使用仓颉语言数据库ORM组件 | `SIG` | Cangjie | ★ 20 / Fork 6 | 2026-06-23 · 活跃 | MulanPSL-2.0 |
| [UMI-ORM](https://gitcode.com/Cangjie-SIG/UMI-ORM) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 1 | 2025-11-23 · 维护中 | Apache-2.0 |

#### 安全与密码学

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cjgeohash](https://gitcode.com/Cangjie-SIG/cjgeohash) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 18 / Fork 0 | 2026-03-24 · 活跃 | Apache-2.0 |
| [cjoy](https://gitcode.com/Cangjie-SIG/cjoy) | 一个高性能、可扩展、轻量、省心的仓颉应用开发框架。IoC，Rest，宏路由，Json，中间件，参数绑定与校验，文件上传下载，OAuth2，MCP...... | `SIG` | Cangjie | ★ 138 / Fork 25 | 2026-05-16 · 活跃 | MulanPSL-2.0 |
| [hashlib4cj](https://gitcode.com/Cangjie-SIG/hashlib4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 10 / Fork 0 | 2025-06-13 · 低活跃 | MIT |

#### 算法、科学计算与 AI

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cj-money](https://gitcode.com/Cangjie-SIG/cj-money) | 一个用于解决金融计算领域浮点数误差的库。 | `SIG` | Cangjie | ★ 20 / Fork 0 | 2025-07-19 · 低活跃 | MIT |
| [cjgrapht](https://gitcode.com/Cangjie-SIG/cjgrapht) | 一个图论数据结构和算法库，提供多种图结构以及图算法。 | `SIG` | Cangjie | ★ 106 / Fork 96 | 2025-07-04 · 低活跃 | Apache-2.0 |
| [cjnum](https://gitcode.com/Cangjie-SIG/cjnum) | 这是一个用于 Cangjie 语言的数值计算库，提供了广泛的数学、科学计算和数值分析功能。 | `SIG` | Cangjie | ★ 27 / Fork 9 | 2026-05-22 · 活跃 | Apache-2.0 |
| [flashtext4cj](https://gitcode.com/Cangjie-SIG/flashtext4cj) | 一个相比正则表达式更快的关键词检索定位工具 （尚处开发阶段，暂不推荐应用于科研等严肃领域） | `SIG` | Cangjie | ★ 0 / Fork 0 | 2026-03-27 · 活跃 | MIT |
| [genex-cj](https://gitcode.com/Cangjie-SIG/genex-cj) | 生成表达式（Generate Expression，简称：Genex或GE）是一款用于按照指定语法规则随机或固定生成数据的功能库。主要适用于依赖规则数据的应用场景，例如：应用测试、模板数据生成等。Genex基于伪随机的生成器，确保在规则和随机种子相同的前提下，生成一致的随机结果。 | `SIG` | Cangjie | ★ 31 / Fork 0 | 2026-03-29 · 活跃 | Apache-2.0 |
| [Indexer4cj](https://gitcode.com/Cangjie-SIG/Indexer4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 0 | 2024-10-24 · 低活跃 | MIT |
| [linear_algebra](https://gitcode.com/Cangjie-SIG/linear_algebra) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2025-06-28 · 低活跃 | — |
| [mlearn4cj](https://gitcode.com/Cangjie-SIG/mlearn4cj) | MLearn4CJ 是一个全面的机器学习库，专为仓颉（Cangjie）语言设计。它包含了丰富的机器学习算法，涵盖分类、回归、聚类、降维、神经网络等领域。 | `SIG` | Cangjie | ★ 7 / Fork 0 | 2026-01-13 · 维护中 | Apache-2.0 |
| [porter2_stemmer](https://gitcode.com/Cangjie-SIG/porter2_stemmer) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2025-06-11 · 低活跃 | — |
| [random](https://gitcode.com/Cangjie-SIG/more-random) | 高可扩展、强定制化的伪随机数生成器工具库，允许开发者无缝集成自定义伪随机数生成算法，支持主流概率分布的随机数生成，并提供简洁易用的 API ，适用于科研仿真、数据分析、游戏开发、密码学原型验证等多场景需求，兼顾灵活性与实用性。 | `SIG` | Cangjie | ★ 2 / Fork 1 | 2026-05-19 · 活跃 | MIT |
| [snowflake4cj](https://gitcode.com/Cangjie-SIG/snowflake4cj) | 仓颉的雪花算法库 Snowflake algorithm for Cangjie | `SIG` | Cangjie | ★ 5 / Fork 0 | 2026-07-26 · 活跃 | MIT |
| [stats4cj](https://gitcode.com/Cangjie-SIG/stats4cj) | stats4cj是一个仓颉实现的数学统计库，包括总体/样本均值、总体/样本方差、分位数、统计分布等多种数理统计函数。 | `SIG` | Cangjie | ★ 23 / Fork 1 | 2026-04-25 · 活跃 | Apache-2.0 |
| [whatlang4cj](https://gitcode.com/Cangjie-SIG/whatlang4cj) | 一个快捷高效的自然语言检测库 | `SIG` | Cangjie | ★ 12 / Fork 2 | 2026-03-28 · 活跃 | MIT |
| [xurls4cj](https://gitcode.com/Cangjie-SIG/xurls4cj) | 从文本中提取 URL | `SIG` | Cangjie | ★ 10 / Fork 0 | 2026-03-28 · 活跃 | MIT |

#### UI、图形与多媒体

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [aad4cj](https://gitcode.com/Cangjie-SIG/aad4cj) | aad4cj 是一个基于仓颉（Cangjie）语言实现的 AAC 音频码流解析与处理组件库。 | `SIG` | Cangjie | ★ 8 / Fork 1 | 2026-03-28 · 活跃 | Apache-2.0 |
| [cj-cef](https://gitcode.com/Cangjie-SIG/cj-cef) | CEF(Chromium Embedded Framework)仓颉端封装扩展。作为仓颉桌面端开发框架， 实现基于html、css、 js和仓颉进行跨平台桌面开发的能力。底层使用C语言对CEF C API封装，天生具备高性能，同时还保留了CEF C API在仓颉端结构和接口的直接映射，可直接在仓颉端扩展CEF功能 | `SIG` | C | ★ 14 / Fork 0 | 2025-11-09 · 维护中 | MIT |
| [cjfltk](https://gitcode.com/Cangjie-SIG/cjfltk) | 轻量化跨平台 GUI 框架 | `SIG` | Cangjie | ★ 4 / Fork 0 | 2025-12-21 · 维护中 | MIT |
| [CJTUI](https://gitcode.com/Cangjie-SIG/CJTUI) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 1 | 2026-01-07 · 维护中 | MulanPSL-2.0 |
| [dcmtk-cj](https://gitcode.com/Cangjie-SIG/dcmtk-cj) | DCMTK 3.9.6接口的仓颉封装 | `SIG` | C | ★ 8 / Fork 0 | 2025-11-19 · 维护中 | NOASSERTION |
| [gui4cj](https://gitcode.com/Cangjie-SIG/gui4cj) | gui4cj 是一个用仓颉（Cangjie）语言编写的跨平台图形用户界面（GUI）库，使用 OpenGL 进行硬件加速渲染。 | `SIG` | Cangjie | ★ 17 / Fork 1 | 2026-01-27 · 活跃 | Apache-2.0 |
| [image4cj](https://gitcode.com/Cangjie-SIG/image4cj) | 提供基础图片处理能力 | `SIG` | Cangjie | ★ 13 / Fork 0 | 2025-07-02 · 低活跃 | BSD-3-Clause |
| [imgui4cj](https://gitcode.com/Cangjie-SIG/imgui4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 0 | 2024-09-09 · 低活跃 | MIT |
| [minimp3-cj](https://gitcode.com/Cangjie-SIG/minimp3-cj) | 一个完全由仓颉语言实现的高性能MP3解码器，参照著名的minimp3 C库重新实现。该项目提供了完整的MP3音频解码功能，支持将MP3文件转换为PCM音频数据。 并在其基础上增加输出为WAV音频文件支持。 | `SIG` | Cangjie | ★ 33 / Fork 0 | 2025-12-29 · 维护中 | CC0-1.0 |
| [ratatui](https://gitcode.com/Cangjie-SIG/ratatui) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 12 / Fork 2 | 2026-01-09 · 维护中 | MIT |
| [RGF_CJ](https://gitcode.com/Cangjie-SIG/RGF_CJ) | RGF是仓颉Windows系统下的通用渲染框架（兼应用开发框架）。RGF仓颉版（后续简称"RGF"）基于RGF(C/C++版)封装优化而来。RGF为开发者提供轻量化、安全、高性能以及高度一致性的2D渲染能力以及常用的桌面应用开发工具，并且提供对接Direct3D的相关接口，以满足开发者对3D画面渲染的需求。在Windows开发方面，RG… | `SIG` | Cangjie | ★ 100 / Fork 6 | 2026-03-25 · 活跃 | Apache-2.0 |

#### 系统、并发与互操作

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cactor](https://gitcode.com/Cangjie-SIG/cactor) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 13 / Fork 0 | 2026-05-06 · 活跃 | MIT |
| [cjbind-cangjie](https://gitcode.com/Cangjie-SIG/cjbind-cangjie) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 3 / Fork 3 | 2026-04-16 · 活跃 | MIT |
| [distributed-actors-cj](https://gitcode.com/Cangjie-SIG/distributed-actors-cj) | 一个为仓颉编程语言设计的分布式 Actor 框架，提供基于 Actor 的并发与分布式计算能力，支持本地与远程通信，并可通过 MCP 协议将 Actor 以工具形式集成到 AI 智能体中。 | `SIG` | Cangjie | ★ 2 / Fork 0 | 2026-03-18 · 活跃 | MIT |

#### 测试与质量

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [assert4cj](https://gitcode.com/Cangjie-SIG/assert4cj) | assert4cj 是一个基于函数断言的单元测试库, 受到 junit-jupiter-api 启发。 | `SIG` | Cangjie | ★ 2 / Fork 0 | 2024-09-08 · 低活跃 | Apache-2.0 |
| [BACnetCodec4cj](https://gitcode.com/Cangjie-SIG/BACnetCodec4cj) | BACnet通讯协议的编码解码库。 BACnet是楼宇自控、HVAC设备领域的重要ISO标准通讯协议，在楼宇自动行业有着极高的使用率。本项目协议文档参照的是ISO16484-5-2022版本。本项目测试参照BACNET协议栈测试工具VTS Visual Test Shell(VTS) v3.6.7 的生成结果作为测试标准。目前本项目还在… | `SIG` | Cangjie | ★ 26 / Fork 0 | 2025-10-20 · 维护中 | MIT |

#### 基础与通用

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [address4cj](https://gitcode.com/Cangjie-SIG/address4cj) | 处理地址表示、验证和格式化。 | `SIG` | Cangjie | ★ 11 / Fork 0 | 2026-03-28 · 活跃 | MIT |
| [ansies4cj](https://gitcode.com/Cangjie-SIG/ansies4cj) | ANSI转义序列生成，以及基于ANSI转义序列的输出文本颜色和样式、光标操作、屏幕擦除等控制。 | `SIG` | Cangjie | ★ 11 / Fork 1 | 2026-02-02 · 活跃 | MulanPSL-2.0 |
| [CJ-EKU](https://gitcode.com/Cangjie-SIG/CJ-EKU) | 简洁代码提供常用宏 | `SIG` | Cangjie | ★ 2 / Fork 0 | 2025-01-16 · 低活跃 | MIT |
| [cjdotenv](https://gitcode.com/Cangjie-SIG/cjdotenv) | A Cangjie library to load environment variables from `.env`. | `SIG` | Cangjie | ★ 11 / Fork 2 | 2026-07-26 · 活跃 | MIT |
| [cjok](https://gitcode.com/Cangjie-SIG/cjok) | 仓颉运算符扩展工具集（Cangjie Operation Kit） | `SIG` | Cangjie | ★ 10 / Fork 1 | 2025-05-30 · 低活跃 | MulanPSL-2.0 |
| [cli-cj](https://gitcode.com/Cangjie-SIG/cli-cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 14 / Fork 1 | 2026-07-26 · 活跃 | MulanPSL-2.0 |
| [dateparse4cj](https://gitcode.com/Cangjie-SIG/dateparse4cj) | dateparse4cj 是一个基于 cangjie 标准库实现的高性能、功能丰富的日期时间解析库。它能够自动识别并解析多种格式的日期字符串，支持全球各种常见日期格式，包括各种区域标准、时区处理以及多语言日期表示。该库适合需要处理各种不同格式日期输入的应用程序。 | `SIG` | Cangjie | ★ 22 / Fork 1 | 2026-03-27 · 活跃 | MIT |
| [filetype4cj](https://gitcode.com/Cangjie-SIG/filetype4cj) | 通过检查魔数签名推断文件和 MIME 类型 | `SIG` | Cangjie | ★ 17 / Fork 1 | 2026-03-27 · 活跃 | MIT |
| [fountain](https://gitcode.com/Cangjie-SIG/fountain) | 一个用于服务器应用开发的综合工具库。 - 零配置文件 - 环境变量和命令行参数配置 - 约定优于配置 - 深刻利用仓颉语言特性 - 只需要开发动态链接库，fboot负责加载、初始化并运行。 | `SIG` | Cangjie | ★ 358 / Fork 60 | 2026-07-26 · 活跃 | Apache-2.0 |
| [handy4cj](https://gitcode.com/Cangjie-SIG/handy4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 10 / Fork 0 | 2026-03-28 · 活跃 | MIT |
| [humanize4cj](https://gitcode.com/Cangjie-SIG/humanize4cj) | 一个用于 Cangjie 语言的编写的数据格式化工具库，提供"人性化"显示的功能,用于将数值、时间等信息转换为容易阅读的形式。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2025-06-04 · 低活跃 | Apache-2.0 |
| [InterCeptor](https://gitcode.com/Cangjie-SIG/InterCeptor) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 0 / Fork 0 | 2025-11-12 · 维护中 | MIT |
| [itertools](https://gitcode.com/Cangjie-SIG/itertools) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2026-01-07 · 维护中 | Apache-2.0 |
| [light_html](https://gitcode.com/Cangjie-SIG/light_html) | Light_Html 是 cangjie 的轻量级 html 库，能够解析 html 文档生成 cangjie 的文档对象、对 html 元素进行增删改、使用 CSS 选择器操作元素等功能。 | `SIG` | Cangjie | ★ 4 / Fork 0 | 2024-11-02 · 低活跃 | Apache-2.0 |
| [locale_config](https://gitcode.com/Cangjie-SIG/locale_config) | 本地化配置管理系统 | `SIG` | Cangjie | ★ 10 / Fork 0 | 2025-08-30 · 维护中 | MIT |
| [priorityqueue4cj](https://gitcode.com/Cangjie-SIG/priorityqueue4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2026-07-26 · 活跃 | Apache-2.0 |
| [simpleioc](https://gitcode.com/Cangjie-SIG/simpleioc) | simpleioc是一款基于反射的依赖注入容器。IOC容器允许注册类型和创建实例，而不必直接在代码中创建对象实例，这有助于降低代码间的耦合度，提高代码的模块化和可测试性。 | `SIG` | Cangjie | ★ 11 / Fork 0 | 2025-09-13 · 维护中 | MIT |
| [stringbuilder](https://gitcode.com/Cangjie-SIG/stringbuilder) | 更自由、更强大的StringBuilder工具类 | `SIG` | Cangjie | ★ 11 / Fork 1 | 2025-07-02 · 低活跃 | MulanPSL-2.0 |
| [tabulate4cj](https://gitcode.com/Cangjie-SIG/tabulate4cj) | tabulate4cj - 使用 仓颉 轻松美化 表格数据。 | `SIG` | Cangjie | ★ 15 / Fork 1 | 2026-03-27 · 活跃 | Apache-2.0 |
| [terminalcolor](https://gitcode.com/Cangjie-SIG/terminalcolor) | 符合直觉的终端颜色库，看一眼就会使用。 | `SIG` | Cangjie | ★ 31 / Fork 1 | 2026-03-21 · 活跃 | MulanPSL-2.0 |
| [tokensplit4cj](https://gitcode.com/Cangjie-SIG/tokensplit4cj) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 1 / Fork 0 | 2026-03-28 · 活跃 | MIT |

### 个人与其他组织的精选库

> GitCode 的站内搜索有时只返回展示名而不暴露稳定命名空间；无法直接解析的少量记录使用精确的站内搜索链接。

#### Web、网络与协议

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [ignite-cangjie](https://gitcode.com/cinyu/ignite-cangjie) | 仓颉胃，Express味！🎉🎉🎉🎉🎉🎉🎉🎉🎉可能是仓颉语言里最完善的 Web框架 之一(小字)🎉🎉🎉 Ignite（叶燧）是专为仓颉语言打造、面向真实服务落地的 Web框架，致力于使用仓颉快速上手你的 Web服务项目 。 内置skills，集路由、中间件、Swagger、静态托管、SSE/WebSocket，还有… | `cinyu` | Cangjie | ★ 8 / Fork 2 | 1 day ago · 活跃 | Apache-2.0 |
| [spire](https://gitcode.com/soulsoft/spire) | Spire (天擎) 一个基于仓颉语言开发、借鉴 ASP.NET Core 设计哲学的现代化 Web 框架。我们与仓颉官方团队共同研发，致力于打造轻量级、高性能、可扩展的应用开发体验。（1.0版本已上线） | `soulsoft` | Cangjie | ★ 81 / Fork 16 | 7 days ago · 活跃 | Others |
| [tea](https://gitcode.com/yishengTH/tea) | 仓颉后端生态高性能、高可用、功能完整的Web后端框架 | `yishengTH` | Cangjie | ★ 146 / Fork 13 | 3 months ago · 活跃 | MIT |
| [cangjieWeb](https://gitcode.com/ZhaoJun-zfh/cangjieWeb) | 简介待补；使用前请先核验 README。 | `ZhaoJun-zfh` | Cangjie | ★ 14 / Fork 5 | 5 months ago · 活跃 | — |

#### 数据、存储与序列化

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cangjie-html](https://gitcode.com/search?q=cangjie-html&type=repo&l=Cangjie) | 声明式HTML构建工具 | `开源仓颉第三方开发者社区` | Cangjie | ★ 7 / Fork 0 | 1 year ago · 低活跃 | — |
| [xlsx4cj](https://gitcode.com/LilFlameZ/xlsx4cj) | 纯仓颉语言实现的 Excel xlsx 文件读写库，基于 Office Open XML 标准，无需任何 C FFI 或外部依赖。 | `LilFlameZ` | Cangjie | ★ 31 / Fork 1 | 2 days ago · 活跃 | Apache-2.0 |
| [cangjie_toml](https://gitcode.com/PermissionDog/cangjie_toml) | Cangjie TOML 是一个符合仓颉语言标准库 serialization.serialization 包风格的 TOML 文件解析库，支持 toml 文件到 DataModel 的转换。 | `PermissionDog` | Cangjie | ★ 12 / Fork 3 | 1 year ago · 低活跃 | MIT |
| [cangjie-mysql-driver](https://gitcode.com/service/cangjie-mysql-driver) | 仓颉原生 mysql 驱动实现，专注更少的代码，更好的性能。自带链接池管理, 符合原生协程编程方式。实现官方 datbase.sql 接口。 | `service` | Cangjie | ★ 21 / Fork 1 | 1 year ago · 低活跃 | MIT |
| [badger-storm](https://gitcode.com/ystyle/badger-storm) | 嵌入式 JSON 文档数据库 —— 纯仓颉实现，零 FFI 依赖，为仓颉语言提供简单高效的对象存储。 | `ystyle` | Cangjie | ★ 14 / Fork 0 | 1 day ago · 活跃 | MIT |

#### 安全与密码学

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [jinguiSSL](https://gitcode.com/cinyu/jinguiSSL) | jinguiSSL (金匮)是纯仓颉实现的 SSL/TLS 与密码学库，灵感来自无聊SSL[😁](https://boringssl.googlesource.com/boringssl/) 的接口与安全规范，为仓颉语言生态提供安全、可靠、高性能的底层加密能力。目前专注于交付HTTP/SSH，欢迎提交issue | `cinyu` | Cangjie | ★ 8 / Fork 2 | 8 days ago · 活跃 | Apache-2.0 |

#### 算法、科学计算与 AI

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [learning_ml_cj](https://gitcode.com/abcd1234-wyj/learning_ml_cj) | 【思路来源】启元实验室 - InfiniLM、“InfiniTensor：人工智能编译器与大模型系统训练营”方向3系列课程 【简要介绍】脱胎于“InfiniTensor：人工智能编译器与大模型系统训练营”的方向3，其旨在自己复现python里ml的“transformer”库的部分功能。在我完成其基本内容后，我决定将其移植至仓颉社区，以… | `abcd1234-wyj` | Cangjie | ★ 15 / Fork 2 | 1 year ago · 低活跃 | MIT |

#### 语言、DSL 与运行时

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [Cangjie-DSLKit](https://gitcode.com/belyaev-mikhail/Cangjie-DSLKit) | Cangjie DSLKit: the ultimate future tool for building your DSLs | `belyaev-mikhail` | Cangjie | ★ 3 / Fork 4 | 16 days ago · 活跃 | — |
| [cjp-language](https://gitcode.com/cangjie-script/cjp-language) | 由仓颉实现的脚本语言 | `cangjie-script` | Cangjie | ★ 10 / Fork 1 | 1 year ago · 低活跃 | MIT |
| [xisp](https://gitcode.com/ystyle/xisp) | 仓颉嵌入式 Lisp 脚本语言 | `ystyle` | Cangjie | ★ 5 / Fork 0 | 18 days ago · 活跃 | MIT |

#### OpenHarmony 平台封装

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [ability_ability_cangjie_wrapper](https://gitcode.com/OpenHarmony/ability_ability_cangjie_wrapper) | 元能力仓颉封装 | `OpenHarmony` | Cangjie | ★ 2 / Fork 23 | 2 days ago · 活跃 | — |
| [accesscontrol_accesscontrol_cangjie_wrapper](https://gitcode.com/OpenHarmony/accesscontrol_accesscontrol_cangjie_wrapper) | 仓颉程序访问控制能力封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 6 days ago · 活跃 | — |
| [applications_applications_cangjie_wrapper](https://gitcode.com/OpenHarmony/applications_applications_cangjie_wrapper) | 系统应用模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 22 | 6 days ago · 活跃 | — |
| [arkcompiler_cangjie_ark_interop](https://gitcode.com/OpenHarmony/arkcompiler_cangjie_ark_interop) | 仓颉互操作库 | `OpenHarmony` | Cangjie | ★ 18 / Fork 66 | 6 days ago · 活跃 | Apache-2.0 |
| [arkui_arkui_cangjie_wrapper](https://gitcode.com/OpenHarmony/arkui_arkui_cangjie_wrapper) | The OpenHarmony Cangjie UI framework based on ArkUI framework. | `OpenHarmony` | Cangjie | ★ 13 / Fork 46 | 22 hours ago · 活跃 | Apache-2.0 |
| [arkweb_arkweb_cangjie_wrapper](https://gitcode.com/OpenHarmony/arkweb_arkweb_cangjie_wrapper) | web组件仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 6 days ago · 活跃 | — |
| [bundlemanager_bundlemanager_cangjie_wrapper](https://gitcode.com/OpenHarmony/bundlemanager_bundlemanager_cangjie_wrapper) | 仓颉包管理封装 | `OpenHarmony` | Cangjie | ★ 2 / Fork 21 | 2 days ago · 活跃 | — |
| [communication_communication_cangjie_wrapper](https://gitcode.com/OpenHarmony/communication_communication_cangjie_wrapper) | RPC模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 2 days ago · 活跃 | — |
| [connectivity_connectivity_cangjie_wrapper](https://gitcode.com/OpenHarmony/connectivity_connectivity_cangjie_wrapper) | WLAN服务能力、蓝牙服务等模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 2 / Fork 22 | 2 days ago · 活跃 | — |
| [distributeddatamgr_distributeddatamgr_cangjie_wrapper](https://gitcode.com/OpenHarmony/distributeddatamgr_distributeddatamgr_cangjie_wrapper) | 分布式数据管理子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 18 | 6 days ago · 活跃 | — |
| [filemanagement_filemanagement_cangjie_wrapper](https://gitcode.com/OpenHarmony/filemanagement_filemanagement_cangjie_wrapper) | 文件管理模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 21 | 6 days ago · 活跃 | — |
| [global_global_cangjie_wrapper](https://gitcode.com/OpenHarmony/global_global_cangjie_wrapper) | 全局化子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 29 | 6 days ago · 活跃 | — |
| [graphic_graphic_cangjie_wrapper](https://gitcode.com/OpenHarmony/graphic_graphic_cangjie_wrapper) | 图形子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 2 / Fork 17 | 6 days ago · 活跃 | — |
| [hiviewdfx_hiviewdfx_cangjie_wrapper](https://gitcode.com/OpenHarmony/hiviewdfx_hiviewdfx_cangjie_wrapper) | DFX子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 6 days ago · 活跃 | — |
| [location_location_cangjie_wrapper](https://gitcode.com/OpenHarmony/location_location_cangjie_wrapper) | 位置定位模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 24 | 6 days ago · 活跃 | — |
| [multimedia_multimedia_cangjie_wrapper](https://gitcode.com/OpenHarmony/multimedia_multimedia_cangjie_wrapper) | 媒体模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 2 / Fork 32 | 2 days ago · 活跃 | — |
| [netmanager_netmanager_cangjie_wrapper](https://gitcode.com/OpenHarmony/netmanager_netmanager_cangjie_wrapper) | 网络管理模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 2 days ago · 活跃 | — |
| [notification_notification_cangjie_wrapper](https://gitcode.com/OpenHarmony/notification_notification_cangjie_wrapper) | 事件通知子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 19 | 6 days ago · 活跃 | — |
| [powermgr_powermgr_cangjie_wrapper](https://gitcode.com/OpenHarmony/powermgr_powermgr_cangjie_wrapper) | 电源管理子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 20 | 6 days ago · 活跃 | — |
| [request_request_cangjie_wrapper](https://gitcode.com/OpenHarmony/request_request_cangjie_wrapper) | 上传下载子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 21 | 6 days ago · 活跃 | — |
| [sensors_sensors_cangjie_wrapper](https://gitcode.com/OpenHarmony/sensors_sensors_cangjie_wrapper) | 泛sensor子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 24 | 6 days ago · 活跃 | — |
| [startup_startup_cangjie_wrapper](https://gitcode.com/OpenHarmony/startup_startup_cangjie_wrapper) | 启动恢复子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 20 | 6 days ago · 活跃 | — |
| [telephony_telephony_cangjie_wrapper](https://gitcode.com/OpenHarmony/telephony_telephony_cangjie_wrapper) | 电话服务模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 2 / Fork 26 | 6 days ago · 活跃 | — |
| [testfwk_testfwk_cangjie_wrapper](https://gitcode.com/OpenHarmony/testfwk_testfwk_cangjie_wrapper) | 自动化测试框架模块仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 18 | 6 days ago · 活跃 | — |
| [third_party_cangjie_runtime](https://gitcode.com/OpenHarmony/third_party_cangjie_runtime) | 仓颉编程语言运行时与标准库 | `OpenHarmony` | Cangjie | ★ 3 / Fork 13 | 3 days ago · 活跃 | — |
| [time_time_cangjie_wrapper](https://gitcode.com/OpenHarmony/time_time_cangjie_wrapper) | 时间时区子系统仓颉封装层 | `OpenHarmony` | Cangjie | ★ 1 / Fork 23 | 6 days ago · 活跃 | — |
| [window_window_cangjie_wrapper](https://gitcode.com/OpenHarmony/window_window_cangjie_wrapper) | The OpenHarmony Cangjie windows framework. | `OpenHarmony` | Cangjie | ★ 4 / Fork 22 | 2 days ago · 活跃 | — |

## 工具与应用

### Cangjie-TPC 工具与应用

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [仓颉小智](https://gitcode.com/Cangjie-TPC/cangjiexiaozhi) | 简介待补；使用前请先核验 README。 | `TPC` | Kotlin | ★ 22 / Fork 1 | 2025-08-14 · 维护中 | Apache-2.0 |
| [CangChain](https://gitcode.com/Cangjie-TPC/CangChain) | 基于Cangjie的多智能体协同框架 | `TPC` | C++ | ★ 19 / Fork 4 | 2024-09-21 · 低活跃 | NOASSERTION |
| [CangjieMagic-MCPServer](https://gitcode.com/Cangjie-TPC/CangjieMagic-MCPServer) | 简介待补；使用前请先核验 README。 | `TPC` | Cangjie | ★ 23 / Fork 3 | 2025-04-24 · 低活跃 | MIT |
| [CangjieMigrator](https://gitcode.com/Cangjie-TPC/CangjieMigrator) | 仓颉语言api升级工具，提供自动升级老版本到新版本的api变更功能。 | `TPC` | — | ★ 4 / Fork 0 | 2025-10-14 · 维护中 | — |
| [cbc-engine](https://gitcode.com/Cangjie-TPC/cbc-engine) | 简介待补；使用前请先核验 README。 | `TPC` | C++ | ★ 1 / Fork 0 | 2026-07-14 · 活跃 | — |
| [cjc-hotfix-plugin](https://gitcode.com/Cangjie-TPC/cjc-hotfix-plugin) | 简介待补；使用前请先核验 README。 | `TPC` | C++ | ★ 2 / Fork 0 | 2026-07-14 · 活跃 | — |
| [codeformat4cj](https://gitcode.com/Cangjie-TPC/codeformat4cj) | 简介待补；使用前请先核验 README。 | `TPC` | Cangjie | ★ 2 / Fork 3 | 2026-07-17 · 活跃 | Apache-2.0 |
| [MagicExplorer](https://gitcode.com/Cangjie-TPC/MagicExplorer) | 基于CangjieMagic(Cangjie Agent DSL)开发的自然语言浏览器Agent系统 | `TPC` | JavaScript | ★ 23 / Fork 3 | 2025-10-11 · 维护中 | MIT |
| [TPC-Test-Framework](https://gitcode.com/Cangjie-TPC/TPC-Test-Framework) | 仓颉用例执行脚本 | `TPC` | Python | ★ 16 / Fork 1 | 2026-07-16 · 活跃 | Apache-2.0 |


### Cangjie-SIG：AI 与智能体工具

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [ACEHarness](https://gitcode.com/Cangjie-SIG/ACEHarness) | 重构你的Agent生产力 \| Your team of AI | `SIG` | TSX | ★ 162 / Fork 62 | 2026-07-25 · 活跃 | Apache-2.0 |
| [cangjie-docs-mcp](https://gitcode.com/Cangjie-SIG/cangjie-docs-mcp) | 专为Claude Code设计的仓颉语言文档检索MCP服务器，让你能够直接在Claude Code中高效查询仓颉编程语言的所有文档。 | `SIG` | Go | ★ 15 / Fork 0 | 2026-07-26 · 活跃 | MIT |
| [CangjieHelp](https://gitcode.com/Cangjie-SIG/CangjieHelp) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2026-03-17 · 活跃 | — |
| [CangjieKG](https://gitcode.com/Cangjie-SIG/CangjieKG) | 简介待补；使用前请先核验 README。 | `SIG` | Python | ★ 0 / Fork 0 | 2026-04-28 · 活跃 | — |
| [CangjieSkills](https://gitcode.com/Cangjie-SIG/CangjieSkills) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 78 / Fork 58 | 2026-07-24 · 活跃 | MIT |
| [DocAgent](https://gitcode.com/Cangjie-SIG/DocAgent) | 简介待补；使用前请先核验 README。 | `SIG` | Python | ★ 7 / Fork 2 | 2025-09-03 · 维护中 | — |
| [DocFlow](https://gitcode.com/Cangjie-SIG/DocFlow) | 简介待补；使用前请先核验 README。 | `SIG` | Python | ★ 15 / Fork 1 | 2026-02-06 · 活跃 | MIT |
| [SpecArtisan](https://gitcode.com/Cangjie-SIG/SpecLang) | 一个可验证的半形式化软件规约定义、以及配套的 AI 开发流程。目的是保证从需求设计 -&gt; 实现设计 -&gt; 代码产出全流程对需求的理解都完全一致。所有功能都以 skill 的形式承载。 | `SIG` | Markdown | ★ 2 / Fork 0 | 2026-07-22 · 活跃 | Apache-2.0 |

### Cangjie-SIG：IDE、编辑器与代码分析

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [CallGraphGenerator](https://gitcode.com/Cangjie-SIG/CallGraphGenerator) | 一款仓颉代码函数调用图生成工具 | `SIG` | Cangjie | ★ 3 / Fork 0 | 2025-12-22 · 维护中 | MIT-0 |
| [cangjie_toml_plugin](https://gitcode.com/Cangjie-SIG/cangjie_toml_plugin) | cangjie_toml_plugin 是一个面向 TOML 文件的 语言服务器协议（LSP） 实现，并对 仓颉 cjpm.toml 清单做了加强（按 schema 与 cjpm 规则做校验、补全、悬停）。服务端用 仓颉 编写，以 cjpm 可执行包形式构建，通过 标准输入输出 使用 JSON-RPC 传输 LSP（基于 jsonrpc… | `SIG` | Cangjie | ★ 3 / Fork 1 | 2026-07-10 · 活跃 | Apache-2.0 |
| [cangjie-packaging](https://gitcode.com/Cangjie-SIG/cangjie-packaging) | 简介待补；使用前请先核验 README。 | `SIG` | Ruby | ★ 1 / Fork 0 | 2025-12-04 · 维护中 | Apache-2.0 |
| [CJ-NVIM](https://gitcode.com/Cangjie-SIG/CJ-NVIM) | 简介待补；使用前请先核验 README。 | `SIG` | Lua | ★ 10 / Fork 0 | 2025-08-25 · 维护中 | Apache-2.0 |
| [cj2sql](https://gitcode.com/Cangjie-SIG/cj2sql) | 将仓颉代码转换成 SQL | `SIG` | Cangjie | ★ 27 / Fork 2 | 2026-05-02 · 活跃 | Apache-2.0 |
| [CJASTHelper](https://gitcode.com/Cangjie-SIG/CJASTHelper) | Cangjie Abstract Syntax Tree Helper | `SIG` | C++ | ★ 33 / Fork 3 | 2026-07-13 · 活跃 | Apache-2.0 |
| [cjman](https://gitcode.com/Cangjie-SIG/cjman) | 简介待补；使用前请先核验 README。 | `SIG` | Roff | ★ 5 / Fork 0 | 2026-07-26 · 活跃 | Apache-2.0 |
| [intellij-cangjie](https://gitcode.com/Cangjie-SIG/intellij-cangjie) | Intellij Platform 仓颉语言插件 | `SIG` | Kotlin | ★ 23 / Fork 1 | 2026-07-26 · 活跃 | Apache-2.0 |
| [J2CJ](https://gitcode.com/Cangjie-SIG/j2cj) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 26 / Fork 2 | 2026-02-09 · 活跃 | — |
| [magic-cli](https://gitcode.com/Cangjie-SIG/magic-cli) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 14 / Fork 14 | 2026-05-26 · 活跃 | — |
| [tree-sitter-cangjie](https://gitcode.com/Cangjie-SIG/tree-sitter-cangjie) | 简介待补；使用前请先核验 README。 | `SIG` | C | ★ 20 / Fork 5 | 2026-07-17 · 活跃 | MulanPSL-2.0 |

### Cangjie-SIG：网络与系统应用

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [gateway-cj](https://gitcode.com/Cangjie-SIG/gateway-cj) | 仓颉语言微服务网关 | `SIG` | HTML | ★ 0 / Fork 0 | 2026-05-09 · 活跃 | Apache-2.0 |
| [o_proxy_server](https://gitcode.com/Cangjie-SIG/o_proxy_server) | 反向代理服务器 作为客户端与后端服务器之间的中介，负责接收请求、转发至后端并将响应返回客户端，同时实现负载均衡、安全防护和性能优化等功能。 o_proxy_server 是使用仓颉语言实现的反向代理服务器, 实现了请求转发、身份验证、负载均衡、路径重写等功能 | `SIG` | Cangjie | ★ 10 / Fork 0 | 2026-03-24 · 活跃 | MIT |
| [pothos](https://gitcode.com/Cangjie-SIG/pothos) | Pothos 是一款动态域名解析工具，目前支持阿里云 DNS 云解析, 后续会支持其他主流服务商 DNS 云解析。 | `SIG` | Cangjie | ★ 25 / Fork 1 | 2025-08-14 · 维护中 | Apache-2.0 |

### 个人与其他组织：AI 与智能体应用

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [CM_AreaSolver](https://gitcode.com/search?q=CM_AreaSolver&type=repo&l=Cangjie) | 一款基于Cangjie Magic的智能几何计算系统 | `梅科尔工作室` | Cangjie | ★ 51 / Fork 0 | 11 months ago · 维护中 | — |
| [CM_BioSnap](https://gitcode.com/search?q=CM_BioSnap&type=repo&l=Cangjie) | 我们打造的菌趣百科小助手是基于Cangjie Magic智能体引擎与MCP协议开发的菌落知识互动平台，将专业微生物检测转化为趣味科学探索。 | `梅科尔工作室` | Cangjie | ★ 53 / Fork 2 | 6 months ago · 活跃 | — |
| [CM_Poem_Master](https://gitcode.com/search?q=CM_Poem_Master&type=repo&l=Cangjie) | 本项目涵盖Cangjie Magic环境配置到智能体构建和使用的全流程教程，以诗词大师的案例展现Cangjie Magic的开发优势 | `梅科尔工作室` | Cangjie | ★ 51 / Fork 1 | 6 months ago · 活跃 | — |
| [CM_Recipe](https://gitcode.com/search?q=CM_Recipe&type=repo&l=Cangjie) | 一款基于Cangjie Magic 打造智能食谱系统，做饭小白只需输入食材以及口味，便可生成一份详细且富有趣味的定制化菜谱 | `梅科尔工作室` | Cangjie | ★ 59 / Fork 2 | 11 months ago · 维护中 | — |
| [CM_SoilDoctor](https://gitcode.com/search?q=CM_SoilDoctor&type=repo&l=Cangjie) | 本项目将带领读者探索 Cangjie Magic 的开发环境配置、智能体构建方法，并通过土壤医生智能体这一实际应用案例，展示其在农业领域的强大潜力。 | `梅科尔工作室` | Cangjie | ★ 51 / Fork 0 | 8 months ago · 维护中 | — |
| [CM_WireBonding](https://gitcode.com/search?q=CM_WireBonding&type=repo&l=Cangjie) | 在半导体制造的精密世界里，引线键合过程以其高复杂性和高要求，成为生产环节中的关键挑战。而梅科尔工作室基于仓颉编程语言打造的 Cangjie Magic 平台，正以其独特的技术优势，为这一环节注入智能化的新活力 | `梅科尔工作室` | Cangjie | ★ 48 / Fork 1 | 11 months ago · 维护中 | — |
| [agentskills-runtime](https://gitcode.com/UCToo/agentskills-runtime) | AgentSkills Runtime 是一个基于仓颉编程语言实现的 Agent Skills 标准运行时环境。它是对MCP、WebMCP、AgentSkills、智能体互联国家标准GB/Z 185-2026等开放标准的国产技术栈实现，提供了安全、高效的 AI 智能体运行环境。同时提供了多语言SDK适配各种技术栈。旨在让 AgentSk… | `UCToo` | Cangjie | ★ 54 / Fork 5 | 2 days ago · 活跃 | MIT |

### 个人与其他组织：Web 与业务应用

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cangjie_permission_system](https://gitcode.com/ZhaoJun-zfh/cangjie_permission_system) | 简介待补；使用前请先核验 README。 | `ZhaoJun-zfh` | Cangjie | ★ 10 / Fork 1 | 6 months ago · 活跃 | — |

### 个人与其他组织：测试与质量工具

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [xts_acts_cangjie](https://gitcode.com/OpenHarmony-SIG/xts_acts_cangjie) | 提供仓颉语言应用兼容性测试套件，提供验证设备兼容性的执行机制，开发者可以借助此套件对兼容性进行评估和验证 | `OpenHarmony-SIG` | Cangjie | ★ 4 / Fork 4 | 4 days ago · 活跃 | Apache-2.0 |

## 学习、示例与生态资源

### TPC 资源

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [Community](https://gitcode.com/Cangjie-TPC/Community) | Cangjie-TPC（Third Party Components）仓颉编程语言三方库社区资源汇总 | `TPC` | — | ★ 57 / Fork 5 | 2025-03-25 · 低活跃 | — |
| [TPC-Cangjie-HarmonyOS-API](https://gitcode.com/Cangjie-TPC/TPC-Cangjie-HarmonyOS-API) | 简介待补；使用前请先核验 README。 | `TPC` | — | ★ 24 / Fork 0 | 2025-06-28 · 低活跃 | Apache-2.0 |
| [TPC-Resource](https://gitcode.com/Cangjie-TPC/TPC-Resource) | Cangjie-TPC（Third Party Components）仓颉编程语言三方库资源汇总 | `TPC` | Cangjie | ★ 154 / Fork 7 | 2025-12-09 · 维护中 | — |


### SIG 书籍与组织资源

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [仓颉编程基础及应用_陈波_何睿_重庆大学](https://gitcode.com/Cangjie-SIG/Cangjie_Basics_Application) | 《仓颉编程基础及应用》，清华大学出版社，2025年9月第1版： 1. 随书源代码； 2. PPT; 3.在线扩展阅读资料。 | `SIG` | HTML | ★ 11 / Fork 2 | 2025-11-17 · 维护中 | — |
| [仓颉编程快速上手-刘玥_张荣超](https://gitcode.com/Cangjie-SIG/cangjiebianchengkuaisushangshou-ZRC) | 《仓颉编程快速上手》专门为仓颉编程语言的初学者量身打造，目标是助力读者快速上手仓颉编程语言。书中每个章节均配备了翔实的示例，旨在加深读者对所学内容的理解，并提升应用仓颉编程语言的能力。通过学习本书，读者可以快速掌握仓颉语言编程技能，为迈向全场景应用开发高手之路奠定坚实的基础。 | `SIG` | Cangjie | ★ 43 / Fork 14 | 2025-07-01 · 低活跃 | — |
| [仓颉程序设计语言-刘安战](https://gitcode.com/Cangjie-SIG/cangjiechengxusheji-LAZ) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 2 / Fork 1 | 2024-10-25 · 低活跃 | — |
| [仓颉语言程序设计-董昱](https://gitcode.com/Cangjie-SIG/cangjieyuyanchengxusheji-DY) | 《仓颉语言程序设计》定位于仓颉语言的入门教程，成体系深入浅出地介绍仓颉语言应用开发的基础知识和常用标准库的使用方法，面向所有对仓颉语言的爱好者。 | `SIG` | Cangjie | ★ 5 / Fork 4 | 2024-10-23 · 低活跃 | — |
| [仓颉语言核心编程-徐礼文](https://gitcode.com/Cangjie-SIG/cangjieyuyanhexinbiancheng-XLW) | 面向全场景应用开发的仓颉语言作为基础软件的骨架，能够为我国自主可控的信息技术创新体系提供支撑。本书简明扼要地介绍了仓颉语言的基本开发功能和应用，是一部仓颉语言从入门到深入的优秀参考书 | `SIG` | C | ★ 10 / Fork 4 | 2024-10-30 · 低活跃 | — |
| [仓颉语言实战-张磊](https://gitcode.com/Cangjie-SIG/cangjieyuyanshizhan-ZL) | 仓颉语言实战由张磊编写，清华大学出版社出版。 该书践行“零基础入门仓颉语言”的理念，具有内容通俗易懂，知识点循序渐进的特点，可以帮助读者快速掌握仓颉编程语言。 | `SIG` | Cangjie | ★ 13 / Fork 4 | 2025-07-13 · 低活跃 | MulanPSL-2.0 |
| [仓颉语言元编程-张磊](https://gitcode.com/Cangjie-SIG/cangjieyuyanyuanbiancheng-ZL) | 仓颉语言元编程由张磊编写，清华大学出版社出版。该书从元编程的概念开始，逐步讲解仓颉元编程的基础知识、抽象语法树的常用用法，以及如何定义和使用仓颉宏。 | `SIG` | Cangjie | ★ 15 / Fork 3 | 2025-07-17 · 低活跃 | MulanPSL-2.0 |
| [图解仓颉编程-刘玥_张荣超](https://gitcode.com/Cangjie-SIG/tujiecangjiebiancheng-ZRC) | 《图解仓颉编程》系列图书采用广受好评的图解方式，并借助丰富的示例程序，力争做到通俗易懂、深入浅出地阐明仓颉编程语言的相关知识。本系列图书全彩印刷，图文并茂，附有全彩的学习路径图和知识脉络图。 | `SIG` | Cangjie | ★ 19 / Fork 2 | 2025-07-01 · 低活跃 | — |
| [图解仓颉高效编程-吴京润](https://gitcode.com/Cangjie-SIG/EffectiveCangjieWithDiagrams) | 本项目是《图解高效仓颉编程》的程序清单 | `SIG` | Cangjie | ★ 14 / Fork 4 | 2025-08-10 · 维护中 | — |
| [best_practice](https://gitcode.com/Cangjie-SIG/best_practice) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 2 | 2026-05-07 · 活跃 | CC-BY-4.0 |
| [Docs](https://gitcode.com/Cangjie-SIG/Docs) | Cangjie-SIG组织文档 | `SIG` | — | ★ 1 / Fork 0 | 2024-08-28 · 低活跃 | — |


### 社区示例

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [applications_app_samples_cangjie](https://gitcode.com/OpenHarmony-SIG/applications_app_samples_cangjie) | 仓颉鸿蒙示例仓库 | `OpenHarmony-SIG` | Cangjie | ★ 2 / Fork 5 | 5 months ago · 活跃 | CC-BY-4.0 |
| [仓颉标准库的样例代码](https://gitcode.com/search?q=%E4%BB%93%E9%A2%89%E6%A0%87%E5%87%86%E5%BA%93%E7%9A%84%E6%A0%B7%E4%BE%8B%E4%BB%A3%E7%A0%81&type=repo&l=Cangjie) | 仓颉标准库的样例代码 | `unravel` | Cangjie | ★ 6 / Fork 3 | 1 month ago · 活跃 | — |
| [rec_all_cangjie](https://gitcode.com/zhangyin_gitcode/rec_all_cangjie) | 仓颉领域驱动设计云原生开发示例项目。 | `zhangyin_gitcode` | Cangjie | ★ 9 / Fork 4 | 1 year ago · 低活跃 | Apache-2.0 |


### 官方基础设施与参考

这些是仓颉官方仓库，不计入“三方库 / 工具与应用”的收录数量，但用于建立生态上下文：

- [Cangjie/Cangjie-Examples](https://gitcode.com/Cangjie/Cangjie-Examples) — 本仓将收集和展示高质量的仓颉示例代码，欢迎大家投稿，让全世界看到您的妙趣设计，也让更多人通过您的编码理解和喜爱仓颉语言。（★ 857，2026-07-26）
- [Cangjie/HarmonyOS-Examples](https://gitcode.com/Cangjie/HarmonyOS-Examples) — 本仓将收集和展示仓颉鸿蒙应用示例代码，欢迎大家投稿，在仓颉鸿蒙社区展现你的妙趣设计！（★ 834，2026-07-21）
- [Cangjie/cangjie_runtime](https://gitcode.com/Cangjie/cangjie_runtime) — 仓颉编程语言运行时与标准库。（★ 639，2026-07-26）
- [Cangjie/cangjie_compiler](https://gitcode.com/Cangjie/cangjie_compiler) — 仓颉编译器源码及 cjdb 调试工具。（★ 619，2026-07-25）
- [Cangjie/cangjie_stdx](https://gitcode.com/Cangjie/cangjie_stdx) — 仓颉编程语言提供了 stdx 模块，该模块提供了网络、安全等领域的通用能力。（★ 559，2026-07-25）
- [Cangjie/cangjie_tools](https://gitcode.com/Cangjie/cangjie_tools) — 仓颉编程语言命令行工具，包括仓颉包管理工具、仓颉格式化工具、仓颉多语言桥接工具及仓颉语言服务。（★ 503，2026-07-25）
- [Cangjie/cangjie_docs](https://gitcode.com/Cangjie/cangjie_docs) — 仓颉编程语言开发者文档。（★ 503，2026-07-25）
- [Cangjie/CangjieCorpus](https://gitcode.com/Cangjie/CangjieCorpus) — 本仓库为仓颉编程语言语料库，聚焦 仓颉编程语言 核心知识体系，整合官方开发指南、API 文档、典型代码示例及语法规范等多维度资源，经结构化处理与专业标注，构建为支持 RAG（检索增强生成）技术 的高质量知识基座，适配智能编码助手、学习辅助工具等应用开发需求。 欢迎开发者基于本语…（★ 361，2026-06-17）

## 待补说明或待进一步核验

以下仓库已被采集，但公开简介或复用方式不足，因此暂不作为推荐项。完整记录仍保留在 JSON 快照中。

| 项目 | 简介 | 来源 | 主语言 | Star / Fork | 更新 / 活跃度 | 许可证 |
|---|---|---|---|---:|---|---|
| [cjhead](https://gitcode.com/Cangjie-TPC/cjhead) | 简介待补；使用前请先核验 README。 | `TPC` | — | ★ 10 / Fork 0 | 2025-07-03 · 低活跃 | — |
| [cangjie-lsh](https://gitcode.com/Cangjie-SIG/cangjie-lsh) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 9 / Fork 0 | 2025-06-06 · 低活跃 | MIT |
| [cj_boot](https://gitcode.com/Cangjie-SIG/cj_boot) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2024-11-25 · 低活跃 | — |
| [cj_color](https://gitcode.com/Cangjie-SIG/cj_color) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2025-01-02 · 低活跃 | — |
| [codelin](https://gitcode.com/Cangjie-SIG/codelin) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 17 / Fork 0 | 2025-08-08 · 维护中 | MIT |
| [hongtools](https://gitcode.com/Cangjie-SIG/hongtools) | 简介待补；使用前请先核验 README。 | `SIG` | Cangjie | ★ 6 / Fork 2 | 2025-01-15 · 低活跃 | MIT |
| [losu4cj](https://gitcode.com/Cangjie-SIG/losu4cj) | 简介待补；使用前请先核验 README。 | `SIG` | — | ★ 0 / Fork 0 | 2024-12-16 · 低活跃 | — |
| [cangjie_api_scan](https://gitcode.com/wjzInNj/cangjie_api_scan) | 简介待补；使用前请先核验 README。 | `wjzInNj` | Cangjie | ★ 0 / Fork 4 | 9 months ago · 维护中 | — |


## 外部项目筛选口径

重点组织采用全量扫描；个人和其他组织采用以下口径：

- 仓颉是主要实现语言，或项目直接服务于仓颉开发。
- 优先收录 `stars >= 10` 或 `forks >= 3` 的项目。
- 对仍活跃且填补关键空白的项目，放宽到 `stars >= 5` 或 `forks >= 2`，例如 Web 框架、纯仓颉 TLS、嵌入式数据库和脚本语言。
- 排除明显空仓、纯占位、重复课程作业、无可复用说明的仓库；这类命中可能仍存在于机器快照的候选记录中。
- Fork/镜像优先保留实际维护仓；OpenHarmony 仓颉封装因 Fork 较高且承担平台能力接入，单列展示。

## 数据来源

- [Cangjie-TPC 组织](https://gitcode.com/cangjie-tpc)
- [Cangjie-TPC 官方资源汇总](https://gitcode.com/Cangjie-TPC/TPC-Resource)
- [Cangjie-SIG 组织](https://gitcode.com/cangjie-sig)
- [GitCode 仓颉频道](https://gitcode.com/?tn=68db866406fdf740df364584)
- GitCode 站内搜索：`language:Cangjie` 下分别以 `a` 到 `z` 为查询词，遍历全部可见分页后按完整仓库路径去重；逐字母页数和结果行数见 [全量分类索引](./all-cangjie-projects.md#搜索审计)
- 关键词补漏：将既有 `仓颉 + language:Cangjie`、`Cangjie + language:Cangjie` 结果与 a–z 去重集做差，补回 27 个独有仓库

## 维护建议

- 每次更新统一记录快照日期，不实时嵌入会变化的徽章。
- 项目主表按名称排序，热门项目可另做榜单，避免 Star 变化导致清单频繁重排。
- 新增项目至少提供一句话简介、许可证、安装/运行方式、支持平台和最小示例。
- “活跃度”与“成熟度”分开判断；不要仅凭 Star 把项目标成稳定。
