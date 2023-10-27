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
          sanitise-html package. This package allowed me to{" "}
          <strong>sanitise the HTML</strong> before it was sent to the database,
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
    title: "Architectural Portfolio",
    tagline: "Built from Blueprints",
    overview:
      "A portfolio website for an architect built to showcase their accomplishments while conveying a keen sense of design on the architect's behalf, made with NextJs.",
    img1: "/images/projectIndex/arch/arch_home.png",
    mainTitle: "Building Blocks",
    main: () => (
      <p className="mb-12 text-base leading-7 text-gray-700">
        This project was a fun and exciting challenge. It was asked of me by a
        knowledgable designer and artistic person. Thus I was set the task of
        creating a website to match their skills and capabilities. While having
        the creative freedom to create a website that was both functional and
        beautiful, I was also tasked with creating a reflection of the
        designer&apos;s skills and personality.
        <br />
        <br />
        The design process was a joint effort by the architect and I, shaped by
        the work in their portfolio and the requirements of the website. The
        architect wanted a website that was simple, elegant and modern. And so I
        started with a basic layout, focusing on the positioning of elements and
        the story a user would read through on their user journey. Hence I made
        navigation a smooth flow from section to section while also allowing the
        user to jump to a section of their choice.
        <br />
        <br />
        The difficult part lie in how to present the work of the architect.
        Given the nature of the portfolio and its extensive array of images, it
        would seem apt to create a Gallery. The Gallery had to be intuitive,
        seamless and have the ability to load images in as they were swiped to
        avoid user wait times being endless. At the time, the available Gallery
        packages for React were either too costly or not hiting the right mark,
        so I decided to build it myself. This was achieved by using Framer
        Motion and popmotion that allowed for a smooth Carousel with pagination
        that was also responsive to swipe (or click and drags) for all devices.
        While being challenging at the time, it is now my pride and joy.
        <br />
        <br />
        And finally, the website colours were chosen by the architect to create
        a subtle neon theme throughout, greatly emphasised by the dark mode (a
        personal favourite). The design was a joy with TailwindCSS and NextJs,
        allowing for a fast and responsive website that looks great on all
        devices.
      </p>
    ),

    quote: null,
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        Optimised to showcase stunning projects and visuals, this reactive site
        was thoughtfully crafted to represent a distinct identity online:
      </p>
    ),
    features: [
      "Modern and Subtle Design",
      "Functional Gallery",
      "Responsive Design",
      "Theme Toggle",
      "Logo Carousel",
      "Server-side Rendering",
      "Static Site Generation",
    ],
    tech: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "lucide",
      "NextUI",
      "popmotion",
      "FramerMotion",
    ],
    github: "https://github.com/Ibra-Zeno/h-portfolio1.0",
    website: "https://architect-portfolio-mu.vercel.app/",
  },
  summariser: {
    id: 1,
    name: "AI Summariser",
    title: "AI Summariser",
    tagline: "Generate Concise Summaries",
    overview:
      "AI Summariser is a fast web-application that leverages OpenAI's API to provide quick and concise summaries of any URL entered into the search bar.",
    img1: "/images/projectIndex/AI/AI_home.png",
    mainTitle: "Generating Paragraphs with Transformers (GPT)",
    main: () => (
      <p>
        Of my projects, this is one of the simpler tasks I have had to overcome.
        The initial idea was to utilise AI to create a service to help
        streamline the lives of others. An idea which I am sure has become more
        common than adverts on YouTube. But I wanted to create something that
        was simple, easy to use and fast.
        <br />
        <br />
        With a chance to improve my handling of APIs, I scoured RapidAPI to find
        an AI tool to integrating into a web application. I came across
        OpenAI&apos;s API and was immediately drawn to the simplicity of the
        API. It was easy to use and had a clear documentation. The API also had
        a free tier which allowed for 100 requests per month. This was perfect
        for my needs albeit I almost ran out of request during development.
        <br />
        <br />
        After retrieving information for the API, I used Redux to persist the
        data and display it on the frontend. This allowed me to have a local
        state of the information being relayed to the application. I also used
        Redux to create a loading state for the application, which would be
        displayed while the API was being called. This was done to improve the
        user experience and to avoid any confusion as to whether the application
        was working or not.
        <br />
        <br />
        In addition to using Redux as a state management tool, I also used
        localStorage to save previous articles searched for by the user and
        display them on the homepage. Finally, the styling for the app was
        aiming for a simple and minimalist approach where users came do to one
        thing and one thing only. This was achieved by using TailwindCSS and
        Vite, which allowed for a fast and responsive web app.
      </p>
    ),

    quote: null,
    featuresIntro: () => (
      <p className="mb-6 text-base leading-8 text-gray-700">
        Built leveraging state-of-the-art natural language processing models,
        this application enables users to quickly summarise webpages with just
        the click of a button:
      </p>
    ),
    features: [
      "Responsive Design",
      "Copy Previous Articles",
      "Save Articles",
      "Minimalist Design",
      "Loading State",
      "OpenAI API",
      "Easy to Use",
    ],
    tech: ["React", "Redux", "JavaScript", "Vite", "TailwindCSS"],
    github: "https://github.com/Ibra-Zeno/Ai-Summariser",
    website: "https://precious-moxie-325a15.netlify.app/",
  },
};

export const projectOrder = [
  "odyssey",
  "optima",
  "ecommerce",
  "arch",
  "summariser",
];
