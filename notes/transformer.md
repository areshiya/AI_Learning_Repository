---
id: transformer_01
label: Transformer 架构
group: present
status: flolding
connections: [math_linear]
---

# Transformer：开启大模型时代

目前所有 LLM（如 GPT, Claude）的共同祖先。

### 关键组件
1.  **Self-Attention**: 允许模型同时关注序列中的所有位置。
2.  **Positional Encoding**: 弥补了无法处理位置信息的缺陷。

```python
# 注意力机制伪代码
def attention(Q, K, V):
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    return torch.matmul(F.softmax(scores, dim=-1), V)