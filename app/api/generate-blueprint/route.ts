import { NextRequest, NextResponse } from 'next/server';

const generateStrategy = async (userNiche: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not set');
  }

  let delay = 1000;

  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Act as an elite social media strategist for Bear Media. Generate a 3-point viral content blueprint for a brand in the ${userNiche} niche. Focus on high-retention vertical video and digital authority. 

Return ONLY a JSON object with this exact structure:
{
  "shortForm": "2-3 sentence bold strategy for Reels/TikTok/Shorts - focus on viral hooks",
  "youtube": "2-3 sentence bold strategy for YouTube - focus on long-form authority",
  "aesthetic": "2-3 sentence bold brand aesthetic direction - visual style and mood"
}

Keep the tone BOLD, PROFESSIONAL, and HIGH-ENERGY. Use power words. No markdown, no code blocks, pure JSON only.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const result = await response.json();
      
      if (!result.candidates || !result.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response structure from Gemini API');
      }

      const responseText = result.candidates[0].content.parts[0].text;
      
      // Parse the JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in Gemini response');
      }
      
      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error(`[v0] Attempt ${i + 1} failed:`, error);
      
      // If it's the last attempt, throw the error
      if (i === 4) {
        throw error;
      }
      
      // Exponential backoff
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  throw new Error('Strategy generation failed after 5 attempts.');
};

export async function POST(request: NextRequest) {
  try {
    const { niche } = await request.json();

    if (!niche || typeof niche !== 'string') {
      return NextResponse.json({ error: 'Niche is required' }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'NEXT_PUBLIC_GEMINI_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const blueprint = await generateStrategy(niche);

    return NextResponse.json({ blueprint });
  } catch (error) {
    console.error('[v0] Blueprint generation error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to generate blueprint',
      },
      { status: 500 }
    );
  }
}
