import { Button } from "primereact/button";
import { InputText, InputTextContext } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { Panel } from "primereact/panel";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";

import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";

import "./AppUnstyled.css";
import { classNames } from "primereact/utils";

// 自定义样式
// https://github.com/primefaces/primereact/blob/master/components/lib/passthrough/tailwind/index.js

function AppUnstyled() {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: Tailwind,
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
      <div className="flex flex-wrap gap-2">
        <InputText
          invalid
          pt={{
            root: ({ context }: { context: any }) => ({
              className: classNames({
                "border-red-500 focus:border-red-500":
                  context.invalid === undefined,
              }),
            }),
          }}
        />
        <Button>dd</Button>
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText v-model="value1" placeholder="Search" />
        </IconField>
        <Panel
          header="Custom Header"
          pt={{
            header: {
              className:
                "p-5 flex items-center justify-between border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-lg rounded-tr-lg dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80",
            },
          }}
        >
          <p>
            Second panel overrides the header section with custom a custom
            style.
          </p>
        </Panel>
      </div>
    </PrimeReactProvider>
  );
}
export default AppUnstyled;
