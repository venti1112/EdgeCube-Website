# Frequently Asked Questions

### Does it require ROOT?

No. EdgeCube uses standard Java process management and does not depend on ROOT access.

### Which server cores are supported?

**Java Edition:** Vanilla, Paper, Spigot, CraftBukkit, Fabric, Forge, NeoForge, Purpur, Leaf, Leaves, BungeeCord, Velocity

**Bedrock Edition:** PocketMine-MP, PowerNukkitX, Allay

### Does it support modded servers?

Yes, it supports Fabric, Forge, and NeoForge mod loaders. Built-in **Modrinth** search lets you find and install mods with one click.

### How do I let friends join from the internet?

Two options:

- **UPnP Port Mapping**: Automatically opens ports if your router supports it
- **FRP Tunnel**: Uses a frps server to expose your service to the public internet

See [Port Mapping](./port-mapping) for details.

### How do I import an existing world?

Use the built-in **File Manager** to place your world folder into the server's `world` directory.

### Does running a server drain battery?

Running a server continuously uses CPU and memory. Plugging into a power source is recommended. Enable **Ignore Battery Optimization** in Settings to reduce the chance of being killed by the system.

### How do I back up a server?

Use the **Export Instance** feature to compress the entire instance into a zip file for saving or sharing.

### Does it support modpacks?

Yes, import **Modrinth modpacks** (`.mrpack` format) — all mods and server files are downloaded automatically.

### How do I update EdgeCube?

Go to the **About** page to check for updates, with one-tap download and install. Enable **Get Beta Versions** in Settings to receive beta update pushes.
