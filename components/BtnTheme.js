"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Styles from '../styles/BtnTheme.module.css'

const BtnTheme = () => {
  const { theme, setTheme } = useTheme();
  const [imageTheme, setImageTheme] = useState("");
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    if (theme === 'dark') {
      setImageTheme('/images/icon-sun.svg');
    } else {
      setImageTheme('/images/icon-moon.svg');
    }
  }, [theme]); 


  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }



  return (
    <button className={Styles.btnTheme} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Image
      src={imageTheme}
      width={20}
      height={20}
      alt="Icon theme"
      className={Styles.btnIconThemeMobile}
      />
            <Image
      src={imageTheme}
      width={25}
      height={25}
      alt="Icon theme"
      className={Styles.btnIconThemeDesktop}
      />

    </button>
  );
};

export default BtnTheme;

