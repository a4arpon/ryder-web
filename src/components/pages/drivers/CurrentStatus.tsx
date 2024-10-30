import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import { Car, MapPinned } from "lucide-react"
import MapStatusComponent from "./MapStatusComponent"
import { useState } from "react"

export const CurrentTripStatus = ({ tripID }: { tripID: string }) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Current Trip</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <Car />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4 font-semibold">
          <p>Trip ID</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{tripID}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Trip Fee</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">$400.00</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Driver's Cut</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">$340.00</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Profit</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">$60.00</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Destination</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">New York</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Started From</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">Manhattan</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Starting Time</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{new Date().toLocaleTimeString()}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Last Checked</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{new Date().toLocaleTimeString()}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Trip Status</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">Way to Pick Up</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Booked At</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{new Date().toLocaleTimeString()}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

const startingLocation = { lat: 40.713051, lng: -74.007233 }
const destinationLocation = { lat: 40.78172919761992, lng: -73.9809106124907 }

export const CurrentLocationStatus = () => {
  const [currentLocation, setCurrentLocation] = useState(startingLocation)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Current Location</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <MapPinned />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <MapStatusComponent
          startingLocation={startingLocation}
          currentLocation={currentLocation}
          destinationLocation={destinationLocation}
        />
      </CardContent>
    </Card>
  )
}
