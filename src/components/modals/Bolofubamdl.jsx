import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Bolofubamdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btnReceita" size="large">
        Ver receita
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitleReceita">Bolo de fubá com farinha de casca de ovo</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            INGREDIENTES:<br />| 3 ovos <br />| 1 xícara de farinha de trigo <br />| 2 xícara de fubá <br />| 1 xícara de açúcar <br />| 1 xícara de leite <br />| 2 colheres (sopa) de manteiga ou margarina <br />| 1 colher de (sopa)de fermento <br />| meia xícara de farinha de casca de ovo <br /> <br />Modo de Preparo: <br />| Colocar o leite, os ovos, o açúcar e a manteiga para bater no liquidificador por 3 minutos.<br />| Adicionar a farinha de trigo e misturar no liquidificador por 2 minutos.<br />| adicionar o fubá e a farinha de casca de ovo e bater novamente por 3 minutos.<br />| adicionar uma colher de fermento e misturar manualmente na massa.<br />| Untar a assadeira com margarina e farinha de trigo.<br />| pré-aquecer o forno a 180 C° por 10 minutos.<br />| Levar o bolo ao forno por 40 minutos ou até assar completamente.<br />| Após esfriar desinforme e sirva.
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Bolofubamdl;