import { swrFetcher } from "#lib/axios.interceptor"
import useSWRImmutable from "swr/immutable"
import type { Driver } from "./useDrivers"

export type Trip = {
  id: number
  driver: Driver
  driver_name: string
  passenger: Passenger
  tripID: string
  tripFee: number
  driversEarning: number
  startedFrom: string
  startedFromLat: string
  startedFromLong: string
  startingTime: Date
  currentLocationLat: string
  currentLocationLong: string
  destination: string
  destinationLat: string
  destinationLong: string
  lastChecked: Date
  tripStatus: string
  createdAt: Date
  updatedAt: Date
}

export type Passenger = {
  id: number
  userID: string
  name: string
  email: string
  phone: string
}

export const useTrips = () => {
  const { data, isLoading, mutate } = useSWRImmutable("get-trips", swrFetcher)

  const refetch = () => {
    mutate(data?.data)
  }

  return {
    trips: data?.data as Trip[],
    isLoading,
    refetch,
  }
}

export const useTrip = (tripID: string) => {
  const { data, isLoading, mutate } = useSWRImmutable(
    `get-trips/${tripID}`,
    swrFetcher,
    {
      isPaused: () => !tripID,
    },
  )

  const refetchTrip = () => {
    mutate(data?.data)
  }

  return {
    trip: data?.data as Trip,
    isLoading,
    refetchTrip,
  }
}
