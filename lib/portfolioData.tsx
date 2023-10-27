import { Image, Link } from "@nextui-org/react";

export const portfolioData = {
  odyssey: {
    id: 1,
    name: "Odyssey",
    title: "Odyssey",
    tagline: "Orcales of the Odyssey",
    quote: () => <p>Please use the Demo account to see all features!</p>,
    overview:
      "Odyssey is a blog web application that allows users to create and share their own stories. Users can create, edit, publish and delete their stories, while viewing published stories from people around the world. Stories can be separated in categories while also allowing users the capability of liking and commenting on posts.",
    img1: "/images/projectIndex/odyssey/odyssey_home.png",

    mainTitle: "Making a Blog",
    main: () => (
      <>
        <p className="text-base leading-7 text-gray-700">
          The project began with organising the structure and layout of the
          project where all I had ready in my toolbox was{" "}
          <strong>TypeScript</strong>. To begin with we needed a database to
          store user&apos;s information and a way to retrieve and display on the
          frontend. For me, <strong>PostgreSQL</strong> was on obvious choice
          for a <strong>database</strong>. But knowing where to host the
          database became a problem. This being my first project linking a
          database, I found low-cost opportunities hard to find. That was until
          I came across a Prisma project tutorial for creating a blog. This was
          perfect as it combined familiar technologies (NextJs and PostgreSQL)
          while also improving my understanding of the{" "}
          <strong>ORM Prisma</strong>. The{" "}
          <Link href="https://vercel.com/guides/nextjs-prisma-postgres">
            tutorial
          </Link>{" "}
          showed the functionality behind users creating and publishing a post.
          The database it proposed was <strong>hosted by Vercel</strong>{" "}
          themselves, which was perfect for my needs. The tutorial also included
          functionality for retrieving and displaying a feed of 10 posts on the
          index page.
          <br />
          <br />
          As amazing as the tutorial was, it only got me so far. There was no
          inclusion of Authentication, deleting posts, categories, editing posts
          and so much more of the functionality I would like to include. This is
          where I had to get creative. I had to think of the best way to
          implement the features I wanted while also keeping the code clean and
          readable. I decided to use{" "}
          <strong>NextAuth.js for authentication</strong>, as it allowed
          multiple providers while being developer friendly. I opted for Github
          for users to login while also implementing a{" "}
          <strong>Demo account</strong> for people to see the features of the
          website, without the hassle of logging in or creating a Github
          account. This allowed users to persist throughout the app and maintain
          complete control of their assets.
          <br />
          <br />
          With the authentication in place, there was some functionality to
          attend to. The most annoying this about the project so far was the
          textarea when users were creating their stories. We want a user to
          express themselves with more tools than just language. This is where
          QuillJs came it. It is a <strong>WYSIWYG text editor</strong> vastly
          increasing the expressiveness of users. Now users were able to write
          in colours, quotes, bold and much more. The only caveat to Quill came
          in the form of a security issue. If users can be more expressive,
          there was also the <strong>possibility of malicious code</strong>{" "}
          being injected into the database. This was solved by using the
          sanitize-html package. This package allowed me to{" "}
          <strong>sanitize the HTML</strong> before it was sent to the database,
          removing any malicious code.
          <br />
          <br />
        </p>
        <figure className="mx-auto mb-6 flex w-full flex-col items-center justify-center justify-items-center">
          <Link href="https://was-here.vercel.app/">
            <Image
              className=" mx-auto w-full rounded-xl object-cover object-center shadow-lg"
              src="/images/projectIndex/odyssey/odyssey.gif"
              alt="Image Description"
            />
          </Link>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Run-through of Odyssey&apos;s functionality.
          </figcaption>
        </figure>
        <p className="mb-12 text-base leading-7 text-gray-700">
          Then, for the functionality, we only needed a few simple things. Users
          needed the ability to <strong>edit their posts</strong>, even if
          published, and delete them in the occasion arised. In addition, we
          would like to see popular posts and what others think so I implemented
          a <strong>likes and comment</strong> section for every post. All this
          required modifications to the database and APIs for getting, editing
          and removing all the posts, likes and comments. A process which is was
          as fun as it was laborious.
          <br />
          <br />
          Functionality&apos;s final touches came in the form of{" "}
          <strong>categories</strong>. Each post could be applied with a tag
          (from one or more of twelve) to quickly convey the topic of what was
          being written. Posts can be applied with many tags thus creating a
          many-to-many relationship between posts and tags. This was implemented
          by creating a new table in the database to store the relationship
          between posts and tags. This came in handy later when allowing users
          to <strong>filter posts</strong> based on a category of their choice.
          <br />
          <br />
          The final nail in the coffin was the styling. TailwindCSS has a
          special place in my heart when it comes to styling. It&apos;s
          utility-first approach allows for quick and easy styling while also
          being able to create beautiful designs. The design process is
          second-nature at this point (albeit fiddly), but I chose a simple
          design with a few colours to make the website pop. The website is
          <strong>fully responsive</strong> and looks great on all devices.
        </p>
      </>
    ),
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        With an intuitive interface, powerful editor tools, and robust community
        engagement options, this platform provides everything you need to share
        your ideas with the world:
      </p>
    ),
    features: [
      "User Authentication",
      "Responsive Design for all Devices",
      "Create, Edit, Publish and Delete Posts",
      "Display Most Liked Posts on the Homepage",
      "Separate Posts into Categories",
      "Upload and Edit User Biographies",
      "Add Likes to Posts",
      "Create and Delete Comments",
      "Add Multiple Categories to Posts",
      "Search Through Published Stories",
      "Sanitise HTML",
      "Quill Text Editor",
    ],
    tech: [
      "React",
      "TypeScript",
      "NextAuth",
      "TailwindCSS",
      "NextJs",
      "QuillJs",
      "sanitise-html",
      "Vercel",
      "lucide-react",
      "shadcn",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/Ibra-Zeno/Odyssey",
    website: "https://was-here.vercel.app/",
  },
  optima: {
    id: 1,
    name: "Optima",
    title: "Optima Planning Solutions",
    tagline: "The Project and Planning Solutions Company",
    overview:
      "This project showcases the capabilities of Optima Planning Solutions. The website is a static website built only using HTML, TailwindCSS and JavaScript. It is designed and made in the image of the client's needs and wants.",
    img1: "/images/projectIndex/optima/optima_home.png",
    mainTitle: "Planning for a Planner",
    main: () => (
      <p className="mb-12 text-base leading-7 text-gray-700">
        The aim of this project was to test my design skills and create a custom
        website for a client. Essentially, the client wanted to create an online
        presence in which they can showcase their services while being able to
        introduce themselves to potential clients. Given the busy lifestyle of
        the client, we wanted to create a website that was easy to maintain and
        update while conveying wants and in needs in as few meetings as
        possible.
        <br />
        <br />
        Given the client did not want any functionality such as a payment system
        or an online booking process, I decided we can work with the fundamental
        toolset of JavaScript, HTML and (a little extra fancy) TailwindCSS. That
        being the case, there is an extra emphasis frontend, namely design
        theory, user experience and SEO.
        <br />
        <br />
        The design process was guided by meetings with the client to view
        current works and make improvement for future iterations, while also
        taking into account the client&apos;s new ideas. The client wanted a
        professional, simple and colourful, with a focus on the services they
        provide and the courses they offer.
        <br />
        <br />
        Ultimately, the client was happy with the final product and is now using
        the website to showcase their services and courses to clients -
        potential and current.
      </p>
    ),
    quote: null,
    img2: "",
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        My custom-designed website for Optima, created to specifically meet the
        needs of this planning firm:
      </p>
    ),
    features: [
      "Responsive Design",
      "Modern and Minimalist Aesthetic",
      "Intuitive Navigation",
      "Showcases Services of Company",
      "Google Maps Integration",
      "Contact Form",
      "7 Static Pages",
      "Dropdown Menu",
      "Subtle Animations",
      "FAQs",
    ],
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    github: "https://github.com/Ibra-Zeno/Optima_Engineering",
    website: "https://master--jade-semifreddo-0ce48e.netlify.app/",
  },
  ecommerce: {
    id: 1,
    name: "E-commerce Store",
    title: "E-commerce Store",
    tagline: "A Store with Protection",
    quote: () => (
      <div>
        <h4>Test Card Details</h4>
        <p className="font-semibold">Card Number: 4242 4242 4242 4242</p>
        <div className="flex justify-center gap-x-4 font-semibold">
          <p>Expiry: 04/24</p>
          <p>CVC: 424</p>
        </div>
      </div>
    ),
    overview:
      "An E-commerce store with a live payment process. The project focuses on security and functionality while also being easy to use and intuitive. The website is built using React, TypeScript, NextJs, Sanity, TailwindCSS and Stripe.",
    img1: "/images/projectIndex/ecommerce/ecommerce_home.png",
    mainTitle: "Paying for It",
    main: () => (
      <>
        <p className="text-base leading-7 text-gray-700">
          This project began as a method to test my skills and elevate my
          opportunities in what I can create and develop. I wanted to create a
          project that was both fun and challenging, while also being able to
          showcase my skills. I decided to create an e-commerce store with a
          live payment process. This would allow me to test my skills in
          creating a full-stack application while also learning new technologies
          such as Stripe and Sanity.
          <br />
          <br />
          To begin with I was lost in finding a way to keep the data for the
          store and the products. I wanted to use a database to store the
          information on the products, but I also wanted to use a CMS to allow
          the client to easily update the products. This is where I came across
          Sanity. Sanity is a flexible, developer-friendly content management
          system (CMS) that makes it easy to build customised content models and
          input interfaces. Sanity is completely customisable and can be used to
          build simple to complex applications. This allowed me to separate
          concerns, where I have the frontend to deal with in one department
          while the data is decoupled and easily malleable. Using a CMS also
          allowed me to create a custom input for the client to upload images
          for the products. This was perfect as it allowed the client to upload
          images of the products without having to worry about the size or the
          format of the image.
          <br />
          <br />
        </p>
        <figure className="mx-auto mb-6 flex w-full flex-col items-center justify-center justify-items-center">
          <Link href="https://was-here.vercel.app/">
            <Image
              className=" mx-auto w-full rounded-xl object-cover object-center shadow-lg"
              src="/images/projectIndex/ecommerce/ecommerce.gif"
              alt="Image Description"
            />
          </Link>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Purchase and Payment Process.
          </figcaption>
        </figure>
        <p className="mb-12 text-base leading-7 text-gray-700">
          With the CMS in place, I wanted not only to create a store with
          customisable content, but a store from which you can buy products.
          This led to implementing a shopping cart, buy buttons with varying
          quantities and ultimately a live payment process. This how Stripe
          entered the project. Stripe is a payment processing platform that
          allows for a secure and easy payment process. It allows for a simple
          integration into any project and is developer friendly. It also allows
          for a test mode, which allows for a test payment process without the
          need for real card details. Given you are not buying real assets nor
          do you want to give away card information on a website made by the
          likes of me, this was perfect.
          <br />
          <br />
          Now everything was in place, I needed a way to display the products on
          the frontend. I used NextJs and React for its server-side rendering.
          This would allow me to create a fast and responsive website that would
          be able to handle a large amount of traffic. NextJs also allows for a
          static site generation, which would allow me to create a static
          website that can be hosted on a CDN. Thus a fast website that can be
          hosted anywhere in the world. The website is also fully responsive and
          looks great on all devices.
        </p>
      </>
    ),

    img2: "",
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        Built for speed, efficiency, and an optimal user experience, this robust
        application leverages the capabilities of React, Stripe, and other
        modern web technologies:
      </p>
    ),
    features: [
      "Responsive Design",
      "Product Carousel",
      "Automated Shopping Cart",
      "Live Payment Process",
      "Content Management System",
      "Success Toast",
      "Server-side Rendering",
      "Static Site Generation",
    ],
    improve: "",
    tech: [
      "React",
      "JavaScript",
      "Stripe",
      "TypeScript",
      "Sanity",
      "TailwindCSS",
      "NextJs",
      "Vercel",
    ],
    github: "https://github.com/Ibra-Zeno/Ecommerce_guards",
    website: "https://ecommerce-bodyguards-1ww5072n7-ibra-zeno.vercel.app/",
  },
  arch: {
    id: 1,
    name: "Architectural Portfolio",
    title: "",
    tagline: "",
    overview: "",
    img1: "",
    mainTitle: "Making a Blog",
    main: () => (
      <p>
        The aim was to allow people to share their insights from around the
        world, while also putting my full-stack skills to the test. I wanted to
        use a PostgreSQL database to store information on users as well as their
        posts, likes, and comments so the user can have a more personalized
        experience. The application&apos;s login uses NextAuth.js, giving the
        flexibility of using multiple providers. In this case, users can log in
        using Github, while people who want to see the features and capabilities
        of the website can use the Demo account.
      </p>
    ),

    quote: null,
    img2: "",
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        With an intuitive interface, powerful editor tools, and robust community
        engagement options, this platform provides everything you need to share
        your ideas with the world:
      </p>
    ),
    features: [
      "User Authentication",
      "Create, Edit, Publish and Delete Posts",
      "Display Most Liked Posts",
      "Separate Posts into Categories",
      "Upload and Edit User Biographies",
      "Likes",
      "Comments",
      "Categories",
      "Search",
      "Sanitise HTML",
      "Quill Text Editor",
      "Responsive Design",
    ],
    improve: "",
    tech: ["NextJS", "React", "TailwindCSS", "popmotion", "FramerMotion"],
    github: "https://Ibra-Zeno.github.io/odyssey",
    website: "https://was-here.vercel.app/",
    img: "/images/projectPage/odysseyShot.png",
  },
  summariser: {
    id: 1,
    name: "AI Summariser",
    title: "",
    tagline: "",
    overview: "",
    img1: "",
    mainTitle: "Making a Blog",
    main: () => (
      <p>
        The aim was to allow people to share their insights from around the
        world, while also putting my full-stack skills to the test. I wanted to
        use a PostgreSQL database to store information on users as well as their
        posts, likes, and comments so the user can have a more personalized
        experience. The application&apos;s login uses NextAuth.js, giving the
        flexibility of using multiple providers. In this case, users can log in
        using Github, while people who want to see the features and capabilities
        of the website can use the Demo account.
      </p>
    ),

    quote: null,
    img2: "",
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        With an intuitive interface, powerful editor tools, and robust community
        engagement options, this platform provides everything you need to share
        your ideas with the world:
      </p>
    ),
    features: [
      "User Authentication",
      "Create, Edit, Publish and Delete Posts",
      "Display Most Liked Posts",
      "Separate Posts into Categories",
      "Upload and Edit User Biographies",
      "Likes",
      "Comments",
      "Categories",
      "Search",
      "Sanitise HTML",
      "Quill Text Editor",
      "Responsive Design",
    ],
    improve: "",
    tech: ["React", "Redux", "JavaScript", "TailwindCSS"],
    github: "https://Ibra-Zeno.github.io/odyssey",
    website: "https://was-here.vercel.app/",
    img: "/images/projectPage/odysseyShot.png",
  },
};

export const projectOrder = [
  "odyssey",
  "optima",
  "ecommerce",
  "arch",
  "summariser",
];
/* 
Title
tagline
Overview
img1
Vision/Foundation
img2
Features
Future Improvements
*/
