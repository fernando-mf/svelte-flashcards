<style>
  .card {
    width: 250px;
    height: 120px;
  }

  .content {
    overflow: hidden;
    height: 0px;
    opacity: 0;
    transition: all ease-in-out 200ms;
  }

  .contentVisible {
    transition: all ease-in-out 200ms;
    height: 24px;
    opacity: 1;
  }
</style>

<script>
  import cn from 'classnames';

  export let title;
  export let content;

  let isVisible = false;

  const handleToggleChange = () => {
    isVisible = !isVisible;
  };
</script>

<div
  class="card border rounded-lg flex flex-col items-center justify-center
  cursor-pointer shadow-md m-auto"
  on:click="{handleToggleChange}"
>
  <div class="text-xl font-bold">{title}</div>
  <div class="{cn('content font-light', { contentVisible: isVisible })}">
    {content}
  </div>
</div>
