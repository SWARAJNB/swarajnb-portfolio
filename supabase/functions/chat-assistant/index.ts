import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are Swaraj N B's personal AI assistant on his portfolio website. You help visitors learn about Swaraj and connect with him.

About Swaraj:
- Computer Science Engineering student at ACS College of Engineering, Bangalore (graduating 2025, CGPA: 7.5)
- Full Stack Developer & AI-DevOps Engineer
- Experience: Dutch Endeavours (AI-DevOps Engineer Intern), Rooman Technologies (Full Stack Web Developer Intern)
- Skills: React, Node.js, Python, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, MongoDB, MySQL
- Location: Bangalore, India
- Email: swarajnb28@gmail.com
- LinkedIn: https://www.linkedin.com/in/swaraj-n-b-945a87226/
- GitHub: https://github.com/swarajnb

Key Projects:
1. Multi-Cloud Deployment Platform (AWS, Azure, GCP)
2. SecureChat – Blockchain Communication System
3. Automated CI/CD Pipeline (Jenkins, Docker, Kubernetes)

Your role:
- Greet visitors warmly
- Answer questions about Swaraj's skills, experience, education, and projects
- Direct visitors to specific sections of the portfolio
- Share contact information when asked
- Be helpful, professional, and concise
- If asked about contacting Swaraj, provide his email and LinkedIn

Keep responses short (2-3 sentences max) and friendly.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chat-assistant:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
