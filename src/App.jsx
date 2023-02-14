import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Joacir Sampaio"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <Post
            author="Joacir Sampaio"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </main>
      </div>
    </div>
  );
}
