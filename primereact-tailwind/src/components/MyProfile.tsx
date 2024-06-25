import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../hooks/useTheme";
import { Sidebar } from "primereact/sidebar";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "primereact/button";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Badge } from "primereact/badge";

const MyProfile = ({ visible = false }: { visible?: boolean }) => {
  const [profileVisible, setProfileVisible] = useState(visible);

  return (
    <div>
      <Button
        rounded
        text
        className="p-0"
        onClick={() => setProfileVisible(true)}
      >
        <img
          alt="avater"
          src="/images/avatar/amyelsner.png"
          className="h-8"
        ></img>
      </Button>

      <Sidebar
        className="w-96"
        position="right"
        visible={profileVisible}
        onHide={() => setProfileVisible(false)}
      >
        <div className="my-profile">
          <div>
            <span className="mb-2 font-semibold">Welcome</span>
            <span className="text-lxm-text-secondary mb-5 font-medium">
              Mary Shelley
            </span>
            <ul className="m-0 list-none p-0">
              <li>
                <a className="">
                  <span>
                    <i className="pi pi-user text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Profile</span>
                    <p className="text-color-secondary m-0">
                      Lorem ipsum date visale
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a className="surface-border align-items-center border-1 surface-border border-round hover:surface-hover transition-duration-150 mb-3 flex cursor-pointer p-3 transition-colors">
                  <span>
                    <i className="pi pi-money-bill text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Billing</span>
                    <p className="text-color-secondary m-0">
                      Amet mimin mıollit
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a className="surface-border align-items-center border-1 surface-border border-round hover:surface-hover transition-duration-150 mb-3 flex cursor-pointer p-3 transition-colors">
                  <span>
                    <i className="pi pi-cog text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Settings</span>
                    <p className="text-color-secondary m-0">
                      Exercitation veniam
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a className="surface-border align-items-center border-1 surface-border border-round hover:surface-hover transition-duration-150 mb-3 flex cursor-pointer p-3 transition-colors">
                  <span>
                    <i className="pi pi-power-off text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Sign Out</span>
                    <p className="text-color-secondary m-0">
                      Sed ut perspiciatis
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <span className="mb-2 font-semibold">Notifications</span>
            <span className="text-color-secondary mb-5 font-medium">
              You have 3 notifications
            </span>
            <ul className="m-0 list-none p-0">
              <li>
                <a>
                  <span>
                    <i className="pi pi-comment text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">
                      Your post has new comments
                    </span>
                    <p className="text-color-secondary m-0">5 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <i className="pi pi-trash text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">
                      Your post has been deleted
                    </span>
                    <p className="text-color-secondary m-0">15min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <i className="pi pi-folder text-primary text-xl"></i>
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">
                      Post has been updated
                    </span>
                    <p className="text-color-secondary m-0">3h ago</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <span className="mb-2 font-semibold">Messages</span>
            <span className="text-color-secondary mb-5 font-medium">
              You have new messages
            </span>
            <ul className="m-0 list-none p-0">
              <li>
                <a className="surface-border align-items-center border-1 surface-border border-round hover:surface-hover transition-duration-150 mb-3 flex cursor-pointer p-3 transition-colors">
                  <span>
                    <img
                      src="/images/avatar/avatar-m-8.png"
                      alt="Avatar"
                      className="h-8 w-8"
                    />
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">James Robinson</span>
                    <p className="text-color-secondary m-0">10 min ago</p>
                  </div>
                  <Badge value={3} className="ml-auto" />
                </a>
              </li>
              <li>
                <a className="surface-border align-items-center border-1 surface-border border-round hover:surface-hover transition-duration-150 mb-3 flex cursor-pointer p-3 transition-colors">
                  <span>
                    <img
                      src="/images/avatar/avatar-f-8.png"
                      alt="Avatar"
                      className="h-8 w-8"
                    />
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Mary Watson</span>
                    <p className="text-color-secondary m-0">15min ago</p>
                  </div>
                  <Badge value={1} className="ml-auto" />
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <img
                      src="/images/avatar/avatar-f-4.png"
                      alt="Avatar"
                      className="h-8 w-8"
                    />
                  </span>
                  <div className="ml-3">
                    <span className="mb-2 font-semibold">Aisha Webb</span>
                    <p className="text-color-secondary m-0">3h ago</p>
                  </div>
                  <Badge value={2} className="ml-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default MyProfile;
