<script lang="ts">
  import CreatePollForm from './lib/components/CreatePollForm.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Header from './lib/components/Header.svelte';
  import PollList from './lib/components/PollList.svelte';
  import Tabs from './lib/components/shared/Tabs.svelte';
  import type { Poll } from './types';

  //tabs

  let items = ['Current Polls', 'Add New Poll'];
  let polls: Poll[] = [
    {
      id: 'b139de8c-f291-499b-ac7e-16f447a147c3',
      question: 'Python or JavaScript?',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15,
    },
  ];
  let activeItem: 'Current Polls' | 'Add New Poll' = 'Current Polls';

  function tabChange(event: CustomEvent) {
    activeItem = event.detail;
  }

  function handleAdd(e: CustomEvent) {
    polls = [e.detail, ...polls];
    console.log(polls);
    activeItem = 'Current Polls';
  }

  function handleVote(e: CustomEvent) {
    const { id, option } = e.detail;
    const nextPolls = [...polls];
    let upvotedPoll = nextPolls.find((poll) => poll.id === id);
    if (upvotedPoll) {
      if (option === 'a') {
        upvotedPoll.votesA++;
      }

      if (option === 'b') {
        upvotedPoll.votesB++;
      }
    }
    polls = nextPolls;
    console.log(upvotedPoll);
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
