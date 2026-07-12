# 端口映射

让外网好友加入你的服务器，EdgeCube 提供两种方式。

## UPnP 自动端口映射

利用路由器的 UPnP / NAT-PMP / NAT-PCP 协议自动开放端口。

### 要求

- 路由器支持并开启了 UPnP 功能
- 设备处于公网 IP 环境（非 CGNAT）

### 操作

1. 进入 **管理 → 网络映射**
2. 开启 **UPnP 自动端口映射**
3. 服务器启动后自动在路由器上开放端口
4. 外网玩家通过公网地址连接

> 如在 CGNAT 环境下，UPnP 获取的 IP 非真实公网 IP，请使用 FRP 隧道。

## FRP 隧道

通过 frps 服务器将本地服务映射到公网。

### 要求

- 有可用的 frps 服务器
- 已导入 FRP 运行环境

### 操作

1. 进入 **管理 → 网络映射**
2. 开启 **FRP 隧道**
3. 编辑 `frpc.toml` 配置文件
4. 保存后隧道自动连接
5. 外网玩家通过 frps 服务器地址连接

### 配置示例

```
serverAddr = "your-frps-server.com"
serverPort = 7000

[[proxies]]
name = "minecraft"
type = "tcp"
localIP = "127.0.0.1"
localPort = 25565
remotePort = 25565
```
