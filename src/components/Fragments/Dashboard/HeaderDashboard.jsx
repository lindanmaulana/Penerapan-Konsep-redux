import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
const HeaderDashboard = () => {
  return (
    <div className="w-full py-3 bg-[#5867DD] flex fixed top-0">
      <div className="flex self-center justify-center w-full mx-5">
        <Link
          to={"#"}
          className="self-center text[24px] font-bold shadow shadow-[#5867DD] text-[#FFFFFF] px-4 py-1 rounded"
        >
          Dashboard
        </Link>
        <div className="flex self-center gap-x-2">
          <h3 className="self-center text-[14px] text-light text-[#FFFFFF]">
            Wellcome <span className="font-semibold">Lindan</span>
          </h3>
          <img
            src="../../public/dashboard/dashboardAdmin.svg"
            alt="admin"
            className="rounded-full w-[40px]"
          />
          <button className="text-[#FFFFFF]">
            <BsChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;

{
  /* <div className="w-full h-[55px] bg-[#FFFFFF] flex justify-end border-b-[2px] fixed top-0 right-0">
      <div className="self-center w-[70%] flex justify-between mx-5">
        <Link
          to={"#"}
          className="self-center text[24px] font-bold shadow shadow-[#5867DD] text-[#5867DD] px-4 py-1 rounded"
        >
          Dashboard
        </Link>
        <div className="flex self-center gap-x-2 top-2 right-6">
          <h3 className="self-center text-[14px] text-light">
            Wellcome <span className="font-semibold">{username}</span>
          </h3>
          <img
            src="../../public/dashboard/dashboardAdmin.svg"
            alt="admin"
            className="rounded-full w-[40px]"
          />
          <button>
            <BsChevronDown />
          </button>
        </div>
      </div>
    </div> */
}
