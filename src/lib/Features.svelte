<script>
  export let data

  const sizes = {
    0: { width: 88, height: 106 },
    1: { width: 74, height: 89 },
    2: { width: 80, height: 94 },
    3: { width: 104, height: 74 }
  }

  const classes = {
    0: 'w-16.5 lg:w-22',
    1: 'w-14 lg:w-18.5',
    2: 'w-15 lg:w-20',
    3: 'w-19.5 lg:w-26'
  }
</script>

<section
  class="my-36 px-6 text-center sm:mt-[6.75rem] sm:mb-35 sm:text-left lg:my-44"
>
  <div
    class="max-w-xl mx-auto grid gap-y-14 sm:gap-y-10 lg:max-w-6xl
      lg:grid-cols-4 lg:gap-x-8"
  >
    {#each data as { image, name, description }, index}
      <article
        class="sm:grid sm:grid-cols-[max-content_1fr] sm:items-center
          sm:gap-x-14 sm:odd:ml-14 lg:block lg:odd:ml-0 lg:even:mt-12"
      >
        <figure
          class="w-[7.5rem] h-[7.75rem] mx-auto grid place-items-center
            bg-secondary rounded-[2.8125rem] lg:mx-0 lg:w-40 lg:h-[10.25rem]"
        >
          <img class={classes[index]} src={image} alt="" {...sizes[index]} />
        </figure>
        <div>
          <h3 class="mt-8 mb-3 sm:mt-0 lg:mt-12 lg:mb-6">{name}</h3>
          <p class="max-w-[21.25rem] mx-auto sm:mx-0">{description}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
