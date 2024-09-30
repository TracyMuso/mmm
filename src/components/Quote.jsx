import { useEffect, useState } from "react"

const Quote = () => {

  const [quote, setQuote] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
//   useEffect(() => {
//     fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
//       method: 'GET',
//       headers: {
//          'X-Api-Key': 'SVWnNvOobqFBNvwYDgarsQ==VsmcgvYBRKoXdXyu'
//       } 
//     })
//   .then((res) => {
//     return res.json()
//   }).then((data) => {
//     console.log(data);
//     setIsLoading(false)
//     setQuote(data);
//   }).catch(error => {
//     setIsLoading(false)
//     setIsError(true)
// }).finally(
// setIsLoading(false)
// setIsError(false));;
//   }, [])
  return (
    <div>
      {isLoading && <p>...loading</p>}
      {isError && <p>Sorry, an error occured</p>}
      {quote.map((item, idx) => (
        <div>
          <p>{item.quote}</p>
          <p>{item.author}</p>
      </div>
      ))}
    </div>
  )
}

export default Quote;
