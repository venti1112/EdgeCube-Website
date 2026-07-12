# Port Mapping

Let friends from the internet join your server with two available methods.

## UPnP Auto Port Mapping

Automatically opens ports using your router's UPnP / NAT-PMP / NAT-PCP protocols.

### Requirements

- Router supports and has UPnP enabled
- Device has a public IP (not behind CGNAT)

### Operation

1. Go to **Manage → Network Mapping**
2. Enable **UPnP Auto Port Mapping**
3. Ports open automatically on the router when the server starts
4. Friends connect using the public IP address

> In CGNAT environments, UPnP will not get a real public IP. Use FRP tunnel instead.

## FRP Tunnel

Maps local services to the public internet through a frps server.

### Requirements

- A frps server available
- FRP runtime imported

### Operation

1. Go to **Manage → Network Mapping**
2. Enable **FRP Tunnel**
3. Edit the `frpc.toml` configuration file
4. The tunnel connects automatically after saving
5. Friends connect using the frps server address

### Example Configuration

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
