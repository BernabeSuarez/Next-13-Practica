import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Post.module.css";

const fetchPosts = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 6000);
  });
  return fetch("https://www.freetogame.com/api/games", {
    next: {
      revalidate: 30,
    },
  }).then((res) => res.json());
};

export default async function PostsPage() {
  const post = await fetchPosts();
  return (
    <section className={styles.postContainer}>
      {post.map((item) => (
        <article key={item.id}>
          <Image
            src={item.thumbnail}
            alt="Game Photo Cover"
            width={350}
            height={200}
          />

          <a href={item.game_url} target="_blank" rel="noreferrer">
            <h2 style={{ color: "#09f" }}>{item.title}</h2>
          </a>

          <p>{item.short_description}</p>

          <Button id={item.id} />
        </article>
      ))}
    </section>
  );
}
