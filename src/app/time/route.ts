//caching in route-handlers, in Nextjs15
//caching only works with plain GET() methods
export const dynamic = "force-static";
export const revalidate = 10; //only changed after 10 secs, but in the BG

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
