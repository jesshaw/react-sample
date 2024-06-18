import { PrimeReactProvider } from "primereact/api";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";

// import "primereact/resources/themes/viva-dark/theme.css";
// import "primereact/resources/themes/viva-light/theme.css";

// import "primereact/resources/themes/tailwind-light/theme.css";
import "./AppStyled.css";

import "primeicons/primeicons.css";

function AppStyled() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <div className="flex flex-wrap gap-4">
        <InputText invalid placeholder="Invalid" className="w-full lg:w-40" />
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText v-model="value1" placeholder="Search" />
        </IconField>
      </div>
    </PrimeReactProvider>
  );
}
export default AppStyled;
