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

<section class="bg-no-repeat bg-top my-36 px-6 text-center">
  <h2 class="w-60 mx-auto">Get notified when we launch</h2>
  <form class="mt-8 grid gap-y-6" on:submit|preventDefault={handleSubmit}>
    <div>
      <input
        class="block w-full h-12 px-5 bg-secondary rounded-3xl font-extrabold
          placeholder-white/40"
        class:error={hasError}
        name="email"
        type="text"
        placeholder="Email address"
      />
      {#if hasError}
        <p class="mt-1 ml-5 text-error text-[0.75rem] text-left">
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
</style>
