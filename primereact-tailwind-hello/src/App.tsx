import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

function Bug() {
  return (
    <>
      <InputText invalid placeholder="Invalid" className="w-full lg:w-40" />
      <Button>dd</Button>
    </>
  );
}
export default Bug;
