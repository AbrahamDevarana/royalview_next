import { S3 } from "@aws-sdk/client-s3"


const region = process.env.AWS_REGION as string
const accessKeyId = process.env.AWS_ACCESS_KEY_ID as string
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string
const endpoint = process.env.AWS_ENDPOINT as string


const S3Client = new S3({ 
    region, 
    credentials: {
        accessKeyId,
        secretAccessKey
    },
    endpoint,
    forcePathStyle: false
})

export default S3Client
