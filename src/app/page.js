import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
   
    <div className="flex items-center border-e-red-500 relative h-screen w-full overflow-hidden">
      <div className="relative z-0 font-bold">
        <ScrollVelocity />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Lanyard />
      </div>
    </div>
  );
}
