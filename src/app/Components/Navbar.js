// import "./Navbar.css";
import dark from "../../../public/OnlyBees_dark.svg";
import light from "../../../public/OnlyBees_light.svg";
import Image from "next/image"

const Navbar = (props) => {
    return (
        <div className={`nav border-b border-solid ${props.mode=="dark"?"border-white":"border-black"} lg:mx-10 py-7 mx-5`}>
            <Image
                src={(props.mode=="dark")?light:dark}
                width={180}
                height="auto"
                alt="OnlyBees logo"
            />
        </div>
    )
}

export default Navbar;