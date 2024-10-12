"use client";
import { useState } from 'react';

import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";

export default function Page() {
    // State สำหรับเก็บราคาและคูปอง
    const [totalPrice, setTotalPrice] = useState(499); // ราคาตั้งต้น
    const [discountCode, setDiscountCode] = useState("");
    const [finalPrice, setFinalPrice] = useState(499); // ราคาหลังหักส่วนลด
    const [error, setError] = useState(""); // ข้อความแจ้งเตือน

    // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของ input คูปอง
    const handleCouponChange = (e) => {
        setDiscountCode(e.target.value);
    };

    // ฟังก์ชันตรวจสอบคูปองและคำนวณส่วนลด
    const applyDiscount = () => {
        const validCodePattern = /^shabu-[0-9]{5}ji$/;
        if (validCodePattern.test(discountCode)) {
            const discount = totalPrice * 0.1; // ลด 10%
            setFinalPrice(totalPrice - discount);
            setError(""); // ไม่มีข้อผิดพลาด
        } else {
            setError("รหัสคูปองไม่ถูกต้อง");
            setFinalPrice(totalPrice); // คืนค่าเดิมหากคูปองไม่ถูกต้อง
        }
    };

    return (
        <>
            <div as="nav" className="bg-white">
                <NevbarBack />
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-black">
                    ชำระเงิน
                </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className=" text- text-2xl font-bold leading-9 tracking-tight text-black">
                                ข้อมูลการจอง
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <h2 className=" text-1xl font-bold leading-9 tracking-tight text-gray-900">
                                        ราคา: ฿{totalPrice}</h2>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="number" className="text-1xl font-bold leading-9 tracking-tight text-gray-900">
                                                คูปองส่วนลด:
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <input
                                                id="number"
                                                name="number"
                                                type="text"
                                                required
                                                value={discountCode}
                                                onChange={handleCouponChange}
                                                autoComplete="tel"
                                                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <button
                                                type="button"
                                                onClick={applyDiscount}
                                                className="mt-2 rounded-md bg-blue-500 px-4 py-1.5 text-white font-semibold hover:bg-blue-600"
                                            >
                                                ใช้คูปอง
                                            </button>
                                            {error && <p className="text-red-500">{error}</p>}
                                        </div>
                                    </div>

                                    <h2 className="text-1xl font-bold leading-9 tracking-tight text-gray-900">
                                        ภาษี: (ยังไม่ได้คำนวณ)</h2>

                                    <h2 className="text-1xl font-bold leading-9 tracking-tight text-gray-900">
                                        ยอดชำระทั้งหมด: ฿{finalPrice}</h2>
                                </div>

                                <div>
                                    <h2 className="mt-8 text- text-2xl font-bold leading-9 tracking-tight text-gray-600">
                                        วิธีชำระเงิน</h2>
                                    <div>
                                        <input type="radio" id="option1" name="choice" value="option1" />
                                        <label htmlFor="option1" className="mt-1 text- text-1xl font-bold leading-9 tracking-tight text-gray-900 mx-4">โมบายแบงค์กิ้ง</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="option2" name="choice" value="option2" />
                                        <label htmlFor="option2" className="mt-1 text- text-1xl font-bold leading-9 tracking-tight text-gray-900 mx-4">บัตรเครดิต</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="option3" name="choice" value="option3" />
                                        <label htmlFor="option3" className="mt-1 text- text-1xl font-bold leading-9 tracking-tight text-gray-900 mx-4">QR code</label>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div >

                </div >

                <div>
                    <h2 className="mt-8 text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        หากต้องการจองโต๊ะหรือจองคิว</h2>
                    <h2 className="mt-1 text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        ลูกค้าต้องชำระเงินจำนวนเต็มเพื่อสงวนสิทธิ์หรือโต๊ะ </h2>
                    <h2 className="mt-1 text-center text-1xl font-bold leading-9 tracking-tight text-red-600">
                        หากไม่ชำระภายใน 20 นาที จะถือว่าการจองไม่สำเร็จ</h2>
                </div>
                <div className="flex justify-center mt-12">
                    <a href="/bill"
                        className="flex justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        ชำระเงิน
                    </a>
                </div>
                <Footer />
            </div>
        </>
    );
}