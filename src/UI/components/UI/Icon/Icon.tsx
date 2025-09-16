import { FiEdit } from "react-icons/fi";
import { BiSolidShow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const iconConfig = {
    edit: {
        icon: <FiEdit />,
        class: "bg-orange-400 hover:bg-orange-500",
    },
    details: {
        icon: <BiSolidShow />,
        class: "bg-green-400 hover:bg-green-600",
    },
    delete: {
        icon: <MdDeleteForever />,
        class: "bg-red-400 hover:bg-red-500",
    },
} as const;

type Props = {
    type: keyof typeof iconConfig;
    onClick?: () => void;
};

export default function Icon({ type, onClick }: Props) {
    const btnClassName =
        "text-xl text-white rounded-xl p-1 hover:scale-110 transition-all duration-200 cursor-pointer";

    const { icon, class: colorClass } = iconConfig[type];

    return (
        <button onClick={onClick} className={`${btnClassName} ${colorClass}`}>
            {icon}
        </button>
    );
}
