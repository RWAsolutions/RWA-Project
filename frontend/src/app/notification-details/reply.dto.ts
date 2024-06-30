export interface ReplyDto {
  userID: number;
  notificationID: number;
  content: string;
  dateAdded: string;
  studentName: string | null;
  studentSurname: string | null;
  profesorName: string | null;
  profesorSurname: string | null;
}
