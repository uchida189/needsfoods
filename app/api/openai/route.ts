import { NextRequest, NextResponse } from 'next/server';
import prompts from './prompts.json';
import userResponse from './user-response.json';

interface Prompts {
    [key: string]: string;
}

const typedPrompts: Prompts = prompts;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // .envファイルにAPIキーを保存

// POSTリクエストの処理
export async function POST(req: NextRequest) {
    if (!OPENAI_API_KEY) {
        return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
    }

    try {
        const { promptKey, model = "gpt-4", temperature = 0.7 } = await req.json();

        if (!promptKey || !typedPrompts[promptKey]) {
            return NextResponse.json({ error: 'Invalid prompt key' }, { status: 400 });
        }

        const prompt = `${typedPrompts[promptKey]}\nユーザーの回答: ${JSON.stringify(userResponse)}`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model,
                messages: [{ role: "user", content: prompt }],
                temperature,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: "Failed to fetch OpenAI API", details: errorData }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Server error', details: error }, { status: 500 });
    }
}