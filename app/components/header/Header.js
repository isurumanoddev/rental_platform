'use client'


import Categories from "@/app/components/header/Categories";
import UserMenu from "@/app/components/header/UserMenu";
import Logo from "@/app/components/header/Logo";



function Header({currentUser}) {

    console.log("cuurentUser",currentUser)


    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                    <div className=" flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <UserMenu currentUser={currentUser}/>

                    </div>
                </div>
            </div>
            <Categories/>
        </div>
    )
        ;
}

export default Header;