import { useState } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { ProgressBar } from 'primereact/progressbar';
import { InputText }from'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Menu } from 'primereact/menu';
import { Dialog } from 'primereact/dialog';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

import './App.css';

interface City {
  name: string;
  code: string;
}

function App() {
  const [visible, setVisible] = useState(false);

  const items = [
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
  ];

  
  
  const [selectedCities, setSelectedCities] = useState<City | null>(null);
  const cities: City[] = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

  return (
    <>
    <div className="d-flex justify-content-center p-4">
      <h2 className="m-0">Bootstrap Demo</h2>
    </div>
    <div className="d-flex flex-column">
      <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
        <span className="d-block mb-2">Buttons</span>
        <div className="d-flex flex-shrink-0 w-100 gap-3 flex-wrap">
          <Button label="Show" />
          <Button label="Show" severity="success" />
          <Button label="Show" severity="info" />
          <Button label="Show" severity="warning" />
          <Button label="Show" severity="danger" raised />
          <Button label="Show" disabled />
        </div>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
        <span className="d-block mb-2">ProgressBar</span>
        <ProgressBar value={50}></ProgressBar>
      </div>

      <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
        <span className="d-block mb-2">Panel</span>
        <Panel header="Header" toggleable>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
        <span className="d-block mb-2">Forms</span>
        <InputText placeholder="Text input" className="mb-3" />
        <InputTextarea rows={5} cols={30} placeholder="InputTextarea" />
        <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
              placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />        
      </div>
      <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
        <span className="d-block mb-2">Dialog</span>
        <Button label="Show" onClick={() => setVisible(true)} />
      </div>
    </div>
    <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
      <span className="d-block mb-2">Menu</span>
      <Menu model={items} />
    </div>

    <Dialog
      visible={visible}
      modal
      header="Header"
      style={{ width: '80vw' }}
      onHide={() => setVisible(false)}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </Dialog>
  </>
  );
}

export default App;
