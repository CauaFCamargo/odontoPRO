import getSession from "@/lib/getSession"
import { redirect } from "next/navigation"
import { GridPlans } from "./_components/grid-plans"
import { getSubscriptions } from "@/src/utils/get-subscription"



export default async function Plans() {
  const session = await getSession()

  if (!session) {
    redirect("/")
  }

  const subscription = await getSubscriptions({userId: session?.user?.id})

  return (
    <div>
        {subscription?.status !== "active" && (
          <GridPlans/>
        )}

        {subscription?.status === "active" && (
          <h1>Voce tem uma assinatura ativa</h1>
        )}
    </div>
  )
}