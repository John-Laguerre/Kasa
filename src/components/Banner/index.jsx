function Banner({ backgroundImage, title }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
