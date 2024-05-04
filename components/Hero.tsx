import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <h1>
        Moni <span className="text-accent">Post</span>
      </h1>
      <p>
        Optimize Corporate Driving Posture, Minimize Accidents with Our
        Solution.
      </p>
      <Link href="/posts">See More</Link>
    </div>
  );
};

export default Hero;
