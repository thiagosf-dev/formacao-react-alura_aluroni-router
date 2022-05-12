import 'normalize.css';

import { useState } from 'react';
import stylesTema from 'styles/Tema.module.scss';

import Buscador from './Buscador';
import style from './Cardapio.module.scss';
import Filtros from './Filtros';
import Itens from './Itens';
import Ordenador from './Ordenador';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <>
      <section className={style.cardapio}>
        <h3 className={stylesTema.titulo}> Cardápio </h3>

        <Buscador
          busca={busca}
          setBusca={setBusca}
        />

        <div className={style.cardapio__filtros}>
          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          />

          <Ordenador
            ordenador={ordenador}
            setOrdenador={setOrdenador}
          />
        </div>

        <Itens
          ordenador={ordenador}
          busca={busca}
          filtro={filtro}
        />
      </section>
    </>
  );
}
