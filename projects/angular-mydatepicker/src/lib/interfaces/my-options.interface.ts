import { DefaultView } from "../enums/default-view.enum";
import { Year } from "../enums/year.enum";
import { IMyCalendarAnimation } from "./my-calendar-animation.interface";
import { IMyDateRange } from "./my-date-range.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyDisabledDates } from "./my-disabled-dates.interface";
import { IMyDivHostElement } from "./my-div-host-element.interface";
import { IMyMarkedDate } from "./my-marked-date.interface";
import { IMyMarkedDates } from "./my-marked-dates.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyStyles } from "./my-styles.interface";

export interface IMyOptions {
  dateRange?: boolean;
  inline?: boolean;
  dayLabels?: IMyDayLabels;
  monthLabels?: IMyMonthLabels;
  dateFormat?: string;
  defaultView?: DefaultView;
  firstDayOfWeek?: string;
  satHighlight?: boolean;
  sunHighlight?: boolean;
  highlightDates?: Array<IMyDate>;
  markCurrentDay?: boolean;
  markCurrentMonth?: boolean;
  markCurrentYear?: boolean;
  monthSelector?: boolean;
  yearSelector?: boolean;
  disableHeaderButtons?: boolean;
  showWeekNumbers?: boolean;
  selectorHeight?: string;
  selectorWidth?: string;
  disableUntil?: IMyDate;
  disableSince?: IMyDate;
  disableDates?: Array<IMyDate> | Array<IMyDisabledDates>;
  disableDateRanges?: Array<IMyDateRange>;
  disableWeekends?: boolean;
  disableWeekdays?: Array<string>;
  enableDates?: Array<IMyDate>;
  markDates?: Array<IMyMarkedDates>;
  markWeekends?: IMyMarkedDate;
  alignSelectorRight?: boolean;
  openSelectorTopOfInput?: boolean;
  closeSelectorOnDateSelect?: boolean;
  closeSelectorOnDocumentClick?: boolean;
  minYear?: Year | number;
  maxYear?: Year | number;
  showSelectorArrow?: boolean;
  appendSelectorToBody?: boolean;
  focusInputOnDateSelect?: boolean;
  moveFocusByArrowKeys?: boolean;
  dateRangeDatesDelimiter?: string;
  inputFieldValidation?: boolean;
  showMonthNumber?: boolean;
  todayTxt?: string;
  showFooterToday?: boolean;
  calendarAnimation?: IMyCalendarAnimation;
  viewChangeAnimation?: boolean;
  rtl?: boolean;
  stylesData?: IMyStyles;
  divHostElement?: IMyDivHostElement;
  ariaLabelPrevMonth?: string;
  ariaLabelNextMonth?: string;
}

export interface IAngularMyDpOptions extends IMyOptions {}
