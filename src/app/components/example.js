'use client';

import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import Carousel from './carousel';

const slides = [
  {
    type: 'image',
    src: '/images/35.png',
  },
  { type: 'video', src: '/videos/0225.mp4' },
  {
    type: 'image',
    src: '/images/21.png',
  },
];

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];
const navigation = {
  categories: [
    {
      name: 'Ready To Wear',
      page: {
        name: 'All Collections',
        href: '#',
        imageSrc: '/images/fyu.png',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      collections: [
        {
          name: 'Mini Bridal Collection',
          href: '#',
          imageSrc: '/images/f3.png',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Evening Dresses',
          href: '#',
          imageSrc: '/images/37.png',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
    },
    {
      name: 'Bridal Custom Making',
      page: {
        name: 'Customized for You',
        href: '#',
        imageSrc: '/images/fyu.png',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
    },
  ],
  pages: [
    { name: 'Our Story', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
};
const categories = [
  {
    name: 'Ready to Wear',
    href: '#',
    imageSrc: '/images/3.png',
  },
  {
    name: 'Basic for Weddings',
    href: '#',
    imageSrc: '/images/19.png',
  },
  {
    name: 'Casual with Family',
    href: '#',
    imageSrc: '/images/9.png',
  },
  {
    name: 'Young and Sexy',
    href: '#',
    imageSrc: '/images/10.png',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc: '/images/18.png',
  },
];

const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
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
    name: 'Black Basic Tee',
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

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'Zip High Wall Tote',
    color: 'White and blue',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.',
    price: '$150',
  },
  {
    id: 3,
    name: 'Halfsize Tote',
    color: 'Clay',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-03.jpg',
    imageAlt:
      'Front of tote with monochrome natural canvas body, straps, roll top, and handles.',
    price: '$210',
  },
  {
    id: 4,
    name: 'High Wall Tote',
    color: 'Black and orange',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-04.jpg',
    imageAlt:
      'Front of zip tote bag with black canvas, black handles, and orange drawstring top.',
    price: '$210',
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 py-6"
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.collections &&
                        category.collections.length > 0 &&
                        category.collections.map((item) => (
                          <div key={item.name} className="group relative">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                            />
                            <a
                              href={item.href}
                              className="mt-6 block text-sm font-medium text-gray-900"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 z-10"
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden="true"
                              className="mt-1 text-sm text-gray-500"
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      {!category.collections && (
                        <div key={category.name} className="group relative">
                          <img
                            alt={category.page.imageAlt}
                            src={category.page.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={category.page.href}
                            className="mt-6 block text-sm font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {category.page.name}
                          </a>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-sm text-gray-500"
                          >
                            Shop now
                          </p>
                        </div>
                      )}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Hero section */}
      <div className="relative bg-gray-900 h-svh">
        {/* Decorative image/carousel and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Carousel className="size-full" slides={slides} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form>
                  <div className="-ml-2 inline-grid grid-cols-1">
                    <select
                      id="desktop-currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                    />
                  </div>
                </form>

                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div
              className={`transition-colors duration-200  backdrop-filter ${
                activeCategory ? 'bg-white' : 'bg-transparent'
              }`}
            >
              <div
                className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
                  activeCategory !== null ? 'text-gray-900' : 'text-white'
                }`}
              >
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          alt=""
                          src={`https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=${activeCategory ? 'black' : 'white'}`}
                          className="h-8 w-auto"
                        />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <PopoverGroup className="inset-x-0 bottom-0 px-4">
                        <div className="flex h-full justify-center space-x-8">
                          {navigation.categories.map((category) => {
                            if (
                              category.collections &&
                              category.collections.length > 0
                            )
                              return (
                                <Popover key={category.name} className="flex">
                                  {({ open }) => {
                                    // Sync state with Popover open/closed
                                    if (
                                      open &&
                                      activeCategory !== category.name
                                    ) {
                                      setActiveCategory(category.name);
                                    } else if (
                                      !open &&
                                      activeCategory === category.name
                                    ) {
                                      setActiveCategory(null);
                                    }

                                    return (
                                      <>
                                        <div className="relative flex">
                                          <PopoverButton
                                            className="group relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out cursor-pointer focus:outline-none focus:ring-0"
                                            onClick={() =>
                                              setActiveCategory(
                                                activeCategory === category.name
                                                  ? null
                                                  : category.name,
                                              )
                                            }
                                          >
                                            {category.name}
                                            <span
                                              aria-hidden="true"
                                              className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-white"
                                            />
                                          </PopoverButton>
                                        </div>
                                        <PopoverPanel
                                          transition
                                          className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                        >
                                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                          <div
                                            aria-hidden="true"
                                            className="absolute inset-0 top-1/2 bg-white shadow-sm"
                                          />
                                          <div className="relative bg-white">
                                            <div className="mx-auto max-w-7xl px-8">
                                              <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                                                <div
                                                  key={category.page.name}
                                                  className="group relative"
                                                >
                                                  <img
                                                    alt={category.page.imageAlt}
                                                    src={category.page.imageSrc}
                                                    className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                                  />
                                                  <a
                                                    href={category.page.href}
                                                    className="mt-4 block font-medium text-gray-900"
                                                  >
                                                    <span
                                                      aria-hidden="true"
                                                      className="absolute inset-0 z-10"
                                                    />
                                                    {category.page.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>

                                                {category.collections
                                                  .slice(0, 2)
                                                  .map((item) => (
                                                    <div
                                                      key={item.name}
                                                      className="group relative"
                                                    >
                                                      <img
                                                        alt={item.imageAlt}
                                                        src={item.imageSrc}
                                                        className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                                      />
                                                      <a
                                                        href={item.href}
                                                        className="mt-4 block font-medium text-gray-900"
                                                      >
                                                        <span
                                                          aria-hidden="true"
                                                          className="absolute inset-0 z-10"
                                                        />
                                                        {item.name}
                                                      </a>
                                                      <p
                                                        aria-hidden="true"
                                                        className="mt-1"
                                                      >
                                                        Shop now
                                                      </p>
                                                    </div>
                                                  ))}
                                              </div>
                                            </div>
                                          </div>
                                        </PopoverPanel>
                                      </>
                                    );
                                  }}
                                </Popover>
                              );
                          })}
                          {navigation.categories.map((category) => {
                            if (!category.collections)
                              return (
                                <a
                                  key={category.name}
                                  href={category.page.href}
                                  className="flex items-center text-sm font-medium"
                                >
                                  {category.name}
                                </a>
                              );
                          })}
                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </PopoverGroup>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-ml-2 p-2 text-white"
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                      </button>

                      {/* Search */}
                      <a href="#" className="ml-2 p-2">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="size-6"
                        />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                        className="h-8 w-auto"
                      />
                    </a>

                    <div className="flex flex-1 items-center justify-end">
                      <a
                        href="#"
                        className="hidden text-sm font-medium lg:block"
                      >
                        Search
                      </a>

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <a href="#" className="p-2 lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon
                            aria-hidden="true"
                            className="size-6"
                          />
                        </a>
                        <a
                          href="#"
                          className="hidden text-sm font-medium lg:block"
                        >
                          Help
                        </a>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <a
                            href="#"
                            className="group -m-2 flex items-center p-2"
                          >
                            <ShoppingBagIcon
                              aria-hidden="true"
                              className="size-6 shrink-0"
                            />
                            <span className="ml-2 text-sm font-medium">0</span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they are still in
            stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>

      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
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

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          alt=""
                          src={category.imageSrc}
                          className="size-full object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.name}
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
        <section>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">
              Customers also bought
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
                        {product.color}
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
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                Our Stories
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
                  <p className="mt-1 text-sm text-gray-500">{story.price}</p>
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
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
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
}
