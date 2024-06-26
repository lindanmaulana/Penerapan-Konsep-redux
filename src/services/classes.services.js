import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

export const getDataClasses = async () => {
  try {
    const res = await axios.get(`${baseUrl}/classes`);

    if (!res.data) throw new Error("Gagal mengambil data");

    return res.data.payload.datas;
  } catch (err) {
    console.log("Gagal mengambil data")
  }
};
