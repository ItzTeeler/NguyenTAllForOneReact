import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { GreaterThanLessThanApi } from '../services/DataServices';

export default function GreaterThanLessThanComponent() {
  const [num1, setNumOne] = useState('');
  const [num2, setNumTwo] = useState('');
  let [output, setOutput] = useState('[input1] is Great Than [input2]');

  const getResult = async () => {
    if (num1 === "" || num2 === "") {
      setOutput("Please Enter Something");
    } else if (num1.toLowerCase() === "something" || num2.toLowerCase() === "something") {
      setOutput("Don't actually put something... idiot")
    } else {
      const response = await GreaterThanLessThanApi(num1, num2);
      setOutput(response);
    }

  }
  return (
    <body class="backgroundGreaterThanLessThan">
      <div>
        <div class="grid grid-cols-12">
          <div class="col-span-2">
            <button
              class="hidden lg:block rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p class="text-black font-[Rubik-Bold] text-[3.125rem]">Back</p>
              </Link>
            </button>
          </div>
          <div class="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
            <p class="font-[Rubik-Bold] text-[3.125rem] lg:text-[5rem] text-white">Greater Than or Less Than</p>
          </div>
        </div>
        <div>

        </div>
        <div class="flex justify-center px-[1.9375rem]">
          <div
            class="bg-white w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] grid justify-center items-center grid-cols-12">
            <p class="font-[Rubik-Bold] text-[1.875rem] lg:text-[4.375rem] text-center col-span-12 p-5 lg:p-20" > {output}</p>
          </div>
        </div>

        <div class="flex justify-center">
          <p class="text-[1.875rem] lg:text-[3.125rem] font-[Rubik-Bold] mt-[1.25rem] lg:mt-[5.25rem]">Enter 2 Numbers!</p>
        </div>
        <div class="grid grid-cols-2">
          <div class="flex justify-center lg:justify-end col-span-2 lg:col-span-1 lg:pr-[47px] px-[2.125rem]">
            <input
              class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full lg:w-[37.0625rem]"
              type="text" placeholder="Number 1" onChange={(e) => setNumOne(e.target.value)} />
          </div>
          <div class="flex justify-center lg:justify-start lg:pl-[47px] col-span-2 lg:col-span-1 px-[2.125rem]">
            <input
              class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full lg:w-[37.0625rem]"
              type="text" placeholder="Number 2" onChange={(e) => setNumTwo(e.target.value)} />
          </div>
        </div>


        <div class="flex justify-center">
          <button type="submit" value="0" onClick={(e) => getResult()}
            class=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem] min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
            <p class="text-black text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold]">Submit</p>
          </button>
        </div>

        <div class="block lg:hidden">
          <div class="flex justify-center">
            <button
              class="rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.1875rem] h-[4.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p class="text-black font-[Rubik-Bold] text-[1.875rem] lg:text-[3.125rem]">Back</p>
              </Link>
            </button>
          </div>
        </div>






      </div>
    </body>
  )
}
