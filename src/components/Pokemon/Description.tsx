type Props = {
   description: string;
};

export default function Description({ description }: Props) {
   return (
      <div className="p-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg text-white">
         <h2 className="text-3xl">Description</h2>
         <p className="text-lg my-1">{description}</p>
      </div>
   );
}
