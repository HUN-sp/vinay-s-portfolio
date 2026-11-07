import type { CaseStudy, CompactProject } from './types';

const SM = 'https://github.com/HUN-sp/SourceMind';
const PC = 'https://github.com/HUN-sp/ai-persona-chat';

export const caseStudies: CaseStudy[] = [
  {
    id: 'sourcemind',
    tone: 'blue',
    title: 'SourceMind',
    tagline: 'Grounded question answering over financial PDFs',
    problem:
      'Answers about financial filings are only useful if you can check them and if the system says “not in the documents” when that’s true. I wanted both, and a way to measure whether I got them.',
    approach: [
      'A RAG system over four HDFC Bank filings. Every answer cites the source document and page; unsupported questions are refused.',
      'Ingestion uses `pdfplumber`, with a RapidOCR fallback for scanned pages, and chunks of up to 350 tokens.',
      'Retrieval combines BGE-small dense search with BM25 using Reciprocal Rank Fusion.',
      'Two refusal gates: a similarity floor before the model sees anything, and the model’s own “not covered” answer.',
    ],
    stats: [
      { value: '6', label: 'correct answers' },
      { value: '2', label: 'correct refusals' },
      { value: '1', label: 'wrong answer' },
      { value: '1', label: 'false refusal' },
    ],
    results: [
      'Eval on 10 answerable, unanswerable and paraphrased questions: 6 correct, 2 correct refusals, 1 wrong, 1 false refusal. Every question, answer, source and verdict is written up.',
      'A retrieval harness checks whether the answer-bearing chunk lands in the top 8 without calling the LLM. Measured at 10 of 17.',
    ],
    limits: [
      'Both failures had the same cause: terse numeric rows (net profit, a dividend note) ranked below fluent prose. The wrong answer reported a ₹9,179.40 crore share-sale gain instead of net profit.',
      'I A/B-tested a cross-encoder reranker. Recall stayed at 10/17 with or without it, and once it promoted a wrong figure, so it is off by default.',
      'What fixed retrieval was not the reranker. Indexing each table row separately, embedded from its label text with column-labeled values, moved the harness from 10/17 to 15/17 (DECISIONS.md §3b). It still misses pure paraphrases that share no vocabulary with the filing. Later runs use `gpt-oss-120b` because Groq retired Llama 3.3 70B, which the 10-question eval used.',
    ],
    stack: ['Python', 'FastAPI', 'pdfplumber', 'RapidOCR', 'BGE-small', 'BM25', 'Groq Llama 3.3 70B', 'React'],
    links: [
      { label: 'GitHub', href: SM, kind: 'repo' },
      { label: 'Eval write-up', href: `${SM}/blob/main/EVALUATION.md`, kind: 'doc' },
      { label: 'Design decisions', href: `${SM}/blob/main/DECISIONS.md`, kind: 'doc' },
    ],
  },
  {
    id: 'ai-persona-chat',
    tone: 'warm',
    title: 'AI Persona Chat',
    tagline: 'An AI representative that answers questions about me and books interview slots',
    problem:
      'A resume can’t answer follow-up questions or find a time to talk. I built an assistant that answers from my actual resume and code, declines to invent anything else, and books a real slot.',
    approach: [
      'RAG chat and voice assistant over my resume and the metadata and source files of my public GitHub repos.',
      'Cohere embeddings and cosine search, then Cohere rerank, then Groq Llama 3.3 70B answers from the retrieved context. A similarity threshold and an off-topic guard keep irrelevant context out.',
      'Voice runs through Vapi on the same retrieval pipeline.',
      'Booking reads my Google Calendar free/busy (weekdays, 08:00–18:30 IST) and creates a Google Meet event with an invite to both parties.',
    ],
    stats: [
      { value: '9/10', label: 'relevant chunk in the top 3' },
      { value: '0/5', label: 'out-of-scope questions got invented facts' },
      { value: '~1.4 s', label: 'to first spoken response' },
    ],
    results: [
      'Manual tests, so small samples: 10 questions for retrieval, 5 out-of-scope questions for hallucination, latency from the Vapi dashboard. This is a sanity check, not a benchmark.',
      'End-to-end booking works: availability, slot choice, name and email, calendar event with a Meet link.',
    ],
    limits: [
      'Calendar credentials were silently `undefined` in deployment. The error was swallowed and the assistant told people there were no free slots. The cause was a `catch` block that returned an empty list, which turned a configuration outage into a confident wrong answer. I fixed the configuration.',
      'A slot cap of 15 filled up with a single day, so no other day was ever offered. The booking flow now shows days with slot counts first, then times.',
      'Next: a guard against two callers booking the same slot, and an automated eval suite, because today’s numbers come from manual runs.',
    ],
    stack: ['Next.js', 'TypeScript', 'Groq Llama 3.3 70B', 'Cohere embeddings and rerank', 'Vapi', 'Google Calendar API'],
    links: [
      { label: 'Live site', href: 'https://aipersonachat.vercel.app', kind: 'live' },
      { label: 'GitHub', href: PC, kind: 'repo' },
      { label: 'Evals report', href: `${PC}/blob/main/EVALS_REPORT.md`, kind: 'doc' },
    ],
  },
  {
    id: 'aadhaar-seva-radar',
    tone: 'violet',
    title: 'Aadhaar Seva Radar',
    tagline: 'UIDAI Data Hackathon: where do child biometric updates lag behind enrolments?',
    problem:
      'Given Aadhaar enrolment, demographic-update and biometric-update records, find where updates for children aged 5–17 fall behind enrolments, and which pincodes to prioritize.',
    approach: [
      'Merged the three datasets (about 4.9M rows) into a pincode-level table of 31,777 pincodes.',
      'Filtered to the 3,801 pincodes with more than 100 enrolled children aged 5–17, to cut noise from tiny pincodes.',
      'Defined a per-state ratio of biometric updates to enrolments and rule-based zones, then ranked pincodes in the worst district with a weighted priority score.',
    ],
    stats: [
      { value: '~4.9M', label: 'rows merged' },
      { value: '31,777', label: 'pincodes' },
      { value: '3,801', label: 'after the >100 children filter' },
    ],
    results: [
      'Flagged Thane as Maharashtra’s top red-zone district: 12.0× updates per enrolment against a 20.7× state average (lower is worse).',
      'Ranked Thane’s pincodes by a weighted priority score to give a first list of where to look.',
    ],
    limits: [
      'The thresholds (red zone: under 20× with more than 5,000 children) and the 60/40 weighting in the priority score are rules I chose by hand. I did not validate them against any ground truth, so treat the ranking as a place to start asking questions, not a finding.',
    ],
    stack: ['Python', 'pandas', 'NumPy', 'Matplotlib'],
    links: [{ label: 'GitHub', href: 'https://github.com/HUN-sp/Aadhar-_Seva-_Radar', kind: 'repo' }],
  },
];

// Described from the source only: the repo has no README. No performance claims.
export const compactProjects: CompactProject[] = [
  {
    id: 'market-data-publisher',
    title: 'Market_Data_Publisher',
    tagline: 'A small C++17 market-data publisher',
    body: 'A publisher that generates simulated bid/ask ticks for one instrument and sends each tick two ways: into a lock-free ring buffer in POSIX shared memory (cache-line-aligned indices), and as JSON over TCP with Nagle disabled. Two small consumers read the two paths. About 190 lines.',
    limits:
      'No latency measurements yet, so I make no speed claim. The producer never checks whether the shared-memory reader has kept up, so a slow reader would be overwritten.',
    stack: ['C++17', 'CMake', 'POSIX shared memory', 'TCP'],
    links: [{ label: 'GitHub', href: 'https://github.com/HUN-sp/Market_Data_Publisher', kind: 'repo' }],
    todos: [
      'TODO(vinay): the repo has no README. Add one, and measure shared memory vs TCP latency if you want to show a result here. Drop this entry if you’d rather not show a small project.',
    ],
  },
];
