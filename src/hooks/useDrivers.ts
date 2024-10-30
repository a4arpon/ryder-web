import { swrFetcher } from "#lib/axios.interceptor"
import useSWRImmutable from "swr/immutable"

export type Driver = {
  id: number
  driverID: string
  name: string
  email: string
  phone_number: string
  driving_license: string | null
  balance: number
  last_trip_location: google.maps.LatLngLiteral | null
  today_started_at: google.maps.LatLngLiteral | null
  last_trip_end_at: google.maps.LatLngLiteral | null
  status: string
  trip_status: string | null
}

export const useDrivers = () => {
  const { data, isLoading, mutate } = useSWRImmutable("get-drivers", swrFetcher)

  const refetch = () => {
    mutate(data?.data)
  }

  return {
    drivers: data?.data as Driver[],
    isLoading,
    refetch,
  }
}

export const useDriver = (driverID: string) => {
  const { data, isLoading, mutate } = useSWRImmutable(
    `get-drivers/${driverID}`,
    swrFetcher,
    {
      isPaused: () => !driverID,
    },
  )

  const refetchDriver = () => {
    mutate(data?.data)
  }

  return {
    driver: data?.data as Driver,
    isLoading,
    refetchDriver,
  }
}
