import { NextResponse } from 'next/server';
import { findUserByEmail, saveReset } from '@/lib/db';
import { generateResetToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email);
    if (!user) {
      // Security best practice: do not reveal whether the email exists,
      // but in this mock environment, we can do it or return success. Let's return success
      // to avoid enumeration attacks, but print a notice.
      console.log(`Password reset requested for non-existent email: ${email}`);
      return NextResponse.json({
        message: 'If the email exists, a reset link has been sent.',
      });
    }

    const token = generateResetToken();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

    await saveReset({
      email: user.email,
      token,
      expiresAt,
    });

    // Simulate sending email
    const resetUrl = `http://localhost:3000/reset-password?token=${token}&email=${encodeURIComponent(user.email)}`;
    console.log('\n==================================================');
    console.log('SIMULATED EMAIL SENT:');
    console.log(`To: ${user.email}`);
    console.log(`Subject: Reset your Minimal account password`);
    console.log(`Link: ${resetUrl}`);
    console.log('==================================================\n');

    return NextResponse.json({
      message: 'If the email exists, a reset link has been sent.',
      // For developer convenience, return the URL in non-production mode so they don't have to check console
      devResetUrl: process.env.NODE_ENV !== 'production' ? resetUrl : undefined,
    });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
