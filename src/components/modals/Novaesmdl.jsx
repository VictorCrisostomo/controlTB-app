import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Novaesmdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="large">
        Ver endereço
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Hospital Manoel Novaes</Dialog.Title>
        <Dialog.Description className="DialogDescription">
        Endereço: R. Antônio Muniz, 235 - Centro, Itabuna - BA, 45600-625 Aberto 24 horas
        </Dialog.Description>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/dir/-15.6747304,-38.9554634/Hospital+Manoel+Novaes/@-15.2274186,-39.5089314,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7463ba0bba4c49b:0xe7c1a5d9cd52c280!2m2!1d-39.2708981!2d-14.7811587">
            <button className="Button green">Save changes</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Novaesmdl;