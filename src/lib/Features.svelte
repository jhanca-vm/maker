<script>
  export let data
</script>

<section class="my-36 px-6 grid gap-y-14 text-center">
  {#each data as { image, name, description }, index}
    <article>
      <figure
        class="w-[7.5rem] h-[7.75rem] mx-auto grid place-items-center
          bg-secondary rounded-[2.8125rem]"
      >
        <img
          class:w-16.5={index === 0}
          class:w-14={index === 1}
          class:w-15={index === 2}
          class:w-19.5={index === 3}
          src={image}
          alt=""
        />
      </figure>
      <h3 class="mt-8 mb-3">{name}</h3>
      <p>{description}</p>
    </article>
  {/each}
</section>
