const Profile = ({ img, name }) => {
    return (
        <div className="m-3 flex flex-col items-center justify-center">
            <img className="h-16 w-16 rounded-full max-w-none" src={img} alt='/' loading="lazy" />
            <span className="text-[#77797E] text-clip whitespace-nowrap">{name}</span>
        </div>
    )
}

export default Profile