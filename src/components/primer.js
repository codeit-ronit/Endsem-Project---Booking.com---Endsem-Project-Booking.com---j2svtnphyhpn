import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Dropdown } from 'primereact/dropdown';
import {useState} from "react"

export default function TemplateDemo() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center  p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {/* {item.      <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.  </span> */}
      {/* )} */}
    </a>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Hot News",
      icon: "pi pi-star",
    },
    {
      label: "Categories",
      icon: "pi pi-search",
      items: [
        {
          label: "Politics",
          icon: "pi pi-flag-fill",
          
          template: itemRenderer,
        },
        {
          label: "Technology",
          icon: "pi pi-android",
          
          template: itemRenderer,
        },
        {
          label: "Business",
          icon: "pi pi-money-bill",
          
          template: itemRenderer,
        },
        {
          label: "Health",
          icon: "pi pi-heart-fill",
          
          template: itemRenderer,
        },
        {
          label: "Sports",
          icon: "pi pi-star-fill",
          
          template: itemRenderer,
        },
        {
          separator: true,
        },
      
      ],
    },
    {
      label: "World News",
      icon: "pi pi-globe",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-5">
      <InputText
        placeholder="Search"
        type="text"
        style={{ width: "30rem", padding:"1rem",borderRadius:"40px"}} // Set width to 12rem (192px)
      />

      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  const [selectedCity, setSelectedCity] = useState("")
  const cities = ["hyd", "mum"]

  return (
    <div className="card ">
      <Menubar
        style={{ padding: "1.5rem", borderRadius: "50px" }}
        model={items}
        start={start}
        end={end}
      />
      <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" />
    </div>
  );
}