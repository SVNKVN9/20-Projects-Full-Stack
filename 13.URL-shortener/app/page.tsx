'use client'
import { ChangeEvent, useState } from "react";

export default function Home() {
    const [url, setUrl] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const isUrlValid = (userInput: string) => {
        const res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return res != null
    }

    const onSubmit = async () => {
        if (!isUrlValid(url)) return setError(true)
        else setError(false)

        const result = await fetch('/api/url', {
            method: "POST",
            body: JSON.stringify({ url })
        })

        
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-zinc-700 font-medium text-3xl">Paste the URL</h3>
                <div className="flex my-3">
                    <input
                        type="text"
                        id=""
                        placeholder="Enter the link here"
                        className="border border-stone-400 px-3 py-2 rounded-lg w-96"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button className="bg-blue-600 px-3 py-2 rounded-lg ml-3" onClick={onSubmit}>Shorten URL</button>
                </div>
                {
                    error ? <p className="w-1/2 bg-red-600 text-center py-3 rounded-2xl">
                        The url format not correct
                    </p> : <></>
                }
                <p>
                    ShortURL is a free tool to shorten URLs and generate short links
                </p>
                <p>
                    URL shortener allows to create a shortened link making it easy to share
                </p>
            </div>
        </div>
    );
}
