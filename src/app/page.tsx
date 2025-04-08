import { Submenu } from "@/components/home/submenu";
import { HomeProps } from "@/shemas/home";
import { getDataHome } from "@/utils/actions/get-data";

export default async function Home() {
  const {object}: HomeProps = await getDataHome();
  console.log(object.title);

  return (
    <main>
      <Submenu />
    </main>
  );
}
