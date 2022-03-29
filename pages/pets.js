// import Image from "next/image";
import Pet1 from "../public/1.jpg";

const Pets = () => {
    return (
        <div>
            <h1>Pets</h1>
            {/* <Image src={Pet1} placeholder="blur" />
            {
                [1, 2, 3, 4, 5].map(path => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpg`} alt="pets" width="280" height="400"/ >
                        </div>
                    ) 
                })
            } */}
        </div>
    )
}

export default Pets;