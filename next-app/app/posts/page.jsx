import Button from "../components/Button";
import Link from "next/link";

/**
 * Fetch posts from the API and return the response as JSON.
 * @returns An object with a next property that has a revalidate property.
 */
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function PostsPage() {
  const post = await fetchPosts();
  return (
    <section>
      {post.slice(0, 8).map((item) => (
        <article key={item.id}>
          <Link
            href="/posts/[id]"
            as={`/posts/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <h2 style={{ color: "#09f" }}>{item.title}</h2>
            <p>{item.body}</p>
            <Button id={item.id} />
          </Link>
        </article>
      ))}
    </section>
  );
}
