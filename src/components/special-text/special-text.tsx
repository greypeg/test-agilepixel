"use-client"

export const SpecialText: React.FC<{ text: string }> = ({ text }) => {

    return (
        <span className="text-white bg-none font-normal opacity-70 md:text-8xl text-5xl">
         {text}
        </span>
    );
}