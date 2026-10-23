'use client';
import { Check } from 'lucide-react';
import { useProgress } from '@/components/progress-provider';
export function TopicActions({slug}:{slug:string}){const {completed,toggle}=useProgress();const done=completed.includes(slug);return <button className={`button ${done?'button-secondary':'button-primary'}`} onClick={()=>toggle(slug)}>{done?<Check size={15}/>:null}{done?'Completed':'Mark as done'}</button>}
