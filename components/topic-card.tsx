'use client';
import Link from 'next/link';
import { ArrowUpRight, Check, Clock3 } from 'lucide-react';
import type { Topic } from '@/lib/types';
import { useProgress } from './progress-provider';
export function TopicCard({ topic, index = 0 }: { topic: Topic; index?: number }) { const { completed, toggle } = useProgress(); const done = completed.includes(topic.slug); return <article className={`topic-card ${done ? 'is-done' : ''}`} style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}><button className={`check-button ${done ? 'checked' : ''}`} aria-label={`${done ? 'Mark' : 'Mark'} ${topic.title} ${done ? 'not done' : 'done'}`} aria-pressed={done} onClick={() => toggle(topic.slug)}>{done && <Check size={14}/>}</button><Link href={`/topic/${topic.slug}/`} className="topic-card-main"><span className="topic-card-title">{topic.title}<ArrowUpRight size={15}/></span><span className="topic-card-meta"><span className={`level-dot level-${topic.level.toLowerCase()}`}/>{topic.level}<span className="meta-divider">·</span><Clock3 size={13}/>{topic.hours}h</span></Link></article>; }
