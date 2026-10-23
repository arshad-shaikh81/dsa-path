'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
type ProgressValue = { completed: string[]; activeDays: string[]; streak: number; toggle: (slug: string) => void; reset: () => void; hydrated: boolean };
const ProgressContext = createContext<ProgressValue | null>(null);
export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completed, setCompleted] = useState<string[]>([]); const [hydrated, setHydrated] = useState(false);
  const [activeDays, setActiveDays] = useState<string[]>([]);
  useEffect(() => { try { const saved = localStorage.getItem('dsa-path-progress'); if (saved) setCompleted(JSON.parse(saved)); const days=localStorage.getItem('dsa-path-activity'); if(days)setActiveDays(JSON.parse(days)); } catch { /* ignore invalid browser storage */ } setHydrated(true); }, []);
  useEffect(() => { if (hydrated) localStorage.setItem('dsa-path-progress', JSON.stringify(completed)); }, [completed, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('dsa-path-activity', JSON.stringify(activeDays)); }, [activeDays, hydrated]);
  const streak = useMemo(() => { const days=new Set(activeDays); const today=new Date(); const key=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; if(!days.has(key(today)))today.setDate(today.getDate()-1); let count=0; while(days.has(key(today))){count++;today.setDate(today.getDate()-1);} return count; },[activeDays]);
  const value = useMemo(() => ({ completed, activeDays, streak, toggle: (slug: string) => { if(completed.includes(slug)){setCompleted(old=>old.filter(item=>item!==slug));return;} setCompleted(old=>[...old,slug]); setActiveDays(old => {const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;return old.includes(today)?old:[...old,today];}); }, reset: () => {setCompleted([]);setActiveDays([]);}, hydrated }), [completed, activeDays, streak, hydrated]);
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
export function useProgress() { const context = useContext(ProgressContext); if (!context) throw new Error('useProgress must be within ProgressProvider'); return context; }
