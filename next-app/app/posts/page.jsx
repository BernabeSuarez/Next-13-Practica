import Button from "../components/Button";
import Link from "next/link";

const fetchPosts = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 6000);
  });
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 30,
    },
  }).then((res) => res.json());
};

export default async function PostsPage() {
  const post = await fetchPosts();
  return (
    <section>
      {post.slice(0, 10).map((item) => (
        <article key={item.id}>
          <Link
            href="/posts/[id]"
            as={`/posts/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <h2 style={{ color: "#09f" }}>{item.title}</h2>
            <p>{item.body}</p>
          </Link>
          <Button id={item.id} />
        </article>
      ))}
    </section>
  );
}
