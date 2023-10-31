import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineMessage
} from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";

const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiOutlineHome>,</AiOutlineHome>,
  },
  {
    title: "Serch",
    icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch>,</AiOutlineSearch>,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,
    activeIcon: <AiOutlineCompass>,</AiOutlineCompass>,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,
    activeIcon: <RiVideoLine>,</RiVideoLine>,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
    activeIcon: <AiOutlineMessage>,</AiOutlineMessage>,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
    activeIcon: <AiOutlineHeart>,</AiOutlineHeart>,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: <AiOutlinePlusCircle>,</AiOutlinePlusCircle>,
  },
  {
    title: "Profile",
    icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
    activeIcon: <CgProfile>,</CgProfile>,
  },
];
export default menu;