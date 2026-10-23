export type Resource = { label: string; type: string; url: string };
export type Complexity = { operation: string; time: string; space: string };
export type Topic = { slug: string; title: string; level: 'Beginner' | 'Intermediate' | 'Advanced'; hours: number; description: string; concepts: string[]; complexity: Complexity[]; resources: Resource[]; problems: string[] };
export type Stage = { id: string; title: string; duration: string; topics: Topic[] };
