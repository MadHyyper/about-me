import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import colorSplash from './assets/color-splash.png'
import photo from './assets/photo.webp'
import './App.css'

function App() {

  return (
    <>
      {/*Introduction*/}
      <div className="flex flex-col items-center pb-20">
        <h1 className="pb-5 font-semibold">About Me</h1>
        <img src={photo} alt="photo" className="max-h-150 pb-5"></img>
        <p className="text-xl max-w-2xl">I am a junior undergraduate software engineer at Iowa State University expected to graduate spring of 2027.
                                          I have experience with C, C#, Python, Java, Javascript, CSS, HTML, and PHP as well as other experience with
                                          other skills like embedded systems programming, web development, and game development.
        </p>
      </div>

      {/*Projects*/}
      <div className="flex flex-col items-center gap-5 pb-20">
        <h1 className="pb-5 font-semibold">Projects</h1>

        {/*Color Splash*/}
        <div className="w-2xl bg-gray-600 rounded-lg shadow-md flex flex-col justify-center pl-5 pr-5 pt-5 pb-5">
          <h2 className="font-semibold pb-5">Color Splash</h2>
          <img src={colorSplash} className="pb-5"></img>
          <p className="text-lg">A small game made for a class project with 4 others. Color Splash is a platformer
                                  game made in the Godot game engine. The objective of the game is to get the player
                                  to the end of each level. The primary mechanic is the paint buckets, which allow
                                  the player to change colors and pass through walls of the same color (ie, red 
                                  lets you pass through red and blue lets you pass through blue).
          </p>
        </div>

        <p className="text-lg">More to be added in the future!</p>
      </div>

      {/*Contact*/}
      <div className="flex flex-col items-center">
        <h1 className="pb-5 font-semibold">Contact Me</h1>
        <p className="text-xl max-w-2xl pb-5">If you would like to contact me, you can reach me at the following emails:</p>
        <p className="text-xl max-w-2xl pb-2">cmh04@iastate.edu (school)</p>
        <p className="text-xl max-w-2xl pb-2">connermhoudek04@gmail.com (personal)</p>
      </div>
    </>
  )
}

export default App
