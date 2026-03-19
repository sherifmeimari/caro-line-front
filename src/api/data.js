export const categories = [
  {
    name: 'Bridal',
    href: '#',
    imageSrc: '/images/f3.png',
    imageAlt:
      'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    products: [
      {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        category: 'Ready to Wear',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt:
          'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description:
          'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
      },
      {
        id: 3,
        name: 'Halfsize Tote',
        color: 'Clay',
        href: '#',
        category: 'Ready to Wear',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt:
          'Front of tote with monochrome natural canvas body, straps, roll top, and handles.',
        price: '$210',
      },
    ],
  },
  {
    name: 'Mini Bridal',
    href: '#',
    imageSrc: '/images/f3.png',
    imageAlt:
      'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    products: [
      {
        id: 1,
        name: 'High Wall Tote',
        color: 'Black and orange',
        href: '#',
        category: 'All',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt:
          'Front of zip tote bag with black canvas, black handles, and orange drawstring top.',
        price: '$210',
      },
      {
        id: 2,
        name: 'Fall Basic Tee 3-Pack',
        href: '#',
        price: '$96',
        description:
          'Who need stark minimalism when you could have earth tones? Embrace the season.',
        options: 'Charcoal',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-05.jpg',
        imageAlt:
          'Three shirts arranged on table in mustard, dark gray, and olive.',
      },
    ],
  },
  {
    name: 'Evening Dresses',
    href: '#',
    imageSrc: '/images/37.png',
    imageAlt:
      'Model wearing minimalist watch with black wristband and white watch face.',
    products: [
      {
        id: 1,
        name: 'Linework Artwork Tee 3-Pack',
        href: '#',
        price: '$108',
        description:
          'Get all 3 colors of our popular Linework design and some variety to your monotonous life.',
        options: '3 colors',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
        imageAlt:
          'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
      },
    ],
  },
  {
    name: 'Black',
    href: '#',
    imageSrc: '/images/f3.png',
    imageAlt:
      'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    products: [
      {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        category: 'Ready to Wear',
        imageSrc:
          'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt:
          'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
    ],
  },
];

export const collections = [
  {
    name: 'Ready To Wear',
    page: {
      name: 'All Collection',
      href: '/collections/1',
      imageSrc: '/images/fyu.png',
      imageAlt:
        'Models sitting back to back, wearing Basic Tee in black and bone.',
    },
    categories,
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
];

export const allProducts = collections.flatMap((collection) =>
  collection.categories
    ? collection.categories.flatMap((category) => category.products)
    : [],
);
