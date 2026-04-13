// lib/permissions.ts
// import { Role } from "../context/UserContext";

// export const permissions: Record<string, Role[]> = {
//   browseBooks: ["STUDENT", "AUTHOR", "PRESS", "BOOKSHOP", "ADMIN"],
//   purchaseBook: ["STUDENT"],
//   reserveTitle: ["AUTHOR"],
//   confirmTitle: ["PRESS"],
//   modifyPrice: ["AUTHOR", "BOOKSHOP", "ADMIN"],
//   publishBook: ["BOOKSHOP", "ADMIN"],
  // viewReports: ["AUTHOR", "PRESS", "BOOKSHOP", "ADMIN"], // "Limited" for Author
//   manageUsers: ["ADMIN"],
// };

// export function canPerform(role: Role, action: keyof typeof permissions): boolean {
//   return permissions[action].includes(role);
// }
