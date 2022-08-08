const Card = ({ img, name }) => {
    return (
        <div className="flex h-24 w-11/12 items-center justify-start m-3 bg-[#FEFFFE] border-b-2">
            <img className="h-16 w-16 mr-2 rounded-full" src={img} alt='/' loading="lazy" />
            <div className="h-auto max-w-full">
                <div>{name}</div>
                <div>Let's catch up over the dinner.</div>
            </div>
        </div>
    )
}

export default Card