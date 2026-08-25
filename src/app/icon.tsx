import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 256, height: 256 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        <img
          src="http://localhost:3000/profile.jpeg"
          width={256}
          height={256}
          alt="Profile"
          style={{
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
