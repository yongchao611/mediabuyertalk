/**
 * 安全 Astro.glob - 目录为空时返回 [] 而不是报错
 */
export async function safeGlob(pattern: string): Promise<any[]> {
  try {
    const result = await (Astro as any).glob(pattern);
    return Array.isArray(result) ? result : [];
  } catch (e: any) {
    if (e?.message?.includes('AstroGlobNoMatch') || e?.name === 'AstroGlobNoMatch') {
      return [];
    }
    throw e;
  }
}

/**
 * 格式化日期为中文格式
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 格式化日期为 ISO 字符串 (YYYY-MM-DD)
 */
export function toISODate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * 截断文本
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * 根据 slug 生成 URL
 */
export function getArticleUrl(collection: string, slug: string): string {
  return `/${collection}/${slug}/`;
}

/**
 * 计算阅读时间（分钟）
 */
export function calculateReadTime(text: string): number {
  const wordsPerMinute = 300; // 中文约300字/分钟
  const charCount = text.replace(/\s/g, '').length;
  return Math.max(1, Math.ceil(charCount / wordsPerMinute));
}

/**
 * 分类名称映射
 */
export const categoryMap: Record<string, { label: string; color: string; icon: string }> = {
  'beginner': { label: '新手入门', color: 'blue', icon: '🎓' },
  'facebook-ads': { label: 'Facebook Ads', color: 'indigo', icon: '📘' },
  'google-ads': { label: 'Google Ads', color: 'red', icon: '🔍' },
  'top-offers': { label: 'TOP Offer', color: 'green', icon: '💰' },
  'top-networks': { label: 'TOP联盟', color: 'purple', icon: '🏆' },
  'landing-page-library': { label: 'LP库', color: 'yellow', icon: '📄' },
  'case-studies': { label: '实战案例', color: 'pink', icon: '📊' },
  'tools': { label: '工具导航', color: 'teal', icon: '🛠️' },
  'celebrities': { label: '名人介绍', color: 'orange', icon: '⭐' },
  'news': { label: '行业动态', color: 'gray', icon: '📰' },
};

/**
 * 难度等级映射
 */
export const difficultyMap: Record<string, { label: string; color: string }> = {
  'beginner': { label: '入门', color: 'green' },
  'intermediate': { label: '中级', color: 'yellow' },
  'advanced': { label: '高级', color: 'red' },
};

/**
 * 趋势映射
 */
export const trendMap: Record<string, { label: string; icon: string; color: string }> = {
  'up': { label: '上升', icon: '📈', color: 'green' },
  'down': { label: '下降', icon: '📉', color: 'red' },
  'stable': { label: '稳定', icon: '➡️', color: 'gray' },
  'hot': { label: '热门', icon: '🔥', color: 'orange' },
};

/**
 * Offer 分类映射
 */
export const offerCategoryMap: Record<string, { label: string; color: string }> = {
  'sweepstakes': { label: 'Sweepstakes', color: 'yellow' },
  'finance': { label: 'Finance', color: 'green' },
  'utilities': { label: 'Utilities', color: 'blue' },
  'ecommerce': { label: 'Ecommerce', color: 'purple' },
};

/**
 * 工具分类映射
 */
export const toolCategoryMap: Record<string, { label: string; icon: string }> = {
  'ai': { label: 'AI工具', icon: '🤖' },
  'lp-builder': { label: 'LP构建', icon: '🏗️' },
  'tracking': { label: '追踪工具', icon: '📊' },
  'creative': { label: '创意工具', icon: '🎨' },
  'research': { label: '研究工具', icon: '🔬' },
};

/**
 * 价格映射
 */
export const priceMap: Record<string, { label: string; color: string }> = {
  'free': { label: '免费', color: 'green' },
  'freemium': { label: '免费增值', color: 'blue' },
  'paid': { label: '付费', color: 'purple' },
};
