export function formatNumberSeparator(number: number = 0,locale: string = "id-ID",maximumFractionDigits: number = 2): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    maximumFractionDigits: maximumFractionDigits,
    useGrouping: true,
  });

  return formatter.format(number);
}


export function formatToRupiah(number?: number): string {
  if (!number) return "0";

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0,
  });

  return formatter.format(number);
}
