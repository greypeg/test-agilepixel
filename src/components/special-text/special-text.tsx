"use-client"

export const SpecialText: React.FC<{ text: string }> = ({ text }) => {

    return (
        <div className="text-white bg-none opacity-70 text-5xl -rotate-90 ">
            <span>{text}</span>
        </div>
    );
}