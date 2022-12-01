import React from "react";
import { useRouter } from "next/router";

const Page = ({ blog }) => {
  const router = useRouter();
  return (
    <div>
      <h1 onClick={() => router.back()}>Go Back</h1>
      <h1>Page:{router.query.id}</h1>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:8080/blogs");
  let data = await response.json();
  return {
    paths: data.map((blog) => ({ params: { id: blog.id.toString() } })),
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const response = await fetch(`http://localhost:8080/blogs/${id}`);
  let data = await response.json();
  return {
    props: {
      blog: data,
    },
  };
}

export default Page;
