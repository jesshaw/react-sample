import { Button } from "primereact/button";


function LxmButton() {
    return (
      <div className="card flex flex-wrap justify-content-center gap-3">
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
      </div>
    );
  }
  
  export default LxmButton;