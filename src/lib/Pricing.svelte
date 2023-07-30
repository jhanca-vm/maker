<script>
  import Check from './Check.svelte'

  const features = {
    free: [
      'Unlimited products',
      'Basic analytics',
      'Limited marketplace exposure',
      '10% fee per transaction'
    ],
    paid: [
      'Custom domain',
      'Advanced analytics and reports',
      'High marketplace visibility',
      '5% fee per transaction'
    ]
  }
</script>

<section class="px-6 text-center">
  <h2 class="mb-7 lg:mb-6">Our pricing plans</h2>
  <p class="max-w-xl mx-auto">
    We only make money when our creators make money. Our plans are always
    affordable, and it’s completely free to get started.
  </p>
  <div
    class="mt-14 flex flex-col gap-8 text-left items-center lg:mt-16 lg:flex-row
      lg:justify-center"
  >
    <article class="max-w-md px-7 py-8 bg-secondary rounded-lg sm:p-9">
      <h3 class="mb-5 leading-none">Dip your toe</h3>
      <p class="max-w-[23.5rem] text-white/60">
        Just getting started? No problem at all! Our free plan will take you a
        long way.
      </p>
      <span class="block mt-7 mb-5 font-extrabold text-[2.5rem]">Free</span>
      <ul class="grid gap-y-3">
        {#each features.free as item}
          <li class="flex items-center gap-x-4">
            <Check class="text-primary" />
            {item}
          </li>
        {/each}
      </ul>
    </article>
    <article
      class="max-w-md px-7 py-8 bg-primary text-accent rounded-lg sm:p-9
        lg:py-11"
    >
      <h3 class="mb-5 leading-none">Dive right in</h3>
      <p class="max-w-[23.5rem] text-accent/60">
        Ready for the big time? Our paid plan will help you take your business
        to the next level.
      </p>
      <p
        class="mt-7 mb-5 flex items-center gap-x-2 text-accent/60
          leading-normal"
      >
        <span class="font-extrabold text-accent text-[2.5rem]">$25.00</span>
        / month
      </p>
      <ul class="grid gap-y-3">
        {#each features.paid as item}
          <li class="flex items-center gap-x-4">
            <Check />
            {item}
          </li>
        {/each}
      </ul>
    </article>
  </div>
</section>
