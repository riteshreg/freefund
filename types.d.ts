interface InitialCreateState{
    province:string;
    district:string;
    municipality:string;
    ward:string;
    fundFor:string;
    goal:string;
    firstName:string;
    lastName:string;
    password:string;
    mobileNumber:string;
    wardCertificate:string;
    bankcheque:string;
    profilePicture:string;
    thumbnailPicture:string;
    isVerified:false;
    [key:string]: string|boolean
}
