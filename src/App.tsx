import { useEffect, useRef } from 'preact/hooks'
import classes from './App.module.css'

export function App() {
    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvas.current) return
        const context = canvas.current.getContext('2d')!
        const image = context.getImageData(0, 0, 100, 100)
        console.log(image.data.length)
        const randomPaint = () => {
            for (let i = 0; i < 100000; i++)
                image.data[Math.floor(Math.random() * image.data.length)] = Math.random() * 128
            requestAnimationFrame(() => {
                console.log('here')
                randomPaint()
            })
        }

        randomPaint()

        context.putImageData(image, 0, 0)
    }, [])

    return (
        <div class={classes.root}>
            <header></header>
            <main>
                <canvas ref={canvas} />
            </main>
        </div>
    )
}
