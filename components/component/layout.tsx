/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yhDV6Of06aX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
/** Add fonts into your Next.js project:
import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'
archivo({
  subsets: ['latin'],
  display: 'swap',
})
libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})
To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            alt="Profile"
            className="rounded-full"
            height={48}
            src="/placeholder.svg"
            src="/1.jpg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <div>
            <h1 className="text-lg font-bold">차성민</h1>
            <p className="text-gray-400">GOOD AT DRAWING</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link className="hover:text-gray-300" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="#">
            Projects
          </Link>
          <Link className="hover:text-gray-300" href="#">
            Contact
          </Link>
        </nav>
        <Button className="md:hidden" variant="outline">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I am a passionate software engineer with experience in building scalable and efficient web
                  applications. I have a strong background in JavaScript, React, and Node.js, and I am always eager to
                  learn new technologies and techniques.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Skills</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Education</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Bachelor&aposs Degree in Computer Science</li>
                      <li>University of Example</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  alt="Profile"
                  className="rounded-full"
                  height={300}
                  src="/1.jpg"
                  width={300}
                />
                <img
                  alt="Profile"
                  className="rounded-full"
                  height={600}
                  src="/3.jpg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A web application for managing tasks and projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developed a full-stack web application using React, Node.js, and MongoDB. Implemented features such
                    as task management, team collaboration, and real-time updates.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-blue-500 hover:text-blue-700" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>A mobile app for tracking fitness activities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developed a cross-platform mobile app using React Native. Integrated with various fitness tracking
                    APIs to provide comprehensive data visualization and analysis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-blue-500 hover:text-blue-700" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2023 John Doe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-gray-300" href="#">
              Download Resume
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
