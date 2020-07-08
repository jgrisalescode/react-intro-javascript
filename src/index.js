// https://developers.giphy.com/dashboard/

const getImage = async () => {
  try {
    const apiKey = "nZ82xzf9w70zG26q8IHBafOoiIx6OC2k"
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    // Await before fetch converts response variable in Sync action
    const { data } = await response.json()
    const { url } = data.images.original
    console.log(url)
    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error(error)
  }
}

getImage()
