import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Drawer, Box } from "@mui/material";
import styles from "@/styles/Header.module.css";
import MobileMenu from "./MobileMenu";
import Minicart from "./Minicart";

const menuLinks = ["colections", "men", "women", "about", "contact"];

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMinicartOpen, setIsMinicartOpen] = useState(false);

    const quantity = useSelector((state) => state.product.quantity);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setIsDrawerOpen(open);
    };

    const handleMinicart = () => {
        setIsMinicartOpen((isMinicartOpen) => !isMinicartOpen);
    };

    return (
        <header className={`py-5 ${styles.headerOuter}`}>
            <div className="inner flex justify-between px-6">
                <div className=" gap-3 flex items-center">
                    <Image
                        onClick={toggleDrawer(true)}
                        width={15}
                        height={20}
                        src="/icon-menu.svg"
                        alt="menu trigger icon"
                        className={styles.menuTrigger}
                    />
                    <Image
                        height={90}
                        width={100}
                        alt="/site logo"
                        src="logo.svg"
                    />
                    <ul
                        className={`ml-6 hidden justify-between gap-7 ${styles.desktopLinks}`}
                    >
                        {menuLinks.map((menuLink, i) => (
                            <li key={i}>
                                <Link
                                    className={`capitalize ${styles.desktopLink}`}
                                    href={`/${menuLink}`}
                                >
                                    {menuLink}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Drawer
                        anchor="left"
                        open={isDrawerOpen}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <Box
                            sx={{
                                pl: 3,
                                pr: 4,
                                py: 2,
                                height: 1,
                                backgroundColor: "#fff",
                                width: "60vw",
                            }}
                        >
                            <div className="close-icon mb-6">
                                <svg
                                    onClick={toggleDrawer(false)}
                                    width="14"
                                    height="15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                        fill="currentcolor"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <MobileMenu menuLinks={menuLinks} />
                        </Box>
                    </Drawer>
                </div>
                <div className="right flex gap-4 relative items-center">
                    <div className={`relative`}>
                        <Image
                            width={20}
                            height={20}
                            src="/icon-cart.svg"
                            alt="minicart icon"
                            onClick={handleMinicart}
                            className={`cursor-pointer ${styles.minicartIcon}`}
                        />
                        {quantity > 0 && (
                            <span
                                className={`${styles.minicartBadge} absolute`}
                            >
                                {quantity}
                            </span>
                        )}
                    </div>
                    <Image
                        height={38}
                        width={38}
                        src="/image-avatar.png"
                        alt="user-avatar"
                        className={`${styles.userAvatar} cursor-pointer`}
                    />
                </div>
            </div>
            <Minicart isMinicartOpen={isMinicartOpen} />
        </header>
    );
};

export default Header;
