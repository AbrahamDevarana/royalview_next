import S3Client from '@/libs/s3client'
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'


interface Props {
    file?: File
    files?: File[]
    folder: string
}

const bucket = process.env.AWS_BUCKET_NAME as string
const folderRoot = process.env.AWS_STORAGE_FOLDER as string
const aws_region = process.env.AWS_REGION as string

const uploadFile = async ({file, folder}: Props) => {

    if(!file) return ''


    try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
    
        const fileName = `${Date.now()}-${file.name}`
    
    
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME as string,
            Key: `${folderRoot}/${folder}/${fileName}`,
            Body: buffer,
            ACL: 'public-read',
            ContentType: file.type
        })
    
            const response = await S3Client.send(command)
            if(response.$metadata.httpStatusCode === 200) {
                return `${folderRoot}/${folder}/${fileName}`
            } else {
                return ''
            }

    } catch (error) {
        console.error('Error:', error)
        return ''
    }
    
  
}



const deleteFile = async ({fileName, folder}:{fileName: string, folder: string}) => {    
    try {
        const command = new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME as string,
            Key: fileName
    
        })

        const response = await S3Client.send(command)
        
        if(response.$metadata.httpStatusCode === 204) {            
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error:', error)
        return false
    }

}

const uploadFiles = async () => {

}


export {
    uploadFile,
    uploadFiles,
    deleteFile,
}