import Image from "next/image";
import {
  IoBrowsersOutline,
  IoLogoReact,
  IoCalculatorOutline,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={24} />,
    title: "Dashboard",
    subtitle: "Panel administrativo",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={24} />,
    title: "Counter",
    subtitle: "Contador",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"></IoLogoReact>
          <span>XDash</span>
          <span className="text-green-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm my-2">
          Dashboard de prueba con NextJs
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 text-sm mb-4">Bienvenido de vuelta</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Jorshua Hernandez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.title}
            path={menuItem.path}
            icon={menuItem.icon}
            title={menuItem.title}
            subTitle={menuItem.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
