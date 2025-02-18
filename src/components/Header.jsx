'use client'
import { useState } from 'react'


const Header = () => {
    const [color, setColor] = useState('text-black-600')


    return(
        <>
            <h1 class={`${color}`}>This is Diane's World</h1>
            <form>
                <label>
                    Mood Today
                </label>
                <select id="drop_down_mood" name="Choose Mood" placeholder="Choose" onChange={(e) => setColor(e.target.value)}>
                    <option value="text-fuchsia-400">Pink</option>
                    <option value="text-cyan-400">Blue</option>
                    <option value="text-emerald-400">Green</option>
                </select>
            </form>
        </>
    )
}

export default Header