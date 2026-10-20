export interface User {
name: string,
      lastNmae: string,
      email: string,
      gender: Gender,
      country: Country,
      comment: string,
      agree: boolean;
}

type Gender = 'male' | 'female';
type Country = 'ru' | 'us' | 'cn';
