"use client"

import { useState } from "react"

interface InputProps {
  label: string
  name: string
  type: string
  defaultValue?: string
}

export default function Input({ type, label, defaultValue, name }: InputProps) {
  const [value, setValue] = useState<string | null>(null)

  return <div className="relative w-full border border-indigo-600 rounded pt-2">
    <input
      type={type}
      id={name}
      name={name}
      value={defaultValue}
      className="w-full peer outline-none h-8 px-4 rounded"
      onKeyUp={(e) => setValue((e.target as HTMLInputElement).value)}
    />
    <label
      htmlFor={name}
      className={`peer-focus:text-sm ${value && "-top-2 text-sm px-2"} peer-focus:-top-2 left-2 absolute transition-all cursor-text bg-white peer-focus:px-2 text-indigo-600`}>
      {label}
    </label>
  </div>
}
