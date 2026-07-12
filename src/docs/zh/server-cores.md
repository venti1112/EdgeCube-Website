# 服务端核心

EdgeCube 支持多种 Minecraft 服务端核心，覆盖 Java 版和基岩版。

## Java 版

| 核心 | 说明 |
|------|------|
| **Vanilla** | Minecraft 官方原版服务端 |
| **Paper** | 高性能、插件扩展 (Bukkit/Spigot/Paper API) |
| **Spigot** | 使用最广泛的修改版服务端 (CraftBukkit 分支) |
| **CraftBukkit** | 最原始的修改版服务端，提供插件 API |
| **Fabric** | 轻量、模块化模组加载器 |
| **Forge** | 经典 Mod 加载器 (MinecraftForge) |
| **NeoForge** | 新一代 Mod 加载器 |
| **Purpur** | 功能丰富、高性能的 Paper 分支 |
| **Leaf** | 注重性能的 Paper 分支，包含新特性 |
| **Leaves** | 专注于红石优化的 Paper 分支 |
| **BungeeCord** | 经典多服务端代理 |
| **Velocity** | 现代高性能代理端 |

## 基岩版

| 核心 | 说明 |
|------|------|
| **PocketMine-MP** | 基岩版经典服务端 (PHP) |
| **PowerNukkitX** | 基岩版高性能服务端 (Nukkit/PNX) |
| **Allay** | 基岩版高性能服务端 (Java) |

## 创建实例

选择核心后，EdgeCube 会自动下载对应版本的服务端文件。也支持：

- **导入现有 JAR**：从设备导入已下载的服务端文件
- **导入压缩包**：导入 zip 并自动解压到实例目录
- **导入整合包**：导入 Modrinth `.mrpack` 整合包
