import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { OddOrEvenApi } from '../services/DataServices'

export default function OddOrEvenComponent() {
  const [num1, getNum] = useState("");
  let [output, getOutput] = useState("The number [userinput] is Odd/Even");
  const getResult = async () => {
    if (num1 === "") {
      getOutput("Please Enter Something");
    } else if (num1.toLowerCase() === "something") {
      getOutput("Don't actually put something... idiot")
    } else {
      const response = await OddOrEvenApi(num1);
      getOutput(response)
    }

  }

  return (
    <div className="backgroundOddorEven">
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <button
              className="hidden lg:block rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p className="text-black font-[Rubik-Bold] text-[3.125rem]">Back</p>
              </Link>
            </button>
          </div>
          <div className="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
            <p className="font-[Rubik-Bold] text-[3.125rem] lg:text-[5rem] text-white">Odd Or Even</p>
          </div>
        </div>
        <div>

        </div>
        <div className="flex justify-center px-[1.9375rem]">
          <div
            className="bg-white w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] flex justify-center items-center">
            <p className="font-[Rubik-Bold] text-[1.875rem] lg:text-[4.375rem] text-center p-5 lg:p-20">{output}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[1.875rem] lg:text-[3.125rem] font-[Rubik-Bold] mt-[1.25rem] lg:mt-[5.25rem]">Enter a NUMBER</p>
        </div>

        <div className="flex justify-center px-[2.125rem] ">
          <input
            className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full lg:w-[37.0625rem]"
            type="text" placeholder="Number" onChange={(e) => getNum(e.target.value)} value={num1}/>
        </div>

        <div className="flex justify-center">
          <button type="submit" value="0" onClick={() => {
            getResult()
            getNum("");
          }}
            className=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem] min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
            <p className="text-black text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold]">Submit</p>
          </button>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center">
            <button
              className="rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.1875rem] h-[4.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p className="text-black font-[Rubik-Bold] text-[1.875rem] lg:text-[3.125rem]">Back</p>
              </Link>
            </button>
          </div>
        </div>






      </div>
    </div>

  )
}
