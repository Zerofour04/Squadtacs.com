export const prerender = false;

import type { APIRoute } from 'astro';

interface GuideSubmission {
  title: string;
  category: string;
  author: string;
  email: string;
  summary: string;
  content: string;
  turnstileToken: string;
}

const categoryLabels: Record<string, string> = {
  basics: 'Basics',
  advanced: 'Advanced',
  tactics: 'Tactics',
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: GuideSubmission = await request.json();
    const { title, category, author, email, summary, content, turnstileToken } = body;

    // Validate required fields
    if (!title || !category || !author || !email || !summary || !content || !turnstileToken) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate content length (minimum 100 chars)
    if (content.length < 100) {
      return new Response(
        JSON.stringify({ error: 'Guide content must be at least 100 characters' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables
    const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json() as { success: boolean };

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ error: 'Security verification failed. Please try again.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Escape HTML in content for email display
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Squad Tacs <onboarding@resend.dev>',
        to: ['brubiyt@gmail.com'],
        subject: `[Guide Submission] ${title}`,
        html: `
          <h2>New Guide Submission</h2>

          <table style="border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Title</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(title)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Category</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${categoryLabels[category] || category}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Author</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(author)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Summary</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(summary)}</td>
            </tr>
          </table>

          <h3>Guide Content (Markdown)</h3>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; font-family: monospace; font-size: 13px;">${escapeHtml(content)}</pre>

          <hr style="margin: 20px 0;" />

          <p style="color: #666; font-size: 12px;">
            Submitted via Squad Tacs guide submission form<br />
            The author has confirmed: original work, CC BY-NC-SA license
          </p>
        `,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Resend error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to submit guide. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Guide submission error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
