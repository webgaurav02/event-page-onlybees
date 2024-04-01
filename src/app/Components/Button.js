import Link from 'next/link'
import arrow from "../../public/arrow.svg";
import Image from "next/image";
import "./Button.css"

const Button = (props) => {
    return (
        <Link
            href={props.link}
            // target="_blank"
            passHref
            className="lg:text-center text-left mb-2"
        >
            <button role="button" className=" btn py-2 pt-2">
                <span>Book Now</span>
                <span className="arrow-container">
                    <Image priority src={arrow} alt="Arrow" />
                </span>
            </button>
        </Link>
    )
}

export default Button