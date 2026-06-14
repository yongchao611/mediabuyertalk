---
title: "Facebook Ads 广告结构完全指南 - Campaign / Ad Set / Ad 详解"
description: "深入理解 Facebook Ads 的三层广告结构（Campaign / Ad Set / Ad），掌握正确的 Campaign 设置方法"
pubDate: 2024-06-07
readTime: 10
difficulty: intermediate
seo_title: "Facebook Ads 广告结构详解 | Campaign/Ad Set/Ad 三层架构"
seo_description: "Facebook 广告的三层结构详解：Campaign、Ad Set、Ad 的作用和最佳实践。新手到进阶的完整设置指南。"
---

## Facebook Ads 的三层架构

Facebook 广告账户采用三层架构：

```
Campaign（广告系列）
  └── Ad Set（广告组）
        ├── Ad 1（广告1）
        ├── Ad 2（广告2）
        └── Ad 3（广告3）
  └── Ad Set 2（广告组2）
        └── Ad 4（广告4）
```

### 第一层：Campaign（广告系列）

**Campaign** 是最顶层，决定你的**广告目标**（Objective）。

#### 常见的广告目标

| 目标 | 适用场景 |
|------|----------|
| **Conversions** | 需要用户完成注册/购买等转化，**最常用** |
| **Traffic** | 只想获取流量（不推荐，流量质量差） |
| **Engagement** | 获取互动（点赞/评论/分享） |
| **Messages** | 引导用户发 WhatsApp 消息 |

> ⚠️ **建议**：对于 Affiliate Marketing，**始终选择 Conversions 目标**。虽然 CPC 可能比 Traffic 高，但转化质量好得多。

#### Campaign 级别的设置

- **Campaign 名称**：建议使用命名规范，如 `{GEO}_{Offer}_{日期}`
- **Buying Type**：Auction（竞价）
- **Campaign Spending Limit**：通常不设置（由 Ad Set 控制预算）
- **A/B Test**：可创建 A/B 测试 Campaign

### 第二层：Ad Set（广告组）

**Ad Set** 决定**谁看到你的广告**以及**花多少钱**。

#### Ad Set 级别的关键设置

##### 1. 预算（Budget）

| 类型 | 说明 |
|------|------|
| **Daily Budget** | 每日预算，最常用 |
| **Lifetime Budget** | 总预算，在指定时间段内花完 |

建议：新手用 **Daily Budget $10-20** 测试。

##### 2. 受众（Audience）

```
✅ 推荐（2024）：
- 不设详细定向
- 只设置 GEO + 语言
- 让 Advantage+ 自动优化

❌ 不推荐：
- 过度精细的 Interest 定向
- 过小的受众规模
- 过多的 Exclusion
```

##### 3. 版位（Placements）

| 选项 | 优缺点 |
|------|--------|
| **Advantage+ Placements**（推荐） | Facebook 自动选择最佳版位 |
| **Manual Placements** | 手动选择，适合有明确版位偏好的情况 |

##### 4. 优化和投放

- **Optimization for Ad Delivery**：选择 Conversions
- **Conversion Event**：选择"Purchase"或自定义事件

### 第三层：Ad（广告）

**Ad** 是用户实际看到的广告内容。

#### Ad 的组成要素

| 要素 | 说明 |
|------|------|
| **Creative** | 图片或视频 |
| **Primary Text** | 广告正文 |
| **Headline** | 标题（最重要） |
| **Description** | 描述文字 |
| **CTA Button** | 行动号召按钮 |
| **Destination URL** | 点击后跳转的链接 |

#### 广告格式

| 格式 | 适用场景 |
|------|----------|
| **Single Image** | 最简单，适合测试 |
| **Single Video** | 展示产品/场景 |
| **Carousel** | 展示多个产品或步骤 |
| **Collection** | 电商类 |

## 推荐的 Campaign 结构（Sweepstakes）

### 测试阶段

```
Campaign: Sweeps_BR_Test_Jun2024
├── Ad Set 1: Broad (Daily $10)
│   ├── Image 1
│   ├── Image 2
│   └── Video 1
├── Ad Set 2: Broad Copy (Daily $10)
│   ├── Image 1
│   └── Image 2
└── Ad Set 3: (optional) LAL (Daily $10)
    ├── Image 1
    └── Image 2
```

### 扩量阶段

```
Campaign: Sweeps_BR_Scale_Jun2024
├── Ad Set 1: CBO (Campaign Budget $100)
│   ├── Winner 1
│   ├── Winner 2
│   └── New Creative 1
└── Ad Set 2: CBO (Campaign Budget $100)
    ├── Winner 1 (Copy)
    ├── Winner 2 (Copy)
    └── New Creative 2
```

## 命名规范

建议使用统一的命名规范，方便后期分析：

```
Campaign: {GEO}_{Vertical}_{Type}_{Date}
  例如: BR_Sweeps_Test_20240607

Ad Set: {Targeting}_{Budget}_{Date}
  例如: Broad_D10_20240607

Ad: {Creative_Type}_{Angle}_{Version}
  例如: IMG_Win_iPhone_v1
```

## 常见错误和解决方案

### 1. 频繁修改广告
**问题**：发布后每几个小时就修改一次
**解决**：给 Facebook 至少 24-48 小时的学习时间

### 2. 受众规模太小
**问题**：设了太多定向条件
**解决**：扩大受众或使用 Broad Targeting

### 3. 预算太低
**问题**：$1-$5 的日预算
**解决**：至少 $10-20/天/Ad Set

### 4. 广告学习期被重置
**问题**：频繁编辑导致学习期重置
**解决**：尽量不要在发布后 48 小时内修改

## 总结

Facebook Ads 的三层架构看似简单，但正确设置对 Campaign 的成败至关重要。

关键要点：
- ✅ Campaign 层级：始终选 Conversions
- ✅ Ad Set 层级：用 Broad Targeting，足够预算
- ✅ Ad 层级：多测试不同素材和角度
- ✅ 给 Facebook 算法足够的预算和学习时间

下一篇：[ABO vs CBO - 哪种预算策略更适合你？](/facebook-ads/abo-vs-cbo/)
