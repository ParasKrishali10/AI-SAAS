// Cron job endpoint - processes scheduled posts
// This should be called every minute by a service like Vercel Cron or GitHub Actions

import { NextResponse } from 'next/server';
import { processScheduledPosts } from '@/lib/scheduler';

export async function GET(request: Request) {
  // Security: Check for cron secret
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Process all due posts
    const results = await processScheduledPosts();

    return NextResponse.json({
      success: true,
      processed: results.length,
      results,
    });

  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// For Vercel Cron, add this config
export const runtime = 'edge';
export const dynamic = 'force-dynamic';