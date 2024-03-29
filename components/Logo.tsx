import Link from "next/link";
import { FC } from "react";

import { TbDevicesPc } from "react-icons/tb";

const Logo: FC = () => (
    <Link href="/">
        <div className="flex items-center justify-between max-w-min gap-2 text-gray-500">
            <TbDevicesPc size={70} />
            <span className="font-roboto-condensed font-bold text-3xl whitespace-nowrap text-gray-500">
                pcparts
            </span>
        </div>
    </Link>
);

export default Logo;