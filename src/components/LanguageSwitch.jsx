import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LanguageSwitch({ onChange }) {
  const [isSpanish, setIsSpanish] = useState(false)

  const handleToggle = () => {
    setIsSpanish(!isSpanish)
    onChange?.(isSpanish ? 'en' : 'es')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">EN</span>
      <button
        onClick={handleToggle}
        className={`relative h-7 w-12 rounded-full p-1 transition-colors duration-200 ${
          isSpanish ? 'bg-cyan-300' : 'bg-slate-500'
        }`}
        aria-pressed={isSpanish}
        aria-label={`Switch to ${isSpanish ? 'English' : 'Spanish'}`}
      >
        <motion.div
          className="h-5 w-5 rounded-full bg-white shadow-sm"
          animate={{
            x: isSpanish ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </button>
      <span className="text-sm font-medium">ES</span>
    </div>
  )
}