import {
  CalendarData,
  CalendarType,
  validTypes,
} from '@/app/api/data/calendar/route'
import CalcomEmbed from '@/components/calcom-embed'
import CalendarDetails from '@/components/calendar/calendar-details'
import CalendarHeader from '@/components/calendar/calendar-header'
import CalendarSection from '@/components/calendar/calendar-section'
import { getCalendarData } from '@/utils'
import { notFound } from 'next/navigation'

interface CalendarTypePageProps {
  params: {
    type: CalendarType
  }
}

export default async function CalendarTypePage({
  params: { type: calendarType },
}: CalendarTypePageProps) {
  if (!validTypes.includes(calendarType)) {
    return notFound()
  }

  try {
    const calendarData = (await getCalendarData(calendarType)) as CalendarData

    if (!calendarData) {
      return notFound()
    }

    return (
      <div className="lg:space-y-36">
        <CalendarHeader data={calendarData} />
        <CalendarSection showHeadline={false} showDetails={false} />
        <CalcomEmbed type={calendarType} />
        <CalendarDetails data={calendarData} />
      </div>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
