import { IDestination } from "@/types/IDestination";


export async function listUsers(): Promise<IDestination[]>{

  const response = await fetch("http://localhost:5000/destinations")
  const body = await response.json()

  return body as IDestination[];
}
