"use client"
import React,{useState} from "react";
import IconButton from "@/components/IconButton/IconButton";
import Menu from "../Menu/Menu";

// ヘッダー
export default function Header() {
	const [isMenuOpen, setOpenMenu] = useState(false);
	let SettingState="visible";
	function ToggleMenu(){
		setOpenMenu(!isMenuOpen);
	}
	if(isMenuOpen){
		SettingState="bg-main-3";
	}
	else{
		SettingState="";
	}
	return (
		<div className={"w-full flex flex-col " + SettingState}>
			<div className='mr-5 ml-auto my-2'>
				<IconButton 
					func={isMenuOpen? "close": "menu"} 
					icon={isMenuOpen? "./IoClose.svg": "./IoSettings.svg"} 
					onClick={ToggleMenu}/>
			</div>
			{isMenuOpen&& <div className="h-screen flex flex-col">
				<p className="mx-auto text-headline-1 text-white font-bold">MENU</p>
				<p className="mx-auto text-label-1 text-white">お店の条件やおすすめ件数をカスタムできます</p>
				<Menu/>
			</div>}
		</div>
	);
}