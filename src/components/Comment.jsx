import styles from "./Comment.module.css";
import { BsFillTrashFill } from 'react-icons/bs';
import { TiThumbsUp } from 'react-icons/ti';
import { Avatar } from "./Avatar";



export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    console.log('deletar');

    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://github.com/maykbrito.png" 
        alt="Foto do Perfil" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time
                title="14 de Fevereiro às 10:18"
                dateTime="2023-02-14 10:18:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <BsFillTrashFill size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <TiThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
