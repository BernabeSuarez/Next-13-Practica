import styles from "../../styles/Post.module.css";
import Image from "next/image";
import load from "../../public/gameLoading.gif";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Image
        className={styles.loader}
        src={load}
        alt="Loader"
        width={900}
        height={700}
      />
    </div>
  );
}
