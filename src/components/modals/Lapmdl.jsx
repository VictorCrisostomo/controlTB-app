import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

const Lapmdl = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button" size="large">
        Ver endereço
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">LAP - Laboratório médico</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: Av. Cinquentenário, 1321 - Centro, Itabuna - BA, 45600-004        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/place/Lap-Medicina+Laboratorial/@-14.7960022,-39.2862859,15z/data=!4m9!1m2!2m1!1slap+laborat%C3%B3rio+itabuna!3m5!1s0x739aa585c6155c7:0x72f9e2fbd970b8b3!8m2!3d-14.7960022!4d-39.2775311!15sChhsYXAgbGFib3JhdMOzcmlvIGl0YWJ1bmGSAQttZWRpY2FsX2xhYuABAA">
            <button className="Button green">Abrir no mapa</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Lapmdl;