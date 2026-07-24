const fallbackSiteUrl =
  "https://auto-ecole-yagone.fayeemmanuel08alt.chatgpt.site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl
).replace(/\/+$/, "");
