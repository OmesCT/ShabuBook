"use client";
import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";
import Link from "next/link"; // import Link
import { useState } from 'react'; // เพิ่มบรรทัดนี้

export default function Page() {
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    return (
        <>
            <div as="nav" className="bg-white">
                <NevbarBack />
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
                            จองคิว
                        </h2>
                    </div>

                    {/* ... Your existing code ... */}

                    <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-600">
                                        ชื่อ-นามสกุล
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            onChange={(e) => setFullname(e.target.value)} // Update state
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="number" className="block text-1xl font-medium leading-6 text-gray-900">
                                        เบอร์โทรศัพท์
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="number"
                                            name="number"
                                            type="tel"
                                            required
                                            onChange={(e) => setPhone(e.target.value)} // Update state
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-1xl font-medium leading-6 text-gray-900">
                                        ว/ด/ป
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="date"
                                            name="date"
                                            type="date"
                                            required
                                            onChange={(e) => setDate(e.target.value)} // Update state
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="time" className="block text-1xl font-medium leading-6 text-gray-900">
                                        เวลา
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="time"
                                            name="time"
                                            required
                                            onChange={(e) => setTime(e.target.value)} // Update state
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {Array.from({ length: 12 }, (_, i) => {
                                                const hour = (i * 2) % 24; // เวลา 0-23
                                                const formattedHour = hour < 10 ? `0${hour}` : hour; // เพิ่ม 0 ข้างหน้า
                                                return (
                                                    <option key={i} value={`${formattedHour}:00`}>
                                                        {formattedHour}:00
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-center mt-12">
                            <Link
                                href={`/payment?fullname=${encodeURIComponent(fullname)}&phone=${encodeURIComponent(phone)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`}
                                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                คลิก! ชำระเงิน
                            </Link>

                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
  
}
