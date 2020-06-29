<style>
  .input {
    @apply py-2 px-4 border rounded border-gray-500;
  }

  .form {
    max-width: 300px;
    @apply my-10 flex flex-col mx-auto;
  }
</style>

<script>
  export let handleSubmit;

  import Button from './Button';

  let title = '';
  let content = '';

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit && handleSubmit({ title, content });
  };
</script>

<form class="form space-y-3" on:submit="{onSubmit}">
  <input
    class="input"
    type="text"
    placeholder="Card title"
    bind:value="{title}"
  />
  <input
    class="input"
    type="text"
    placeholder="Card content"
    bind:value="{content}"
  />
  <Button type="submit" value="Create" />
</form>
