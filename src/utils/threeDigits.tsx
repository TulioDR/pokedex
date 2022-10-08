export default function threeDigits(id: number) {
   return id.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
   });
}
