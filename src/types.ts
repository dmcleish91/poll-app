export interface PollResults {
  question: string;
  answerA: string;
  answerB: string;
}

export interface Poll {
  id: string;
  question: string;
  answerA: string;
  answerB: string;
  votesA: number;
  votesB: number;
}
