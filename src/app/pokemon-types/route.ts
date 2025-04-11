//caching in Nextjs15
//caching only works with plain GET() methods
export const dynamic = "force-static";
export const revalidate = 20; //only changed after 20 secs, but in the BG

export async function GET() {
  //This would usually come from a DB.
  const pokemonTypes = [
    { id: 1, type: "Grass-type 🌿" },
    { id: 2, type: "Fire-type 🔥" },
    { id: 3, type: "Water-type 💦" },
    { id: 4, type: "Fighting-type 🥊" },
  ];
  return Response.json(pokemonTypes);
}
