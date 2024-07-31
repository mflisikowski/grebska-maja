import { CopyrightIcon } from 'lucide-react'
import React from 'react'

export default function Copyright() {
  return (
    <div className="flex items-center gap-2 text-sm leading-5 text-slate-500">
      <CopyrightIcon />
      {new Date().getFullYear()}, Wszelkie prawa zastrzeżone.
    </div>
  )
}
