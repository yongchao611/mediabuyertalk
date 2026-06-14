# Affiliate Marketing 知识库

🎓 面向 Affiliate Marketer 的免费知识库，通过 SEO 获取流量。

## 技术栈

- **框架**: [Astro](https://astro.build) v4
- **样式**: [TailwindCSS](https://tailwindcss.com) v3
- **CMS**: [Decap CMS](https://decapcms.org) (原 Netlify CMS)
- **部署**: Vercel / GitHub Pages / Cloudflare Pages

## 功能特性

- 📚 9 个核心学习模块
- 🔍 全站文章搜索
- 🌙 暗色模式支持
- 📱 响应式设计（移动端友好）
- 📝 Markdown 内容管理
- 🔗 Decap CMS 可视化后台
- 📊 SEO 优化（Sitemap、结构化数据、OG 标签）
- 🚀 静态生成，加载速度快

## 目录结构

```
affiliate-hub/
├── src/
│   ├── content/          # 所有内容（Markdown）
│   │   ├── beginner/           # 新手入门
│   │   ├── facebook-ads/       # Facebook Ads
│   │   ├── google-ads/         # Google Ads
│   │   ├── top-offers/         # TOP Offer
│   │   ├── top-networks/       # TOP联盟
│   │   ├── landing-page-library/ # LP库
│   │   ├── case-studies/       # 实战案例
│   │   ├── tools/              # 工具导航
│   │   ├── celebrities/        # 名人介绍
│   │   └── news/               # 行业动态
│   ├── pages/             # 路由页面
│   ├── layouts/           # 布局组件
│   ├── components/        # UI 组件
│   ├── styles/            # 全局样式
│   └── lib/               # 工具函数
├── public/
│   └── admin/             # Decap CMS 入口
└── .github/workflows/     # CI/CD 配置
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 登录 [vercel.com](https://vercel.com)
3. Import GitHub 仓库
4. 自动部署

### GitHub Pages

1. 推送代码到 GitHub
2. Settings → Pages → Source: GitHub Actions
3. 自动触发 `.github/workflows/deploy.yml`

### Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. Workers & Pages → Pages → Connect to Git
3. Build command: `npm run build`
4. Output directory: `dist`

## 内容管理

访问 `https://你的域名/admin/` 使用 Decap CMS 管理所有内容。

首次使用需要配置 GitHub OAuth 认证。

## 添加新文章

在对应的 `src/content/` 子目录下创建 `.md` 文件：

```markdown
---
title: "你的文章标题"
description: "文章描述"
pubDate: 2024-06-01
readTime: 8
difficulty: beginner
seo_title: "SEO 标题"
seo_description: "SEO 描述"
---

文章正文（Markdown 格式）
```

## 许可证

MIT

---

**🤖 使用 [Claude Code](https://claude.com/claude-code) 生成**
