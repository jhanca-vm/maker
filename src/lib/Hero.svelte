<script>
  import hero from '$lib/assets/hero.webp'
</script>

<section
  class="sm:h-[22.25rem] sm:mt-19.5 sm:grid sm:place-items-center lg:mt-20
    lg:h-[27rem]"
>
  <img
    class="mt-16 mb-12 sm:hidden"
    src={hero}
    alt=""
    width="750"
    height="466"
  />
  <div class="px-6 text-center sm:px-10">
    <h1
      class="w-[15.5rem] mx-auto font-extrabold text-3xl sm:w-96 lg:w-[31rem]
        lg:text-5xl lg:leading-[3.5rem]"
    >
      Get paid for the work you <span class="text-primary">love</span> to do.
    </h1>
    <p class="max-w-md mt-6 mx-auto">
      The 9‑5 grind is so last century. We believe in living life on your own
      terms. Whether you’re looking to escape the rat race or set up a side
      hustle, we’ve got you covered.
    </p>
  </div>
</section>

<style>
  @media (min-width: 640px) {
    section {
      --left-position: -13.75rem;
      --right-position: calc(100% + 13.875rem);
      --center-size: auto 16.75rem;
      background: url('$lib/assets/hero-left.svg') var(--left-position),
        url('$lib/assets/hero-squiggle.svg') center,
        url('$lib/assets/hero-right.svg') var(--right-position);
      background-repeat: no-repeat;
      background-size: contain, var(--center-size), contain;
    }
  }

  @media (min-width: 768px) {
    section {
      --left-position: -10.625rem;
      --right-position: calc(100% + 10.75rem);
      --center-size: 34rem;
    }
  }

  @media (min-width: 1280px) {
    section {
      --left-position: -3.25rem;
      --right-position: calc(100% + 3.75rem);
    }
  }
</style>
