import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <body class="backgroundHome">

      <p class="font-[Rubik-Bold] text-[3.125rem] lg:text-[12.5rem] text-white text-center pt-[3.8125rem] lg:pt-[6.25rem]">All For One</p>

      <div class="mt-[4rem] lg:mt-[8.9375rem]">
        <div class="grid grid-cols-5 justify-between mx-[2.5rem]">
          <div class="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"SayHello"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Say Hello</p>
            </Link>
          </button></div>
          <div class="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"Add2Numbers"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Add 2 Numbers</p>
            </Link>
          </button></div>
          <div class="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"AskingQuestions"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Asking Questions</p>
            </Link>
          </button></div>
          <div class="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"GreaterThanLessThan"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Greater Than Or Less Than</p>
            </Link>
          </button></div>
          <div class="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
            <Link to ={"MadLib"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Mad Lib</p>
            </Link>
          </button></div>
        </div>

        <div class="grid grid-cols-10 justify-between px-[2.5rem]">
          <div class="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"ReverseItNumbers"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Reverse It (Integers)</p>
            </Link>
          </button>
          </div>
          <div class="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"ReverseItString"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Reverse It (Strings)</p>
            </Link>
          </button></div>
          <div class="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"RestaurantPicker"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Restaurant Picker</p>
            </Link>
          </button></div>
          <div class="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"Magic8Ball"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">
                Magic 8 Ball</p>
            </Link>
          </button></div>
          <div class="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            class="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
            <Link to = {"OddOrEven"}>
              <p class="text-[2.5rem] text-black font-[Rubik-Bold]">Odd Or Even</p>
            </Link>
          </button></div>
        </div>
      </div>
    </body>
  )
}
