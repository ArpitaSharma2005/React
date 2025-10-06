import { useEffect, useState } from "react"

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (!baseCurrency) return

    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates) // API returns { rates: { INR: 83.2, EUR: 0.91, ... } }
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err)
        setData({})
      })
  }, [baseCurrency])

  return data
}

export default useCurrencyInfo
