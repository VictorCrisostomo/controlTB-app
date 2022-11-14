import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Molhomdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btnReceita" size="large">
        Ver receita
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitleReceita">Molho de abacate com iogurte para saladas</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            INGREDIENTES:<br/>| 1 xícara (250 g) de iogurte grego<br/>| 1/2 abacate (350 g)<br/>| 2 colheres (sopa) (30 ml) de suco de limão Taiti<br/>| 1 dente de alho (5 g)<br/>| 2 colheres (sopa) (6 g) de salsinha picada<br/>| 2 colheres (sopa) (6 g) de cebolinha picada <br/>| 2 colheres (sopa) (20 g) de cebola picada<br/>| 2 colheres (sopa) (30 ml) de azeite de oliva ou óleo<br/>| 2 colheres (sopa) (28 g) de mostarda sal e pimenta-do-reino<br/> <br/> Modo de Preparo:<br/>1 - Coloque todos os ingredientes no liquidificador e bata até obter um creme homogêneo.<br/>2 - Sirva em seguida ou guarde em um pote na geladeira, por até 5 dias.
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Molhomdl;