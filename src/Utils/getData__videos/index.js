const myApiKey = process.env.API_KEY
const myApiLink = process.env.API_LINK
const myApi = `${myApiLink}/videos/?key=${myApiKey}`

const getData = async (search = 'Linux', per = 20, page = 1) => {
  const mySearch = `&q=${search}`
  const myPages = `&per_page=${per}&page=${page}`

  try {
    const response = await fetch(`${myApi}${mySearch}${myPages}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default getData
