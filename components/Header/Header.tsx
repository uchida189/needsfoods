"use client"
import React,{useState, useEffect} from "react";
import Cookies from "js-cookie";
import IconButton from "@/components/IconButton/IconButton";
import Menu from "../Menu/Menu";

// ヘッダー
export default function Header() {
	const [isMenuOpen, setOpenMenu] = useState(false);
	const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | null }>({});
	// グループ名と選択肢
  const questionsAndOptions: { [key: string]: string[] } = {
    'おすすめ結果のお店の数': ['1店舗', '2店舗', '3店舗', '4店舗'],
    'お店までの所要時間': ['~5分', '~15分', 'それ以上'],
    '移動手段': ['徒歩', '電車・バス', '自動車'],
    'お店に行く人数': ['~2人', '~4人', '~6人', 'それ以上'],
    'ご予算': ['~500円', '~1000円', '~1500円', 'それ以上']
  };
  const questions = Object.keys(questionsAndOptions);
	
	let SettingState="visible";
	
	// メニューの表示切り替え
	function ToggleMenu(){
		setOpenMenu(!isMenuOpen);
	}
	
	// メニューが開いている場合、背景を変える
	if(isMenuOpen){
		SettingState="bg-main-3";
	}
	else{
		SettingState="";
	}
	
  // 状態の初期化 (Cookie から読み取り)
  useEffect(() => {
    const initialValues: { [key: string]: string | null } = {};
    questions.forEach((question) => {
      const cookieValue = Cookies.get(question);
      initialValues[question] = cookieValue || null; // Cookie が存在しない場合は null
    });
    setSelectedValues(initialValues);
  }, []);
	
  // 選択変更時の処理 (Cookie に書き込み)
  const handleChange = (question: string, value: string) => {
    // 選択済みの値の場合、選択を解除
    if (selectedValues[question] === value) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [question]: null,
      }));
      Cookies.remove(question, { path: '/' });
      return;
    }
		// そうでない場合、選択を更新
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [question]: value,
    }));
    Cookies.set(question, value, { expires: 1, path: '/' }); // 1日間有効な Cookie を設定
  };
	
	return (
		<div className={"w-full flex flex-col " + SettingState}>
			<div className='mr-5 ml-auto my-2'>
				<IconButton 
					func={isMenuOpen? "close": "menu"} 
					icon={isMenuOpen? "../IoClose.svg": "../IoSettings.svg"} 
					onClick={ToggleMenu}/>
			</div>
			{isMenuOpen&& <div className="h-screen flex flex-col">
				<p className="mx-auto text-headline-1 text-white font-bold">MENU</p>
				<p className="mx-auto text-label-1 text-white">お店の条件やおすすめ件数をカスタムできます</p>
				<Menu
					selectedValues={selectedValues}
					onChange={handleChange}
					questionsAndOptions={questionsAndOptions}
				/>
			</div>}
		</div>
	);
}