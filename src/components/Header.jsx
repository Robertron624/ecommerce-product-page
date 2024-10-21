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

  const handleMinicart = (event) => {
    event.stopPropagation();
    console.info("Minicart clicked, new stop propagation");
    setIsMinicartOpen((prevIsMinicartOpen) => !prevIsMinicartOpen);
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked, either redirect to profile or open a modal");
  };

  return (
    <header className={`py-5 relative ${styles.headerOuter}`}>
      <div className={`inner flex justify-between px-6 ${styles.headerInner}`}>
        <div className=' gap-3 flex items-center'>
          <Image
            onClick={toggleDrawer(true)}
            width={15}
            height={20}
            src='/icon-menu.svg'
            alt='menu trigger icon'
            className={styles.menuTrigger}
          />
          <Link href='/' className='h-full flex items-center'>
            <Image height={90} width={100} alt='/site logo' src='logo.svg' />
          </Link>
          <ul
            className={`ml-6 hidden justify-between gap-7 h-full ${styles.desktopLinks}`}
          >
            {menuLinks.map((menuLink, i) => (
              <li key={i} className={`${styles.liHeader} flex`}>
                <Link
                  className={`capitalize flex items-center ${styles.desktopLink}`}
                  href={`/${menuLink}`}
                >
                  {menuLink}
                </Link>
              </li>
            ))}
          </ul>
          <Drawer
            anchor='left'
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
              <div className='close-icon mb-6'>
                <svg
                  onClick={toggleDrawer(false)}
                  width='14'
                  height='15'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                    fill='currentcolor'
                    fill-rule='evenodd'
                  />
                </svg>
              </div>
              <MobileMenu menuLinks={menuLinks} />
            </Box>
          </Drawer>
        </div>
        <div className='right flex md:gap-14 gap-4 relative items-center'>
          <button className={`relative`} onClick={handleMinicart}>
            <Image
              width={20}
              height={20}
              src='/icon-cart.svg'
              alt='minicart icon'
              className={`cursor-pointer ${styles.minicartIcon}`}
            />
            {quantity > 0 && (
              <span className={`${styles.minicartBadge} absolute`}>
                {quantity}
              </span>
            )}
          </button>
          <button className='cursor-pointer' onClick={handleAvatarClick}>
            <Image
              height={38}
              width={38}
              src='/image-avatar.png'
              alt='user-avatar'
              className={`${styles.userAvatar} cursor-pointer`}
            />
          </button>
        </div>
      </div>
      <Minicart
        isMinicartOpen={isMinicartOpen}
        setIsMinicartOpen={setIsMinicartOpen}
      />
    </header>
  );
};

export default Header;
