<script>
  const regExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')

  let hasError = false

  function validateEmail(email) {
    hasError = !regExp.test(email)
  }

  function handleSubmit(event) {
    const input = event.target.email

    validateEmail(input.value)

    if (!hasError) {
      event.target.reset()
      if (input.oninput) input.oninput = null
    }

    if (hasError && !input.oninput) {
      input.oninput = event => validateEmail(event.target.value)
    }
  }
</script>

<section
  class="bg-no-repeat bg-top my-36 px-6 text-center sm:bg-right sm:my-30 sm:py-4
    lg:mt-36 lg:mb-28 lg:pt-12 lg:pb-11"
>
  <h2 class="w-60 mx-auto sm:w-auto">Get notified when we launch</h2>
  <form
    class="max-w-[29.75rem] mx-auto mt-8 grid gap-y-6 sm:grid-cols-[20rem_1fr]
      sm:gap-x-4"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="relative">
      <input
        class="block w-full h-12 px-5 bg-secondary rounded-3xl font-extrabold
          placeholder-white/40"
        class:error={hasError}
        name="email"
        type="text"
        placeholder="Email address"
      />
      {#if hasError}
        <p class="mt-1 ml-5 text-error text-[0.75rem] text-left sm:absolute">
          Oops! That doesn’t look like an email address
        </p>
      {/if}
    </div>
    <button
      class="w-full h-12 bg-primary rounded-3xl font-extrabold text-secondary
        transition hover:bg-transparent hover:text-white"
    >
      Get notified
    </button>
  </form>
</section>

<style lang="postcss">
  section {
    background-image: url('$lib/assets/squiggle.svg');
    background-size: auto 5rem;
  }

  input:focus,
  button:hover {
    outline: 2px solid theme('colors.primary');
  }

  input.error {
    outline: 2px solid theme('colors.error');
  }

  @media (min-width: 640px) {
    section {
      background-size: cover;
    }
  }
</style>
