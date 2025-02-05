import React from 'react'

const HireMeBtn = () => {
    return (
        <>
            <div class="relative inline-flex items-center justify-center gap-4 group my-10 md:scale-150 md:left-10">
                <div
                    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a
                    role="button"
                    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-blue-400 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                    href="#"
                >Hire Me<svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="10"
                    width="10"
                    fill="none"
                    class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                >
                        <path
                            d="M0 5h7"
                            class="transition opacity-0 group-hover:opacity-100"
                        ></path>
                        <path
                            d="M1 1l4 4-4 4"
                            class="transition group-hover:translate-x-[3px]"
                        ></path>
                    </svg>
                </a>
            </div>


        </>
    )
}

export default HireMeBtn