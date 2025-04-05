     "use client"
import { TextField } from "@mui/material";
import { useState } from "react";

const duration = [
    {id: "7", days:7},
    {id: "30", days:30},
    {id: "90", days:90}
]

export default function GetLoan(){
    const [clickedRate, setClickedRate] = useState(undefined);
    const [rate, setRate] = useState(0);
    const [paybackAmount, setpaybackAmount] = useState(undefined);
    const [loanDate, setLoanDate] = useState(0);

    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-6 lg:px-16 bg-gray-50">
            <div className="w-full h-130 md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md p-2 md:pb-6">
                <blockquote className="border-b border-gray-200 pb-3">
                    <span className=" text-center font-thin text-lg text-green-800">Get Instant loan from urgentCas$h</span>
                </blockquote>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-green-800">Enter Amount to borrow</label>
                        <TextField
                        id="amount"
                        variant="outlined"
                        type="number"
                        placeholder="loan amount N"
                        />
                        <div className="border-dashed border border-green-600 p-4 rounded-md">
                            <p className="text-green-800 text-sm mb-3">Choose Loan duration</p>
                            <ul className="grid grid-cols-3 gap-2">
                            </ul>
                            <div className="border-dashed border border-green-600 p-4 mb-3 rounded-md">
                                <p className="text-gray-800">Interest rate for 7 days</p>
                                <p className="text-4xl text-green-800">Rate</p>
                            </div>
                            <div className="flex flex-col gap-3 bg-gradient-to-b from-green-500 to-green-800 border-dashed border border-green-600 p-4 rounded-md mb-3">
                                <p className="text-green-100">Pay back Amount</p>
                                <p className="text-4xl text-white">Payback</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <button type="submit" className="p-2 rounded-md bg-green-600 text-white text-xl uppercase">Get Loan</button>

                            </div>
                        </div>
                    </div>
                </form>

            </div>

        </main>
    )
}