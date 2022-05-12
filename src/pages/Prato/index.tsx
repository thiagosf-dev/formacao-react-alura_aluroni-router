import TagsPrato from 'components/TagsPrato';
import cardapio from 'data/cardapio.json';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Prato.module.scss';

export default function Prato() {
  /** 1 */
  // const params = useParams();
  // console.log('params :>> ', params);

  // const location = useLocation();
  // console.log('location :>> ', location);

  /** 2 */
  // const { state } = useLocation();
  // const { prato } = state as { prato: typeof cardapio[0] };

  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  if (!prato) return '';

  return (
    <>
      <button
        className={styles.voltar}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>

      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>

        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>

        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>

          <TagsPrato {...prato} />
        </div>
      </section>
    </>
  );
}
