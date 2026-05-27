export default async function Page({
    params
} : {
    params: Promise<{ id: string}>
}) {
    const { id } = await params;

  return <h1>Event view page with id = {id}</h1>
}