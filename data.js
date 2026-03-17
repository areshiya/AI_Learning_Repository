// ==========================================
// 我的知识图谱数据中心 (data.js)
// 以后每次学习了新知识，只需要在这里添加即可！
// ==========================================

const myKnowledgeData = {
    // 1. 知识点列表 (新增了 details 字段用于记录详细笔记)
    nodes: [
        {id: 1, label: 'TCP/IP 协议 (基础)', group: 'solid', details: '互联网的基础通信架构。TCP负责保证数据传输的可靠性，IP负责将数据包送到目标地址。'},
        {id: 2, label: 'HTTP 协议 (基础)', group: 'solid', details: '超文本传输协议。规定了浏览器和服务器之间如何互相通信。特点是无状态、明文传输。'},
        {id: 3, label: 'HTTPS 与 加密 (拓展)', group: 'floating', details: 'HTTP的安全版。在HTTP下加入了SSL/TLS层，用于对数据进行加密，防止被黑客窃听或篡改。'},
        {id: 4, label: 'WebSocket (浮动/延申)', group: 'floating', details: '为了解决HTTP不能保持长连接的问题而诞生的协议。可以让服务器主动向客户端推送消息（比如网页聊天室）。'},
        {id: 5, label: '网络分层模型 (基础)', group: 'solid', details: 'OSI七层模型或TCP/IP四层模型。这是理解所有网络通信的底层逻辑框架。'}
    ],

    // 2. 知识点之间的连接线
    edges: [
        {from: 5, to: 1}, 
        {from: 1, to: 2}, 
        {from: 2, to: 3}, 
        {from: 2, to: 4}  
    ]
};