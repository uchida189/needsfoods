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
        SettingState="hidden";
    }
    else{
        SettingState="visible";
    }
    return (
        <div>
            <div className={SettingState}><IconButton  func="menu" icon="./IoSettings.svg" onClick={ToggleMenu}/>
            </div>
            {isMenuOpen&& <div>
                <IconButton func="close" icon="./IoClose.svg" onClick={ToggleMenu}/>
                {/*ここにメニューコンポーネントを入れたい*/}
                <Menu/>
            </div>
            }
        </div>
    );
}