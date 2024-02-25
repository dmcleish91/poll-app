<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let items: string[];
  export let activeItem: string;

  const dispatch = createEventDispatcher();
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <button on:click={() => dispatch('tabChange', item)}>
          <div class:active={item === activeItem}>
            {item}
          </div>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 2.5rem;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 1rem;
    font-size: 1.125rem;
    color: #555;
    cursor: pointer;
  }

  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 0.5rem;
  }

  button {
    all: unset;
  }
</style>
