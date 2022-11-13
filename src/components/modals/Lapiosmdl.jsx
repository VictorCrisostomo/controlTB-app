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
        <Dialog.Title className="DialogTitle">LAP Medicina Laboratorial</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            Endereço: Av. Osvaldo Cruz, 628 - Cidade Nova, Ilhéus - BA, 45652-130 | Fecha 17:00 h ⋅ Abre às 07:00 h
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/place/Lap+Medicina+Laboratorial/@-14.7860655,-39.045217,15z/data=!4m9!1m2!2m1!1slap+laborat%C3%B3rio+ilh%C3%A9us!3m5!1s0x7390a59eecbd7e7:0x6182709d7b7a6400!8m2!3d-14.7860267!4d-39.0364552!15sChhsYXAgbGFib3JhdMOzcmlvIGlsaMOpdXNaGiIYbGFwIGxhYm9yYXTDs3JpbyBpbGjDqXVzkgEKbGFib3JhdG9yeZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOeGVUbDJSV2xuUlJBQuABAA">
            <button className="Button green">Abrir no mapa</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Lapmdl;