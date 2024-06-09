"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import ModalComponent from "@/components/Modal";
import Cookies from "js-cookie";
import { ref, onValue, push, set, get } from "firebase/database";
import { database } from "../firebase";
import { useRouter } from "next/navigation";
export default function Order() {
  const router = useRouter();
  const boxes = Array.from({ length: 10 }, (_, index) => index + 1);
  const [objectDetected, setObjectDetected] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [reservedBoxes, setReservedBoxes] = useState([]); // state untuk melacak kotak yang sudah dipesan

  const handleBoxClick = (box) => {
    if (reservedBoxes.includes(box)) {
      return; // Jika kotak sudah dipesan, keluar dari fungsi
    }
    setSelectedBox(box);
    setData((prevData) => ({
      ...prevData,
      parkNo: `A ${box}`,
    }));
  };

  const [data, setData] = useState({
    orderNo: "",
    date: "",
    plateNo: "",
    location: "",
    parkNo: "",
  });

  const handleConfirm = () => {
    // Menyimpan data ke Firebase
    const newOrderRef = push(ref(database, "Booked"));
    set(newOrderRef, data)
      .then(() => {
        console.log("Data berhasil disimpan ke Firebase");

        setReservedBoxes([...reservedBoxes, selectedBox]); // Tambahkan kotak yang baru dipesan ke reservedBoxes

        setData((prevData) => ({
          ...prevData,
          orderNo: (parseInt(prevData.orderNo, 10) + 1)
            .toString()
            .padStart(3, "0"),
        }));
        setIsOpen(false); // Tutup modal setelah konfirmasi
        router.push("/complete");
      })
      .catch((error) => {
        console.error("Error menyimpan data ke Firebase:", error);
      });
  };

  useEffect(() => {
    // Mendapatkan nomor pemesanan terakhir dari Firebase
    const ordersRef = ref(database, "Booked");
    get(ordersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const orders = snapshot.val();
          const orderNumbers = Object.values(orders).map((order) =>
            parseInt(order.orderNo, 10)
          );
          const maxOrderNumber = Math.max(...orderNumbers);
          setData((prevData) => ({
            ...prevData,
            orderNo: (maxOrderNumber + 1).toString().padStart(3, "0"),
          }));

          const reserved = Object.values(orders).map((order) =>
            parseInt(order.parkNo.split(" ")[1], 10)
          );
          setReservedBoxes(reserved); // Perbarui kotak yang sudah dipesan
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error reading data from Firebase:", error);
      });

    const objectDetectedRef = ref(database, "Object/ObjectDetected");
    const unsubscribeObjectDetected = onValue(objectDetectedRef, (snapshot) => {
      const data = snapshot.val();
      setObjectDetected(data);
    });

    return () => {
      unsubscribeObjectDetected();
    };
  }, []);

  useEffect(() => {
    setData({
      orderNo: "001",
      date: new Date().toISOString().split("T")[0],
      plateNo: Cookies.get("plateNo").toString(),
      location: "B2",
      parkNo: "",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <ModalComponent
        data={data}
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={() => setIsOpen(false)}
      />
      <main className="flex flex-col items-center w-full p-4 ">
        <div className="mt-4 flex ">
          <div className="grid grid-cols-2 gap-4 gap-x-6 ">
            {boxes.map((box, index) => (
              <div
                key={box}
                className={`p-8 px-16 text-black border-black shadow-md cursor-pointer border-t-2 border-b-2 hover:bg-yellow-400 
                  ${
                    objectDetected && reservedBoxes.includes(box) && index === 0
                      ? "bg-spotpark-red"
                      : reservedBoxes.includes(box)
                      ? "bg-yellow-400"
                      : selectedBox === box
                      ? "bg-yellow-400"
                      : "bg-white"
                  } 
                  ${
                    objectDetected && reservedBoxes.includes(box)
                      ? "bg-spotpark-red"
                      : "bg-white"
                  }
                  ${index % 2 === 0 ? "border-r-2" : "border-l-2"}`}
                onClick={() => handleBoxClick(box)}
              >
                A {box}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full my-9">
          <button
            type="submit"
            className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-md font-semibold hover:bg-spotpark-gray hover:text-main-500"
            onClick={() => setIsOpen(true)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
