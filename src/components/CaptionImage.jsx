export default function CaptionImage(props) {
    return (
        <div>
            <img src={props.imgUrl} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}