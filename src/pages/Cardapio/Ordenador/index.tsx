import classNames from 'classnames';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import opcoes from './opcoes.json';
import styles from './Ordenador.module.scss';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({
  ordenador,
  setOrdenador,
}: Props) {
  const [aberto, setAberto] = useState(false);

  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <>
      <button
        className={classNames({
          [styles.ordenador]: true,
          [styles['ordenador--ativo']]: ordenador !== ''
        })}
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
      >
        <span>
          {nomeOrdenador || 'Ordenar por:'}
        </span>
        {
          aberto ?
            <MdKeyboardArrowUp />
            :
            < MdKeyboardArrowDown />
        }

        <div
          className={classNames({
            [styles.ordenador__options]: true,
            [styles['ordenador__options--ativo']]: aberto,
          })}
        >
          {
            opcoes.map(opcao => (
              <div
                key={opcao.value}
                className={styles.ordenador__option}
                onClick={() => setOrdenador(opcao.value)}
              >
                {opcao.nome}
              </div>
            ))
          }
        </div>
      </button>
    </>
  );
}
