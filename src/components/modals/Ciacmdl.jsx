import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Ciacmdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="large">
        Ver endereço
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">CIAC Analises Clinicas</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: R. Rodolfo Viêira, 61 - Centro, Ilhéus - BA, 45653-290
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/place/CIAC+Analises+Clinicas/@-14.7982902,-39.0341883,17z/data=!3m1!4b1!4m5!3m4!1s0x7390a60a9578d5f:0xf6d5c08a27daf06b!8m2!3d-14.7982902!4d-39.0341883">
            <button className="Button green">Abrir no mapa</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Ciacmdl;