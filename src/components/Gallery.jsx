import manTextImg from "./../assets/images/desktop/image-man-texting.jpg";
import menMeetImg from "./../assets/images/desktop/image-men-in-meeting.jpg";
import womanVideoImg from "./../assets/images/desktop/image-woman-in-videocall.jpg";
import womenChatImg from "./../assets/images/desktop/image-women-videochatting.jpg";
import { StyledGallery } from "./styles/Gallery.styled";

const imgs = [
  {
    src: womanVideoImg,
    alt: "woman in videocall",
  },
  {
    src: womenChatImg,
    alt: "women videochatting",
  },
  {
    src: menMeetImg,
    alt: "men in a meeting",
  },
  {
    src: manTextImg,
    alt: "man texting",
  },
];

export default function Gallery() {
  return (
    <StyledGallery>
      {imgs.map((img, index) => {
        return <img src={img.src} alt={img.alt} key={index} />;
      })}
    </StyledGallery>
  );
}
