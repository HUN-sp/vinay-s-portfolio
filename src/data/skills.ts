import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    label: 'AI / NLP and evaluation',
    items: [
      'RAG',
      'BGE and Cohere embeddings',
      'BM25',
      'Hybrid retrieval',
      'Reranking',
      'OCR',
      'Retrieval testing',
      'A/B comparison',
      'Error analysis',
    ],
  },
  {
    label: 'Backend and web',
    items: ['FastAPI', 'Spring Boot', 'REST APIs', 'Next.js', 'React', 'CrewAI', 'LangGraph'],
  },
  {
    label: 'Data, systems and tools',
    items: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'MySQL',
      'MongoDB',
      'Neo4j',
      'Git',
      'Linux',
      'CMake',
      'Postman',
      'Langfuse',
      'OOP',
      'Networks',
    ],
  },
];
