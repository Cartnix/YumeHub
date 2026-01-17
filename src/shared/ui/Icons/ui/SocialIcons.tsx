import { FaGithub, FaTelegram, FaInstagram, FaGoogle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LinksContainer } from "./LinksContainer";

export const SocialIcons = () => {
  return (
    <div className="flex gap-8">
      <LinksContainer href="https://github.com/Cartnix"><FaGithub className="text-2xl" /></LinksContainer>
      <LinksContainer href="https://t.me/cartnix"><FaTelegram className="text-2xl" /></LinksContainer>
      <LinksContainer href="https://leetcode.com/u/Cartnixx/"><SiLeetcode className="text-2xl" /></LinksContainer>
      <LinksContainer href="mailto:cartnix21@gmail.com"><FaGoogle className="text-2xl" /></LinksContainer>
      <LinksContainer href="https://www.instagram.com/cartnix_dev/"><FaInstagram className="text-2xl" /></LinksContainer>
    </div>
  );
}