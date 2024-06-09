export default function ModalComponent({ data, isOpen, onConfirm, onCancel }) {
  return isOpen ? (
    <div className="fixed inset-0 z-50 bg-white/80 flex justify-center items-center p-7">
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <div className="bg-main-500 py-2 flex items-center justify-center">
          <h2 className="font-semibold text-xl">Verifikasi</h2>
        </div>
        <div className="p-10">
          <div className="text-black">
            <span>Deskripsi</span>
            <ul className="list-disc pl-5">
              <li>Nomor Pemesanan : {data.orderNo}</li>
              <li>Tanggal : {data.date}</li>
              <li>Plat Nomor : {data.plateNo}</li>
              <li>Lokasi Parkir : {data.location}</li>
              <li>Nomor Tempat Parkir : {data.parkNo}</li>
            </ul>
            <span className="font-semibold inline-block mt-4">
              Apakah data tersebut sudah sesuai?
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={onCancel}
              type="submit"
              className="mt-4 bg-[#27374D] text-white text-lg font-semibold w-28  py-1 rounded-md hover:bg-spotpark-gray hover:text-main-500"
            >
              Tidak
            </button>
            <button
              onClick={onConfirm}
              type="submit"
              className="mt-4 bg-[#27374D] text-white text-lg font-semibold w-28 py-1 rounded-md hover:bg-spotpark-gray hover:text-main-500"
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
