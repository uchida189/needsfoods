"use client"
import React,{useState} from "react";
import IconButton from "@/components/IconButton/IconButton";

// ヘッダー
export default function Header() {
    const [isMenuOpen, setOpenMenu] = useState(false);

    function ToggleMenu(){
        setOpenMenu(!isMenuOpen);
    }
    if(isMenuOpen){

    }
    return (
        <div>
            <div className={'{$isMenuOpen? "flex" : "hidden"}'}><IconButton  func="menu" icon="./IoSettings.svg" onClick={ToggleMenu}/>
            </div>
            {isMenuOpen&& <div>
                <IconButton func="close" icon="./IoClose.svg" onClick={ToggleMenu}/>
            </div>
            }
        </div>
    );
}