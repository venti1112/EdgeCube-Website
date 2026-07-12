# Remote Access

EdgeCube includes three remote access methods for managing your server from a computer.

## FTP File Management

Access instance directories via an FTP client on the same local network.

- Supports anonymous access and password authentication
- Read/write permission control
- IPv6 support
- Auto-restart on instance switch or config change

### Configuration

1. Go to **Manage → FTP File Management**
2. Set the port, username and password
3. Start the service and connect using the displayed address

## SFTP / SSH

Secure file transfer and terminal access via the SSH protocol.

- **SFTP**: Transfer files securely via sftp client
- **SSH Terminal**: Access an interactive terminal on your device
- Shared port and credentials
- Password login (no anonymous access)
- Separate read/write permission control

## MCP Service

Provides MCP service via Streamable HTTP protocol for AI Agent connections.

- **Read-only mode**: AI can read status, logs, and online players
- **Control mode**: AI can start/stop servers, send commands, switch instances
- **Shell mode**: AI can execute shell commands (high risk)
- Bearer Token authentication
