"use client"

type Props = {
    error: Error;
    reset: () => void;
};

const Error = ({error, reset}: Props) => {
    return (
        <div>
            <h2>ПОМИЛКА ПРИ ЗАВАНТАЖЕННІ</h2>
            <p>{error.message}</p>
            <button onClick={reset}>СПРОБУВАТИ ЗНОВУ</button>
        </div>
    );
}

export default Error