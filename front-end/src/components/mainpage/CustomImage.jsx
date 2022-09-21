import "./heroSection.css";

export default function CustomImage({imgSrc, pt}) {
  return (
    <div className="custom-image" style={{paddingTop: pt}}>
      <img src={imgSrc} alt="" />
    </div>
  )
}