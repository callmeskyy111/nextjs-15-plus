import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">To BlogPage📝</Link>
     <br/>
      <Link href="/courses">To CoursesPage🎓</Link>
      <br/>
      <br/>
      <Link href="/articles/breaking-news-123?lang=en">Read in ENGLISH</Link>
      <br/>
      <Link href="/articles/breaking-news-123?lang=fr">Lire en FRANÇAIS</Link>
    </>
  );
}

export default Home;
//33
