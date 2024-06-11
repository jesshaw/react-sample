import { Menubar } from "primereact/menubar";
import { Outlet } from "react-router-dom";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {BreadCrumb} from "primereact/breadcrumb"
import { Button } from "primereact/button";

const LayoutLxm = () => {
    const items = [
        {
            label: 'DASHBOARDS',
            items:[
                { label: 'E-Commerce', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = '/' } },
                { label: 'Banking', icon: 'pi pi-fw pi-image', command: () => { window.location.hash = '/users' } },
            ]
        },
        {
            label: 'APPS',
            items:[
                { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = '/' } },
                { label: 'About', icon: 'pi pi-fw pi-info', command: () => { window.location.hash = '/users' } },
                { label: 'Contact', icon: 'pi pi-fw pi-envelope', command: () => { window.location.hash = '/settings' } },                
                { label: 'Mail', icon: 'pi pi-fw pi-envelop',
                    items:[
                        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = '/' } },
                        { label: 'About', icon: 'pi pi-fw pi-info', command: () => { window.location.hash = '/users' } }
                    ]
                }         
            ]
        }
        ];

        // const items = [
        //     {
        //         label: 'File',
        //         items: [
        //             {
        //                 label: 'New',
        //                 icon: 'pi pi-fw pi-plus',
        //                 items: [
        //                     {
        //                         label: 'Project',
        //                         icon: 'pi pi-fw pi-folder-open',
        //                         items: [
        //                             {
        //                                 label: 'Project 1',
        //                                 icon: 'pi pi-fw pi-file'
        //                             },
        //                             {
        //                                 label: 'Project 2',
        //                                 icon: 'pi pi-fw pi-file'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         label: 'Other',
        //                         icon: 'pi pi-fw pi-plus'
        //                     }
        //                 ]
        //             },
        //             {
        //                 label: 'Open',
        //                 icon: 'pi pi-fw pi-external-link'
        //             },
        //             {
        //                 label: 'Quit',
        //                 icon: 'pi pi-fw pi-times'
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Edit',
        //         items: [
        //             {
        //                 label: 'Undo',
        //                 icon: 'pi pi-fw pi-undo'
        //             },
        //             {
        //                 label: 'Redo',
        //                 icon: 'pi pi-fw pi-repeat'
        //             }
        //         ]
        //     }
        // ];
    // const breadItems = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }];
    const breadItems = [{ label: 'Electronics' }];
    const home = { icon: 'pi pi-home', url: '#' }

    const ptBreadCrumb ={
        root: 'bg-red-500'
    }

    return (
        <div className='layout-contianer'>
            <div className='layout-sidebar'>
                <div className="sidebar-header">logo</div>
                <div className="layout-menu-container">
                    <Menu className='w-full border-0' model={items} />
                </div>           
            </div>
            <div className='layout-content-wrapper'>
                <div className="layout-topbar">
                    <div className="topbar-start">
                        <button type='button' className="topbar-menubutton p-link p-trigger">
                            <i className='pi pi-bars'/>
                        </button>
                        <div className="topbar-breadcrumb">
                            {/* <BreadCrumb model={breadItems} home={home} pt={{ root: { className: 'bg-opacity-0'} }}/>                             */}
                            {/* <BreadCrumb model={breadItems} home={home}  className= ' border-0 bg-opacity-0'/> */}
                            <BreadCrumb model={breadItems} home={home}/>
                        </div>
                    </div>
                    <div className="topbar-end">
                        <div className="topbar-menu">
                            <div className="topbar-search">
                                <i className="pi pi-search"></i>
                                <InputText  placeholder="Search" className=" h-8 pl-6"/>
                            </div>
                            <Button icon="pi pi-cog" rounded text severity="secondary" aria-label="Bookmark" />
                            {/* <button className="layout-config-button config-link" type="button"><i className="pi pi-cog"></i></button> */}
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                        </div>
                    </div>
                </div>
                <div className='content-breadcrumb'>
                    <BreadCrumb model={breadItems} home={home} />
                </div>
                <div className='layout-content'>                
                    <Outlet />
                </div>
            </div>
            <button className="layout-config-button config-link" type="button"><i className="pi pi-cog"></i></button>
            <div className='layout-mask'></div>
        </div>
    );
}

export default LayoutLxm;