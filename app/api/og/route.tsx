import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Required for @vercel/og

export async function GET(request: NextRequest) {
  try {
    // Construct the absolute URL for the profile image
    // Note: Accessing public files directly requires the full URL
    const profileImageUrl = new URL('/profile-image.jpeg', request.url).toString();
    
    // Fetch the profile image data
    const profileImageData = await fetch(profileImageUrl).then((res) => res.arrayBuffer());
    
    // Extract search params for potential customization (optional)
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Jeff Gicharu';
    const description = searchParams.get('description') || 'Full Stack Web Developer';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6', // Light gray background
            backgroundImage: 'linear-gradient(to bottom, #e5e7eb, #d1d5db)',
            fontFamily: '"Inter", sans-serif', // Use Inter font if loaded
            padding: '40px',
            position: 'relative',
          }}
        >
          {/* Optional: Add a subtle background pattern or texture here */}
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              // @ts-ignore - arrayBuffer is valid for ImageResponse img src
              src={profileImageData} 
              alt="Profile" 
              width="200" 
              height="200" 
              style={{
                borderRadius: '50%',
                border: '5px solid white',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                marginRight: '40px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', color: '#1f2937' }}>
              <h1 style={{ fontSize: 60, fontWeight: 700, margin: 0, marginBottom: '10px' }}>
                {title}
              </h1>
              <p style={{ fontSize: 35, fontWeight: 400, margin: 0, color: '#4b5563' }}>
                {description}
              </p>
            </div>
          </div>
          {/* Optional: Add a small logo or website URL at the bottom */}
          {/* <div style={{ position: 'absolute', bottom: '30px', right: '30px', fontSize: '20px', color: '#6b7280' }}>
            jeffgicharu.com
          </div> */}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // You might need to load fonts if using custom ones
        // fonts: [
        //   {
        //     name: 'Inter',
        //     data: interSemiBold,
        //     style: 'normal',
        //     weight: 400,
        //   },
        // ],
      },
    );
  } catch (e: any) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 