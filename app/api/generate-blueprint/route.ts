import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { niche } = await request.json();

    if (!niche || typeof niche !== 'string') {
      return NextResponse.json(
        { error: 'Niche is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `You are a premium, elite content strategist for a top-tier content creation agency. Create a bold, high-energy, viral content blueprint for a brand in the "${niche}" niche.

Return ONLY a JSON object with exactly this structure (no markdown, no code blocks, pure JSON):
{
  "shortForm": "A 2-3 sentence bold, elite strategy for Short-form Content (Reels, TikTok, Shorts) - focus on high-retention hooks and viral mechanics",
  "youtube": "A 2-3 sentence bold, elite strategy for YouTube - focus on long-form storytelling, audience retention, and monetization",
  "aesthetic": "A 2-3 sentence bold description of the brand aesthetic direction - visual style, color theory, and mood that will dominate feeds"
}

Make the tone BOLD, ELITE, and HIGH-ENERGY. Use power words. This is for premium brands that refuse to be invisible.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse the JSON response
    let blueprint;
    try {
      // Try to extract JSON from the response (in case there's any wrapping text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }
      blueprint = JSON.parse(jsonMatch[0]);
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json(
        { error: 'Failed to parse AI response' },
        { status: 500 }
      );
    }

    return NextResponse.json({ blueprint });
  } catch (error) {
    console.error('Blueprint generation error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to generate blueprint',
      },
      { status: 500 }
    );
  }
}
