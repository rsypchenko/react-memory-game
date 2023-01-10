import { motion } from "framer-motion"

import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";
import { FaIceCream } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

interface Props {
  value: number;
  done: boolean;
  open: boolean;
  onClick: any;
}

type options = {
  [key: string]: any
}

const icons: options = {
  1: <FaIceCream />,
  2: <FaCanadianMapleLeaf />,
  3: <FaCarrot />,
  4: <FaTruck />,
  5: <FaSnowman />,
  6: <FaPizzaSlice />,
  7: <FaFish />,
  8: <FaHotdog />,
};

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  default: { opacity: 1, scale: 1 },
  open: {  rotateY: 360, opacity: 1, scale:1 },
  done: { opacity: 1, scale: 1 },
}

const Icon = ({ value }: { value: number }) => {
  return icons[value];
};

export const Square = ({ value, done, open, onClick }: Props) => {
  const bgColor = done ? "bg-green-500" : open ? "bg-white" : "bg-gray-500";
  const color = done ? "text-white" : "text-gray-500";

  return (
    <motion.div
      initial="initial"
      animate={open ? "open" : done ? "done": "default"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`flex border-2 text-5xl justify-center items-center ${bgColor} ${color} outline-none box-border`}
      onClick={onClick}
    >
      {open || done ? <Icon value={value} /> : ""}
    </motion.div>
  );
};
