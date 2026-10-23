import { topics } from '@/lib/data';
export const dynamic = 'force-static';
export default function sitemap(){const base='https://dsapath.dev';return [{url:base,lastModified:new Date()},{url:`${base}/roadmap/`},{url:`${base}/resources/`},{url:`${base}/progress/`},{url:`${base}/about/`},...topics.map(t=>({url:`${base}/topic/${t.slug}/`}))];}
