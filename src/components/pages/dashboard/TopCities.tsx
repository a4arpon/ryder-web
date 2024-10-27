import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "#components/ui/chart"
import { ArrowUpNarrowWide, } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"




export const description = "A bar chart"

const chartData = [
  { cityName: "New York", trips: 7502 },
  { cityName: "Los Angeles", trips: 6502 },
  { cityName: "Chicago", trips: 5502 },
  { cityName: "Houston", trips: 4502 },
  { cityName: "Phoenix", trips: 3502 },
  { cityName: "San Francisco", trips: 5502 },
  { cityName: "Seattle", trips: 4502 },
  { cityName: "Austin", trips: 3502 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },


} satisfies ChartConfig




const TopCities = () => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center">
          Top Cities For Trips
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <ArrowUpNarrowWide size={24} />
          </Badge>
        </CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="cityName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="trips" fill="var(--color-desktop)" radius={8} >
              <LabelList dataKey="trips" position="top" offset={5} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TopCities