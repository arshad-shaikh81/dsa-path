import roadmap from '@/data/roadmap.json';
import type { Stage, Topic } from './types';
export const stages = roadmap as Stage[];
export const topics = stages.flatMap(stage => stage.topics);
export const topicBySlug = (slug: string): Topic | undefined => topics.find(topic => topic.slug === slug);
export const stageFor = (slug: string): Stage | undefined => stages.find(stage => stage.topics.some(topic => topic.slug === slug));
export const totalHours = topics.reduce((sum, topic) => sum + topic.hours, 0);
