import { MapPin } from "lucide-react";

const AboutSection = () => {
    return (
        <div className=" container grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="hidden items-center justify-center lg:flex">
                <img
                    className="rounded-md shadow-lg shadow-primary/70"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <span className="text-2xl font-bold">
                        A passionate Full-stack Developer Based in
                        <div className="flex items-center text-primary">
                            <span>malmo, Sweden</span>
                            <MapPin />
                        </div>
                    </span>
                </div>

                <p className="tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quod
                    optio alias error fuga enim nam obcaecati voluptatum id quibusdam.
                    Porro aliquid ducimus repudiandae, perferendis repellendus doloremque
                    tenetur fugiat. Enim rem voluptatem vitae necessitatibus accusantium
                    maxime rerum quidem voluptatibus reprehenderit culpa, eveniet fuga
                    recusandae repudiandae aliquam delectus? Deserunt atque temporibus ab
                    magnam maiores itaque doloribus voluptatum, veniam earum asperiores
                    blanditiis aspernatur placeat ducimus beatae, accusamus repellat!
                    Fugiat dicta laborum debitis consequuntur quos? Aspernatur ullam
                    tempora rem animi quae aut blanditiis nostrum sint vitae accusantium
                    quo exercitationem natus iste deleniti modi, vero, perferendis
                    veritatis quibusdam dignissimos porro quasi numquam! Vel,
                    consequuntur?
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
