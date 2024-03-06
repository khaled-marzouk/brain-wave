import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	const pathName = useLocation();
	const toggleNav = () => {
		if (openNav) {
			setOpenNav(false);
			enablePageScroll();
		} else {
			setOpenNav(true);
			disablePageScroll();
		}
	};
	const handleCLick = () => {
		if (!openNav) return;
		enablePageScroll();
		setOpenNav(false);
	};
	return (
		<div
			className={`${
				openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
			}   fixed top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm left-0 w-full`}
		>
			<div className="flex items-center px-5 lg:px-7.5 xl:px-10  max-lg:py-4">
				<a href="#hero" className="block w-[12rem] xl:mr-8">
					<img src={brainwave} alt="brainWave" width={190} height={40} />
				</a>
				<nav
					className={` ${
						openNav ? "flex" : "hidden"
					} fixed top-[5rem] left-0 right-0 bottom-0  bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
				>
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map((link) => (
							<a
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-6 lg:mr-0.25  lg:text-xs lg:font-semibold ${
									link.onlyMobile ? "lg:hidden" : ""
								} ${
									link.url === pathName.hash
										? "z-2 lg:text-n-1 "
										: "lg:text-n-1/50"
								} leading-5 lg:hover:text-n-1 xl:px-12`}
								key={link.id}
								href={link.url}
								onClick={handleCLick}
							>
								{link.title}
							</a>
						))}
					</div>
					<HamburgerMenu />
				</nav>
				<a
					href="#signup"
					className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block "
				>
					New Account
				</a>
				<Button className="hidden lg:flex" href="#Logn in">
					Sign in
				</Button>
				<Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
					<MenuSvg openNavigation={openNav} />
				</Button>
			</div>
		</div>
	);
};

export default Header;
