import Container from "../../components/Container";
import SearchBar from "./Searchbar/SearchBar";

type Props = {};

export default function Navbar({}: Props) {
   // const goBack = () => {
   //    router.push("/", undefined, { scroll: true });
   //    // router.back();
   // };
   return (
      <div className="w-full text-white sticky top-0 z-30">
         <Container>
            <div className="w-full flex items-center justify-between py-4">
               <div className="text-3xl font-semibold w-1/3">Pokédex</div>
               <SearchBar />
               <div className="flex items-center justify-end space-x-7 w-1/3">
                  <div>Home</div>
                  <div>Favorites</div>
               </div>
            </div>
         </Container>
      </div>
   );
}
