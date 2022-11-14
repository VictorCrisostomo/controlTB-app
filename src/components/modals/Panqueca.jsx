import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Panquecamdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btnReceita" size="large">
        Ver receita
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitleReceita">Panqueca de aveia e banana</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            INGREDIENTES:<br/>| 1 ovo inteiro<br/>| 1 banana inteira amassada<br/>| 1 colher de chá de canela em pó<br/>| 1 colher de café de fermento em pó<br/>| 1 colher de sopa de aveia<br/><br/>Modo de Preparo:<br/>1 - Em um recipiente, junte a banana amassada, o ovo batido e misture;<br/>2 - Depois acrescente a aveia, a canela e o fermento em pó;<br/>3 - Misture bem todos esses ingredientes até ficar uniforme;<br/>4 - Aqueça uma frigideira no fogo e pincele com azeite ou margarina;<br/>5 - Acrescente a massa na frigideira, não precisa espalhar com a colher;<br/>6 - Tampe e aguarde uns 5 minutos, quando bolhas começarem a surgir na superfície da massa, vire a panqueca;<br/>7 - Deixe mais 5 minutos do outro lado e já pode servir!
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Panquecamdl;