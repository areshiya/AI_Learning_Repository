###---
id: math_linear
label: 线性代数
group: past
status: fixed
connections: []
---
# 线性代数：AI 的底层语言


这是我人工智能学习的**起点**。

### 核心要点
*   **矩阵乘法**：神经网络前向传播的基础。
*   **特征值与特征向量**：理解 PCA 降维的关键。
*   **奇异值分解 (SVD)**：推荐系统和数据压缩的核心。

> “如果你不懂线性代数，你只是在调用 API，而不是在做 AI。”

# Transformer：开启大模型时代
###---
id: transformer_01
label: Transformer 架构
group: present
status: flolding
connections: [math_linear]
---


目前所有 LLM（如 GPT, Claude）的共同祖先。

### 关键组件
1.  **Self-Attention**: 允许模型同时关注序列中的所有位置。
2.  **Positional Encoding**: 弥补了无法处理位置信息的缺陷。

```python
# 注意力机制伪代码
def attention(Q, K, V):
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    return torch.matmul(F.softmax(scores, dim=-1), V)

```

# 测试
###---
id: test
label: Trans
group: present
status: fixed
connections: [math_linear]
---
