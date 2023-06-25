'use client'

function Heading({title,subtitle,center}) {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className={"font-semibold text-2xl py-1"}>
                {title}
            </div> <div className={" text-sm py-1 text-gray-500"}>
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;