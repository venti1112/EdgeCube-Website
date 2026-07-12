# Player Management

EdgeCube provides complete player management including online players, whitelist, bans, and OP control.

## Online Players

Displays the online player list while the server is running.

- View online player names
- Manual refresh (sends the `list` command)
- Kick players with an optional reason

## Whitelist

Control who can join your server.

- Add / remove whitelisted players
- Use with `enforce-whitelist` for enforced whitelist

## Ban Management

### Player Bans

- Ban / unban players
- Optional ban reason and expiration time
- View ban list

### IP Bans

- Ban / unban IP addresses
- View IP ban list

## OP Management

- Grant / revoke OP permissions
- View OP list

## server.properties Editor

Graphical editor for server configuration — no need to remember config keys:

- **Basic**: MOTD, port, max players, difficulty
- **Gameplay**: PvP, flight, command blocks, game mode
- **Network**: online-mode, IPv6, Query, RCON
- **Performance**: view distance, simulation distance, network compression
- **Resource Pack**: URL, SHA1, enforce
