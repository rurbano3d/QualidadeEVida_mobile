import { format, parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const formatDate = (value) => {
  if (!value) return null;
  const dateFormatted = formatDistance(parseISO(value), new Date(), {
    addSuffix: true,
    locale: pt,
  });

  return dateFormatted;
};

export const formatDatePure = (value) => {
  if (!value) return null;
  const dateFormatted = format(value, 'dd/MM/yyyy');

  return dateFormatted;
};

export const formatDateParse = (value) => {
  if (!value) return null;
  const dateFormatted = format(parseISO(value), 'dd/MM/yyyy');

  return dateFormatted;
};
