import type { Achievement } from './types';

export const achievement: Achievement = {
  title: 'Finalist',
  event: 'Meta PyTorch × OpenEnv Hackathon, Grand Finale',
  body: [
    'Team of 3. We built PhonePilot, an RL environment that tests LLM agents for dishonesty: false completion claims, unsupported facts and sycophancy.',
    'I drafted early reward-design ideas that the team adopted.',
  ],
  links: [
    { label: 'PhonePilot repo', href: 'https://github.com/Pranav-1100/meta-rl-project', kind: 'repo' },
    { label: 'Live environment', href: 'https://huggingface.co/spaces/pranav-1100/phonepilot', kind: 'live' },
    { label: 'Trained model', href: 'https://huggingface.co/vinnykc08/phonepilot-gemma9b', kind: 'external' },
  ],
};
