"use client"

import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    return useContext(ThemeContext)
}
