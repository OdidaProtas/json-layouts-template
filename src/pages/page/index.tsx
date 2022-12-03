import Navigation from "../../features/navigation";
import usePages from "../../hooks/usePages";

export default function Page() {
  const pagesNavigationData = usePages();
  console.log(pagesNavigationData)
  return (
    <>
      <Navigation navData={pagesNavigationData} />
    </>
  );
}
