import Navigation from "../../features/navigation";
import usePages from "../../hooks/usePages";

export default function Page() {
  const pagesNavigationData = usePages();
  return (
    <>
      <Navigation navData={pagesNavigationData} />
    </>
  );
}
