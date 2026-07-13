export default {
  nav: {
    home: '首页',
    intro: '介绍',
    download: '下载',
    docs: '文档',
    about: '关于',
    close: '收起',
  },
  home: {
    title: 'EdgeCube',
    subtitle: '在手机上管理和运行 Minecraft 服务端',
    tagline: '轻量、高效、开箱即用的移动端 Minecraft 服务端管理器',
    startDownload: '立即下载',
    learnMore: '了解更多',
  },
  download: {
    title: '下载 EdgeCube',
    subtitle: '选择你的平台，开始你的 Minecraft 服务端之旅',
    copy: '复制',
    copied: '已复制',
    btn: '下载',
  },
  intro: {
    title: '功能特性',
    desc: 'EdgeCube 提供丰富而强大的功能，让你在手机上也能拥有 PC 级服务端管理体验。',
    features: [
      {
        title: '一键启停 · 实时监控',
        desc: '轻点即可启动或停止服务端，无需复杂命令。CPU、内存，服务状态一目了然。',
      },
      {
        title: '丰富的服务端核心',
        desc: '支持 Paper、Fabric、Forge、NeoForge、Spigot、Purpur、Vanilla、Velocity、PocketMine-MP 等多种服务端核心，一键下载安装。',
      },
      {
        title: '模组/插件市场',
        desc: '内置 Modrinth 模组与插件下载，支持一键安装、检查更新、批量管理，告别手动搬运。',
      },
      {
        title: '文件管理 & 代码编辑',
        desc: '全功能文件浏览器，支持导入导出、压缩解压、搜索。内置文本编辑器，高亮语法，直接编辑配置和脚本。',
      },
      {
        title: '远程访问',
        desc: '内置 FTP、SFTP 与 SSH 服务，可直接在电脑上管理服务端文件或执行终端命令。支持账号密码鉴权与读写权限控制。',
      },
      {
        title: '内网穿透与端口映射',
        desc: '支持 UPnP 自动端口映射与 FRP 隧道，轻松将本地服务暴露到公网，与好友联机不再受局域网限制。',
      },
      {
        title: 'MCP 服务',
        desc: '以 Streamable HTTP 协议提供 MCP 服务，允许 AI Agent 连接并读取状态、控制服务端、执行 Shell 命令，打造智能运维体验。',
      },
      {
        title: '整合包一键导入',
        desc: '支持导入 Modrinth 整合包（.mrpack），自动下载所有模组与服务端，开箱即玩。',
      },
      {
        title: '玩家管理',
        desc: '在线玩家列表、白名单、封禁、OP 管理一应俱全，一切都在掌中完成。',
      },
      {
        title: 'server.properties 编辑器',
        desc: '图形化编辑 server.properties，无需记忆配置项名称，分类展示、附带说明，修改即生效。',
      },
      {
        title: '控制台与 Shell 终端',
        desc: '支持命令行与原始终端两种模式，输入指令、查看日志、调试服务端。Shell 终端让你在设备上执行系统命令。',
      },
      {
        title: '主题与界面特效',
        desc: '支持深色/浅色主题、跟随系统主题色、自定义种子色。',
      },
    ],
  },
  footer: {
    version: '当前网页版本：{0}',
    builtWith: '本网页使用 {0} 构建',
    usesMcui: '使用 {0} UI 组件',
    disclaimer: '本软件和开发团队与 Mojang、Microsoft 无任何关联，也不是其认可项目。Minecraft 为 Mojang AB 注册商标',
    copyright: '{0} EdgeCube 开发团队版权所有，使用 {1} 在 {2} 上开源',
  },
  about: {
    title: '关于 EdgeCube',
    desc: 'EdgeCube 是一款开源的 Minecraft 服务端管理工具，专为移动端设计。在 Android 设备上运行 Minecraft 服务器，无需 ROOT。',
    features: [
      '完全开源，基于 GPL-3.0 协议',
      '使用标准 Java 进程管理，无需 ROOT',
      '支持多种服务端核心',
      '内置文件管理、终端、实时监控',
      '支持 FTP、SFTP、SSH 远程访问',
      '支持 UPnP 与 FRP 内网穿透',
    ],
    team: '开发团队',
    teamDesc: 'EdgeCube 由一群热爱 Minecraft 的开发者共同维护。',
    thanks: '致谢',
    thanksDesc: '感谢所有贡献者和社区用户的支持。',
    license: '开源协议',
    licenseDesc: '本项目基于 GPL-3.0 协议开源。',
  },
}
