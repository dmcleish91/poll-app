<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Poll } from '../../types';
  import Card from './shared/Card.svelte';
  export let poll: Poll;

  const dispatch = createEventDispatcher();

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100);
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100);

  function handleVote(option: string, id: string) {
    dispatch('vote', { option, id });
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer">
      <button on:click={() => handleVote('a', poll.id)}>
        <div class="percent-bar percent-a" style="width: {percentA}%"></div>
        <span>{poll.answerA} ({poll.votesA})</span>
      </button>
    </div>
    <div class="answer">
      <button on:click={() => handleVote('b', poll.id)}>
        <div class="percent-bar percent-b" style="width: {percentB}%"></div>
        <span>{poll.answerB} ({poll.votesB})</span>
      </button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  button {
    all: unset;
    width: 100%;
  }

  button:active {
    background-color: initial;
    color: initial;
  }

  .percent-bar {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }

  .percent-b {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
</style>
