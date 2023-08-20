const getCroppedImageUrl = (url: string) => {
  const target = "media/"
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) + "crop/600/400/" + url.slice(index)
}

export default getCroppedImageUrl

// original link example: https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg

