# 常见问题

### 需要 ROOT 权限吗？

不需要。EdgeCube 使用标准 Java 进程管理，不依赖 ROOT 权限。

### 支持哪些服务端核心？

**Java 版：** Vanilla、Paper、Spigot、CraftBukkit、Fabric、Forge、NeoForge、Purpur、Leaf、Leaves、BungeeCord、Velocity

**基岩版：** PocketMine-MP、PowerNukkitX、Allay

### 支持模组服务端吗？

支持 Fabric、Forge、NeoForge 模组加载器。内置 **Modrinth** 搜索功能，可在线搜索并一键安装模组。

### 如何让外网好友加入？

两种方式：

- **UPnP 端口映射**：路由器支持即可自动开放端口
- **FRP 隧道**：通过 frps 服务器将服务映射到公网

详见 [端口映射](./port-mapping)。

### 如何导入现有存档？

通过内置 **文件管理器**，将存档文件夹放入服务端的 `world` 目录即可。

### 服务端运行耗电吗？

运行服务端会持续占用 CPU 和内存，建议连接电源使用。可在 **设置** 中开启 **忽略电池优化**，减少后台被系统结束的几率。

### 如何备份服务端？

使用 **实例导出** 功能，将整个实例压缩为 zip 文件保存或分享。

### 支持整合包吗？

支持导入 **Modrinth 整合包**（`.mrpack` 格式），自动下载所有模组和服务端。

### 如何更新 EdgeCube？

进入 **关于** 页检查更新，支持一键下载和安装。可在 **设置** 中开启 **获取测试版** 以接收测试版推送。
