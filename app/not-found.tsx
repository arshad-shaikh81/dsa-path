import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <div className="not-found"><span className="eyebrow">Wrong turn</span><h1>404</h1><p>This page isn’t on the roadmap.</p><Link className="button button-primary" href="/">Back to the starting point <ArrowLeft size={15}/></Link></div>}
