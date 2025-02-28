import { NextRequest, NextResponse } from "next/server";

const GOOGLE_MAPS_PLACES_API_KEY = process.env.GOOGLE_MAPS_PLACES_API_KEY;

export async function GET(req: NextRequest) {
  if (!GOOGLE_MAPS_PLACES_API_KEY) {
    return NextResponse.json({ error: "Missing Google Maps API key" }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const type = searchParams.get("type") || "restaurant"; // デフォルトは "restaurant"
  const radius = searchParams.get("radius") || "1500"; // デフォルトは 1500m
  const minprice = searchParams.get("minprice") || "0";
  const maxprice = searchParams.get("maxprice") || "4";

  if (!lat || !lng) {
    return NextResponse.json({ error: "Latitude and longitude are required" }, { status: 400 });
  }

  const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&opennow=true&minprice=${minprice}&maxprice=${maxprice}&key=${GOOGLE_MAPS_PLACES_API_KEY}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch Google Places API" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error", details: error }, { status: 500 });
  }
}
