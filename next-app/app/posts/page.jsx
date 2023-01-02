import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Post.module.css";

const fetchPosts = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
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
        <article key={item.id} className={styles.card}>
          <Image
            src={item.thumbnail}
            alt="Game Photo Cover"
            width={350}
            height={200}
          />

          <h2 style={{ color: "#09f" }}>{item.title}</h2>

          <p>{item.short_description}</p>

          <a href={item.game_url} target="_blank" rel="noreferrer">
            <button className={styles.btn}>FREE</button>
          </a>
        </article>
      ))}
    </section>
  );
}
