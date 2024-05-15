import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalComponent({isOpen, onClose}) {

  return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={onClose}>close</button>
        <div>Deskripsi
        <br />Nomor Pemesanan: 
        <br />Tanggal: 
        <br />Plat Nomor: 
        <br />Lokasi Parkir:
        <br />Nomor Tempat Parkir: 
</div>

<button type="submit" className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-full" >
            Tidak
          </button>
<button type="submit" className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-full" >
            Ya
          </button>
  
      </Modal>
  );
}