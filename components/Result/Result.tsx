'use client';
import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import RemakeButton from "@/components/RemakeButton/RemakeButton";
import ShopName from "@/components/ShopName/ShopName";
import ShopImage from "@/components/ShopImage/ShopImage";
import ShopDetail from "@/components/ShopDetail/ShopDetail";
import ShopGoingTime from "@/components/ShopGoingTime/ShopGoingTime";
import ShopBudget from "@/components/ShopBudget/ShopBudget";
import ShopOpeningHours from "@/components/ShopOpeningHours/ShopOpeningHours";
import MapButton from "@/components/MapButton/MapButton";

// type LocationData = {
//     lat:string;
//     lng:string;
// }
// type Data={
//     content:string;
// }

export default function Result() {
     const router = useRouter();
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | null }>({}); // 詳細設定の選択状態

    // const [locationdata, setLocationData] = useState<LocationData | string>("")
    // const [data, setData] = useState<Data | string>("")
    //
    // useEffect(() => {
    //     fetch("app/api/user-location-info/route.ts")
    //         .then((response) => response.json())
    //         .then((locationdata) => setLocationData(locationdata))
    // }, ["app/api/user-location-info/route.ts"])
    //
    // useEffect(() => {
    //     fetch("app/api/openai/route.ts")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, ["app/api/openai/route.ts"])
    const [location, setLocation] = useState<{ lat: string; lng: string } | string>("");

    useEffect(() => {
        fetchLocation();
    }, [MapButton]);
    async function fetchLocation() {
        try {
            const response = await fetch("../api/user-location-info/");
            if (!response.ok) {
                throw new Error("Failed to fetch location");
            }

            const data = await response.json();
            setLocation(data.location);
            console.log(data);
        } catch (err) {
            console.log("error:" + err);
        }
    }
    // useEffect(() => {
    //     fetchRecommend();
    // }, [Result]);
    // async function fetchRecommend() {
    //     try {
    //         const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //             method: 'POST',
    //             headers: {
    //                 "Authorization": `Bearer ${OPENAI_API_KEY}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 model:"gpt-4",
    //                 messages: [{role: "user", content: "こんにちは"}],
    //                 temperature:0.7
    //             }),
    //         });
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch location");
    //         }
    //
    //         const data = await response.json();
    //         setLocation(data.location);
    //         console.log(data);
    //     } catch (err) {
    //         console.log("error:" + err);
    //     }
    // }

    // // 質問ページをプリフェッチしておく
    useEffect(() => {
        router.prefetch("/pages/QuestionPage");
    }, [router]);
    //

    // 詳細設定の選択状態の初期化 (Cookieから読み取り)
    useEffect(() => {
        const initialValues: { [key: string]: string | null } = {};
        const detailedSettingQuestions = ['おすすめ結果のお店の数', 'お店までの所要時間', '移動手段', 'お店に行く人数', 'ご予算']; // layoutからQuestionPageとHeaderに渡した方がいいかも
        detailedSettingQuestions.forEach((question) => {
            const cookieValue = Cookies.get(question);
            initialValues[question] = cookieValue || null;
        });
        setSelectedValues(initialValues);
    }, []);

    function Remake(){
        router.push("/pages/QuestionPage");
        console.log(selectedValues);
    }
    function MapOpen(){
        if (typeof location !== "string") {
            router.push("https://www.google.co.jp/maps/dir/" + location.lat+","+location.lng + "/"+"東京駅");
        }
        else{
            router.push("https://www.google.co.jp/maps/dir/横浜駅/東京駅");
        }
    }
    return (
        <div className="h-full flex flex-col justify-between items-center ">
            <div className="mt-2 w-2/3 h-4/5 rounded-2xl flex flex-col items-center border-main-3 border-2 bg-white">
                <ShopName shopName="いろり庵"/>
                <ShopImage icon="/good meal.jpg"/>
                <ShopDetail shopDetail="有名な和食のお店。最高の休日をあなたにというコンセプトで運営されている"/>
                <div className="m-1 w-full">
                    <div className="m-1 flex flex-row">
                        <ShopGoingTime transportation="徒歩" goingtime="5"/>
                        <ShopBudget budget="=1000"/>
                    </div>
                    <ShopOpeningHours lunch="10:00~12:00" dinner="17:00~22:00"/>
                </div>
                <MapButton onClick={MapOpen}/>
            </div>
            <div className="m-0 py-2 w-2/3 h-1/6">
                <RemakeButton  onClick={Remake}></RemakeButton>
            </div>

        </div>
    );
}
