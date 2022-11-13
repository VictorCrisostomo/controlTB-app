import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Lidimdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="large">
        Ver endereço
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">LIDI Laboratório de Itabuna</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: R. Firmino Alves, 268 - Centro, Itabuna - BA, 45600-908 | Fecha às 17:00 h
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/dir//LIDI-Laborat%C3%B3rio+de+Investiga%C3%A7%C3%A3o+e+Diagn%C3%B3sticos+de+Itabuna+-+R.+Firmino+Alves,+268+-+Centro,+Itabuna+-+BA,+45600-908/@-14.79565,-39.2941385,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x739aa5fea09e3a9:0xf1f7be6fa833ee4c!2m2!1d-39.2743979!2d-14.791901">
            <button className="Button green">Abrir no mapa</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Lidimdl;