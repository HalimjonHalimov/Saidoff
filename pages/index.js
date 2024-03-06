
import { Accordion, Assistance, Company, Footer, Header, Layout, Partner, Questions, Slider } from "@/components";



export default function Home() {
  return (
    <Layout>
      <Header />
      <Assistance />
      <Company />
      <Slider />
      <Partner />
      <Questions />
    </Layout>
  );
}
