import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Farinhamdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btnReceita" size="large">
        Ver receita
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitleReceita">Farinha de casca de Ovo</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
        Modo de preparo: <br/> 1 - tirar a película da parte de dentro das cascas e descartar;<br/> 2 - Higienizar as cascas; <br/> 3 - Deixar secando ao sol ou numa estufa; <br/> 4 - bater no liquidificador/processador ou pilão até virar pó;<br /> 5 - passar pela peneira caso fique grânulos;
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Farinhamdl;