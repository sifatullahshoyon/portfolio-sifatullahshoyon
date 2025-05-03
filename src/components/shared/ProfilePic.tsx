import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userImg from "@/assets/images/sifat.png";

const ProfilePic = () => {
  return (
    <Avatar>
      <AvatarImage src={userImg.src} alt="user img" />
      <AvatarFallback>Sifat Ullah shoyon</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePic;
