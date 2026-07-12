export default {
  nav: {
    home: 'Home',
    intro: 'Intro',
    download: 'Download',
    docs: 'Docs',
    about: 'About',
  },
  home: {
    title: 'EdgeCube',
    subtitle: 'Manage & Run Minecraft Servers on Your Phone',
    tagline: 'Lightweight, efficient, out-of-the-box mobile Minecraft server manager',
    startDownload: 'Download',
    learnMore: 'Learn More',
    features: [
      {
        title: 'One-Click Control · Real-Time Monitor',
        desc: 'Start or stop your server with a single tap — no commands needed. CPU and memory in real time.',
      },
      {
        title: 'More Server Cores',
        desc: 'Supports Paper, Fabric, Forge, NeoForge, Spigot, Purpur, Vanilla, Velocity, PocketMine-MP and more. One-tap download and install.',
      },
      {
        title: 'Mod & Plugin Marketplace',
        desc: 'Built-in Modrinth search and Poggit plugin download. One-click install, update checks, batch management — no more manual搬运.',
      },
      {
        title: 'File Manager & Code Editor',
        desc: 'Full-featured file browser with import/export, compress/extract, and search. Built-in text editor with syntax highlighting.',
      },
      {
        title: 'Remote Access',
        desc: 'Built-in FTP, SFTP and SSH services. Manage server files or execute terminal commands from your computer. Password auth and read/write control.',
      },
      {
        title: 'Port Mapping & Tunnel',
        desc: 'UPnP auto port mapping and FRP tunnel support. Expose your local server to the public internet effortlessly.',
      },
      {
        title: 'MCP Service',
        desc: 'Streamable HTTP MCP service for AI Agent integration. Read status, control servers, execute shell commands — smart运维 made easy.',
      },
      {
        title: 'Modpack Import',
        desc: 'Import Modrinth modpacks (.mrpack) with automatic mod and server download. Ready to play out of the box.',
      },
      {
        title: 'Player Management',
        desc: 'Online player list, whitelist, bans, and OP management — everything at your fingertips.',
      },
      {
        title: 'server.properties Editor',
        desc: 'Graphical editor for server.properties. Categorized with descriptions — no need to memorize config keys.',
      },
      {
        title: 'Console & Shell Terminal',
        desc: 'Command line and raw terminal modes. Send commands, view logs, debug your server. Shell terminal for system commands.',
      },
      {
        title: 'Theme & Visual Effects',
        desc: 'Dark/light themes, dynamic system color, custom seed colors. Snow, rain, and hail falling effects make the app come alive.',
      },
    ],
  },
  download: {
    title: 'Download EdgeCube',
    subtitle: 'Pick your platform and start your Minecraft server journey',
    version: 'Current Version',
    downloadBtn: 'Download',
    platforms: [
      { name: 'Android', desc: 'Supports Android 8.0+' },
      { name: 'iOS', desc: 'Supports iOS 14+' },
    ],
    qrTip: 'Scan to download',
  },
  docs: {
    title: 'Documentation',
    intro: 'EdgeCube is a mobile-first Minecraft server management tool.',
    sections: [
      {
        title: 'Quick Start',
        items: [
          'Download and install EdgeCube',
          'Open the app and tap "Create Server"',
          'Choose a server core type (Paper / Fabric / Forge)',
          'Configure server settings (memory, port, etc.)',
          'Tap "Start" and wait for initialization',
        ],
      },
      {
        title: 'FAQ',
        items: [
          'Q: Does it require ROOT?\nA: No, EdgeCube uses standard Java process management.',
          'Q: Which server cores are supported?\nA: Paper, Fabric, Forge, NeoForge, Spigot, Purpur, Vanilla, Velocity and more.',
          'Q: How to import existing worlds?\nA: Place the world folder into the server\'s world directory via the file manager.',
          'Q: Does the server drain battery?\nA: Running a server consumes resources; using a power source is recommended.',
          'Q: How to let friends join from the internet?\nA: Use UPnP auto port mapping or FRP tunnel to expose your server.',
          'Q: Does it support modded servers?\nA: Yes, supports Fabric, Forge, NeoForge with online mod search and installation.',
        ],
      },
    ],
  },
  intro: {
    title: 'Features',
    desc: 'EdgeCube delivers powerful features that bring a PC-grade server management experience to your mobile device.',
  },
  about: {
    title: 'About EdgeCube',
    desc: 'EdgeCube is an open-source Minecraft server management tool designed for mobile devices. Run Minecraft servers on Android without ROOT.',
    features: [
      'Fully open-source under GPL-3.0',
      'Standard Java process management, no ROOT required',
      'Supports more server cores',
      'Built-in file manager, terminal, real-time monitoring',
      'FTP, SFTP, SSH remote access',
      'UPnP and FRP tunnel support',
    ],
    team: 'Team',
    teamDesc: 'EdgeCube is maintained by a group of Minecraft enthusiasts.',
    thanks: 'Acknowledgments',
    thanksDesc: 'Thanks to all contributors and community members.',
    license: 'License',
    licenseDesc: 'This project is open-sourced under the GPL-3.0 license.',
  },
}
