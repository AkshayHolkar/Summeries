interface Book
{
  id:number;
  description:string;
  author:string;
  rate?:number;
  dateStart?: Date;
  dateRead?: Date;
}
