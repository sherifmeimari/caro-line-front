'use client';

import { useState } from 'react';

import HomeNavigation from '../src/components/homeNavigation';
import ActiveSlider from '../src/components/activeSlider';

import { categories, collections, allProducts } from '../src/api/data';

const footerNavigation = {
  shop: [
    { name: 'Bridal', href: '#' },
    { name: 'Mini Bridal', href: '#' },
    { name: 'Evening Dresses', href: '#' },
    { name: 'Black', href: '#' },
  ],
  atelier: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
};

const stories = [
  {
    id: 1,
    name: 'Defilee Four Seasons',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesNav = ['All', ...categories.map((category) => category.name)];

  const filteredProducts =
    activeCategory === 'All'
      ? allProducts
      : categories.find((category) => category.name === activeCategory)
          .products;

  const selectedCategory =
    activeCategory === 'All'
      ? null
      : categories.find((cat) => cat.name === activeCategory);

  return (
    <div className="bg-white">
      {/* Home Navigation */}
      <HomeNavigation />
      <main>
        {/* By Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:px-8"
        >
          <div className="mb-6 mt-6 border-b border-gray-200 border-transparent">
            <nav className="flex space-x-8 overflow-x-auto justify-center">
              {categoriesNav.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-4 text-medium font-medium whitespace-nowrap transition
          ${
            activeCategory === category
              ? 'border-b-2 border-black text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }
        `}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
          <ActiveSlider
            products={filteredProducts}
            category={selectedCategory}
          />
        </section>
        {/* Collections section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Shop by Collection
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all collections
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {collections.map((collection) => (
                    <a
                      key={collection.name}
                      href={collection.page.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          alt={collection.page.imageAlt}
                          src={collection.page.imageSrc}
                          className="size-full object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {collection.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Products Section */}
        {/* <section>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">
              Check our Products
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.options}
                      </p>
                    </div>

                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {product.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to bag
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <ection>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
            <div className="relative overflow-hidden rounded-lg lg:h-96">
              <div className="absolute inset-0">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-featured-collection.jpg"
                  className="size-full object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-br-lg rounded-bl-lg bg-black/75 p-6 backdrop-blur-sm backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Workspace Collection
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    Upgrade your desk with objects that keep you organized and
                    clear-minded.
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-6 flex shrink-0 items-center justify-center rounded-md border border-white/25 px-4 py-3 text-base font-medium text-white hover:bg-white/10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                >
                  View the collection
                </a>
              </div>
            </div>
          </div>
        </ection>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                className="size-full object-cover"
              />
            </div>
            <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Level up</span>
                  <span className="block sm:inline">your desk</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Make your desk beautiful and organized. Post a picture to
                  social media and watch it get more likes than life-changing
                  announcements. Reflect on the shallow nature of existence. At
                  least you have a really nice desk setup.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Workspace
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category section */}
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="category-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Shop by Category
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                <img
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
                className="size-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900/50"
            />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="cause-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Long-term thinking
              </h2>
              <p className="mt-3 text-xl text-white">
                We are committed to responsible, sustainable, and ethical
                manufacturing. Our small-scale approach allows us to focus on
                quality and reduce our impact. We are doing our best to delay
                the inevitable heat-death of the universe.
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Read our story
              </a>
            </div>
          </div>
        </section>

        {/* Stories section */}
        <section aria-labelledby="stories-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="stories-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Featured Stories
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all Stories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              {stories.map((story) => (
                <div key={story.id} className="group relative">
                  <img
                    alt={story.imageAlt}
                    src={story.imageSrc}
                    className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3 sm:h-auto"
                  />
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <a href={story.href}>
                      <span className="absolute inset-0" />
                      {story.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{story.price}</p> */}
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all stories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pt-48 pb-16 sm:pb-24">
                  <div>
                    <h2
                      id="sale-heading"
                      className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                    >
                      Final Stock.
                      <br />
                      Up to 50% off.
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="#" className="font-semibold text-white">
                        Shop the sale
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Shop</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Atelier</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.atelier.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-300">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <input
                  id="email-address"
                  type="text"
                  required
                  autoComplete="email"
                  aria-label="Email address"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-white"
                />
                <div className="ml-4 shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2021 Your Company, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
