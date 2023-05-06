export function GetBucketNameForCreateFund(title:string){
    switch(title){
        case 'thumbnailPicture':{
            return 'fund_request_thumbnail_bucket'
        }
        default: return 'fund_request_bucket'
    }
}