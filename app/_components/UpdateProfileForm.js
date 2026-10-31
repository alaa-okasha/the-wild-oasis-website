"use client";
import { useState } from "react";
import { updateGuest } from "../_lib/actions";

export default function UpdateProfileForm({ guest, children }) {
  const [count, setCount] = useState();

  const { fullName, email, nationalID, nationality, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          readOnly
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm read-only:cursor-not-allowed read-only:bg-gray-600 read-only:text-gray-400 outline-none"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          readOnly
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm read-only:cursor-not-allowed read-only:bg-gray-600 read-only:text-gray-400 outline-none"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <span>{countryFlag}</span>
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm outline-none"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}
