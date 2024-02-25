import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 'b139de8c-f291-499b-ac7e-16f447a147c3',
    question: 'Python or JavaScript?',
    answerA: 'Python',
    answerB: 'JavaScript',
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
