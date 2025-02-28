import { NextResponse } from 'next/server';

const GOOGLE_MAPS_GEOLOCATION_API_KEY = process.env.GOOGLE_MAPS_GEOLOCATION_API_KEY; // .envファイルにAPIキーを保存

// GETリクエストの処理
export async function GET() {
    if (!GOOGLE_MAPS_GEOLOCATION_API_KEY) {
        return NextResponse.json({ error: 'API key is not set' }, { status: 500 });
    }
    const apiUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + GOOGLE_MAPS_GEOLOCATION_API_KEY;

    try {
        // ユーザーの位置情報を取得
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({})
        });

        // エラーレスポンスの処理
        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: 'Failed to get user location', details: errorData }, { status: response.status });
        }
        
        // レスポンスデータをJSON形式で返す
        const data = await response.json();
        return NextResponse.json(data);
    }
    // エラーハンドリング
    catch (error) {
        return NextResponse.json({ error: 'Server error', details: error }, { status: 500 });
    }
}