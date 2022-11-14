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
        <Dialog.Title className="DialogTitle">Clínica-Escola de Fisioterapia da Unime Itabuna</Dialog.Title>
        <hr/>
        <Dialog.Description className="DialogDescription">
            | Horário: De segunda a sexta-feira, das 8h às 12h e das 13h às 17h <br/>| Local: Campus I da Unime Itabuna, que fica na Avenida José Soares Pinheiro, 1600, bairro Lomanto Júnior<br/>| Telefone para agendamento: (73) 3215-1704<br/>| Custo: Gratuito
        </Dialog.Description>
        <div className='FooterBtn' style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
           <a href="https://www.google.com/maps/place/@-14.8036413,-39.2920313,17z/data=!3m1!4b1!4m5!3m4!1s0x443ef2356fd569f:0xda4bbddfb42deaed!8m2!3d-14.8036413!4d-39.2920313">
            <button className="Button green">Abrir no mapa</button>
            </a> 
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Lapmdl;