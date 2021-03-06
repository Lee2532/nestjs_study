export interface UserData {
    username: string;
    email: string;
    token?: string;
    bio?: string;
    image?: string;
    uuid : string;
    create_date : Date;
  }
  
  export interface UserRO {
    user: UserData;
  }