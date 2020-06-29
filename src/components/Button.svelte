<script>
  export let type = 'button';
  export let value;
  export let onClick = undefined;
  export let className = '';
  export let btnType = 'primary';

  import cn from 'classnames';
</script>

<button
  on:click="{onClick}"
  class="{cn(
    className,
    'transition duration-200 ease-in-out',
    'text-white px-5 py-2 rounded font-bold',
    {
      'bg-blue-500 hover:bg-blue-700': btnType === 'primary',
      'bg-red-500 hover:bg-red-700': btnType === 'secondary',
    },
  )}"
  {type}
  {value}
>
  {value}
</button>
