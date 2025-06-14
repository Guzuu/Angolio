export interface FamilyMember {
    id?: string;
    name: string;
    surname: string;
    birthDate?: Date | string;  // Can be full date or year string
    deathDate?: Date | string;  // Can be full date or year string
    marriageDate?: Date | string;  // Can be full date or year string
    gender: 'male' | 'female';
    motherId?: string;
    fatherId?: string;
    additionalInfo?: string;
    imageUrl?: string;
}
