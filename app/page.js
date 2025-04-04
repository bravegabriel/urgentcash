import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-green-800 h-[500px] flex items-center justify-start p-6 pl-35">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Increasing Access to <br />   Higher Education
          </h1>
          <p className="text-white mt-4 font-semibold">
            More than a financial aid program, the Student Loan initiative <br />
            set up by the Federal Government of Nigeria is a beacon of hope <br />
            for Nigerian students pursuing higher education.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-700 text-black font-bold px-10 py-4 rounded-4xl hover:bg-green-700 transition">
              APPLY NOW
            </button>
            <button className="bg-white text-black font-bold  px-9 py-4 rounded-4xl border border-green-600 hover:bg-gray-100 transition">
              LOGIN
            </button>
          </div>
        </div>
      </div>

      
        <h1 className="text-5xl font-semibold text-center mt-9">Simple steps to <br /> secure Urgentcash loans</h1>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-4 p-6">
          <div className="flex flex-col items-center">
            <Image src="/urgentcash-5.webp" width={70} height={70} alt="urgentcash-img" className="w-20 h-20" />
            <h1 className="text-lg font-semibold mt-2 text-gray-900">Step 1</h1>
            <p className="text-gray-800 mt-1">
              Register on the Student Loan Application Platform by clicking the “APPLY NOW” button to get started.
            </p>
           </div>

            <div className="flex flex-col items-center">
              <Image src="/urgentcash-5.webp" width={70} height={70} alt="urgentcash-img" className="w-20 h-20" />
               <h1 className="text-lg font-semibold mt-2 text-gray-900">Step 2</h1>
               <p className="text-gray-800 mt-1">
                 Click on the "Request for Student Loan" button, complete the loan application steps, and submit.
               </p>
             </div>

   
           <div className="flex flex-col items-center">
               <Image src="/urgentcash-6.png" width={70} height={70} alt="urgentcash-img" className="w-20 h-20" />
               <h1 className="text-lg font-semibold mt-2 text-gray-900">Step 3</h1>
               <p className="text-gray-800 mt-1">
                  Your application will be reviewed. After successful verification, payments will be made to your institution 
                  for institutional charges, while the upkeep loan will be paid to the bank account you have provided in your profile.
              </p>
             </div>
          </div>


          <h1 className="text-center font-semibold text-4xl mb-3">Let move forword together</h1>
          <p className="text-center text-gray-500 text-2xl mb-3">The more you use Urgentcash, the better your offers become.< br/> Get lower rates and longer repayment terms, when you take < br/>Urgentcash loan and repay it on time.</p>
        
          
     


    </main>
  );
}

