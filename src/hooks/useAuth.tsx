import { useState } from "react"

/*
  Note: Instead of exporting default. Try to export as a value
*/

export const useAuth = () => {
  const [value, setValue] = useState(1)
  const updateValue = () => {
    setValue(value + 1)
  }

  return { value, updateValue }
}
