import Link from "next/link";

export default function Post({ params }) {
  const { id } = params;
  return (
    <>
      <h1>Esto es el post {id} </h1>
      <Link href="/posts">Go back</Link>
    </>
  );
}
