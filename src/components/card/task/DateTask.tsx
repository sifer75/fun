import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { DateRange } from "react-day-picker";

interface DateTaskProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}
const DateTask = React.forwardRef<HTMLButtonElement, DateTaskProps>(
  ({ date, setDate }, ref) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-2/3 border rounded-lg justify-start text-left font-normal p-2 z-50",
              !date && "text-muted-foreground"
            )}
            ref={ref}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

export default DateTask;
