/** Status ladder shared by every badge on the page.
 *  live    shipped and running        green,  solid dot
 *  dated   has a ship date, orderable purple, ring dot
 *  planned no date committed          slate,  no dot */
export type Status = "live" | "dated" | "planned";
