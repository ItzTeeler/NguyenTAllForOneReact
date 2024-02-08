import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Magic8BallApi } from '../services/DataServices'

export default function Magic8BallComponent() {
  const [input, getInput] = useState("");
  const [output, getOutput] = useState("You should ask your mom");
  const getResult = async () =>{
    const response = await Magic8BallApi();
    getOutput(response);
  }
  return (
    <body class="backgroundMagic8Ball">
    <div>
        <div class="grid grid-cols-12">
            <div class="col-span-2">
                <button
                    class="hidden lg:block rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
                    <Link to ={"/"}>
                        <p class="text-black font-[Rubik-Bold] text-[3.125rem]">Back</p>
                    </Link>
                </button>
            </div>
            <div class="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
                <p class="font-[Rubik-Bold] text-[3.125rem] lg:text-[5rem] text-white">Magic 8 Ball</p>
            </div>
        </div>
        <div>

        </div>
        <div class="flex justify-center px-[1.9375rem]">
            <div
                class="bg-white w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] flex justify-center items-center">
                <p class="font-[Rubik-Bold] text-[1.875rem] lg:text-[4.375rem] text-center p-5 lg:p-20" >{output}</p>
            </div>
        </div>

        <div class="flex justify-center">
            <p class="text-[1.875rem] lg:text-[3.125rem] font-[Rubik-Bold] mt-[1.25rem] lg:mt-[5.25rem]">Ask a question</p>
        </div>

        <div class="flex justify-center px-[2.125rem] ">
            <input
                class="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full lg:w-[37.0625rem]"
                type="text" placeholder="Ask" id="askInput"/>
        </div>

        <div class="flex justify-center">
            <button type="submit" value="0" onClick = {() => getResult()}
                class=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem] min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
                <p class="text-black text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold]">Submit</p>
            </button>
        </div>

        <div class="block lg:hidden">
            <div class="flex justify-center">
                <button
                    class="rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.1875rem] h-[4.75rem] mt-[3.75rem] mb-[3.125rem]">
                    <Link to ={"/"}>
                        <p class="text-black font-[Rubik-Bold] text-[1.875rem] lg:text-[3.125rem]">Back</p>
                    </Link>
                </button>
            </div>
        </div>






    </div>
</body>
  )
}
