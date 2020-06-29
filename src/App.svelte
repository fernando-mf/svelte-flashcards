<script>
  import TailwindStyles from './TailwindStyles.svelte';
  import Card from './components/Card';
  import NewCard from './components/NewCard';
  import Button from './components/Button';
  import { shuffle } from './utils/array';

  let newCardFormVisible = true;

  let cards = shuffle([
    { title: 'Svenska', content: 'Swedish' },
    { title: 'Att prata', content: 'To talk' },
    { title: 'Skogen', content: 'Forest' },
    { title: 'Riktig', content: 'Really' },
    { title: 'Mörker', content: 'Darkness' },
    { title: 'Leker', content: 'Play' },
    { title: 'Varje', content: 'Each' },
    { title: 'Visst', content: 'Exactly' },
  ]);

  const handleClick = () => {
    newCardFormVisible = true;
  };

  const handleCancel = () => {
    newCardFormVisible = false;
  };

  const handleSubmit = ({ title, content }) => {
    cards = [...cards, { title, content }];
    newCardFormVisible = false;
  };
</script>

<TailwindStyles />
<div class="text-center m-auto container">
  <div class="my-8">
    {#if newCardFormVisible}
      <Button value="Cancel" onClick="{handleCancel}" btnType="secondary" />
    {:else}
      <Button value="Add new card" onClick="{handleClick}" />
    {/if}
  </div>
  {#if newCardFormVisible}
    <NewCard {handleSubmit} />
  {/if}
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-auto w-10/12"
  >
    {#each cards as { title, content }}
      <Card {title} {content} />
    {/each}
  </div>
</div>
