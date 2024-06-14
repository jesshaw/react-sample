import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ButtonGroup } from "primereact/buttongroup";
import { SplitButton } from "primereact/splitbutton";
import { useState } from "react";

function LxmButton() {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {},
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {},
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {},
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {},
    },
  ];
  const save = () => {};

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
      <div className="grid gap-4">
        <Card title="Default">
          <div className="flex flex-wrap gap-2">
            <Button label="Submit" />
            <Button disabled label="Disabled" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-button font-bold"
            >
              Link
            </a>
          </div>
        </Card>
        <Card title="Severities">
          <div className="flex flex-wrap gap-2">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
          </div>
        </Card>
        <Card title="Text">
          <div className="flex flex-wrap gap-2">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
          </div>
        </Card>
        <Card title="outlined">
          <div className="flex flex-wrap gap-2">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warning" severity="warning" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
          </div>
        </Card>
        <Card title="Button Group">
          <div className="flex flex-wrap gap-2">
            <ButtonGroup>
              <Button label="Save" icon="pi pi-check" />
              <Button label="Delete" icon="pi pi-trash" />
              <Button label="Cancel" icon="pi pi-times" />
            </ButtonGroup>
          </div>
        </Card>
        <Card title="SplitButton">
          <div className="flex flex-wrap gap-2">
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="secondary"
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="success"
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="info"
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="warning"
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="danger"
            />
            <SplitButton
              label="Save"
              icon="pi pi-plus"
              onClick={save}
              model={items}
              severity="contrast"
            />
          </div>
        </Card>
        <Card title="Template">
          <div className="flex flex-wrap gap-2">
            <Button>
              <img
                alt="logo"
                src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
                className="h-8"
              ></img>
            </Button>
            <Button>
              <i className="pi pi-google" />
              <span className="align-items-center flex px-3 py-2 text-white">
                Google
              </span>
            </Button>
            <Button>
              <i className="pi pi-twitter" />
              <span className="align-items-center flex px-3 py-2 text-white">
                Twitter
              </span>
            </Button>
          </div>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card title="Icons">
          <div className="flex flex-wrap gap-2">
            <Button icon="pi pi-star-fill" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
          </div>
        </Card>
        <Card title="Raised">
          <div className="flex flex-wrap gap-2">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
          </div>
        </Card>
        <Card title="Rounded">
          <div className="flex flex-wrap gap-2">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
          </div>
        </Card>
        <Card title="Rounded Icons">
          <div className="flex flex-wrap gap-2">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button
              icon="pi pi-bookmark"
              rounded
              severity="secondary"
              aria-label="Bookmark"
            />
            <Button
              icon="pi pi-search"
              rounded
              severity="success"
              aria-label="Search"
            />
            <Button
              icon="pi pi-user"
              rounded
              severity="info"
              aria-label="User"
            />
            <Button
              icon="pi pi-bell"
              rounded
              severity="warning"
              aria-label="Notification"
            />
            <Button
              icon="pi pi-heart"
              rounded
              severity="help"
              aria-label="Favorite"
            />
            <Button
              icon="pi pi-times"
              rounded
              severity="danger"
              aria-label="Cancel"
            />
          </div>
        </Card>
        <Card title="Rounded Text">
          <div className="flex flex-wrap gap-2">
            <Button icon="pi pi-check" rounded text aria-label="Filter" />
            <Button
              icon="pi pi-bookmark"
              rounded
              text
              severity="secondary"
              aria-label="Bookmark"
            />
            <Button
              icon="pi pi-search"
              rounded
              text
              severity="success"
              aria-label="Search"
            />
            <Button
              icon="pi pi-user"
              rounded
              text
              severity="info"
              aria-label="User"
            />
            <Button
              icon="pi pi-bell"
              rounded
              text
              severity="warning"
              aria-label="Notification"
            />
            <Button
              icon="pi pi-heart"
              rounded
              text
              severity="help"
              aria-label="Favorite"
            />
            <Button
              icon="pi pi-times"
              rounded
              text
              severity="danger"
              aria-label="Cancel"
            />
          </div>
        </Card>
        <Card title="Rounded Outlined">
          <div className="flex flex-wrap gap-2">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button
              icon="pi pi-bookmark"
              rounded
              outlined
              severity="secondary"
              aria-label="Bookmark"
            />
            <Button
              icon="pi pi-search"
              rounded
              outlined
              severity="success"
              aria-label="Search"
            />
            <Button
              icon="pi pi-user"
              rounded
              outlined
              severity="info"
              aria-label="User"
            />
            <Button
              icon="pi pi-bell"
              rounded
              outlined
              severity="warning"
              aria-label="Notification"
            />
            <Button
              icon="pi pi-heart"
              rounded
              outlined
              severity="help"
              aria-label="Favorite"
            />
            <Button
              icon="pi pi-times"
              rounded
              outlined
              severity="danger"
              aria-label="Cancel"
            />
          </div>
        </Card>
        <Card title="Loading">
          <div className="flex flex-wrap gap-2">
            <Button
              label="Search"
              icon="pi pi-search"
              loading={loading}
              onClick={load}
            />
            <Button
              icon="pi pi-search"
              rounded
              aria-label="Search"
              loading={loading}
              onClick={load}
            />
            <Button label="Search" loading={loading} onClick={load} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LxmButton;
