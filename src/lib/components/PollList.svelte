<script lang="ts">
  import type { Poll } from '../../types';
  import PollDetail from './PollDetail.svelte';

  export let polls: Poll[] = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetail {poll} on:vote />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
