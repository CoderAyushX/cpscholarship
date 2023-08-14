import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap'
});
export const metadata = {
  title: 'Carrer Point Scholarship',
  description: ' Welcome to Carrear Point - Where Excellence and Scholarships Meet! At Carrear Point, we believe in unlocking the full potential of every student through personalized tuition and comprehensivescholarship programs. Our dedicated tutors and modern teaching methods ensure a transformative learning experience that sets you on the path to success.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
