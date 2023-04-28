interface Props{
    limitWidth?:boolean
}

export default function HorizontalLine({limitWidth}:Props){
    return(
        <div className={`${limitWidth && 'max-w-[95%]'}`}>
            <hr  className="border-t border-gray-400 my-8"/>
        </div>
        )
}