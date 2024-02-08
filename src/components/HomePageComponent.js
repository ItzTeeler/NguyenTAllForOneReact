import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <div className="backgroundHome">

      <p className="font-[Rubik-Bold] text-[3.125rem] lg:text-[12.5rem] text-white text-center pt-[3.8125rem] lg:pt-[6.25rem]">All For One</p>

      <div className="mt-[4rem] lg:mt-[8.9375rem]">
        <div className="grid grid-cols-5 justify-between mx-[2.5rem]">
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"SayHello"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Say Hello</p>
            </Link>
          </button></div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"Add2Numbers"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Add 2 Numbers</p>
            </Link>
          </button></div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"AskingQuestions"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Asking Questions</p>
            </Link>
          </button></div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"GreaterThanLessThan"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Greater Than Or Less Than</p>
            </Link>
          </button></div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
            <Link to ={"MadLib"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Mad Lib</p>
            </Link>
          </button></div>
        </div>

        <div className="grid grid-cols-10 justify-between px-[2.5rem]">
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"ReverseItNumbers"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Reverse It (Integers)</p>
            </Link>
          </button>
          </div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"ReverseItString"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Reverse It (Strings)</p>
            </Link>
          </button></div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"RestaurantPicker"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Restaurant Picker</p>
            </Link>
          </button></div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
            <Link to ={"Magic8Ball"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">
                Magic 8 Ball</p>
            </Link>
          </button></div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]"><button
            className="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
            <Link to = {"OddOrEven"}>
              <p className="text-[2.5rem] text-black font-[Rubik-Bold]">Odd Or Even</p>
            </Link>
          </button></div>
        </div>
      </div>
    </div>
  )
}
