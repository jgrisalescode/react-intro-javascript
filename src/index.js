// https://developers.giphy.com/dashboard/
const apiKey = "nZ82xzf9w70zG26q8IHBafOoiIx6OC2k"
// Using FetchAPI
const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
request
  .then(resp => resp.json())
  .then(({ data }) => {
    console.log(data.images.original.url)
    const img = document.createElement("img")
    img.src = data.images.original.url
    document.body.append(img)
  })
  .catch(console.warn)
