import { IoQrCodeOutline } from "react-icons/io5";
import ListBar from "./ListBar";
import MenuBar from "./MenuBar";

const MenuDashboard = () => {
  return (
    <div className="w-[300px] h-[98%] rounded-3xl my-auto bg-[#5867DD] fixed left-2 top-2 z-50">
      <div className="h-full px-4 flex flex-col justify-center items-center gap-y-4">
        {/* HEADER */}
        <div className="w-full flex justify-center items-center">
          <img src="../../public/dashboard/dashboardMenu.svg" alt="dashboard" />
        </div>

        {/* HERO BAR */}
        <div className="w-full justify-start border-b border-slate-400 pb-2 group">
          <button className="flex gap-x-3 w-full py-2 rounded-xl my-auto bg-[#374BAE] scale-105 px-3">
            <IoQrCodeOutline className="self-center text-white scale-125" />
            <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
          </button>
        </div>

        {/* LIST BAR */}
        <ListBar titleList="REPORTS">
            <MenuBar src="dashboard/reportsPending.svg" titleMenu="Pending Reports"/>
            <MenuBar src="dashboard/reportsSubmitted.svg" titleMenu="Submitted Reports"/>
        </ListBar>

        <ListBar titleList="CLIENTS">
            <MenuBar src="dashboard/clientsView.svg" titleMenu="View / Add Groups"/>
        </ListBar>

        <ListBar titleList="DATASET">
            <MenuBar src="dashboard/datasetEntity.svg" titleMenu="1. Entity Types"/>
            <MenuBar src="dashboard/datasetPackages.svg" titleMenu="2. Packages"/>
            <MenuBar src="dashboard/datasetChange.svg" titleMenu="Change Password"/>
            <MenuBar src="dashboard/datasetSign.svg" titleMenu="Sign Out"/>
        </ListBar>
      </div>
    </div>
  );
};

export default MenuDashboard;
