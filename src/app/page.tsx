import { HeroSection, LiveMatchCard, Metrics } from "@/components";
import TextCursor from "@/components/TextCursor";

export default function Home() {
  return (
    <div>
      <TextCursor
        text="🏀"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      >
        <HeroSection />
        <Metrics />
        <LiveMatchCard />
      </TextCursor>
    </div>
  );
}
