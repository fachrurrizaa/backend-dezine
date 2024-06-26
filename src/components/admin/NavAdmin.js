"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function NavAdmin() {
  const inactiveLink = "flex gap-1 p-3";
  const activeLink = inactiveLink + " bg-[#028d94] text-white rounded-lg";
  const pathname = usePathname();

  const MySwal = withReactContent(Swal);

  function handleLogOut() {
    MySwal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes, Log out!",
      confirmButtonColor: "#d55",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        // Change isConfirmed to value
        signOut({ callbackUrl: "http://localhost:3000" });
      }
    });
  }

  return (
    <aside className="p-7 text-slate-800 border-r w-[13%]">
      <Link href={"/dashboard"} className="flex gap-1 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
        <span className="">Home Admin</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link
          href={"/dashboard"}
          className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#028d94] hover:text-white hover:rounded-lg ${
            pathname === "/admin" ? activeLink : inactiveLink
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          href={"/dashboard/post"}
          className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#028d94] hover:text-white hover:rounded-lg ${
            pathname.includes("/post") ? activeLink : inactiveLink
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          Post
        </Link>
        <Link
          href={"/dashboard/categories"}
          className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#028d94] hover:text-white hover:rounded-lg ${
            pathname.includes("/categories") ? activeLink : inactiveLink
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Categories
        </Link>
        <Link
          href={"/dashboard/transactions"}
          className={`hover:flex hover:gap-1 hover:p-3 hover:bg-[#028d94] hover:text-white hover:rounded-lg ${
            pathname.includes("/transactions") ? activeLink : inactiveLink
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
          Transactions
        </Link>

        <Button
          className={`rounded-lg bg-teal-50 text-slate-800 normal-case font-normal text-base justify-start hover:flex hover:gap-1 hover:p-3 hover:bg-[#028d94] hover:text-white hover:rounded-lg ${
            pathname.includes("/settings") ? activeLink : inactiveLink
          }`}
          click={() => handleLogOut()}
          content={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Log out
            </>
          }
        />
      </nav>
    </aside>
  );
}
