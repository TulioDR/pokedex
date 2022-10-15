type Props = {};

export default function Loading({}: Props) {
   return (
      <div className="flex items-center justify-center h-12">
         <div className="lds-ellipsis h-full">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}
