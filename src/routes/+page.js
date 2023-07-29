import passions from '$lib/assets/passions.svg'
import financialFreedom from '$lib/assets/financial-freedom.svg'
import lifestyle from '$lib/assets/lifestyle.svg'
import workAnywhere from '$lib/assets/work-anywhere.svg'

export const prerender = true

export const load = () => ({
  features: [
    {
      name: 'Indulge your passions',
      description:
        "Your passions shouldn't be just for the weekend. Earn a living " +
        'doing what you love.',
      image: passions
    },
    {
      name: 'Gain financial freedom',
      description:
        'Start making money work for you. There’s nothing quite like earning ' +
        'while you sleep.',
      image: financialFreedom
    },
    {
      name: 'Choose your lifestyle',
      description:
        'Own your daily schedule. Fancy a lie‑in? Go for it! Take charge of ' +
        'your week.',
      image: lifestyle
    },
    {
      name: 'Work from anywhere',
      description:
        'Selling online means not being pinned down. Want to work AND ' +
        'travel? Go for it!',
      image: workAnywhere
    }
  ]
})
