import { LargeContainer } from "../components/LargeContainer";
import { Wrapper } from "../components/Wrapper";
import { Banner } from "../components/Banner";

export function MainPage() {
  return (
    <Wrapper>
      <Banner />
      <LargeContainer />
    </Wrapper>
  );
}