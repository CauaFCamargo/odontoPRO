"use server"

import { Plan } from "@/src/generated/prisma/enums"
import { PlansProps } from "@/src/utils/plans"

export interface PlanDetailInfo{
    maxServices: number;
}

const PLANS_LIMITS: PlansProps = {
  BASIC: {
    maxServices: 3,
  },
  PROFESSIONAL: {
    maxServices: 50
  }
}

export async function getPlan(planId: Plan) {
  return PLANS_LIMITS[planId]
}

