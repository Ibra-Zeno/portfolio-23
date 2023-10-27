import { Link } from "@nextui-org/react";

export const portfolioData = {
  odyssey: {
    id: 1,
    name: "Odyssey",
    title: "Odyssey",
    tagline: "Orcales of the Odyssey",
    overview:
      "Odyssey is a web application that allows users to create and share their own stories. Users can create, edit and publish drafts of their stories, while viewing stories from people around the world. Stories can be separated in categories while also allowing users the capability of liking and commenting on posts.",
    img1: "",
    main: () => (
      <>
        <p>
          The project began with organising the structure and layout of the
          project. To being with we needed a database to store user&apos;s
          information and a way to retrieve it to display on the frontend. For
          me, PostgreSQL was on obvious choice for a database. But knowing where
          to host the database became a problem. This being my first project
          linking a database, I found low-cost opportunities hard to find. That
          was until I came across a Prisma project tutorial for creating a blog.
          This was perfect as it combined familiar technologies (NextJs and
          PostgreSQL) while also improving my understanding of the ORM Prisma.
          The <Link href="#">tutorial</Link> showed the functionality behind
          users creating and publishing a post. The tutorial also included
          functionality for retrieving and displaying a feed of 10 posts on the
          index page.
          <br />
          <br />
          As amazing as the tutorial was, it only got me so far. There was no
          inclusion of Authentication, deleting posts, categories, editing posts
          and so much more of the functionality I would like to include. This is
          where I had to get creative. I had to think of the best way to
          implement the features I wanted while also keeping the code clean and
          readable. I decided to use NextAuth.js for authentication, as it
          allowed multiple providers while being developer friendly. I opted for
          Github for users to login while also implementing a Demo account for
          people to see the features of the website, without the hassle of
          logging in or creating a Github account. This allowed users to persist
          throughout the app and maintain complete control of their assets.
          <br />
          <br />
          With the authentication in place, there was some functionality to
          attend to. The most annoying this about the project so far was the
          textarea when users were creating their stories. We want a user to
          express themselves with more tools than just language. This si where
          QuillJs came it. It is a WYSIWYG text editor vastly increasing the
          expressiveness of users. Now users were able to write in colours,
          quotes, bold and much more. The only caveat to Quill came in the form
          of a security issue. If users can be more expressive, there was also
          the possibility of malicious code being injected into the database.
          This was solved by using the sanitize-html package. This package
          allowed me to sanitize the HTML before it was sent to the database,
          removing any malicious code.
          <br />
          <br />
          Then, for the functionality, we only needed a few simple things. Users
          needed the ability to edit their posts, even if published, and delete
          them in the occasion arised. In addition, we would like to see popular
          posts and what others think so I implemented a likes and comment
          section for every post. All this required modifications to the
          database and APIs for getting, editing and removing all the posts,
          likes and comments. A process which is was as fun as it was laborious.
          <br />
          <br />
          Functionality&apos;s final touches came in the form of categories.
          Each post could be applied with a tag (from one or more of twelve) to
          quickly convey the topic of what was being written. Posts can be
          applied with many tags thus creating a many-to-many relationship
          between posts and tags. This was implemented by creating a new table
          in the database to store the relationship between posts and tags. This
          came in handy later when allowing users to filter posts based on a
          category of their choice.
          <br />
          <br />
          The final nail in the coffin was the styling. TailwindCSS has a
          special place in my heart when it comes to styling. It&apos;s
          utility-first approach allows for quick and easy styling while also
          being able to create beautiful designs. The design process is
          second-nature at this point (albei fiddly), but I chose a simple
          design with a few colours to make the website pop. The website is
          fully responsive and looks great on all devices.
        </p>
      </>
    ),
    quote: "",
    img2: "",
    features: "",
    improve: "",
    tech: [
      "React",
      "NextAuth",
      "TailwindCSS",
      "NextJs",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://Ibra-Zeno.github.io/odyssey",
    website: "https://was-here.vercel.app/",
    img: "/images/projectPage/odysseyShot.png",
  },
  optima: {
    id: 1,
    name: "Optima",
    title: "",
    tagline: "",
    overview: "",
    img1: "",
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
    quote: "",
    img2: "",
    features: "",
    improve: "",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    github: "https://Ibra-Zeno.github.io/odyssey",
    website: "https://was-here.vercel.app/",
    img: "/images/projectPage/odysseyShot.png",
  },
  ecommerce: {
    id: 1,
    name: "Ecommerce Store",
    title: "",
    tagline: "",
    overview: "",
    img1: "",
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

    quote: "",
    img2: "",
    features: "",
    improve: "",
    tech: [
      "React",
      "TypeScript",
      "Stripe",
      "JavaScript",
      "Sanity",
      "TailwindCSS",
      "NextJs",
    ],
    github: "https://Ibra-Zeno.github.io/odyssey",
    website: "https://was-here.vercel.app/",
    img: "/images/projectPage/odysseyShot.png",
  },
  arch: {
    id: 1,
    name: "Architectural Portfolio",
    title: "",
    tagline: "",
    overview: "",
    img1: "",
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

    quote: "",
    img2: "",
    features: "",
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

    quote: "",
    img2: "",
    features: "",
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
